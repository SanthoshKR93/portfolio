'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Accomplishments', href: '#accomplishments' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-muted"
    >
      <nav className="container mx-auto px-6 py-4">
        <NavigationMenu.Root className="relative flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-foreground">
            SK
          </Link>

          <NavigationMenu.List className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <div className="md:hidden">
            {/* Mobile menu button - to be implemented */}
          </div>
        </NavigationMenu.Root>
      </nav>
    </motion.header>
  )
} 