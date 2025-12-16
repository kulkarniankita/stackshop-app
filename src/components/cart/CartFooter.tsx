import { Button } from '../ui/button'
import { SummaryRow } from './SummaryRow'

export function CartFooter({
  subtotal,
  shipping,
  total,
}: {
  subtotal: number
  shipping: number
  total: number
}) {
  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
      <h2 className="text-lg font-semibold">Order summary</h2>
      <div className="space-y-2">
        <SummaryRow label="Subtotal" value={subtotal} />
        <SummaryRow label="Shipping" value={shipping} />
        <div className="h-px bg-slate-200 dark:bg-slate-800" />
        <SummaryRow label="Total" value={total} bold />
      </div>
      <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
        Checkout (demo)
      </Button>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Your cart is stored in the database and synced with TanStack Query.
      </p>
    </div>
  )
}
