export type CoachingType = 'self-guided' | 'virtual' | 'in-person';
export type CoachingFrequency = '1x-week' | '2x-week';
export type CoachingDuration = 30 | 60;

export interface CoachingOption {
  id: CoachingType;
  name: string;
  tagline: string;
  description: string;
  icon: string; // emoji or icon identifier
  color: string; // tailwind color class
  basePrice: number; // Starting price for display
  availableFrequencies?: CoachingFrequency[];
  availableDurations?: CoachingDuration[];
  features: string[];
  locationRestriction?: string;
}

export const coachingOptions: CoachingOption[] = [
  {
    id: 'self-guided',
    name: 'Self-Guided',
    tagline: 'Train on your own with the program materials',
    description:
      'Get the complete program with video demonstrations, written instructions, and progression tracking. Train at your own pace, on your own schedule.',
    icon: '🟢',
    color: 'green',
    basePrice: 0,
    features: [
      'Complete program access',
      'Video demonstrations',
      'Written instructions',
      'Progress tracking sheets',
      'Email support',
      'Lifetime access',
    ],
  },
  {
    id: 'virtual',
    name: 'Virtual Coaching',
    tagline: 'Live or async coaching via video',
    description:
      'Get personalized coaching from anywhere. Choose live Zoom sessions or asynchronous video form checks. Perfect for remote training with expert guidance.',
    icon: '🔵',
    color: 'blue',
    basePrice: 150,
    availableFrequencies: ['1x-week', '2x-week'],
    availableDurations: [30, 60],
    features: [
      'Everything in Self-Guided',
      'Live Zoom sessions or async video reviews',
      'Personalized form feedback',
      'Custom programming adjustments',
      'Direct messaging support',
      'Session recordings (live only)',
    ],
  },
  {
    id: 'in-person',
    name: 'In-Person Coaching',
    tagline: 'Train face-to-face in Cincinnati',
    description:
      'Get hands-on coaching with mobile training that comes to you. Train at your home, apartment gym, park, or preferred location. Cincinnati area only.',
    icon: '🟣',
    color: 'purple',
    basePrice: 400,
    availableFrequencies: ['1x-week', '2x-week'],
    availableDurations: [60],
    features: [
      'Everything in Virtual Coaching',
      'Face-to-face training',
      'Mobile training (I come to you)',
      'Real-time form correction',
      'Hands-on mitt work',
      'All equipment provided',
    ],
    locationRestriction: 'Cincinnati area only',
  },
];

// Pricing calculation per session
export const coachingRates = {
  virtual: {
    '30min': 40, // per session
    '60min': 65, // per session
  },
  'in-person': {
    '60min': 100, // per session
  },
};

// Calculate total coaching cost for a program duration
export function calculateCoachingCost(
  coachingType: CoachingType,
  frequency: CoachingFrequency,
  duration: CoachingDuration,
  programWeeks: number
): number {
  if (coachingType === 'self-guided') return 0;

  // Get rate per session
  let ratePerSession = 0;

  if (coachingType === 'virtual') {
    ratePerSession = duration === 30 ? coachingRates.virtual['30min'] : coachingRates.virtual['60min'];
  } else if (coachingType === 'in-person') {
    ratePerSession = coachingRates['in-person']['60min'];
  }

  if (!ratePerSession) return 0;

  // Calculate sessions per week
  const sessionsPerWeek = frequency === '1x-week' ? 1 : 2;

  // Total sessions = sessions per week × program weeks
  const totalSessions = sessionsPerWeek * programWeeks;

  // Apply volume discount for 2x/week
  const discount = frequency === '2x-week' ? 0.1 : 0; // 10% off for 2x/week commitment
  const subtotal = ratePerSession * totalSessions;

  return Math.round(subtotal * (1 - discount));
}

// Format frequency for display
export function formatFrequency(frequency: CoachingFrequency): string {
  return frequency === '1x-week' ? '1x per week' : '2x per week';
}

// Format duration for display
export function formatDuration(duration: CoachingDuration): string {
  return `${duration} minutes`;
}

// Get coaching option by id
export function getCoachingOption(id: CoachingType): CoachingOption | undefined {
  return coachingOptions.find((opt) => opt.id === id);
}
