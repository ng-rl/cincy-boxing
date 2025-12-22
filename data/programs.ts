export interface Program {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: number; // weeks
  outcome: string;
  curriculum: string[];
  requirements: string[];
  basePrice: number; // Self-guided price
  recommendedGear: string[]; // Product slugs from products.ts
  image: string;
  features: string[];
}

export const programs: Program[] = [
  {
    id: 'boxing-foundations',
    slug: 'boxing-foundations',
    name: 'Boxing Foundations',
    tagline: 'Learn proper boxing technique from the ground up.',
    description:
      'Master the fundamentals of boxing with a proven 4-week program. Learn proper stance, footwork, punches, and defensive techniques. Perfect for complete beginners or anyone wanting to build a solid foundation.',
    duration: 4,
    outcome:
      "You'll master basic boxing technique, understand proper form, and be ready to train confidently on your own or with a coach.",
    curriculum: [
      'Week 1: Stance, Guard, and Basic Punches (Jab, Cross)',
      'Week 2: Hooks, Uppercuts, and Punch Combinations',
      'Week 3: Footwork, Movement, and Head Movement',
      'Week 4: Defense, Slips, Rolls, and Putting It All Together',
    ],
    requirements: ['No equipment required', 'Any fitness level welcome', 'Train anywhere'],
    basePrice: 97,
    recommendedGear: ['beginner-starter-kit', 'boxing-gloves-16oz', 'hand-wraps'],
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800',
    features: [
      '4-week structured program',
      'Video demonstrations for every technique',
      'Weekly progression tracking',
      'Lifetime access to program materials',
      'Train at your own pace',
    ],
  },
  {
    id: 'heavy-bag-foundations',
    slug: 'heavy-bag-foundations',
    name: 'Heavy Bag Foundations',
    tagline: 'Learn to train correctly on a heavy bag.',
    description:
      'Transform your heavy bag workouts from random punching to strategic training. Learn proper technique, powerful combinations, and conditioning drills that maximize results and prevent injury.',
    duration: 4,
    outcome:
      "You'll know how to structure effective heavy bag workouts, punch with proper form and power, and design your own training sessions.",
    curriculum: [
      'Week 1: Proper Bag Technique and Power Generation',
      'Week 2: Combination Training and Flow',
      'Week 3: Conditioning Drills and Interval Work',
      'Week 4: Advanced Combos and Sparring Simulations',
    ],
    requirements: [
      'Heavy bag required (100-150 lbs recommended)',
      'Boxing gloves and hand wraps recommended',
      'Any fitness level welcome',
    ],
    basePrice: 97,
    recommendedGear: [
      'heavy-bag-home-gym-kit',
      'heavy-bag',
      'boxing-gloves-16oz',
      'hand-wraps',
    ],
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800',
    features: [
      '4-week structured program',
      'Heavy bag-specific techniques',
      'Power and conditioning focus',
      'Workout templates you can repeat',
      'Lifetime access to program materials',
    ],
  },
  {
    id: 'boxing-conditioning',
    slug: 'boxing-conditioning',
    name: 'Boxing Conditioning',
    tagline: 'Get fight-ready fitness without the fighting.',
    description:
      'Build explosive power, endurance, and mental toughness with boxing-based conditioning workouts. No bag or equipment required—just you, a timer, and the willingness to push.',
    duration: 4,
    outcome:
      "You'll dramatically improve cardiovascular endurance, explosive power, core strength, and mental resilience.",
    curriculum: [
      'Week 1: Foundation—Shadowboxing Cardio and Core',
      'Week 2: Power—Explosive Movement and Plyometrics',
      'Week 3: Endurance—High-Volume Rounds and Stamina',
      'Week 4: Peak—Combining Power, Speed, and Endurance',
    ],
    requirements: [
      'No equipment required',
      'Minimal space needed',
      'Intermediate fitness recommended',
    ],
    basePrice: 77,
    recommendedGear: ['boxing-conditioning-kit', 'jump-rope', 'hand-wraps'],
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    features: [
      '4-week conditioning program',
      'No equipment needed (gear optional)',
      'Bodyweight-focused workouts',
      'HIIT and interval training protocols',
      'Lifetime access to program materials',
    ],
  },
];

// Helper function to get program by slug
export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

// Helper function to get program by id
export function getProgramById(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}
