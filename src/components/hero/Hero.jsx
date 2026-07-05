import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub } from 'react-icons/fi'
import { Button } from '../ui/Button'
import DecryptedText from '../motion/DecryptedText'
import { TypewriterText } from '../motion/TypewriterText'
import { Magnetic } from '../motion/Magnetic'
import { ProfilePhoto } from './ProfilePhoto'
import ParticleField from '../motion/ParticleField'

const ROLES = [
  'Associate AI Engineer',
  'Full Stack Developer',
  'React Enthusiast',
  'Lifelong Learner',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ParticleField
        particleCount={70}
        particleSize={1.8}
        speed={0.25}
        connectionDistance={100}
        mouseRadius={130}
        color="180, 100, 50"
        className="opacity-40"
      />
      <div className="container-page pt-12 pb-16 md:pt-20 md:pb-24 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left - text */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium text-accent bg-accent-soft rounded-full border border-accent/20">
                <motion.span
                  className="inline-block w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                Currently at Sash.Ai
              </span>
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.15] tracking-tight">
              <DecryptedText
                text="I build things"
                speed={100}
                maxIterations={20}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="text-ink"
                encryptedClassName="text-ink-muted/40"
              />
              <br />
              <DecryptedText
                text="for the web."
                speed={100}
                maxIterations={20}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="text-accent"
                encryptedClassName="text-accent/30"
              />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 h-7"
            >
              <span className="text-base md:text-lg text-ink-muted font-medium">
                <TypewriterText phrases={ROLES} typingSpeed={70} deletingSpeed={35} />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-base md:text-lg text-ink-muted max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              AI engineer and full stack developer crafting intelligent
              web experiences with React, Python, and modern AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <Magnetic strength={0.2}>
                <Button to="/projects" variant="primary">
                  View my work
                  <FiArrowRight size={16} />
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button href="https://github.com/Nishu2918" variant="secondary">
                  <FiGithub size={16} />
                  GitHub
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right - profile photo */}
          <div className="shrink-0">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  )
}
