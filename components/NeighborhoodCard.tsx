import Link from 'next/link';
import Image from 'next/image';
import type { Neighborhood } from '@/data/neighborhoods';

interface NeighborhoodCardProps {
  neighborhood: Neighborhood;
}

export default function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <Link
      href={`/neighborhoods/${neighborhood.slug}`}
      className="group bg-boxing-dark border border-boxing-gray rounded-lg overflow-hidden hover:border-boxing-red transition-all duration-300 hover:shadow-lg hover:shadow-boxing-red/20"
    >
      {/* Image */}
      <div className="relative h-48 bg-boxing-gray overflow-hidden">
        <Image
          src={neighborhood.image}
          alt={neighborhood.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-boxing-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-heading text-white group-hover:text-boxing-gold transition-colors">
            {neighborhood.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-boxing-red font-heading text-sm mb-3">
          {neighborhood.tagline}
        </p>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4">
          {neighborhood.description}
        </p>

        {/* Landmarks */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {neighborhood.landmarks.slice(0, 3).map((landmark) => (
              <span
                key={landmark}
                className="text-xs bg-boxing-gray text-gray-300 px-2 py-1 rounded"
              >
                {landmark}
              </span>
            ))}
            {neighborhood.landmarks.length > 3 && (
              <span className="text-xs bg-boxing-gray text-gray-300 px-2 py-1 rounded">
                +{neighborhood.landmarks.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center text-boxing-red group-hover:text-boxing-gold transition-colors font-medium">
          <span>View Details</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
