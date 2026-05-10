import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import Products from '@/components/Products'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import Manufacturing from '@/components/Manufacturing'
import Industries from '@/components/Industries'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import HeroVideo from '../components/HeroVideo'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroVideo />
      <Products />
      <AboutUs />
      <WhyChooseUs />
      <Manufacturing />
      <Industries />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
