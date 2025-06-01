'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { Download } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_50%)] animate-gradient" />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="container relative z-10 px-6 py-24 mx-auto"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-foreground-secondary/20 to-transparent"
          />

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-8 mb-12"
          >
            {/* Profile Picture */}
            <div className="relative w-40 h-40 mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-1 rounded-full bg-background" />
              <Image
                src="/profile.jpg"
                alt="Santhosh Kumar R"
                width={160}
                height={160}
                className="rounded-full relative z-10 object-cover p-1"
                priority
                unoptimized
              />
              <div className="absolute -inset-2 rounded-full border border-accent-primary/20" />
            </div>

            <div>
              <span className="text-sm text-foreground-secondary tracking-wider">
                WELCOME TO MY PORTFOLIO
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mt-2">
                <span className="inline-block gradient-text">Santhosh Kumar R</span>
              </h1>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl font-display text-foreground-secondary mb-8"
          >
            Senior Software Engineer
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-foreground-secondary/80 max-w-2xl mx-auto mb-12"
          >
            Cloud-native engineer with 7+ years of experience in automation, GenAI, and high-scale systems.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
            >
              <span className="relative z-10 text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                Explore My Work
              </span>
              <ArrowDownIcon className="w-4 h-4 text-foreground-secondary group-hover:text-foreground transition-colors duration-300 animate-float" />
              <div className="absolute inset-0 bg-accent-primary/10 group-hover:bg-accent-primary/20 rounded-full blur transition-all duration-300" />
              <div className="absolute inset-0 border border-foreground-secondary/20 group-hover:border-foreground-secondary/40 rounded-full transition-colors duration-300" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
            >
              <span className="relative z-10 text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                Download Resume
              </span>
              <Download className="w-4 h-4 text-foreground-secondary group-hover:text-foreground transition-colors duration-300" />
              <div className="absolute inset-0 bg-accent-secondary/10 group-hover:bg-accent-secondary/20 rounded-full blur transition-all duration-300" />
              <div className="absolute inset-0 border border-foreground-secondary/20 group-hover:border-foreground-secondary/40 rounded-full transition-colors duration-300" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '1s' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ maskImage: 'radial-gradient(circle at center, transparent 50%, black)' }}
      />
    </section>
  )
} 