'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors?.[0]
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const hasDiscount = product.salePrice && product.salePrice < product.price;
  const displayPrice = product.salePrice || product.price;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Images */}
      <div>
        {/* Main Image */}
        <div className="relative h-[600px] bg-boxing-dark rounded-lg overflow-hidden mb-4">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {hasDiscount && (
            <div className="absolute top-4 right-4 bg-boxing-red text-white px-4 py-2 rounded-full font-bold">
              SAVE ${(product.price - displayPrice).toFixed(2)}
            </div>
          )}
        </div>

        {/* Thumbnail Images */}
        {product.images.length > 1 && (
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 w-24 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? 'border-boxing-red'
                    : 'border-boxing-gray hover:border-boxing-gold'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <div className="text-boxing-gold text-sm font-medium uppercase mb-2">
          {product.category.replace('-', ' ')}
        </div>
        <h1 className="text-5xl font-heading text-white mb-4">
          {product.name}
        </h1>

        {/* Price */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-white font-heading text-4xl">
            ${displayPrice.toFixed(2)}
          </span>
          {hasDiscount && (
            <>
              <span className="text-gray-500 line-through text-2xl">
                ${product.price.toFixed(2)}
              </span>
              <span className="bg-boxing-red text-white px-3 py-1 rounded-full font-bold text-sm">
                {Math.round(((product.price - displayPrice) / product.price) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {product.description}
        </p>
        {/* Who This Is For */}
        {product.whoThisIsFor && (
          <div className="bg-boxing-gray/30 border border-boxing-gold/30 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-boxing-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-boxing-gold font-heading text-sm uppercase">Who This Is For</span>
            </div>
            <p className="text-white font-medium">{product.whoThisIsFor}</p>
          </div>
        )}

        {/* Size Selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-6">
            <label className="block text-white font-heading text-xl mb-3">
              SIZE:
            </label>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-boxing-red text-white'
                      : 'bg-boxing-dark text-gray-400 hover:text-white border border-boxing-gray hover:border-boxing-gold'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-8">
            <label className="block text-white font-heading text-xl mb-3">
              COLOR:
            </label>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    selectedColor === color
                      ? 'bg-boxing-red text-white'
                      : 'bg-boxing-dark text-gray-400 hover:text-white border border-boxing-gray hover:border-boxing-gold'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-4 rounded-md font-heading text-2xl mb-4 transition-all ${
            product.inStock
              ? 'gradient-red text-white hover:shadow-lg hover:shadow-boxing-red/50'
              : 'bg-boxing-gray text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
        </button>

        {product.inStock && (
          <p className="text-gray-400 text-sm text-center">
            Free shipping on orders over $100
          </p>
        )}

        {/* What's Included (for bundles) */}
        {product.whatsIncluded && product.whatsIncluded.length > 0 && (
          <div className="mb-8 border-t border-boxing-gray pt-8">
            <h3 className="text-2xl font-heading text-white mb-4">WHAT'S INCLUDED</h3>
            <ul className="space-y-3">
              {product.whatsIncluded.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <svg className="w-6 h-6 text-boxing-gold mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Features */}
        <div className="mt-8 border-t border-boxing-gray pt-8">
          <h3 className="text-2xl font-heading text-white mb-4">FEATURES</h3>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <svg className="w-6 h-6 text-boxing-red mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Specifications */}
        {product.specifications && (
          <div className="mt-8 border-t border-boxing-gray pt-8">
            <h3 className="text-2xl font-heading text-white mb-4">SPECIFICATIONS</h3>
            <dl className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex">
                  <dt className="text-boxing-gold font-medium w-1/3">{key}:</dt>
                  <dd className="text-gray-300 w-2/3">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}
