'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-24 left-4 z-50 md:top-28 md:left-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl rounded-full px-4 py-2 text-gray-700 hover:text-blue-600 transition group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/images/hero/image4.jpeg"
                alt="Vidya Classes"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 px-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-white/80">
            <span className="flex items-center gap-1"><FaCalendarAlt size={12} /> {post.date}</span>
            <span className="flex items-center gap-1"><FaUser size={12} /> {post.author}</span>
            <span className="flex items-center gap-1"><FaTag size={12} /> {post.category}</span>
            <span className="flex items-center gap-1"><FaClock size={12} /> {post.readTime}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8 md:py-10 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
              {post.content}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
