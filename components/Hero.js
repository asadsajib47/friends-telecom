'use client'

import { companyInfo } from '../data/products'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-white">
          Premium Apple Products
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          iPhone 16 series, MacBook M4, authentic Apple products in Bangladesh
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold">
            Shop Now
          </button>
          
          <a href={`tel:${companyInfo.phone}`} className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold">
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}