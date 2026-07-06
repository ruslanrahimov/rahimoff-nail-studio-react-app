export const studio = {
        eyebrow: "HAKKIMIZDA",
        title: "Biz Kimiz",
        intro:
                "Rahimoff, Isparta'nın merkezinde manikür ve pedikürü sakin ve özenli bir ritüele dönüştüren bir stüdyo.",
        values: [
                {
                        id: "ozen",
                        title: "Özen",
                        description: "Otel konforunda, size özel bir atmosfer.",
                },
                {
                        id: "hijyen",
                        title: "Hijyen",
                        description: "Her işlemde %100 steril ekipman.",
                },
                {
                        id: "ustalik",
                        title: "Ustalık",
                        description: "8+ yıllık deneyim, zor vakalarda uzmanlık.",
                },
        ],
};

const baseUrl = import.meta.env.BASE_URL;

export const founder = {
        label: "KURUCU & BAŞ USTA · FOUNDER",
        name: "Elif Rahimov",
        portrait: baseUrl + "elif.jpg",
        portraitTag: "KURUCU • FOUNDER",
        lead:
                "Sıradan bir merakla başladı; bugün en zor vakaların gönül rahatlığıyla emanet edildiği bir imza.",
        paragraphs: [
                "Elif, tırnak sanatına duyduğu tutkuyu yıllar içinde gerçek bir ustalığa dönüştürdü. İlk günden bu yana her tırnağı bir sanat eseri gibi ele aldı — mükemmelliğin peşini hiç bırakmadı.",
                "Kendini geliştirmeyi bir yaşam biçimine dönüştürdü; en güncel teknikleri öğrendi ve kendi imzasıyla harmanladı. Onun için her müşteri, anlatmaya değer yeni bir başarı hikayesi.",
        ],
        stats: [
                { value: "8+", label: "yıl tecrübe" },
                { value: "2000+", label: "mutlu misafir" },
                { value: "%100", label: "steril ekipman" },
        ],
};

export const journey = {
        eyebrow: "BAŞARI HİKAYESİ",
        title: "Ustalığa Giden Yol",
        subtitle:
                "Yılların emeği, ilham veren buluşmalar ve durmak bilmeyen bir gelişim arzusu.",
        steps: [
                {
                        id: 1,
                        index: "01",
                        year: "2017",
                        title: "İlk adım",
                        description: "Bir merakın gerçek bir tutkuya dönüşmesi.",
                        mediaLabel: "İLK GÜNLER · FOTOĞRAF",
                },
                {
                        id: 2,
                        index: "02",
                        year: "2019",
                        title: "Eğitim & sertifikalar",
                        description:
                                "Alanın en iyilerinden öğrenmek, her tekniği titizlikle çalışmak.",
                        mediaLabel: "SERTIFIKA · FOTOĞRAF",
                },
                {
                        id: 3,
                        index: "03",
                        year: "2021",
                        title: "Uzmanlaşma",
                        description: "Problemli, travmatik tırnaklar ve hassas düzeltmeler.",
                        mediaLabel: "ÇALIŞMA · FOTOĞRAF",
                },
                {
                        id: 4,
                        index: "04",
                        year: "2024",
                        title: "Kendi imzası",
                        description:
                                "2000+ misafir ve en zor vakaların güvenle emanet edildiği stüdyo.",
                        mediaLabel: "STÜDYO · FOTOĞRAF",
                },
        ],
};

export const credo = {
        quote: "Her büyük ustalık, bir ilk adımla başlar.",
        tags: ["TUTKU", "SABIR", "SÜREKLI GELIŞIM"],
};
