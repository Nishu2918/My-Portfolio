export function Callout({ type = 'note', children }) {
  const styles = {
    note: 'border-secondary bg-secondary-soft',
    warning: 'border-accent bg-accent-soft',
    tip: 'border-accent bg-accent-soft',
  }

  const labels = {
    note: 'Note',
    warning: 'Warning',
    tip: 'Tip',
  }

  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 ${styles[type]}`}>
      <p className="font-medium text-sm text-ink mb-1">{labels[type]}</p>
      <div className="text-ink-muted text-sm">{children}</div>
    </div>
  )
}

export const mdxComponents = {
  h1: (props) => <h1 className="font-display text-3xl font-semibold text-ink mt-12 mb-4" {...props} />,
  h2: (props) => <h2 className="font-display text-2xl font-semibold text-ink mt-10 mb-3" {...props} />,
  h3: (props) => <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-2" {...props} />,
  p: (props) => <p className="text-ink-muted leading-relaxed mb-5" {...props} />,
  a: (props) => <a className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 mb-5 text-ink-muted space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-5 text-ink-muted space-y-2" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-3 border-accent pl-5 my-6 italic text-ink-muted" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-paper-raised border border-border rounded-xl p-5 overflow-x-auto my-6 text-sm leading-7" {...props} />
  ),
  code: ({ className, ...props }) => {
    if (className) {
      return <code className={`font-mono ${className}`} {...props} />
    }
    return <code className="font-mono text-sm bg-paper-raised px-1.5 py-0.5 rounded text-accent" {...props} />
  },
  hr: () => <hr className="border-t border-border my-10" />,
  img: (props) => <img className="rounded-xl my-8 max-w-full" {...props} />,
  Callout,
}
