import React from 'react';
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
  return (
    <div className="min-h-screen bg-rose-50 font-sans text-gray-800 selection:bg-rose-200 selection:text-rose-900">
      
      {/* Hero Bölümü */}
      <Hero />

      <main>
        {/* AI Consultant Section */}
        <AiConsultant />

        {/* New Beauty Tips Section */}
        <BeautyTips />

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 px-3 md:px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-rose-500 font-semibold tracking-widest uppercase text-xs md:text-sm">Sizin İçin En İyisi</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">Özel Hizmetlerimiz</h2>
            <div className="w-16 md:w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
            <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg px-2">
              İhtiyacınız olan tüm güzellik uygulamaları bir arada.
            </p>
          </div>

          {/* Mobile: Grid-cols-2 (side by side), Desktop: Grid-cols-4 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-rose-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -left-20"></div>
             <div className="absolute w-96 h-96 bg-rose-500 rounded-full blur-3xl bottom-0 right-0"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-serif mb-2 md:mb-4">Mutlu Danışanlarımız</h2>
              <p className="text-rose-200 max-w-2xl mx-auto text-sm md:text-base">Sizlerin mutluluğu bizim en büyük referansımız.</p>
            </div>
            
            {/* Mobile: Grid-cols-2 (Compact), Desktop: Grid-cols-3 */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white/10 backdrop-blur-md p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/20 transition-colors flex flex-col h-full">
                  <div className="flex text-yellow-400 mb-2 md:mb-4 scale-75 origin-left md:scale-100">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Line clamp to prevent uneven heights on mobile */}
                  <p className="italic mb-3 md:mb-6 text-rose-50 text-[11px] md:text-sm leading-relaxed flex-grow line-clamp-4 md:line-clamp-none">"{t.comment}"</p>
                  <div className="flex items-center gap-2 md:gap-3 mt-auto">
                     <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-rose-400 flex items-center justify-center text-[10px] md:text-xs font-bold shrink-0">
                        {t.name.charAt(0)}
                     </div>
                     <p className="font-bold text-white text-xs md:text-sm truncate">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <Contact />

      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;