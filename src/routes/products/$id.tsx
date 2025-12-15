import { getProductById } from '@/data/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return await getProductById(params.id)
  },
})

function RouteComponent() {
  const { id } = Route.useParams()
  const product = Route.useLoaderData()
  return (
    <div>
      Hello "/products/$id" {id}!{JSON.stringify(product, null, 2)}
    </div>
  )
}
