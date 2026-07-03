import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function TextReveal({
  children,
  as: Tag = 'span',
  delay = 0,
  className = '',
  staggerDelay = 0.04,
}) {
  const reduced = usePrefersReducedMotion()

  if (reduced || typeof children !== 'string') {
    return <Tag className={className}>{children}</Tag>
  }

  const words = children.split(' ')

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}

export function TextRevealOnScroll({
  children,
  as: Tag = 'span',
  delay = 0,
  className = '',
  staggerDelay = 0.03,
}) {
  const reduced = usePrefersReducedMotion()

  if (reduced || typeof children !== 'string') {
    return <Tag className={className}>{children}</Tag>
  }

  const words = children.split(' ')

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.45,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}
