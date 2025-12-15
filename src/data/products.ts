import { db } from '@/db'
import { products } from '@/db/schema'

export async function getRecommendedProducts() {
  try {
    const productsData = await db.select().from(products).limit(3)
    return productsData
  } catch (error) {
    console.error('Error getting recommended products:', error)
    return []
  }
}
