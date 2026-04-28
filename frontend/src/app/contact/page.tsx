'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowLeft, FaWhatsapp, FaFacebook, FaInstagram, FaStar, FaHeart, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`, formData);
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
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
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-visible">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          {/* Image at top center */}
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/images/hero/image4.jpeg"
                alt="Vidya Classes"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center mb-4 text-blue-800 drop-shadow-lg">Contact Us</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-blue-800 font-semibold drop-shadow-lg mb-6">
            Get in touch with us for any queries or admissions
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Contact Stats Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FaPhone className="text-blue-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">Quick Response</p>
                <p className="text-xs md:text-sm text-gray-500">Within 24 Hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-green-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">WhatsApp Support</p>
                <p className="text-xs md:text-sm text-gray-500">Available 9AM-8PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <FaClock className="text-orange-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">Flexible Hours</p>
                <p className="text-xs md:text-sm text-gray-500">Mon-Sat 9AM-8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-xl text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 87123 46960</p>
                  <p className="text-gray-600">+91 7997687099</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xl text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">vidyaclassesbgm@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">Edurshetty Arcade, Beside Reliance Smart Market,</p>
                  <p className="text-gray-600">Datta Circle, Anjaneya Nagar, Belagavi</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Another branch</p>
                  <p className="text-gray-600">No. 2127, Shahapur circle,  Belagavi - 590001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-xl text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Working Hours</p>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Response Message */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 text-xl mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">What happens after you submit?</p>
                  <p className="text-gray-600 text-xs mt-1">We'll contact you within 24 hours to discuss your query or schedule a consultation.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition group">
                  <FaFacebook className="text-blue-600 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition group">
                  <FaWhatsapp className="text-green-600 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition group">
                  <FaInstagram className="text-pink-600 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setFormData({ ...formData, phone: value });
                  }}
                  placeholder="Enter your phone number"
                />              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Your Message *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center">
                  <FaCheckCircle className="inline mr-2" />
                  ✓ Message sent successfully! We'll contact you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center">
                  ✗ Failed to send. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}