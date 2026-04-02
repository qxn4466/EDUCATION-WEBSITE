'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaPenFancy, FaUsers, FaRocket, FaClock, FaUser, FaCalendarAlt, FaBook, FaStar } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
  featured: boolean;
  icon: string;
  color: string;
}

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Exam Success",
    excerpt: "Discover proven strategies to improve concentration, memory retention, and exam performance.",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Study Tips",
    readTime: "5 min read",
    slug: "effective-study-techniques",
    featured: true,
    icon: "📚",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "The Importance of Mathematics in Daily Life",
    excerpt: "From budgeting to problem-solving, explore how mathematics shapes our everyday decisions.",
    date: "March 10, 2024",
    author: "Prof. Rajesh Kumar",
    category: "Mathematics",
    readTime: "4 min read",
    slug: "importance-of-mathematics",
    featured: false,
    icon: "🧮",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Choosing the Right Career Path After 10th",
    excerpt: "A comprehensive guide to help students make informed career decisions.",
    date: "March 5, 2024",
    author: "Ms. Priya Sharma",
    category: "Career Guidance",
    readTime: "6 min read",
    slug: "career-path-after-10th",
    featured: true,
    icon: "🎯",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "How to Manage Stress During Exams",
    excerpt: "Practical tips and techniques to stay calm, focused, and perform your best during exam season.",
    date: "February 28, 2024",
    author: "Dr. Anjali Mehta",
    category: "Wellness",
    readTime: "4 min read",
    slug: "manage-exam-stress",
    featured: false,
    icon: "🧘",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "The Future of Education: Technology in Classrooms",
    excerpt: "How AI, VR, and digital tools are transforming education.",
    date: "February 20, 2024",
    author: "Mr. Amit Verma",
    category: "EdTech",
    readTime: "5 min read",
    slug: "future-of-education",
    featured: false,
    icon: "🤖",
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 6,
    title: "Parent-Teacher Collaboration for Student Success",
    excerpt: "Building strong partnerships between parents and teachers.",
    date: "February 15, 2024",
    author: "Ms. Neha Gupta",
    category: "Parenting",
    readTime: "4 min read",
    slug: "parent-teacher-collaboration",
    featured: false,
    icon: "👨‍👩‍👧",
    color: "from-teal-500 to-cyan-600"
  }
];

const categories: string[] = ["All", "Study Tips", "Mathematics", "Career Guidance", "Wellness", "EdTech", "Parenting"];

export default function BlogPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="hidden md:block fixed top-24 left-4 z-50 md:top-28 md:left-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl rounded-full px-4 py-2 text-gray-700 hover:text-blue-600 transition group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-visible">
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/images/hero/image4.jpeg"
                alt="Vidya Classes"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Blog & Updates</h1>
          <p className="text-lg md:text-xl text-center text-white/90 mb-6">
            Expert insights, study tips, and educational resources
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FaPenFancy className="text-blue-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">{blogPosts.length}+ Articles</p>
                <p className="text-xs md:text-sm text-gray-500">Expert Content</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center">
                <FaUsers className="text-green-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">10k+ Readers</p>
                <p className="text-xs md:text-sm text-gray-500">Happy Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <FaRocket className="text-orange-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">Weekly Updates</p>
                <p className="text-xs md:text-sm text-gray-500">Fresh Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 md:px-5 py-1 md:py-1.5 rounded-full font-semibold transition text-xs md:text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts Section - Smaller Cards */}
        {activeCategory === "All" && (
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className={`relative h-32 md:h-36 w-full bg-gradient-to-br ${post.color}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl md:text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                        {post.icon}
                      </span>
                    </div>
                    {/* Featured Badge */}
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-1.5 py-0.5 rounded-full z-10">
                      <span className="text-white text-[10px] flex items-center gap-0.5">
                        <FaStar className="text-yellow-200 text-[8px]" /> Featured
                      </span>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-full z-10">
                      <span className="text-white text-[10px]">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <FaClock className="text-gray-400 text-[10px]" />
                      <span className="text-[10px] text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-[10px] text-gray-500">
                        <FaUser className="text-gray-400 text-[10px]" />
                        <span>{post.author.split(' ')[0]}</span>
                      </div>
                      <span className="text-blue-600 text-[11px] font-semibold group-hover:translate-x-0.5 transition-transform">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Blog Grid - Smaller Cards */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5 text-center">
            {activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`relative h-28 md:h-32 w-full bg-gradient-to-br ${post.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                      {post.icon}
                    </span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-1.5 right-1.5 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-full z-10">
                    <span className="text-white text-[9px] md:text-[10px]">{post.category}</span>
                  </div>
                </div>
                <div className="p-2 md:p-2.5">
                  <div className="flex items-center gap-1 mb-1">
                    <FaClock className="text-gray-400 text-[8px] md:text-[9px]" />
                    <span className="text-[9px] md:text-[10px] text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xs md:text-sm mb-1 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-[8px] md:text-[9px] text-gray-500">
                      <FaUser className="text-gray-400 text-[8px]" />
                      <span className="truncate max-w-[60px]">{post.author.split(' ')[0]}</span>
                    </div>
                    <span className="text-blue-600 text-[9px] md:text-[10px] font-semibold group-hover:translate-x-0.5 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}