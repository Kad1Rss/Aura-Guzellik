import { GoogleGenAI } from "@google/genai";

// İstemciyi (Client) global değil, ihtiyaç duyulduğunda oluşturmak için değişken tanımlıyoruz.
// Bu, uygulamanın açılışta "process is not defined" hatası verip çökmesini engeller.
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (ai) return ai;

  // Güvenli API Anahtarı okuma (Vite/Vercel ve Local uyumlu)
  let apiKey = '';
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      apiKey = import.meta.env.VITE_API_KEY;
    }
  } catch (e) {
    // import.meta hatası yutulur
  }

  if (!apiKey) {
    try {
      if (typeof process !== 'undefined' && process.env) {
        apiKey = process.env.API_KEY || '';
      }
    } catch (e) {
      // process hatası yutulur
    }
  }

  if (!apiKey) {
    console.error("API Anahtarı Bulunamadı! Lütfen Vercel ayarlarından VITE_API_KEY eklediğinizden emin olun.");
    return null;
  }

  ai = new GoogleGenAI({ apiKey: apiKey });
  return ai;
};

export const getBeautyAdvice = async (userQuery: string): Promise<string> => {
  try {
    const client = getAiClient();
    
    if (!client) {
      return "Sistem şu an güncelleniyor, ama Hülya Hanım sana WhatsApp'tan hemen yardımcı olur: 0546 618 30 62";
    }

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `Sen Aura Güzellik Merkezi'nin en yakın arkadaş tadındaki, samimi ve bilgili asistanısın.

        KURALLARIN:
        1. BASİT VE SAMİMİ OL: Tıbbi terim kullanma. "Enflamasyon" deme, "Kızarıklık/Şişlik" de. Sanki 20 yıllık arkadaşınla kahve içerken konuşuyorsun.
        2. SORUNUN KAYNAĞINA İN: Direkt "gel yapalım" deme. Önce sorunun neden olduğunu (stres, hormonlar, yanlış bakım, mevsim geçişi vb.) bir cümleyle açıkla.
        3. FAYDALI OL: Evde uygulayabileceği çok basit bir tüyo ver ki sana güvensin.

        CEVAP ŞABLONUN (Bu sırayı takip et):
        
        1. ADIM (Empati & Sebep): "Ah canım, o sorun hepimizde oluyor! Genelde [SEBEP] yüzünden cildimiz/tüylerimiz böyle tepki verir."
        2. ADIM (Basit Çözüm): "Evde şuna dikkat edebilirsin: [BASİT İPUCU]. Bu seni biraz rahatlatır."
        3. ADIM (Profesyonel Yönlendirme): "Ama tamamen pürüzsüz ve kalıcı bir sonuç istersen, bunu profesyonel cihazlarla kökten çözmemiz en güzeli olur."
        4. ADIM (SEÇENEKLİ KAPANIŞ - BURASI ÇOK ÖNEMLİ):
        Lafı uzatmadan şu 3 seçeneği sunarak bitir. Telefon numarasını tam olarak "0546 618 30 62" şeklinde yaz ki tıklanabilsin:

        "Karar senin tatlım;
        👉 İstersen Instagram sayfamızdan (@auraguzellikmerkezi01) yaptığımız harika değişimlere bir göz at: https://www.instagram.com/auraguzellikmerkezi01/
        📞 Aklına takılan bir şey varsa bizi hemen ara: 0546 618 30 62
        💬 Veya direkt randevu ve fiyat için WhatsApp'tan mesaj at, Hülya Hanım sana dönüş yapsın: https://api.whatsapp.com/send/?phone=905466183062&text&type=phone_number&app_absent=0"

        LİNKLERİ VE NUMARAYI MUTLAKA BU ŞEKİLDE PAYLAŞ.
        `,
        thinkingConfig: { thinkingBudget: 0 }, 
      },
    });

    return response.text || "Şu an bağlantıda ufak bir kopukluk oldu ama Hülya Hanım WhatsApp'ta seni bekliyor! 📞 0546 618 30 62";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Şu an cevap veremiyorum canım ama WhatsApp'tan yazarsan Hülya Hanım hemen döner: 0546 618 30 62";
  }
};