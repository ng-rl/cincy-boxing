'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Program } from '@/data/programs';
import { Product } from '@/data/products';
import {
  CoachingType,
  CoachingFrequency,
  CoachingDuration,
  calculateCoachingCost,
} from '@/data/coaching-options';

interface BuilderState {
  // Step 1: Program
  selectedProgram: Program | null;

  // Step 2: Coaching
  selectedCoaching: CoachingType;
  coachingFrequency: CoachingFrequency | null;
  coachingDuration: CoachingDuration | null;

  // Step 3: Gear
  selectedGear: Product[];

  // Navigation
  currentStep: number;
}

interface BuilderContextType extends BuilderState {
  // Program actions
  setProgram: (program: Program) => void;

  // Coaching actions
  setCoaching: (type: CoachingType) => void;
  setCoachingFrequency: (frequency: CoachingFrequency | null) => void;
  setCoachingDuration: (duration: CoachingDuration | null) => void;

  // Gear actions
  addGear: (product: Product) => void;
  removeGear: (productId: string) => void;
  toggleGear: (product: Product) => void;
  clearGear: () => void;

  // Navigation actions
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;

  // Calculations
  getProgramPrice: () => number;
  getCoachingPrice: () => number;
  getGearPrice: () => number;
  getTotalPrice: () => number;

  // Reset
  clearBuilder: () => void;

  // Validation
  canProceedToStep: (step: number) => boolean;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

const STORAGE_KEY = 'cincy-boxing-builder';

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BuilderState>({
    selectedProgram: null,
    selectedCoaching: 'self-guided',
    coachingFrequency: null,
    coachingDuration: null,
    selectedGear: [],
    currentStep: 1,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setState(parsed);
      } catch (error) {
        console.error('Failed to parse stored builder state:', error);
      }
    }
  }, []);

  // Save to localStorage on state change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Program actions
  const setProgram = (program: Program) => {
    setState((prev) => ({ ...prev, selectedProgram: program }));
  };

  // Coaching actions
  const setCoaching = (type: CoachingType) => {
    setState((prev) => ({
      ...prev,
      selectedCoaching: type,
      // Reset frequency/duration when changing coaching type
      coachingFrequency: type === 'self-guided' ? null : prev.coachingFrequency,
      coachingDuration: type === 'self-guided' ? null : prev.coachingDuration,
    }));
  };

  const setCoachingFrequency = (frequency: CoachingFrequency | null) => {
    setState((prev) => ({ ...prev, coachingFrequency: frequency }));
  };

  const setCoachingDuration = (duration: CoachingDuration | null) => {
    setState((prev) => ({ ...prev, coachingDuration: duration }));
  };

  // Gear actions
  const addGear = (product: Product) => {
    setState((prev) => {
      // Check if already exists
      if (prev.selectedGear.find((p) => p.id === product.id)) {
        return prev;
      }
      return { ...prev, selectedGear: [...prev.selectedGear, product] };
    });
  };

  const removeGear = (productId: string) => {
    setState((prev) => ({
      ...prev,
      selectedGear: prev.selectedGear.filter((p) => p.id !== productId),
    }));
  };

  const toggleGear = (product: Product) => {
    setState((prev) => {
      const exists = prev.selectedGear.find((p) => p.id === product.id);
      if (exists) {
        return { ...prev, selectedGear: prev.selectedGear.filter((p) => p.id !== product.id) };
      }
      return { ...prev, selectedGear: [...prev.selectedGear, product] };
    });
  };

  const clearGear = () => {
    setState((prev) => ({ ...prev, selectedGear: [] }));
  };

  // Navigation actions
  const nextStep = () => {
    setState((prev) => ({ ...prev, currentStep: Math.min(prev.currentStep + 1, 4) }));
  };

  const prevStep = () => {
    setState((prev) => ({ ...prev, currentStep: Math.max(prev.currentStep - 1, 1) }));
  };

  const goToStep = (step: number) => {
    setState((prev) => ({ ...prev, currentStep: Math.max(1, Math.min(step, 4)) }));
  };

  // Calculations
  const getProgramPrice = () => {
    return state.selectedProgram?.basePrice || 0;
  };

  const getCoachingPrice = () => {
    if (state.selectedCoaching === 'self-guided') return 0;
    if (!state.selectedProgram || !state.coachingFrequency || !state.coachingDuration) return 0;

    return calculateCoachingCost(
      state.selectedCoaching,
      state.coachingFrequency,
      state.coachingDuration,
      state.selectedProgram.duration
    );
  };

  const getGearPrice = () => {
    return state.selectedGear.reduce((total, product) => {
      const price = product.salePrice || product.price;
      return total + price;
    }, 0);
  };

  const getTotalPrice = () => {
    return getProgramPrice() + getCoachingPrice() + getGearPrice();
  };

  // Reset
  const clearBuilder = () => {
    setState({
      selectedProgram: null,
      selectedCoaching: 'self-guided',
      coachingFrequency: null,
      coachingDuration: null,
      selectedGear: [],
      currentStep: 1,
    });
    localStorage.removeItem(STORAGE_KEY);
  };

  // Validation
  const canProceedToStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return true; // Can always go to step 1
      case 2:
        return state.selectedProgram !== null; // Need program to go to coaching
      case 3:
        // Need program and valid coaching selection
        if (!state.selectedProgram) return false;
        if (state.selectedCoaching === 'self-guided') return true;
        return state.coachingFrequency !== null && state.coachingDuration !== null;
      case 4:
        // Need program (coaching and gear are optional)
        return state.selectedProgram !== null;
      default:
        return false;
    }
  };

  const value: BuilderContextType = {
    ...state,
    setProgram,
    setCoaching,
    setCoachingFrequency,
    setCoachingDuration,
    addGear,
    removeGear,
    toggleGear,
    clearGear,
    nextStep,
    prevStep,
    goToStep,
    getProgramPrice,
    getCoachingPrice,
    getGearPrice,
    getTotalPrice,
    clearBuilder,
    canProceedToStep,
  };

  return <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>;
}

export function useBuilder() {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
}
