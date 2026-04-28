'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';

const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  class_subject: z.string().optional(),
  message: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitStatus('loading');
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/enquiries`, data);
      if (response.status === 201) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-gray-700 font-semibold mb-2 text-sm">Name *</label>
        <input
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone Number *</label>
        <input
          type="tel"
          {...register('phone', {
            required: 'Phone number is required',
            validate: (value) =>
              /^[0-9]{10}$/.test(value) || 'Enter a valid 10-digit phone number'
          })}
          maxLength={10}
          inputMode="numeric"
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 10);
            e.target.value = onlyNums;
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          placeholder="Enter 10-digit phone number"
        />        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2 text-sm">Class / Subject</label>
        <input
          type="text"
          {...register('class_subject')}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          placeholder="e.g., Class 10 Mathematics"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2 text-sm">Message</label>
        <textarea
          rows={4}
          {...register('message')}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
          placeholder="Your message (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
      >
        {submitStatus === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center">
          ✓ Enquiry submitted successfully! We'll contact you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center">
          ✗ Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}