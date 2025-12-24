'use client';

import { getBasePrograms, getAddonPrograms } from '@/data/programs';
import { useBuilder } from '@/context/BuilderContext';
import Image from 'next/image';

export default function StepProgram() {
  const { selectedProgram, selectedAddon, setProgram, setAddon, nextStep } = useBuilder();

  const basePrograms = getBasePrograms();
  const addonPrograms = getAddonPrograms();

  const handleSelectProgram = (program: typeof basePrograms[0]) => {
    setProgram(program);
    // Auto-advance to next step after selection
    setTimeout(() => nextStep(), 300);
  };

  const handleToggleAddon = (addon: typeof addonPrograms[0]) => {
    // Toggle addon - if already selected, deselect it
    if (selectedAddon?.id === addon.id) {
      setAddon(null);
    } else {
      setAddon(addon);
    }
  };

  return (
    <div className="space-y-12">
      {/* Base Programs Section */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
            CHOOSE YOUR <span className="text-boxing-red">BASE PROGRAM</span>
          </h2>
          <p className="text-xl text-gray-300">
            Every journey starts with a solid foundation. Pick the program that matches your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {basePrograms.map((program) => {
            const isSelected = selectedProgram?.id === program.id;

          return (
            <button
              key={program.id}
              onClick={() => handleSelectProgram(program)}
              className={`
                group relative bg-boxing-dark border-2 rounded-lg overflow-hidden text-left
                transition-all duration-300 hover:scale-[1.02]
                ${
                  isSelected
                    ? 'border-boxing-red shadow-lg shadow-boxing-red/50'
                    : 'border-boxing-gray hover:border-boxing-gold'
                }
              `}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-boxing-black via-boxing-black/50 to-transparent" />

                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-boxing-red text-white font-heading text-xl px-4 py-2 rounded-md">
                  ${program.basePrice}
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 left-4 bg-boxing-dark/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm">
                  {program.duration} weeks
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-heading text-white mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-400">{program.tagline}</p>
                </div>

                <p className="text-gray-300 text-sm line-clamp-3">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {program.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-boxing-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Selection indicator */}
                {isSelected && (
                  <div className="flex items-center gap-2 text-boxing-red font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Selected
                  </div>
                )}

                {!isSelected && (
                  <div className="text-boxing-gold font-medium group-hover:text-white transition-colors">
                    Select Program →
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Info callout */}
      <div className="bg-boxing-dark/50 border border-boxing-gray rounded-lg p-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="text-white font-heading text-lg mb-2">Not sure which program?</h4>
            <p className="text-gray-300 mb-4">
              Start with Boxing Foundations if you're new to boxing. It builds the skills you need
              for everything else. Heavy Bag Foundations is perfect if you already have a bag and
              want to use it correctly.
            </p>
            <p className="text-gray-400 text-sm">
              All programs include lifetime access. You can add coaching in the next step.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Optional Add-on Section */}
      <div className="space-y-8 border-t border-boxing-gray pt-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
            ADD OPTIONAL <span className="text-boxing-gold">TRAINING</span>
          </h2>
          <p className="text-xl text-gray-300">
            Want to take it further? Add this conditioning program to your package.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {addonPrograms.map((addon) => {
            const isSelected = selectedAddon?.id === addon.id;

          return (
            <button
              key={addon.id}
              onClick={() => handleToggleAddon(addon)}
              className={`
                group relative bg-boxing-dark border-2 rounded-lg overflow-hidden text-left w-full
                transition-all duration-300 hover:scale-[1.02]
                ${
                  isSelected
                    ? 'border-boxing-gold shadow-lg shadow-boxing-gold/50'
                    : 'border-boxing-gray hover:border-boxing-gold'
                }
              `}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={addon.image}
                  alt={addon.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-boxing-black via-boxing-black/50 to-transparent" />

                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-boxing-gold text-boxing-black font-heading text-xl px-4 py-2 rounded-md">
                  ${addon.basePrice}
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 left-4 bg-boxing-dark/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm">
                  {addon.duration} weeks
                </div>

                {/* Optional badge */}
                <div className="absolute top-4 left-4 bg-boxing-dark/90 backdrop-blur-sm text-boxing-gold px-3 py-1 rounded-md text-sm font-medium">
                  OPTIONAL
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-heading text-white mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-gray-400">{addon.tagline}</p>
                </div>

                <p className="text-gray-300 text-sm">
                  {addon.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {addon.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-boxing-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Selection indicator */}
                {isSelected && (
                  <div className="flex items-center gap-2 text-boxing-gold font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Added to Package
                  </div>
                )}

                {!isSelected && (
                  <div className="text-boxing-gold font-medium group-hover:text-white transition-colors">
                    + Add to Package
                  </div>
                )}
              </div>
            </button>
          );
        })}
        </div>
      </div>
    </div>
  );
}
