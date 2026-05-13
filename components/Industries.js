'use client'

import { 
  Car, 
  Factory, 
  Radio, 
  Train, 
  Plane, 
  Droplet, 
  AlertTriangle, 
  HardHat,
  Tractor,
  Stethoscope,
  Plug,
  Settings,
  Package,
  Droplets,
  Bath,
  Home,
  Gauge,
  Flame,
  Wind,
  Cpu,
  Cable,
  Waves,
  Zap,
  Fuel
} from 'lucide-react'

const industries = [
  // { icon: Tractor, name: 'Agriculture & Heavy Equipment' },
  { icon: Settings, name: 'Industrial Assembly' },
  { icon: Bath, name: 'Sanitary and Plumbing' },
  { icon: Home, name: 'Home Appliances' },
  { icon: Cable, name: 'Cable Accessories' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-700 font-semibold text-lg mb-2">Where Our Products Are Used</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto" />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] hover:bg-[#1a3a2a] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#1a3a2a] group-hover:bg-[#EDE8D0] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <industry.icon className="w-7 h-7 text-white group-hover:text-gray-700" />
              </div>
              <h4 className="text-sm font-semibold text-[#1a3a2a] group-hover:text-white transition-colors">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
