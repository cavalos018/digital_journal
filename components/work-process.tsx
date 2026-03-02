"use client"

import { motion } from "framer-motion"
import { Figma, Code2, Zap, CheckCircle2, Users, Lightbulb } from "lucide-react"

export default function WorkProcess() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description: "Understanding project goals, user needs, and technical requirements to create a solid foundation.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Figma,
      title: "Design & Prototyping",
      description: "Creating pixel-perfect designs in Figma with accessibility and responsiveness in mind.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "Development & Implementation",
      description: "Converting designs to production-ready code using React, SASS, and modern web standards.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CheckCircle2,
      title: "Testing & Optimization",
      description: "Ensuring WCAG 2.2 AA compliance, performance optimization, and cross-browser compatibility.",
      color: "from-orange-500 to-red-500",
    },
  ]

  const expertise = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led UI/frontend teams of 5+ designers to deliver exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimized legacy products for speed and modern web standards compliance.",
    },
    {
      icon: CheckCircle2,
      title: "Accessibility Expert",
      description: "WCAG 2.2 AA certified with deep expertise in ADA compliance and inclusive design.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            My{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Work Process
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A systematic approach to delivering exceptional digital experiences through design thinking, technical
            excellence, and accessibility-first development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div key={step.title} variants={itemVariants}>
                  <motion.div
                    className="relative group h-full"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {idx < processSteps.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-20 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"
                        aria-hidden="true"
                      />
                    )}

                    <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <motion.div
                          className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${step.color} mb-4`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                        </motion.div>

                        <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>

                        <motion.div
                          className="text-xs font-bold text-primary opacity-60"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          STEP {idx + 1}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-balance">Core Expertise</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {expertise.map((item) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} variants={itemVariants}>
                  <motion.div
                    className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
