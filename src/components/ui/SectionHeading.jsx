import { TextRevealOnScroll } from '../motion/TextReveal'
import { FadeIn } from '../motion/FadeIn'

export function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <FadeIn>
          <span className="text-accent font-medium text-sm tracking-widest uppercase mb-3 block">
            {label}
          </span>
        </FadeIn>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
        <TextRevealOnScroll>{title}</TextRevealOnScroll>
      </h2>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-ink-muted text-lg max-w-2xl">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
