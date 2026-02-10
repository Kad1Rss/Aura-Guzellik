
import { GoogleGenAI } from "@google/genai";
import { ConsultantMessage } from "../types";

export const getBeautyAdvice = async (history: ConsultantMessage[]): Promise<string> => {
  try {
    // En güncel SDK başlatma standardı
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Güzellik merkezi asistanı için optimize edilmiş içerik üretimi
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `Sen Aura Güzellik Merkezi'nin samimi ve uzman asistanısın. Mobil kullanıcılar için kısa, öz ve etkili konuşmalısın.

        TEMEL KURALLAR:
        1. CEVAP BOYUTU: Cevapların çok kısa olmalı. Mobil ekranda tek seferde okunabilmeli.
        2. FİYAT YASAKTIR: Fiyat sorulursa "İşleme göre değişiyor canım ✨" de ve konuyu değiştir.
        3. SORU SOR: Kullanıcıya her zaman bir soru yönelt (Örn: "Daha önce yaptırdın mı?").
        4. EMOJİ: Samimiyet için 1-2 emoji kullan.
        5. RANDEVU: Randevu ve Hülya Hanım vurgusunu yap.
        6. ÜSLUP: "Merhaba canım" gibi sıcak bir ton kullan.

        İLETİŞİM:
        📲 WhatsApp & Hülya Hanım: https://api.whatsapp.com/send/?phone=905466183062&text=Merhaba%20randevu%20istiyorum`,
        thinkingConfig: { thinkingBudget: 0 }, 
      },
    });

    return response.text || "Şu an bağlantıda bir yoğunluk var, doğrudan Hülya Hanım'a yazabilirsin 📞 0546 618 30 62";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Küçük bir teknik aksaklık oldu ama Hülya Hanım WhatsApp'ta seni bekliyor 📞 0546 618 30 62";
  }
};
