'use client'
import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const accomplishments = [
  {
    metric: '60%',
    description: 'Reduction in finance month-end close time via automation',
    icon: '⚡️'
  },
  {
    metric: '40%',
    description: 'Faster internal data pipelines through platform modernization',
    icon: '🚀'
  },
  {
    metric: '70%',
    description: 'Reduction in deployment incidents via seamless CI/CD',
    icon: '🛡️'
  },
  {
    metric: '99.99%',
    description: 'Uptime for high-throughput trading APIs at FalconX',
    icon: '📈'
  },
  {
    metric: '50%',
    description: 'Decrease in issue triage time with Kubernetes observability tool',
    icon: '🔍'
  },
  {
    metric: 'GenAI',
    description: 'Enabled enterprise LLM workflows with GenAI integrations',
    icon: '🤖'
  },
]

export function Accomplishments() {
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
      id="accomplishments" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]" />

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
                <span className="gradient-text">Key Accomplishments</span>
              </h2>
              <p className="text-foreground-secondary/80 max-w-2xl mx-auto">
                Driving impact through innovation and technical excellence
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
            {accomplishments.map((item, index) => (
              <motion.div
                key={item.description}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                {/* Hover effect background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/50 to-accent-secondary/50 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500" />
                
                {/* Card content */}
                <div className="card relative flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="text-4xl font-display font-bold gradient-text">
                      {item.metric}
                    </div>
                  </div>
                  
                  <div className="text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                    {item.description}
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Corner accent */}
                <div className="absolute -top-px -right-px w-6 h-6">
                  <div className="absolute transform rotate-45 translate-x-2/4 -translate-y-2/4 w-2 h-2 rounded-sm bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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