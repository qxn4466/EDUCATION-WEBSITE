import Link from 'next/link';
import BlogPostClient from '@/components/blog/BlogPostClient';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { slug: "effective-study-techniques" },
    { slug: "importance-of-mathematics" },
    { slug: "career-path-after-10th" },
    { slug: "manage-exam-stress" },
    { slug: "future-of-education" },
    { slug: "parent-teacher-collaboration" }
  ];
}

// ✅ Full blog posts data - THIS MUST BE IN THE PAGE FILE
const blogPosts = [
  {
    id: 1,
    slug: "effective-study-techniques",
    title: "10 Effective Study Techniques for Exam Success",
    content: `<h1>10 Effective Study Techniques for Exam Success</h1>
<h2>Introduction</h2>
<p>Studying effectively is crucial for academic success. Here are 10 proven techniques that will help you excel in your exams.</p>
<h2>1. Active Recall</h2>
<p>Instead of passively reading your notes, test yourself regularly. Create flashcards or try to recall information without looking at your materials.</p>
<h2>2. Spaced Repetition</h2>
<p>Review information at increasing intervals. This technique helps move knowledge from short-term to long-term memory.</p>
<h2>3. Pomodoro Technique</h2>
<p>Study in focused 25-minute sessions followed by 5-minute breaks. This prevents burnout and maintains concentration.</p>
<h2>4. Mind Mapping</h2>
<p>Create visual representations of concepts to understand relationships between different ideas.</p>
<h2>5. Teach Others</h2>
<p>The best way to master a subject is to teach it to someone else. This reveals gaps in your understanding.</p>
<h2>6. Practice Tests</h2>
<p>Take practice exams under timed conditions to simulate the real test environment.</p>
<h2>7. Interleaving</h2>
<p>Mix different subjects or topics during study sessions instead of focusing on one subject for hours.</p>
<h2>8. Eliminate Distractions</h2>
<p>Create a dedicated study space free from phones, social media, and other distractions.</p>
<h2>9. Stay Hydrated and Take Care of Your Health</h2>
<p>Proper nutrition, sleep, and exercise significantly impact cognitive function.</p>
<h2>10. Set Specific Goals</h2>
<p>Break down your study sessions into specific, achievable goals rather than vague objectives.</p>
<h2>Conclusion</h2>
<p>Implement these techniques consistently, and you'll see significant improvement in your study effectiveness and exam performance.</p>`,
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Study Tips",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "importance-of-mathematics",
    title: "The Importance of Mathematics in Daily Life",
    content: `<h1>The Importance of Mathematics in Daily Life</h1>
<h2>Introduction</h2>
<p>Mathematics is often viewed as a challenging subject, but its applications in daily life are undeniable. From managing finances to making informed decisions, math plays a crucial role.</p>
<h2>1. Financial Management</h2>
<p>Budgeting, calculating interest rates, and understanding investments all require mathematical skills.</p>
<h2>2. Problem-Solving Skills</h2>
<p>Mathematics teaches logical thinking and problem-solving approaches that apply to various life situations.</p>
<h2>3. Career Opportunities</h2>
<p>Many high-paying careers require strong mathematical foundations, including engineering, data science, and finance.</p>
<h2>4. Critical Thinking</h2>
<p>Math develops analytical skills that help in evaluating information and making sound decisions.</p>
<h2>5. Technology and Innovation</h2>
<p>Almost every technological advancement relies on mathematical principles, from smartphone algorithms to space exploration.</p>
<h2>Conclusion</h2>
<p>Embracing mathematics opens doors to better understanding our world and improves everyday decision-making.</p>`,
    date: "March 10, 2024",
    author: "Prof. Rajesh Kumar",
    category: "Mathematics",
    readTime: "4 min read"
  },
  {
    id: 3,
    slug: "career-path-after-10th",
    title: "Choosing the Right Career Path After 10th",
    content: `<h1>Choosing the Right Career Path After 10th</h1>
<h2>Introduction</h2>
<p>The decision after 10th grade is crucial as it shapes your academic and professional future. Here's a comprehensive guide to help you choose wisely.</p>
<h2>1. Self-Assessment</h2>
<p>Evaluate your interests, strengths, and values. What subjects do you enjoy? What are you naturally good at?</p>
<h2>2. Explore Options</h2>
<p><strong>Science:</strong> For careers in engineering, medicine, research<br/>
<strong>Commerce:</strong> For business, finance, economics<br/>
<strong>Arts/Humanities:</strong> For law, design, psychology, journalism</p>
<h2>3. Research Career Paths</h2>
<p>Look into future job prospects, required qualifications, and growth opportunities in different fields.</p>
<h2>4. Seek Guidance</h2>
<p>Talk to career counselors, teachers, and professionals in fields you're interested in.</p>
<h2>5. Consider Your Goals</h2>
<p>Think about where you see yourself in 5-10 years. Choose a path that aligns with your long-term aspirations.</p>
<h2>6. Keep an Open Mind</h2>
<p>Your career path can evolve. It's okay to change direction based on new interests and opportunities.</p>
<h2>Conclusion</h2>
<p>Take time to make this important decision. The right choice is one that combines your interests, strengths, and future goals.</p>`,
    date: "March 5, 2024",
    author: "Ms. Priya Sharma",
    category: "Career Guidance",
    readTime: "6 min read"
  },
  {
    id: 4,
    slug: "manage-exam-stress",
    title: "How to Manage Stress During Exams",
    content: `<h1>How to Manage Stress During Exams</h1>
<h2>Introduction</h2>
<p>Exam stress is common, but it doesn't have to overwhelm you. Here are practical strategies to stay calm and perform your best.</p>
<h2>1. Create a Study Schedule</h2>
<p>Break your preparation into manageable chunks. Avoid last-minute cramming.</p>
<h2>2. Practice Relaxation Techniques</h2>
<p>Deep breathing, meditation, or gentle exercise can reduce anxiety.</p>
<h2>3. Maintain Healthy Habits</h2>
<p>Get adequate sleep, eat nutritious meals, and stay hydrated.</p>
<h2>4. Stay Organized</h2>
<p>Keep your study materials organized to reduce last-minute panic.</p>
<h2>5. Take Regular Breaks</h2>
<p>Short breaks between study sessions improve focus and retention.</p>
<h2>6. Talk About It</h2>
<p>Share your concerns with family, friends, or teachers. You're not alone.</p>
<h2>7. Positive Self-Talk</h2>
<p>Replace negative thoughts with encouraging affirmations.</p>
<h2>8. Focus on Preparation, Not Perfection</h2>
<p>Do your best, but remember that one exam doesn't define your worth.</p>
<h2>Conclusion</h2>
<p>Managing stress effectively allows you to showcase your true potential during exams.</p>`,
    date: "February 28, 2024",
    author: "Dr. Anjali Mehta",
    category: "Wellness",
    readTime: "4 min read"
  },
  {
    id: 5,
    slug: "future-of-education",
    title: "The Future of Education: Technology in Classrooms",
    content: `<h1>The Future of Education: Technology in Classrooms</h1>
<h2>Introduction</h2>
<p>Technology is revolutionizing education. Here's how AI, VR, and digital tools are transforming learning experiences.</p>
<h2>1. Artificial Intelligence</h2>
<p>AI-powered personalized learning adapts to each student's pace and style.</p>
<h2>2. Virtual and Augmented Reality</h2>
<p>Immersive experiences bring abstract concepts to life, from historical events to scientific phenomena.</p>
<h2>3. Online and Hybrid Learning</h2>
<p>Flexible learning options are making education accessible to more students worldwide.</p>
<h2>4. Gamification</h2>
<p>Game-like elements increase engagement and motivation in learning.</p>
<h2>5. Data-Driven Insights</h2>
<p>Analytics help teachers identify areas where students need additional support.</p>
<h2>6. Collaborative Tools</h2>
<p>Digital platforms enable seamless collaboration among students and teachers.</p>
<h2>7. Lifelong Learning</h2>
<p>Technology makes continuous education easier, allowing professionals to update skills throughout their careers.</p>
<h2>Conclusion</h2>
<p>The future of education is flexible, personalized, and technology-enhanced, preparing students for a rapidly changing world.</p>`,
    date: "February 20, 2024",
    author: "Mr. Amit Verma",
    category: "EdTech",
    readTime: "5 min read"
  },
  {
    id: 6,
    slug: "parent-teacher-collaboration",
    title: "Parent-Teacher Collaboration for Student Success",
    content: `<h1>Parent-Teacher Collaboration for Student Success</h1>
<h2>Introduction</h2>
<p>Strong parent-teacher partnerships create a supportive environment for student achievement.</p>
<h2>1. Open Communication</h2>
<p>Regular, two-way communication keeps both parties informed about student progress.</p>
<h2>2. Active Participation</h2>
<p>Attend parent-teacher conferences and school events to stay engaged.</p>
<h2>3. Consistent Support</h2>
<p>Align efforts at home and school to reinforce learning and positive behaviors.</p>
<h2>4. Share Insights</h2>
<p>Parents know their child's strengths and challenges. Share this information with teachers.</p>
<h2>5. Address Issues Early</h2>
<p>Collaborate to address academic or behavioral concerns before they escalate.</p>
<h2>6. Celebrate Success</h2>
<p>Acknowledge and celebrate achievements together to boost student confidence.</p>
<h2>7. Respect and Trust</h2>
<p>Build a relationship based on mutual respect and trust for effective collaboration.</p>
<h2>Conclusion</h2>
<p>When parents and teachers work together, students benefit from a cohesive support system that promotes success.</p>`,
    date: "February 15, 2024",
    author: "Ms. Neha Gupta",
    category: "Parenting",
    readTime: "4 min read"
  }
];

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // Clean the slug (remove any trailing slash if present)
  const cleanSlug = slug.replace(/\/$/, '');
  
  console.log("Looking for slug:", cleanSlug);
  console.log("Available slugs:", blogPosts.map(p => p.slug));
  
  const post = blogPosts.find(p => p.slug === cleanSlug);

  if (!post) {
    console.log("Post not found for slug:", cleanSlug);
    notFound();
  }

  console.log("Found post:", post.title);
  
  return <BlogPostClient post={post} />;
}