'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '@/components/layout/Footer';
import EnquiryForm from '@/components/forms/EnquiryForm';
import {
  FaChalkboardTeacher,
  FaBook,
  FaClock,
  FaRupeeSign,
  FaArrowRight,
  FaStar,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaHeart,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaUserCheck,
  FaSchool,
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
    { name: 'Home', href: '/', color: 'text-blue-600', hoverColor: 'hover:text-blue-700', bgColor: 'bg-blue-600' },
    { name: 'About', href: '/about', color: 'text-blue-600', hoverColor: 'hover:text-green-700', bgColor: 'bg-green-600' },
    { name: 'Subjects', href: '/subjects', color: 'text-blue-600', hoverColor: 'hover:text-purple-700', bgColor: 'bg-purple-600' },
    { name: 'Timings', href: '/timings', color: 'text-blue-600', hoverColor: 'hover:text-orange-700', bgColor: 'bg-orange-600' },
    { name: 'Fees', href: '/fees', color: 'text-blue-600', hoverColor: 'hover:text-red-700', bgColor: 'bg-red-600' },
    { name: 'Gallery', href: '/gallery', color: 'text-blue-600', hoverColor: 'hover:text-pink-700', bgColor: 'bg-pink-600' },
    { name: 'Blog', href: '/blog', color: 'text-blue-600', hoverColor: 'hover:text-indigo-700', bgColor: 'bg-indigo-600' },
    { name: 'Contact', href: '/contact', color: 'text-blue-600', hoverColor: 'hover:text-teal-700', bgColor: 'bg-teal-600' },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Why Choose Us Features
  const features = [
    { icon: FaChalkboardTeacher, title: "Well qualified and experienced teachers", description: "Expert faculty with years of teaching experience", color: "from-blue-500 to-blue-600", textColor: "text-blue-600" },
    { icon: FaBook, title: "Special classes for weak studies", description: "Extra attention and remedial classes for better understanding", color: "from-green-500 to-green-600", textColor: "text-green-600" },
    { icon: FaChartLine, title: "Weekly exams", description: "Regular assessments to track progress", color: "from-purple-500 to-purple-600", textColor: "text-purple-600" },
    { icon: FaUsers, title: "Small batches", description: "Limited students per batch for personalized attention", color: "from-orange-500 to-orange-600", textColor: "text-orange-600" },
    { icon: FaRupeeSign, title: "Affordable fee", description: "Quality education at reasonable prices", color: "from-red-500 to-red-600", textColor: "text-red-600" },
    { icon: FaStar, title: "Highly recommended by parents", description: "Trusted by hundreds of satisfied parents", color: "from-yellow-500 to-yellow-600", textColor: "text-yellow-600" },
    { icon: FaUserCheck, title: "Individual attention", description: "One-on-one focus on every student", color: "from-pink-500 to-pink-600", textColor: "text-pink-600" },
    { icon: FaSchool, title: "Teaching based on syllabus for student schools", description: "Curriculum aligned with school requirements", color: "from-indigo-500 to-indigo-600", textColor: "text-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION MENU */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Trust, Success, Care */}
            <Link href="/" className="flex flex-col">
              <div className="flex items-center gap-2">
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
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
                    Vidya Coaching Classes
                  </span>
                  <div className="flex gap-3 text-xs mt-0.5">
                    <span className="text-blue-600 font-semibold flex items-center gap-1">
                      <FaShieldAlt size={10} /> TRUST
                    </span>
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      <FaStar size={10} /> SUCCESS
                    </span>
                    <span className="text-orange-600 font-semibold flex items-center gap-1">
                      <FaHeart size={10} /> CARE
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu with Colored Links */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${item.color} ${item.hoverColor} transition font-medium relative group`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${item.color.replace('text', 'bg')} group-hover:w-full transition-all duration-300`}></span>
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

          {/* Mobile Menu with Colored Links */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 ${item.color} hover:opacity-80 transition font-medium`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO WITH SLIDER - Clear Images */}
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
                  className="min-w-full flex-shrink-0 relative h-[300px] md:h-[500px] overflow-hidden"
                >
                  {/* Clear Image - No overlay */}
                  <Image
                    src={img}
                    alt="Education"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover"
                    priority={i === 0}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? 'bg-white scale-125 w-4' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center mt-10 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 via-green-100 to-orange-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Welcome to Vidya Coaching Classes
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
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

      {/* TRUST, SUCCESS, CARE SECTION */}
      <section className="py-12 bg-gradient-to-r from-blue-50 via-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">TRUST</h3>
              <p className="text-gray-600">Building trust through quality education and transparent practices</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">SUCCESS</h3>
              <p className="text-gray-600">Proven track record of student success and academic excellence</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">CARE</h3>
              <p className="text-gray-600">Personalized attention and care for every student's growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {[
            ['15+', 'Years Experience'],
            ['5000+', 'Students'],
            ['100%', 'Satisfaction'],
            ['50+', 'Awards'],
          ].map(([num, label]) => (
            <div key={label} className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition">
                {num}
              </div>
              <div className="text-gray-600 mt-2 text-sm md:text-base">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US - 8 Feature Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes Vidya Coaching Classes the right choice for your child's education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center group hover:-translate-y-1"
                >
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className={`font-bold text-base mb-2 ${feature.textColor}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Enquiry Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
              Quick Enquiry
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form and we'll get back to you within 24 hours
            </p>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-green-600 to-orange-600 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Parents Say</h2>
          <p className="text-white/90 mt-2">
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
            academic goals with Vidya Coaching Classes
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Started <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer - Reusable component */}
      <Footer />
    </div>
  );
}