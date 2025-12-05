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
    subtitle: "Yeni Yıla Işıl Işıl Girin",
    price: "800 TL'den Başlıyor",
    desc: "Tek Kişi Protez Tırnak: Yeni yıla bakımlı tırnaklarla girin! Protez tırnak hizmetimiz 800 TL'den başlayan fiyatlarla.",
    icon: "💅",
    bg: "bg-red-50",
    border: "border-red-200",
    btn: "bg-red-600 hover:bg-red-700"
  },
  {
    id: 2,
    title: "Keratin Bakım Paketi",
    subtitle: "Kesim & Kaş Bıyık HEDİYE!",
    price: "Komple Bakım Fırsatı",
    desc: "Keratin Bakım Yaptırın, Kesim ve Kaş/Bıyık Bizden Olsun! Keratin bakımınızın yanında, saç kesimi ile kaş ve bıyık alımı ücretsiz hediyemizdir.",
    icon: "💇‍♀️",
    bg: "bg-green-50",
    border: "border-green-200",
    btn: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 3,
    title: "Cilt Bakımı Paketi",
    subtitle: "Ekstra Hediye Kazanın!",
    price: "Canlanmış Bir Cilt",
    desc: "Cilt Bakımı Yaptırın, Ekstra Hediye Kazanın! Cilt bakımı seansınızın ardından kaş, bıyık alımı ve fön hizmeti bizden size hediye!",
    icon: "✨",
    bg: "bg-rose-50",
    border: "border-rose-200",
    btn: "bg-rose-600 hover:bg-rose-700"
  },
  {
    id: 4,
    title: "Yarı Fiyatına Lüks İşlem",
    subtitle: "Yılın En Büyük İndirimi",
    price: "2000 TL Yerine 1000 TL!",
    desc: "Yılın Fırsatı: 2000 TL Değerindeki İşlem Sadece 1000 TL! Seçtiğiniz bir lüks hizmeti (örneğin ombre/microblading/saç kaynağı) yarı fiyatına sunuyoruz.",
    icon: "💎",
    bg: "bg-gold-50",
    border: "border-gold-400",
    btn: "bg-gold-600 hover:bg-gold-700"
  }
];

const ChristmasCampaignModal: React.FC<ChristmasCampaignModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsappClick = (campaignTitle: string) => {
    const message = `Merhaba, Yılbaşına özel "${campaignTitle}" kampanyanızdan yararlanmak ve randevu almak istiyorum. 🎄✨`;
    const url = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with snow effect blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Decorative Lights Top */}
      <div className="fixed top-0 left-0 right-0 h-12 z-[101] pointer-events-none flex justify-center space-x-8 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full shadow-[0_0_10px_2px] animate-pulse ${i % 2 === 0 ? 'bg-red-500 shadow-red-500' : 'bg-green-500 shadow-green-500'} mt-[-5px]`}></div>
        ))}
      </div>

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden animate-fade-in-up border-4 border-gold-500/30 max-h-[90vh] flex flex-col">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 p-6 md:p-8 text-center relative overflow-hidden shrink-0">
           {/* Snowflakes in header */}
           <div className="absolute top-0 left-0 text-4xl opacity-20 animate-spin-slow">❄️</div>
           <div className="absolute bottom-0 right-0 text-5xl opacity-20 animate-bounce">🎄</div>

           <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white hover:text-red-700 rounded-full p-2 transition-all z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

           <div className="inline-block px-4 py-1 bg-gold-500 text-red-900 font-bold font-sans rounded-full text-xs md:text-sm mb-3 shadow-lg animate-pulse">
              🎅 HO HO HO! YILBAŞI SÜRPRİZİ
           </div>
           {/* 'Ş' harfi düzeltmesi için font-sans eklendi (serif fontlarda büyük Ş bazen bozuk görünebilir) */}
           <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight tracking-wide">
             İKİLİ FIRSAT: ARKADAŞINI KAP GEL!
           </h2>
           <p className="text-red-100 text-sm md:text-lg max-w-2xl mx-auto font-medium">
             %40'a Varan Yılbaşı İndirimleri ve Sürpriz Hediyeler
           </p>
        </div>

        {/* Introduction Text */}
        <div className="p-4 md:p-6 bg-red-50 border-b border-red-100 text-center shrink-0">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            "Kardeşiniz, anneniz veya en iyi arkadaşınız fark etmez! Salonumuzda aynı anda 2 işlem yaptırın, toplam faturada <span className="font-bold text-red-600">%40'a varan özel yılbaşı indiriminden</span> hemen yararlanın. Kahveniz bizden. Sadece neye ihtiyacınız olduğunu belirlemek için bize ulaşın!" ☕🎁
          </p>
        </div>

        {/* Scrollable Campaigns Grid */}
        <div className="overflow-y-auto p-4 md:p-6 bg-white hide-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {campaigns.map((camp) => (
              <div key={camp.id} className={`relative p-5 rounded-2xl border-2 ${camp.border} ${camp.bg} flex flex-col hover:shadow-lg transition-shadow duration-300 group`}>
                <div className="absolute -top-3 -right-3 text-3xl group-hover:scale-125 transition-transform duration-300 drop-shadow-md">
                   {camp.icon}
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-1">{camp.title}</h3>
                <span className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2 block">{camp.subtitle}</span>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                  {camp.desc}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-200/50">
                   <div className="flex items-center justify-between">
                      <span className="font-bold text-lg text-gray-800">{camp.price}</span>
                      <button 
                        onClick={() => handleWhatsappClick(camp.title)}
                        className={`px-4 py-2 ${camp.btn} text-white rounded-lg font-bold text-sm shadow-md active:scale-95 transition-all flex items-center gap-2`}
                      >
                        Randevu Al 
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* FUN CLOSE BUTTON - BÜYÜTÜLDÜ VE BELİRGİNLEŞTİRİLDİ */}
          <div className="p-5 text-center border-t border-gray-100 bg-gray-50/50">
             <button 
                onClick={onClose}
                className="text-gray-600 text-sm md:text-base font-bold hover:text-red-600 transition-colors underline decoration-2 underline-offset-4 py-2 block w-full hover:bg-gray-100 rounded-lg"
             >
                Hayır, %40 indirimi ve kahve ikramını kaçırmak istiyorum 🥺
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChristmasCampaignModal;