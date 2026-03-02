import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
  category: string
  coverImage: string
  excerpt: string
  content: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        tags: data.tags || [],
        category: data.category || "Uncategorized",
        coverImage: data.coverImage || "/images/gallery-1.jpg",
        excerpt: data.excerpt || "",
        content,
      }
    })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    tags: data.tags || [],
    category: data.category || "Uncategorized",
    coverImage: data.coverImage || "/images/gallery-1.jpg",
    excerpt: data.excerpt || "",
    content,
  }
}
