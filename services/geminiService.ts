
import { GoogleGenAI } from "@google/genai";
import { ConsultantMessage } from "../types";

let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (ai) return ai;

  let apiKey = '';
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      apiKey = import.meta.env.VITE_API_KEY;
    }
  } catch (e) {}

  if (!apiKey) {
    try {
      if (typeof process !== 'undefined' && process.env) {
        apiKey = process.env.API_KEY || '';
      }
    } catch (e) {}
  }

  if (!apiKey) {
    console.error("API Anahtarı Bulunamadı!");
    return null;
  }

  ai = new GoogleGenAI({ apiKey: apiKey });
  return ai;
};

export const getBeautyAdvice = async (history: ConsultantMessage[]): Promise<string> => {
  try {
    const client = getAiClient();
    if (!client) return "Hülya Hanım WhatsApp'ta seni bekliyor 📞 0546 618 30 62";

    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const turnCount = history.filter(m => m.role === 'user').length;

    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `Sen Aura Güzellik Merkezi'nin samimi ve uzman asistanısın. Mobil kullanıcılar için kısa, öz ve etkili konuşmalısın.

        TEMEL KURALLAR:
        1. CEVAP BOYUTU: Cevapların çok kısa olmalı. Mobil ekranda tek seferde okunabilmeli. Gereksiz cümle kurma.
        2. FİYAT YASAKTIR: Fiyat sorulursa "İşleme göre değişiyor canım ✨" de ve konuyu değiştir.
        3. SORU SOR: Kullanıcıya her zaman bir soru yönelt (Örn: "Daha önce yaptırdın mı?", "Hangi bölgeyi düşünüyorsun 🌸?").
        4. EMOJİ: Sadece kelime aralarında 1-2 tane ilgili emoji kullan.
        5. RANDEVU: Randevu linkini sadece fiyat sorulursa veya 4. mesajdan sonra paylaş. Hülya Hanım vurgusunu yap.
        6. ÜSLUP: Samimi ol ama "Sefalar getirdin" gibi ağır ifadeler kullanma. "Merhaba canım" yeterli.

        İLETİŞİM:
        📲 WhatsApp & Hülya Hanım: https://api.whatsapp.com/send/?phone=905466183062&text=Merhaba%20randevu%20istiyorum`,
        thinkingConfig: { thinkingBudget: 0 }, 
      },
    });

    return response.text || "WhatsApp'tan bize ulaşabilirsin 📞 0546 618 30 62";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "WhatsApp'tan yazarsan hemen yardımcı oluruz 📞 0546 618 30 62";
  }
};
