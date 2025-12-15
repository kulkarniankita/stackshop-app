import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      Main Page <Link to="/products">Products</Link>
      <Button>Click me</Button>
    </div>
  )
}
