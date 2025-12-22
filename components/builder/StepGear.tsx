'use client';

import { useBuilder } from '@/context/BuilderContext';
import { products } from '@/data/products';
import Image from 'next/image';
import { useEffect } from 'react';

export default function StepGear() {
  const {
    selectedProgram,
    selectedGear,
    toggleGear,
    getGearPrice,
  } = useBuilder();

  if (!selectedProgram) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Please select a program first.</p>
      </div>
    );
  }

  // Get recommended gear for this program
  const recommendedProducts = products.filter((product) =>
    selectedProgram.recommendedGear.includes(product.slug)
  );

  // Auto-select recommended gear on first load (Chipotle style - smart defaults)
  useEffect(() => {
    // Only auto-select if no gear is selected yet and we have recommendations
    if (selectedGear.length === 0 && recommendedProducts.length > 0) {
      // Auto-select the first recommended item (usually a bundle)
      const firstRecommended = recommendedProducts[0];
      if (firstRecommended) {
        toggleGear(firstRecommended);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProgram.id]); // Only run when program changes

  const gearPrice = getGearPrice();
  const isProductSelected = (productId: string) =>
    selectedGear.some((p) => p.id === productId);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
          ADD <span className="text-boxing-red">GEAR</span>
        </h2>
        <p className="text-xl text-gray-300">
          Need equipment? We've pre-selected what you need. Keep, remove, or swap as you like.
        </p>
      </div>

      {/* Recommended Gear */}
      {recommendedProducts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-heading text-white">
            Recommended for {selectedProgram.name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((product) => {
              const isSelected = isProductSelected(product.id);
              const price = product.salePrice || product.price;
              const savings = product.salePrice ? product.price - product.salePrice : 0;

              return (
                <div
                  key={product.id}
                  className={`
                    relative bg-boxing-dark border-2 rounded-lg overflow-hidden
                    transition-all duration-300
                    ${
                      isSelected
                        ? 'border-boxing-red shadow-lg shadow-boxing-red/50'
                        : 'border-boxing-gray'
                    }
                  `}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-boxing-gray">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {savings > 0 && (
                      <div className="absolute top-4 right-4 bg-boxing-red text-white font-heading text-sm px-3 py-1 rounded-md">
                        SAVE ${savings}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-heading text-white mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Who This Is For */}
                    {product.whoThisIsFor && (
                      <p className="text-boxing-gold text-xs mb-4">
                        {product.whoThisIsFor}
                      </p>
                    )}

                    {/* What's Included (for bundles) */}
                    {product.whatsIncluded && product.whatsIncluded.length > 0 && (
                      <ul className="space-y-1 mb-4">
                        {product.whatsIncluded.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
                            <svg className="w-3 h-3 text-boxing-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                        {product.whatsIncluded.length > 3 && (
                          <li className="text-xs text-gray-500 ml-5">
                            +{product.whatsIncluded.length - 3} more items
                          </li>
                        )}
                      </ul>
                    )}

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        {product.salePrice ? (
                          <div>
                            <span className="text-gray-500 line-through text-sm">
                              ${product.price}
                            </span>
                            <span className="text-boxing-gold font-heading text-2xl ml-2">
                              ${product.salePrice}
                            </span>
                          </div>
                        ) : (
                          <span className="text-boxing-gold font-heading text-2xl">
                            ${product.price}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleGear(product)}
                        className={`
                          px-4 py-2 rounded-md font-medium transition-all
                          ${
                            isSelected
                              ? 'bg-boxing-red text-white hover:bg-boxing-red/80'
                              : 'bg-boxing-gray text-white hover:bg-boxing-gold hover:text-boxing-black'
                          }
                        `}
                      >
                        {isSelected ? 'Remove' : 'Add'}
                      </button>
                    </div>
                  </div>

                  {/* Selected indicator */}
                  {isSelected && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-boxing-red rounded-full p-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Gear Summary */}
      {selectedGear.length > 0 && (
        <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-heading text-lg">Your Gear ({selectedGear.length} items)</h4>
            <p className="text-boxing-gold font-heading text-2xl">+${gearPrice}</p>
          </div>
          <ul className="space-y-2">
            {selectedGear.map((product) => {
              const price = product.salePrice || product.price;
              return (
                <li key={product.id} className="flex items-center justify-between text-gray-300">
                  <span>{product.name}</span>
                  <span className="text-white">${price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Skip gear option */}
      {selectedGear.length === 0 && (
        <div className="bg-boxing-dark/50 border border-boxing-gray rounded-lg p-6 max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            No gear selected. You can train with what you have or add equipment later.
          </p>
          <p className="text-gray-500 text-sm">
            (Program-only purchase is totally fine!)
          </p>
        </div>
      )}

      {/* Info callout */}
      <div className="bg-boxing-dark/50 border border-boxing-gray rounded-lg p-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="text-white font-heading text-lg mb-2">Smart Recommendations</h4>
            <p className="text-gray-300 mb-2">
              We've pre-selected the most popular gear for your program. Bundles save you money
              compared to buying individually.
            </p>
            <p className="text-gray-400 text-sm">
              All gear ships free on orders over $100. In-person coaching clients can pick up
              gear at your first session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
