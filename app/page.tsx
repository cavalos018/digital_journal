import BlogHero from "@/components/blog-hero"
import BlogFeed from "@/components/blog-feed"
import ScrapbookSection from "@/components/scrapbook-section"
import SiteShell from "@/components/site-shell"

// Static post data (matching our MDX files)
const posts = [
  {
    slug: "cozy-hobbies",
    title: "Finding Joy in Hobbies",
    date: "2026-03-03",
    tags: ["hobbies", "journaling", "favorites"],
    category: "Hobbies",
    coverImage: "/images/cozy-hobbies.jpg",
    excerpt: "A roundup of the pieces I've been reaching for on repeat this season — from cozy knits to statement accessories.",
  },
  {
    slug: "galena-road-trip",
    title: "Galena, IL Road Trip",
    date: "2026-02-03",
    tags: ["travel", "adventure", "winter"],
    category: "Events",
    coverImage: "/images/Galena_Waterfall.jpeg",
    excerpt: "Three days, two states, and countless memories — here's a recap of our epic winter road trip.",
  },
  {
    slug: "california-work-trip",
    title: "Anaheim, California Work Trip",
    date: "2025-09-16",
    tags: ["travel", "work", "adventure"],
    category: "Events",
    coverImage: "/images/california_ignite.jpg",
    excerpt: "First work trip!",
  },
  /*{
    slug: "birthday-party",
    title: "The Most Magical Birthday Party",
    date: "2026-01-28",
    tags: ["celebration", "birthday", "life"],
    category: "Life",
    coverImage: "/images/birthday-party.jpg",
    excerpt: "Turning another year older surrounded by the people I love most — complete with sparklers, way too much cake, and happy tears.",
  },*/
]

export default function Home() {
  return (
    <SiteShell>
      <BlogHero />
      <BlogFeed posts={posts} />
      <ScrapbookSection />
    </SiteShell>
  )
}
