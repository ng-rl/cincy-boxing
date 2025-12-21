export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  salePrice?: number;
  category: 'gloves' | 'wraps' | 'bags' | 'equipment' | 'apparel';
  images: string[];
  description: string;
  features: string[];
  specifications?: {
    [key: string]: string;
  };
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
  stripeProductId?: string; // For future Stripe integration
}

export const products: Product[] = [
  {
    id: 'everlast-pro-gloves',
    slug: 'everlast-pro-style-training-gloves',
    name: 'Everlast Pro Style Training Gloves',
    price: 49.99,
    category: 'gloves',
    images: [
      'https://images.unsplash.com/photo-1611676097100-e4bb4f8e0e64?w=800&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Professional-grade training gloves designed for serious boxers. Premium leather construction with optimal wrist support and hand protection. Perfect for heavy bag work, mitt training, and sparring.',
    features: [
      'Premium synthetic leather construction',
      'Full mesh palm for breathability',
      'ThumbLok feature for safety',
      'Dense foam padding for maximum protection',
      'Hook and loop closure for secure fit',
      'Ideal for bag and mitt work',
    ],
    specifications: {
      'Material': 'Premium Synthetic Leather',
      'Padding': 'Multi-layer foam',
      'Closure': 'Hook and Loop',
      'Best For': 'Training, Bag Work, Mitt Work',
    },
    sizes: ['12 oz', '14 oz', '16 oz'],
    colors: ['Red', 'Black', 'Blue'],
    inStock: true,
    featured: true,
  },
  {
    id: 'mexican-style-wraps',
    slug: 'mexican-style-hand-wraps-180',
    name: 'Mexican Style Hand Wraps (180")',
    price: 12.99,
    salePrice: 9.99,
    category: 'wraps',
    images: [
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    ],
    description: 'Professional 180-inch hand wraps with superior stretch and support. Mexican-style elastic material provides optimal knuckle protection and wrist stability. Essential for any boxer.',
    features: [
      '180 inches of protection',
      'Elastic cotton blend for flexibility',
      'Thumb loop for easy application',
      'Velcro closure for secure fit',
      'Machine washable',
      'Sold in pairs',
    ],
    specifications: {
      'Length': '180 inches',
      'Material': 'Elastic Cotton Blend',
      'Care': 'Machine Washable',
    },
    colors: ['Black', 'Red', 'White', 'Blue'],
    inStock: true,
    featured: true,
  },
  {
    id: 'heavy-bag-100lb',
    slug: 'heavy-bag-100-pound',
    name: 'Heavy Bag - 100 Pound',
    price: 149.99,
    category: 'bags',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    ],
    description: 'Commercial-grade 100-pound heavy bag built to withstand the toughest training sessions. Durable synthetic leather shell filled with textile fibers for consistent density and shape retention.',
    features: [
      '100 pounds of training power',
      'Reinforced synthetic leather shell',
      'Textile fiber filling for durability',
      'Heavy-duty nylon straps',
      'Weather-resistant construction',
      'Includes hanging chain',
    ],
    specifications: {
      'Weight': '100 lbs',
      'Height': '48 inches',
      'Diameter': '14 inches',
      'Material': 'Synthetic Leather',
      'Filling': 'Textile Fibers',
    },
    inStock: true,
    featured: true,
  },
  {
    id: 'speed-jump-rope',
    slug: 'professional-speed-jump-rope',
    name: 'Professional Speed Jump Rope',
    price: 24.99,
    category: 'equipment',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    description: 'Lightweight speed rope designed for boxing footwork and conditioning. Adjustable length, ball-bearing swivels, and durable cable for smooth, fast rotations. Essential cardio tool.',
    features: [
      'Premium ball-bearing system',
      'Adjustable length (fits heights 5\' to 6\'6")',
      'Lightweight aluminum handles',
      'Durable coated steel cable',
      'Non-slip grip handles',
      'Perfect for double-unders',
    ],
    specifications: {
      'Handle Material': 'Aluminum',
      'Cable Material': 'Coated Steel',
      'Length': 'Adjustable up to 10 feet',
      'Weight': '4 oz',
    },
    colors: ['Black/Red', 'Black/Blue', 'Black/Gold'],
    inStock: true,
    featured: false,
  },
  {
    id: 'cincy-boxing-tshirt',
    slug: 'cincy-boxing-training-tshirt',
    name: 'Cincy Boxing Training T-Shirt',
    price: 29.99,
    category: 'apparel',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    ],
    description: 'Official Cincy Boxing training shirt. Premium moisture-wicking fabric keeps you cool during intense workouts. Classic fit with bold Cincy Boxing logo.',
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

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'gloves', label: 'Boxing Gloves' },
  { value: 'wraps', label: 'Hand Wraps' },
  { value: 'bags', label: 'Heavy Bags' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'apparel', label: 'Apparel' },
] as const;
