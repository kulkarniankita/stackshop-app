import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/products/"!
      <Link to="/products/$id" params={{ id: '1' }}>
        Product 1
      </Link>
      <Link to="/products/$id" params={{ id: '2' }}>
        Product 2
      </Link>
      <Link to="/products/$id" params={{ id: '3' }}>
        Product 3
      </Link>
    </div>
  )
}
