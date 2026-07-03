import { SectionHeading } from '../components/ui/SectionHeading'
import { PostList } from '../components/blog/PostList'
import { posts } from '../content/blog'

export function BlogIndexPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <SectionHeading
        label="Blog"
        title="Writing & thinking"
        description="Articles about web development, design, and things I'm learning."
      />

      <PostList posts={posts} />
    </div>
  )
}
