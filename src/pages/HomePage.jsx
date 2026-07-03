import { FiArrowRight } from 'react-icons/fi'
import { Hero } from '../components/hero/Hero'
import { AboutIntro } from '../components/about/AboutIntro'
import { ProjectGrid } from '../components/projects/ProjectGrid'
import { PostList } from '../components/blog/PostList'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { WaveDivider } from '../components/motion/WaveDivider'
import { Magnetic } from '../components/motion/Magnetic'
import { ScaleReveal } from '../components/motion/SmoothReveal'
import { TextRevealOnScroll } from '../components/motion/TextReveal'
import { FadeIn } from '../components/motion/FadeIn'
import { AnimatedCounter } from '../components/motion/AnimatedCounter'
import { TechMarquee } from '../components/home/TechMarquee'
import { projects } from '../content/projects'
import { posts } from '../content/blog'

export function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const recentPosts = posts.slice(0, 3)

  return (
    <>
      <Hero />

      <WaveDivider />

      {/* Stats + Tech stack */}
      <section className="bg-paper-raised py-10">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
            {[
              { value: 20, suffix: '+', label: 'Projects Built' },
              { value: 3, suffix: '+', label: 'Years Coding' },
              { value: 10, suffix: '+', label: 'Technologies' },
              { value: 1000, suffix: '+', label: 'Commits' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-accent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-0.5 text-sm text-ink-muted">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <TechMarquee />
      </section>

      <WaveDivider flip />

      {/* About teaser */}
      <section className="container-page py-16 md:py-20">
        <SectionHeading
          label="About"
          title="A little about me"
        />
        <AboutIntro condensed />
        <div className="mt-5">
          <Magnetic strength={0.15}>
            <Button to="/about" variant="ghost" size="sm">
              More about me <FiArrowRight size={14} />
            </Button>
          </Magnetic>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-paper-raised/50">
        <WaveDivider />
        <div className="container-page pb-16 md:pb-20 bg-paper-raised/50 -mt-1">
          <SectionHeading
            label="Work"
            title="Selected projects"
          />
          <ProjectGrid projects={featuredProjects} />
          <div className="mt-8 text-center">
            <Magnetic strength={0.15}>
              <Button to="/projects" variant="secondary">
                View all projects <FiArrowRight size={14} />
              </Button>
            </Magnetic>
          </div>
        </div>
        <WaveDivider flip />
      </section>

      {/* Blog */}
      <section className="container-page py-16 md:py-20">
        <SectionHeading
          label="Writing"
          title="Latest from the blog"
        />
        <PostList posts={recentPosts} />
        <div className="mt-6">
          <Magnetic strength={0.15}>
            <Button to="/blog" variant="ghost" size="sm">
              All articles <FiArrowRight size={14} />
            </Button>
          </Magnetic>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <ScaleReveal>
          <div className="relative bg-gradient-to-br from-accent-soft to-secondary-soft border border-border rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                <TextRevealOnScroll>
                  Let's work together
                </TextRevealOnScroll>
              </h2>
              <p className="mt-3 text-ink-muted max-w-md mx-auto">
                Have a project in mind? I'd love to hear about it.
              </p>
              <div className="mt-6">
                <Magnetic strength={0.2}>
                  <Button to="/contact" size="lg">
                    Get in touch <FiArrowRight size={18} />
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </ScaleReveal>
      </section>
    </>
  )
}
