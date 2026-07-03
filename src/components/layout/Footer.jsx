import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiHeart } from 'react-icons/fi'
import { SOCIALS, NAV_LINKS } from '../../lib/constants'
import { Magnetic } from '../motion/Magnetic'
import { FadeIn } from '../motion/FadeIn'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
}

export function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Wavy top edge */}
      <div className="w-full overflow-hidden leading-[0]" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
          fill="var(--color-paper-raised)"
        >
          <path d="M0,30 Q360,80 720,30 T1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <div className="bg-paper-raised">
        <div className="container-page pt-8 pb-12">
          {/* Main footer grid */}
          <FadeIn>
            <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-8">
              {/* Brand column */}
              <div>
                <Link to="/" className="font-display text-2xl font-semibold text-ink inline-block">
                  Nishanth<span className="text-accent">.</span>
                </Link>
                <p className="mt-3 text-ink-muted leading-relaxed max-w-xs">
                  Full Stack Developer & AI Engineer building things for the web. Always learning, always shipping.
                </p>

                {/* Social icons */}
                <div className="flex gap-2 mt-5">
                  {SOCIALS.map((social) => {
                    const Icon = iconMap[social.icon]
                    return (
                      <Magnetic key={social.label} strength={0.2}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="group w-10 h-10 flex items-center justify-center rounded-xl bg-paper border border-border text-ink-muted hover:text-accent hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                        >
                          <Icon size={17} />
                        </a>
                      </Magnetic>
                    )
                  })}
                  <Magnetic strength={0.2}>
                    <a
                      href="mailto:nishanthhs8@gmail.com"
                      aria-label="Email"
                      className="group w-10 h-10 flex items-center justify-center rounded-xl bg-paper border border-border text-ink-muted hover:text-accent hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                    >
                      <FiMail size={17} />
                    </a>
                  </Magnetic>
                </div>
              </div>

              {/* Pages */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  Pages
                </h4>
                <nav className="space-y-2.5">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="group flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  Connect
                </h4>
                <div className="space-y-2.5">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                      {social.label}
                      <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                  <a
                    href="mailto:nishanthhs8@gmail.com"
                    className="group flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                    nishanthhs8@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ink-muted flex items-center gap-1">
                &copy; {new Date().getFullYear()} Nishanth. Built with
                <FiHeart size={11} className="text-accent" />
                using React & Tailwind
              </p>

              {/* Scroll to top */}
              <Magnetic strength={0.3}>
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-paper border border-border text-ink-muted hover:text-accent hover:border-accent/30 transition-all cursor-pointer"
                  aria-label="Scroll to top"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 12V2M2 6l5-4 5 4" />
                  </svg>
                </motion.button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
