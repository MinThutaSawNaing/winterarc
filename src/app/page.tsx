import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <FloatingWhatsApp />
      <Contact />
      <Footer />
    </main>
  )
}