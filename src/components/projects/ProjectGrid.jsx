import { ProjectCard } from './ProjectCard'
import { StaggerList, StaggerItem } from '../motion/StaggerList'

export function ProjectGrid({ projects }) {
  return (
    <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <StaggerItem key={project.slug}>
          <ProjectCard project={project} index={i} />
        </StaggerItem>
      ))}
    </StaggerList>
  )
}
