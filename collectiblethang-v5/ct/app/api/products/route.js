import { NextResponse } from 'next/server'
import { getProducts, getCategories } from '../../../lib/products'

export const dynamic = 'force-dynamic'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const action = searchParams.get('action')
  
  if (action === 'categories') {
    const categories = await getCategories()
    return NextResponse.json({ categories })
  }
  
  const category = searchParams.get('category') || ''
  const search = searchParams.get('search') || ''
  const sort = searchParams.get('sort') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const perPage = parseInt(searchParams.get('perPage') || '36')
  
  const result = await getProducts({ category, search, sort, page, perPage })
  return NextResponse.json(result)
}
