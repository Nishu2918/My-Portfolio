export function Input({ label, error, className = '', ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-ink-muted">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2.5 bg-paper border border-border rounded-lg text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${error ? 'border-danger' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  )
}

export function Textarea({ label, error, className = '', ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-ink-muted">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-2.5 bg-paper border border-border rounded-lg text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y min-h-32 ${error ? 'border-danger' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  )
}
