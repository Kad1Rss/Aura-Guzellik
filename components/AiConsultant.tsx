
import React, { useState, useRef, useEffect } from 'react';
import { getBeautyAdvice } from '../services/geminiService';
import { ConsultantMessage } from '../types';

const AVATAR_IMAGE_URL = "https://cdn-icons-png.flaticon.com/512/11498/11498793.png"; 

const AiConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayQuestions, setDisplayQuestions] = useState<string[]>([]);
  const [messages, setMessages] = useState<ConsultantMessage[]>([
    { 
      role: 'model', 
      text: 'Merhaba canım, Aura Güzellik Merkezi asistan paneline hoş geldin. Bugün senin güzelliğin için neler yapabiliriz? Merak ettiğin her şeyi bana sorabilirsin.' 
    }
  ]);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Sizin belirttiğiniz profesyonel soru seti
  const questionPool = [
    "Lazer epilasyon işlemi kaç seansta kesin sonuç verir?",
    "Cilt bakımı sonrası sivilcelenme olması normal midir?",
    "Microblading (kalıcı kaş) işlemi zamanla renk değiştirir mi?",
    "Protez tırnak kullanımı kendi tırnağımın hava almasını engeller mi?",
    "Yazın lazer epilasyon yaptırmak ciltte leke bırakır mı?",
    "Bölgesel incelme işlemleri spor yapmadan tek başına etkili olur mu?",
    "Kirpik lifting işlemi ne kadar süre boyunca etkisini korur?",
    "Hamilelik ve emzirme döneminde hangi güzellik işlemleri güvenlidir?",
    "Kaş laminasyonu işlemi kaş kıllarının dökülmesine neden olur mu?",
    "İpek kirpik uygulaması doğal kirpiklere zarar verir mi?"
  ];

  useEffect(() => {
    // 10 sorunun tamamını gösteriyoruz
    setDisplayQuestions([...questionPool]);
  }, []);

  const handleAsk = async (e?: React.FormEvent, overrideQuery?: string) => {
    if (e) e.preventDefault();
    
    const textToSend = overrideQuery || query;
    if (!textToSend.trim() || loading) return;

    const newUserMessage: ConsultantMessage = { role: 'user', text: textToSend };
    const currentMessages = [...messages, newUserMessage];
    
    setQuery('');
    setMessages(currentMessages);
    
    setLoading(true);
    const advice = await getBeautyAdvice(currentMessages);
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setLoading(false);
  };

  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => part.match(urlRegex) ? (
      <a key={`link-${i}`} href={part} target="_blank" rel="noopener noreferrer" className="text-white font-bold inline-flex items-center gap-2 py-2 px-6 bg-rose-600 rounded-full my-2 shadow-md text-xs md:text-sm">
         📅 Randevu & Bilgi Al
      </a>
    ) : <span key={`text-${i}`}>{part}</span>);
  };

  return (
    <section className="py-8 md:py-24 bg-rose-50/10 w-full overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-2 md:px-6">
        
        <div className="w-full text-center mb-6">
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Aura Uzman Asistan</h2>
        </div>

        <div className="w-full bg-white rounded-[1.5rem] md:rounded-[3rem] border border-rose-100 flex flex-col h-[500px] md:h-[700px] shadow-xl overflow-hidden relative">
          
          <div className="bg-white border-b border-rose-50 p-4 md:p-6 flex items-center gap-4">
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 p-1 border border-rose-100 overflow-hidden">
                <img src={AVATAR_IMAGE_URL} alt="Avatar" className="w-full h-full object-cover" />
             </div>
             <div>
                <h3 className="text-gray-900 font-bold text-sm md:text-lg">Canlı Güzellik Danışmanı</h3>
                <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Çevrimiçi</span>
             </div>
          </div>

          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 bg-white hide-scrollbar scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] md:text-[16px] ${msg.role === 'user' ? 'bg-rose-600 text-white' : 'bg-rose-50/60 text-gray-800'}`}>
                  {renderMessageText(msg.text)}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-rose-400 font-bold italic animate-pulse">Uzmanımız yazıyor...</div>}
          </div>

          {/* Kaydırılabilir Soru Önerileri - Mobil Optimizasyonlu */}
          <div className="px-4 py-3 bg-gray-50/50 border-t border-rose-50 overflow-x-auto whitespace-nowrap hide-scrollbar flex gap-2">
            {displayQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(undefined, q)}
                disabled={loading}
                className="inline-flex items-center justify-center px-3 py-2 bg-white text-rose-900 rounded-xl text-[10px] md:text-sm font-medium border border-rose-100 hover:border-rose-300 transition-all shrink-0 shadow-sm w-[135px] md:w-auto h-auto text-center leading-[1.2] whitespace-normal"
              >
                {q}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => handleAsk(e)} className="p-4 md:p-8 bg-white border-t border-rose-50">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buraya bir şey yaz..."
                className="w-full pl-4 pr-12 py-3 md:py-4 rounded-full bg-gray-50 border-0 focus:ring-1 focus:ring-rose-200 text-sm md:text-base outline-none"
              />
              <button 
                type="submit"
                disabled={loading || !query.trim()}
                className="absolute right-2 p-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 disabled:bg-gray-200 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;
