'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  FaRupeeSign, 
  FaCheckCircle, 
  FaCalendarAlt, 
  FaGraduationCap,
  FaArrowLeft,
  FaStar,
  FaHeart,
  FaShieldAlt,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

export default function AdmissionsPage() {
  const router = useRouter();

  const programs = [
    {
      className: "Class 1-5",
      duration: "Full Academic Year",
      features: [
        "All Subjects Covered",
        "Study Material Included",
        "Weekly Tests",
        "Progress Reports",
        "Activity-Based Learning"
      ],
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      className: "Class 6-8",
      duration: "Full Academic Year",
      features: [
        "All Subjects",
        "Study Material Included",
        "Weekly Tests",
        "Progress Reports",
        "Doubt Clearing Sessions",
        "Science Lab Access"
      ],
      color: "from-green-500 to-green-600",
      textColor: "text-green-600",
      popular: true
    },
    {
      className: "Class 9-10",
      duration: "Full Academic Year",
      features: [
        "All Subjects",
        "Study Material Included",
        "Weekly Tests",
        "Progress Reports",
        "Doubt Sessions",
        "Practice Papers",
        "Board Exam Preparation"
      ],
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600"
    },
    {
      className: "Class 11-12",
      duration: "Full Academic Year",
      features: [
        "Physics, Chemistry, Maths/Bio",
        "Study Material Included",
        "Weekly Tests",
        "Doubt Sessions",
        "Practice Papers",
        "Mock Tests",
        "Career Counseling"
      ],
      color: "from-red-500 to-red-600",
      textColor: "text-red-600"
    },
    {
      className: "JEE/NEET",
      duration: "Full Academic Year",
      features: [
        "Complete Syllabus Coverage",
        "Comprehensive Study Material",
        "Weekly Tests",
        "Doubt Sessions",
        "Mock Tests",
        "Previous Year Papers",
        "One-on-One Mentoring"
      ],
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600"
    }
  ];

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="hidden md:block fixed top-24 left-4 z-50 md:top-28 md:left-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl rounded-full px-4 py-2 text-gray-700 hover:text-blue-600 transition group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          {/* Image at top center */}
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
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Admissions
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-white/90">
            Join Vidya Classes for quality education and guaranteed academic success
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-blue-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">No Hidden Charges</p>
                <p className="text-xs md:text-sm text-gray-500">100% transparent</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center">
                <FaStar className="text-green-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">Best Value</p>
                <p className="text-xs md:text-sm text-gray-500">Quality education</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <FaHeart className="text-orange-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">Flexible Payment</p>
                <p className="text-xs md:text-sm text-gray-500">Easy installments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Our Academic Programs</h2>
          <p className="text-gray-600">Choose the right program for your child's academic journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              {program.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-bl-lg text-xs md:text-sm font-semibold z-10">
                  🔥 MOST POPULAR
                </div>
              )}
              <div className={`bg-gradient-to-r ${program.color} p-5 md:p-6 text-white`}>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{program.className}</h3>
                <p className="text-sm opacity-90">{program.duration}</p>
              </div>
              <div className="p-5 md:p-6">
                <ul className="space-y-2 md:space-y-3 mb-6">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <FaCheckCircle className={`${program.textColor} mt-1 flex-shrink-0 text-sm md:text-base`} />
                      <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#quick-enquiry"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 md:py-3 rounded-lg font-semibold hover:scale-105 transition text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Admission Process */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Admission Process</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl md:text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Enquiry</h3>
              <p className="text-sm text-gray-600">Contact us for admission details and counseling</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl md:text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Assessment</h3>
              <p className="text-sm text-gray-600">Basic assessment to understand student's level</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl md:text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Enrollment</h3>
              <p className="text-sm text-gray-600">Complete registration and begin your journey</p>
            </div>
          </div>
        </div>

        {/* Contact & Info */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaCalendarAlt className="text-xl md:text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">Important Dates</h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li className="flex items-center gap-2">✓ Admissions Open: Throughout the year</li>
              <li className="flex items-center gap-2">✓ New Academic Session: April 2024</li>
              <li className="flex items-center gap-2">✓ Early Bird Discount: Till March 31st</li>
              <li className="flex items-center gap-2">✓ Orientation Day: First week of April</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-xl md:text-2xl text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">Scholarships</h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li className="flex items-center gap-2">✓ Merit-based scholarships for top performers</li>
              <li className="flex items-center gap-2">✓ Financial aid for deserving students</li>
              <li className="flex items-center gap-2">✓ Sports quota scholarships available</li>
              <li className="flex items-center gap-2">✓ Sibling discount: 10% for second child</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 rounded-xl">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center justify-center gap-2">
              <FaPhone className="text-blue-600" />
              <a href="tel:+919876543210" className="text-gray-700 hover:text-blue-600">+91 98765 43210</a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-green-600" />
              <a href="mailto:admissions@vidyaclasses.com" className="text-gray-700 hover:text-blue-600">admissions@vidyaclasses.com</a>
            </div>
            <p className="text-gray-600 text-sm">* For detailed information, please contact our admission office</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}