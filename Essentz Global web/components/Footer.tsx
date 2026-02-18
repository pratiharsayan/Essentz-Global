'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { BRAND, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-luxury-dark/80 backdrop-blur-md border-t border-luxury-gold/10">
      {/* Main Footer */}
      <motion.div
        className="section-padding bg-luxury-black/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <motion.div className="md:col-span-1" variants={itemVariants}>
              <div className="relative w-24 h-16 mb-4">
                <Image
                  src="/logo.png"
                  alt="Essentz Global Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-luxury-light/70 text-sm leading-relaxed">
                Premium luxury perfumes crafted with elegance and precision. Your inner essence deserves the best.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-serif font-bold text-luxury-light mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '#hero' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Collection', href: '#products' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-luxury-light/70 hover:text-luxury-gold transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="font-serif font-bold text-luxury-light mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  'About Us',
                  'Craftsmanship',
                  'Sustainability',
                  'Careers',
                ].map((item) => (
                  <li key={item}>
                    <button className="text-luxury-light/70 hover:text-luxury-gold transition-colors text-sm">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="font-serif font-bold text-luxury-light mb-4">
                Contact
              </h4>
              <p className="text-luxury-light/70 text-sm mb-3">
                📧 {BRAND.email}
              </p>
              <p className="text-luxury-light/70 text-sm mb-4">
                📞 {BRAND.phone}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: FiFacebook, label: 'Facebook' },
                  { icon: FiInstagram, label: 'Instagram' },
                  { icon: FiTwitter, label: 'Twitter' },
                  { icon: FiLinkedin, label: 'LinkedIn' },
                ].map((social) => (
                  <motion.button
                    key={social.label}
                    className="text-luxury-gold hover:text-luxury-beige transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="divider-luxury mb-8" />

          {/* Bottom Footer */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            variants={itemVariants}
          >
            <p className="text-luxury-light/60 text-sm text-center md:text-left mb-4 md:mb-0">
              © {BRAND.year} {BRAND.name}. All Rights Reserved.
            </p>

            <div className="flex gap-6">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'Cookie Policy', href: '#' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-luxury-light/60 hover:text-luxury-gold transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 border border-luxury-gold/50 rounded-full flex items-center justify-center text-luxury-gold transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        ↑
      </motion.button>
    </footer>
  )
}
