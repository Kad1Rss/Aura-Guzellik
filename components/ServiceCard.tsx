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
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 md:transform md:hover:-translate-y-2 flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-56 md:h-64 overflow-hidden relative">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-rose-900/20 transition-colors duration-300" />
      </div>
      
      <div className="p-6 md:p-8 relative flex flex-col flex-grow">
        <div className="absolute -top-8 right-6 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-rose-500 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-300 border-4 border-white">
          {service.icon}
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors pr-12">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base flex-grow">
          {service.description}
        </p>
        
        <a 
          href={WHATSAPP_LINK}
          target="_blank" 
          rel="noreferrer"
          className="w-full mt-auto py-3 px-4 rounded-xl bg-rose-50 text-rose-600 font-bold text-center border border-rose-100 hover:bg-rose-600 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Detaylı Bilgi Al</span>
          <span className="text-lg">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;