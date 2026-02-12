
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import AiConsultant from './components/AiConsultant';
import BeautyTips from './components/BeautyTips';
import FloatingActions from './components/FloatingActions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SERVICES, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [bgIcons, setBgIcons] = useState<any[]>([]);

  useEffect(() => {
    const icons = [
      "https://cdn-icons-png.flaticon.com/512/3799/3799971.png",
      "https://cdn-icons-png.flaticon.com/512/2316/2316668.png",
      "https://cdn-icons-png.flaticon.com/512/629/629546.png",
      "https://cdn-icons-png.flaticon.com/512/1694/1694364.png",
      "https://cdn-icons-png.flaticon.com/512/1663/1663022.png",
      "https://cdn-icons-png.flaticon.com/512/864/864757.png",
      "https://cdn-icons-png.flaticon.com/512/614/614131.png"
    ];
    
    const newIcons = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      src: icons[Math.floor(Math.random() * icons.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 50 + 30,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.08 + 0.04
    }));
    setBgIcons(newIcons);
  }, []);

  return (
    <div className="min-h-screen bg-rose-50 font-sans text-gray-800 selection:bg-rose-200 selection:text-rose-900 relative overflow-x-hidden">
      
      {/* Background Icons Overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {bgIcons.map((icon) => (
           <img 
             key={icon.id}
             src={icon.src}
             className="absolute transition-all duration-1000 ease-in-out hover:scale-110"
             loading="lazy"
             decoding="async"
             style={{
               top: `${icon.top}%`,
               left: `${icon.left}%`,
               width: `${icon.size}px`,
               opacity: icon.opacity,
               transform: `rotate(${icon.rotation}deg)`
             }}
             alt=""
           />
        ))}
      </div>

      <div className="relative z-10">
        <Hero />
      </div>

      <main className="relative z-10">
        <AiConsultant />
        <BeautyTips />

        <section id="services" className="py-12 md:py-24 px-3 md:px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
             <div className="inline-block relative">
                 <span className="text-rose-500 font-semibold tracking-widest uppercase text-xs md:text-sm relative z-10">Sizin İçin En İyisi</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">Özel Hizmetlerimiz</h2>
            <div className="w-16 md:w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
            <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg px-2">
              İhtiyacınız olan tüm güzellik uygulamaları bir arada.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <Gallery />

        <section className="py-16 md:py-24 bg-rose-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -left-20"></div>
             <div className="absolute w-96 h-96 bg-rose-500 rounded-full blur-3xl bottom-0 right-0"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-serif mb-2 md:mb-4 flex items-center justify-center gap-3 text-white">
                 <span>⭐</span> Mutlu Danışanlarımız <span>⭐</span>
              </h2>
              <p className="text-rose-200 max-w-2xl mx-auto text-sm md:text-base">Güzellik yolculuğumuzda bize eşlik edenlerin gerçek hikayeleri.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col h-full relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-rose-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  
                  <div className="relative flex text-yellow-400 mb-4 scale-100">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="relative italic mb-6 text-rose-50 text-sm md:text-[15px] leading-relaxed flex-grow">
                    "{t.comment}"
                  </p>

                  <div className="relative flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-sm font-bold shrink-0 border border-white/30 shadow-inner">
                        {t.name.charAt(0)}
                     </div>
                     <div>
                        <p className="font-bold text-white text-sm md:text-base">{t.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-rose-300 font-semibold">Doğrulanmış Danışan</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;
