import React from 'react';
import { BEAUTY_TIPS } from '../constants';

const BeautyTips: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-rose-500 font-semibold tracking-widest uppercase text-sm">Uzmanlarımızdan Tavsiyeler</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Haftanın Güzellik Sırları</h2>
          <div className="w-16 h-1 bg-rose-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEAUTY_TIPS.map((tip) => (
            <div 
              key={tip.id} 
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 px-3 py-1 ${tip.color} text-gray-600 text-xs font-bold rounded-bl-lg`}>
                {tip.tag}
              </div>
              <div className={`w-14 h-14 ${tip.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            * Daha fazla kişisel tavsiye için yukarıdaki <span className="text-rose-500 font-bold">Aura Asistanı</span> kullanabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeautyTips;