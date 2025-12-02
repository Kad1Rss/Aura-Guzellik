import React from 'react';
import { Service } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Hizmete özel WhatsApp mesajı oluştur
  const message = `Merhaba, ${service.title} hizmetinizle ilgili detaylı bilgi ve fiyat almak istiyorum. 🌸`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  return (
    <div 
      className="group relative bg-white rounded-lg md:rounded-2xl shadow-sm md:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 md:transform md:hover:-translate-y-2 flex flex-col h-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Reduced Height for Mobile Compactness */}
      <div className="h-28 md:h-64 overflow-hidden relative bg-gray-100">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-rose-900/5 group-hover:bg-rose-900/20 transition-colors duration-300" />
      </div>
      
      {/* Content Area */}
      <div className="p-2 md:p-8 relative flex flex-col flex-grow">
        
        {/* Icon: Hidden on mobile for cleaner look, or very small */}
        <div className="absolute -top-4 right-2 w-8 h-8 text-base md:-top-8 md:right-8 md:w-16 md:h-16 md:text-3xl bg-rose-500 rounded-full flex items-center justify-center shadow-lg border-2 md:border-4 border-white z-10">
          {service.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xs md:text-2xl font-serif font-bold text-gray-800 mb-1 md:mb-3 pr-8 md:pr-0 mt-1 md:mt-0 leading-tight line-clamp-2 min-h-[2.5em] md:min-h-0">
          {service.title}
        </h3>
        
        {/* Description: Hidden on very small screens or clamped tightly */}
        <p className="text-gray-600 leading-tight md:leading-relaxed mb-2 md:mb-6 text-[10px] md:text-base flex-grow line-clamp-3 md:line-clamp-none hidden sm:block">
          {service.description}
        </p>
        
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noreferrer"
          className="w-full mt-auto py-1.5 md:py-3 px-2 md:px-4 rounded md:rounded-xl bg-rose-50 text-rose-600 font-bold text-center border border-rose-100 hover:bg-rose-600 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-1 text-[10px] md:text-base"
        >
          <span>Bilgi Al</span>
          <span className="text-xs md:text-lg">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;