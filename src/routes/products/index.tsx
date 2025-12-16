import { ProductCard } from '@/components/ProductCard'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { createMiddleware, createServerFn, json } from '@tanstack/react-start'

const fetchProducts = createServerFn({ method: 'GET' }).handler(async () => {
  // Map products to ensure all fields match ProductCard expectations
  const { getAllProducts } = await import('@/data/products')
  const data = await getAllProducts()

  return data
})

const loggerMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    console.log(
      '---loggerMiddleware---',
      request.url,
      'from',
      request.headers.get('origin'),
    )
    return next()
  },
)

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
  loader: async () => {
    console.log('---loader--')
    return fetchProducts()
  },
  server: {
    middleware: [loggerMiddleware],
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json()
        return json({ message: 'Hello, world from POST request!', body })
      },
    },
  },
})

function RouteComponent() {
  const products = Route.useLoaderData()
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
    initialData: products,
  })
  console.log('---data--', data)
  return (
    <div className="space-y-6">
      <section className="space-y-4 max-w-6xl mx-auto">
        <Card className="p-6 shadow-md bg-white/80">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardHeader className="px-0">
                <p className="text-sm uppercase tracking-wide text-slate-500">
                  StartShop Catalog
                </p>
                <CardTitle className="text-2xl font-semibold">
                  Products built for makers
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-sm text-slate-600">
                Browse a minimal, production-flavoured catalog with TanStack
                Start server functions and typed routes.
              </CardDescription>
            </div>
          </div>
        </Card>
      </section>
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((product, index) => (
            <ProductCard key={`product-${index}`} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
