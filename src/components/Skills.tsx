'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: ['Python (Flask, FastAPI, Django)', 'Go', 'JavaScript (React)', 'Bash', 'Shell scripting'],
    icon: '🔧'
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS (Lambda, EKS, S3, IAM, DynamoDB)', 'Azure (App Services, Functions, Databricks)'],
    icon: '☁️'
  },
  {
    title: 'DevOps & Infra',
    skills: ['Terraform', 'Pulumi', 'Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'ArgoCD', 'Git'],
    icon: '🔄'
  },
  {
    title: 'Data & Messaging',
    skills: ['SQL', 'NoSQL (DynamoDB)', 'Delta Lake', 'Apache Kafka', 'AWS SQS', 'Fivetran', '3PI connectors'],
    icon: '📊'
  },
  {
    title: 'Architecture',
    skills: ['Microservices', 'Serverless', 'REST APIs', 'Event-driven systems', 'WebSockets', 'FIX Protocol'],
    icon: '🏗️'
  },
  {
    title: 'Testing & QA',
    skills: ['Pytest', 'Unit & Integration Testing', 'Appium', 'PCloudy'],
    icon: '🎯'
  },
]

export function Skills() {
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
      id="skills" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.08),transparent_50%)]" />

      <motion.div
        style={{ opacity, y }}
        className="container relative z-10 mx-auto px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="gradient-text">Skills & Expertise</span>
              </h2>
              <p className="text-foreground-secondary/80 max-w-2xl mx-auto">
                A comprehensive toolkit built over 7+ years of solving complex engineering challenges
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/50 to-accent-secondary/50 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500" />
                <div className="card relative flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-accent-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="text-foreground-secondary group-hover:text-foreground-secondary/90 flex items-center gap-3 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
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