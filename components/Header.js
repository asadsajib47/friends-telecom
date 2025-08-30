'use client'

import { useState } from 'react'
import { companyInfo } from '../data/products'

export default function Header({ cartItemCount, onCartToggle }) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <a href={`tel:${companyInfo.phone}`} className="hover:underline">
          📞 {companyInfo.phone}
        </a>
        <span className="mx-4">|</span>
        📍 {companyInfo.address}
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {companyInfo.name}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hidden sm:block w-64 px-4 py-2 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
              />

              <button
                onClick={onCartToggle}
                className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <span>🛒 Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}