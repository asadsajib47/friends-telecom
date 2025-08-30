'use client'

import { companyInfo } from '../data/products'

export default function Cart({ items, isOpen, onClose, onRemoveItem, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryCharge = subtotal > 0 ? 200 : 0
  const total = subtotal + deliveryCharge

  const handleCheckout = () => {
    if (items.length === 0) return

    const orderDetails = items.map(item => 
      `${item.name} x${item.quantity} - ৳${(item.price * item.quantity).toLocaleString()}`
    ).join('\n')

    const message = `নতুন অর্ডার - Friends Telecom\n\nপণ্যের তালিকা:\n${orderDetails}\n\nসাবটোটাল: ৳${subtotal.toLocaleString()}\nডেলিভারি চার্জ: ৳${deliveryCharge.toLocaleString()}\nমোট: ৳${total.toLocaleString()}\n\nযোগাযোগ: ${companyInfo.phone}\nওয়েবসাইট: ${companyInfo.website}`

    const whatsappUrl = `https://wa.me/88${companyInfo.phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some products to get started</p>
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-2xl">
                    {item.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      ৳{item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                    >
                      -
                    </button>
                    
                    <span className="w-8 text-center font-semibold text-gray-900">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>৳{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>৳{deliveryCharge.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>৳{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300"
            >
              Checkout via WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center">
              Secure checkout • Free delivery in Dhaka • EMI available
            </p>
          </div>
        )}
      </div>
    </>
  )
}