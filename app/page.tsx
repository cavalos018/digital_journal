import BlogHero from "@/components/blog-hero"
import BlogFeed from "@/components/blog-feed"
import ScrapbookSection from "@/components/scrapbook-section"
import SiteShell from "@/components/site-shell"

// Static post data (matching our MDX files)
const posts = [
  {
    slug: "fashion-favorites",
    title: "My Current Fashion Favorites",
    date: "2026-02-25",
    tags: ["fashion", "style", "favorites"],
    category: "Fashion",
    coverImage: "/images/fashion-favorites.jpg",
    excerpt: "A roundup of the pieces I've been reaching for on repeat this season — from cozy knits to statement accessories.",
  },
  {
    slug: "summer-road-trip",
    title: "Summer Road Trip Adventures",
    date: "2026-02-15",
    tags: ["travel", "adventure", "summer"],
    category: "Events",
    coverImage: "/images/road-trip.jpg",
    excerpt: "Three weeks, five states, and countless memories — here's a recap of our epic summer road trip across the country.",
  },
  {
    slug: "cozy-hobbies",
    title: "Finding Joy in Cozy Hobbies",
    date: "2026-02-10",
    tags: ["hobbies", "self-care", "journaling"],
    category: "Hobbies",
    coverImage: "/images/cozy-hobbies.jpg",
    excerpt: "From watercolor painting to journaling — the simple hobbies that have been bringing me so much peace lately.",
  },
  {
    slug: "birthday-party",
    title: "The Most Magical Birthday Party",
    date: "2026-01-28",
    tags: ["celebration", "birthday", "life"],
    category: "Life",
    coverImage: "/images/birthday-party.jpg",
    excerpt: "Turning another year older surrounded by the people I love most — complete with sparklers, way too much cake, and happy tears.",
  },
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
