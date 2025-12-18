
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
    desc: "Yeni sezona bakımlı tırnaklarla girin! Protez tırnak hizmetimiz 800 TL'den başlayan fiyatlarla sizi bekliyor.",
    icon: "💅",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  {
    id: 2,
    title: "Keratin Bakım Paketi",
    desc: "Keratin Bakım Yaptırın, Kesim ve Kaş/Bıyık Bizden Olsun! Saçlarınıza canlılık katarken hediyelerimizle şımartalım.",
    icon: "💇‍♀️",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    id: 3,
    title: "Cilt Bakımı Paketi",
    desc: "Cilt Bakımı Yaptırın, Ekstra Hediye Kazanın! Seans sonrasında fön ve kaş alımı ücretsiz hediyemizdir.",
    icon: "✨",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    id: 4,
    title: "Yarı Fiyatına Lüks İşlem",
    desc: "Özel Fırsat: 2000 TL Değerindeki Seçili İşlemler Sadece 1000 TL! Kendinize bir iyilik yapın.",
    icon: "💎",
    bg: "bg-purple-50",
    border: "border-purple-200",
  }
];

const ChristmasCampaignModal: React.FC<ChristmasCampaignModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsappClick = (campaignTitle: string) => {
    const message = `Merhaba, "${campaignTitle}" fırsatından yararlanmak ve bilgi almak istiyorum. ✨`;
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

      <div className="relative bg-white w-full md:max-w-4xl rounded-t-3xl rounded-b-none md:rounded-3xl shadow-2xl overflow-hidden animate-slide-up md:animate-fade-in-up border-t-4 border-rose-500 max-h-[90vh] flex flex-col">
        
        {/* Header Section */}
        <div className="bg-gradient-to-br from-rose-800 to-rose-700 p-6 text-center relative shrink-0">
           {/* Close Button */}
           <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/10 text-white hover:bg-white hover:text-rose-900 rounded-full p-2 transition-all z-20 backdrop-blur-md"
              aria-label="Kapat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

           <div className="inline-block px-4 py-1 bg-white text-rose-800 font-bold rounded-full text-xs mb-3 shadow-md uppercase tracking-wider">
              ✨ Senin İçin Seçtiklerimiz
           </div>
           
           <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
             GÜZELLİK FIRSATLARINI <br/>
             <span className="text-rose-200">KAÇIRMAYIN!</span>
           </h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 md:p-6 bg-white hide-scrollbar flex-grow">
          <div className="grid grid-cols-1 gap-4">
            {campaigns.map((camp) => (
              <div 
                key={camp.id} 
                className={`group relative p-4 rounded-2xl border ${camp.border} ${camp.bg} flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-3xl shrink-0 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                   {camp.icon}
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{camp.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3 sm:mb-0">
                    {camp.desc}
                  </p>
                </div>

                <button 
                  onClick={() => handleWhatsappClick(camp.title)}
                  className="w-full sm:w-auto shrink-0 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                   Randevu Al
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center shrink-0">
           <button 
              onClick={onClose}
              className="text-gray-400 text-xs font-medium hover:text-gray-600 transition-colors py-2"
           >
              Şimdilik kapat
           </button>
        </div>
      </div>
    </div>
  );
};

export default ChristmasCampaignModal;
