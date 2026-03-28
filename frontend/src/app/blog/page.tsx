'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaBook, FaClock, FaStar } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

const blogPosts = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Exam Success",
    excerpt: "Discover proven strategies to improve concentration, memory retention, and exam performance. Learn how to create effective study schedules, use active recall, practice spaced repetition, and maintain a healthy study-life balance for better results.",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Study Tips",
    readTime: "5 min read",
    slug: "effective-study-techniques",
    content: "Study techniques are essential for academic success. Here are 10 proven methods: 1) Active Recall - test yourself regularly. 2) Spaced Repetition - review material at increasing intervals. 3) Pomodoro Technique - study in focused 25-minute blocks. 4) Mind Mapping - visualize connections between concepts. 5) Teach Others - explaining reinforces learning. 6) Practice Tests - simulate exam conditions. 7) Study Groups - collaborate with peers. 8) Healthy Lifestyle - sleep, exercise, nutrition matter. 9) Organized Notes - keep materials structured. 10) Goal Setting - set specific, achievable targets."
  },
  {
    id: 2,
    title: "The Importance of Mathematics in Daily Life",
    excerpt: "From budgeting to problem-solving, explore how mathematics shapes our everyday decisions and why it's crucial for success in any field...",
    date: "March 10, 2024",
    author: "Prof. Rajesh Kumar",
    category: "Mathematics",
    readTime: "4 min read",
    slug: "importance-of-mathematics",
    content: "Mathematics is everywhere! From managing finances and calculating budgets to cooking measurements and planning travel routes, math is essential. It develops critical thinking, logical reasoning, and problem-solving skills. In careers like engineering, medicine, business, and technology, math forms the foundation. Understanding math helps make informed decisions, analyze data, and think systematically. It's not just about numbers - it's about developing a structured approach to life's challenges."
  },
  {
    id: 3,
    title: "Choosing the Right Career Path After 10th",
    excerpt: "A comprehensive guide to help students make informed career decisions based on their interests, strengths, and future opportunities...",
    date: "March 5, 2024",
    author: "Ms. Priya Sharma",
    category: "Career Guidance",
    readTime: "6 min read",
    slug: "career-path-after-10th",
    content: "Choosing a career after 10th is a crucial decision. Consider: 1) Science Stream - for engineering, medicine, research careers. 2) Commerce Stream - for business, finance, accounting careers. 3) Arts/Humanities - for law, design, social sciences. 4) Vocational Courses - for skill-based careers. Evaluate your interests, strengths, and long-term goals. Research career options, talk to professionals, and consider future job market trends. Remember, it's okay to explore and change paths - many successful professionals switched careers mid-way."
  },
  {
    id: 4,
    title: "How to Manage Stress During Exams",
    excerpt: "Practical tips and techniques to stay calm, focused, and confident during exam season...",
    date: "February 28, 2024",
    author: "Dr. Anjali Mehta",
    category: "Wellness",
    readTime: "4 min read",
    slug: "manage-exam-stress",
    content: "Exam stress is common but manageable. Tips for staying calm: 1) Create a realistic study schedule. 2) Take regular breaks - 5 minutes every hour. 3) Practice deep breathing exercises. 4) Get adequate sleep - 7-8 hours is essential. 5) Stay hydrated and eat healthy. 6) Exercise - even a short walk helps. 7) Avoid comparing with others. 8) Talk to parents or teachers about concerns. 9) Focus on understanding, not just memorizing. 10) Remember - exams don't define your worth."
  },
  {
    id: 5,
    title: "The Future of Education: Technology in Classrooms",
    excerpt: "How AI, VR, and digital tools are transforming the way students learn and teachers teach...",
    date: "February 20, 2024",
    author: "Mr. Amit Verma",
    category: "EdTech",
    readTime: "5 min read",
    slug: "future-of-education",
    content: "Technology is revolutionizing education: 1) AI-powered personalized learning adapts to each student's pace. 2) Virtual Reality creates immersive learning experiences. 3) Online platforms enable global collaboration. 4) Digital tools make complex concepts visual and interactive. 5) Gamification increases engagement and motivation. 6) Data analytics helps identify learning gaps. 7) Remote learning makes education accessible. 8) Digital assessments provide instant feedback. The classroom of tomorrow will blend traditional teaching with cutting-edge technology."
  },
  {
    id: 6,
    title: "Parent-Teacher Collaboration for Student Success",
    excerpt: "Building strong partnerships between parents and teachers for better student outcomes...",
    date: "February 15, 2024",
    author: "Ms. Neha Gupta",
    category: "Parenting",
    readTime: "4 min read",
    slug: "parent-teacher-collaboration",
    content: "Strong parent-teacher partnerships benefit students immensely. How to collaborate effectively: 1) Regular communication - attend parent-teacher meetings. 2) Share observations about the child's learning style. 3) Support homework and study routines at home. 4) Celebrate achievements together. 5) Address concerns promptly and respectfully. 6) Create consistent expectations between home and school. 7) Participate in school activities when possible. 8) Trust teachers' expertise while sharing your insights. Together, we can create the best environment for student growth."
  }
];

const categories = ["All", "Study Tips", "Mathematics", "Career Guidance", "Wellness", "EdTech", "Parenting"];

export default function BlogPage() {
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
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
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
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Blog & Updates
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-white/90">
            Insights, tips, and updates from our education experts
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Blog Stats Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FaBook className="text-blue-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">6+ Articles</p>
                <p className="text-xs md:text-sm text-gray-500">Expert Insights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center">
                <FaClock className="text-green-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">Regular Updates</p>
                <p className="text-xs md:text-sm text-gray-500">Fresh Content</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <FaStar className="text-orange-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">Valuable Tips</p>
                <p className="text-xs md:text-sm text-gray-500">For Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
                    <span className="text-5xl">📚</span>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={12} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser size={12} /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaTag size={12} /> {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition inline-flex items-center gap-1"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white transition"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Popular Posts</h3>
              <ul className="space-y-3">
                {blogPosts.slice(0, 4).map((post) => (
                  <li key={post.id}>
                    <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-50 p-2 rounded-lg transition">
                      <p className="font-medium text-gray-800 text-sm md:text-base">{post.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}