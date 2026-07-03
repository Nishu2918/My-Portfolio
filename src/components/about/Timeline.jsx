import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiCalendar } from 'react-icons/fi'
import { timeline } from '../../content/skills'
import { FadeIn } from '../motion/FadeIn'

export function Timeline() {
  return (
    <div className="max-w-2xl space-y-10">
      {timeline.map((item, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            {/* Year badge on top */}
            <div className="flex items-center gap-3 mb-3">
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                item.current
                  ? 'bg-accent text-white'
                  : 'bg-paper-raised border border-border text-ink-muted'
              }`}>
                <FiCalendar size={11} />
                {item.year}
              </div>
              {item.current && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  Current Role
                </span>
              )}
            </div>

            {/* Content */}
            <div className={`border-l-2 pl-5 py-1 transition-colors duration-300 ${
              item.current
                ? 'border-accent'
                : 'border-border group-hover:border-accent/50'
            }`}>
              <h3 className="font-display text-xl font-semibold text-ink leading-snug">
                {item.title}
              </h3>
              <p className="text-accent font-medium text-sm mt-0.5">
                {item.company}
              </p>

              <p className="mt-3 text-ink-muted leading-relaxed">
                {item.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-muted/70">
                <span className="flex items-center gap-1">
                  <FiBriefcase size={11} />
                  {item.type}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin size={11} />
                  {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  )
}
