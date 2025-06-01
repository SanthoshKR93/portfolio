'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const experiences = [
  {
    company: 'Databricks',
    role: 'Senior Applications Engineer',
    period: 'Nov 2023 – Present',
    highlights: [
      'Led automation-first initiatives integrating GenAI with enterprise platforms',
      'Engineered scalable microservices with Python, Go on AWS Lambda, EKS, Azure Functions',
      'Built internal tools on Databricks Apps with React for configuration & monitoring',
      'Reduced finance month-end close time by 60% through automated workflows across Salesforce, Workday & NetSuite',
      'CI/CD pipelines with Terraform, Pulumi, GitOps, Jenkins, ArgoCD',
      'Integrated GenAI via Delta Lakehouse, Databricks AI Bricks, Fivetran'
    ],
    tech: ['Python', 'Go', 'AWS', 'Azure', 'React', 'Terraform', 'GenAI']
  },
  {
    company: 'FalconX',
    role: 'Senior Software Engineer (Contract)',
    period: 'Jan 2023 – Nov 2023',
    highlights: [
      'Built high-performance trading systems using Go and Python',
      'Designed FIX/WebSocket APIs for real-time institutional trading',
      'Integrated US banking systems for fiat-crypto transfers',
      'Event-driven architecture with Kafka, deployed via Jsonnet + ArgoCD'
    ],
    tech: ['Go', 'Python', 'Kafka', 'ArgoCD', 'WebSocket', 'FIX']
  },
  {
    company: 'Databricks',
    role: 'Senior Software Engineer (Contract)',
    period: 'Mar 2022 – Jan 2023',
    highlights: [
      'Developed Python microservices on AWS Lambda/EKS and Azure App Services',
      'Built message processing workflows and Jenkins-based CI/CD pipelines'
    ],
    tech: ['Python', 'AWS', 'Azure', 'Jenkins', 'Microservices']
  },
  {
    company: 'Cambridge Mobile Telematics',
    role: 'Senior Software Engineer (Contract)',
    period: 'Aug 2021 – Mar 2022',
    highlights: [
      'Developed Django APIs for mobile telematics',
      'Automated validation with Appium, PCloudy, and testing dashboards'
    ],
    tech: ['Django', 'Python', 'Appium', 'Testing']
  },
  {
    company: 'Elotl',
    role: 'Senior Software Engineer (Contract)',
    period: 'Feb 2021 – Aug 2021',
    highlights: [
      'Created Kubernetes observability tool using Flask and real-time EKS metrics',
      'Delivered deployable dashboards with actionable metrics'
    ],
    tech: ['Flask', 'Python', 'Kubernetes', 'EKS', 'Observability']
  },
  {
    company: 'Devcon',
    role: 'Software Engineer (Contract)',
    period: 'Nov 2020 – Feb 2021',
    highlights: [
      'Created vulnerability scanner using Python and AWS Batch',
      'Integrated into CI/CD for DevSecOps'
    ],
    tech: ['Python', 'AWS', 'Security', 'DevSecOps']
  },
  {
    company: 'Scrapy Cloud',
    role: 'Software Engineer (Contract)',
    period: 'Dec 2019 – Oct 2020',
    highlights: [
      'Built a GCP-based web scraping pipeline using Scrapy + BigQuery',
      'Optimized throttling, reduced crawl time by 35%'
    ],
    tech: ['Python', 'Scrapy', 'GCP', 'BigQuery']
  },
  {
    company: 'Mathrubhumi',
    role: 'Software Engineer (Contract)',
    period: 'May 2019 – Dec 2019',
    highlights: [
      'Built Django-React CRM deployed on AWS',
      'Reduced manual sales processes by 60% via CI/CD automations'
    ],
    tech: ['Django', 'React', 'AWS', 'CI/CD']
  }
]

export function Experience() {
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
      id="experience" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]" />

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
                <span className="gradient-text">Professional Journey</span>
              </h2>
              <p className="text-foreground-secondary/80 max-w-2xl mx-auto">
                Building and scaling systems across AI, fintech, and enterprise domains
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-8 md:left-1/2 h-full w-px bg-gradient-to-b from-accent-primary/50 via-accent-primary/20 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-accent-primary relative">
                    <div className="absolute inset-0 rounded-full bg-accent-primary/50 animate-ping" />
                  </div>
                </div>

                <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                  <div className="group">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-accent-primary transition-colors">
                      {exp.company}
                    </h3>
                    <div className="text-lg font-medium text-foreground-secondary mb-1">{exp.role}</div>
                    <div className="text-sm text-foreground-secondary/70 mb-4">{exp.period}</div>
                    
                    <ul className="space-y-3 text-foreground-secondary/90">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary group-hover/item:scale-125 transition-transform" />
                          <span className="group-hover/item:text-foreground transition-colors">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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