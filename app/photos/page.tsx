import type { Metadata } from "next"
import PhotoGallery from "@/components/photo-gallery"
import SiteShell from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Photos | Claud's Digital Journal",
  description: "A photo scrapbook of recent moments and memories.",
}

export default function PhotosPage() {
  return (
    <SiteShell>
      <PhotoGallery />
    </SiteShell>
  )
}
