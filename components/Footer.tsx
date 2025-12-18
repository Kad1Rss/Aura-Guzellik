
import React from 'react';
import { INSTAGRAM_LINK, WHATSAPP_LINK, PHONE_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-950 text-rose-100 pt-0 pb-16 relative">
      
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#881337"></path>
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-rose-800/50 pb-12">
          
          <div className="md:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-white mb-6 relative inline-block">
               Aura
            </h3>
            <p className="text-rose-200/80 leading-relaxed text-sm mb-6">
              Çerkezköy'ün en kapsamlı güzellik merkezi. Uzman Hülya Sel ve deneyimli ekibi ile güzelliğinize profesyonel dokunuşlar yapıyoruz.
            </p>
            <div className="flex gap-4">
               <a 
                 href={INSTAGRAM_LINK} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-rose-700 transition-colors text-white" 
                 aria-label="Instagram'da Takip Et"
                 title="Instagram'da Takip Et"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
               <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors text-white" aria-label="WhatsApp">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
               </a>
               <a href={PHONE_LINK} className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors text-white" aria-label="Telefonla Ara">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3 text-rose-200/80">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Ana Sayfa</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Hizmetlerimiz</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Güzellik Sırları</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-white hover:translate-x-1 transition-all inline-block">İletişim</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 bg-rose-900/50 p-6 rounded-2xl relative overflow-hidden border border-rose-800/30">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>

            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               Çalışma Saatlerimiz
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-rose-200/90 text-sm md:text-base relative z-10">
               <div className="flex justify-between items-center border-b border-rose-800/50 pb-2"><span>Pazartesi</span> <span className="font-medium tracking-wide">09:00 - 22:00</span></div>
               <div className="flex justify-between items-center border-b border-rose-800/50 pb-2"><span>Salı</span> <span className="font-medium tracking-wide">09:00 - 22:00</span></div>
               <div className="flex justify-between items-center border-b border-rose-800/50 pb-2 opacity-75"><span>Çarşamba</span> <span className="font-bold tracking-wide text-rose-400">KAPALI</span></div>
               <div className="flex justify-between items-center border-b border-rose-800/50 pb-2"><span>Perşembe</span> <span className="font-medium tracking-wide">09:00 - 22:00</span></div>
               <div className="flex justify-between items-center border-b border-rose-800/50 pb-2"><span>Cuma</span> <span className="font-medium tracking-wide">09:00 - 22:00</span></div>
               <div className="flex justify-between items-center border-b border-rose-800/50 pb-2"><span>Cumartesi</span> <span className="font-medium tracking-wide">09:00 - 22:00</span></div>
               <div className="flex justify-between items-center md:col-span-2 font-bold text-white mt-2 bg-rose-800/50 p-3 rounded-lg border border-rose-700/50">
                  <span>Pazar</span> 
                  <span className="font-medium tracking-wide">10:00 - 18:00</span>
               </div>
            </div>
          </div>

        </div>
        
        <div className="text-center text-sm text-rose-200/40">
          <p>&copy; {new Date().getFullYear()} Aura Güzellik Merkezi - Hülya Sel. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
