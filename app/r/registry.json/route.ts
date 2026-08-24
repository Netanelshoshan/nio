import { loadRegistry } from "shadcn/registry"
import { json, OPTIONS } from "../http"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export { OPTIONS }

export async function GET() {
  try {
    const registry = await loadRegistry()
    return json(registry)
  } catch (error) {
    console.error(error)
    return json({ error: "Failed to load registry." }, 500)
  }
}
