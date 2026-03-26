'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

const blogPosts = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Exam Success",
    content: "Study techniques are essential for academic success. Here are 10 proven methods:\n\n1) Active Recall - test yourself regularly. Close the book and try to recall what you've learned. This strengthens neural pathways and improves memory retention.\n\n2) Spaced Repetition - review material at increasing intervals. Instead of cramming, spread your study sessions over days or weeks for better long-term retention.\n\n3) Pomodoro Technique - study in focused 25-minute blocks. Take 5-minute breaks between sessions to maintain concentration and avoid burnout.\n\n4) Mind Mapping - visualize connections between concepts. Create diagrams that show how different topics relate to each other.\n\n5) Teach Others - explaining reinforces learning. When you teach someone else, you identify gaps in your own understanding.\n\n6) Practice Tests - simulate exam conditions. Regular testing helps identify weak areas and reduces exam anxiety.\n\n7) Study Groups - collaborate with peers. Discussing concepts with others provides new perspectives and deeper understanding.\n\n8) Healthy Lifestyle - sleep, exercise, nutrition matter. A well-rested mind absorbs and retains information better.\n\n9) Organized Notes - keep materials structured. Use headings, bullet points, and color coding for easy review.\n\n10) Goal Setting - set specific, achievable targets. Break large study tasks into smaller, manageable goals.",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Study Tips",
    readTime: "5 min read",
    slug: "effective-study-techniques"
  },
  {
    id: 2,
    title: "The Importance of Mathematics in Daily Life",
    content: "Mathematics is everywhere! From managing finances and calculating budgets to cooking measurements and planning travel routes, math is essential. It develops critical thinking, logical reasoning, and problem-solving skills.\n\nIn careers like engineering, medicine, business, and technology, math forms the foundation. Understanding math helps make informed decisions, analyze data, and think systematically.\n\nIt's not just about numbers - it's about developing a structured approach to life's challenges. Math teaches us pattern recognition, logical thinking, and the ability to break complex problems into simpler parts.",
    date: "March 10, 2024",
    author: "Prof. Rajesh Kumar",
    category: "Mathematics",
    readTime: "4 min read",
    slug: "importance-of-mathematics"
  },
  {
    id: 3,
    title: "Choosing the Right Career Path After 10th",
    content: "Choosing a career after 10th is a crucial decision. Consider these options:\n\n1) Science Stream - for engineering, medicine, research careers. Subjects: Physics, Chemistry, Mathematics/Biology.\n\n2) Commerce Stream - for business, finance, accounting careers. Subjects: Accountancy, Business Studies, Economics.\n\n3) Arts/Humanities - for law, design, social sciences. Subjects: History, Political Science, Psychology, Sociology.\n\n4) Vocational Courses - for skill-based careers. Options include IT, Hospitality, Design, etc.\n\nEvaluate your interests, strengths, and long-term goals. Research career options, talk to professionals, and consider future job market trends. Remember, it's okay to explore and change paths - many successful professionals switched careers mid-way.",
    date: "March 5, 2024",
    author: "Ms. Priya Sharma",
    category: "Career Guidance",
    readTime: "6 min read",
    slug: "career-path-after-10th"
  },
  {
    id: 4,
    title: "How to Manage Stress During Exams",
    content: "Exam stress is common but manageable. Tips for staying calm:\n\n1) Create a realistic study schedule with achievable daily targets.\n\n2) Take regular breaks - 5 minutes every hour, longer breaks every 2-3 hours.\n\n3) Practice deep breathing exercises - inhale for 4 seconds, hold for 4, exhale for 4.\n\n4) Get adequate sleep - 7-8 hours is essential for memory consolidation.\n\n5) Stay hydrated and eat healthy - avoid caffeine and sugar crashes.\n\n6) Exercise - even a 10-minute walk helps reduce stress hormones.\n\n7) Avoid comparing with others - focus on your own progress.\n\n8) Talk to parents or teachers about concerns - sharing reduces anxiety.\n\n9) Focus on understanding, not just memorizing concepts.\n\n10) Remember - exams don't define your worth or intelligence.",
    date: "February 28, 2024",
    author: "Dr. Anjali Mehta",
    category: "Wellness",
    readTime: "4 min read",
    slug: "manage-exam-stress"
  },
  {
    id: 5,
    title: "The Future of Education: Technology in Classrooms",
    content: "Technology is revolutionizing education:\n\n1) AI-powered personalized learning adapts to each student's pace and learning style.\n\n2) Virtual Reality creates immersive learning experiences - explore ancient Rome or dissect a frog virtually.\n\n3) Online platforms enable global collaboration with students from different countries.\n\n4) Digital tools make complex concepts visual and interactive through simulations.\n\n5) Gamification increases engagement and motivation with points, badges, and leaderboards.\n\n6) Data analytics helps identify learning gaps and provide targeted interventions.\n\n7) Remote learning makes quality education accessible to students everywhere.\n\n8) Digital assessments provide instant feedback and detailed performance analytics.\n\nThe classroom of tomorrow will blend traditional teaching with cutting-edge technology.",
    date: "February 20, 2024",
    author: "Mr. Amit Verma",
    category: "EdTech",
    readTime: "5 min read",
    slug: "future-of-education"
  },
  {
    id: 6,
    title: "Parent-Teacher Collaboration for Student Success",
    content: "Strong parent-teacher partnerships benefit students immensely. How to collaborate effectively:\n\n1) Regular communication - attend parent-teacher meetings and stay in touch via calls or messages.\n\n2) Share observations about the child's learning style, interests, and challenges.\n\n3) Support homework and study routines at home - create a conducive learning environment.\n\n4) Celebrate achievements together - acknowledge both academic and personal growth.\n\n5) Address concerns promptly and respectfully - early intervention prevents bigger issues.\n\n6) Create consistent expectations between home and school regarding behavior and effort.\n\n7) Participate in school activities when possible - shows your child education is valued.\n\n8) Trust teachers' expertise while sharing your insights - you're partners in your child's journey.\n\nTogether, we can create the best environment for student growth and success.",
    date: "February 15, 2024",
    author: "Ms. Neha Gupta",
    category: "Parenting",
    readTime: "4 min read",
    slug: "parent-teacher-collaboration"
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  const handleBack = () => {
    window.history.back();
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section with Larger Image and Reduced Gap */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-8 md:py-10 relative z-10">
          {/* Larger Image */}
          <div className="flex justify-center mb-3">
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/images/hero/image4.jpeg"
                alt="Vidya Classes"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Title with Reduced Gap */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 px-4">
            {post.title}
          </h1>
          
          {/* Metadata with Tighter Spacing */}
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-white/80">
            <span className="flex items-center gap-1">
              <FaCalendarAlt size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FaUser size={12} /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <FaTag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-1">
              <FaClock size={12} /> {post.readTime}
            </span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Article Content - Reduced top padding */}
      <div className="container mx-auto px-4 py-8 md:py-10 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
              {post.content}
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}