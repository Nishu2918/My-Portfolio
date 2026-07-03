import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgressBar() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-50"
    />
  )
}
