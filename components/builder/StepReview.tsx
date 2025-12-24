'use client';

import { useBuilder } from '@/context/BuilderContext';
import {
  formatFrequency,
  formatDuration,
  getCoachingOption,
} from '@/data/coaching-options';
import { useState } from 'react';

export default function StepReview() {
  const {
    selectedProgram,
    selectedAddon,
    selectedCoaching,
    coachingFrequency,
    coachingDuration,
    selectedGear,
    getProgramPrice,
    getCoachingPrice,
    getGearPrice,
    getTotalPrice,
    goToStep,
  } = useBuilder();

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!selectedProgram) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Please select a program first.</p>
      </div>
    );
  }

  const programPrice = getProgramPrice();
  const coachingPrice = getCoachingPrice();
  const gearPrice = getGearPrice();
  const totalPrice = getTotalPrice();

  const coachingOption = getCoachingOption(selectedCoaching);

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    // TODO: Integrate with Stripe Checkout
    // For now, just simulate
    console.log('Checkout data:', {
      program: selectedProgram,
      coaching: {
        type: selectedCoaching,
        frequency: coachingFrequency,
        duration: coachingDuration,
      },
      gear: selectedGear,
      total: totalPrice,
    });

    // Simulate checkout delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Checkout integration coming soon! Total: $' + totalPrice);
    setIsCheckingOut(false);
  };

  // Calculate estimated weekly time commitment
  const weeklyCommitment = () => {
    let hours = 2; // Base program self-study time
    if (selectedCoaching === 'virtual' || selectedCoaching === 'in-person') {
      const sessionsPerWeek = coachingFrequency === '2x-week' ? 2 : 1;
      const sessionHours = coachingDuration === 60 ? 1 : 0.5;
      hours += sessionsPerWeek * sessionHours;
    }
    return hours;
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
          REVIEW & <span className="text-boxing-red">CHECKOUT</span>
        </h2>
        <p className="text-xl text-gray-300">
          Here's what you're getting. Ready to start your training?
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary - Left side (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Base Program */}
          <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-heading text-white">
                    {selectedProgram.name}
                  </h3>
                  <span className="bg-boxing-red text-white text-xs px-2 py-1 rounded">
                    {selectedProgram.duration} weeks
                  </span>
                </div>
                <p className="text-gray-400">{selectedProgram.tagline}</p>
              </div>
              <button
                onClick={() => goToStep(1)}
                className="text-boxing-gold hover:text-white transition-colors text-sm"
              >
                Edit
              </button>
            </div>
            <div className="text-right">
              <p className="text-boxing-gold font-heading text-2xl">${selectedProgram.basePrice}</p>
            </div>
          </div>

          {/* Optional Add-on Program */}
          {selectedAddon && (
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-heading text-white">
                      {selectedAddon.name}
                    </h3>
                    <span className="bg-boxing-gold text-boxing-black text-xs px-2 py-1 rounded font-medium">
                      OPTIONAL ADD-ON
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{selectedAddon.tagline}</p>
                </div>
                <button
                  onClick={() => goToStep(1)}
                  className="text-boxing-gold hover:text-white transition-colors text-sm"
                >
                  Edit
                </button>
              </div>
              <div className="text-right">
                <p className="text-boxing-gold font-heading text-2xl">+${selectedAddon.basePrice}</p>
              </div>
            </div>
          )}

          {/* Coaching */}
          <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-heading text-white mb-2">
                  {coachingOption?.icon} {coachingOption?.name}
                </h3>
                {selectedCoaching !== 'self-guided' && coachingFrequency && coachingDuration ? (
                  <div className="space-y-1 text-gray-400 text-sm">
                    <p>{formatFrequency(coachingFrequency)}</p>
                    <p>{formatDuration(coachingDuration)} sessions</p>
                    <p>
                      {coachingFrequency === '1x-week'
                        ? selectedProgram.duration
                        : selectedProgram.duration * 2}{' '}
                      total sessions
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">Train on your own</p>
                )}
              </div>
              <button
                onClick={() => goToStep(2)}
                className="text-boxing-gold hover:text-white transition-colors text-sm"
              >
                Edit
              </button>
            </div>
            <div className="text-right">
              {coachingPrice > 0 ? (
                <p className="text-boxing-gold font-heading text-2xl">+${coachingPrice}</p>
              ) : (
                <p className="text-gray-500 font-heading text-lg">Included</p>
              )}
            </div>
          </div>

          {/* Gear */}
          <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-heading text-white mb-2">
                  Equipment ({selectedGear.length} items)
                </h3>
                {selectedGear.length > 0 ? (
                  <ul className="space-y-1 text-gray-400 text-sm">
                    {selectedGear.map((product) => (
                      <li key={product.id}>
                        {product.name} - ${product.salePrice || product.price}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">No equipment added</p>
                )}
              </div>
              <button
                onClick={() => goToStep(3)}
                className="text-boxing-gold hover:text-white transition-colors text-sm"
              >
                Edit
              </button>
            </div>
            <div className="text-right">
              {gearPrice > 0 ? (
                <p className="text-boxing-gold font-heading text-2xl">+${gearPrice}</p>
              ) : (
                <p className="text-gray-500 font-heading text-lg">None</p>
              )}
            </div>
          </div>
        </div>

        {/* Checkout Summary - Right side (1 col) */}
        <div className="lg:col-span-1">
          <div className="bg-boxing-dark border-2 border-boxing-red rounded-lg p-6 sticky top-24">
            <h3 className="text-2xl font-heading text-white mb-6">Order Total</h3>

            {/* Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-boxing-gray">
              <div className="flex justify-between text-gray-300">
                <span>{selectedProgram.name}</span>
                <span>${selectedProgram.basePrice}</span>
              </div>
              {selectedAddon && (
                <div className="flex justify-between text-gray-300">
                  <span>{selectedAddon.name}</span>
                  <span>+${selectedAddon.basePrice}</span>
                </div>
              )}
              {coachingPrice > 0 && (
                <div className="flex justify-between text-gray-300">
                  <span>Coaching</span>
                  <span>+${coachingPrice}</span>
                </div>
              )}
              {gearPrice > 0 && (
                <div className="flex justify-between text-gray-300">
                  <span>Equipment</span>
                  <span>+${gearPrice}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-heading text-white">Total</span>
              <span className="text-4xl font-heading text-boxing-gold">${totalPrice}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full gradient-red text-white font-heading text-xl py-4 rounded-md hover:shadow-lg hover:shadow-boxing-red/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              {isCheckingOut ? 'PROCESSING...' : 'CHECKOUT NOW'}
            </button>

            {/* Payment methods */}
            <div className="text-center text-gray-400 text-xs mb-4">
              <p>Secure payment powered by Stripe</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span>💳</span>
                <span>Visa, Mastercard, Amex, Discover</span>
              </div>
            </div>

            {/* Estimated commitment */}
            <div className="bg-boxing-gray/30 rounded-lg p-4 mt-6">
              <p className="text-xs text-gray-400 mb-2">ESTIMATED WEEKLY COMMITMENT</p>
              <p className="text-white font-heading text-lg">
                ~{weeklyCommitment()} hours/week
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {selectedProgram.duration} weeks total
              </p>
            </div>

            {/* Guarantee */}
            <div className="mt-6 pt-6 border-t border-boxing-gray">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-boxing-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-white font-medium text-sm">30-Day Money-Back Guarantee</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Not satisfied? Get a full refund within 30 days, no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What happens next */}
      <div className="bg-boxing-dark/50 border border-boxing-gray rounded-lg p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-heading text-white mb-6 text-center">
          What Happens After Checkout?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">📧</div>
            <h4 className="text-white font-heading mb-2">1. Instant Access</h4>
            <p className="text-gray-400 text-sm">
              Get immediate access to your program materials via email. Login and start training
              today.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📅</div>
            <h4 className="text-white font-heading mb-2">2. Schedule Coaching</h4>
            <p className="text-gray-400 text-sm">
              {selectedCoaching !== 'self-guided'
                ? "You'll receive a scheduling link to book your first coaching session."
                : 'Train on your own schedule. All materials are available 24/7.'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📦</div>
            <h4 className="text-white font-heading mb-2">3. Gear Ships</h4>
            <p className="text-gray-400 text-sm">
              {selectedGear.length > 0
                ? "Your equipment ships within 1-2 business days. Free shipping on orders $100+."
                : 'No gear ordered? You can always buy equipment later from our shop.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
