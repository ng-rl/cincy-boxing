import type { Metadata } from 'next';
import Link from 'next/link';
import { neighborhoods } from '@/data/neighborhoods';
import NeighborhoodCard from '@/components/NeighborhoodCard';

export const metadata: Metadata = {
  title: 'Neighborhoods We Serve | Cincinnati Boxing Training',
  description: 'Professional boxing training throughout Cincinnati and Northern Kentucky. We serve 20+ neighborhoods including Downtown, OTR, Hyde Park, Oakley, and more. Mobile boxing training comes to you.',
  keywords: [
    'Cincinnati boxing',
    'boxing training Cincinnati',
    'Northern Kentucky boxing',
    'mobile boxing training',
    'personal boxing trainer Cincinnati',
  ],
  openGraph: {
    title: 'Areas We Serve - Cincy Boxing',
    description: 'Professional boxing training throughout Greater Cincinnati. Mobile training in 20+ neighborhoods.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Cincinnati neighborhoods boxing training',
      },
    ],
  },
};

export default function NeighborhoodsPage() {
  // Group neighborhoods by region
  const ohioNeighborhoods = neighborhoods.filter((n) => !n.name.includes(', KY'));
  const kentuckyNeighborhoods = neighborhoods.filter((n) => n.name.includes(', KY'));

  return (
    <div className="min-h-screen pt-20 bg-boxing-black">
      {/* Hero Section */}
      <div className="bg-boxing-dark border-b border-boxing-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-heading text-white mb-6">
              AREAS WE <span className="text-boxing-red">SERVE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional boxing training throughout Cincinnati and Northern Kentucky. We bring the gym to you—no matter where you live, work, or train.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-boxing-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Mobile Training</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-boxing-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Flexible Scheduling</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-boxing-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">20+ Neighborhoods</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cincinnati/Ohio Neighborhoods */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-4xl font-heading text-white mb-3">
              CINCINNATI & <span className="text-boxing-red">OHIO</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We serve neighborhoods throughout Cincinnati and surrounding Ohio communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ohioNeighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.slug} neighborhood={neighborhood} />
            ))}
          </div>
        </section>

        {/* Northern Kentucky */}
        {kentuckyNeighborhoods.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-4xl font-heading text-white mb-3">
                NORTHERN <span className="text-boxing-red">KENTUCKY</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Just across the river, we provide the same quality boxing training to Northern Kentucky.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kentuckyNeighborhoods.map((neighborhood) => (
                <NeighborhoodCard key={neighborhood.slug} neighborhood={neighborhood} />
              ))}
            </div>
          </section>
        )}

        {/* Mobile Training Benefits */}
        <section className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-4xl font-heading text-white mb-8 text-center">
            WHY <span className="text-boxing-red">MOBILE TRAINING</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-boxing-red/20 rounded-full p-3 mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-boxing-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">SAVE TIME</h3>
                <p className="text-gray-400">
                  No commute to a gym. We come to your neighborhood, saving you 30-60 minutes per session.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-boxing-red/20 rounded-full p-3 mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-boxing-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">YOUR LOCATION</h3>
                <p className="text-gray-400">
                  Train at home, your building's gym, local parks, or anywhere convenient for you.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-boxing-red/20 rounded-full p-3 mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-boxing-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">PRIVATE SESSIONS</h3>
                <p className="text-gray-400">
                  100% focused on you. No crowded gyms, no waiting for equipment, just results.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-boxing-red/20 rounded-full p-3 mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-boxing-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading text-white mb-2">PROFESSIONAL EQUIPMENT</h3>
                <p className="text-gray-400">
                  We bring all gear: gloves, pads, wraps, bags. You just show up ready to work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map Info */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-heading text-white mb-6">
            DON'T SEE YOUR <span className="text-boxing-red">NEIGHBORHOOD</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We're constantly expanding our service area throughout Greater Cincinnati and Northern Kentucky.
            If you don't see your neighborhood listed, contact us—we'd love to bring boxing training to your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block gradient-red text-white px-8 py-4 rounded-lg font-heading text-2xl hover:shadow-lg hover:shadow-boxing-red/50 transition-all duration-200"
            >
              BOOK A SESSION
            </Link>
            <a
              href="mailto:info@cincyboxing.com"
              className="inline-block bg-boxing-dark border-2 border-boxing-gold text-white px-8 py-4 rounded-lg font-heading text-2xl hover:bg-boxing-gold hover:text-boxing-black transition-all duration-200"
            >
              CONTACT US
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-heading text-white mb-8 text-center">
            FREQUENTLY ASKED <span className="text-boxing-red">QUESTIONS</span>
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-l-4 border-boxing-red pl-6">
              <h3 className="text-xl font-heading text-white mb-2">
                Do you really train in all these neighborhoods?
              </h3>
              <p className="text-gray-400">
                Yes! Our mobile training model means we come to you. Whether you're in Downtown or West Chester,
                we bring professional boxing equipment and expert coaching to your location.
              </p>
            </div>

            <div className="border-l-4 border-boxing-gold pl-6">
              <h3 className="text-xl font-heading text-white mb-2">
                Where exactly do sessions take place?
              </h3>
              <p className="text-gray-400">
                We're flexible! Common locations include your home, building gym, backyard, local parks,
                parking garages, or any open space. We'll work with you to find the best spot.
              </p>
            </div>

            <div className="border-l-4 border-boxing-red pl-6">
              <h3 className="text-xl font-heading text-white mb-2">
                Is there a travel fee?
              </h3>
              <p className="text-gray-400">
                For neighborhoods within our core service area (most Cincinnati and NKY areas), no additional fee.
                For outer areas, we may add a small travel charge—contact us for details.
              </p>
            </div>

            <div className="border-l-4 border-boxing-gold pl-6">
              <h3 className="text-xl font-heading text-white mb-2">
                What if weather is bad for outdoor training?
              </h3>
              <p className="text-gray-400">
                We have indoor alternatives! Most apartment/condo buildings have gyms or common areas.
                We can also train in covered parking garages or reschedule if needed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
