import { SectionHeading } from '../components/ui/SectionHeading'
import { AboutIntro } from '../components/about/AboutIntro'
import { SkillsGrid } from '../components/about/SkillsGrid'
import { Timeline } from '../components/about/Timeline'
import { AnimatedCounter } from '../components/motion/AnimatedCounter'
import { FadeIn } from '../components/motion/FadeIn'
import { SlideReveal } from '../components/motion/SmoothReveal'
import { WaveDivider } from '../components/motion/WaveDivider'

export function AboutPage() {
  return (
    <>
      <div className="container-page py-12 md:py-20">
        <SectionHeading
          label="About"
          title="Hey, I'm Nishanth"
          description="AI engineer, full stack developer, and web enthusiast."
        />

        <SlideReveal direction="left">
          <AboutIntro />
        </SlideReveal>

        {/* Mini stats */}
        <FadeIn delay={0.2}>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { value: 3, suffix: '+', label: 'Years Exp.' },
              { value: 20, suffix: '+', label: 'Projects' },
              { value: 10, suffix: '+', label: 'Technologies' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-paper-raised rounded-xl border border-border">
                <div className="font-display text-xl font-bold text-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-ink-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <WaveDivider />
      <div className="bg-paper-raised py-12 md:py-20">
        <div className="container-page">
          <SectionHeading label="Experience" title="My journey so far" />
          <SlideReveal direction="right">
            <Timeline />
          </SlideReveal>
        </div>
      </div>
      <WaveDivider flip />

      <div className="container-page py-12 md:py-20">
        <SectionHeading
          label="Skills"
          title="Tools & technologies"
          description="The technologies I work with most."
        />
        <SkillsGrid />
      </div>
    </>
  )
}
