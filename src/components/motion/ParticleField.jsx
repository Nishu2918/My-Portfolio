import { useEffect, useRef, useCallback } from 'react'

export default function ParticleField({
  particleCount = 80,
  particleSize = 2,
  speed = 0.3,
  connectionDistance = 120,
  mouseRadius = 150,
  color = '200, 120, 60',
  className = '',
}) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  const initParticles = useCallback((w, h) => {
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * particleSize + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }
    particlesRef.current = particles
  }, [particleCount, speed, particleSize])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = parent.offsetWidth
      const h = parent.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
      if (particlesRef.current.length === 0) {
        initParticles(w, h)
      }
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    function handleMouseLeave() {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    function draw() {
      const w = parent.offsetWidth
      const h = parent.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const dxm = mx - p.x
        const dym = my - p.y
        const distMouse = Math.sqrt(dxm * dxm + dym * dym)

        if (distMouse < mouseRadius) {
          const force = (mouseRadius - distMouse) / mouseRadius
          p.x -= (dxm / distMouse) * force * 1.5
          p.y -= (dym / distMouse) * force * 1.5
        }

        const glow = distMouse < mouseRadius ? 0.8 : p.opacity
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${glow})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${color}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()

    const ro = new ResizeObserver(() => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = parent.offsetWidth
      const h = parent.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    })
    ro.observe(parent)

    parent.addEventListener('mousemove', handleMouseMove, { passive: true })
    parent.addEventListener('mouseleave', handleMouseLeave)

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      parent.removeEventListener('mousemove', handleMouseMove)
      parent.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [initParticles, color, connectionDistance, mouseRadius])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ pointerEvents: 'auto' }}
    />
  )
}
