"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  category: string
  coverImage: string
  excerpt: string
}

export default function BlogFeed({ posts }: { posts: BlogPost[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const categoryColors: Record<string, string> = {
    Fashion: "bg-primary/10 text-primary border-primary/20",
    Events: "bg-accent/10 text-accent border-accent/20",
    Hobbies: "bg-secondary/10 text-secondary border-secondary/20",
    Life: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20",
  }

  return (
    <section id="journal" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Latest Entries</span>
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-serif cursive-safe">
            From the{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Journal
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              className={idx === 0 ? "md:col-span-2" : ""}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <motion.article
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className={`relative overflow-hidden ${idx === 0 ? "h-72 md:h-96" : "h-56"}`}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          categoryColors[post.category] || "bg-card/80 text-foreground border-border"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className={`mb-3 font-serif group-hover:text-primary transition-colors ${idx === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
