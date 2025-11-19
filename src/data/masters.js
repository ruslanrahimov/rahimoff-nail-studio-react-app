const baseUrl = import.meta.env.BASE_URL;

export const masters = [
  {
    id: "elif",
    name: "Elif",
    role: "Problematik tırnaklar, zor mimari ve detaylı düzeltmeler",
    experience: "6 yıllık tecrübe",
    priceLevel: "1000 TL",
    rating: 5,
    description:
      "Problematik ve zor tırnaklarda uzmanlaşmış bir üst düzey masterdır. Travmatik tırnaklar, zor mimari ve detaylı düzeltmelerde yüksek hassasiyetle çalışır.",
    photo: baseUrl + "elif.jpg",
    gallery: [baseUrl + "elif/1.jpg", baseUrl + "elif/2.jpg", baseUrl + "elif/3.jpg"],
    level: "top",
    skills: [
      "problemli tırnaklar",
      "travmatik tırnak bakımı",
      "ileri seviye mimari",
      "zor düzeltmeler",
      "uzun setler",
      "pedikür uzmanlığı",
      "doğal tırnak güçlendirme",
    ],
  },

  {
    id: "akgul",
    name: "Akgül",
    role: "Profesyonel manikür, pedikür ve doğal tırnak güçlendirme",
    experience: "5 yıllık tecrübe",
    priceLevel: "1000 TL",
    rating: 5,
    description:
      "Profesyonel manikür ve pedikürde deneyimli bir uzmandır. Ayak bakımı, çatlak topuk ve SPA işlemlerinde titiz çalışır, doğal tırnak güçlendirmede başarılıdır.",
    photo: baseUrl + "akgul.jpg",
    gallery: [baseUrl + "akgul/1.jpg", baseUrl + "akgul/2.jpg", baseUrl + "akgul/3.jpg"],
    level: "top",
    skills: [
      "manikür",
      "pedikür",
      "SPA bakımı",
      "çatlak topuk bakımı",
      "doğal tırnak güçlendirme",
      "hijyenik bakım",
      "kalıcı parlaklık teknikleri",
    ],
  },

  {
    id: "hayrus",
    name: "Hayruş",
    role: "Manikür, jel güçlendirme, uzatma ve modern nail art",
    experience: "1 yıllık tecrübe",
    priceLevel: "500 TL",
    rating: 3.5,
    description:
      "Doğal manikür, jel güçlendirme ve uzatma üzerine çalışır. Modern nail art, ince detaylı tasarımlar ve şekillendirmede estetik ve özenli bir yaklaşım sergiler.",
    photo: baseUrl + "hayrus.jpg",
    gallery: [baseUrl + "hayrus/1.jpg", baseUrl + "hayrus/2.jpg"],
    level: "junior-plus",
    skills: [
      "manikür",
      "jel güçlendirme",
      "tırnak uzatma",
      "nail art",
      "modern tasarım",
      "şekillendirme",
      "gel boya",
    ],
  },

  {
    id: "candan",
    name: "Candan",
    role: "Manikür, jel uygulama, uzatma ve dekoratif tasarım",
    experience: "1 yıllık tecrübe",
    priceLevel: "500 TL",
    rating: 3.5,
    description:
      "Manikür, jel uygulama ve tırnak uzatma alanında ilerleyen bir uzmandır. Modern çizimler, dekoratif tasarımlar ve nail art üzerine dikkatli ve titiz çalışır.",
    photo: baseUrl + "candan.jpg",
    gallery: [baseUrl + "candan/1.jpg", baseUrl + "candan/2.jpg"],
    level: "junior-plus",
    skills: [
      "manikür",
      "jel uygulama",
      "tırnak uzatma",
      "nail art",
      "dekoratif tasarım",
      "çizim",
      "minimal tasarım",
    ],
  },
];
