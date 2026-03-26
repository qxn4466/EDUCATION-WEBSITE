'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919876543210';
  const message = encodeURIComponent("Hello, I'm interested in your courses. Please provide more information.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}