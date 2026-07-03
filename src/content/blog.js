const modules = import.meta.glob('/content/blog/*.mdx', { eager: true })

export const posts = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace('.mdx', ''),
    Component: mod.default,
    frontmatter: mod.frontmatter || {},
  }))
  .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}
