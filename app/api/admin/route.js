import { getAllAdmin, toggleProduct, getDisabledIds, setDisabledIds } from '../../../lib/products'

export async function GET() {
  return Response.json(getAllAdmin())
}

export async function POST(req) {
  const { action, id, disabledIds } = await req.json()
  if (action === 'toggle') {
    const enabled = toggleProduct(id)
    return Response.json({ id, enabled })
  }
  if (action === 'save') {
    setDisabledIds(disabledIds || [])
    return Response.json({ saved: true, disabledCount: disabledIds?.length || 0 })
  }
  return Response.json({ error: 'Unknown action' }, { status: 400 })
}
