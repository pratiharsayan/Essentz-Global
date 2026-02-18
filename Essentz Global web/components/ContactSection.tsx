'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { BRAND } from '@/lib/constants'

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-luxury-light">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-luxury-light/70 text-lg">
            Let's create something beautiful together
          </p>
          <div className="divider-luxury w-24 mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Info */}
          {[
            {
              icon: <FiMail className="text-2xl" />,
              label: 'Email',
              value: BRAND.email,
              href: `mailto:${BRAND.email}`,
            },
            {
              icon: <FiPhone className="text-2xl" />,
              label: 'Phone',
              value: BRAND.phone,
              href: `tel:${BRAND.phone.replace(/\s+/g, '')}`,
            },
            {
              icon: <FiMapPin className="text-2xl" />,
              label: 'Location',
              value: 'Global Headquarters',
              href: '#',
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="glassmorphism p-6 rounded-lg text-center card-hover group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="text-luxury-gold mb-4 flex justify-center group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-luxury-light font-serif font-semibold mb-2">
                {item.label}
              </h3>
              <p className="text-luxury-light/70">{item.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glassmorphism p-8 md:p-12 rounded-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-luxury-light font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-light placeholder-luxury-light/40 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-luxury-light font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-light placeholder-luxury-light/40 focus:outline-none focus:border-luxury-gold transition-colors"
                  placeholder="Your Email"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label className="block text-luxury-light font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-light placeholder-luxury-light/40 focus:outline-none focus:border-luxury-gold transition-colors"
                placeholder="Your Phone (Optional)"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-luxury-light font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-luxury-black/50 border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-light placeholder-luxury-light/40 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                placeholder="Your Message..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="btn-luxury w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </form>

          {submitted && (
            <motion.div
              className="mt-4 p-4 bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg text-center text-luxury-gold text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you! We'll get back to you soon.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
