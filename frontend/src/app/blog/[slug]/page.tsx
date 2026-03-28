import Link from 'next/link';
import BlogPostClient from '@/components/blog/BlogPostClient';


// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = [
    "effective-study-techniques",
    "importance-of-mathematics",
    "career-path-after-10th",
    "manage-exam-stress",
    "future-of-education",
    "parent-teacher-collaboration"
  ];
  
  return slugs.map(slug => ({ slug }));
}

// Blog posts data (keep this outside the component)
const blogPosts = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Exam Success",
    content: "Study techniques are essential for academic success. Here are 10 proven methods: 1) Active Recall - test yourself regularly. 2) Spaced Repetition - review material at increasing intervals. 3) Pomodoro Technique - study in focused 25-minute blocks. 4) Mind Mapping - visualize connections between concepts. 5) Teach Others - explaining reinforces learning. 6) Practice Tests - simulate exam conditions. 7) Study Groups - collaborate with peers. 8) Healthy Lifestyle - sleep, exercise, nutrition matter. 9) Organized Notes - keep materials structured. 10) Goal Setting - set specific, achievable targets.",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Study Tips",
    readTime: "5 min read",
    slug: "effective-study-techniques"
  },
  {
    id: 2,
    title: "The Importance of Mathematics in Daily Life",
    content: "Mathematics is everywhere! From managing finances and calculating budgets to cooking measurements and planning travel routes, math is essential. It develops critical thinking, logical reasoning, and problem-solving skills. In careers like engineering, medicine, business, and technology, math forms the foundation. Understanding math helps make informed decisions, analyze data, and think systematically. It's not just about numbers - it's about developing a structured approach to life's challenges.",
    date: "March 10, 2024",
    author: "Prof. Rajesh Kumar",
    category: "Mathematics",
    readTime: "4 min read",
    slug: "importance-of-mathematics"
  },
  {
    id: 3,
    title: "Choosing the Right Career Path After 10th",
    content: "Choosing a career after 10th is a crucial decision. Consider: 1) Science Stream - for engineering, medicine, research careers. 2) Commerce Stream - for business, finance, accounting careers. 3) Arts/Humanities - for law, design, social sciences. 4) Vocational Courses - for skill-based careers. Evaluate your interests, strengths, and long-term goals. Research career options, talk to professionals, and consider future job market trends. Remember, it's okay to explore and change paths - many successful professionals switched careers mid-way.",
    date: "March 5, 2024",
    author: "Ms. Priya Sharma",
    category: "Career Guidance",
    readTime: "6 min read",
    slug: "career-path-after-10th"
  },
  {
    id: 4,
    title: "How to Manage Stress During Exams",
    content: "Exam stress is common but manageable. Tips for staying calm: 1) Create a realistic study schedule. 2) Take regular breaks - 5 minutes every hour. 3) Practice deep breathing exercises. 4) Get adequate sleep - 7-8 hours is essential. 5) Stay hydrated and eat healthy. 6) Exercise - even a short walk helps. 7) Avoid comparing with others. 8) Talk to parents or teachers about concerns. 9) Focus on understanding, not just memorizing. 10) Remember - exams don't define your worth.",
    date: "February 28, 2024",
    author: "Dr. Anjali Mehta",
    category: "Wellness",
    readTime: "4 min read",
    slug: "manage-exam-stress"
  },
  {
    id: 5,
    title: "The Future of Education: Technology in Classrooms",
    content: "Technology is revolutionizing education: 1) AI-powered personalized learning adapts to each student's pace. 2) Virtual Reality creates immersive learning experiences. 3) Online platforms enable global collaboration. 4) Digital tools make complex concepts visual and interactive. 5) Gamification increases engagement and motivation. 6) Data analytics helps identify learning gaps. 7) Remote learning makes education accessible. 8) Digital assessments provide instant feedback. The classroom of tomorrow will blend traditional teaching with cutting-edge technology.",
    date: "February 20, 2024",
    author: "Mr. Amit Verma",
    category: "EdTech",
    readTime: "5 min read",
    slug: "future-of-education"
  },
  {
    id: 6,
    title: "Parent-Teacher Collaboration for Student Success",
    content: "Strong parent-teacher partnerships benefit students immensely. How to collaborate effectively: 1) Regular communication - attend parent-teacher meetings. 2) Share observations about the child's learning style. 3) Support homework and study routines at home. 4) Celebrate achievements together. 5) Address concerns promptly and respectfully. 6) Create consistent expectations between home and school. 7) Participate in school activities when possible. 8) Trust teachers' expertise while sharing your insights. Together, we can create the best environment for student growth.",
    date: "February 15, 2024",
    author: "Ms. Neha Gupta",
    category: "Parenting",
    readTime: "4 min read",
    slug: "parent-teacher-collaboration"
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

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

  return <BlogPostClient post={post} />;
}