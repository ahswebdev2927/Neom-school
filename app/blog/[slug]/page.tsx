import { getBlogPostBySlug, blogPosts } from '@/app/lib/blogData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found | NEOM SCHOOL' };
  }
  
  return {
    title: `${post.title} | NEOM SCHOOL`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl mx-auto drop-shadow-md">
              {post.title}
            </h1>
            <p className="text-sky-200 text-lg md:text-xl font-medium drop-shadow-sm">
              {post.date}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom mx-auto px-4 mt-12 md:mt-16 max-w-4xl">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-primary-blue hover:text-sky-600 font-medium transition-colors">
            <span className="mr-2">←</span> Back to Blog
          </Link>
        </div>

        {/* 
          Using dangerouslySetInnerHTML because we store HTML in the blogData content.
        */}
        <div 
          className="max-w-none text-gray-800 text-lg md:text-xl
                     [&>h2]:text-primary-blue [&>h2]:font-bold [&>h2]:text-3xl [&>h2]:mt-10 [&>h2]:mb-4
                     [&>h2_a]:text-primary-blue [&>h2_a]:hover:text-sky-600 [&>h2_a]:transition-colors
                     [&>h3]:text-sky-700 [&>h3]:font-semibold [&>h3]:text-2xl [&>h3]:mt-8 [&>h3]:mb-3
                     [&>h3_a]:text-sky-700 [&>h3_a]:hover:text-sky-500 [&>h3_a]:transition-colors
                     [&>p]:leading-relaxed [&>p]:mb-6
                     [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
                     [&>ul>li>strong]:text-gray-900 [&>ul>li>strong]:font-semibold
                     [&>p>strong]:text-gray-900 [&>p>strong]:font-semibold
                     [&>blockquote]:border-l-4 [&>blockquote]:border-primary-blue [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
