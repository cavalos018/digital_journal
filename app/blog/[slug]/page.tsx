import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Claud's Digital Journal`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Simple markdown-to-HTML conversion for the MDX content
  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("# ")) return `<h1 class="text-3xl md:text-4xl font-bold font-serif mb-6 mt-10">${line.slice(2)}</h1>`
      if (line.startsWith("## ")) return `<h2 class="text-2xl font-bold font-serif mb-4 mt-8 text-primary">${line.slice(3)}</h2>`
      if (line.startsWith("### ")) return `<h3 class="text-xl font-bold font-serif mb-3 mt-6">${line.slice(4)}</h3>`
      if (line.startsWith("- ")) return `<li class="ml-6 mb-2 text-muted-foreground leading-relaxed list-disc">${line.slice(2)}</li>`
      if (line.trim() === "") return "<br />"
      // Handle bold and italic
      let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
      processed = processed.replace(/\*(.+?)\*/g, "<em>$1</em>")
      processed = processed.replace(/"(.+?)"/g, '<span class="italic">"$1"</span>')
      return `<p class="text-muted-foreground leading-relaxed mb-4">${processed}</p>`
    })
    .join("\n")

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Back to Journal</span>
            </Link>
            <Link href="/" className="font-serif font-bold text-lg text-foreground">
              Claud's Journal
            </Link>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-72 md:h-96 w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 text-balance leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed border-l-4 border-primary/30 pl-4 italic">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              <span className="text-sm font-medium text-muted-foreground">Tagged</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Journal
          </Link>
        </div>
      </article>
    </div>
  )
}
