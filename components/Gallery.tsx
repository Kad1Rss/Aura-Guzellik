import React from 'react';
import { GALLERY_IMAGES, INSTAGRAM_LINK } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-rose-500 font-semibold tracking-widest uppercase text-xs md:text-sm">Sizi Bekliyoruz</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2 mb-2 md:mb-4">Salonumuzdan Kareler</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Hijyenik, konforlu ve modern atmosferimiz.
          </p>
        </div>

        {/* Masonry Layout: Columns-2 on mobile now */}
        <div className="columns-2 md:columns-2 lg:columns-3 gap-2 md:gap-4 space-y-2 md:space-y-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <a 
              key={idx} 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="block relative overflow-hidden rounded-lg md:rounded-xl group cursor-pointer break-inside-avoid shadow-md hover:shadow-xl transition-shadow"
              aria-label="Instagram'da Takip Et"
            >
              <img 
                src={src} 
                alt={`Aura Güzellik Salonu ${idx + 1}`} 
                className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110"
                style={{
                    filter: 'brightness(1.05) contrast(1.05)'
                }}
              />
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-rose-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                 <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center shadow-2xl border border-rose-100">
                     <span className="block text-rose-900 font-serif font-bold tracking-[0.2em] text-lg mb-2">AURA</span>
                     
                     <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-rose-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        Takip Et
                     </div>
                 </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;