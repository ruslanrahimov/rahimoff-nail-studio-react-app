const baseUrl = import.meta.env.BASE_URL;

// duration: işlemin yaklaşık süresi (serbest metin, olduğu gibi gösterilir).
// Örn: "30dk ortalama", "1.5 saat ortalama", "2 saat ortalama". null ise süre gösterilmez.
//
// details (opsiyonel): hizmet kartı açıldığında gösterilen ayrıntılar.
//   summary  – 1-2 cümle: işlem nedir, ne yapılır.
//   includes – fiyata dahil adımlar (madde madde).
//   goodFor  – kimlere uygun / hangi durumlarda önerilir.
//   notFor   – kimlere uygun değil / kontrendikasyonlar.
//   notes    – önemli notlar, nüanslar (dolgu sıklığı, çıkartma ayrı ücret vb.).
//   aftercare – (opsiyonel) işlem sonrası bakım önerisi.
// details yoksa kart açılmaz, sadece bilgi satırı gösterilir.
//
// photo (opsiyonel): public/services/ klasöründeki gerçek işlem fotoğrafı.
// Belirtilmezse kart, kategorinin genel fotoğrafını (image) kullanır.
// Yeni fotoğraf eklendikçe ilgili hizmete `photo: baseUrl + "services/dosya.jpg"` eklenir.

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
                                price: 500,
                                duration: "30dk ortalama",
                                photo: baseUrl + "services/manicure.jpg",
                                details: {
                                        summary:
                                                "Tırnak kenarındaki fazla derinin temizlenmesi, tırnakların istenen forma getirilmesi ve temel el bakımını içeren klasik manikür.",
                                        includes: [
                                                "Tırnak dosyalama ve şekillendirme",
                                                "Tırnak eti (kütikül) bakımı ve et kesimi",
                                                "Yüzey zımparası ve doğal parlatma",
                                                "Nemlendirici el bakımı",
                                        ],
                                        goodFor: [
                                                "Düzenli, sade bakım",
                                                "Doğal görünüm",
                                                "İlk kez yaptıracaklar",
                                        ],
                                        notFor: [
                                                "Uzun süre kalıcı renk",
                                                "Tırnak uzatmak isteyenler",
                                        ],
                                        notes: [
                                                "Ortalama 30 dakika sürer",
                                                "İstenirse kalıcı oje eklenebilir; süre ve ücret buna göre değişir",
                                        ],
                                },
                        },
                        {
                                id: "manicure-gel-guc-kalici",
                                name: "Manikür + Jel güçlendirme + Kalıcı Oje",
                                description:
                                        "Doğal tırnağı güçlendirmek için jel uygulaması yapılır, ardından kalıcı oje ile tamamlanır.",
                                price: 950,
                                duration: "1.5 saat ortalama",
                                photo: baseUrl + "services/kalici.jpeg",
                                details: {
                                        summary:
                                                "Doğal tırnağın üzerine ince bir jel tabakası uygulanarak güçlendirilmesi, ardından 2-3 hafta dayanan kalıcı oje ile tamamlanması.",
                                        includes: [
                                                "Kuru manikür ve tırnak hazırlığı",
                                                "Jel ile güçlendirme katmanı",
                                                "Kalıcı oje uygulaması (tek renk)",
                                                "Şekillendirme ve son parlatma",
                                        ],
                                        goodFor: [
                                                "İnce / kırılgan tırnaklar",
                                                "2-3 hafta kalıcılık",
                                                "Kendi tırnağını uzatanlar",
                                        ],
                                        notFor: [
                                                "Aktif tırnak mantarı",
                                                "Hasarlı tırnak yatağı",
                                                "Bilinen jel alerjisi",
                                        ],
                                        notes: [
                                                "3-4 haftada bir yenileme (dolgu) önerilir",
                                                "Eski kaplamanın çıkartılması ayrı ücretlendirilir",
                                                "Ortalama 1,5 saat sürer",
                                        ],
                                        aftercare:
                                                "İlk 24 saat uzun sıcak su temasından kaçının; tırnak etine düzenli olarak bakım yağı uygulayın.",
                                },
                        },
                        {
                                id: "manicure-protez-jel",
                                name: "Manikür + Protez Tırnak (Jel)",
                                description: "Doğal tırnağın üzerine özel jel ile yapılan uzatma işlemi.",
                                price: 1100,
                                duration: "2 saat ortalama",
                                photo: baseUrl + "services/protez.webp",
                                details: {
                                        summary:
                                                "Kalıp yardımıyla doğal tırnağa boy ve form kazandırılan, özel jel ile modellenen uzatma işlemi.",
                                        includes: [
                                                "Kuru manikür ve yüzey hazırlığı",
                                                "Kalıp ile boy oluşturma",
                                                "Jel ile modelleme ve istenen form",
                                                "Kalıcı oje veya doğal finiş",
                                        ],
                                        goodFor: [
                                                "Boy & form kazanmak",
                                                "Özel gün öncesi",
                                                "Çok kısa / düz tırnaklar",
                                        ],
                                        notFor: [
                                                "Ağır el işi yapanlar",
                                                "Aktif tırnak mantarı",
                                                "Düzenli bakım ayıramayanlar",
                                        ],
                                        notes: [
                                                "2-3 haftada bir dolgu gerekir",
                                                "L ve üzeri uzunlukta ek ücret uygulanır",
                                                "Çıkartma ayrı ücretlendirilir",
                                                "Ortalama 2 saat sürer",
                                        ],
                                },
                        },
                        {
                                id: "manicure-protez-tips",
                                name: "Manikür + Protez Tırnak (Tips)",
                                description: "Yapay tırnak ucu (tips) ile yapılan uzatma işlemi.",
                                price: 1100,
                                duration: "2 saat ortalama",
                                photo: baseUrl + "services/protez.webp",
                                details: {
                                        summary:
                                                "Doğal tırnağın ucuna yapay tırnak ucu (tips) yapıştırılıp jel ile sabitlenerek yapılan hızlı uzatma işlemi.",
                                        includes: [
                                                "Kuru manikür ve yüzey hazırlığı",
                                                "Uygun tips seçimi ve yapıştırma",
                                                "Geçiş noktasının inceltilip düzleştirilmesi",
                                                "Jel ile sabitleme, form ve finiş",
                                        ],
                                        goodFor: [
                                                "Hızlı boy uzatma",
                                                "Düzgün uç yapısı olmayanlar",
                                        ],
                                        notFor: [
                                                "Çok yassı / kavisli tırnak",
                                                "Aktif tırnak mantarı",
                                                "Yoğun su teması",
                                        ],
                                        notes: [
                                                "2-3 haftada bir dolgu önerilir",
                                                "L ve üzeri uzunlukta ek ücret uygulanır",
                                                "Çıkartma ayrı ücretlendirilir",
                                                "Ortalama 2 saat sürer",
                                        ],
                                },
                        },
                        {
                                id: "manicure-men",
                                name: "Erkek Manikürü",
                                description: "Erkekler için tırnak şekillendirme ve bakım.",
                                price: 750,
                                duration: "30dk ortalama",
                                photo: baseUrl + "services/erkek-manic.jpg",
                                details: {
                                        summary:
                                                "Erkekler için tırnak kısaltma ve şekillendirme, kütikül bakımı ve mat finişli el bakımı.",
                                        includes: [
                                                "Tırnak kesimi ve dosyalama",
                                                "Kütikül bakımı ve et batması eğilimli bölgelerin düzenlenmesi",
                                                "Yüzey zımparası ve mat parlatma",
                                                "Nemlendirici el bakımı",
                                        ],
                                        goodFor: [
                                                "Doğal, bakımlı görünüm",
                                                "Toplantı / etkinlik öncesi",
                                                "Et batması eğilimi",
                                        ],
                                        notFor: [
                                                "Renkli oje bekleyenler",
                                        ],
                                        notes: [
                                                "Ortalama 30 dakika sürer",
                                                "İstenirse mat koruyucu kaplama eklenebilir",
                                        ],
                                },
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
                                price: 1300,
                                duration: "1.5 saat ortalama",
                                photo: baseUrl + "services/ayak-kalici.webp",
                                details: {
                                        summary:
                                                "KANE tekniğiyle uygulanan detaylı ayak bakımı, kalıcı oje ile tamamlanır.",
                                        includes: [
                                                "Ayak banyosu ve yumuşatma",
                                                "Tırnak kesimi ve şekillendirme",
                                                "Nasır ve sertleşmiş bölge bakımı (KANE tekniği)",
                                                "Kalıcı oje uygulaması",
                                        ],
                                        goodFor: [
                                                "Tatil / yaz sezonu öncesi",
                                                "3-4 hafta kalıcılık",
                                                "Düzenli ayak bakımı",
                                        ],
                                        notFor: ["Sadece hızlı, kısa bakım", "Açık yara / enfeksiyon"],
                                        notes: [
                                                "Ortalama 1,5 saat sürer",
                                                "Kalıcı ojenin çıkartılması ayrı ücretlendirilir",
                                        ],
                                },
                        },
                        {
                                id: "pedicure-kane-basic",
                                name: "KANE Pedikür (Ojesiz)",
                                description: "KANE ürünleri ile detaylı bakım.",
                                price: 1000,
                                duration: "1 saat ortalama",
                                photo: baseUrl + "services/pedicure.webp",
                                details: {
                                        summary: "Renk olmadan, KANE tekniğiyle yapılan detaylı ayak bakımı.",
                                        includes: [
                                                "Ayak banyosu ve yumuşatma",
                                                "Tırnak kesimi ve şekillendirme",
                                                "Nasır ve sertleşmiş bölge bakımı",
                                                "Nemlendirici ayak bakımı",
                                        ],
                                        goodFor: ["Doğal görünüm", "Düzenli bakım", "Renkli oje istemeyenler"],
                                        notFor: ["Kalıcı renk isteyenler — ojeli paket önerilir"],
                                        notes: ["Ortalama 1 saat sürer"],
                                },
                        },
                        {
                                id: "pedicure-intensive",
                                name: "Yoğun bakım pedikürü",
                                description: "Nasır, çatlak ve diğer sorunlara özel tedavi.",
                                price: "Fiyat değerlendirme sonrası belirlenir",
                                duration: null,
                                photo: baseUrl + "services/yogun-pedicure.webp",
                                details: {
                                        summary:
                                                "Nasır, topuk çatlağı ve benzeri sorunlara yönelik, duruma özel yoğun bakım tedavisi.",
                                        includes: [
                                                "Detaylı ayak muayenesi",
                                                "Soruna özel tedavi planı",
                                                "Yoğun bakım uygulaması",
                                                "Koruyucu nemlendirme",
                                        ],
                                        goodFor: [
                                                "Belirgin nasır / çatlak sorunu",
                                                "Önceki bakımdan sonuç alamayanlar",
                                        ],
                                        notFor: ["Sadece standart bakım — KANE Pedikür yeterlidir"],
                                        notes: ["Fiyat ve süre, muayene sonrası duruma göre belirlenir"],
                                },
                        },
                        {
                                id: "pedicure-men",
                                name: "Erkek Pedikürü",
                                description: "Erkek ayağı için geliştirilmiş özel bakım protokolü.",
                                price: 1500,
                                duration: "1 saat ortalama",
                                photo: baseUrl + "services/erkek-pedicure.jpg",
                                details: {
                                        summary:
                                                "Erkek ayak yapısına özel geliştirilmiş, nasır ve sertleşme odaklı bakım protokolü.",
                                        includes: [
                                                "Ayak banyosu ve yumuşatma",
                                                "Tırnak kesimi ve şekillendirme",
                                                "Nasır ve sertleşmiş bölge bakımı",
                                                "Mat nemlendirici bakım",
                                        ],
                                        goodFor: ["Düzenli ayak bakımı isteyen erkekler", "Yoğun ayakta çalışanlar"],
                                        notFor: [],
                                        notes: ["Ortalama 1 saat sürer"],
                                },
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
                                photo: baseUrl + "services/tasarim-jelleri.jpg",
                        },
                        {
                                id: "art-nailart-basic",
                                name: "Nail Art (1 Tırnak)",
                                description: "El boyaması veya özel tasarım.",
                                price: 50,
                                photo: baseUrl + "services/nailart.jpg",
                        },
                        {
                                id: "art-simple-lines",
                                name: "Nokta, Çizgi, Vitray, Kedi Gözü",
                                description: "Basit küçük süslemeler.",
                                price: 20,
                                photo: baseUrl + "services/kedi-gozu.jpg",
                        },
                        {
                                id: "art-french",
                                name: "French",
                                description: "Klasik zarif uç tasarımı. (10 parmak için fiyat)",
                                price: 300,
                                photo: baseUrl + "services/french.jpg",
                        },
                        {
                                id: "art-light-design",
                                name: "Geometri (2 öğeye kadar), Sticker, Slider…",
                                description: "Hafif, sade süsleme.",
                                price: 20,
                                photo: baseUrl + "services/geometri.jpg",
                        },
                        {
                                id: "art-advanced-design",
                                name: "Mermer, çoklu stamping, ombre",
                                description: "Daha belirgin tasarım stilleri.",
                                price: 25,
                                photo: baseUrl + "services/stemp.jpg",
                        },
                        {
                                id: "art-beads",
                                name: "Boncuk",
                                description: "3D hacimli süsler.",
                                price: "10-30",
                                photo: baseUrl + "services/boncuk.jpg",
                        },
                        {
                                id: "art-geometry-advanced",
                                name: "Geometrik Tasarım (3+ öğe)",
                                description: "Karmaşık çizim tasarımları.",
                                price: "30-40",
                                photo: baseUrl + "services/geometri-advanced.jpg",
                        },
                        {
                                id: "art-ombre-multi",
                                name: "Ombre (çok renkli)",
                                description: "Renk geçişli tasarım. (10 parmak için fiyat)",
                                price: 300,
                                photo: baseUrl + "services/ombre.jpg",
                        },
                        {
                                id: "art-mermer-advanced",
                                name: "Mermer (2+ renk)",
                                description: "Doğal taş efekti.",
                                price: 30,
                                photo: baseUrl + "services/mermer.jpg",
                        },
                        {
                                id: "art-korean-3d",
                                name: "Kore Tasarımı (Hacimli)",
                                description: "3D hacimli tasarım.",
                                price: "30-50",
                                photo: baseUrl + "services/3d-art.jpg",
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
                                price: 400,
                                photo: baseUrl + "services/cikartma.jpg",
                                duration: "30dk ortalama",
                                details: {
                                        summary:
                                                "Mevcut jel, akrilik veya tips kaplamasının tırnağa zarar vermeden profesyonelce çıkarılması.",
                                        includes: [
                                                "Kaplamanın yumuşatılması",
                                                "Dikkatli kazıma / çözme",
                                                "Tırnak yüzeyinin düzeltilmesi",
                                                "Nemlendirici bakım",
                                        ],
                                        goodFor: ["Başka uygulamaya geçmeden önce", "Kaplamayı tamamen kaldırmak"],
                                        notFor: [],
                                        notes: [
                                                "Ortalama 30 dakika sürer",
                                                "Yeni uygulamayla birlikte yaptırılırsa süreden tasarruf sağlar",
                                        ],
                                },
                        },
                        {
                                id: "extra-one-nail-extension",
                                name: "Tek Tırnak Uzatma",
                                description: "Sadece tek tırnak için uzatma işlemi.",
                                price: 100,
                                photo: baseUrl + "services/tek-tirnak.jpg",
                                details: {
                                        summary:
                                                "Kırılan veya kısa kalan tek bir tırnağın diğerleriyle aynı boya getirilmesi.",
                                        includes: [
                                                "Kalıp veya tips ile boy oluşturma",
                                                "Jel ile modelleme",
                                                "Diğer tırnaklarla renk / form eşitleme",
                                        ],
                                        goodFor: ["Tek tırnağı kırılanlar", "Randevu arası acil dokunuş"],
                                        notFor: ["Birden fazla tırnağı uzatmak — komple pakete bakınız"],
                                        notes: [],
                                },
                        },
                        {
                                id: "extra-long-length",
                                name: "L ve üzeri Uzunluk Ek Ücreti",
                                description: "Uzun tırnak tercih edenler için ek ücret.",
                                price: "100-300",
                                photo: baseUrl + "services/uzunluk.jpg",
                        },
                ],
        },
};

