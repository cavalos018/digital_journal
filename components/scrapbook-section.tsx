"use client"

import { motion } from "framer-motion"
import { CardStack } from "./aceternity/card-stack"
import { Sparkles, Heart, Camera, Plane, PartyPopper, Shirt } from "lucide-react"

const quotes = [
    {id: 1,
    name: "A Favorite Quote",
    designation: "2026 Grammy Awards & 2026 Super Bowl",
    content:
      "\"The only thing more powerful than hate, is love\" — Bad Bunny. This was a beautiful reminder while United States remains so divided.",
  },
  {
    id: 2,
    name: "Note to Self",
    designation: "January 2026",
    content:
      "Reminder: You don't have to have it all figured out. You just have to keep going. One day at a time.",
  },
  /*{
    id: 3,
    name: "A Good Day",
    designation: "February 2026",
    content:
      "Some days are just golden from start to finish. Today was one of those — sunshine, good coffee, a long walk, and that feeling of everything being exactly right.",
  },
  {
    id: 4,
    name: "Grateful For",
    designation: "November 2025",
    content:
      "Friends who feel like family. Mornings that feel like fresh starts. Books that change the way you see things. Coffee that's always just right.",
  },*/
]

const categories = [
  { name: "Fashion", icon: Shirt, description: "Style finds & outfit inspo", color: "from-primary to-accent" },
  { name: "Hobbies", icon: Heart, description: "Creative pursuits & cozy things", color: "from-secondary to-primary" },
  { name: "Events", icon: PartyPopper, description: "Celebrations & gatherings", color: "from-accent to-primary" },
  { name: "Travel", icon: Plane, description: "Adventures & explorations", color: "from-primary to-secondary" },
]

export default function ScrapbookSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Bits & Pieces</span>
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-serif cursive-safe">
            The{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Scrapbook
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Card Stack - Memories & Quotes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 font-serif flex items-center gap-2">
              <Camera className="w-6 h-6 text-primary" aria-hidden="true" />
              Memories & Thoughts
            </h3>
            <CardStack items={quotes} offset={12} scaleFactor={0.05} />
          </motion.div>

          {/* Category Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 font-serif flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" aria-hidden="true" />
              Browse by Category
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat, idx) => {
                const Icon = cat.icon
                return (
                  <motion.a
                    key={cat.name}
                    href="#journal"
                    className="group p-5 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all"
                    whileHover={{ y: -5, rotate: idx % 2 === 0 ? 1 : -1 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3`}
                    >
                      <Icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
