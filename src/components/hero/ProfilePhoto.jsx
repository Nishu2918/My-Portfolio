import { motion } from 'framer-motion'

export function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72"
    >
      {/* Morphing glow */}
      <motion.div
        className="absolute inset-[-15%] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--color-accent), var(--color-secondary), transparent)',
        }}
        animate={{
          scale: [1, 1.2, 1.05, 1.15, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Outer rotating gradient ring */}
      <motion.div
        className="absolute inset-[-3px] rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, var(--color-accent), transparent 30%, var(--color-secondary), transparent 60%, var(--color-accent))',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute inset-[1px] rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, var(--color-secondary), transparent 25%, var(--color-accent), transparent 50%, var(--color-secondary))',
          opacity: 0.4,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* White ring gap */}
      <div className="absolute inset-[3px] rounded-full bg-paper" />

      {/* Orbiting dots */}
      <motion.div
        className="absolute inset-[-18px] md:inset-[-22px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary opacity-50" />
      </motion.div>

      <motion.div
        className="absolute inset-[-18px] md:inset-[-22px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent opacity-35" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary)]" />
      </motion.div>

      {/* Dashed arc rings */}
      <motion.svg
        className="absolute inset-[-15px] md:inset-[-18px] w-[calc(100%+30px)] h-[calc(100%+30px)] md:w-[calc(100%+36px)] md:h-[calc(100%+36px)]"
        viewBox="0 0 200 200"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100" cy="100" r="96"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.8"
          strokeDasharray="20 40 10 30"
          opacity="0.25"
        />
      </motion.svg>

      <motion.svg
        className="absolute inset-[-25px] md:inset-[-30px] w-[calc(100%+50px)] h-[calc(100%+50px)] md:w-[calc(100%+60px)] md:h-[calc(100%+60px)]"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100" cy="100" r="96"
          fill="none"
          stroke="var(--color-secondary)"
          strokeWidth="0.5"
          strokeDasharray="8 50 15 40"
          opacity="0.15"
        />
      </motion.svg>

      {/* Photo */}
      <motion.div
        className="absolute inset-[6px] rounded-full overflow-hidden bg-gradient-to-br from-accent-soft to-secondary-soft"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img
          src="/Port.png"
          alt="Nishanth"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  )
}
