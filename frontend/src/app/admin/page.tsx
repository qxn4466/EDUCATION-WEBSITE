'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaArrowLeft, FaLock, FaShieldAlt, FaStar, FaHeart } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      sessionStorage.setItem('adminAuthenticated', 'true');
      router.push('/admin/reviews');
    } else {
      setError('Invalid password');
      setTimeout(() => setError(''), 3000);
    }
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
          <span className="text-sm font-medium">Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 pb-24 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/images/hero/image4.jpeg"
                alt="Vidya Classes"
                fill
                className="object-cover"
              />
            </div>
          </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-600 drop-shadow-lg px-2">
                Admin Portal
            </h1>
            <p className="text-base md:text-xl text-center max-w-3xl mx-auto text-gray-600 drop-shadow-md px-4">
            Secure access for review management
            </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700 text-sm">Secure Access</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-green-600 text-xl" />
              <span className="text-gray-700 text-sm">Review Management</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="text-orange-600 text-xl" />
              <span className="text-gray-700 text-sm">Community Feedback</span>
            </div>
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLock className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Admin Access</h2>
              <p className="text-gray-500 mt-2 text-sm">Enter password to manage reviews</p>
            </div>
            
            <input
              type="password"
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Login
            </button>
            
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-xl text-center text-sm">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
          <Footer />
    </div>
  );
}
