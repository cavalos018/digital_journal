import type { Metadata } from "next"
import SiteShell from "@/components/site-shell"
import FashionFavorites from "@/components/fashion_favorites"

export const metadata: Metadata = {
  title: "Fashion | Claud's Digital Journal",
  description: "My personal fashion favorites.",
}

export default function FashionPage() {
  return (
    <SiteShell>
      <FashionFavorites />
    </SiteShell>
  )
}
