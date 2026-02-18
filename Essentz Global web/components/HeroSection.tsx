'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-dark to-luxury-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-luxury-beige/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold mb-6 text-luxury-light leading-tight"
          variants={itemVariants}
        >
          Awaken Your
          <br />
          <span className="gradient-text">Inner Essence</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-luxury-light/80 mb-8 font-light tracking-wide"
          variants={itemVariants}
        >
          Premium Crafted Perfumes for the Modern World
        </motion.p>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          variants={itemVariants}
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-luxury-gold" />
          <span className="text-luxury-gold text-sm tracking-widest">EST. 2026</span>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-luxury-gold" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link href="#products">
            <motion.button
              className="btn-luxury"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 169, 97, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.button>
          </Link>
          <Link href="#contact">
            <motion.button
              className="btn-luxury-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-luxury-gold text-sm">↓ Scroll to Explore</div>
      </motion.div>
    </section>
  )
}
