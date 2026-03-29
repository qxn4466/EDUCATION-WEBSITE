'use client';

import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaTag, FaShare, FaBookmark } from 'react-icons/fa';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to all articles
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600 border-t border-b border-gray-100 py-4">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-500" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <FaUser className="mr-2 text-green-500" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-orange-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Social Share Buttons (optional) */}
          <div className="flex gap-3 mt-6">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
              <FaShare className="text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-colors">
              <FaBookmark className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div 
              className="prose prose-lg prose-blue max-w-none
                         prose-headings:font-bold prose-headings:text-gray-800
                         prose-h1:text-3xl prose-h1:mb-6
                         prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                         prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                         prose-p:text-gray-700 prose-p:leading-relaxed
                         prose-ul:list-disc prose-ul:pl-6
                         prose-li:mb-2
                         prose-strong:text-blue-600
                         prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-md"
          >
            <FaArrowLeft className="mr-2" /> 
            Browse More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}