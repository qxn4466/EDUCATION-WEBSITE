'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  FaChalkboardTeacher, 
  FaBook, 
  FaUsers, 
  FaTrophy, 
  FaHeart, 
  FaLightbulb,
  FaStar,
  FaGraduationCap,
  FaShieldAlt,
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  const router = useRouter();

  const stats = [
    { number: "15+", label: "Years of Experience", icon: FaChalkboardTeacher, color: "from-blue-500 to-blue-600" },
    { number: "5000+", label: "Students Taught", icon: FaUsers, color: "from-green-500 to-green-600" },
    { number: "100%", label: "Parent Satisfaction", icon: FaHeart, color: "from-orange-500 to-orange-600" },
    { number: "50+", label: "Awards Won", icon: FaTrophy, color: "from-purple-500 to-purple-600" }
  ];

  const values = [
    { icon: FaLightbulb, title: "Innovation", description: "Embracing modern teaching methods", color: "from-blue-500 to-blue-600" },
    { icon: FaHeart, title: "Integrity", description: "Building character and moral values", color: "from-green-500 to-green-600" },
    { icon: FaUsers, title: "Inclusivity", description: "Welcoming students from all backgrounds", color: "from-orange-500 to-orange-600" },
    { icon: FaTrophy, title: "Excellence", description: "Striving for the highest standards", color: "from-purple-500 to-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Fixed at top left */}
      <div className="hidden md:block fixed top-24 left-4 z-50 md:top-28 md:left-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl rounded-full px-4 py-2 text-gray-700 hover:text-blue-600 transition group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden pt-16">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            About Vidya Coaching Classes
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-white/90">
            Empowering minds, shaping futures through quality education and values
          </p>
        </div>
        
        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition group">
                <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition`}>
                  <Icon className="text-3xl text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust, Success, Care Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold text-blue-600">TRUST</p>
                <p className="text-sm text-gray-600">Building confidence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <FaStar className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold text-green-600">SUCCESS</p>
                <p className="text-sm text-gray-600">Proven results</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <FaHeart className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold text-orange-600">CARE</p>
                <p className="text-sm text-gray-600">Personal attention</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition group border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education that instills values along with knowledge, 
              preparing students for life beyond academics. We strive to create a nurturing 
              environment where every student can discover their potential.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition group border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-4xl">👁️</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be a center of excellence in education, nurturing young minds to become 
              responsible, knowledgeable, and values-driven individuals who contribute 
              positively to society.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition group">
                  <div className={`bg-gradient-to-r ${value.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          What makes Vidya Coaching Classes the right choice for your child's education
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "Experienced and dedicated faculty",
            "Comprehensive curriculum covering all subjects",
            "Individual attention to each student",
            "Regular assessments and feedback",
            "State-of-the-art learning environment",
            "Focus on both academics and character development",
            "Affordable fee structure",
            "Regular parent-teacher meetings",
            "Proven track record of success",
            "Personalized learning approach"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition group">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Vidya Coaching Classes?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey towards academic excellence with us
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            Enroll Now <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Footer - Reusable component */}
      <Footer />
    </div>
  );
}