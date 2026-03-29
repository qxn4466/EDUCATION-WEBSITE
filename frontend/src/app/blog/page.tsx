'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaBook, FaClock, FaStar } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

const blogPosts = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Exam Success",
    excerpt: "Discover proven strategies to improve concentration, memory retention, and exam performance...",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Study Tips",
    readTime: "5 min read",
    slug: "effective-study-techniques",
  },
  {
    id: 2,
    title: "The Importance of Mathematics in Daily Life",
    excerpt: "From budgeting to problem-solving, explore how mathematics shapes our everyday decisions...",
    date: "March 10, 2024",
    author: "Prof. Rajesh Kumar",
    category: "Mathematics",
    readTime: "4 min read",
    slug: "importance-of-mathematics",
  },
  {
    id: 3,
    title: "Choosing the Right Career Path After 10th",
    excerpt: "A comprehensive guide to help students make informed career decisions...",
    date: "March 5, 2024",
    author: "Ms. Priya Sharma",
    category: "Career Guidance",
    readTime: "6 min read",
    slug: "career-path-after-10th",
  },
  {
    id: 4,
    title: "How to Manage Stress During Exams",
    excerpt: "Practical tips and techniques to stay calm during exam season...",
    date: "February 28, 2024",
    author: "Dr. Anjali Mehta",
    category: "Wellness",
    readTime: "4 min read",
    slug: "manage-exam-stress",
  },
  {
    id: 5,
    title: "The Future of Education: Technology in Classrooms",
    excerpt: "How AI, VR, and digital tools are transforming education...",
    date: "February 20, 2024",
    author: "Mr. Amit Verma",
    category: "EdTech",
    readTime: "5 min read",
    slug: "future-of-education",
  },
  {
    id: 6,
    title: "Parent-Teacher Collaboration for Student Success",
    excerpt: "Building strong partnerships between parents and teachers...",
    date: "February 15, 2024",
    author: "Ms. Neha Gupta",
    category: "Parenting",
    readTime: "4 min read",
    slug: "parent-teacher-collaboration",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Blog & Updates1</h1>
      </div>

      {/* Blog List */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-xl p-6 border">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.readTime}</span>

                {/* ✅ IMPORTANT FIX */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}