'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaCheck, FaTrash, FaStar, FaUser, FaArrowLeft, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
import Footer from '@/components/layout/Footer';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
  is_approved: boolean;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionStatus, setActionStatus] = useState<{ type: string; message: string } | null>(null);
  const router = useRouter();
  const [secret, setSecret] = useState('');

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      router.push('/admin');
      return;
    }
    setSecret(process.env.NEXT_PUBLIC_ADMIN_SECRET || '');
  }, [router]);

  useEffect(() => {
    if (secret) {
      fetchReviews();
    }
  }, [secret]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/reviews?secret=${secret}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const approveReview = async (id: number) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/reviews/${id}/approve?secret=${secret}`);
      setActionStatus({ type: 'success', message: 'Review approved!' });
      fetchReviews();
      setTimeout(() => setActionStatus(null), 3000);
    } catch (error) {
      setActionStatus({ type: 'error', message: 'Failed to approve' });
      setTimeout(() => setActionStatus(null), 3000);
    }
  };

  const deleteReview = async (id: number) => {
    if (!confirm('Are you sure you want to delete this review?')) return;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/reviews/${id}?secret=${secret}`);
      setActionStatus({ type: 'success', message: 'Review deleted!' });
      fetchReviews();
      setTimeout(() => setActionStatus(null), 3000);
    } catch (error) {
      setActionStatus({ type: 'error', message: 'Failed to delete' });
      setTimeout(() => setActionStatus(null), 3000);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    router.push('/');
  };

  const handleBack = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
          Review Management
        </h1>
        <p className="text-base md:text-xl text-center max-w-3xl mx-auto text-gray-600 drop-shadow-md px-4">
          Approve or delete student and parent reviews
        </p>

        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaStar className="text-blue-600 text-lg" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{reviews.length} Pending</p>
                <p className="text-xs text-gray-500">Reviews to review</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {actionStatus && (
          <div className={`max-w-2xl mx-auto mb-6 p-4 rounded-xl text-center ${
            actionStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {actionStatus.message}
          </div>
        )}

        {reviews.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheck className="text-3xl text-green-600" />
            </div>
            <p className="text-gray-500 text-lg">No pending reviews to approve.</p>
            <p className="text-gray-400 text-sm mt-2">All reviews have been processed.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
                <div className={`h-2 bg-gradient-to-r ${
                  review.rating >= 4 ? 'from-green-500 to-green-600' :
                  review.rating >= 3 ? 'from-yellow-500 to-orange-500' : 'from-red-500 to-red-600'
                }`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <FaUser className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">{review.name}</p>
                        <div className="flex gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar key={star} className={`text-base ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{new Date(review.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-5 leading-relaxed">{review.comment}</p>
                  
                  <div className="flex gap-3 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => approveReview(review.id)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition font-semibold"
                    >
                      <FaCheck /> Approve
                    </button>
                    <button
                      onClick={() => deleteReview(review.id)}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition font-semibold"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}