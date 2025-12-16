import { RecommendedProducts } from '@/components/RecommendedProducts'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ProductSelect } from '@/db/schema'
import {
  createFileRoute,
  Link,
  notFound,
  useRouter,
} from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ArrowLeftIcon, ShoppingBagIcon, SparklesIcon } from 'lucide-react'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { mutateCartFn } from '../cart'
import { useQueryClient } from '@tanstack/react-query'

const fetchProductById = createServerFn({ method: 'POST' })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const { getProductById } = await import('@/data/products')
    const product = await getProductById(data.id)
    return product
  })

const fetchRecommendedProducts = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { getRecommendedProducts } = await import('@/data/products')
    return getRecommendedProducts()
  },
)

export const Route = createFileRoute('/products/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    // Use server functions to ensure server-only execution
    const product = await fetchProductById({ data: { id: params.id } })
    if (!product) {
      throw notFound()
    }
    // Return recommendedProducts as a Promise for Suspense
    const recommendedProducts = fetchRecommendedProducts()
    console.log('product', product)
    return { product, recommendedProducts }
  },
  head: async ({ loaderData: data }) => {
    const { product } = data as {
      product: ProductSelect
      recommendedProducts: Promise<ProductSelect[]>
    }
    console.log('product in head', product)
    if (!product) {
      return {}
    }
    return {
      meta: [
        { name: 'description', content: product?.description },
        { name: 'image', content: product?.image },
        { name: 'title', content: product?.name },
        {
          name: 'canonical',
          content:
            process.env.NODE_ENV === 'production'
              ? `https://stackshop-prod.appwrite.network/products/${product?.id}`
              : `http://localhost:3000/products/${product?.id}` ||
                `localhost:3000/products/${product?.id}`,
        },
        {
          title: product?.name,
        },
        {
          description: product?.description,
        },
      ],
    }
  },
})

function RouteComponent() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { product, recommendedProducts } = Route.useLoaderData()
  return (
    <div>
      <Card className="max-w-4xl mx-auto p-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <ArrowLeftIcon size={16} />
          Back to products
        </Link>

        <Card>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-4/3 overflow-hidden rounded-xl border bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="h-full w-full object-contain p-6"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4">
              <CardHeader className="flex items-start gap-2 flex-col">
                <CardTitle className="flex justify-start gap-2 text-left">
                  <h1 className="text-2xl font-semibold">{product?.name}</h1>

                  <div className="flex items-center gap-2">
                    {product?.badge && (
                      <span className="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-start flex-col space-y-4">
                <CardDescription className="text-lg">
                  {product?.description}
                </CardDescription>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">${product?.price}</span>
                  <span className="text-sm text-slate-500">
                    Rated {product?.rating.toString()} ({product?.reviews}{' '}
                    reviews)
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border bg-slate-50 p-4 text-sm font-medium dark:border-slate-800 dark:bg-slate-800">
                  <SparklesIcon size={18} className="text-amber-500" />
                  {product?.inventory === 'in-stock'
                    ? 'Ships in 1–2 business days.'
                    : product?.inventory === 'backorder'
                      ? 'Backordered — shipping in ~2 weeks.'
                      : 'Preorder — shipping in the next drop.'}
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex items-center justify-between border-t-0 bg-transparent">
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="bg-slate-900 px-4 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-slate-900"
                    onClick={async (e) => {
                      console.log('add to cart')
                      e.preventDefault()
                      e.stopPropagation()
                      await mutateCartFn({
                        data: {
                          action: 'add',
                          productId: product.id,
                          quantity: 1,
                        },
                      })
                      await router.invalidate({ sync: true })
                      await queryClient.invalidateQueries({
                        queryKey: ['cart-items-data'],
                      })
                    }}
                  >
                    <ShoppingBagIcon size={16} />
                    Add to cart
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-700 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-800 dark:text-slate-100"
                  >
                    Save for later
                  </Button>
                </div>
              </CardFooter>
            </div>
          </div>
        </Card>

        <div className="mb-6">
          <Suspense
            fallback={
              <div>
                <h2 className="text-2xl font-bold my-4">
                  Recommended Products
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} className="w-full h-48" />
                  ))}
                </div>
              </div>
            }
          >
            <RecommendedProducts recommendedProducts={recommendedProducts} />
          </Suspense>
        </div>
      </Card>
    </div>
  )
}
