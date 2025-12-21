export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  landmarks: string[];
  whyTrainHere: string;
  demographics: string;
  localTestimonial?: {
    quote: string;
    author: string;
    location: string;
  };
  image: string;
  zipCodes?: string[];
  nearbyAreas?: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'downtown-cincinnati',
    name: 'Downtown Cincinnati',
    tagline: 'Professional Boxing Training in the Heart of the City',
    description: 'Downtown Cincinnati professionals deserve a workout that matches their intensity. Our boxing training brings elite fitness to the urban core, perfect for lunch breaks, before work, or evening sessions. Train near Fountain Square, the Banks, and major office buildings.',
    landmarks: ['Fountain Square', 'The Banks', 'US Bank Arena', 'Great American Ball Park'],
    whyTrainHere: 'Downtown demands efficiency. Our mobile training meets you at your building, nearby parks, or preferred location. No commute to a gym—we bring professional boxing training to your doorstep. Ideal for busy professionals who need effective workouts on their schedule.',
    demographics: 'Young professionals, executives, urban residents seeking high-intensity training without travel time',
    localTestimonial: {
      quote: 'Training downtown is a game-changer. I can fit in a real workout during lunch without leaving the business district.',
      author: 'James K.',
      location: 'Downtown Cincinnati',
    },
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    zipCodes: ['45202', '45203'],
    nearbyAreas: ['Over-the-Rhine', 'The Banks', 'Pendleton'],
  },
  {
    slug: 'over-the-rhine',
    name: 'Over-the-Rhine (OTR)',
    tagline: 'Gritty Boxing Training for OTR\'s Toughest Neighborhood',
    description: 'Over-the-Rhine is Cincinnati\'s most dynamic neighborhood—and it deserves authentic boxing training. We bring old-school boxing mentality to OTR\'s streets, parks, and spaces. Train where the city\'s energy is highest, from Washington Park to Findlay Market.',
    landmarks: ['Washington Park', 'Findlay Market', 'Music Hall', 'Rhinegeist Brewery'],
    whyTrainHere: 'OTR\'s transformation mirrors boxing\'s ethos: grit, transformation, and relentless improvement. Our training fits the neighborhood\'s energy—intense, authentic, and no-nonsense. Perfect for residents who want real boxing, not boutique fitness.',
    demographics: 'Young professionals, artists, creatives, fitness enthusiasts who value authenticity',
    localTestimonial: {
      quote: 'OTR energy meets boxing intensity. This is the real deal, not some watered-down fitness class.',
      author: 'Sarah M.',
      location: 'Over-the-Rhine',
    },
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    zipCodes: ['45202', '45214'],
    nearbyAreas: ['Downtown', 'Pendleton', 'Clifton'],
  },
  {
    slug: 'hyde-park',
    name: 'Hyde Park',
    tagline: 'Premium Personal Boxing Training in Hyde Park',
    description: 'Hyde Park residents expect excellence, and our boxing training delivers. Personalized sessions in Hyde Park Square area, local parks, or your home. We bring professional-grade equipment and expertise to Cincinnati\'s most sought-after neighborhood.',
    landmarks: ['Hyde Park Square', 'Ault Park', 'Rookwood Commons'],
    whyTrainHere: 'Hyde Park values quality and personalized service. Our one-on-one and small group training provides the attention to detail Hyde Park residents expect. Train in beautiful Ault Park, your backyard, or indoor space—we adapt to your preferences.',
    demographics: 'Families, established professionals, health-conscious residents seeking premium personal training',
    localTestimonial: {
      quote: 'Finally found a trainer who brings the gym to me. The quality and personalization are exactly what I needed.',
      author: 'Jennifer L.',
      location: 'Hyde Park',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    zipCodes: ['45208'],
    nearbyAreas: ['Oakley', 'Mount Lookout', 'East Walnut Hills'],
  },
  {
    slug: 'oakley',
    name: 'Oakley',
    tagline: 'Boxing Fitness for Oakley\'s Active Community',
    description: 'Oakley is Cincinnati\'s hub for dining, shopping, and active living. Our boxing training adds high-intensity fitness to the mix. Train near Oakley Square, Madison Bowl, or throughout this walkable neighborhood. Perfect for residents who prioritize health and community.',
    landmarks: ['Oakley Square', 'Madison Bowl', 'Oakley Swim & Tennis Club'],
    whyTrainHere: 'Oakley residents live actively and eat well—boxing training is the perfect fitness complement. Our sessions integrate into your Oakley lifestyle, whether training before brunch or between errands. Community-focused, results-driven, and conveniently located.',
    demographics: 'Young families, active professionals, health-conscious millennials and Gen X',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    zipCodes: ['45209'],
    nearbyAreas: ['Hyde Park', 'Madisonville', 'Pleasant Ridge'],
  },
  {
    slug: 'mount-lookout',
    name: 'Mount Lookout',
    tagline: 'Elite Boxing Training for Mount Lookout',
    description: 'Mount Lookout combines neighborhood charm with urban sophistication—our boxing training matches that balance. Personalized sessions throughout Mount Lookout, from Delta Avenue to Ault Park. Professional boxing training that fits your elevated lifestyle.',
    landmarks: ['Mount Lookout Square', 'Ault Park', 'Delta Avenue'],
    whyTrainHere: 'Mount Lookout residents appreciate quality, expertise, and results. Our boxing training delivers all three with white-glove service. Train in Ault Park\'s scenic settings or the privacy of your home. Flexible, professional, and effective.',
    demographics: 'Established families, successful professionals, fitness-focused residents',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
    zipCodes: ['45208'],
    nearbyAreas: ['Hyde Park', 'Columbia-Tusculum', 'East Walnut Hills'],
  },
  {
    slug: 'clifton',
    name: 'Clifton',
    tagline: 'Boxing Training for UC Students & Clifton Residents',
    description: 'Clifton and the University of Cincinnati campus need accessible, effective fitness. Our boxing training serves students, faculty, and residents with affordable options and flexible scheduling. Train near campus, Burnet Woods, or throughout Clifton\'s diverse community.',
    landmarks: ['University of Cincinnati', 'Burnet Woods', 'Ludlow Avenue', 'Clifton Gaslight District'],
    whyTrainHere: 'Students and young professionals need budget-friendly, time-efficient workouts that deliver results. Boxing training burns calories, builds strength, and reduces stress—perfect for academic and professional demands. We offer student rates and group discounts.',
    demographics: 'College students, grad students, faculty, young professionals, long-time residents',
    localTestimonial: {
      quote: 'Best workout near campus. Way better than the rec center, and the trainer works around my class schedule.',
      author: 'Mike T.',
      location: 'UC Student',
    },
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
    zipCodes: ['45219', '45220'],
    nearbyAreas: ['Corryville', 'Avondale', 'Northside'],
  },
  {
    slug: 'west-chester',
    name: 'West Chester',
    tagline: 'Suburban Boxing Training in West Chester Township',
    description: 'West Chester families and professionals don\'t need to drive downtown for quality boxing training. We bring expert coaching to your neighborhood, parks, and community spaces. Convenient training for Liberty Township, Union Centre, and throughout West Chester.',
    landmarks: ['Voice of America Park', 'Streets of West Chester', 'Lakota School District'],
    whyTrainHere: 'West Chester residents value convenience and family-friendly fitness. Our flexible training locations mean no commute—we meet you in your area. Great for parents seeking efficient workouts and teens learning boxing fundamentals.',
    demographics: 'Families with kids, suburban professionals, active adults',
    image: 'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?w=800&q=80',
    zipCodes: ['45069', '45011'],
    nearbyAreas: ['Liberty Township', 'Mason', 'Fairfield'],
  },
  {
    slug: 'mason',
    name: 'Mason',
    tagline: 'Family-Friendly Boxing Training in Mason',
    description: 'Mason is home to families who prioritize youth activities and fitness. Our boxing training serves all ages—from teen boxing fundamentals to adult fitness classes. Train at local parks, community centers, or your home. Quality instruction in your community.',
    landmarks: ['Kings Island', 'Mason Community Center', 'Heritage Oak Park'],
    whyTrainHere: 'Mason families juggle sports, school, and activities—our mobile training eliminates extra driving. We offer family packages, youth programs, and adult fitness. Develop discipline, fitness, and boxing skills without leaving Mason.',
    demographics: 'Families with active kids, suburban professionals, youth athletes',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
    zipCodes: ['45040'],
    nearbyAreas: ['West Chester', 'Lebanon', 'Deerfield Township'],
  },
  {
    slug: 'blue-ash',
    name: 'Blue Ash',
    tagline: 'Professional Boxing Fitness in Blue Ash',
    description: 'Blue Ash combines business and residential communities—our boxing training serves both. Train at Summit Park, near your office, or throughout Blue Ash. Flexible scheduling for busy professionals and active residents seeking results-driven workouts.',
    landmarks: ['Summit Park', 'Blue Ash Golf Course', 'Blue Ash Recreation Center'],
    whyTrainHere: 'Blue Ash professionals need efficient, effective workouts. Boxing training delivers maximum results in minimum time. We schedule around your work and family commitments, bringing professional equipment to your preferred location.',
    demographics: 'Working professionals, active adults, families',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
    zipCodes: ['45242'],
    nearbyAreas: ['Sycamore Township', 'Montgomery', 'Kenwood'],
  },
  {
    slug: 'anderson-township',
    name: 'Anderson Township',
    tagline: 'Boxing Training Throughout Anderson Township',
    description: 'Anderson Township\'s sprawling community deserves local boxing training. We serve all Anderson Township areas—from Turpin Hills to Clough Pike. Professional training at Anderson Parks, your home, or preferred outdoor location.',
    landmarks: ['Anderson Park', 'Beechmont Avenue', 'Turpin High School area'],
    whyTrainHere: 'Why drive across town when expert boxing training comes to you? Anderson residents get professional coaching close to home. Perfect for busy families, working parents, and anyone seeking convenient, quality fitness.',
    demographics: 'Families, established professionals, active seniors',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    zipCodes: ['45230', '45255'],
    nearbyAreas: ['Mount Washington', 'Newtown', 'Mariemont'],
  },
  {
    slug: 'westwood',
    name: 'Westwood',
    tagline: 'Affordable Boxing Training in Westwood',
    description: 'Westwood is a neighborhood built on hard work and community—values that align perfectly with boxing. We offer affordable, accessible training throughoutWestwood. Real boxing instruction without boutique pricing.',
    landmarks: ['Westwood Town Hall', 'Gilday Park', 'Harrison Avenue'],
    whyTrainHere: 'Westwood residents deserve quality boxing training at honest prices. Our community-focused approach provides professional instruction, real equipment, and authentic boxing culture. Train locally, save time, get real results.',
    demographics: 'Working families, blue-collar professionals, community-focused residents',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    zipCodes: ['45238'],
    nearbyAreas: ['Price Hill', 'Delhi Township', 'Cheviot'],
  },
  {
    slug: 'northside',
    name: 'Northside',
    tagline: 'Alternative Fitness & Boxing in Northside',
    description: 'Northside marches to its own beat—our boxing training fits right in. Authentic, unpretentious training for Northside\'s diverse community. From Hamilton Avenue to the Northside Tavern area, we bring real boxing to Cincinnati\'s most eclectic neighborhood.',
    landmarks: ['Hamilton Avenue', 'Hoffner Park', 'Northside Tavern', 'Shake It Records'],
    whyTrainHere: 'Northside values authenticity over trends—that\'s exactly our approach to boxing. No gimmicks, no Instagram poses, just effective training that works. Perfect for residents who want genuine fitness, not fitness theater.',
    demographics: 'Artists, musicians, young professionals, long-time residents, LGBTQ+ community',
    localTestimonial: {
      quote: 'This is what I wanted—real boxing, real coaching, none of that boutique fitness nonsense.',
      author: 'Alex P.',
      location: 'Northside',
    },
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
    zipCodes: ['45223'],
    nearbyAreas: ['Camp Washington', 'Clifton', 'College Hill'],
  },
  {
    slug: 'covington-ky',
    name: 'Covington, KY',
    tagline: 'Northern Kentucky Boxing Training in Covington',
    description: 'Just across the river, Covington deserves the same quality boxing training as Cincinnati. We serve all Covington neighborhoods—from MainStrasse Village to the Licking Riverside. Professional training for Northern Kentucky residents.',
    landmarks: ['MainStrasse Village', 'Roebling Suspension Bridge', 'Devou Park', 'Madison Avenue'],
    whyTrainHere: 'Covington is Cincinnati\'s backyard—we train here too. No need to cross the bridge for quality instruction. We bring professional boxing to Covington parks, riverside areas, and your home. Northern Kentucky deserves local options.',
    demographics: 'Young professionals, artists, families, urban pioneers',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    zipCodes: ['41011', '41014', '41015'],
    nearbyAreas: ['Newport, KY', 'Bellevue, KY', 'Latonia'],
  },
  {
    slug: 'newport-ky',
    name: 'Newport, KY',
    tagline: 'Boxing on the Levee - Newport, Kentucky Training',
    description: 'Newport\'s riverfront renaissance includes boxing training. From Newport on the Levee to historic areas, we provide professional instruction throughout Newport. Quality fitness for Northern Kentucky\'s entertainment district.',
    landmarks: ['Newport on the Levee', 'Newport Aquarium', 'Purple People Bridge', 'General James Taylor Park'],
    whyTrainHere: 'Newport residents and workers get premium boxing training without Cincinnati commutes. Train riverside, near your condo, or throughout Newport. Perfect for urban dwellers and entertainment district professionals.',
    demographics: 'Urban residents, entertainment workers, young professionals',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    zipCodes: ['41071', '41072', '41073'],
    nearbyAreas: ['Covington, KY', 'Bellevue, KY', 'Fort Thomas, KY'],
  },
  {
    slug: 'mount-adams',
    name: 'Mount Adams',
    tagline: 'Hilltop Boxing Training in Mount Adams',
    description: 'Mount Adams\' hills are legendary—perfect for boxing conditioning. Our training leverages Mount Adams\' natural terrain for intense workouts. Train throughout this historic hilltop neighborhood with Cincinnati\'s best views.',
    landmarks: ['Holy Cross-Immaculata Church', 'Mount Adams Bar & Grill', 'Eden Park'],
    whyTrainHere: 'Mount Adams residents already climb hills daily—let\'s make those climbs part of your boxing conditioning. Our training uses the neighborhood\'s elevation for incredible cardio and leg work. Scenic, challenging, and effective.',
    demographics: 'Young professionals, singles, urban dwellers',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
    zipCodes: ['45202'],
    nearbyAreas: ['Downtown', 'Columbia-Tusculum', 'East Walnut Hills'],
  },
  {
    slug: 'columbia-tusculum',
    name: 'Columbia-Tusculum',
    tagline: 'Riverside Boxing Training in Columbia-Tusculum',
    description: 'Cincinnati\'s oldest neighborhood deserves classic boxing training. Columbia-Tusculum\'s riverside location and park access create perfect training environments. From Alms Park to residential streets, we bring boxing to this historic area.',
    landmarks: ['Alms Park', 'Columbia Parkway', 'Tusculum Avenue'],
    whyTrainHere: 'Columbia-Tusculum offers parks, hills, and river views—ideal for outdoor boxing training. Our sessions use the neighborhood\'s natural features for varied, challenging workouts. History meets intensity in this unique setting.',
    demographics: 'Families, professionals, long-time residents, urban pioneers',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    zipCodes: ['45226'],
    nearbyAreas: ['Mount Lookout', 'East End', 'Mount Adams'],
  },
];

// Helper function to get neighborhood by slug
export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

// Helper function to get all neighborhood slugs (for static generation)
export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug);
}
