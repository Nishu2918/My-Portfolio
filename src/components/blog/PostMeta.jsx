import { format } from 'date-fns'

export function PostMeta({ date, readingTime }) {
  const formatted = format(new Date(date), 'MMM d, yyyy')

  return (
    <div className="flex items-center gap-2 text-sm text-ink-muted">
      <time dateTime={date}>{formatted}</time>
      {readingTime && (
        <>
          <span className="w-1 h-1 rounded-full bg-ink-muted/40" />
          <span>{readingTime}</span>
        </>
      )}
    </div>
  )
}
