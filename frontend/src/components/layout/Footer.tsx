'use client';

import Link from 'next/link';
import { FaGraduationCap, FaHeart, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-white text-sm" />
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FaHeart className="text-white text-sm" />
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <FaStar className="text-white text-sm" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                  Vidya Coaching Classes
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              "Gives Quality Education" - Instilling Values Along with Knowledge
            </p>
            <div className="flex gap-3 mt-3">
              <span className="text-xs text-blue-400">TRUST</span>
              <span className="text-xs text-green-400">SUCCESS</span>
              <span className="text-xs text-orange-400">CARE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition text-sm">About Us</Link></li>
              <li><Link href="/subjects" className="text-gray-400 hover:text-green-400 transition text-sm">Subjects</Link></li>
              <li><Link href="/timings" className="text-gray-400 hover:text-purple-400 transition text-sm">Class Timings</Link></li>
              <li><Link href="/fees" className="text-gray-400 hover:text-orange-400 transition text-sm">Fees Details</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-pink-400 transition text-sm">Gallery</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-indigo-400 transition text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-teal-400 transition text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-blue-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-green-400" />
                <span>+91 98765 43211</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-orange-400" />
                <span>info@vidyaclasses.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-purple-400 mt-1" />
                <span>Edurshetty Arcade, Beside Reliance Smart Market, Datta Circle, Anjaneya Nagar, Belagavi</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm flex items-center gap-2">
                <FaFacebook /> Facebook
              </a>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-sm flex items-center gap-2">
                <FaTwitter /> Twitter
              </a>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition text-sm flex items-center gap-2">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Vidya Coaching Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}