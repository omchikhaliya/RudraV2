import { Poppins, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "react-hot-toast";
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-opensans'
})

export const metadata = {
  title: 'Rudra Metal | Manufacturer and Supplier of Metal Products & Accessories',
  description: 'Leading manufacturer and supplier of high precision Hardware products, Brass components and Accessories from Jamnagar, Gujarat, India.',
  keywords: 'Hardware Products, Brackets, Hinges, Tower Bolt, Door Handle, Brass components, Brass Items, SS Items, Aluminium Items, Jamnagar',
  icons: {
    icon: 'images/header/rudra.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
