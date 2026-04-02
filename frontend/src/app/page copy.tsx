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
  FaLightbulb,
  FaQuestion,
  FaCompass,
  FaHandsHelping,
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
    { name: 'About', href: '/about', color: 'text-green-600', hoverColor: 'hover:text-green-700', bgColor: 'bg-green-600' },
    { name: 'Subjects', href: '/subjects', color: 'text-purple-600', hoverColor: 'hover:text-purple-700', bgColor: 'bg-purple-600' },
    { name: 'Timings', href: '/timings', color: 'text-orange-600', hoverColor: 'hover:text-orange-700', bgColor: 'bg-orange-600' },
    { name: 'Admissions', href: '/Admissions', color: 'text-red-600', hoverColor: 'hover:text-red-700', bgColor: 'bg-red-600' },
    { name: 'Gallery', href: '/gallery', color: 'text-pink-600', hoverColor: 'hover:text-pink-700', bgColor: 'bg-pink-600' },
    { name: 'Blog', href: '/blog', color: 'text-indigo-600', hoverColor: 'hover:text-indigo-700', bgColor: 'bg-indigo-600' },
    { name: 'Contact', href: '/contact', color: 'text-teal-600', hoverColor: 'hover:text-teal-700', bgColor: 'bg-teal-600' },
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
            {/* Logo with Trust, Success, Care - Larger Font */}
            <Link href="/" className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white text-lg" />
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <FaHeart className="text-white text-lg" />
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <FaStar className="text-white text-lg" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
                    Vidya Coaching Classes
                  </span>
                  <div className="flex gap-3 text-xs mt-1">
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

{/* HERO SECTION - Image on Extreme Left */}
<section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20"></div>

  <div className="container mx-auto px-4 py-6 md:py-10">
    {/* Desktop Layout - Image Extreme Left */}
<div className="hidden lg:flex flex-col items-center mb-8">
  
  {/* Top Row: Image + Centered Title */}
  <div className="w-full flex items-center justify-between">
    
    {/* Left Image */}
    <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600">
      <Image
        src="/images/hero/image0.jpeg"
        alt="Vidya Classes"
        fill
        className="object-cover"
        priority
      />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-center font-semibold text-base">
              Vara Prasad Reddy
            </p>
          </div>      
    </div>

    {/* Center Title */}
    <div className="flex-1 text-center">
      <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
        Vidya Coaching Classes
      </h1>

      <div className="flex justify-center gap-4 mt-2">
        <span className="text-blue-600 font-semibold text-sm">TRUST</span>
        <span className="text-green-600 font-semibold text-sm">SUCCESS</span>
        <span className="text-orange-600 font-semibold text-sm">CARE</span>
      </div>
    </div>

    {/* Right spacer (balances layout) */}
    <div className="w-32"></div>
  </div>

</div>
    {/* Mobile Layout - Image Centered on Top */}
    <div className="flex flex-col lg:hidden items-center text-center mb-6">
      {/* Top Image - Mobile */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-white/30 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 mb-3">
        <Image
          src="/images/hero/image0.jpeg"
          alt="Vidya Classes"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Text - Mobile */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
        Vidya Coaching Classes
      </h1>
      <div className="flex justify-center gap-4 mt-2">
        <span className="text-blue-600 font-semibold text-xs">TRUST</span>
        <span className="text-green-600 font-semibold text-xs">SUCCESS</span>
        <span className="text-orange-600 font-semibold text-xs">CARE</span>
      </div>
    </div>

    {/* Centered Slider */}
    <div className="flex justify-center mt-6 md:mt-8">
      <div className="w-full max-w-4xl">
        <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-600 via-green-600 to-orange-600">
          <div className="relative w-full" style={{ height: 'clamp(250px, 45vw, 400px)' }}>
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={img} className="min-w-full flex-shrink-0 relative h-full">
                  <Image
                    src={img}
                    alt="Education"
                    fill
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="object-cover"
                    priority={i === 0}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  i === index ? 'bg-white scale-125 w-4' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Content below hero */}
    <div className="text-center mt-8 md:mt-12">
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent mb-3">
        VIDYA CLASSES
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
          <p className="text-blue-700 text-sm md:text-base">If you have questions, we give you answers</p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg">
          <p className="text-green-700 text-sm md:text-base">If you have confusions, we give you clarity</p>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg">
          <p className="text-orange-700 text-sm md:text-base">If you have dreams, we give you hope</p>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg">
          <p className="text-purple-700 text-sm md:text-base">If you feel low, we make you confident</p>
        </div>
        <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-3 rounded-lg sm:col-span-2 lg:col-span-1">
          <p className="text-pink-700 text-sm md:text-base">If you are lost, we show you the path</p>
        </div>
      </div>

<div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 rounded-xl p-5 md:p-6 mb-6">
  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
    Admission Open
  </p>
  <p className="text-lg md:text-xl text-gray-700 mt-1">
    <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">6th to 10th Std</span>
  </p>
  <p className="text-base md:text-lg mt-1">
    <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent font-semibold">STATE/CBSE</span>
  </p>
  <div className="mt-4">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-5 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base cursor-default">
      📞 CALL 87123 46960
    </div>
  </div>
</div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-2.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition text-sm md:text-base"
        >
          Enroll Now <FaArrowRight />
        </Link>
        <Link
          href="/about"
          className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-2.5 rounded-full font-semibold hover:bg-blue-50 transition text-sm md:text-base"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Mission Statement Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-6">We Are Your Teacher</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition group">
              <FaQuestion className="text-3xl mx-auto mb-2 text-blue-300 group-hover:text-blue-200 transition" />
              <p className="text-sm text-gray-100">If you have questions, we give you answers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition group">
              <FaLightbulb className="text-3xl mx-auto mb-2 text-yellow-300 group-hover:text-yellow-200 transition" />
              <p className="text-sm text-gray-100">If you have confusions, we give you clarity</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition group">
              <FaStar className="text-3xl mx-auto mb-2 text-orange-300 group-hover:text-orange-200 transition" />
              <p className="text-sm text-gray-100">If you have dreams, we give you wings</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition group">
              <FaHeart className="text-3xl mx-auto mb-2 text-pink-300 group-hover:text-pink-200 transition" />
              <p className="text-sm text-gray-100">If you feel low, we make you confident</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition group">
              <FaCompass className="text-3xl mx-auto mb-2 text-green-300 group-hover:text-green-200 transition" />
              <p className="text-sm text-gray-100">If you are lost, we show you the way</p>
            </div>
           </div>
            <p className="mt-8 text-lg font-semibold">Vidya Classes Dedicated to Give You the Best Education</p>
          </div>
        </div>
      </div>

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

{/* STATS - Updated with correct establishment year */}
<section className="py-14 bg-white">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
    {[
      ['Since 2023', 'Years of Excellence'],
      ['1000+', 'Students'],
      ['100%', 'Satisfaction'],
    ].map(([num, label]) => (
      <div key={label} className="group">
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition">
          {num}
        </div>
        <div className="text-gray-500 mt-1 text-xs md:text-sm">{label}</div>
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