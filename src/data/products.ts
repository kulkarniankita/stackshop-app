import { db } from '@/db'
import { products } from '@/db/schema'
import type { ProductInsert, ProductSelect } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getAllProducts() {
  try {
    const productsData = await db.select().from(products)
    return productsData
  } catch (error) {
    console.error('Error getting all products:', error)
    return []
  }
}

export async function getRecommendedProducts() {
  try {
    const productsData = await db.select().from(products).limit(3)
    return productsData
  } catch (error) {
    console.error('Error getting recommended products:', error)
    return []
  }
}

export async function getProductById(id: string) {
  try {
    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, id))
      .limit(1)
    return product?.[0] ?? null
  } catch (error) {
    console.error('Error getting product by id:', error)
    return null
  }
}

export async function createProduct(
  data: ProductInsert,
): Promise<ProductSelect> {
  try {
    const result = await db.insert(products).values(data).returning()
    const product = result[0]
    if (!product) {
      throw new Error(
        'Failed to create product: no product returned from database',
      )
    }

    return product
  } catch (error) {
    console.error('Error creating product', error)
    throw error
  }
}

export const sampleProducts: ProductInsert[] = [
  {
    name: 'TanStack Router Pro',
    description:
      'The most powerful routing solution for React. Built with TypeScript, featuring type-safe routes, code splitting, and server-side rendering.',
    price: '99.99',
    badge: 'New',
    rating: '4.8',
    reviews: 127,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
  },
  {
    name: 'TanStack Query Enterprise',
    description:
      'Powerful data synchronization for React. Fetch, cache, and update server state with zero configuration.',
    price: '149.99',
    badge: 'New',
    rating: '4.9',
    reviews: 234,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
  },
  {
    name: 'TanStack Table Premium',
    description:
      'Headless UI for building powerful tables and datagrids. Fully customizable and framework agnostic.',
    price: '79.99',
    badge: 'New',
    rating: '4.7',
    reviews: 89,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
  },
  {
    name: 'TanStack Start Framework',
    description:
      'Full-stack React framework with file-based routing, server components, and built-in optimizations.',
    price: '199.99',
    rating: '4.6',
    reviews: 156,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
  },
  {
    name: 'TanStack Form Builder',
    description:
      'Headless form library with validation, async submission, and field-level control. Perfect for complex forms.',
    price: '59.99',
    rating: '4.5',
    reviews: 78,
    image: '/tanstack-circle-logo.png',
    inventory: 'backorder',
  },
  {
    name: 'TanStack Virtual Scroller',
    description:
      'High-performance virtual scrolling for large lists. Smooth scrolling with minimal memory footprint.',
    price: '49.99',
    rating: '4.4',
    reviews: 92,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
  },
  {
    name: 'TanStack DevTools Suite',
    description:
      'Complete developer tools for debugging TanStack applications. Time-travel debugging and performance profiling.',
    price: '129.99',
    rating: '4.7',
    reviews: 145,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
  },
  {
    name: 'TanStack Store Manager',
    description:
      'Lightweight state management with derived state, subscriptions, and persistence. Perfect for React apps.',
    price: '39.99',
    rating: '4.3',
    reviews: 67,
    image: '/tanstack-circle-logo.png',
    inventory: 'preorder',
  },
]
