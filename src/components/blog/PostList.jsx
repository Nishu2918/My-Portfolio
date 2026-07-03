import { PostCard } from './PostCard'
import { FadeIn } from '../motion/FadeIn'

export function PostList({ posts }) {
  if (posts.length === 0) {
    return (
      <FadeIn>
        <p className="text-ink-muted text-center py-12">
          No posts yet. Check back soon!
        </p>
      </FadeIn>
    )
  }

  return (
    <div>
      {posts.map((post, i) => (
        <FadeIn key={post.slug} delay={i * 0.05}>
          <PostCard post={post} />
        </FadeIn>
      ))}
    </div>
  )
}
