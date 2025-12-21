import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage || 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=630&fit=crop',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=630&fit=crop'],
    },
  };
}

const typeBadgeColors = {
  'training-tips': 'bg-boxing-red text-white',
  'client-stories': 'bg-boxing-gold text-boxing-black',
  'cincinnati-events': 'bg-blue-600 text-white',
};

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="min-h-screen pt-20 bg-boxing-black">
      {/* Featured Image */}
      <div className="relative h-96 bg-boxing-dark">
        <Image
          src={post.featuredImage || 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-boxing-black to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {/* Meta */}
        <div className="mb-8">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4 ${typeBadgeColors[post.category]}`}>
            {post.category.replace('-', ' ')}
          </span>
          <h1 className="text-5xl md:text-6xl font-heading text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-400 text-lg">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span className="mx-3">•</span>
            <span>{post.author}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 md:p-12 mb-12">
          <div className="mdx-content">
            <MDXContent />
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mb-16">
          <Link
            href="/blog"
            className="inline-flex items-center text-boxing-red hover:text-boxing-gold transition-colors font-medium text-lg group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
