import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./../SectionHeading/SectionHeading.jsx";
import "./SalonRules.css";

gsap.registerPlugin(ScrollTrigger);

const SalonRules = () => {
  const pageRef = useRef(null);
  const rulesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ruleCards = rulesRef.current?.querySelectorAll(".rule-card");

      if (ruleCards) {
        gsap.fromTo(
          ruleCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rulesRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const rules = [
    {
      number: "01",
      title: "Randevu Sistemi",
      items: [
        "Hizmet almak için önceden randevu alınması gerekmektedir.",
        "Randevular telefonla, WhatsApp üzerinden veya sosyal medya hesaplarımız aracılığıyla alınabilir.",
        "Randevunuza zamanında gelmeniz önemlidir. 15 dakikadan fazla gecikme durumunda randevunuz iptal edilebilir veya bekleme sırasına alınabilirsiniz.",
        "Randevuyu iptal etmek veya değiştirmek için en az 12 saat önceden haber verilmesi rica olunur.",
      ],
    },
    {
      number: "02",
      title: "Gecikme ve İptal Politikası",
      items: [
        "15 dakikadan fazla gecikme durumunda hizmet süresi kısalabilir veya randevu iptal edilebilir.",
        "İptal etmeden randevuya gelmemeniz halinde, bir sonraki randevular için ön ödeme talep edilebilir.",
        "Sürekli geç kalma veya gelmeme durumunda hizmet vermeme hakkımız saklıdır.",
      ],
    },
    {
      number: "03",
      title: "Hijyen ve Güvenlik",
      items: [
        "Tüm aletlerimiz sterilizasyon kurallarına uygun şekilde dezenfekte edilir.",
        "Tek kullanımlık malzemeler kullanılmaktadır.",
        "Kendi manikür setinizi getirmenize gerek yoktur.",
        "Her müşteriden sonra temizlik ve dezenfeksiyon işlemleri uygulanır.",
      ],
    },
    {
      number: "04",
      title: "Çocuk ve Refakatçi ile Gelmek",
      items: [
        "Odak ve konsantrasyon gerektiren işlemler için küçük çocuklarla gelinmesi önerilmez.",
        "Sınırlı alanımız nedeniyle yalnızca bir refakatçi kabul edilmektedir.",
      ],
    },
    {
      number: "05",
      title: "Hizmet Memnuniyeti ve Garanti",
      items: [
        "Hizmetten memnun kalmazsanız, lütfen 3 gün içinde bizimle iletişime geçiniz.",
        "Kalıcı oje ve protez tırnak uygulamalarında şikayetler en geç 5 gün içinde bildirilmelidir.",
        "Uzmanlarımıza saygılı davranılmasını bekliyoruz. Kaba veya tehdit içeren davranışlar kabul edilmez.",
      ],
    },
    {
      number: "06",
      title: "Ödeme ve Fiyatlandırma",
      items: [
        "Güncel fiyatlarımız salonumuzda, web sitemizde ve sosyal medya hesaplarımızda mevcuttur.",
        "Ödemeler nakit, banka kartı veya dijital yöntemlerle yapılabilir.",
        "Kampanya ve indirimler yalnızca belirtilen şartlar ve tarihler arasında geçerlidir.",
      ],
    },
    {
      number: "07",
      title: "Fotoğraf ve Video Kaydı",
      content:
        "İşlemler sosyal medya ve reklam amaçlı fotoğraf/video olarak kaydedilebilir. Görsel içeriklerde yer almak istemiyorsanız, hizmetten önce uzmanınıza bildiriniz.",
    },
    {
      number: "08",
      title: "Sağlık Durumu",
      content:
        "Cilt rahatsızlığı, alerji veya bulaşıcı hastalığınız varsa, lütfen randevudan önce bildiriniz. Uzmanlarımız buna göre hizmetin uygunluğunu değerlendirecektir.",
    },
    {
      number: "09",
      title: "İletişim Bilgileri",
      items: [
        "Adres: Atatürk Mah. Ertuğrul Gazi Sk. Metropol İstanbul Sitesi A1 Blok Kat 4, 34758",
        "Telefon / WhatsApp: +90 533 361 71 07",
        "Instagram: @rahimoff.nail.studio",
        "E-posta: info@rahimoff.com",
      ],
    },
  ];

  return (
    <div ref={pageRef} className="salon-rules-page">
      <section className="salon-rules-hero">
        <div className="salon-rules-container">
          <SectionHeading
            label="SALON RULES"
            title="Rahimoff Güzellik Salonu Ziyaret Kuralları"
          />
          <p className="salon-rules-intro">
            Rahimoff Nail Studio'da sizlere en iyi hizmeti sunabilmek ve konforlu bir deneyim
            yaşatabilmek için aşağıdaki kuralları belirlemiş bulunmaktayız. Bu kurallara
            uyulması, hem sizin hem de diğer misafirlerimizin memnuniyetini sağlamak açısından
            büyük önem taşımaktadır.
          </p>
        </div>
      </section>

      <section ref={rulesRef} className="salon-rules-content">
        <div className="salon-rules-container">
          <div className="rules-grid">
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`rule-card ${index % 2 === 0 ? "rule-card-light" : "rule-card-dark"}`}
              >
                <div className="rule-card-header">
                  <span className="rule-number">{rule.number}</span>
                  <h3 className="rule-title">{rule.title}</h3>
                </div>
                <div className="rule-content">
                  {rule.items ? (
                    <ul className="rule-list">
                      {rule.items.map((item, i) => (
                        <li key={i} className="rule-list-item">
                          <span className="rule-bullet">•</span>
                          <span className="rule-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="rule-paragraph">{rule.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="salon-rules-footer">
        <div className="salon-rules-container">
          <div className="rules-footer-content">
            <div className="rules-footer-decor"></div>
            <p className="rules-footer-text">
              Bu kurallara uymak, hem sizin hem de diğer misafirlerimizin keyifli ve güvenli bir
              deneyim yaşamasını sağlar. Anlayışınız için teşekkür ederiz.
            </p>
            <div className="rules-footer-signature">
              <div className="signature-line"></div>
              <span className="signature-text">Rahimoff Nail Studio Ekibi</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalonRules;
