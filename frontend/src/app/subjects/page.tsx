'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  FaCalculator, 
  FaFlask, 
  FaBook, 
  FaLaptopCode, 
  FaChartLine, 
  FaHeartbeat, 
  FaAtom, 
  FaCode,
  FaArrowLeft,
  FaSchool,
  FaUniversity,
  FaCalendarAlt,
  FaChalkboardTeacher
} from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

export default function SubjectsPage() {
  const router = useRouter();

  // Preschool and High School Subjects (6th to 10th)
  const highSchoolSubjects = [
    { name: "Mathematics", icon: FaCalculator, color: "from-blue-500 to-blue-600", description: "Algebra, Geometry, Calculus, Trigonometry" },
    { name: "Physics", icon: FaAtom, color: "from-indigo-500 to-indigo-600", description: "Mechanics, Optics, Electricity, Modern Physics" },
    { name: "Chemistry", icon: FaFlask, color: "from-green-500 to-green-600", description: "Physical, Organic, Inorganic Chemistry" },
    { name: "Biology", icon: FaHeartbeat, color: "from-pink-500 to-pink-600", description: "Botany, Zoology, Human Anatomy" },
    { name: "English", icon: FaBook, color: "from-purple-500 to-purple-600", description: "Grammar, Literature, Writing Skills" },
    { name: "Computer Science", icon: FaLaptopCode, color: "from-orange-500 to-orange-600", description: "Programming, IT Fundamentals" },
  ];

  // PUC Subjects (College Level)
  const pucSubjects = [
    { name: "Physics", icon: FaAtom, color: "from-indigo-500 to-indigo-600", description: "Advanced Physics for PUC", stream: "Science" },
    { name: "Chemistry", icon: FaFlask, color: "from-green-500 to-green-600", description: "Advanced Chemistry for PUC", stream: "Science" },
    { name: "Mathematics", icon: FaCalculator, color: "from-blue-500 to-blue-600", description: "Advanced Mathematics for PUC", stream: "Science" },
    { name: "Biology", icon: FaHeartbeat, color: "from-pink-500 to-pink-600", description: "Advanced Biology for PUC", stream: "Science" },
  ];

  // Competitive Exams
  const competitiveExams = [
    { name: "JEE (Main & Advanced)", icon: FaChartLine, color: "from-red-500 to-red-600", description: "Engineering Entrance Preparation", duration: "2 Years Program" },
    { name: "NEET", icon: FaHeartbeat, color: "from-pink-500 to-pink-600", description: "Medical Entrance Preparation", duration: "2 Years Program" },
    { name: "K-CET", icon: FaUniversity, color: "from-purple-500 to-purple-600", description: "Karnataka Common Entrance Test", duration: "Crash Course Available" },
  ];

  return (
    <div className="min-h-screen bg-white">
    {/* Back Button */}
    <div className="fixed top-24 left-4 z-50 md:top-28 md:left-8">
    <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl rounded-full px-4 py-2 text-gray-700 hover:text-blue-600 transition group"
    >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        <span className="text-sm font-medium">Back</span>
    </button>

    </div>
    
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden pt-16">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Subjects & Classes
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-white/90">
            Comprehensive curriculum designed for academic excellence
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Curriculum Types Banner - BIGGER SIZE */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* State Syllabus */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaSchool className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">State Syllabus</h3>
              <p className="text-gray-600">Comprehensive coverage with detailed curriculum</p>
            </div>

            {/* CBSE Syllabus */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaBook className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">CBSE Syllabus</h3>
              <p className="text-gray-600">National curriculum with standard approach</p>
            </div>

            {/* Vacation Classes */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaCalendarAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Vacation Classes</h3>
              <p className="text-gray-600">Summer & Winter batches for quick learning</p>
            </div>

            {/* Regular Classes */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaChalkboardTeacher className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">Regular Classes</h3>
              <p className="text-gray-600">Year-round coaching for consistent progress</p>
            </div>
          </div>
        </div>
      </div>

      {/* High School Section (6th to 10th) */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
            High School (6th - 10th Std)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All subjects with special focus on important topics
          </p>
          <div className="flex justify-center gap-3 mt-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">State Syllabus</span>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">CBSE Syllabus</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highSchoolSubjects.map((subject, idx) => {
            const Icon = subject.icon;
            return (
              <div key={idx} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${subject.color} p-5 text-white`}>
                  <Icon className="text-3xl mb-2" />
                  <h3 className="text-xl font-bold">{subject.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PUC Section (College) */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
              Pre-University College (PUC 1 & 2)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Science stream with comprehensive subject coverage
            </p>
            <div className="flex justify-center gap-3 mt-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">PUC 1</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">PUC 2</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pucSubjects.map((subject, idx) => {
              const Icon = subject.icon;
              return (
                <div key={idx} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className={`bg-gradient-to-r ${subject.color} p-5 text-white`}>
                    <Icon className="text-3xl mb-2" />
                    <h3 className="text-xl font-bold">{subject.name}</h3>
                    <p className="text-xs opacity-90">{subject.stream}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{subject.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Competitive Exams Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
            Competitive Exams
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized coaching for entrance examinations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competitiveExams.map((exam, idx) => {
            const Icon = exam.icon;
            return (
              <div key={idx} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${exam.color} p-6 text-white`}>
                  <Icon className="text-4xl mb-3" />
                  <h3 className="text-xl font-bold">{exam.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 mb-2 text-sm">{exam.description}</p>
                  <p className="text-sm font-semibold text-blue-600">{exam.duration}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Info Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Both State & CBSE Syllabus
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            We cover both State and CBSE syllabus for all classes with expert faculty
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}