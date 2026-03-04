import BlogFeed from "@/components/blog-feed"
import SiteShell from "@/components/site-shell"
import { getAllPosts } from "@/lib/posts"

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <SiteShell>
      <BlogFeed posts={posts} />
    </SiteShell>
  )
}
