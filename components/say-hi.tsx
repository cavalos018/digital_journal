"use client"

import { motion } from "framer-motion"
import { Mail, Instagram, Heart, Sparkles } from "lucide-react"

export default function SayHi() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@myjournal.com",
      href: "mailto:hello@myjournal.com",
      color: "from-primary to-accent",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@myjournal",
      href: "#",
      color: "from-accent to-secondary",
    },
  ]

  return (
    <section id="sayhi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Get In Touch</span>
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-serif cursive-safe">
            Say{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Hi
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {"Love connecting with fellow journal keepers, travelers, and anyone who appreciates the little things in life. Don't be a stranger!"}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.href}
                className="group flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all flex-1 max-w-xs mx-auto sm:mx-0"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {method.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.p
          className="mt-12 text-muted-foreground text-sm flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Made with <Heart className="w-4 h-4 text-primary inline" aria-hidden="true" /> and a lot of coffee
        </motion.p>
      </div>
    </section>
  )
}
