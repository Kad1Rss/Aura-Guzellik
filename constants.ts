
import { Service, Testimonial } from './types';

export interface BeautyTip {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tag: string;
}

// İLETİŞİM BİLGİLERİ (Kurumsal Yapı)
export const WHATSAPP_NUMBER = "905466183062"; 
export const PHONE_NUMBER_DISPLAY = "+90 546 618 30 62";
export const PHONE_LINK = "tel:+905466183062";
export const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text&type=phone_number&app_absent=0`;
export const INSTAGRAM_LINK = "https://www.instagram.com/auraguzellikmerkezi01/";
export const EMAIL_ADDRESS = "auraguzellikcerkezkoy@gmail.com";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/SaffBFKYHQxoNmK67"; 

// ANA EKRAN (GİRİŞ) RESMİ
export const HERO_IMAGE_URL = "https://i.ibb.co/359JTL8J/header.jpg";

// GALERİ RESİMLERİ
export const GALLERY_IMAGES = [
  'https://i.ibb.co/9H878CY6/bekleme-alan.jpg', 
  'https://i.ibb.co/FkRDM6Sm/sedye1.jpg', 
  'https://i.ibb.co/XZcWfbFK/image.jpg', 
  'https://i.ibb.co/ynMCd6C4/cilt-bak-m-1.jpg', 
  'https://i.ibb.co/9kS2DTqh/dettaylar1.jpg', 
  'https://i.ibb.co/ynVzQz8N/urunler.jpg', 
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
    description: 'Selülit görünümünü azaltan, sıkılaşma sağlayan ritmik masaj teknolojisi. Daha fit and pürüzsüz bacaklar için ideal çözüm.',
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
    description: 'Saçlarınıza yıpratmadan, en kaliteli boyalarla hayalinizdeki renge kavuşturuyoruz. Ombre, sombre ve balyaj teknikleriyle ışıltılı geçişler.',
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
    title: "Keten Tohumu 'Botoksu'",
    description: "Keten tohumunu suda kaynatıp süzün. Elde ettiğiniz jeli cildinize sürün ve kuruyana kadar bekleyin. Doğal bir germe etkisi (lifting) sağlar ve gözenekleri sıkılaştırır.",
    icon: "🌾",
    color: "bg-amber-50 text-amber-700",
    tag: "Doğal Lifting"
  },
  {
    id: 't2',
    title: "Yeşil Çay Buz Küpleri",
    description: "Demlediğiniz yeşil çayı buz kalıplarına dökün. Sabahları göz altlarınızda gezdirerek şişlikleri anında indirebilir ve morlukların görünümünü azaltabilirsiniz.",
    icon: "🍵",
    color: "bg-green-50 text-green-700",
    tag: "Ödem Atıcı"
  },
  {
    id: 't3',
    title: "Doğal Dudak Dolgunlaştırıcı",
    description: "Bir çay kaşığı vazelin içine bir damla tarçın yağı ekleyin. Dudaklarınıza sürdüğünüzde kan dolaşımı hızlanacak, daha dolgun ve pembe bir görünüm kazanacaktır.",
    icon: "💋",
    color: "bg-rose-50 text-rose-700",
    tag: "Hızlı Etki"
  },
  {
    id: 't4',
    title: "Soğuk Kaşık Masajı",
    description: "İki metal kaşığı dondurucuda bekletin. Elmacık kemiklerinizden şakaklarınıza doğru soğuk kaşıklarla masaj yapın. Yüz hattınızı belirginleştirir (Jawline etkisi).",
    icon: "🥄",
    color: "bg-blue-50 text-blue-700",
    tag: "Yüz Yogası"
  },
  {
    id: 't5',
    title: "Kaş & Kirpik Serumu",
    description: "Hint yağı ve E vitamini kapsülünü karıştırıp eski bir maskara fırçasıyla her gece kaş ve kirpiklerinize sürün. 2 haftada fark edilir gürleşme sağlar.",
    icon: "👁️",
    color: "bg-purple-50 text-purple-700",
    tag: "Gürleştirici"
  },
  {
    id: 't6',
    title: "Porselen El Bakımı",
    description: "Toz şeker ve zeytinyağını karıştırıp ellerinize peeling yapın. Ardından nemlendirici sürüp pamuklu eldivenle uyuyun. Sabah yumuşacık ellere uyanın.",
    icon: "🧤",
    color: "bg-stone-100 text-stone-700",
    tag: "El Bakımı"
  },
  {
    id: 't7',
    title: "Kahve Telvesi Mucizesi",
    description: "İçtiğiniz kahvenin telvesini banyo sırasında selülitli bölgelere dairesel hareketlerle uygulayın. Kafein kan dolaşımını hızlandırır ve pürüzsüzleştirir.",
    icon: "☕",
    color: "bg-orange-50 text-orange-800",
    tag: "Vücut Bakımı"
  },
  {
    id: 't8',
    title: "Yastık Kılıfı Sırrı",
    description: "Pamuk yerine ipek veya saten yastık kılıfı kullanın. Gece boyunca cildinizin nemini emmez ve sabah uyandığınızda 'yastık izi' ile kırışıklık oluşumunu engeller.",
    icon: "🛌",
    color: "bg-pink-50 text-pink-700",
    tag: "Uyku Güzelliği"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Merve Güneş',
    comment: 'Lazer epilasyonda tek adresim diyebilirim. Aura Güzellik ekibi çok titiz çalışıyor, seanslarım çok konforlu geçiyor. Sonuç harika!',
    rating: 5
  },
  {
    id: '2',
    name: 'Ebru Aydın',
    comment: 'Saç boyama işlemimden inanılmaz memnun kaldım, tam hayal ettiğim ton oldu. Aura Güzellik ekibi gerçekten işinin ehli.',
    rating: 5
  },
  {
    id: '3',
    name: 'Zeynep Bulut',
    comment: 'Kaşlarım o kadar doğal ve güzel oldu ki! Aura Güzellik ekibine ilgileri ve profesyonel dokunuşları için çok teşekkür ederim.',
    rating: 5
  },
  {
    id: '4',
    name: 'Ceren Dağlı',
    comment: 'Tırnak tasarımlarına bayılıyorum. Aura Güzellik ekibi hem çok hijyenik hem de çok yetenekli. Her ay mutlaka buradayım.',
    rating: 5
  },
  {
    id: '5',
    name: 'Derya Aksoy',
    comment: 'Saç kesimimden çok memnun kaldım, yüz hattıma en uygun modeli Aura Güzellik ekibiyle birlikte seçtik. Çok başarılı!',
    rating: 5
  },
  {
    id: '6',
    name: 'Selin Kaya',
    comment: 'İpek kirpiklerim hem gür hem de çok doğal duruyor. Aura Güzellik ekibi sayesinde sabahları makyaj yapma derdim kalmadı.',
    rating: 5
  }
];
