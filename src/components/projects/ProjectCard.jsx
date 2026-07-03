import { Link } from 'react-router'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { Badge } from '../ui/Badge'
import { TiltCard } from '../motion/TiltCard'

const gradients = [
  'from-violet-500/10 to-blue-500/10',
  'from-emerald-500/10 to-teal-500/10',
  'from-orange-500/10 to-rose-500/10',
  'from-blue-500/10 to-indigo-500/10',
  'from-pink-500/10 to-purple-500/10',
  'from-amber-500/10 to-orange-500/10',
]

const categoryColors = {
  fullstack: 'bg-violet-500',
  frontend: 'bg-emerald-500',
  backend: 'bg-amber-500',
}

const categoryLabels = {
  fullstack: 'Full Stack',
  frontend: 'Frontend',
  backend: 'Backend',
}

export function ProjectCard({ project, index = 0 }) {
  const gradient = gradients[index % gradients.length]

  return (
    <TiltCard className="group h-full" intensity={6}>
      <Link
        to={`/projects/${project.slug}`}
        className="flex flex-col h-full bg-paper-raised border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:no-underline hover:border-accent/20"
      >
        {/* Thumbnail */}
        <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : null}


          {/* Category badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-md shadow-sm ${categoryColors[project.category] || 'bg-ink'}`}>
              {categoryLabels[project.category] || project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display text-base font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border/50">
            {project.github && (
              <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                <FiGithub size={13} />
                Code
              </span>
            )}
            {project.live && (
              <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                <FiArrowUpRight size={13} />
                Live
              </span>
            )}
            <span className="ml-auto text-xs text-ink-muted/60">{project.year}</span>
          </div>
        </div>
      </Link>
    </TiltCard>
  )
}
