import { Service, Testimonial } from './types';

export interface BeautyTip {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tag: string;
}

// İLETİŞİM BİLGİLERİ
export const WHATSAPP_NUMBER = "905466183062"; // Dinamik link üretimi için ham numara
export const PHONE_NUMBER_DISPLAY = "+90 546 618 30 62";
export const PHONE_LINK = "tel:+905466183062";
export const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text&type=phone_number&app_absent=0`;
export const INSTAGRAM_LINK = "https://www.instagram.com/auraguzellikmerkezi01/";
export const EMAIL_ADDRESS = "selhulya1@gmail.com"; // Güncellenen mail adresi

// ANA EKRAN (GİRİŞ) RESMİ - BURADAN DEĞİŞTİREBİLİRSİNİZ
export const HERO_IMAGE_URL = "https://i.ibb.co/359JTL8J/header.jpg";

// GALERİ RESİMLERİ
export const GALLERY_IMAGES = [
  'https://i.ibb.co/9H878CY6/bekleme-alan.jpg', // Bekleme alanı
  'https://i.ibb.co/FkRDM6Sm/sedye1.jpg', // Sedye/Oda
  'https://i.ibb.co/XZcWfbFK/image.jpg', // Tırnak alanı
  'https://i.ibb.co/ynMCd6C4/cilt-bak-m-1.jpg', // Cilt bakım odası
  'https://i.ibb.co/9kS2DTqh/dettaylar1.jpg', // Detaylar
  'https://i.ibb.co/ynVzQz8N/urunler.jpg', // Ürünler
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Buz Lazer Epilasyon',
    description: 'Acısız, yanma riski olmayan son teknoloji buz başlık ile istenmeyen tüylere kalıcı çözüm. 4 mevsim uygulanabilir konfor.',
    imageUrl: 'https://i.ibb.co/L7HsCbK/buz-lazer.jpg',
    icon: '✨'
  },
  {
    id: '2',
    title: 'HydraFacial Bakım',
    description: 'Vakum teknolojisi ile siyah nokta ve yağ temizliği. Cildi neme doyuran, tek seansta ışıl ışıl bir görünüm sağlayan medikal bakım.',
    imageUrl: 'https://i.ibb.co/4nFJWfXm/hydrafal.jpg',
    icon: '💧'
  },
  {
    id: '3',
    title: 'Microblading & Pudralama',
    description: 'Kaşlarınıza doğal kıl görünümü veriyoruz. Yüz hattınıza en uygun altın oran tasarımı ile bakışlarınızı gençleştirin.',
    imageUrl: 'https://i.ibb.co/qLYt1m0x/microbleding.jpg',
    icon: '👁️'
  },
  {
    id: '4',
    title: 'Dudak Renklendirme',
    description: 'Solgun dudaklara son! Canlı, dolgun ve sürekli ruj sürmüş gibi bakımlı dudaklar için kalıcı renklendirme işlemi.',
    imageUrl: 'https://i.ibb.co/0jrs4r4S/dudakrenklendirme.jpg',
    icon: '💋'
  },
  {
    id: '5',
    title: 'İpek Kirpik & Lifting',
    description: 'Maskaraya veda edin. Kendi kirpiğiniz gibi doğal duran, hafif ve hacimli kirpik tasarımları ile 7/24 etkileyici bakışlar.',
    imageUrl: 'https://i.ibb.co/T3SbgbY/kirpik-lifting.jpg',
    icon: '🦋'
  },
  {
    id: '6',
    title: 'Nail Art & Protez Tırnak',
    description: 'Kırılmayan, sararmayan, kusursuz tırnaklar. İstediğiniz uzunlukta ve modelde, sanat eseri tadında tırnak tasarımları.',
    imageUrl: 'https://i.ibb.co/n88jSzjC/nail-art.jpg',
    icon: '💅'
  },
  {
    id: '7',
    title: 'G5 Bölgesel İncelme',
    description: 'Selülit görünümünü azaltan, sıkılaşma sağlayan ritmik masaj teknolojisi. Daha fit ve pürüzsüz bacaklar için ideal çözüm.',
    imageUrl: 'https://i.ibb.co/jPp6Lsx3/g5.jpg',
    icon: '👙'
  },
  {
    id: '8',
    title: 'Dermapen & Anti-Aging',
    description: 'Cildin kolajen üretimini tetikleyerek sivilce izleri, gözenek ve ince kırışıklıkları tedavi ediyoruz. Yenilenmiş bir cilt.',
    imageUrl: 'https://i.ibb.co/kVcP5HBL/dermapen.jpg',
    icon: '💉'
  },
  {
    id: '9',
    title: 'Profesyonel Saç Kesimi',
    description: 'Yüz hattınıza en uygun, modern ve trend saç kesimleri. Uzman dokunuşlarla saçlarınıza hacim, hareket ve sağlık kazandırın.',
    imageUrl: 'https://i.ibb.co/mrPn5hQS/sa-kesimi.jpg',
    icon: '💇‍♀️'
  },
  {
    id: '10',
    title: 'Saç Boyama & Renklendirme',
    description: 'Saçlarınızı yıpratmadan, en kaliteli boyalarla hayalinizdeki renge kavuşturuyoruz. Ombre, sombre ve balyaj teknikleriyle ışıltılı geçişler.',
    imageUrl: 'https://i.ibb.co/LdJ9VBFM/sa-boyama.jpg',
    icon: '🎨'
  },
  {
    id: '11',
    title: 'Gelin Başı & Özel Tasarım',
    description: 'En özel gününüzde prensesler gibi hissedin. Prova dahil gelin başı, nişan saçı ve türban tasarım hizmetlerimizle kusursuz görünüm.',
    imageUrl: 'https://i.ibb.co/QFKF3vg2/gelinba.jpg',
    icon: '👰'
  },
  {
    id: '12',
    title: 'Profesyonel Porselen Makyaj',
    description: 'Özel günleriniz için suya dayanıklı, 24 saat kalıcı porselen makyaj. Yüz hatlarınızı belirginleştiren profesyonel contour teknikleri.',
    imageUrl: 'https://i.ibb.co/4ZLhQHLB/makyaj.jpg',
    icon: '💄'
  }
];

export const BEAUTY_TIPS: BeautyTip[] = [
  {
    id: 't1',
    title: "Pirinç Suyu Mucizesi",
    description: "Koreli kadınların porselen gibi cildinin sırrı! Pirinci suda bekletip o suyu tonik olarak kullanırsanız, cilt lekelerinizin açıldığını ve yüzünüzün parladığını göreceksiniz. Haftada 3 gün deneyin!",
    icon: "🍚",
    color: "bg-stone-50 text-stone-600",
    tag: "Kore Sırrı"
  },
  {
    id: 't2',
    title: "Çilek Bacaklara Son!",
    description: "Bacaklarınızdaki o kırmızı noktalardan bıkmadınız mı? Duştan önce mutlaka 'Kuru Fırçalama' yapın. Kan dolaşımı hızlanır, batıklar çıkar ve bacaklarınız pürüzsüzleşir. Selülite de birebir!",
    icon: "🍓",
    color: "bg-red-50 text-red-600",
    tag: "Vücut Bakımı"
  },
  {
    id: 't3',
    title: "Dudak Dolgusu Etkisi",
    description: "İğnesiz dolgun dudaklar için: Bir çay kaşığı tarçın ve biraz vazelini karıştırıp dudaklarınıza sürün. 2 dakika bekleyip silin. Hafif karıncalanma olacak ama sonuç: Doğal ve dolgun dudaklar!",
    icon: "💋",
    color: "bg-pink-50 text-pink-600",
    tag: "Makyaj Hilesi"
  },
  {
    id: 't4',
    title: "Yastık İziyle Uyanmayın",
    description: "Pamuklu yastık kılıfları cildinizin nemini emer ve kırışıklık yapar. İpek veya saten kılıf kullanmak, hem saçlarınızın kırılmasını önler hem de 'uyku kırışıklığı' oluşumunu engeller.",
    icon: "🛏️",
    color: "bg-purple-50 text-purple-600",
    tag: "Anti-Aging"
  },
  {
    id: 't5',
    title: "Kaş Kirpik Serumu",
    description: "Pahalı serumlara gerek yok! Bitmiş bir maskara fırçanızı temizleyin. Hint yağı ve E vitamini kapsülünü karıştırıp her gece kaş ve kirpiklerinize sürün. 1 ayda değişime inanamayacaksınız.",
    icon: "👁️",
    color: "bg-yellow-50 text-yellow-600",
    tag: "Doğal Bakım"
  },
  {
    id: 't6',
    title: "Buzlu Kaşık Yöntemi",
    description: "Sabah şiş gözlerle mi uyandınız? İki metal kaşığı 5 dakika buzlukta bekletin. Göz altlarınıza hafifçe bastırın. Soğuk şok etkisiyle şişlikler iner ve bakışlarınız anında canlanır.",
    icon: "🧊",
    color: "bg-blue-50 text-blue-600",
    tag: "Hızlı Çözüm"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ayşe Yılmaz',
    comment: 'Hülya Hanım ve ekibine çok teşekkürler! Lazer epilasyon sonuçlarımdan inanılmaz memnunum. Çerkezköy\'de tek adresim.',
    rating: 5
  },
  {
    id: '2',
    name: 'Selin Kaya',
    comment: 'Aura Güzellik Merkezi\'nde yaptırdığım cilt bakımı cildime resmen nefes aldırdı. İlgi ve alakaları harika.',
    rating: 5
  },
  {
    id: '3',
    name: 'Zeynep Demir',
    comment: 'İpek kirpik uygulaması için çok endişeliydim ama sonuç o kadar doğal oldu ki... Ellerinize sağlık Hülya Hanım.',
    rating: 5
  },
  {
    id: '4',
    name: 'Elif Çelik',
    comment: 'Microblading işlemi yaptırdım, kaşlarım tam istediğim formda oldu. Hijyen konusunda çok titizler, gönül rahatlığıyla gelebilirsiniz.',
    rating: 5
  },
  {
    id: '5',
    name: 'Berna Soylu',
    comment: 'Gelin bakım paketimi burada yaptırdım. Manikürden saç bakımına her şey kusursuzdu. Stresli günümde bana terapi gibi geldi.',
    rating: 5
  },
  {
    id: '6',
    name: 'Merve Akay',
    comment: 'Randevu saatlerine çok sadıklar. Pazar günü açık olmaları çalışanlar için büyük avantaj. Teşekkürler Aura Ailesi.',
    rating: 4
  }
];