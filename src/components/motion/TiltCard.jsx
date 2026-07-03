import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function TiltCard({ children, className = '', intensity = 10 }) {
  const ref = useRef(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const reduced = usePrefersReducedMotion()

  function handleMouse(e) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTransform({
      rotateX: (y - 0.5) * -intensity,
      rotateY: (x - 0.5) * intensity,
    })
    setGlare({ x: x * 100, y: y * 100, opacity: 0.12 })
  }

  function handleLeave() {
    setTransform({ rotateX: 0, rotateY: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={transform}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      {children}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
        }}
      />
    </motion.div>
  )
}
