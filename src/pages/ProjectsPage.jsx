import { useState } from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectGrid } from '../components/projects/ProjectGrid'
import { ProjectFilterBar } from '../components/projects/ProjectFilterBar'
import { projects } from '../content/projects'

export function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <div className="container-page py-12 md:py-20">
      <SectionHeading
        label="Projects"
        title="Things I've built"
        description="A collection of projects I've worked on — from full-stack apps to open source tools."
      />

      <ProjectFilterBar active={filter} onChange={setFilter} />
      <ProjectGrid projects={filtered} />
    </div>
  )
}
