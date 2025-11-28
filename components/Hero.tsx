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
    <section className="relative min-h-[75vh] md:min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 flex items-center pt-2 md:pt-0">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 md:py-0 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <div className="inline-block px-3 py-1 mb-2 md:mb-4 border border-rose-400 rounded-full bg-white/60 text-rose-800 font-bold tracking-widest text-[10px] md:text-sm uppercase animate-fade-in-up backdrop-blur-sm shadow-sm">
            Çerkezköy'ün Güzellik Üssü
          </div>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-rose-950 font-bold drop-shadow-sm mb-2 md:mb-4 leading-[1.1] animate-fade-in-up delay-100">
            Aura <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">Güzellik Merkezi</span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-700 font-medium mb-6 md:mb-8 max-w-lg animate-fade-in-up delay-200 leading-relaxed px-2 md:px-0">
            Işıltınızla büyüleyin, Auranızı yükseltin. <br/>
            <span className="text-rose-800 font-bold mt-1 block">Uzman Hülya Sel Yönetiminde</span>
          </p>
          
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 md:gap-3 animate-fade-in-up delay-300 px-4 md:px-0">
            {/* Randevu Al Button - Main CTA with Pulse Animation */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white font-bold rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-base md:text-lg animate-pulse ring-2 ring-rose-200 ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Randevu Al</span>
            </a>
            
            <button 
              onClick={scrollToServices}
              className="w-full sm:w-auto px-6 py-3 bg-white/80 backdrop-blur-sm text-rose-900 font-semibold rounded-full shadow-lg hover:bg-white active:scale-95 transition-all border border-rose-200 text-center cursor-pointer text-base md:text-lg sm:mt-0 mt-1"
            >
              Hizmetleri İncele
            </button>
          </div>
        </div>

        {/* Right: Main Photo */}
        <div className="w-full md:w-1/2 relative animate-fade-in-up delay-300 order-1 md:order-2 px-6 md:px-0">
           <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-4 md:border-8 border-white">
             {/* Main Hero Image */}
             <img 
               src={HERO_IMAGE_URL} 
               alt="Uzman Hülya Sel ve Aura Güzellik Salonu" 
               className="w-full h-[250px] md:h-auto object-cover object-center md:min-h-[500px]"
             />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent pointer-events-none"></div>

             {/* Badge */}
             <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-4 rounded-lg md:rounded-2xl shadow-lg border-l-2 md:border-l-4 border-rose-500 z-20">
                <p className="font-serif font-bold text-rose-900 text-sm md:text-xl leading-tight">Hülya Sel</p>
                <p className="text-[8px] md:text-xs text-rose-500 uppercase tracking-wider font-bold leading-tight">Kurucu & Uzman</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;