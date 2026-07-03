import { motion } from 'framer-motion'

export function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72"
    >
      {/* Outer animated ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-secondary), var(--color-accent))',
          padding: '3px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full bg-paper" />
      </motion.div>

      {/* Dashed orbit ring */}
      <motion.svg
        className="absolute -inset-4 md:-inset-5 w-[calc(100%+2rem)] h-[calc(100%+2rem)] md:w-[calc(100%+2.5rem)] md:h-[calc(100%+2.5rem)]"
        viewBox="0 0 200 200"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100" cy="100" r="96"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          strokeDasharray="6 8"
          opacity="0.3"
        />
      </motion.svg>

      {/* Floating tech badges */}
      <motion.div
        className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-paper-raised border border-border shadow-card flex items-center justify-center text-lg z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span role="img" aria-label="AI">🤖</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-1 -left-3 md:-bottom-2 md:-left-4 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-paper-raised border border-border shadow-card flex items-center justify-center text-lg z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <span role="img" aria-label="React">⚛️</span>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-5 md:-right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-paper-raised border border-border shadow-card flex items-center justify-center text-lg z-10"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <span role="img" aria-label="Code">🚀</span>
      </motion.div>

      {/* Photo */}
      <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gradient-to-br from-accent-soft to-secondary-soft">
        <img
          src="/Port.png"
          alt="Nishanth"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  )
}
