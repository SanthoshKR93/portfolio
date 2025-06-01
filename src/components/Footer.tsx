'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

const contactInfo = {
  email: 'santhoshk728@gmail.com',
  linkedin: 'https://www.linkedin.com/in/santhosh-kr/',
  github: 'https://github.com/santhoshkr93'
}

const socialLinks = [
  {
    name: 'Email',
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    href: contactInfo.linkedin,
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: contactInfo.github,
    icon: Github,
  }
]

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })

  return (
    <footer 
      ref={containerRef}
      className="relative py-12 overflow-hidden border-t border-foreground-secondary/10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-foreground-secondary">
                © {new Date().getFullYear()} Santhosh Kumar R
              </p>
              <p className="text-sm text-foreground-secondary/60 mt-1">
                All rights reserved
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-6 text-sm text-foreground-secondary/80">
              <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
              <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent-primary/10 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5 text-foreground-secondary group-hover:text-accent-primary transition-colors" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-foreground-secondary/10">
            <p className="text-center text-sm text-foreground-secondary/60">
              Built with Next.js, TailwindCSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        style={{ 
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          opacity: 0.3 
        }}
      />
    </footer>
  )
} 