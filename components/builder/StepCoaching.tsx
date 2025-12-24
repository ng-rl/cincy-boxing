'use client';

import { useBuilder } from '@/context/BuilderContext';
import {
  coachingOptions,
  CoachingType,
  CoachingFrequency,
  CoachingDuration,
  formatFrequency,
  formatDuration,
} from '@/data/coaching-options';
import { useEffect, useRef } from 'react';

export default function StepCoaching() {
  const {
    selectedProgram,
    selectedCoaching,
    coachingFrequency,
    coachingDuration,
    setCoaching,
    setCoachingFrequency,
    setCoachingDuration,
    getCoachingPrice,
    nextStep,
  } = useBuilder();

  const hasAutoAdvancedRef = useRef(false);

  // Auto-advance when coaching selection is complete
  useEffect(() => {
    // Don't auto-advance if we already did
    if (hasAutoAdvancedRef.current) return;

    // Auto-advance for self-guided (no config needed)
    if (selectedCoaching === 'self-guided') {
      hasAutoAdvancedRef.current = true;
      setTimeout(() => nextStep(), 300);
      return;
    }

    // Auto-advance for virtual/in-person when both frequency and duration are selected
    if (coachingFrequency && coachingDuration) {
      hasAutoAdvancedRef.current = true;
      setTimeout(() => nextStep(), 500);
    }
  }, [selectedCoaching, coachingFrequency, coachingDuration, nextStep]);

  // Reset auto-advance flag when coaching type changes
  useEffect(() => {
    hasAutoAdvancedRef.current = false;
  }, [selectedCoaching]);

  if (!selectedProgram) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Please select a program first.</p>
      </div>
    );
  }

  const currentOption = coachingOptions.find((opt) => opt.id === selectedCoaching);
  const coachingPrice = getCoachingPrice();

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
          ADD <span className="text-boxing-red">COACHING</span>
        </h2>
        <p className="text-xl text-gray-300">
          How much support do you want? Training solo is great, but coaching accelerates results.
        </p>
      </div>

      {/* Coaching Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coachingOptions.map((option) => {
          const isSelected = selectedCoaching === option.id;

          return (
            <button
              key={option.id}
              onClick={() => setCoaching(option.id as CoachingType)}
              className={`
                relative bg-boxing-dark border-2 rounded-lg p-6 text-left
                transition-all duration-300
                ${
                  isSelected
                    ? 'border-boxing-red shadow-lg shadow-boxing-red/50'
                    : 'border-boxing-gray hover:border-boxing-gold'
                }
              `}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{option.icon}</div>

              {/* Name and price */}
              <div className="mb-3">
                <h3 className="text-2xl font-heading text-white mb-1">{option.name}</h3>
                <p className="text-boxing-gold font-heading text-xl">
                  {option.id === 'self-guided' ? (
                    'Included'
                  ) : (
                    <>from ${option.basePrice}</>
                  )}
                </p>
              </div>

              {/* Tagline */}
              <p className="text-gray-400 mb-4">{option.tagline}</p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {option.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-boxing-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Location restriction */}
              {option.locationRestriction && (
                <p className="text-xs text-gray-500 italic">{option.locationRestriction}</p>
              )}

              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4">
                  <svg className="w-6 h-6 text-boxing-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Frequency & Duration Selection (for Virtual and In-Person) */}
      {selectedCoaching !== 'self-guided' && currentOption && (
        <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading text-white mb-6">
            Customize Your {currentOption.name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frequency */}
            {currentOption.availableFrequencies && (
              <div>
                <label className="block text-white font-heading text-lg mb-4">
                  HOW OFTEN?
                </label>
                <div className="space-y-3">
                  {currentOption.availableFrequencies.map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setCoachingFrequency(freq as CoachingFrequency)}
                      className={`
                        w-full px-6 py-4 rounded-lg border-2 text-left transition-all
                        ${
                          coachingFrequency === freq
                            ? 'border-boxing-red bg-boxing-red/10'
                            : 'border-boxing-gray hover:border-boxing-gold'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{formatFrequency(freq)}</span>
                        {freq === '2x-week' && (
                          <span className="text-xs text-boxing-gold">10% discount</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        {freq === '1x-week'
                          ? `${selectedProgram.duration} sessions total`
                          : `${selectedProgram.duration * 2} sessions total`}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Duration */}
            {currentOption.availableDurations && (
              <div>
                <label className="block text-white font-heading text-lg mb-4">
                  SESSION LENGTH?
                </label>
                <div className="space-y-3">
                  {currentOption.availableDurations.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setCoachingDuration(dur as CoachingDuration)}
                      className={`
                        w-full px-6 py-4 rounded-lg border-2 text-left transition-all
                        ${
                          coachingDuration === dur
                            ? 'border-boxing-red bg-boxing-red/10'
                            : 'border-boxing-gray hover:border-boxing-gold'
                        }
                      `}
                    >
                      <span className="text-white font-medium">{formatDuration(dur)}</span>
                      <p className="text-gray-400 text-sm mt-1">
                        {dur === 30 ? 'Quick focused session' : 'Full training session'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Price Preview */}
          {coachingFrequency && coachingDuration && coachingPrice > 0 && (
            <div className="mt-8 pt-8 border-t border-boxing-gray">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Coaching add-on</p>
                  <p className="text-white">
                    {formatFrequency(coachingFrequency)} • {formatDuration(coachingDuration)} •{' '}
                    {selectedProgram.duration} weeks
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-boxing-gold font-heading text-3xl">
                    +${coachingPrice}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {coachingFrequency === '2x-week' && '10% discount applied'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Info callout */}
      <div className="bg-boxing-dark/50 border border-boxing-gray rounded-lg p-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="text-white font-heading text-lg mb-2">Which coaching option?</h4>
            <p className="text-gray-300 mb-2">
              <strong>Self-Guided:</strong> Perfect if you're disciplined and learn well from videos.
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Virtual:</strong> Best for remote guidance, form checks, and accountability.
            </p>
            <p className="text-gray-300">
              <strong>In-Person:</strong> Maximum results with hands-on coaching and real-time feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
