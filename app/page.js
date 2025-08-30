'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

export default function Home() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('all')

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      )
    }
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <main className="min-h-screen bg-black">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartToggle={toggleCart}
      />
      
      <Hero />
      
      <ProductGrid 
        onAddToCart={addToCart}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      
      <Cart 
        items={cartItems}
        isOpen={isCartOpen}
        onClose={toggleCart}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      
      <Footer />
    </main>
  )
}