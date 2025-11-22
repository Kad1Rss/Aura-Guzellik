import React from 'react';
import { WHATSAPP_LINK, HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 flex items-center pt-4 md:pt-0">
      
      {/* Background Elements - Optimized for mobile to not block text */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-0 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <div className="inline-block px-4 py-1.5 mb-4 border border-rose-400 rounded-full bg-white/60 text-rose-800 font-bold tracking-widest text-[10px] md:text-sm uppercase animate-fade-in-up backdrop-blur-sm shadow-sm">
            Çerkezköy'ün Güzellik Üssü
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-rose-950 font-bold drop-shadow-sm mb-4 leading-[1.1] animate-fade-in-up delay-100">
            Aura <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">Güzellik Merkezi</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-700 font-medium mb-8 max-w-lg animate-fade-in-up delay-200 leading-relaxed px-2 md:px-0">
            Işıltınızla büyüleyin, Auranızı yükseltin. <br/>
            <span className="text-rose-800 font-bold mt-1 block">Uzman Hülya Sel Yönetiminde</span>
          </p>
          
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 animate-fade-in-up delay-300">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-rose-600 text-white font-semibold rounded-full shadow-xl hover:bg-rose-700 active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
            >
              <span>Hemen Randevu Al</span>
            </a>
            <button 
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm text-rose-900 font-semibold rounded-full shadow-lg hover:bg-white active:scale-95 transition-all border border-rose-200 text-center cursor-pointer"
            >
              Hizmetleri İncele
            </button>
          </div>
        </div>

        {/* Right: Main Photo */}
        <div className="w-full md:w-1/2 relative animate-fade-in-up delay-300 order-1 md:order-2 px-4 md:px-0">
           <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
             {/* Main Hero Image */}
             <img 
               src={HERO_IMAGE_URL} 
               alt="Uzman Hülya Sel ve Aura Güzellik Salonu" 
               className="w-full h-auto object-cover max-h-[400px] md:max-h-full md:min-h-[500px]"
             />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent pointer-events-none"></div>

             {/* Badge - Mobile Optimized (Minimized) */}
             <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-4 rounded-lg md:rounded-2xl shadow-lg border-l-2 md:border-l-4 border-rose-500 z-20">
                <p className="font-serif font-bold text-rose-900 text-sm md:text-xl leading-tight">Hülya Sel</p>
                <p className="text-[8px] md:text-xs text-rose-500 uppercase tracking-wider font-bold leading-tight">Kurucu & Uzman</p>
             </div>
           </div>

           {/* Decorative background circle */}
           <div className="absolute -inset-2 md:-inset-4 bg-rose-200/50 rounded-[2.5rem] -z-10 transform md:-rotate-2 scale-105 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;