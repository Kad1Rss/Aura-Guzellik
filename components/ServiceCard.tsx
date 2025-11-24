import React from 'react';
import { Service } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div 
      className="group relative bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 md:transform md:hover:-translate-y-2 flex flex-col"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Reduced Height for Mobile */}
      <div className="h-32 md:h-64 overflow-hidden relative">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-rose-900/20 transition-colors duration-300" />
      </div>
      
      {/* Adjusted Padding and Content */}
      <div className="p-3 md:p-8 relative flex flex-col flex-grow">
        
        {/* Icon: Smaller and differently positioned on mobile */}
        <div className="absolute -top-5 right-3 w-10 h-10 text-xl md:-top-8 md:right-8 md:w-16 md:h-16 md:text-3xl bg-rose-500 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 border-2 md:border-4 border-white z-10">
          {service.icon}
        </div>
        
        <h3 className="text-sm md:text-2xl font-serif font-bold text-gray-800 mb-1 md:mb-3 group-hover:text-rose-600 transition-colors pr-2 md:pr-12 mt-2 md:mt-0 leading-tight">
          {service.title}
        </h3>
        
        {/* Line Clamp to limit text lines on mobile */}
        <p className="text-gray-600 leading-tight md:leading-relaxed mb-3 md:mb-6 text-[11px] md:text-base flex-grow line-clamp-3 md:line-clamp-none">
          {service.description}
        </p>
        
        <a 
          href={WHATSAPP_LINK}
          target="_blank" 
          rel="noreferrer"
          className="w-full mt-auto py-2 md:py-3 px-2 md:px-4 rounded-lg md:rounded-xl bg-rose-50 text-rose-600 font-bold text-center border border-rose-100 hover:bg-rose-600 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-1 md:gap-2 text-xs md:text-base"
        >
          <span>İncele</span>
          <span className="text-sm md:text-lg">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;