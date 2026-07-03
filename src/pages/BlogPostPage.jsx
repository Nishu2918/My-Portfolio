import { useParams, Link } from 'react-router'
import { MDXProvider } from '@mdx-js/react'
import { FiArrowLeft } from 'react-icons/fi'
import { getPost, posts } from '../content/blog'
import { mdxComponents } from '../components/blog/MDXComponents'
import { PostMeta } from '../components/blog/PostMeta'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { FadeIn } from '../components/motion/FadeIn'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Post not found</h1>
        <Button to="/blog" variant="ghost" className="mt-4">
          <FiArrowLeft size={14} /> Back to blog
        </Button>
      </div>
    )
  }

  const { Component, frontmatter } = post
  const idx = posts.findIndex((p) => p.slug === slug)
  const nextPost = posts[(idx + 1) % posts.length]

  return (
    <div className="container-page py-16 md:py-24">
      <FadeIn>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-8"
        >
          <FiArrowLeft size={14} /> Back to blog
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
              {frontmatter.title}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <PostMeta date={frontmatter.date} readingTime={frontmatter.readingTime} />
            </div>
            {frontmatter.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose-content">
            <MDXProvider components={mdxComponents}>
              <Component />
            </MDXProvider>
          </div>
        </article>
      </FadeIn>

      {nextPost && nextPost.slug !== slug && (
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto mt-20 pt-8 border-t border-border">
            <span className="text-sm text-ink-muted">Next article</span>
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group block mt-2 hover:no-underline"
            >
              <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition-colors">
                {nextPost.frontmatter.title} →
              </h3>
            </Link>
          </div>
        </FadeIn>
      )}
    </div>
  )
}
