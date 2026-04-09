'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, formData);
      setStatus('success');
      setFormData({ name: '', rating: 5, comment: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Rating *</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none"
            >
              <FaStar
                className={`text-3xl transition ${
                  (hoverRating || formData.rating) >= star
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Review *</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          placeholder="Share your experience with us..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Review'}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center">
          ✓ Thank you for your review!
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center">
          ✗ Failed to submit. Please try again.
        </div>
      )}
    </form>
  );
}