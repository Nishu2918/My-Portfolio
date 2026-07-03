import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = parseInt(value, 10)
    const increment = end / (duration * 60)
    let frame

    function step() {
      start += increment
      if (start >= end) {
        setCount(end)
        return
      }
      setCount(Math.floor(start))
      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="tabular-nums"
    >
      {count}{suffix}
    </motion.span>
  )
}
