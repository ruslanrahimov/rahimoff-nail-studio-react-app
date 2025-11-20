const baseUrl = import.meta.env.BASE_URL;

export const tabContent = {
  MANICURE: {
    title: "Manikür",
    image: baseUrl + "main.jpg",
    description: "",
    services: [
      {
        id: "manicure-basic",
        name: "Manikür",
        description: "Tırnak şekillendirme, et kesimi ve bakım.",
      },
      {
        id: "manicure-gel-guc-kalici",
        name: "Manikür + Jel güçlendirme + Kalıcı Oje",
        description:
          "Doğal tırnağı güçlendirmek için jel uygulaması yapılır, ardından kalıcı oje ile tamamlanır.",
      },
      {
        id: "manicure-protez-jel",
        name: "Manikür + Protez Tırnak (Jel)",
        description: "Doğal tırnağın üzerine özel jel ile yapılan uzatma işlemi.",
      },
      {
        id: "manicure-protez-tips",
        name: "Manikür + Protez Tırnak (Tips)",
        description: "Yapay tırnak ucu (tips) ile yapılan uzatma işlemi.",
      },
    ],
  },

  PEDICURE: {
    title: "Pedikür",
    image: baseUrl + "pedicure.jpg",
    description: "Tüm işlemler KANE tekniği ile uygulanır.",
    services: [
      {
        id: "pedicure-kane-kalici-oje",
        name: "KANE Pedikür + Kalıcı Oje",
        description: "KANE ürünleri ile detaylı pedikür ve kalıcı oje.",
      },
      {
        id: "pedicure-kane-basic",
        name: "KANE Pedikür (Ojesiz)",
        description: "KANE ürünleri ile detaylı bakım.",
      },
      {
        id: "pedicure-intensive",
        name: "Yoğun bakım pedikürü",
        description: "Nasır, çatlak ve diğer sorunlara özel tedavi.",
      },
      {
        id: "pedicure-men",
        name: "Erkek Pedikürü",
        description: "Erkek ayağı için geliştirilmiş özel bakım protokolü.",
      },
    ],
  },

  NAIL_ART: {
    title: "Tırnak Süsleme (1 parmak)",
    image: baseUrl + "art.webp",
    description: "Farklı tarzlarda tırnak süsleme seçenekleri.",
    services: [
      {
        id: "art-tasarim-jelleri",
        name: "Tasarım jelleri",
        description: "Simli, Disco, İnci tasarımlar.",
      },
      {
        id: "art-nailart-basic",
        name: "Nail Art (1 Tırnak)",
        description: "El boyaması veya özel tasarım.",
      },
      {
        id: "art-simple-lines",
        name: "Nokta, Çizgi, Vitray, Kedi Gözü",
        description: "Basit küçük süslemeler.",
      },
      {
        id: "art-french",
        name: "French",
        description: "Klasik zarif uç tasarımı.",
      },
      {
        id: "art-light-design",
        name: "Geometri (2 öğeye kadar), Sticker, Slider…",
        description: "Hafif, sade süsleme.",
      },
      {
        id: "art-advanced-design",
        name: "Mermer, çoklu stamping, ombre",
        description: "Daha belirgin tasarım stilleri.",
      },
      {
        id: "art-beads",
        name: "Boncuk",
        description: "3D hacimli süsler.",
      },
      {
        id: "art-geometry-advanced",
        name: "Geometrik Tasarım (3+ öğe)",
        description: "Karmaşık çizim tasarımları.",
      },
      {
        id: "art-ombre-multi",
        name: "Ombre (çok renkli)",
        description: "Renk geçişli tasarım.",
      },
      {
        id: "art-mermer-advanced",
        name: "Mermer (2+ renk)",
        description: "Doğal taş efekti.",
      },
      {
        id: "art-korean-3d",
        name: "Kore Tasarımı (Hacimli)",
        description: "3D hacimli tasarım.",
      },
    ],
  },

  EXTRAS: {
    title: "Ekstralar",
    image: baseUrl + "extras.jpg",
    description: "",
    services: [
      {
        id: "extra-remove-gel",
        name: "Çıkartma (Jel, Akrilik, Tips)",
        description: "Kaplamanın sağlıklı ve zarar vermeden çıkarılması.",
      },
      {
        id: "extra-remove-other-salon",
        name: "Diğer Salon İşlemi Çıkartma",
        description: "Başka salonda yapılan işlemin çıkartılması.",
      },
      {
        id: "extra-one-nail-extension",
        name: "Tek Tırnak Uzatma",
        description: "Sadece tek tırnak için uzatma işlemi.",
      },
      {
        id: "extra-long-length",
        name: "L ve üzeri Uzunluk Ek Ücreti",
        description: "Uzun tırnak tercih edenler için ek ücret.",
      },
    ],
  },
};
