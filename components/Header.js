'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        {name: 'Brass Components', href: '/products?category=brass components'},
        { name: 'Butt Hinges', href: '/products?category=butt-hinges' },
        { name: 'Parlament', href: '/products?category=parlament' },
        { name: 'F-Bracket', href: '/products?category=f-bracket' },
        { name: 'Tower Bolt', href: '/products?category=tower bolt' },
        { name: 'Gate Hook', href: '/products?category=gate hook' },
        { name: 'Door Handle', href: '/products?category=door handle' },
      ]
    },
    { name: 'Manufacturing', href: '/#manufacturing' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Contact Us', href: '/#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1a3a2a] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919274822527" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Phone className="w-4 h-4" />
              +91 92748 22527
            </a>

            <a href="tel:+919737158755" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Phone className="w-4 h-4" />
              +91 97371 58755
            </a>
          </div>
          <a href="mailto:info@rudrabrassindustries.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail className="w-4 h-4" />
            info@rudrametal.in
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/header/rudra.png"
                alt="Rudra Brass Industries Logo"
                width={64}
                height={64}
                className="object-contain"
              />

              <span className="text-2xl font-light text-gray-400">|</span>

              <Image
                src="/images/header/hardvix.png"
                alt="Logo 2"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-[#1a3a2a] font-medium hover:text-gray-900 transition-colors py-2"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border-t-2 border-[#1a3a2a]">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#1a3a2a] hover:bg-[#f5f5f5] hover:text-gray-700 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="hidden lg:block bg-[#1a3a2a] text-white px-6 py-3 rounded font-semibold hover:bg-green-900 transition-colors"
            >
              Get A Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#1a3a2a]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-[#1a3a2a] font-medium hover:text-gray-700 border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-gray-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/#contact"
                className="block mt-4 bg-green-900 text-white px-6 py-3 rounded font-semibold text-center hover:bg-black transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get A Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
