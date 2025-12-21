import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { neighborhoods, getNeighborhoodBySlug, getAllNeighborhoodSlugs } from '@/data/neighborhoods';

interface NeighborhoodPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllNeighborhoodSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const neighborhood = getNeighborhoodBySlug(params.slug);

  if (!neighborhood) {
    return {
      title: 'Neighborhood Not Found',
    };
  }

  const title = `${neighborhood.name} Boxing Training | Cincy Boxing`;
  const description = `${neighborhood.tagline}. Professional boxing training in ${neighborhood.name}. Personal sessions, small groups, and boxing fitness. Serving ${neighborhood.landmarks.join(', ')}.`;

  return {
    title,
    description,
    keywords: [
      `boxing training ${neighborhood.name}`,
      `personal trainer ${neighborhood.name}`,
      `boxing fitness ${neighborhood.name}`,
      neighborhood.name,
      'Cincinnati boxing',
      ...neighborhood.landmarks,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: neighborhood.image,
          width: 1200,
          height: 630,
          alt: `Boxing training in ${neighborhood.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [neighborhood.image],
    },
  };
}

export default function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const neighborhood = getNeighborhoodBySlug(params.slug);

  if (!neighborhood) {
    notFound();
  }

  // Structured data for LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://cincyboxing.com/neighborhoods/${neighborhood.slug}`,
    name: `Cincy Boxing - ${neighborhood.name}`,
    description: neighborhood.description,
    url: `https://cincyboxing.com/neighborhoods/${neighborhood.slug}`,
    image: neighborhood.image,
    areaServed: {
      '@type': 'City',
      name: neighborhood.name,
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: neighborhood.name,
      addressRegion: 'OH',
      postalCode: neighborhood.zipCodes?.[0] || '',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen pt-20 bg-boxing-black">
        {/* Hero Section */}
        <div className="relative h-96 bg-boxing-dark">
          <Image
            src={neighborhood.image}
            alt={`${neighborhood.name} cityscape`}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-boxing-black/60 to-boxing-black"></div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-heading text-white mb-4">
                  {neighborhood.name}
                </h1>
                <p className="text-2xl md:text-3xl text-boxing-gold font-heading mb-6">
                  {neighborhood.tagline}
                </p>
                <Link
                  href="/book"
                  className="inline-block gradient-red text-white px-8 py-4 rounded-lg font-heading text-2xl hover:shadow-lg hover:shadow-boxing-red/50 transition-all duration-200"
                >
                  BOOK A SESSION
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <section>
                <h2 className="text-4xl font-heading text-white mb-6">
                  BOXING TRAINING IN <span className="text-boxing-red">{neighborhood.name.toUpperCase()}</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {neighborhood.description}
                </p>
              </section>

              {/* Why Train Here */}
              <section className="bg-boxing-dark border border-boxing-gray rounded-lg p-8">
                <h2 className="text-3xl font-heading text-white mb-6">
                  WHY TRAIN IN <span className="text-boxing-red">{neighborhood.name.toUpperCase()}</span>?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {neighborhood.whyTrainHere}
                </p>
              </section>

              {/* Services Offered */}
              <section>
                <h2 className="text-3xl font-heading text-white mb-6">
                  SERVICES IN <span className="text-boxing-red">{neighborhood.name.toUpperCase()}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-boxing-dark border-l-4 border-boxing-red p-6 rounded">
                    <h3 className="text-xl font-heading text-white mb-3">PRIVATE 1-ON-1</h3>
                    <p className="text-gray-400">
                      Personalized boxing training tailored to your goals. We come to you in {neighborhood.name}.
                    </p>
                  </div>
                  <div className="bg-boxing-dark border-l-4 border-boxing-gold p-6 rounded">
                    <h3 className="text-xl font-heading text-white mb-3">SMALL GROUP SESSIONS</h3>
                    <p className="text-gray-400">
                      Train with 2-4 people. Great for couples, friends, or coworkers in {neighborhood.name}.
                    </p>
                  </div>
                  <div className="bg-boxing-dark border-l-4 border-boxing-red p-6 rounded">
                    <h3 className="text-xl font-heading text-white mb-3">OUTDOOR TRAINING</h3>
                    <p className="text-gray-400">
                      Utilize {neighborhood.name}'s parks and outdoor spaces for dynamic boxing workouts.
                    </p>
                  </div>
                  <div className="bg-boxing-dark border-l-4 border-boxing-gold p-6 rounded">
                    <h3 className="text-xl font-heading text-white mb-3">IN-HOME SESSIONS</h3>
                    <p className="text-gray-400">
                      We bring professional equipment to your {neighborhood.name} home or building.
                    </p>
                  </div>
                </div>
              </section>

              {/* Testimonial */}
              {neighborhood.localTestimonial && (
                <section className="bg-gradient-to-br from-boxing-red to-red-900 p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <svg className="w-12 h-12 text-boxing-gold mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div>
                      <p className="text-white text-xl italic mb-4">
                        "{neighborhood.localTestimonial.quote}"
                      </p>
                      <p className="text-boxing-gold font-bold">
                        — {neighborhood.localTestimonial.author}
                      </p>
                      <p className="text-white/80">
                        {neighborhood.localTestimonial.location}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* CTA */}
              <section className="bg-boxing-dark border-2 border-boxing-red rounded-lg p-8 text-center">
                <h2 className="text-3xl font-heading text-white mb-4">
                  READY TO START TRAINING IN {neighborhood.name.toUpperCase()}?
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Book your first session and experience professional boxing training in your neighborhood.
                </p>
                <Link
                  href="/book"
                  className="inline-block gradient-red text-white px-10 py-4 rounded-lg font-heading text-2xl hover:shadow-lg hover:shadow-boxing-red/50 transition-all duration-200"
                >
                  BOOK NOW
                </Link>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6 sticky top-24">
                <h3 className="text-2xl font-heading text-white mb-6">QUICK FACTS</h3>

                <div className="space-y-6">
                  {/* Landmarks */}
                  <div>
                    <h4 className="text-boxing-gold font-heading text-lg mb-3">NEARBY LANDMARKS</h4>
                    <ul className="space-y-2">
                      {neighborhood.landmarks.map((landmark) => (
                        <li key={landmark} className="text-gray-300 flex items-start">
                          <svg className="w-5 h-5 text-boxing-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demographics */}
                  <div>
                    <h4 className="text-boxing-gold font-heading text-lg mb-3">WHO WE SERVE</h4>
                    <p className="text-gray-300 text-sm">
                      {neighborhood.demographics}
                    </p>
                  </div>

                  {/* Zip Codes */}
                  {neighborhood.zipCodes && neighborhood.zipCodes.length > 0 && (
                    <div>
                      <h4 className="text-boxing-gold font-heading text-lg mb-3">ZIP CODES</h4>
                      <div className="flex flex-wrap gap-2">
                        {neighborhood.zipCodes.map((zip) => (
                          <span key={zip} className="bg-boxing-gray text-white px-3 py-1 rounded-full text-sm">
                            {zip}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Nearby Areas */}
                  {neighborhood.nearbyAreas && neighborhood.nearbyAreas.length > 0 && (
                    <div>
                      <h4 className="text-boxing-gold font-heading text-lg mb-3">NEARBY AREAS</h4>
                      <p className="text-gray-300 text-sm">
                        {neighborhood.nearbyAreas.join(' • ')}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-boxing-gray">
                  <Link
                    href="/book"
                    className="block w-full gradient-red text-white px-6 py-3 rounded-lg font-heading text-xl text-center hover:shadow-lg hover:shadow-boxing-red/50 transition-all duration-200"
                  >
                    BOOK SESSION
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Other Neighborhoods */}
          <section className="mt-20">
            <h2 className="text-4xl font-heading text-white mb-8 text-center">
              OTHER AREAS WE <span className="text-boxing-red">SERVE</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {neighborhoods
                .filter((n) => n.slug !== neighborhood.slug)
                .slice(0, 8)
                .map((area) => (
                  <Link
                    key={area.slug}
                    href={`/neighborhoods/${area.slug}`}
                    className="bg-boxing-dark border border-boxing-gray rounded-lg p-4 hover:border-boxing-red transition-colors text-center group"
                  >
                    <h3 className="text-white font-heading text-lg group-hover:text-boxing-red transition-colors">
                      {area.name}
                    </h3>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="inline-flex items-center text-boxing-red hover:text-boxing-gold transition-colors font-medium text-lg"
              >
                View All Neighborhoods
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
