import { motion } from 'framer-motion'

export function HeroDoodle() {
  return (
    <div className="absolute top-8 right-0 md:right-12 opacity-[0.07] pointer-events-none select-none" aria-hidden>
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        className="w-48 h-48 md:w-80 md:h-80 text-accent"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" />
        <path
          d="M200 20 Q 300 100 200 200 Q 100 300 200 380"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 4"
        />
        <path
          d="M20 200 Q 100 100 200 200 Q 300 300 380 200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 4"
        />
      </motion.svg>
    </div>
  )
}
