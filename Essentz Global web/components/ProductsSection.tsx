'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'
import { PRODUCTS } from '@/lib/constants'

// Product data - Easy to update
const products = PRODUCTS

export default function ProductsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="products" className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-luxury-light">
            Our <span className="gradient-text">Collection</span>
          </h2>
          <p className="text-luxury-light/70 text-lg max-w-2xl mx-auto">
            Discover our handcrafted perfume collection, each fragrance carefully curated to capture life's most precious moments
          </p>
          <div className="divider-luxury w-24 mx-auto mt-4" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group"
              variants={cardVariants}
            >
              <motion.div
                className="relative bg-gradient-to-br from-luxury-beige/10 to-luxury-gold/5 rounded-lg overflow-hidden card-hover h-64 mb-4 flex items-end justify-center p-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent" />
                <motion.div
                  className="text-7xl relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💎
                </motion.div>
              </motion.div>

              <div className="glassmorphism p-6 rounded-lg space-y-3">
                <h3 className="text-2xl font-serif font-bold text-luxury-light">
                  {product.name}
                </h3>
                <p className="text-luxury-light/70 text-sm">
                  {product.description}
                </p>
                <p className="text-luxury-gold text-xs uppercase tracking-widest font-semibold">
                  {product.notes}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-luxury-gold/20">
                  <span className="text-2xl font-serif font-bold text-luxury-gold">
                    {product.price}
                  </span>
                  <motion.button
                    className="btn-luxury-outline text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="btn-luxury"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Complete Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
