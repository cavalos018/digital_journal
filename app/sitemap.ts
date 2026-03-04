import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://myjournal.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://myjournal.com/blog/fashion-favorites",
      lastModified: new Date("2026-02-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://myjournal.com/blog/galena-road-trip",
      lastModified: new Date("2026-02-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://myjournal.com/blog/cozy-hobbies",
      lastModified: new Date("2026-02-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://myjournal.com/blog/birthday-party",
      lastModified: new Date("2026-01-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
