import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Friends Telecom - Premium Apple Products Bangladesh',
  description: 'Authentic Apple products with official warranty. iPhone 16, MacBook M4, iPad Pro. Located at Bashundhara City Shopping Complex.',
  keywords: 'iPhone 16, MacBook M4, iPad Pro, Apple Watch, Friends Telecom Bangladesh, Bashundhara City',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}