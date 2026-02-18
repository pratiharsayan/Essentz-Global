'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'
import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

const testimonials = TESTIMONIALS

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-beige/5 rounded-full blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-luxury-light">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="divider-luxury w-24 mx-auto mt-4" />
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <motion.div
            className="glassmorphism p-12 rounded-lg min-h-96 flex flex-col justify-center"
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-luxury-gold text-2xl">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl font-light text-luxury-light mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="border-t border-luxury-gold/20 pt-6">
              <h3 className="text-xl font-serif font-bold text-luxury-light">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-luxury-gold text-sm uppercase tracking-widest">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="text-luxury-gold hover:text-luxury-beige transition-colors text-2xl"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-luxury-gold w-8'
                      : 'bg-luxury-gold/30 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="text-luxury-gold hover:text-luxury-beige transition-colors text-2xl"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
