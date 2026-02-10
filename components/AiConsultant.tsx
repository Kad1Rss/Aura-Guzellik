
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
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const questionPool = [
    "Hülya Sel imzalı 'Aura Glow' bakımı nedir? ✨",
    "Cam cilt (Glass Skin) için hangi protokol uygun? 💎",
    "Acısız buz lazer ile yaza hazır mıyım? ❄️",
    "Somon DNA aşısı cildi gençleştirir mi? 🧬",
    "Dudak renklendirmede hangi tonlar trend? 💋",
    "Gıdı eritme ve çene hattı (Jawline) mümkün mü? 🪄",
    "İpek kirpik mi yoksa kirpik lifting mi yaptırmalıyım? 🦋",
    "Kaş laminasyonu ile doğal kalkık kaşlar ne kadar sürer? 👁️",
    "Bölgesel incelmede G5 masajı kaç seans önerilir? 📏",
    "Dermapen ile gözeneklerimden kurtulabilir miyim? 💉",
    "Düğün paketi hazırlıklarına ne zaman başlamalıyım? 👰",
    "Microblading sonrası bakım nasıl olmalı? 🎨",
    "Leke protokolü ile güneş lekelerinden kurtulur muyum? 🧪",
    "Hülya Hanım'ın en çok önerdiği cilt bakımı hangisi? 🤫",
    "Tırnak sanatında (Nail Art) bu sezon ne moda? 💅",
    "HydraFacial sonrası cildim ne kadar süre parlar? 💧"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    // Rastgele 6 soru seç
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    setDisplayQuestions(shuffled.slice(0, 6));
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleAsk = async (e?: React.FormEvent, overrideQuery?: string) => {
    if (e) e.preventDefault();
    
    const textToSend = overrideQuery || query;
    if (!textToSend.trim() || loading) return;

    const newUserMessage: ConsultantMessage = { role: 'user', text: textToSend };
    const currentMessages = [...messages, newUserMessage];
    
    setQuery('');
    setMessages(currentMessages);
    
    // Düşünme Efekti (Sanki soruyu okuyor gibi)
    const thinkingDelay = 1200; 

    setTimeout(async () => {
      setLoading(true);

      const advice = await getBeautyAdvice(currentMessages);
      
      const typingDuration = Math.max(1500, Math.min(3500, advice.length * 15));
      
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'model', text: advice }]);
        setLoading(false);
      }, typingDuration);

    }, thinkingDelay);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleAsk(undefined, suggestion);
  };

  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const phoneRegex = /(0546\s618\s30\s62)/g;

    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={`link-${i}`} href={part} target="_blank" rel="noopener noreferrer" className="text-white font-bold inline-flex items-center gap-2 py-3 px-8 bg-rose-600 rounded-full my-3 shadow-md text-sm md:text-base hover:bg-rose-700 transition-all transform hover:scale-105 active:scale-95">
             📅 Hemen Randevu Al & Bilgi İste
          </a>
        );
      } else {
        const subParts = part.split(phoneRegex);
        return (
          <span key={`text-${i}`}>
            {subParts.map((sub, j) => sub.match(phoneRegex) ? (
              <a key={j} href="tel:+905466183062" className="text-rose-600 font-bold underline"> {sub} </a>
            ) : sub)}
          </span>
        );
      }
    });
  };

  return (
    <section className="py-12 md:py-24 bg-rose-50/10 w-full overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6">
        
        <div className="w-full text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm border border-rose-100 mb-6">
             <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></div>
             <span className="text-rose-900 font-bold text-xs uppercase tracking-[0.2em]">Aura Uzman Hattı</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Size Nasıl Yardımcı Olabiliriz?</h2>
          <p className="text-gray-500 text-sm md:text-xl font-medium max-w-2xl mx-auto">Uzman Hülya Sel tecrübesiyle merak ettiğiniz tüm işlemleri yanıtlıyoruz.</p>
        </div>

        <div className="w-full bg-white rounded-[2rem] md:rounded-[3.5rem] border-2 md:border-4 border-rose-100 flex flex-col h-[550px] md:h-[750px] shadow-[0_30px_60px_-15px_rgba(255,228,230,0.6)] overflow-hidden relative">
          
          <div className="bg-white border-b border-rose-50 p-5 md:p-8 flex items-center justify-between z-10">
             <div className="flex items-center gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-rose-50 p-1 border-2 border-rose-100 shadow-sm overflow-hidden">
                   <img src={AVATAR_IMAGE_URL} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                   <h3 className="text-gray-900 font-bold text-lg md:text-2xl">Canlı Güzellik Danışmanı</h3>
                   <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${loading ? 'bg-orange-400 animate-pulse' : 'bg-green-500'}`}></span>
                      <span className="text-[10px] md:text-xs text-rose-400 font-bold uppercase tracking-widest">
                        {loading ? 'Şu an yazıyor...' : 'Çevrimiçi & Hazır'}
                      </span>
                   </div>
                </div>
             </div>
          </div>

          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-5 md:p-12 space-y-6 md:space-y-10 bg-white hide-scrollbar scroll-smooth relative"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div 
                  className={`max-w-[90%] md:max-w-[75%] p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] text-[16px] md:text-[19px] leading-relaxed shadow-sm transition-all ${
                    msg.role === 'user' 
                      ? 'bg-rose-600 text-white rounded-tr-none font-medium' 
                      : 'bg-rose-50/40 text-gray-800 border border-rose-100/50 rounded-tl-none font-medium'
                  }`}
                >
                  {renderMessageText(msg.text)}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start items-center gap-4 animate-fade-in-up pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 border border-rose-100 p-1 overflow-hidden shrink-0">
                  <img src={AVATAR_IMAGE_URL} alt="Yazıyor" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="bg-rose-50/50 px-6 py-4 rounded-3xl rounded-tl-none border border-rose-100 flex items-center gap-2">
                  <span className="text-xs md:text-sm font-bold text-rose-400 italic">Uzmanımız yazıyor</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-rose-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-rose-300 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-rose-300 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-2" />
          </div>

          {/* Soru Önerileri Alanı */}
          <div className="px-5 md:px-12 py-5 bg-white border-t border-rose-50 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <div className="flex gap-3 md:gap-4 pb-2">
              {displayQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(q)}
                  disabled={loading}
                  className="px-6 py-3 md:px-10 md:py-4 bg-white hover:bg-rose-50 text-rose-950 rounded-full text-[13px] md:text-[16px] font-bold border-2 border-rose-100 hover:border-rose-300 active:scale-95 transition-all shadow-md flex items-center gap-2 group shrink-0"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">✨</span>
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => handleAsk(e)} className="p-5 md:p-12 bg-white border-t border-rose-50 z-10">
            <div className="relative flex items-center gap-4 max-w-5xl mx-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buraya aklındakini yaz canım..."
                className="w-full pl-8 md:pl-10 pr-20 py-5 md:py-7 rounded-full bg-gray-50 border-2 border-transparent focus:border-rose-200 focus:bg-white transition-all text-[16px] md:text-xl outline-none text-gray-800 placeholder-gray-400 font-medium shadow-inner"
              />
              <button 
                type="submit"
                disabled={loading || !query.trim()}
                className="absolute right-3 md:right-4 p-4 md:p-5 bg-rose-600 text-white rounded-full hover:bg-rose-700 disabled:bg-gray-200 shadow-lg active:scale-90 transition-all flex items-center justify-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 text-center text-rose-300 font-semibold text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-4">
           <div className="h-px w-12 bg-rose-100"></div>
           Aura Güzellik | Profesyonel Bakım
           <div className="h-px w-12 bg-rose-100"></div>
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;
