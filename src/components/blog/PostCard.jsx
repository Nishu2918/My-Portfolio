import { Link } from 'react-router'
import { FiArrowRight } from 'react-icons/fi'
import { Badge } from '../ui/Badge'
import { PostMeta } from './PostMeta'

export function PostCard({ post }) {
  const { frontmatter, slug } = post

  return (
    <article className="group py-6 border-b border-border last:border-0">
      <Link to={`/blog/${slug}`} className="block hover:no-underline">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition-colors">
              {frontmatter.title}
            </h3>
            <p className="mt-2 text-ink-muted leading-relaxed line-clamp-2">
              {frontmatter.excerpt}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <PostMeta date={frontmatter.date} readingTime={frontmatter.readingTime} />
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {frontmatter.tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          Read article <FiArrowRight size={14} />
        </span>
      </Link>
    </article>
  )
}
