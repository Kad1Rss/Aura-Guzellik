import React from 'react';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER_DISPLAY, GOOGLE_MAPS_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info & CTA */}
          <div className="lg:w-1/3 p-10 flex flex-col justify-center bg-gradient-to-br from-rose-900 to-rose-800 text-white">
            <h2 className="text-3xl font-serif font-bold mb-6">İletişime Geçin</h2>
            <p className="text-rose-100 mb-8 leading-relaxed">
              Güzelliğinize değer katmak için buradayız. Ücretsiz ön görüşme ve randevu için bize ulaşın veya doğrudan salonumuzu ziyaret edin.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-rose-700 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adres</h4>
                  <a 
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noreferrer" 
                    className="text-rose-200 text-sm hover:text-white hover:underline transition-colors block mt-1"
                  >
                    KIZILPINAR ATATÜRK MAH.<br/>GARAJ SK. NO: 5 D<br/>59500 Çerkezköy/Tekirdağ
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-700 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefon & WhatsApp</h4>
                  <p className="text-rose-200 text-sm">
                    <a href={PHONE_LINK} className="hover:underline hover:text-white transition-colors">
                      {PHONE_NUMBER_DISPLAY}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-white text-rose-900 font-bold rounded-xl text-center hover:bg-rose-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Randevu Oluştur
            </a>
          </div>

          {/* Map - Location Locked */}
          <div className="lg:w-2/3 relative h-[400px] lg:h-auto bg-gray-200">
             <iframe 
               src="https://maps.google.com/maps?q=KIZILPINAR+ATATÜRK+MAH.+GARAJ+SK.+NO:+5+D,+59500+Çerkezköy/Tekirdağ&t=&z=15&ie=UTF8&iwloc=&output=embed"
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy"
               title="Aura Güzellik Merkezi Konum"
               className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <a 
               href={GOOGLE_MAPS_LINK}
               target="_blank" 
               rel="noreferrer"
               className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-xs font-bold text-gray-700 hover:text-rose-600 transition-colors flex items-center gap-2"
             >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               Haritada Aç
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;