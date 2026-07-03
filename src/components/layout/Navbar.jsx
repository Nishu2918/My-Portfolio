import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ThemeToggle } from '../../theme/ThemeToggle'
import { NAV_LINKS } from '../../lib/constants'
import { Magnetic } from '../motion/Magnetic'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    setHidden(latest > prev && latest > 150)
    setScrolled(latest > 20)
  })

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-paper/70 border-b border-border/50 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <Magnetic strength={0.15}>
          <Link to="/" className="font-display text-xl font-semibold text-ink hover:text-accent transition-colors">
            Nishanth<span className="text-accent">.</span>
          </Link>
        </Magnetic>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + '/')
            return (
              <Magnetic key={link.path} strength={0.1}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {/* Pill highlight background */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent-soft border border-accent/20 rounded-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </Magnetic>
            )
          })}
          <div className="ml-3 pl-3 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-ink origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-0.5 bg-ink"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-ink origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-paper/95 backdrop-blur-xl"
          >
            <div className="container-page py-4 space-y-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'text-accent bg-accent-soft border border-accent/20'
                          : 'text-ink-muted hover:text-ink hover:bg-paper-raised'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
