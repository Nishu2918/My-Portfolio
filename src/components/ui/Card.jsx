import { motion } from 'framer-motion'

export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-paper-raised border border-border rounded-xl shadow-card transition-shadow duration-300 hover:shadow-card-hover ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
