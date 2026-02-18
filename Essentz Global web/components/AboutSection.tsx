'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="about" className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Title */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-luxury-light">
              About
              <br />
              <span className="gradient-text">Essentz Global</span>
            </h2>
            <div className="divider-luxury w-24 mx-auto mt-4" />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              className="relative h-96 bg-gradient-to-br from-luxury-gold/20 to-luxury-beige/10 rounded-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-luxury-gold/30">
                  <div className="text-6xl mb-2">✨</div>
                  <p className="text-luxury-light/50">Luxury Perfume Essence</p>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <p className="text-lg text-luxury-light/80 leading-relaxed">
                Essentz Global represents the pinnacle of perfume craftsmanship, where tradition meets innovation. Our master perfumers combine rare, high-grade essential oils with cutting-edge formulation techniques to create fragrances that transcend the ordinary.
              </p>

              <p className="text-lg text-luxury-light/80 leading-relaxed">
                Each fragrance in our collection tells a story of elegance, sophistication, and timeless luxury. We believe that a perfect perfume is more than a scent—it's an expression of one's inner essence and personal identity.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-4">
                  <span className="text-luxury-gold text-2xl mt-1">✓</span>
                  <p className="text-luxury-light/80">Handcrafted with premium ingredients sourced globally</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-luxury-gold text-2xl mt-1">✓</span>
                  <p className="text-luxury-light/80">Perfected through decades of olfactory expertise</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-luxury-gold text-2xl mt-1">✓</span>
                  <p className="text-luxury-light/80">Sustainable and ethical production practices</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
