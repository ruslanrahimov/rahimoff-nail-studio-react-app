const baseUrl = import.meta.env.BASE_URL;

export const tabContent = {
  MANICURE: {
    title: "Manikür",
    image: baseUrl + "main.jpg",
    description: "",
    services: [
      {
        name: "Manikür",
        description: "Tırnak şekillendirme, et kesimi ve bakım.",
        price: 350,
      },
      {
        name: "Manikür + Jel güçlendirme + Kalıcı Oje",
        description:
          "Doğal tırnağı güçlendirmek için jel uygulaması yapılır, ardından seçtiğiniz renkte kalıcı oje ile tamamlanır. Şekillendirme ve klasik manikür dahildir.",
        price: 800,
      },
      {
        name: "Manikür + Protez Tırnak (Jel)",
        description:
          "Doğal tırnağın üzerine özel jel ile yapılan uzatma işlemi. Şekillendirme, manikür ve kalıcı parlaklık dahildir.",
        price: 1000,
      },
      {
        name: "Manikür + Protez Tırnak (Tips)",
        description:
          "Tırnak ucuna özel yapay uç (tips) eklenerek yapılan uzatma işlemi. Manikür ve şeffaf veya renkli kaplama ile tamamlanır.",
        price: 1000,
      },
    ],
  },
  PEDICURE: {
    title: "Pedikür",
    image: baseUrl + "pedicure.jpg",
    description: "Tüm işlemler KANE tekniğiyle ve KANE profesyonel ürünleriyle uygulanır.",
    services: [
      {
        name: "KANE Pedikür + Kalıcı Oje",
        description: "KANE ürünleri ile detaylı pedikür ve dayanıklı kalıcı oje uygulaması.",
        price: "1000",
      },
      {
        name: "KANE Pedikür (Ojesiz)",
        description: "KANE ürünleri ile detaylı pedikür.",
        price: "800",
      },
      {
        name: "Yoğun bakım pedikürü",
        description: "KANE protokolleriyle nasır, çatlak ve diğer sorunlarına yönelik özel bakım.",
        price: "Fiyat değerlendirme sonrası belirlenir",
      },
      {
        name: "Erkek Pedikürü",
        description:
          "Erkekler için özel tasarlanmış pedikür hizmetimiz ayaklarda biriken ölü deriyi nazikçe temizler, tırnakların sağlıklı ve düzenli görünmesini sağlar. Düzenli bakım sayesinde ayaklar daha hijyenik, rahat ve bakımlı bir görünüme kavuşur.",
        price: "1500",
      },
    ],
  },
  NAIL_ART: {
    title: "Tırnak Süsleme (1 parmak)",
    image: baseUrl + "art.webp",
    description: "Farklı tarzlarda tırnak süsleme seçenekleriyle stilinizi yansıtın.",
    services: [
      {
        name: "Tasarım jelleri",
        description: "Simli, Disco, İnci",
        price: 10,
      },
      {
        name: "Nail Art (1 Tırnak)",
        description: "El boyaması veya özel tasarım. Her bir tırnak için yapılır.",
        price: 50,
      },
      {
        name: "Nokta, Çizgi, Vitray, Kedi Gözü",
        description: "Basit ama etkili küçük süslemeler.",
        price: 15,
      },
      {
        name: "French",
        description: "Zarif klasik tırnak ucu tasarımları.",
        price: 20,
      },
      {
        name: "Geometri (2 öğeye kadar), Sticker, Slider, Stamping (1 baskı), Sim, Folyo, Ayna Tozu, Örümcek Jeli",
        description: "Hafif süslemelerle sade şıklık.",
        price: 20,
      },
      {
        name: "Mermer, Stamping (çoklu baskı), Ayna Tozu (2 renk), Ombre",
        description: "Daha belirgin ve dikkat çekici tasarımlar.",
        price: 25,
      },
      {
        name: "Boncuk",
        description: "Tırnaklara hacimli minik süsler.",
        price: "10-30",
      },
      {
        name: "Geometrik Tasarım (3+ öğe)",
        description: "Daha karmaşık ve dikkat çeken geometrik şekiller.",
        price: "30-40",
      },
      {
        name: "Ombre (çok renkli)",
        description: "Birden fazla renk geçişli tırnak tasarımı.",
        price: "30",
      },
      {
        name: "Mermer (2+ renk)",
        description: "Doğal taş görünümünde sofistike tasarımlar.",
        price: 30,
      },
      {
        name: "Kore Tasarımı (Hacimli)",
        description: "3D ve göz alıcı Kore tarzı tırnak süslemeleri.",
        price: "30-50",
      },
    ],
  },
  EXTRAS: {
    title: "Ekstralar",
    image: baseUrl + "extras.jpg",
    description: "",
    services: [
      {
        name: "Çıkartma (Jel, Akrilik, Tips)",
        description:
          "Jel veya akrilik kaplamanın sağlıklı şekilde ve tırnağa zarar vermeden çıkartılması.",
        price: 300,
      },
      {
        name: "Diğer Salon İşlemi Çıkartma",
        description:
          "Başka bir salonda yapılmış işlem çıkarttırılıp ve yeni bir işlem yapılacaksa, ek olarak 200₺ ücret alınır.",
        price: 200,
      },
      {
        name: "Tek Tırnak Uzatma",
        description:
          "Sadece bu işlem için gelen müşteriler için geçerlidir. Tüm tırnak uzatma hizmetlerinde ekstra ücret alınmaz.",
        price: 100,
      },
      {
        name: "L ve üzeri Uzunluk Ek Ücreti",
        description:
          "L ve üzeri uzunluk tercih eden müşteriler için hizmet ücretine ek olarak alınır.",
        price: "100 - 300",
      },
    ],
  },
};
