import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Post } from 'contentlayer/generated';

interface PostCardProps {
  post: Post;
}

const typeBadgeColors = {
  'training-tips': 'bg-boxing-red text-white',
  'client-stories': 'bg-boxing-gold text-boxing-black',
  'cincinnati-events': 'bg-blue-600 text-white',
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-boxing-dark border border-boxing-gray rounded-lg overflow-hidden hover:border-boxing-red transition-all duration-300 hover:shadow-lg hover:shadow-boxing-red/20 group">
      {/* Featured Image */}
      <div className="relative h-64 bg-boxing-gray overflow-hidden">
        <Image
          src={post.featuredImage || 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80'}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide ${typeBadgeColors[post.category]}`}>
            {post.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-boxing-red transition-colors">
          <Link href={post.url}>
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={post.url}
          className="inline-flex items-center text-boxing-red hover:text-boxing-gold transition-colors font-medium group"
        >
          Read More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
