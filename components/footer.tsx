"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Claud's Journal</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hope you've enjoyed your time here! :D
            </p>
          </div>
          <nav>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Photos
                </Link>
              </li>
              <li>
                <Link
                  href="/travel"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/fashion"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/about-me"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  About Me
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {["Fashion", "Hobbies", "Events", "Life", "Travel"].map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground border border-border/50"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Claud's Digital Journal. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" aria-hidden="true" /> 
          </p>
        </div>
      </div>
    </footer>
  )
}
