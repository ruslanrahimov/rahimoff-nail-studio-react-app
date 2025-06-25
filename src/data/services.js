const baseUrl = import.meta.env.BASE_URL;

export const tabContent = {
  MANICURE: {
    title: "Manikür",
    image: baseUrl + "manicure.webp",
    description: "",
    services: [
      {
        name: "Klasik / Kombine / Donanımlı Manikür",
        description: "Tırnak şekillendirme, et kesimi ve cilt bakımı içerir.",
        price: 300,
      },
      {
        name: "Manikür + Kalıcı Oje",
        description: "Manikür sonrası uzun süre dayanıklı oje uygulaması.",
        price: 650,
      },
    ],
  },
  PEDICURE: {
    title: "Pedikür",
    image: baseUrl + "pedicure.jpeg",
    description: "",
    services: [
      {
        name: "Ekspres Pedikür",
        description: "Hızlı tırnak ve topuk bakımı.",
        price: 2300,
      },
      {
        name: "Tam Pedikür",
        description: "Detaylı ayak bakımı, tırnak şekillendirme ve topuk temizliği.",
        price: 2700,
      },
      {
        name: "SMART Pedikür",
        description: "Elektrikli cihazlarla detaylı profesyonel ayak bakımı.",
        price: 2700,
      },
      {
        name: "Pedikür + Kalıcı Oje",
        description: "Pedikür sonrası dayanıklı oje uygulaması.",
        price: 3900,
      },
      {
        name: "Erkek Pedikürü",
        description: "Erkeklere özel ayak ve tırnak bakımı.",
        price: 3600,
      },
    ],
  },
  NAIL_ART: {
    title: "Tırnak Süsleme",
    image: baseUrl + "art.jpg",
    description: "",
    services: [
      {
        name: "French / Ombre (10 Parmak)",
        description: "Tüm tırnaklara şık ve zarif geçişli tasarımlar.",
        price: 150,
      },
      {
        name: "İnci Tozu (10 Parmak)",
        description: "Tırnaklara sedefli parlaklık kazandırır.",
        price: 0,
      },
      {
        name: "Nail Art (Parmak Başı)",
        description: "Her tırnak için bireysel sanatsal tasarım.",
        price: 0,
      },
    ],
  },
  EXTRAS: {
    title: "Ekstralar",
    image: baseUrl + "extras.webp",
    description: "",
    services: [
      {
        name: "Çıkartma (Jel, Akrilik, Tips)",
        description: "Jel kaplamanın sağlıklı şekilde çıkartılması.",
        price: 300,
      },
      {
        name: "Tek Tırnak Protez Tamiri",
        description: "Hasar görmüş tek tırnağın onarımı.",
        price: 100,
      },
    ],
  },
};
