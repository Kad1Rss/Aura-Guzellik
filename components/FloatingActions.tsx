import React from 'react';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
      {/* Instagram Button */}
      <a
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 rounded-full shadow-xl hover:scale-110 transition-all duration-300 relative"
        aria-label="Instagram"
      >
        {/* Tooltip only on desktop to prevent mobile clutter */}
        <div className="hidden md:block absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Bizi Takip Edin
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white md:w-7 md:h-7">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 relative animate-bounce-subtle ring-4 ring-white/30"
        aria-label="WhatsApp"
      >
        <div className="hidden md:block absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Hemen Randevu Al
        </div>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600 border-2 border-white"></span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white md:w-8 md:h-8">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default FloatingActions;