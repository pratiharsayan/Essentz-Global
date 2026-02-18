'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'
import { FiDroplet, FiBox, FiAward, FiGlobe } from 'react-icons/fi'

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const features = [
    {
      icon: <FiDroplet className="text-4xl" />,
      title: 'Premium Ingredients',
      description: 'Sourced globally, only the finest essential oils and ingredients',
    },
    {
      icon: <FiAward className="text-4xl" />,
      title: 'Long-lasting Fragrance',
      description: 'Sophisticated formulations that linger elegantly throughout the day',
    },
    {
      icon: <FiBox className="text-4xl" />,
      title: 'Elegant Packaging',
      description: 'Each bottle is a masterpiece of luxury design and craftsmanship',
    },
    {
      icon: <FiGlobe className="text-4xl" />,
      title: 'Global Standards',
      description: 'International quality certifications and rigorous testing protocols',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-luxury-beige/5 rounded-full blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
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
            Why Choose <span className="gradient-text">Essentz</span>
          </h2>
          <div className="divider-luxury w-24 mx-auto mt-4" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-8 rounded-lg text-center card-hover group cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-luxury-gold mb-4 flex justify-center group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-luxury-light">
                {feature.title}
              </h3>
              <p className="text-luxury-light/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
