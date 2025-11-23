import React, { useState, useRef, useEffect } from 'react';
import { getBeautyAdvice } from '../services/geminiService';
import { ConsultantMessage } from '../types';

// Avatar resmi: Uzun saçlı, gözlüklü, beyaz önlüklü NET KADIN doktor görseli
const AVATAR_IMAGE_URL = "https://cdn-icons-png.flaticon.com/512/11498/11498793.png"; 

const AiConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayQuestions, setDisplayQuestions] = useState<string[]>([]);
  const [messages, setMessages] = useState<ConsultantMessage[]>([
    { 
      role: 'model', 
      text: 'Selam güzellik! 🌸 Ben Aura. Hülya Hanım\'ın 20 yıllık tecrübesiyle seni dinlemek için buradayım. Cildin, bakım rutinlerin veya işlemlerimiz hakkında aklına ne takılırsa, çekinme sor. Sanki kız kıza kahve içiyormuşuz gibi dertleşelim! ☕✨' 
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Kadınların cevabını gerçekten merak ettiği spesifik sorular
  const questionPool = [
    "Regl öncesi sivilcelerim coştu, ne yapmalıyım? 🆘",
    "Yüzümü jiletle alırsam tüylerim sakal gibi mi çıkar? 🪒",
    "Bacaklarımdaki çilek görünümünden nasıl kurtulurum? 🍓",
    "Kalıcı oje tırnaklarımı çok inceltti, nasıl toparlar? 💅",
    "Göz altı morluklarım için evde yapabileceğim bir şey var mı? 🐼",
    "Dudak dolgusu yaptırmadan dudaklarımı dolgun gösterebilir miyim? 💋"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Bileşen yüklendiğinde havuzdan rastgele 4-6 soru seç
  useEffect(() => {
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    // 4 ile 6 arasında rastgele sayıda soru göster
    const count = Math.floor(Math.random() * 3) + 4; 
    setDisplayQuestions(shuffled.slice(0, count));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAsk = async (e?: React.FormEvent, overrideQuery?: string) => {
    if (e) e.preventDefault();
    
    const textToSend = overrideQuery || query;
    if (!textToSend.trim() || loading) return;

    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setLoading(true);

    const advice = await getBeautyAdvice(textToSend);
    
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setLoading(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleAsk(undefined, suggestion);
  };

  // Helper function to detect links and bold text
  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const boldRegex = /\*\*(.*?)\*\*/g;

    const partsWithLinks = text.split(urlRegex);

    return partsWithLinks.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={`link-${i}`} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all font-bold inline-block py-1">
            {part.includes('whatsapp') ? '📲 WhatsApp Hattımız' : part.includes('instagram') ? '📸 Instagram Sayfamız' : 'Bağlantı'}
          </a>
        );
      } else {
        const partsWithBold = part.split(boldRegex);
        return (
            <span key={`text-${i}`}>
                {partsWithBold.map((subPart, j) => {
                    if (j % 2 === 1) {
                        return <strong key={`bold-${i}-${j}`} className="font-extrabold text-rose-800 bg-rose-50 px-1 rounded">{subPart}</strong>;
                    }
                    return subPart;
                })}
            </span>
        );
      }
    });
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
       {/* Decorative Element */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Text & Suggestions */}
        <div className="flex-1 space-y-6 lg:sticky lg:top-24 w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
              Online Danışman
            </div>
            <div className="flex items-center gap-4 mb-3">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
                 Aura Asistanı
               </h2>
               {/* Avatar Image */}
               <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                 <img 
                   src={AVATAR_IMAGE_URL} 
                   alt="Aura Uzman Asistanı" 
                   className="relative w-20 h-20 md:w-24 md:h-24 object-cover drop-shadow-xl hover:scale-105 transition-transform duration-300"
                 />
                 <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white w-5 h-5 rounded-full animate-pulse"></div>
               </div>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Hülya Hanım’ın 20 yıllık tecrübesi, şimdi parmaklarınızın ucunda! Aklınıza takılan her şeyi, en yakın arkadaşınıza sorar gibi sorabilirsiniz. Biz bizeyiz, çekinmek yok! 🤫💖
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-rose-100">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm md:text-base">
              <span className="text-xl">💡</span>
              Kız Kıza Konuşalım:
            </h4>
            {/* Mobile optimized: Stacks vertically on mobile, wraps on desktop. No hidden scrollbar. */}
            <div className="grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap">
              {displayQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(q)}
                  disabled={loading}
                  className="w-full sm:w-auto px-4 py-3 bg-rose-50 hover:bg-rose-500 hover:text-white text-rose-900 rounded-xl text-sm font-medium transition-all duration-200 border border-rose-100 shadow-sm text-left active:scale-95 flex items-center gap-2"
                >
                  <span className="text-lg shrink-0">💬</span>
                  <span>{q}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Chat Interface */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-rose-100 overflow-hidden flex flex-col h-[500px] md:h-[600px] relative">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-md z-10">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-rose-200 flex items-center justify-center overflow-hidden p-1">
                  <img src={AVATAR_IMAGE_URL} alt="Asistan" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-base md:text-lg flex items-center gap-2">
                  Aura Asistanı
                </h3>
                <p className="text-xs text-rose-100 opacity-90">Güzellik & Bakım Sırdaşınız</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[90%] p-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-rose-600 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                    }`}
                  >
                    {renderMessageText(msg.text)}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-200 flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-semibold">Yazıyor...</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Mobile Optimized Touch Targets */}
            <form onSubmit={(e) => handleAsk(e)} className="p-3 md:p-4 bg-white border-t border-gray-100 pb-safe">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Aklındaki soruyu sor..."
                  className="w-full pl-5 pr-4 py-3.5 rounded-full bg-gray-100 border-0 focus:ring-2 focus:ring-rose-500 transition-all text-gray-800 placeholder-gray-400"
                />
                <button 
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="p-3.5 bg-rose-600 text-white rounded-full hover:bg-rose-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;