export function SummaryRow({
  label,
  value,
  bold,
}: {
  label: string
  value: number
  bold?: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={bold ? 'font-semibold' : ''}>{label}</span>
      <span className={bold ? 'text-lg font-bold' : 'font-semibold'}>
        ${value.toFixed(2)}
      </span>
    </div>
  )
}
