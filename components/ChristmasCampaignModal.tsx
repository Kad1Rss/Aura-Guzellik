import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

interface ChristmasCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const campaigns = [
  {
    id: 1,
    title: "Protez Tırnak Fırsatı",
    desc: "Tek Kişi Protez Tırnak: Yeni yıla bakımlı tırnaklarla girin! Protez tırnak hizmetimiz 800 TL'den başlayan fiyatlarla.",
    icon: "💅",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    id: 2,
    title: "Keratin Bakım Paketi",
    desc: "Keratin Bakım Yaptırın, Kesim ve Kaş/Bıyık Bizden Olsun! Keratin bakımınızın yanında, saç kesimi ile kaş ve bıyık alımı ücretsiz hediyemizdir.",
    icon: "💇‍♀️",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    id: 3,
    title: "Cilt Bakımı Paketi",
    desc: "Cilt Bakımı Yaptırın, Ekstra Hediye Kazanın! Cilt bakımı seansınızın ardından kaş, bıyık alımı ve fön hizmeti bizden size hediye!",
    icon: "✨",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  {
    id: 4,
    title: "Yarı Fiyatına Lüks İşlem",
    desc: "Yılın Fırsatı: 2000 TL Değerindeki İşlem Sadece 1000 TL! Seçtiğiniz bir lüks hizmeti yarı fiyatına sunuyoruz.",
    icon: "💎",
    bg: "bg-gold-50",
    border: "border-gold-400",
  }
];

const ChristmasCampaignModal: React.FC<ChristmasCampaignModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsappClick = (campaignTitle: string) => {
    const message = `Merhaba, "${campaignTitle}" fırsatından yararlanmak ve randevu almak istiyorum. 🎄✨`;
    const url = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* 
         BOTTOM SHEET CONTAINER 
      */}
      <div className="relative bg-white w-full md:max-w-4xl rounded-t-3xl rounded-b-none md:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] overflow-hidden animate-slide-up md:animate-fade-in-up border-t-4 md:border-4 border-gold-500/30 max-h-[90vh] flex flex-col">
        
        {/* Header Section */}
        <div className="bg-gradient-to-br from-rose-900 via-red-700 to-rose-800 p-5 md:p-6 text-center relative shrink-0">
           {/* Close Button */}
           <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white hover:text-red-900 rounded-full p-2 transition-all z-20 backdrop-blur-md"
              aria-label="Kapat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

           <div className="inline-block px-3 py-1 bg-gold-400 text-red-950 font-bold font-sans rounded-full text-[10px] md:text-xs mb-3 shadow-lg animate-pulse">
              ✨ İÇERİĞİMİZLE İLGİLENDİĞİNİ GÖRDÜK!
           </div>
           
           <h2 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight drop-shadow-md">
             YENİ YIL FIRSATLARI <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-yellow-200">BAŞLADI!</span>
           </h2>
           <p className="text-rose-100 text-xs md:text-sm mt-2 max-w-lg mx-auto opacity-90">
             Sınırlı süre için geçerli hediyeli paketlerimizi kaçırmayın.
           </p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 md:p-6 bg-white hide-scrollbar flex-grow">
          <div className="grid grid-cols-1 gap-4">
            {campaigns.map((camp) => (
              <div 
                key={camp.id} 
                className={`group relative p-4 rounded-2xl border ${camp.border} ${camp.bg} flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:shadow-lg transition-all duration-300`}
              >
                {/* Icon */}
                <div className="text-4xl shrink-0 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                   {camp.icon}
                </div>
                
                {/* Content */}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{camp.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 sm:mb-0">
                    {camp.desc}
                  </p>
                </div>

                {/* WhatsApp Button - Aligned Opposite/Bottom */}
                <button 
                  onClick={() => handleWhatsappClick(camp.title)}
                  className="w-full sm:w-auto shrink-0 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 min-w-[140px]"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                   </svg>
                   Randevu Al
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer / Dismiss Action */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center shrink-0 safe-area-bottom">
           <button 
              onClick={onClose}
              className="w-full text-gray-400 text-xs md:text-sm font-medium hover:text-gray-600 transition-colors py-2 underline decoration-gray-300 underline-offset-4"
           >
              Teşekkürler, şimdilik düşünmüyorum
           </button>
        </div>

      </div>
    </div>
  );
};

export default ChristmasCampaignModal;