
import React, { useState } from 'react';
import { BEAUTY_TIPS } from '../constants';

const BeautyTips: React.FC = () => {
  const [expandedTips, setExpandedTips] = useState<Record<string, boolean>>({});

  const toggleTip = (id: string) => {
    setExpandedTips(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-rose-500 font-semibold tracking-widest uppercase text-xs md:text-sm">Uzmanlarımızdan Tavsiyeler</span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Haftanın Güzellik Sırları</h2>
          <div className="w-12 md:w-16 h-1 bg-rose-300 mx-auto mt-2 md:mt-4 rounded-full"></div>
        </div>

        {/* Grid-cols-2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {BEAUTY_TIPS.map((tip) => (
            <div 
              key={tip.id} 
              className="group bg-white rounded-xl p-3 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute top-0 right-0 px-2 py-1 md:px-3 ${tip.color} text-gray-600 text-[10px] md:text-xs font-bold rounded-bl-lg`}>
                {tip.tag}
              </div>
              <div className={`w-10 h-10 md:w-14 md:h-14 ${tip.color} rounded-full flex items-center justify-center text-lg md:text-2xl mb-2 md:mb-4 group-hover:scale-110 transition-transform`}>
                {tip.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-rose-600 transition-colors line-clamp-1">
                {tip.title}
              </h3>
              <p className={`text-gray-600 text-[11px] md:text-sm leading-tight md:leading-relaxed transition-all duration-300 ${
                expandedTips[tip.id] ? '' : 'line-clamp-4 md:line-clamp-none'
              }`}>
                {tip.description}
              </p>
              
              {/* Devamını Oku Button - Only Mobile */}
              <button 
                onClick={() => toggleTip(tip.id)}
                className="md:hidden mt-2 text-rose-500 font-bold text-[10px] text-left flex items-center gap-1 active:opacity-70"
              >
                {expandedTips[tip.id] ? (
                  <>Daha Az Gör <span className="rotate-180 transition-transform">▼</span></>
                ) : (
                  <>Devamını Oku <span>▼</span></>
                )}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-500 italic text-xs md:text-base">
            * Daha fazla kişisel tavsiye için yukarıdaki <span className="text-rose-500 font-bold">Aura Asistanı</span> kullanabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeautyTips;
