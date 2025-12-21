import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Boxing training tips, client success stories, and Cincinnati fitness news from Cincy Boxing.',
  openGraph: {
    title: 'Cincy Boxing Blog',
    description: 'Boxing training tips, client success stories, and Cincinnati fitness news.',
  },
};

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="min-h-screen pt-20 bg-boxing-black">
      {/* Header */}
      <div className="bg-boxing-dark border-b border-boxing-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-heading text-white mb-4">
            THE <span className="text-boxing-red">BLOG</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Training tips, client stories, and everything boxing in Cincinnati
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
