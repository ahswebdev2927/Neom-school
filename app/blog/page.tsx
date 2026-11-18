import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/app/lib/blogData';

export const metadata = {
  title: 'Educational Blog & School Insights | NEOM School Santosh Nagar',
  description: 'Read the latest updates, parenting tips, Cambridge curriculum benefits, and educational insights from NEOM School Hyderabad.',
  alternates: {
    canonical: 'https://www.neomeducationhyd.com/blog/',
  },
};

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights, updates, and educational perspectives from NEOM School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-sky-600 font-semibold mb-2">{post.date}</span>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-blue transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-blue font-semibold hover:text-sky-600 transition-colors"
                >
                  Read More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
