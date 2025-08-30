'use client'

import { companyInfo } from '../data/products'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for authentic Apple products in Bangladesh.
            </p>
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
              Authorized Apple Reseller
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <p className="text-gray-400 mb-2">Phone: {companyInfo.phone}</p>
            <p className="text-gray-400 mb-2">{companyInfo.address}</p>
            <p className="text-gray-400">{companyInfo.city}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <p className="text-gray-400">iPhone 16 Series</p>
            <p className="text-gray-400">MacBook M4</p>
            <p className="text-gray-400">iPad Pro</p>
            <p className="text-gray-400">Apple Watch</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Service</h3>
            <p className="text-gray-400">Official Warranty</p>
            <p className="text-gray-400">Free Delivery</p>
            <p className="text-gray-400">EMI Available</p>
            <p className="text-gray-400">24/7 Support</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}