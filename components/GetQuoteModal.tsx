import React, { useState } from 'react';
import { SERVICES, EMAIL_ADDRESS, WHATSAPP_LINK } from '../constants';

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // FormSubmit için en güvenilir yöntem: JSON Payload + Headers
    const payload = {
      // Veriler
      İsim_Soyisim: formData.name,
      Telefon: formData.phone,
      İşlem: formData.service,
      Notlar: formData.description,
      
      // Ayarlar
      _subject: `🔔 Aura Randevu Talebi: ${formData.name}`,
      _template: "table",
      _captcha: "false", // Robot doğrulamayı kapat
      _honey: "", // Spam bot tuzağı (boş kalmalı)
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_ADDRESS}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        // 5 saniye sonra kapat, kullanıcı mesajı okusun
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', phone: '', service: '', description: '' });
        }, 5000); 
      } else {
        console.error("FormSubmit hatası:", response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={status === 'success' ? onClose : undefined}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        {status !== 'success' && (
          <div className="bg-gradient-to-r from-gold-500 to-yellow-600 p-6 relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-serif font-bold text-white text-center">Fiyat Teklifi Al</h3>
            <p className="text-white/90 text-center text-sm mt-1">Bilgilerinizi bırakın, size özel fiyatı iletelim.</p>
          </div>
        )}

        {/* SUCCESS STATE */}
        {status === 'success' && (
          <div className="p-8 flex flex-col items-center justify-center text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Başarıyla Gönderildi! 🎉</h3>
            <p className="text-gray-600 text-sm mb-4">
              Talebiniz bize ulaştı. <strong>{formData.phone}</strong> numarasından en kısa sürede dönüş yapacağız.
            </p>
            
            <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-3 text-left">
              <div className="flex gap-2">
                <span className="text-xl">ℹ️</span>
                <p className="text-xs text-blue-800">
                  <strong>Site Sahibi Dikkatine:</strong> İlk test gönderiminde mail kutunuzdaki (Spam/Gereksiz dahil) <u>"Activate FormSubmit"</u> mailini onaylamayı unutmayınız.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FORM STATE */}
        {(status === 'idle' || status === 'sending' || status === 'error') && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 relative">
            
            {/* Loading Overlay */}
            {status === 'sending' && (
              <div className="absolute inset-0 bg-white/80 z-10 flex flex-col items-center justify-center rounded-b-2xl">
                <div className="w-10 h-10 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin mb-2"></div>
                <p className="text-rose-600 font-bold animate-pulse">İletiliyor...</p>
              </div>
            )}

            {/* Error Message with WhatsApp Fallback */}
            {status === 'error' && (
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                   <span className="text-xl">⚠️</span>
                   <span>Bağlantı sorunu oluştu.</span>
                 </div>
                 <p className="text-xs text-red-500">
                   Sistemde yoğunluk olabilir. Lütfen WhatsApp üzerinden yazın:
                 </p>
                 <a 
                   href={WHATSAPP_LINK} 
                   target="_blank" 
                   rel="noreferrer"
                   className="mt-1 w-full py-2 bg-green-500 text-white rounded text-sm font-bold flex items-center justify-center gap-2 hover:bg-green-600"
                 >
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                   WhatsApp'tan Yaz
                 </a>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all bg-gray-50"
                placeholder="Örn: Ayşe Yılmaz"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon Numarası</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all bg-gray-50"
                placeholder="Örn: 0555 123 45 67"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">İlgilendiğiniz İşlem</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all bg-gray-50"
                value={formData.service}
                onChange={handleChange}
                disabled={status === 'sending'}
              >
                <option value="">İşlem Seçiniz...</option>
                {SERVICES.map(service => (
                  <option key={service.id} value={service.title}>{service.title}</option>
                ))}
                <option value="Diğer">Diğer / Bilmiyorum</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Notunuz / Açıklama</label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all bg-gray-50 resize-none"
                placeholder="Örn: Haftasonu gelmeyi düşünüyorum, yüzümde sivilce lekeleri var..."
                value={formData.description}
                onChange={handleChange}
                disabled={status === 'sending'}
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-gradient-to-r from-gold-500 to-yellow-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-gold-600 hover:to-yellow-700 transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>Fiyat Teklifi İste</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                *Bilgileriniz sadece size ulaşmak için kullanılacaktır.
              </p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default GetQuoteModal;