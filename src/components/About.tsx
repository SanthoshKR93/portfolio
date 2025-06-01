'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(textRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <motion.div
        style={{ opacity, y }}
        className="container relative z-10 mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="prose prose-invert prose-lg">
              <p className="text-foreground-secondary/90 leading-relaxed">
                I'm a results-driven Senior Software Engineer with 7+ years of experience building full-stack 
                and backend systems across AI, fintech, and enterprise domains.
              </p>
              
              <p className="text-foreground-secondary/90 leading-relaxed">
                I specialize in Python and Golang with deep expertise in cloud-native architectures, 
                GenAI platform integrations, CI/CD, observability, and engineering automation.
              </p>
              
              <p className="text-foreground-secondary/90 leading-relaxed">
                I thrive in fast-paced teams where innovation meets infrastructure.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/50 to-accent-secondary/50 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500" />
                <div className="card relative flex flex-col items-center justify-center py-8">
                  <div className="text-4xl font-display font-bold mb-3 gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
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

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '60%', label: 'Faster Month-end Close' },
  { value: '99.99%', label: 'API Uptime' },
] 