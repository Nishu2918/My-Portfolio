export function Badge({ children, variant = 'default', className = '' }) {
  const styles = {
    default: 'bg-paper-raised text-ink-muted border border-border',
    accent: 'bg-accent-soft text-accent',
    secondary: 'bg-secondary-soft text-secondary',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
