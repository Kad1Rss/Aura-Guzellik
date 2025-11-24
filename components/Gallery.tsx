import React from 'react';
import { GALLERY_IMAGES } from '../constants';

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
            <div key={idx} className="relative overflow-hidden rounded-lg md:rounded-xl group cursor-pointer break-inside-avoid">
              <img 
                src={src} 
                alt={`Aura Güzellik Salonu ${idx + 1}`} 
                className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110"
                style={{
                    filter: 'brightness(1.05) contrast(1.05)'
                }}
              />
              
              {/* Hover Effect Overlay (Hidden on touch typically, visible on press) */}
              <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="hidden md:block bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-rose-900 font-serif font-bold tracking-widest">AURA</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;