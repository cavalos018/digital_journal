"use client"

import { Sparkles } from "lucide-react"
import { motion, easeOut } from "framer-motion"
import { TextGenerateEffect } from "./aceternity/text-generate-effect"
import { SilkBackground } from "./aceternity/silk-background"

export default function BlogHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  return (
    <SilkBackground>
      <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <motion.div
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 flex items-center gap-2"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Welcome!
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance font-serif cursive-safe"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Claud's Digital Journal
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance font-medium"
          >
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <TextGenerateEffect
              words="A place for my love for fashion, hobbies, life celebrations, travel adventures, and all the little moments worth remembering."
              className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
              duration={0.04}
              filter={true}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {["Fashion", "Hobbies", "Events", "Life", "Travel"].map((tag, idx) => (
              <motion.a
                key={tag}
                href="#journal"
                className="px-5 py-2 rounded-full text-sm font-medium border transition-all bg-card/80 border-border text-foreground hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
              >
                {tag}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
