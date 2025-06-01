'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'

const contactInfo = {
  email: 'santhoshk728@gmail.com',
  location: 'Bangalore, India',
  linkedin: 'https://www.linkedin.com/in/santhosh-kr/',
  github: 'https://github.com/santhoshkr93'
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: contactInfo.linkedin,
    icon: Linkedin,
    color: '#0A66C2'
  },
  {
    name: 'GitHub',
    href: contactInfo.github,
    icon: Github,
    color: '#f0f6fc'
  }
]

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <motion.div
        style={{ opacity, y }}
        className="container relative z-10 mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="gradient-text">Get in Touch</span>
              </h2>
              <p className="text-foreground-secondary/80 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.a
              href={`mailto:${contactInfo.email}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/50 to-accent-secondary/50 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="card relative flex items-center gap-4 py-8 px-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-foreground-secondary">Email</span>
                  <span className="text-foreground group-hover:text-accent-primary transition-colors">
                    {contactInfo.email}
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/50 to-accent-secondary/50 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="card relative flex items-center gap-4 py-8 px-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-foreground-secondary">Location</span>
                  <span className="text-foreground group-hover:text-accent-primary transition-colors">
                    {contactInfo.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="group relative p-3"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <link.icon 
                  className="w-6 h-6 text-foreground-secondary group-hover:text-accent-primary transition-colors"
                  style={{ stroke: link.color }}
                />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        style={{ 
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          opacity: 0.5 
        }}
      />
    </section>
  )
} 