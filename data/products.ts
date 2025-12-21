export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  salePrice?: number;
  category: 'gloves' | 'equipment' | 'bags' | 'protection' | 'apparel' | 'digital' | 'bundles';
  subCategory?: string;
  images: string[];
  description: string;
  whoThisIsFor?: string; // "Beginner", "Intermediate", "Home Gym", etc.
  features: string[];
  whatsIncluded?: string[]; // For bundles
  specifications?: {
    [key: string]: string;
  };
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
  isDigital?: boolean;
  stripeProductId?: string;
}

export const products: Product[] = [
  // ========== BUNDLES & STARTER KITS (Priority!) ==========
  {
    id: 'beginner-boxing-kit',
    slug: 'beginner-boxing-starter-kit',
    name: 'Beginner Boxing Starter Kit',
    price: 129.99,
    salePrice: 99.99,
    category: 'bundles',
    subCategory: 'Beginner Kits',
    images: [
      'https://images.unsplash.com/photo-1611676097100-e4bb4f8e0e64?w=800&q=80',
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    ],
    description: 'Everything you need to start your boxing journey at home. Complete beginner package with professional-grade equipment plus our exclusive 4-week beginner training program.',
    whoThisIsFor: 'Beginners • At-Home Training • Complete Starters',
    features: [
      'Save $60 vs buying separately',
      'Professional 16oz training gloves',
      '180" hand wraps included',
      'Speed jump rope for conditioning',
      'FREE 4-week beginner video program ($39 value)',
      'Cincy Boxing branded gym bag',
      'Everything ships together',
    ],
    whatsIncluded: [
      '16oz Training Gloves (your choice of color)',
      '180" Hand Wraps (pair)',
      'Professional Speed Jump Rope',
      '4-Week Beginner Boxing Program (digital)',
      'Cincy Boxing Gym Bag',
      'Quick Start Guide',
    ],
    specifications: {
      'Total Value': '$189',
      'Bundle Savings': '$60',
      'Shipping': 'Free',
    },
    colors: ['Black/Red', 'Black/Gold', 'Red/Black'],
    inStock: true,
    featured: true,
  },
  {
    id: 'heavy-bag-complete-kit',
    slug: 'heavy-bag-complete-home-gym-kit',
    name: 'Heavy Bag Complete Home Gym Kit',
    price: 299.99,
    salePrice: 249.99,
    category: 'bundles',
    subCategory: 'Home Gym Kits',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    ],
    description: 'Complete heavy bag setup for serious home training. Includes 100lb bag, mounting hardware, gloves, wraps, and our Heavy Bag Mastery training program. Everything you need for a complete home boxing gym.',
    whoThisIsFor: 'Home Gym Builders • Serious Trainers • Intermediate',
    features: [
      'Save $100+ vs buying separately',
      'Professional 100lb heavy bag',
      'Complete mounting hardware included',
      '14oz bag gloves optimized for heavy work',
      '180" hand wraps (2 pairs)',
      'Heavy Bag Mastery Program (digital)',
      'Free shipping on complete kit',
    ],
    whatsIncluded: [
      '100lb Heavy Bag',
      'Ceiling Mount with Chain & Swivel',
      '14oz Bag Gloves',
      '180" Hand Wraps (2 pairs)',
      'Heavy Bag Training Program (digital)',
      'Installation Guide',
    ],
    specifications: {
      'Total Value': '$350+',
      'Bundle Savings': '$100',
      'Bag Weight': '100 lbs',
      'Shipping': 'Free',
    },
    inStock: true,
    featured: true,
  },
  {
    id: 'conditioning-kit',
    slug: 'boxing-conditioning-training-kit',
    name: 'Boxing Conditioning Training Kit',
    price: 89.99,
    salePrice: 69.99,
    category: 'bundles',
    subCategory: 'Conditioning Kits',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Build championship-level conditioning without a gym. Jump rope, resistance bands, agility ladder, and our Boxer\'s Conditioning program. Perfect for roadwork days and cross-training.',
    whoThisIsFor: 'All Levels • Conditioning Focus • Portable Training',
    features: [
      'Save $35 vs individual items',
      'Professional speed rope with ball bearings',
      '5 resistance bands (varied resistance)',
      '12-foot agility ladder',
      'Boxer\'s Conditioning Program (digital)',
      'Portable - train anywhere',
      'Complements any boxing routine',
    ],
    whatsIncluded: [
      'Speed Jump Rope',
      'Resistance Band Set (5 bands)',
      'Agility Ladder (12ft)',
      'Boxer\'s Conditioning Program (digital)',
      'Carrying Bag',
      'Exercise Guide',
    ],
    specifications: {
      'Total Value': '$125',
      'Bundle Savings': '$35',
      'Shipping': 'Free',
    },
    inStock: true,
    featured: true,
  },

  // ========== BOXING GLOVES ==========
  {
    id: 'cincy-pro-training-gloves',
    slug: 'cincy-boxing-pro-training-gloves',
    name: 'Cincy Boxing Pro Training Gloves',
    price: 79.99,
    category: 'gloves',
    subCategory: 'Training Gloves',
    images: [
      'https://images.unsplash.com/photo-1611676097100-e4bb4f8e0e64?w=800&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Our signature training glove. Premium synthetic leather with optimal wrist support and multi-layer foam padding. Designed for daily training - bag work, mitts, and light sparring. Built to last.',
    whoThisIsFor: 'Intermediate • Daily Training • Versatile Use',
    features: [
      'Premium synthetic leather construction',
      'Multi-layer foam padding for impact absorption',
      'Extended wrist support with double velcro strap',
      'Breathable mesh palm',
      'Reinforced thumb for safety',
      'Cincy Boxing embroidered logo',
    ],
    specifications: {
      'Material': 'Premium Synthetic Leather',
      'Padding': 'Multi-layer foam',
      'Closure': 'Hook and Loop',
      'Best For': 'Bag Work, Mitt Work, Light Sparring',
      'Care': 'Wipe clean, air dry',
    },
    sizes: ['12 oz', '14 oz', '16 oz'],
    colors: ['Black/Red', 'Black/Gold', 'All Black'],
    inStock: true,
    featured: true,
  },
  {
    id: 'starter-training-gloves',
    slug: 'beginner-boxing-training-gloves',
    name: 'Beginner Training Gloves',
    price: 49.99,
    category: 'gloves',
    subCategory: 'Training Gloves',
    images: [
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    ],
    description: 'Quality training gloves at an accessible price. Perfect for beginners or those just starting their boxing journey. Durable synthetic leather, good padding, comfortable fit.',
    whoThisIsFor: 'Beginners • Budget-Conscious • First Pair',
    features: [
      'Durable synthetic leather',
      'Quality foam padding',
      'Secure wrist support',
      'Thumb attachment for safety',
      'Great starter glove',
      'Available in 14oz and 16oz',
    ],
    specifications: {
      'Material': 'Synthetic Leather',
      'Padding': 'High-density foam',
      'Best For': 'Bag Work, Beginner Training',
    },
    sizes: ['14 oz', '16 oz'],
    colors: ['Black', 'Red'],
    inStock: true,
    featured: false,
  },

  // ========== TRAINING EQUIPMENT ==========
  {
    id: 'pro-focus-mitts',
    slug: 'professional-focus-mitts-curved',
    name: 'Professional Focus Mitts (Curved)',
    price: 64.99,
    category: 'equipment',
    subCategory: 'Punch Mitts & Pads',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Premium curved focus mitts for mitt work and partner training. Ergonomic design absorbs impact while protecting the holder\'s hands. Perfect for precision work and combinations.',
    whoThisIsFor: 'All Levels • Partner Training • Technique Work',
    features: [
      'Curved design for natural punch absorption',
      'Extra padding protects holder\'s hands',
      'Secure wrist strap with additional forearm support',
      'Quality synthetic leather',
      'Sold as a pair',
      'Great for pad work sessions',
    ],
    specifications: {
      'Size': 'Standard (pair)',
      'Material': 'Synthetic Leather',
      'Padding': 'High-density foam',
      'Closure': 'Adjustable wrist strap',
    },
    colors: ['Black/Red', 'Black/Gold'],
    inStock: true,
    featured: false,
  },
  {
    id: 'speed-jump-rope',
    slug: 'professional-speed-jump-rope',
    name: 'Professional Speed Jump Rope',
    price: 24.99,
    category: 'equipment',
    subCategory: 'Conditioning & Strength',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Lightweight speed rope with ball-bearing swivels for smooth, fast rotations. Adjustable length fits all heights. Essential for boxing conditioning and footwork.',
    whoThisIsFor: 'All Levels • Conditioning • Footwork Training',
    features: [
      'Premium ball-bearing system for smooth rotation',
      'Adjustable length (5\' to 6\'6")',
      'Lightweight aluminum handles with non-slip grip',
      'Durable coated steel cable',
      'Perfect for speed work and double-unders',
      'Compact and portable',
    ],
    specifications: {
      'Handle Material': 'Aluminum',
      'Cable': 'Coated Steel',
      'Length': 'Adjustable up to 10 feet',
      'Weight': '4 oz',
    },
    colors: ['Black/Red', 'Black/Gold'],
    inStock: true,
    featured: false,
  },

  // ========== HEAVY BAGS & BAG GEAR ==========
  {
    id: 'heavy-bag-100lb',
    slug: 'heavy-bag-100-pound',
    name: 'Heavy Bag - 100 Pound',
    price: 149.99,
    category: 'bags',
    subCategory: 'Heavy Bags',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    ],
    description: 'Commercial-grade 100-pound heavy bag built for serious training. Durable synthetic leather shell with textile fiber filling for consistent density. Includes hanging chain and heavy-duty straps.',
    whoThisIsFor: 'Home Gym • Serious Training • Power Development',
    features: [
      'Commercial-grade construction',
      'Reinforced synthetic leather shell',
      'Textile fiber filling (consistent density)',
      'Heavy-duty nylon straps and chains included',
      'Weather-resistant for garage gyms',
      'Pre-filled and ready to hang',
    ],
    specifications: {
      'Weight': '100 lbs',
      'Height': '48 inches',
      'Diameter': '14 inches',
      'Material': 'Synthetic Leather',
      'Filling': 'Textile Fibers',
      'Includes': 'Chain and Swivel',
    },
    inStock: true,
    featured: true,
  },

  // ========== HAND WRAPS & PROTECTION ==========
  {
    id: 'mexican-style-wraps',
    slug: 'mexican-style-hand-wraps-180',
    name: 'Mexican Style Hand Wraps (180")',
    price: 12.99,
    salePrice: 9.99,
    category: 'protection',
    subCategory: 'Hand Wraps',
    images: [
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    ],
    description: 'Professional 180-inch hand wraps with superior stretch and support. Mexican-style elastic blend provides optimal knuckle protection and wrist stability. Sold in pairs.',
    whoThisIsFor: 'All Levels • Essential Protection • Daily Use',
    features: [
      '180 inches of protection',
      'Elastic cotton blend for flexibility',
      'Thumb loop for easy application',
      'Velcro closure for secure fit',
      'Machine washable',
      'Sold in pairs',
    ],
    specifications: {
      'Length': '180 inches (pair)',
      'Material': 'Elastic Cotton Blend',
      'Care': 'Machine Washable',
      'Quantity': '1 pair (2 wraps)',
    },
    colors: ['Black', 'Red', 'White', 'Gold'],
    inStock: true,
    featured: true,
  },

  // ========== APPAREL ==========
  {
    id: 'cincy-boxing-tshirt',
    slug: 'cincy-boxing-training-tshirt',
    name: 'Cincy Boxing Training T-Shirt',
    price: 29.99,
    category: 'apparel',
    subCategory: 'Training Apparel',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    ],
    description: 'Official Cincy Boxing training shirt. Moisture-wicking performance fabric keeps you cool during intense workouts. Classic fit with bold Cincy Boxing logo.',
    whoThisIsFor: 'All Levels • Training Gear • Brand Supporters',
    features: [
      'Moisture-wicking performance fabric',
      'Lightweight and breathable',
      'Classic athletic fit',
      'Reinforced shoulder seams',
      'Bold Cincy Boxing logo print',
      'Machine washable',
    ],
    specifications: {
      'Material': '100% Polyester Performance Fabric',
      'Fit': 'Classic Athletic',
      'Care': 'Machine Wash Cold',
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Red', 'Charcoal'],
    inStock: true,
    featured: false,
  },
  {
    id: 'cincy-boxing-hoodie',
    slug: 'cincy-boxing-hoodie',
    name: 'Cincy Boxing Hoodie',
    price: 54.99,
    category: 'apparel',
    subCategory: 'Lifestyle Apparel',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    ],
    description: 'Premium heavyweight hoodie with embroidered Cincy Boxing logo. Perfect for roadwork, pre-workout warmup, or everyday wear. Represent Cincinnati\'s toughest gym.',
    whoThisIsFor: 'All Levels • Lifestyle Wear • Brand Supporters',
    features: [
      'Heavy 10oz cotton/poly blend',
      'Embroidered logo (not printed)',
      'Adjustable drawstring hood',
      'Kangaroo pocket',
      'Ribbed cuffs and waistband',
      'Unisex sizing',
    ],
    specifications: {
      'Material': '80% Cotton / 20% Polyester',
      'Weight': '10 oz',
      'Fit': 'Classic',
      'Care': 'Machine Wash Warm',
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Charcoal', 'Red'],
    inStock: true,
    featured: false,
  },

  // ========== DIGITAL TRAINING PROGRAMS ==========
  {
    id: 'beginner-4week-program',
    slug: 'beginner-boxing-4-week-program',
    name: '4-Week Beginner Boxing Program',
    price: 39.99,
    category: 'digital',
    subCategory: 'Beginner Programs',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Complete 4-week beginner boxing program with video instruction, workout plans, and technique breakdowns. Learn proper stance, basic punches, footwork, and combinations from Cincy Boxing trainers.',
    whoThisIsFor: 'Beginners • New to Boxing • At-Home Training',
    features: [
      '20+ instructional videos',
      '4 weeks of structured workouts',
      'Technique breakdowns for all fundamentals',
      'Progressive difficulty',
      'Minimal equipment needed (gloves, wraps, optional bag)',
      'Instant digital access',
      'Lifetime access to all content',
      'PDF workout guides included',
    ],
    whatsIncluded: [
      'Week 1: Stance, Jab, Cross fundamentals',
      'Week 2: Hooks, uppercuts, footwork',
      'Week 3: Combinations and defense',
      'Week 4: Full workouts and conditioning',
      'Downloadable workout PDFs',
      'Bonus: Jump rope tutorial',
    ],
    specifications: {
      'Format': 'Digital Download + Streaming',
      'Duration': '4 Weeks',
      'Videos': '20+ HD videos',
      'Requirements': 'Gloves, wraps, space to move',
    },
    inStock: true,
    isDigital: true,
    featured: false,
  },
  {
    id: 'heavy-bag-mastery',
    slug: 'heavy-bag-mastery-program',
    name: 'Heavy Bag Mastery Program',
    price: 49.99,
    category: 'digital',
    subCategory: 'Bag Work Programs',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Advanced heavy bag training program focusing on power development, combinations, and bag work technique. Transform your heavy bag from a punching bag into a training partner.',
    whoThisIsFor: 'Intermediate • Heavy Bag Owners • Power Development',
    features: [
      '25+ technique and workout videos',
      '6 weeks of progressive training',
      'Power punch mechanics',
      'Advanced combinations',
      'Rhythm and timing drills',
      'Conditioning circuits',
      'Instant digital access',
      'Works with any heavy bag',
    ],
    whatsIncluded: [
      '6 weeks of structured workouts',
      'Power development techniques',
      'Combination sequences',
      'Conditioning circuits',
      'Downloadable workout guides',
      'Bonus: Bag setup tutorial',
    ],
    specifications: {
      'Format': 'Digital Download + Streaming',
      'Duration': '6 Weeks',
      'Videos': '25+ HD videos',
      'Requirements': 'Heavy bag, gloves, wraps',
    },
    inStock: true,
    isDigital: true,
    featured: false,
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBundleProducts(): Product[] {
  return products.filter((p) => p.category === 'bundles');
}

export const categories = [
  { value: 'all', label: 'All Products', description: 'Shop everything' },
  { value: 'bundles', label: 'Bundles & Kits', description: 'Save big on complete setups', featured: true },
  { value: 'gloves', label: 'Boxing Gloves', description: 'Training, bag, and sparring gloves' },
  { value: 'equipment', label: 'Training Equipment', description: 'Mitts, ropes, and conditioning gear' },
  { value: 'bags', label: 'Heavy Bags & Stands', description: 'Bags and mounting equipment' },
  { value: 'protection', label: 'Wraps & Protection', description: 'Hand wraps and protective gear' },
  { value: 'apparel', label: 'Apparel', description: 'Training and lifestyle wear' },
  { value: 'digital', label: 'Training Programs', description: 'Video programs and coaching' },
] as const;
