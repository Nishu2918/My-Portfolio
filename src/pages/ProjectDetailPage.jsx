import { useParams, Link } from 'react-router'
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../content/projects'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { FadeIn } from '../components/motion/FadeIn'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Project not found</h1>
        <Button to="/projects" variant="ghost" className="mt-4">
          <FiArrowLeft size={14} /> Back to projects
        </Button>
      </div>
    )
  }

  const idx = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(idx + 1) % projects.length]

  return (
    <div className="container-page py-16 md:py-24">
      <FadeIn>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-8"
        >
          <FiArrowLeft size={14} /> Back to projects
        </Link>

        <div className="max-w-3xl">
          <span className="text-accent font-medium text-sm">{project.year}</span>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-2">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            {project.github && (
              <Button href={project.github} variant="secondary" size="sm">
                <FiGithub size={16} /> Source code
              </Button>
            )}
            {project.live && (
              <Button href={project.live} variant="primary" size="sm">
                <FiArrowUpRight size={16} /> Live demo
              </Button>
            )}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 aspect-video bg-gradient-to-br from-accent-soft to-secondary-soft rounded-2xl flex items-center justify-center">
          <span className="font-display text-4xl text-ink-muted/30 font-semibold">
            {project.title}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-12 max-w-3xl prose-content">
          <h2>About this project</h2>
          <p>{project.longDescription}</p>

          <h2>Tech Stack</h2>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {nextProject && (
        <FadeIn delay={0.3}>
          <div className="mt-20 pt-8 border-t border-border">
            <span className="text-sm text-ink-muted">Next project</span>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group block mt-2 hover:no-underline"
            >
              <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition-colors">
                {nextProject.title} →
              </h3>
            </Link>
          </div>
        </FadeIn>
      )}
    </div>
  )
}
