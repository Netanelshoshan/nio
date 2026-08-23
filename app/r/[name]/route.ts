import { loadRegistryItem, RegistryItemNotFoundError } from "shadcn/registry"
import { json, OPTIONS } from "../http"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export { OPTIONS }

function itemName(raw: string) {
  return raw.replace(/\.json$/, "")
}

export async function GET(
  _request: Request,
  context: {
    params: Promise<{
      name: string
    }>
  }
) {
  const { name: rawName } = await context.params
  const name = itemName(rawName)

  try {
    const item = await loadRegistryItem(name)
    return json(item)
  } catch (error) {
    if (error instanceof RegistryItemNotFoundError) {
      return json({ error: `Registry item "${name}" was not found.` }, 404)
    }

    console.error(error)
    return json({ error: "Failed to load registry item." }, 500)
  }
}
