'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaClock, FaCalendarAlt, FaGraduationCap, FaArrowLeft, FaChalkboardTeacher, FaUsers, FaBook } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';
import { memo, useCallback } from 'react';

// Memoized schedule card component for mobile
const ScheduleCard = memo(({ slot, color, bgColor }: { slot: any; color: string; bgColor: string }) => (
  <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-2xl">{slot.icon}</span>
      <span className={`font-bold ${color}`}>{slot.time}</span>
    </div>
    <div className="mb-1">
      <span className={`inline-block px-2 py-1 ${bgColor} rounded-full text-xs font-medium`}>
        {slot.class}
      </span>
    </div>
    <p className="font-semibold text-gray-800 text-sm mb-1">{slot.subject}</p>
    <p className="text-gray-500 text-xs">Teacher: {slot.teacher}</p>
  </div>
));

ScheduleCard.displayName = 'ScheduleCard';

// Memoized schedule table component for desktop
const ScheduleTable = memo(({ slots, color, bgColor, badgeColor }: { slots: any[]; color: string; bgColor: string; badgeColor: string }) => (
  <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead className={`bg-gradient-to-r ${bgColor}`}>
          <tr>
            <th className={`px-6 py-4 text-left text-sm font-semibold ${color}`}>Time</th>
            <th className={`px-6 py-4 text-left text-sm font-semibold ${color}`}>Class</th>
            <th className={`px-6 py-4 text-left text-sm font-semibold ${color}`}>Subject</th>
            <th className={`px-6 py-4 text-left text-sm font-semibold ${color}`}>Teacher</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {slots.map((slot, idx) => (
            <tr key={idx} className={`hover:${bgColor}/30 transition`}>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{slot.icon}</span>
                  <span className="font-medium text-gray-800">{slot.time}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 ${badgeColor} rounded-full text-sm font-medium`}>
                  {slot.class}
                </span>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-800">{slot.subject}</td>
              <td className="px-6 py-4 text-gray-600">{slot.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
));

ScheduleTable.displayName = 'ScheduleTable';

// Quick info card component - Fixed icon visibility
const InfoCard = memo(({ icon: Icon, title, description, bgColor, iconColor }: { icon: any; title: string; description: string; bgColor: string; iconColor: string }) => (
  <div className="bg-white rounded-xl shadow-md p-3 md:p-5 text-center hover:shadow-lg transition group">
    <div className={`w-10 h-10 md:w-14 md:h-14 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition`}>
      <Icon className={`${iconColor} text-lg md:text-2xl`} />
    </div>
    <h3 className="font-bold text-gray-800 text-sm md:text-base">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm">{description}</p>
  </div>
));

InfoCard.displayName = 'InfoCard';

export default function TimingsPage() {
  const router = useRouter();

  const weekdaysSchedule = [
    { time: "6:00 AM - 7:30 AM", class: "Class 8-10", subject: "Mathematics", teacher: "Dr. Sharma", icon: "📐" },
    { time: "7:30 AM - 9:00 AM", class: "Class 8-10", subject: "Science", teacher: "Prof. Mehta", icon: "🔬" },
    { time: "4:00 PM - 5:30 PM", class: "Class 6-7", subject: "All Subjects", teacher: "Ms. Gupta", icon: "📚" },
    { time: "5:30 PM - 7:00 PM", class: "Class 9-12", subject: "Physics & Chemistry", teacher: "Dr. Kumar", icon: "⚛️" },
    { time: "7:00 PM - 8:30 PM", class: "Competitive Exams", subject: "JEE/NEET", teacher: "Prof. Singh", icon: "🎯" }
  ];

  const saturdaySchedule = [
    { time: "9:00 AM - 12:00 PM", class: "All Classes", subject: "Doubt Clearing Sessions", teacher: "All Teachers", icon: "❓" },
    { time: "2:00 PM - 5:00 PM", class: "Competitive Exams", subject: "Mock Tests", teacher: "Exam Cell", icon: "📝" }
  ];

  const sundaySchedule = [
    { time: "9:00 AM - 12:00 PM", class: "All Classes", subject: "Weekend Workshops", teacher: "Guest Faculty", icon: "🎓" }
  ];

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="hidden md:block fixed top-20 left-4 z-50 md:top-24 md:left-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl rounded-full px-3 py-1.5 md:px-4 md:py-2 text-gray-700 hover:text-blue-600 transition group text-sm md:text-base"
          aria-label="Go back"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition text-sm md:text-base" />
          <span className="text-xs md:text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-hidden pt-12">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
              <Image
                src="/images/hero/image4.jpeg"
                alt="Vidya Classes Logo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 288px"
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">Class Timings</h1>
          <p className="text-base md:text-xl text-center max-w-3xl mx-auto text-white/90 px-4 mb-6">
            Flexible schedules designed for your convenience
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Quick Info Cards - FIXED: Icons now fully visible */}
      <div className="container mx-auto px-4 mt-6 md:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <InfoCard 
            icon={FaClock} 
            title="Flexible Timings" 
            description="Choose your batch" 
            bgColor="bg-blue-500" 
            iconColor="text-white"
          />
          <InfoCard 
            icon={FaUsers} 
            title="Small Batches" 
            description="Personal attention" 
            bgColor="bg-green-500" 
            iconColor="text-white"
          />
          <InfoCard 
            icon={FaBook} 
            title="All Subjects" 
            description="Comprehensive coverage" 
            bgColor="bg-purple-500" 
            iconColor="text-white"
          />
          <InfoCard 
            icon={FaChalkboardTeacher} 
            title="Expert Faculty" 
            description="Experienced teachers" 
            bgColor="bg-orange-500" 
            iconColor="text-white"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Weekdays */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center">
              <FaCalendarAlt className="text-white text-base md:text-2xl" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Monday - Friday
            </h2>
          </div>
          
          <div className="space-y-3 md:hidden">
            {weekdaysSchedule.map((slot, idx) => (
              <ScheduleCard key={idx} slot={slot} color="text-blue-600" bgColor="bg-blue-100 text-blue-700" />
            ))}
          </div>
          
          <ScheduleTable 
            slots={weekdaysSchedule} 
            color="text-blue-800" 
            bgColor="from-blue-50 to-blue-100" 
            badgeColor="bg-blue-100 text-blue-700"
          />
        </div>

        {/* Saturday */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 rounded-lg md:rounded-xl flex items-center justify-center">
              <FaCalendarAlt className="text-white text-base md:text-2xl" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Saturday
            </h2>
          </div>
          
          <div className="space-y-3 md:hidden">
            {saturdaySchedule.map((slot, idx) => (
              <ScheduleCard key={idx} slot={slot} color="text-green-600" bgColor="bg-green-100 text-green-700" />
            ))}
          </div>
          
          <ScheduleTable 
            slots={saturdaySchedule} 
            color="text-green-800" 
            bgColor="from-green-50 to-green-100" 
            badgeColor="bg-green-100 text-green-700"
          />
        </div>

        {/* Sunday */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-500 rounded-lg md:rounded-xl flex items-center justify-center">
              <FaCalendarAlt className="text-white text-base md:text-2xl" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Sunday
            </h2>
          </div>
          
          <div className="space-y-3 md:hidden">
            {sundaySchedule.map((slot, idx) => (
              <ScheduleCard key={idx} slot={slot} color="text-purple-600" bgColor="bg-purple-100 text-purple-700" />
            ))}
          </div>
          
          <ScheduleTable 
            slots={sundaySchedule} 
            color="text-purple-800" 
            bgColor="from-purple-50 to-purple-100" 
            badgeColor="bg-purple-100 text-purple-700"
          />
        </div>

        {/* Important Note */}
        <div className="mt-6 p-4 md:p-6 bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 rounded-xl md:rounded-2xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-white text-lg md:text-2xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1">Important Note</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Timings are subject to change during exams and holidays. Please contact the office for any schedule updates.
              </p>
              <div className="mt-2 md:mt-3 flex flex-wrap gap-1.5 md:gap-2">
                <span className="text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 text-blue-600 rounded-full">Flexible Batches</span>
                <span className="text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 bg-green-100 text-green-600 rounded-full">Weekend Classes</span>
                <span className="text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 bg-orange-100 text-orange-600 rounded-full">Doubt Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}