'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, isCartOpen, closeCart, itemCount, subtotal } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    // TODO: Integrate with Stripe Checkout
    alert('Stripe Checkout integration coming soon! For now, this shows cart functionality.');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-boxing-dark z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-boxing-gray">
          <h2 className="text-2xl font-heading text-white">
            YOUR CART ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-gray-400 text-lg mb-6">Your cart is empty</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="inline-block gradient-red text-white px-6 py-3 rounded-md font-heading text-lg hover:shadow-lg hover:shadow-boxing-red/50 transition-all"
              >
                SHOP NOW
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 bg-boxing-gray rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium mb-1 truncate">
                      {item.product.name}
                    </h3>
                    {item.selectedSize && (
                      <p className="text-gray-400 text-sm">Size: {item.selectedSize}</p>
                    )}
                    {item.selectedColor && (
                      <p className="text-gray-400 text-sm">Color: {item.selectedColor}</p>
                    )}
                    <p className="text-boxing-gold font-bold mt-2">
                      ${((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-boxing-gray hover:bg-boxing-red text-white rounded transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-boxing-gray hover:bg-boxing-red text-white rounded transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto text-gray-400 hover:text-boxing-red transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-boxing-gray p-6 bg-boxing-black">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 text-lg">Subtotal:</span>
              <span className="text-white font-heading text-2xl">${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full gradient-red text-white py-4 rounded-md font-heading text-xl hover:shadow-lg hover:shadow-boxing-red/50 transition-all"
            >
              CHECKOUT
            </button>
            <p className="text-gray-400 text-sm text-center mt-3">
              Shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
