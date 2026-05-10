import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Manufacturing', href: '/#manufacturing' },
  { name: 'Contact Us', href: '/#contact' },
]

const products = [
  { name: 'Brass Cable Glands', href: '/products?category=brass-cable-glands' },
  { name: 'Cable Gland Accessories', href: '/products?category=cable-glands-accessories' },
  { name: 'Cable Lugs & Connectors', href: '/products?category=cable-lugs-connectors' },
  { name: 'Brass Earthing Parts', href: '/products?category=brass-earthing-parts' },
  { name: 'Cable Gland Kits', href: '/products?category=cable-gland-kits' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.4174918902995!2d70.05474557462095!3d22.41330687960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576b4998d68ad5%3A0x3fb97fb4ab19ea19!2s383%2C%20Patel%20Chowk%20Rd%2C%20G.I.D.C.%20Phase%202%2C%20GIDC%20Phase-2%2C%20Dared%2C%20Jamnagar%2C%20Gujarat%20361012!5e0!3m2!1sen!2sin!4v1777813385540!5m2!1sen!2sin"

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Link href="/" className="flex items-center gap-3 mb-6">
              {/* <Image
                src="/images/header/logo1 (1).png"
                alt="Rudra Brass Industries Logo"
                width={64}
                height={64}
                className="object-contain"
              />

              <span className="text-2xl font-light text-gray-400">|</span> */}

              <Image
                src="/images/header/hardvix.png"
                alt="Logo 2"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A prominent manufacturer specializing in high-quality cable glands and electrical 
              accessories for industrial applications since 1991.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#EDE8D0] hover:text-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#EDE8D0] -mb-2" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Our Products
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#EDE8D0] -mb-2" />
            </h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    href={product.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#EDE8D0] -mb-2" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EDE8D0] flex-shrink-0 mt-1" />
                <span className="text-gray-300">Plot no. 383, Near Patel Chock, Phase-II, Dared, Jamnagar, 361004</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#EDE8D0] flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <a href="tel:+919173684333" className="block hover:text-gray-100 transition-colors">
                  +91 92748 22527
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#EDE8D0] flex-shrink-0 mt-1" />
                <a 
                  href="mailto:info@rudrabrassindustries.com" 
                  className="text-gray-300 hover:text-gray-100 transition-colors break-all"
                >
                  info@rudrametal.in
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-[#faf7f2] text-lg font-bold mb-6 relative pb-3">
              Reach Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#EDE8D0]" />
            </h4>

            <div className="rounded-xl overflow-hidden border border-[#faf7f2]/10 shadow-lg">

              {/* Embedded Map */}
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="200"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rudra Brass Industries Location"
              />
            </div>
            <div className="mt-3 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#EDE8D0] flex-shrink-0 mt-0.5" />
              <p className="text-gray-100 text-xs leading-relaxed">
                Plot no. 383, Near Patel Chock, Phase-II, Dared, Jamnagar, 361004
              </p>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Rudra Brass Industries. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
