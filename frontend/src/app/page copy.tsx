'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FaChalkboardTeacher,
  FaBook,
  FaClock,
  FaRupeeSign,
  FaArrowRight,
  FaStar,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const images = [
    '/images/hero/image1.jpeg',
    '/images/hero/image2.jpeg',
    '/images/hero/image3.jpeg',
  ];

  const [index, setIndex] = useState(0);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Subjects', href: '/subjects' },
    { name: 'Timings', href: '/timings' },
    { name: 'Fees', href: '/fees' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION MENU */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              EduInstitute
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO WITH SLIDER */}
      <section className="relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <div className="container mx-auto px-4 py-10 md:py-16">
          {/* SLIDER */}
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={img}
                  className="min-w-full flex-shrink-0 relative h-[300px] md:h-[500px] overflow-hidden bg-black"
                >
                  {/* 🔵 Blurred Background */}
                  <Image
                    src={img}
                    alt="bg"
                    fill
                    sizes="100vw"
                    className="object-cover blur-3xl scale-125 opacity-60"
                    loading="lazy"
                  />

                  {/* 🔵 Dark overlay to remove white feel */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

                  {/* 🟢 Main Image */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Image
                      src={img}
                      alt="Education"
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-contain"
                      priority={i === 0}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((img, i) => (
                <div
                  key={img}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? 'bg-white scale-125' : 'bg-white/50'
                  } transition`}
                />
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center mt-10 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Welcome to EduInstitute
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gives Quality Education
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-6">
              Instilling Values Along with Knowledge
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                Enroll Now <FaArrowRight />
              </Link>

              <Link
                href="/about"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {[
            ['3+', 'Years Experience'],
            ['1000+', 'Students'],
            ['100%', 'Satisfaction'],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-blue-600">{num}</div>
              <div className="text-gray-600 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2">
            We provide the perfect learning environment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
          {[
            {
              icon: FaChalkboardTeacher,
              title: 'Expert Teachers',
              desc: 'Highly qualified and experienced faculty',
              color: 'from-blue-500 to-blue-600',
            },
            {
              icon: FaBook,
              title: 'Quality Curriculum',
              desc: 'Comprehensive and updated syllabus',
              color: 'from-green-500 to-green-600',
            },
            {
              icon: FaClock,
              title: 'Flexible Timings',
              desc: 'Convenient batch schedules',
              color: 'from-purple-500 to-purple-600',
            },
            {
              icon: FaRupeeSign,
              title: 'Affordable Fees',
              desc: 'Quality education at best prices',
              color: 'from-orange-500 to-orange-600',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Parents Say</h2>
          <p className="text-blue-100 mt-2">
            Hear from our satisfied parents and students
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {[
            {
              name: 'Ramesh Kumar',
              text: 'Excellent teaching methods! My son\'s grades improved significantly.',
            },
            {
              name: 'Priya Sharma',
              text: 'Very supportive teachers! Highly recommended for quality education.',
            },
            {
              name: 'Amit Patel',
              text: 'Best coaching institute for competitive exams. Great results!',
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition"
            >
              <FaStar className="text-yellow-400 mb-3" />
              <p className="mb-3 italic">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their
            academic goals with us
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Started <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduInstitute</h3>
              <p className="text-gray-400">
                "Gives Quality Education" - Instilling Values Along with
                Knowledge
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/subjects" className="text-gray-400 hover:text-white">
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link href="/timings" className="text-gray-400 hover:text-white">
                    Class Timings
                  </Link>
                </li>
                <li>
                  <Link href="/fees" className="text-gray-400 hover:text-white">
                    Admission Details
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 87123 46960</li>
                <li>✉️ info@eduinstitute.com</li>
                <li>📍 123, Education Street, City</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduInstitute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}