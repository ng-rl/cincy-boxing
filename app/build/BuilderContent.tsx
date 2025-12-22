'use client';

import { useBuilder } from '@/context/BuilderContext';
import StepProgram from '@/components/builder/StepProgram';
import StepCoaching from '@/components/builder/StepCoaching';
import StepGear from '@/components/builder/StepGear';
import StepReview from '@/components/builder/StepReview';

const steps = [
  { number: 1, name: 'Program', component: StepProgram },
  { number: 2, name: 'Coaching', component: StepCoaching },
  { number: 3, name: 'Gear', component: StepGear },
  { number: 4, name: 'Review', component: StepReview },
];

export default function BuilderContent() {
  const {
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    canProceedToStep,
    getTotalPrice,
  } = useBuilder();

  const CurrentStepComponent = steps[currentStep - 1].component;
  const canProceedToNext = canProceedToStep(currentStep + 1);
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen pt-20 bg-boxing-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const isActive = step.number === currentStep;
              const isCompleted = step.number < currentStep;
              const isClickable = canProceedToStep(step.number);

              return (
                <div
                  key={step.number}
                  className="flex items-center flex-1 last:flex-none"
                >
                  {/* Step Circle */}
                  <button
                    onClick={() => isClickable && goToStep(step.number)}
                    disabled={!isClickable}
                    className={`
                      relative flex items-center justify-center w-12 h-12 rounded-full font-heading text-lg
                      transition-all duration-300 z-10
                      ${
                        isActive
                          ? 'bg-boxing-red text-white ring-4 ring-boxing-red/30 scale-110'
                          : isCompleted
                          ? 'bg-boxing-gold text-boxing-black hover:scale-105 cursor-pointer'
                          : 'bg-boxing-gray text-gray-500'
                      }
                      ${isClickable && !isActive ? 'cursor-pointer hover:scale-105' : ''}
                      ${!isClickable ? 'cursor-not-allowed' : ''}
                    `}
                  >
                    {isCompleted ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </button>

                  {/* Step Label */}
                  <div className="absolute mt-16">
                    <p
                      className={`
                      text-sm font-medium whitespace-nowrap
                      ${isActive ? 'text-boxing-red' : isCompleted ? 'text-boxing-gold' : 'text-gray-500'}
                    `}
                    >
                      {step.name}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`
                      flex-1 h-1 mx-2 transition-all duration-500
                      ${isCompleted ? 'bg-boxing-gold' : 'bg-boxing-gray'}
                    `}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="mt-20">
          <CurrentStepComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`
                px-6 py-3 rounded-md font-heading text-lg transition-all
                ${
                  currentStep === 1
                    ? 'invisible'
                    : 'bg-boxing-gray text-white hover:bg-boxing-gray/80'
                }
              `}
            >
              ← BACK
            </button>

            {/* Price Display + Next Button */}
            <div className="flex items-center gap-6">
              {/* Running Total */}
              {totalPrice > 0 && (
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Total</p>
                  <p className="text-boxing-gold font-heading text-3xl">${totalPrice}</p>
                </div>
              )}

              {/* Next Button */}
              {currentStep < 4 && (
                <button
                  onClick={nextStep}
                  disabled={!canProceedToNext}
                  className={`
                    px-8 py-3 rounded-md font-heading text-lg transition-all
                    ${
                      canProceedToNext
                        ? 'gradient-red text-white hover:shadow-lg hover:shadow-boxing-red/50'
                        : 'bg-boxing-gray text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  NEXT →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          {currentStep === 1 && 'Select a program to continue'}
          {currentStep === 2 && 'Choose your coaching level (or skip to continue)'}
          {currentStep === 3 && 'Add gear or skip to checkout'}
          {currentStep === 4 && 'Review your order and complete checkout'}
        </div>
      </div>
    </div>
  );
}
