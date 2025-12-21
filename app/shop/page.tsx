'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products, categories, type Product } from '@/data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-boxing-black">
      {/* Header */}
      <div className="bg-boxing-dark border-b border-boxing-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-heading text-white mb-6">
              BOXING <span className="text-boxing-red">SHOP</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium boxing equipment and gear. Get everything you need to train like a champion.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 rounded-md font-heading text-lg transition-all ${
                  selectedCategory === cat.value
                    ? 'gradient-red text-white shadow-lg shadow-boxing-red/30'
                    : 'bg-boxing-dark text-gray-400 hover:text-white hover:border-boxing-red border border-boxing-gray'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.salePrice && product.salePrice < product.price;
  const displayPrice = product.salePrice || product.price;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group bg-boxing-dark border border-boxing-gray rounded-lg overflow-hidden hover:border-boxing-red transition-all duration-300 hover:shadow-lg hover:shadow-boxing-red/20"
    >
      {/* Product Image */}
      <div className="relative h-80 bg-boxing-gray overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hasDiscount && (
          <div className="absolute top-4 right-4 bg-boxing-red text-white px-3 py-1 rounded-full font-bold text-sm">
            SALE
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-heading text-2xl">OUT OF STOCK</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="text-boxing-gold text-sm font-medium uppercase mb-2">
          {product.category.replace('-', ' ')}
        </div>
        <h3 className="text-xl font-heading text-white mb-3 group-hover:text-boxing-red transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-white font-heading text-2xl">
            ${displayPrice.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-gray-500 line-through text-lg">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center text-boxing-red group-hover:text-boxing-gold transition-colors font-medium">
          <span>View Details</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
