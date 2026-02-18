'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'
import { FiFlask, FiZap, FiCheckCircle } from 'react-icons/fi'

export default function ManufacturingExcellence() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const steps = [
    {
      icon: <FiFlask className="text-4xl" />,
      title: 'High-Grade Essential Oils',
      description: 'We source only the purest essential oils and aromatic compounds from premium suppliers around the world, ensuring uncompromising quality.',
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: 'Modern Manufacturing Process',
      description: 'State-of-the-art facilities combined with time-honored techniques create the perfect balance between tradition and innovation.',
    },
    {
      icon: <FiCheckCircle className="text-4xl" />,
      title: 'Strict Quality Checks',
      description: 'Every batch undergoes rigorous testing for purity, stability, and longevity, meeting international luxury perfume standards.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute -top-40 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            Manufacturing <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-luxury-light/70 text-lg max-w-2xl mx-auto">
            Crafted with precision, passion, and an unwavering commitment to perfection
          </p>
          <div className="divider-luxury w-24 mx-auto mt-4" />
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-beige/10 rounded-lg flex items-center justify-center text-luxury-gold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="glassmorphism p-6 rounded-lg"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-2xl font-serif font-bold text-luxury-light mb-3">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-luxury-light/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-12 bg-gradient-to-b from-luxury-gold/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-luxury-gold/20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { number: '25+', label: 'Years of Expertise' },
            { number: '500+', label: 'Premium Formulations' },
            { number: '40+', label: 'Countries Served' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-serif font-bold text-luxury-gold mb-2">
                {stat.number}
              </div>
              <p className="text-luxury-light/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
