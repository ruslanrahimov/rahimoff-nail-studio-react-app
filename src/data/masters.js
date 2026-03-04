const baseUrl = import.meta.env.BASE_URL;

const unifiedServices = [
        { id: "manicure-basic", price: 350 },
        { id: "manicure-gel-guc-kalici", price: 800 },
        { id: "manicure-protez-jel", price: 1000 },
        { id: "manicure-protez-tips", price: 1000 },

        { id: "pedicure-kane-kalici-oje", price: 1000 },
        { id: "pedicure-kane-basic", price: 800 },
        { id: "pedicure-intensive", price: null },
        { id: "pedicure-men", price: 1500 },

        { id: "art-tasarim-jelleri", price: 10 },
        { id: "art-nailart-basic", price: 50 },
        { id: "art-simple-lines", price: 15 },
        { id: "art-french", price: 20 },
        { id: "art-light-design", price: 20 },
        { id: "art-advanced-design", price: 25 },
        { id: "art-beads", price: "10-30" },
        { id: "art-geometry-advanced", price: "30-40" },
        { id: "art-ombre-multi", price: "30" },
        { id: "art-mermer-advanced", price: 30 },
        { id: "art-korean-3d", price: "30-50" },

        { id: "extra-remove-gel", price: 300 },
        { id: "extra-remove-other-salon", price: 200 },
        { id: "extra-one-nail-extension", price: 100 },
        { id: "extra-long-length", price: "100-300" },
];

const overridePrices = (services, overrides) =>
        services.map((s) => ({
                ...s,
                price: overrides[s.id] ?? s.price,
        }));

const excludeCategories = (services, categories = []) =>
        services.filter((service) => !categories.some((cat) => service.id.startsWith(`${cat}-`)));

export const masters = [
        {
                id: "elif",
                name: "Elif Rahimov",
                role: "Problematik tırnaklar, zor mimari ve detaylı düzeltmeler",
                experience: "8 yıllık tecrübe",
                priceLevel: "1000 TL",
                rating: 5,
                description:
                        "Problematik ve zor tırnaklarda uzmanlaşmış bir üst düzey masterdır. Travmatik tırnaklar, zor mimari ve detaylı düzeltmelerde yüksek hassasiyetle çalışır.",
                photo: baseUrl + "elif.jpg",
                gallery: [
                        baseUrl + "elif/2.webp",
                        baseUrl + "elif/3.webp",
                        baseUrl + "elif/4.webp",
                        baseUrl + "elif/5.webp",
                        baseUrl + "elif/6.webp",
                        baseUrl + "elif/7.webp",
                        baseUrl + "elif/8.webp",
                        baseUrl + "elif/9.webp",
                        baseUrl + "elif/10.webp",
                        baseUrl + "elif/11.webp",
                        baseUrl + "elif/12.webp",
                        baseUrl + "elif/13.webp",
                        baseUrl + "elif/14.webp",
                        baseUrl + "elif/15.webp",
                        baseUrl + "elif/16.webp",
                        baseUrl + "elif/17.webp",
                        baseUrl + "elif/18.webp",
                        baseUrl + "elif/19.webp",
                        baseUrl + "elif/20.webp",
                        baseUrl + "elif/21.webp",
                        baseUrl + "elif/22.webp",
                        baseUrl + "elif/23.webp",
                        baseUrl + "elif/24.webp",
                        baseUrl + "elif/25.webp",
                        baseUrl + "elif/26.webp",
                ],
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
                promotions: [],
                services: overridePrices(excludeCategories(unifiedServices), {
                        "manicure-basic": 500,
                        "manicure-protez-jel": 1300,
                        "manicure-protez-tips": 1300,
                        "manicure-gel-guc-kalici": 1000,
                        "pedicure-kane-basic": 1000,
                        "pedicure-kane-kalici-oje": 1500,
                }),
        },

        {
                id: "akgul",
                name: "Uzman Akgül",
                role: "Profesyonel manikür, pedikür ve doğal tırnak güçlendirme",
                experience: "5 yıllık tecrübe",
                priceLevel: "1000 TL",
                rating: 5,
                description:
                        "Profesyonel manikür ve pedikürde deneyimli bir uzmandır. Ayak bakımı, çatlak topuk ve SPA işlemlerinde titiz çalışır, doğal tırnak güçlendirmede başarılıdır.",
                photo: baseUrl + "akgul.jpg",
                gallery: [
                        baseUrl + "akgul/1.webp",
                        baseUrl + "akgul/2.webp",
                        baseUrl + "akgul/3.webp",
                        baseUrl + "akgul/4.webp",
                        baseUrl + "akgul/5.webp",
                        baseUrl + "akgul/6.webp",
                        baseUrl + "akgul/7.webp",
                        baseUrl + "akgul/8.webp",
                        baseUrl + "akgul/9.webp",
                        baseUrl + "akgul/10.webp",
                        baseUrl + "akgul/11.webp",
                        baseUrl + "akgul/12.webp",
                        baseUrl + "akgul/13.webp",
                        baseUrl + "akgul/14.webp",
                        baseUrl + "akgul/15.webp",
                ],
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
                promotions: [],
                services: unifiedServices,
        },

        {
                id: "hayrus",
                name: "Uzman Hayrunnisa",
                role: "Manikür, jel güçlendirme, uzatma ve modern nail art",
                experience: "1 yıllık tecrübe",
                priceLevel: "700 TL",
                rating: 5,
                description:
                        "Doğal manikür, jel güçlendirme ve uzatma üzerine çalışır. Modern nail art, ince detaylı tasarımlar ve şekillendirmede estetik ve özenli bir yaklaşım sergiler.",
                photo: baseUrl + "hayrus.jpg",
                gallery: [
                        baseUrl + "hayrus/5.webp",
                        baseUrl + "hayrus/2.webp",
                        baseUrl + "hayrus/3.webp",
                        baseUrl + "hayrus/4.webp",
                        baseUrl + "hayrus/1.webp",
                        baseUrl + "hayrus/6.webp",
                        baseUrl + "hayrus/7.webp",
                        baseUrl + "hayrus/8.webp",
                        baseUrl + "hayrus/9.webp",
                        baseUrl + "hayrus/10.webp",
                        baseUrl + "hayrus/11.webp",
                ],
                level: "middle",
                skills: [
                        "manikür",
                        "jel güçlendirme",
                        "tırnak uzatma",
                        "nail art",
                        "modern tasarım",
                        "şekillendirme",
                        "gel boya",
                ],
                promotions: [
                        {
                                title: "Tasarımda %50 İndirim",
                                description:
                                        "Hayrunnisa'ya manikürünü  yaptır, istediğin Nail Art'ta %50 indirim kazan. Nail art, french, ombre, geometrik — hangi desen olursa olsun indirim tasarıma uygulanır.",
                                discount: "%50",
                                validUntil: "31 Mart 2026",
                                service: "Tüm Nail Art Tasarımları",
                                type: "percent",
                        },
                ],
                services: overridePrices(excludeCategories(unifiedServices, ["pedicure"]), {
                        "manicure-protez-jel": 800,
                        "manicure-protez-tips": 800,
                        "manicure-gel-guc-kalici": 700,
                }),
        },

        {
                id: "pelin",
                name: "Uzman Pelin",
                role: "Manikür, jel güçlendirme, tırnak uzatma ve nail art",
                experience: "1 yıllık tecrübe",
                priceLevel: "800 TL",
                rating: 5,
                description:
                        "Güzellik sektörüne olan tutkusunu Rahimoff Studio'da gerçek bir ustalığa dönüştürdü. Ekibimizle birlikte manikür, jel güçlendirme ve nail art konularında en iyi teknikleri öğrenerek kendine özgü, özenli bir dokunuş geliştirdi. Sıcakkanlı yaklaşımı ve detaylara verdiği önemle her müşteriye kişisel bir deneyim sunar.",
                photo: baseUrl + "pelin/pelin.webp",
                gallery: [],
                level: "middle",
                skills: [
                        "manikür",
                        "jel güçlendirme",
                        "tırnak uzatma",
                        "nail art",
                        "modern tasarım",
                        "şekillendirme",
                        "gel boya",
                ],
                promotions: [
                        {
                                title: "Arkadaşını Getir, İkili Kazan",
                                description:
                                        "Pelin ile randevu al — ziyaretinde garantili %30 indirim senin. Yanında yeni bir müşteri olan arkadaşını da getir: ikinize toplam %50 ek indirim! Paylaşımı siz belirleyin: her biri %40, ya da birine %50 + diğerine %30 — tamamen size kalmış. Arkadaş yeni müşteri olmalı.",
                                discount: "%30 + %50",
                                validUntil: "31 Mart 2026",
                                service: "Tüm Manikür Hizmetleri",
                                type: "percent",
                        },
                ],
                services: overridePrices(excludeCategories(unifiedServices, ["pedicure"]), {
                        "manicure-protez-jel": 800,
                        "manicure-protez-tips": 800,
                        "manicure-gel-guc-kalici": 700,

                }),
        },

];
