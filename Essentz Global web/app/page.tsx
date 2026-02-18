import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProductsSection from '@/components/ProductsSection'
import ManufacturingExcellence from '@/components/ManufacturingExcellence'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ProductsSection />
      <ManufacturingExcellence />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
