#!/usr/bin/env node
/**
 * Strip source maps and sourceMappingURL comments from production output so
 * original TypeScript/JSX is not shipped in builds or static exports.
 *
 * Next.js keeps server maps on disk by default (prerender/server source maps)
 * even when browser maps are off. Those files are not meant to be public, but
 * they still leak full source if the artifact is copied, exported, or mis-served.
 */
import { readdir, readFile, stat, unlink, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const SOURCE_MAP_COMMENT =
  /(?:\/\/[#@][ \t]*sourceMappingURL=[^\s]+[ \t]*|\/\*[#@][ \t]*sourceMappingURL=[\s\S]*?\*\/)/g

const GENERATED_OUTPUT_DIRS = [
  ".next/static",
  ".next/server",
  ".next/build",
  ".next/standalone",
  "out",
]

const PUBLIC_DIR = "public"

const PUBLIC_FORBIDDEN_EXTENSIONS = new Set([
  ".map",
  ".ts",
  ".tsx",
  ".mts",
  ".cts",
  ".jsx",
])

const STRIPPABLE_EXTENSIONS = new Set([".js", ".mjs", ".cjs", ".css"])

async function pathExists(target) {
  try {
    await stat(target)
    return true
  } catch {
    return false
  }
}

async function walkFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)))
      continue
    }
    if (entry.isFile()) {
      files.push(fullPath)
    }
  }

  return files
}

function isSourceMapFile(filePath) {
  return filePath.endsWith(".map")
}

async function stripSourceMappingUrls(filePath) {
  const original = await readFile(filePath, "utf8")
  const stripped = original.replace(SOURCE_MAP_COMMENT, "")
  if (stripped === original) {
    return false
  }
  await writeFile(filePath, stripped)
  return true
}

async function collectPublicLeaks(dir) {
  if (!(await pathExists(dir))) {
    return []
  }

  const files = await walkFiles(dir)
  return files.filter((filePath) =>
    PUBLIC_FORBIDDEN_EXTENSIONS.has(path.extname(filePath).toLowerCase())
  )
}

export async function guardProductionOutput({
  root = projectRoot,
  log = console,
} = {}) {
  let removedMaps = 0
  let strippedComments = 0

  for (const relativeDir of GENERATED_OUTPUT_DIRS) {
    const dir = path.join(root, relativeDir)
    if (!(await pathExists(dir))) {
      continue
    }

    const files = await walkFiles(dir)
    for (const filePath of files) {
      if (isSourceMapFile(filePath)) {
        await unlink(filePath)
        removedMaps += 1
        continue
      }

      if (STRIPPABLE_EXTENSIONS.has(path.extname(filePath).toLowerCase())) {
        if (await stripSourceMappingUrls(filePath)) {
          strippedComments += 1
        }
      }
    }
  }

  const remainingClientMaps = []
  for (const relativeDir of [".next/static", "out", ".next/standalone/.next/static"]) {
    const dir = path.join(root, relativeDir)
    if (!(await pathExists(dir))) {
      continue
    }
    remainingClientMaps.push(
      ...(await walkFiles(dir)).filter((filePath) => isSourceMapFile(filePath))
    )
  }

  const remainingSourceMappingUrls = []
  for (const relativeDir of [".next/static", "out"]) {
    const dir = path.join(root, relativeDir)
    if (!(await pathExists(dir))) {
      continue
    }
    for (const filePath of await walkFiles(dir)) {
      if (!STRIPPABLE_EXTENSIONS.has(path.extname(filePath).toLowerCase())) {
        continue
      }
      const contents = await readFile(filePath, "utf8")
      if (contents.includes("sourceMappingURL=")) {
        remainingSourceMappingUrls.push(path.relative(root, filePath))
      }
    }
  }

  const publicLeaks = (await collectPublicLeaks(path.join(root, PUBLIC_DIR))).map(
    (filePath) => path.relative(root, filePath)
  )

  log.info?.(
    `Production output guard: removed ${removedMaps} source map(s), stripped ${strippedComments} sourceMappingURL comment(s).`
  )

  const failures = []
  if (remainingClientMaps.length > 0) {
    failures.push(
      `Client-facing source maps still present:\n${remainingClientMaps
        .map((filePath) => `  - ${path.relative(root, filePath)}`)
        .join("\n")}`
    )
  }
  if (remainingSourceMappingUrls.length > 0) {
    failures.push(
      `sourceMappingURL comments still present in client assets:\n${remainingSourceMappingUrls
        .map((filePath) => `  - ${filePath}`)
        .join("\n")}`
    )
  }
  if (publicLeaks.length > 0) {
    failures.push(
      `public/ must not contain source or source-map files:\n${publicLeaks
        .map((filePath) => `  - ${filePath}`)
        .join("\n")}`
    )
  }

  if (failures.length > 0) {
    throw new Error(failures.join("\n\n"))
  }
}

const isDirectRun = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false

if (isDirectRun) {
  try {
    await guardProductionOutput()
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  }
}
