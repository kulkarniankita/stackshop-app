import { Card, CardContent } from '@/components/ui/card'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { ShoppingBagIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function EmptyCartState() {
  return (
    <div className="mx-auto max-w-4xl">
      <Card>
        <CardContent>
          <Empty>
            <EmptyMedia variant="icon">
              <ShoppingBagIcon />
            </EmptyMedia>
            <EmptyHeader>
              <EmptyTitle>Your cart is empty</EmptyTitle>
              <EmptyDescription>
                Add a few items from the catalog to see them here.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-slate-900"
              >
                Browse products
              </Link>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
    </div>
  )
}
