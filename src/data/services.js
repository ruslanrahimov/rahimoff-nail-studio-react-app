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
                                price: 350,
                        },
                        {
                                id: "manicure-gel-guc-kalici",
                                name: "Manikür + Jel güçlendirme + Kalıcı Oje",
                                description:
                                        "Doğal tırnağı güçlendirmek için jel uygulaması yapılır, ardından kalıcı oje ile tamamlanır.",
                                price: 800,
                        },
                        {
                                id: "manicure-protez-jel",
                                name: "Manikür + Protez Tırnak (Jel)",
                                description: "Doğal tırnağın üzerine özel jel ile yapılan uzatma işlemi.",
                                price: 1000,
                        },
                        {
                                id: "manicure-protez-tips",
                                name: "Manikür + Protez Tırnak (Tips)",
                                description: "Yapay tırnak ucu (tips) ile yapılan uzatma işlemi.",
                                price: 1000,
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
                                price: 1000,
                        },
                        {
                                id: "pedicure-kane-basic",
                                name: "KANE Pedikür (Ojesiz)",
                                description: "KANE ürünleri ile detaylı bakım.",
                                price: 800,
                        },
                        {
                                id: "pedicure-intensive",
                                name: "Yoğun bakım pedikürü",
                                description: "Nasır, çatlak ve diğer sorunlara özel tedavi.",
                                price: "Fiyat değerlendirme sonrası belirlenir",
                        },
                        {
                                id: "pedicure-men",
                                name: "Erkek Pedikürü",
                                description: "Erkek ayağı için geliştirilmiş özel bakım protokolü.",
                                price: 1500,
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
                                price: 10,
                        },
                        {
                                id: "art-nailart-basic",
                                name: "Nail Art (1 Tırnak)",
                                description: "El boyaması veya özel tasarım.",
                                price: 50,
                        },
                        {
                                id: "art-simple-lines",
                                name: "Nokta, Çizgi, Vitray, Kedi Gözü",
                                description: "Basit küçük süslemeler.",
                                price: 15,
                        },
                        {
                                id: "art-french",
                                name: "French",
                                description: "Klasik zarif uç tasarımı.",
                                price: 20,
                        },
                        {
                                id: "art-light-design",
                                name: "Geometri (2 öğeye kadar), Sticker, Slider…",
                                description: "Hafif, sade süsleme.",
                                price: 20,
                        },
                        {
                                id: "art-advanced-design",
                                name: "Mermer, çoklu stamping, ombre",
                                description: "Daha belirgin tasarım stilleri.",
                                price: 25,
                        },
                        {
                                id: "art-beads",
                                name: "Boncuk",
                                description: "3D hacimli süsler.",
                                price: "10-30",
                        },
                        {
                                id: "art-geometry-advanced",
                                name: "Geometrik Tasarım (3+ öğe)",
                                description: "Karmaşık çizim tasarımları.",
                                price: "30-40",
                        },
                        {
                                id: "art-ombre-multi",
                                name: "Ombre (çok renkli)",
                                description: "Renk geçişli tasarım.",
                                price: "30",
                        },
                        {
                                id: "art-mermer-advanced",
                                name: "Mermer (2+ renk)",
                                description: "Doğal taş efekti.",
                                price: 30,
                        },
                        {
                                id: "art-korean-3d",
                                name: "Kore Tasarımı (Hacimli)",
                                description: "3D hacimli tasarım.",
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
                                id: "extra-remove-gel",
                                name: "Çıkartma (Jel, Akrilik, Tips)",
                                description: "Kaplamanın sağlıklı ve zarar vermeden çıkarılması.",
                                price: 300,
                        },
                        {
                                id: "extra-remove-other-salon",
                                name: "Diğer Salon İşlemi Çıkartma",
                                description: "Başka salonda yapılan işlemin çıkartılması.",
                                price: 200,
                        },
                        {
                                id: "extra-one-nail-extension",
                                name: "Tek Tırnak Uzatma",
                                description: "Sadece tek tırnak için uzatma işlemi.",
                                price: 100,
                        },
                        {
                                id: "extra-long-length",
                                name: "L ve üzeri Uzunluk Ek Ücreti",
                                description: "Uzun tırnak tercih edenler için ek ücret.",
                                price: "100-300",
                        },
                ],
        },
};

