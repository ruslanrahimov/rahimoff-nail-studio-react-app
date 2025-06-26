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
        price: 300,
      },
      {
        name: "Manikür + Jel güçlendirme + Kalıcı Oje",
        description:
          "Doğal tırnağı güçlendirmek için jel uygulaması yapılır, ardından seçtiğiniz renkte kalıcı oje ile tamamlanır. Şekillendirme ve klasik manikür dahildir.",
        price: 650,
      },
      {
        name: "Manikür + Protez Tırnak (Jel)",
        description:
          "Doğal tırnağın üzerine özel jel ile yapılan uzatma işlemi. Şekillendirme, manikür ve kalıcı parlaklık dahildir.",
        price: 800,
      },
      {
        name: "Manikür + Protez Tırnak (Tips)",
        description:
          "Tırnak ucuna özel yapay uç (tips) eklenerek yapılan uzatma işlemi. Manikür ve şeffaf veya renkli kaplama ile tamamlanır.",
        price: 800,
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
        price: "850",
      },
      {
        name: "KANE Pedikür (Ojesiz)",
        description: "KANE ürünleri ile detaylı pedikür.",
        price: "750",
      },
      {
        name: "Nasır / Çatlak / Siğil / Mantar",
        description:
          "KANE protokolleriyle nasır, çatlak, siğil veya mantar sorunlarına yönelik özel bakım.",
        price: "Fiyat değerlendirme sonrası belirlenir",
      },
    ],
  },
  NAIL_ART: {
    title: "Tırnak Süsleme (1 parmak)",
    image: baseUrl + "art.webp",
    description: "Farklı tarzlarda tırnak süsleme seçenekleriyle stilinizi yansıtın.",
    services: [
      {
        name: "Nail Art (1 Tırnak)",
        description: "El boyaması veya özel tasarım. Her bir tırnak için yapılır.",
        price: 50,
      },
      {
        name: "Nokta, Çizgi, Vitray, Kedi Gözü",
        description: "Basit ama etkili küçük süslemeler.",
        price: 10,
      },
      {
        name: "French",
        description: "Zarif klasik tırnak ucu tasarımları.",
        price: 15,
      },
      {
        name: "Geometri (2 öğeye kadar), Sticker, Slider, Stamping (1 baskı), Sim, Folyo, Ayna Tozu, Örümcek Jeli",
        description: "Hafif süslemelerle sade şıklık.",
        price: 20,
      },
      {
        name: "Gliter Jel, Mermer, Stamping (çoklu baskı), Ayna Tozu (2 renk), Ombre",
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
        price: "200-500",
      },
      {
        name: "Taşlarla Süsleme (Tüm Tırnak)",
        description: "Tüm tırnağı kaplayan taş süslemeler.",
        price: "200-400",
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
        name: "Tek Tırnak Uzatma",
        description:
          "Sadece bu işlem için gelen müşteriler için geçerlidir. Tüm tırnak uzatma hizmetlerinde ekstra ücret alınmaz.",
        price: 100,
      },
    ],
  },
};
