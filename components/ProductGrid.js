'use client'

import { useState, useEffect } from 'react'
import { products } from '../data/products'

const categories = [
  { id: 'all', name: 'All Products', icon: '📱' },
  { id: 'iphone', name: 'iPhone', icon: '📱' },
  { id: 'macbook', name: 'MacBook', icon: '💻' },
  { id: 'ipad', name: 'iPad', icon: '📱' },
  { id: 'watch', name: 'Apple Watch', icon: '⌚' },
  { id: 'accessories', name: 'Accessories', icon: '🎧' }
];

export default function ProductGrid({ onAddToCart, currentCategory, setCurrentCategory }) {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [loading, setLoading] = useState({})

  useEffect(() => {
    if (currentCategory === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === currentCategory))
    }
  }, [currentCategory])

  const handleAddToCart = async (product) => {
    setLoading(prev => ({ ...prev, [product.id]: true }))
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    onAddToCart(product)
    setLoading(prev => ({ ...prev, [product.id]: false }))
  }

  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Browse Categories
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Explore our complete range of Apple products
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-blue-50'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              {product.badge && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {product.badge}
                </div>
              )}

              <div className="relative mb-6 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-6xl">
                {product.emoji}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-blue-600">
                    ৳{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ৳{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-4">
                  <ul className="text-xs text-gray-700 space-y-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock || loading[product.id]}
                  className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:-translate-y-1"
                >
                  {loading[product.id] ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 rounded-full border-t-white animate-spin"></div>
                      <span>Adding...</span>
                    </div>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}