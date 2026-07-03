import { skillCategories } from '../../content/skills'
import { FadeIn } from '../motion/FadeIn'
import { Badge } from '../ui/Badge'

export function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {skillCategories.map((cat, i) => (
        <FadeIn key={cat.title} delay={i * 0.1}>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
