import { motion } from 'framer-motion'

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden>
      <motion.div
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          top: '10%',
          right: '-5%',
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)',
          bottom: '15%',
          left: '-8%',
        }}
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          top: '60%',
          right: '20%',
        }}
        animate={{
          x: [0, 40, -15, 0],
          y: [0, -20, 35, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
