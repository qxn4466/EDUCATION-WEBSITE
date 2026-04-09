'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaStar, FaHeart, FaShieldAlt, FaUser, FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';
import ReviewForm from '@/components/reviews/ReviewForm';
import ReviewList from '@/components/reviews/ReviewList';

export default function ReviewsPage() {
  const router = useRouter();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - PC only */}
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

  <div className="container mx-auto px-4 py-8 md:py-16 pb-24 relative z-10">
    <div className="flex justify-center mb-4 px-4">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 flex-shrink-0">
        <Image
          src="/images/hero/image4.jpeg"
          alt="Vidya Classes"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-600 drop-shadow-lg px-2">
      Student & Parent Reviews
    </h1>
    <p className="text-base md:text-xl text-center max-w-3xl mx-auto text-gray-600 drop-shadow-md px-4">
      What our students and parents say about Vidya Coaching Classes
    </p>
  </div>

  <div className="absolute bottom-0 left-0 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
      <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,
48,320L0,320Z"></path>
    </svg>
  </div>
</div>

{/* Trust Badges */}
<div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <FaShieldAlt className="text-blue-600 text-xl" />
        </div>
        <div>
          <p className="font-bold text-gray-800">Share Your Experience</p>
          <p className="text-xs text-gray-500">Anyone can leave a review</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <FaStar className="text-green-600 text-xl" />
        </div>
        <div>
          <p className="font-bold text-gray-800">Help Others Decide</p>
          <p className="text-xs text-gray-500">Your feedback matters</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
          <FaHeart className="text-orange-600 text-xl" />
        </div>
        <div>
          <p className="font-bold text-gray-800">Build Community</p>
          <p className="text-xs text-gray-500">Join our growing family</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaQuoteLeft className="text-2xl text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Share Your Experience</h2>
                <p className="text-gray-500 mt-2 text-sm">
                  Your feedback helps us improve and helps other parents make informed decisions.
                </p>
              </div>
              <ReviewForm />
            </div>
          </div>

          {/* Right Side - Reviews */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">What People Say</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 mt-2 rounded-full"></div>
            </div>
            <ReviewList />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}