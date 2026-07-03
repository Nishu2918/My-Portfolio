import { Link } from 'react-router'
import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-soft',
  secondary:
    'bg-paper-raised text-ink border border-border hover:border-accent hover:text-accent',
  ghost:
    'text-ink-muted hover:text-ink hover:bg-paper-raised',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  children,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  )
}
