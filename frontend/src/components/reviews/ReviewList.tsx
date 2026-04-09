'use client';

import { useEffect, useState } from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa';
import axios from 'axios';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export default function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-500">Loading reviews...</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-2xl">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaStar className="text-3xl text-gray-400" />
        </div>
        <p className="text-gray-500">No reviews yet.</p>
        <p className="text-gray-400 text-sm mt-1">Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
          <div className={`h-1.5 w-full ${
            review.rating >= 4 ? 'bg-gradient-to-r from-green-500 to-green-600' :
            review.rating >= 3 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-red-500 to-red-600'
          }`}></div>
          <div className="p-5 md:p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <FaUser className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">{review.name}</p>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className={`text-sm ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                <FaCalendarAlt className="text-gray-400 text-xs" />
                <span>{new Date(review.created_at).toLocaleDateString()}</span>
              </div>
            </div>
            
            {/* Comment */}
            <div className="relative">
              <FaQuoteLeft className="absolute -top-1 -left-1 text-gray-100 text-2xl" />
              <p className="text-gray-600 leading-relaxed pl-4 relative z-10">{review.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}