'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAVIGATION } from '@/lib/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="relative w-32 h-12"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo.png"
              alt="Essentz Global Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="btn-luxury hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-luxury-gold text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-luxury-gold/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {NAVIGATION.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-luxury-light hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-luxury w-full mt-4">
              Shop Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
