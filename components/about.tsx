"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone, Clock } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Design to Code",
      description:
        "Converting pixel-perfect Figma/PSD designs into production-ready React applications with precision.",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Team Leadership",
      description:
        "Led UI/frontend teams of 5+ designers, fostering collaboration and delivering high-quality interfaces.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Accessibility First",
      description: "Committed to WCAG 2.2 AA standards, ensuring inclusive experiences for all users.",
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Performance",
      description: "Optimizing web applications for speed, efficiency, and modern web standards compliance.",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Creative Problem Solving",
      description: "Tackling complex UI challenges with innovative solutions and attention to detail.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with latest technologies, frameworks, and design trends in web development.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Sr. Software Engineer with{" "}
              <span className="font-semibold text-foreground">9.5+ years</span> of experience in React.js, JavaScript,
              and design-to-code conversion. My expertise lies in transforming pixel-perfect designs into
              production-ready web applications while maintaining accessibility standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At <span className="font-semibold text-foreground">Globant India</span>, I am leading a UI/frontend team of 5, delivering high-quality interactive interfaces and advancing web accessibility standards. I'm
              committed to performance optimization, modern web standards, and creating inclusive digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond code, I'm passionate about{" "}
              <span className="font-semibold text-foreground">cricket, photography, and gaming</span>. I believe in
              continuous learning and staying updated with the latest technologies and design trends.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Pune, India", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "nikiteshb@gmail.com",
                  link: "mailto:nikiteshb@gmail.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Phone",
                  value: "+91 9561501506",
                  link: "tel:+919561501506",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
                { label: "Experience", value: "9.5+ Years", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
