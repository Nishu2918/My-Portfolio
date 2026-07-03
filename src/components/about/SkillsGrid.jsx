import { motion } from 'framer-motion'
import * as Si from 'react-icons/si'
import { skillCategories } from '../../content/skills'
import { FadeIn } from '../motion/FadeIn'

function SkillIcon({ skill }) {
  const Icon = Si[skill.icon]
  if (!Icon) return null

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className="group flex flex-col items-center gap-2 p-3 rounded-xl cursor-default"
    >
      <div
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border border-border bg-paper-raised shadow-card group-hover:shadow-card-hover transition-all duration-300"
        style={{
          '--hover-color': skill.color,
        }}
      >
        <Icon
          size={24}
          className="text-ink-muted group-hover:text-[var(--hover-color)] transition-colors duration-300"
        />
      </div>
      <span className="text-[11px] font-medium text-ink-muted group-hover:text-ink transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )
}

export function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-10">
      {skillCategories.map((cat, i) => (
        <FadeIn key={cat.title} delay={i * 0.1}>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink mb-4">
              {cat.title}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
              {cat.skills.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
