import { categories } from '../../content/projects'

export function ProjectFilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
            active === cat.key
              ? 'bg-accent text-white shadow-soft'
              : 'bg-paper-raised text-ink-muted hover:text-ink border border-border hover:border-accent/30'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
