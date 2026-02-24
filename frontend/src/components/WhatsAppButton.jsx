import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/mock';

const WhatsAppButton = () => {
  const message = "Hello! I'm interested in your fire safety products and services.";
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
      aria-label="Contact us on WhatsApp"
      style={{
        animation: 'bounce 2s infinite'
      }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
