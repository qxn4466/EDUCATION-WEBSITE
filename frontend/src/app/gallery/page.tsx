'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaTimes, FaArrowLeft, FaImages, FaCamera, FaAward } from 'react-icons/fa';
import Footer from '@/components/layout/Footer';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  icon: string;
  color: string;
}

// Gallery items with both image paths and fallback icons
const galleryItems: GalleryImage[] = [
  { id: 1, url: "/images/gallery/edit-1.jpg", title: "2026 Results - Top Achievers", category: "Achievements", icon: "🏆", color: "from-yellow-500 to-orange-500" },
  { id: 2, url: "/images/gallery/edit-2.jpg", title: "Result sucess Party & Celebration", category: "Events", icon: "🎉", color: "from-red-500 to-pink-500" },
  { id: 3, url: "/images/gallery/edit-3.jpg", title: "Toppers Felicitation Ceremony", category: "Achievements", icon: "⭐", color: "from-purple-500 to-indigo-500" },
  { id: 4, url: "/images/gallery/edit-4.jpg", title: "2026 Result Success Announcement", category: "Events", icon: "🥳", color: "from-green-500 to-teal-500" },
  { id: 5, url: "/images/gallery/image5.jpg", title: "Achievement", category: "Achievements", icon: "📚", color: "from-blue-500 to-blue-600" },
  { id: 6, url: "/images/gallery/image6.jpg", title: "Annual Workshop", category: "Events", icon: "🎯", color: "from-green-500 to-green-600" },
  { id: 7, url: "/images/gallery/image7.jpg", title: "Science Exhibition", category: "Activities", icon: "🔬", color: "from-purple-500 to-purple-600" },
  { id: 8, url: "/images/gallery/image8.jpg", title: "Coaching environment", category: "Classes", icon: "⚽", color: "from-green-500 to-green-600" },
  { id: 9, url: "/images/gallery/image9.jpg", title: "Award Ceremony", category: "Achievements", icon: "🏆", color: "from-yellow-500 to-orange-500" },
  { id: 10, url: "/images/gallery/image10.jpg", title: "Interactive classroom Session", category: "Classes", icon: "📖", color: "from-blue-500 to-blue-600" },
  { id: 11, url: "/images/gallery/image11.jpg", title: "Science Lab", category: "Facilities", icon: "🧪", color: "from-pink-500 to-red-500" },
  { id: 12, url: "/images/gallery/image12.jpg", title: "Educational Field Trip", category: "Activities", icon: "🚌", color: "from-purple-500 to-purple-600" },
];

const categories: string[] = ["All", "Classes", "Events", "Activities", "Achievements", "Facilities"];

export default function GalleryPage() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleBack = () => {
    window.history.back();
  };

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
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
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white overflow-visible">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
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

          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center mb-4 text-blue-800 drop-shadow-lg">Our Gallery</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-blue-800 font-semibold drop-shadow-lg mb-6">
            Capturing moments of learning, growth, and celebration
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Gallery Stats Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FaImages className="text-blue-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">8+ Years</p>
                <p className="text-xs md:text-sm text-gray-500">Memorable Moments</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center">
                <FaCamera className="text-green-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">50+ Events</p>
                <p className="text-xs md:text-sm text-gray-500">Celebrations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                <FaAward className="text-orange-600 text-2xl md:text-3xl" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base md:text-lg">500+ Students</p>
                <p className="text-xs md:text-sm text-gray-500">Happy Memories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full font-semibold transition text-sm md:text-base ${activeCategory === category
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => {
            const hasError = imageErrors[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {!hasError ? (
                  // Try to load real image
                  <div className="relative h-56 md:h-64 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                      onError={() => handleImageError(item.id)}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full z-10">
                      <span className="text-white text-xs">{item.category}</span>
                    </div>
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white w-full">
                        <p className="font-semibold text-sm md:text-base">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Fallback gradient card if image fails to load
                  <div className={`h-56 md:h-64 w-full flex flex-col items-center justify-center bg-gradient-to-br ${item.color}`}>
                    <span className="text-6xl md:text-7xl mb-3">{item.icon}</span>
                    <span className="text-white text-xs font-medium px-3 py-1 bg-white/20 rounded-full">
                      {item.category}
                    </span>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                        View Details
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base text-center line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {!imageErrors[selectedItem.id] ? (
              <div className="relative h-[70vh] w-full bg-black rounded-2xl overflow-hidden">
                <Image
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">{selectedItem.title}</h3>
                  <p className="text-gray-300">{selectedItem.category}</p>
                </div>
              </div>
            ) : (
              <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${selectedItem.color} p-8 text-center`}>
                <span className="text-8xl md:text-9xl mb-4 block">{selectedItem.icon}</span>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-white/80 text-lg mb-4">{selectedItem.category}</p>
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-white text-sm">
                    A memorable moment from our {selectedItem.category.toLowerCase()} at Vidya Coaching Classes.
                  </p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}