'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaTag, FaBookmark, FaRegBookmark, FaCheckCircle, FaLightbulb, FaChartLine, FaHeartbeat, FaRocket, FaBrain, FaHourglassHalf, FaPeopleArrows, FaLaptopCode, FaHandsHelping } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBack = () => {
    router.back();
  };

  // Get icon based on category
  const getCategoryIcon = () => {
    const icons: Record<string, React.ReactNode> = {
      "Study Tips": <FaLightbulb className="text-yellow-300" />,
      "Mathematics": <FaBrain className="text-green-300" />,
      "Career Guidance": <FaRocket className="text-purple-300" />,
      "Wellness": <FaHeartbeat className="text-red-300" />,
      "EdTech": <FaLaptopCode className="text-pink-300" />,
      "Parenting": <FaHandsHelping className="text-teal-300" />
    };
    return icons[post.category] || <FaBookmark className="text-blue-300" />;
  };

  // Get gradient color based on category
  const getGradientColor = () => {
    const colors: Record<string, string> = {
      "Study Tips": "from-blue-500 to-blue-600",
      "Mathematics": "from-green-500 to-green-600",
      "Career Guidance": "from-purple-500 to-purple-600",
      "Wellness": "from-orange-500 to-red-500",
      "EdTech": "from-pink-500 to-purple-600",
      "Parenting": "from-teal-500 to-cyan-600"
    };
    return colors[post.category] || "from-blue-500 to-green-500";
  };

  // Parse content into sections for card display
  const parseContentIntoSections = (htmlContent: string) => {
    const sections: { title: string; content: string; icon: React.ReactNode }[] = [];
    
    // Extract h2 sections and their following content
    const h2Regex = /<h2>(.*?)<\/h2>/g;
    const matches = [...htmlContent.matchAll(h2Regex)];
    
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      const title = match[1];
      
      // Find the content between this h2 and the next h2
      const startIndex = match.index + match[0].length;
      const nextMatch = matches[i + 1];
      const endIndex = nextMatch ? nextMatch.index : htmlContent.length;
      const sectionContent = htmlContent.substring(startIndex, endIndex);
      
      // Get icon based on section title
      let icon: React.ReactNode = <FaCheckCircle className="text-green-500" />;
      if (title.includes("Active Recall")) icon = <FaBrain className="text-blue-500" />;
      else if (title.includes("Spaced")) icon = <FaHourglassHalf className="text-purple-500" />;
      else if (title.includes("Pomodoro")) icon = <FaClock className="text-orange-500" />;
      else if (title.includes("Mind")) icon = <FaBrain className="text-indigo-500" />;
      else if (title.includes("Teach")) icon = <FaPeopleArrows className="text-green-500" />;
      else if (title.includes("Practice")) icon = <FaChartLine className="text-red-500" />;
      else if (title.includes("Interleaving")) icon = <FaRocket className="text-pink-500" />;
      else if (title.includes("Distractions")) icon = <FaHeartbeat className="text-yellow-500" />;
      else if (title.includes("Hydrate")) icon = <FaHeartbeat className="text-blue-500" />;
      else if (title.includes("Goals")) icon = <FaRocket className="text-purple-500" />;
      
      sections.push({
        title,
        content: sectionContent,
        icon
      });
    }
    
    return sections;
  };

  const sections = parseContentIntoSections(post.content);
  const introSection = post.content.match(/<h1>(.*?)<\/h1>(.*?)<h2>/s);
  const conclusionMatch = post.content.match(/<h2>Conclusion<\/h2>(.*?)(?:<h2>|$)/s);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Back Button - Same as Gallery */}
      <div className="hidden md:block fixed top-24 left-4 z-50 md:top-28 md:left-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl rounded-full px-4 py-2 text-gray-700 hover:text-blue-600 transition group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section - Same as Gallery */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          {/* Image at top center */}
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/images/hero/image4.jpeg"
                alt="Vidya Classes"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 leading-tight px-4">
            {post.title}
          </h1>
          <p className="text-sm md:text-base text-center text-white/90">
            {post.category} • {post.readTime}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Article Header Card */}
        <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 mb-8 border border-gray-100 -mt-8 relative z-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${getGradientColor()} rounded-full flex items-center justify-center text-white text-lg`}>
                {getCategoryIcon()}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">{post.author}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-xs" /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-xs" /> {post.readTime}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-xs md:text-sm ${
                isBookmarked 
                  ? 'bg-green-50 text-green-600' 
                  : 'bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
          
          <div className="mb-3">
            <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${getGradientColor()} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
              <FaTag className="text-xs" /> {post.category}
            </span>
          </div>
        </div>

        {/* Introduction Card */}
        {introSection && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 mb-8 border border-blue-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaCheckCircle className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Introduction</h2>
                <div 
                  className="prose prose-sm max-w-none prose-p:text-gray-700"
                  dangerouslySetInnerHTML={{ 
                    __html: introSection[2]?.replace(/<p>/g, '<p class="text-gray-700 leading-relaxed">') || ''
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Content Cards - Each technique in its own card */}
        <div className="space-y-6 mb-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="border-l-4 border-blue-500 bg-gradient-to-r from-gray-50 to-white p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h3>
                    <div 
                      className="prose prose-sm max-w-none prose-p:text-gray-600 prose-p:leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: section.content
                          .replace(/<p>/g, '<p class="text-gray-600 text-sm md:text-base leading-relaxed mb-2">')
                          .replace(/<ul>/g, '<ul class="list-none space-y-2 mt-2">')
                          .replace(/<li>/g, '<li class="flex items-start gap-2 text-gray-600 text-sm md:text-base"><span class="text-green-500 mt-1">✓</span><span>')
                          .replace(/<\/li>/g, '</span></li>')
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Card */}
        {conclusionMatch && (
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 md:p-8 mb-8 border border-green-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaRocket className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Conclusion</h2>
                <div 
                  className="prose prose-sm max-w-none prose-p:text-gray-700"
                  dangerouslySetInnerHTML={{ 
                    __html: conclusionMatch[1]?.replace(/<p>/g, '<p class="text-gray-700 leading-relaxed">') || ''
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Author Bio Card */}
        <div className={`bg-gradient-to-r ${getGradientColor().replace('from-', 'from-').replace('to-', 'to-')} bg-opacity-10 rounded-xl p-5 md:p-6 border border-gray-100`}
             style={{ backgroundImage: `linear-gradient(to right, ${getGradientColor().includes('blue') ? '#eff6ff' : getGradientColor().includes('green') ? '#f0fdf4' : '#fff7ed'}, white)` }}>
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 bg-gradient-to-br ${getGradientColor()} rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
              {post.author.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1 text-base">{post.author}</h4>
              <p className="text-xs text-gray-600 mb-1">Education Expert</p>
              <p className="text-xs text-gray-500">Passionate about helping students achieve their academic goals through expert guidance and proven strategies.</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 flex justify-center pt-6 border-t border-gray-200">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-md text-sm"
          >
            <FaArrowLeft className="text-sm" /> 
            Browse More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}