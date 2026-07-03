import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SOCIALS } from '../../lib/constants'
import { FadeIn } from '../motion/FadeIn'
import { Magnetic } from '../motion/Magnetic'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
}

export function SocialLinks() {
  return (
    <FadeIn delay={0.2}>
      <div className="bg-paper-raised border border-border rounded-2xl p-6">
        <h4 className="font-medium text-ink text-sm mb-4">Find me on</h4>
        <div className="flex gap-3">
          {SOCIALS.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <Magnetic key={social.label} strength={0.2}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-paper border border-border text-ink-muted hover:text-accent hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              </Magnetic>
            )
          })}
        </div>
      </div>
    </FadeIn>
  )
}
