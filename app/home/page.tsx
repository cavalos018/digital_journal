import BlogHero from "@/components/blog-hero"
import ScrapbookSection from "@/components/scrapbook-section"
import SiteShell from "@/components/site-shell"

export default function HomePage() {
  return (
    <SiteShell>
      <BlogHero />
      <ScrapbookSection />
    </SiteShell>
  )
}
