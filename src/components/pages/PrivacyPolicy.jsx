import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./../SectionHeading/SectionHeading.jsx";
import "./PrivacyPolicy.css";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const pageRef = useRef(null);
  const policiesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const policyCards = policiesRef.current?.querySelectorAll(".policy-card");

      if (policyCards) {
        gsap.fromTo(
          policyCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: policiesRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const policies = [
    {
      number: "01",
      title: "Genel Hükümler",
      content:
        "Bu Gizlilik Politikası, Türkiye'de bulunan Rahimoff Güzellik Salonu'nun (bundan sonra 'Salon' olarak anılacaktır) 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca müşteri kişisel verilerinin işlenmesi ve korunmasına ilişkin esasları belirlemektedir.",
    },
    {
      number: "02",
      title: "Veri Sorumlusu",
      content: "Kişisel verilerin veri sorumlusu Türkiye'de kayıtlı Rahimoff Güzellik Salonu'dur.",
    },
    {
      number: "03",
      title: "Kişisel Verilerin İşlenme Amaçları",
      items: [
        "Salon hizmetlerinin sunulması, randevu alınması, danışmanlık verilmesi ve işlemlerin gerçekleştirilmesi.",
        "Müşteri ilişkilerinin yönetimi, yeni hizmetler, kampanyalar ve özel teklifler hakkında bilgilendirme.",
        "Türkiye mevzuatına uygun şekilde muhasebe ve vergi yükümlülüklerinin yerine getirilmesi.",
        "Güvenliğin sağlanması ve dolandırıcılıkların önlenmesi.",
      ],
    },
    {
      number: "04",
      title: "İşlenen Kişisel Veriler",
      items: [
        "Ad, soyad.",
        "İletişim bilgileri (telefon numarası, e-posta adresi).",
        "Önceki ziyaretler ve müşteri tercihleri hakkında bilgiler.",
        "Ödeme bilgileri (hizmetin nakitsiz ödenmesi durumunda).",
      ],
    },
    {
      number: "05",
      title: "Kişisel Veri İşleme Hukuki Sebepleri",
      items: [
        "Veri sahibinin açık rızası.",
        "Salon ile müşteri arasında kurulan sözleşmenin ifası için zorunlu olması.",
        "Türkiye Cumhuriyeti yasaları uyarınca Salon'un yasal yükümlülüklerini yerine getirmesi.",
      ],
    },
    {
      number: "06",
      title: "Veri Sahiplerinin Hakları",
      items: [
        "Kişisel verilerinin işlenip işlenmediğini öğrenme.",
        "Kişisel veriler işlenmişse buna ilişkin bilgi talep etme.",
        "Kişisel verilerin düzeltilmesini veya silinmesini talep etme.",
        "Belirli durumlarda kişisel verilerinin işlenmesine itiraz etme.",
      ],
    },
    {
      number: "07",
      title: "Kişisel Verilerin Güvenliği",
      content:
        "Salon, kişisel verilerin yetkisiz erişime, değiştirilmesine veya yok edilmesine karşı korunması amacıyla gerekli teknik ve idari tedbirleri almaktadır.",
    },
    {
      number: "08",
      title: "Kişisel Verilerin Saklama Süresi",
      content:
        "Kişisel veriler, işleme amaçlarının gerektirdiği süre boyunca veya Türkiye mevzuatında öngörülen süre kadar saklanmaktadır.",
    },
    {
      number: "09",
      title: "Kişisel Verilerin Üçüncü Kişilere Aktarılması",
      content:
        "Salon, kişisel verileri yalnızca Türkiye mevzuatında öngörülen durumlarda veya veri sahibinin açık rızası ile üçüncü kişilere aktarabilir.",
    },
    {
      number: "10",
      title: "İletişim Bilgileri",
      subtitle: "Aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:",
      items: [
        "Adres: Atatürk Mah. Ertuğrul Gazi Sk. Metropol İstanbul Sitesi A1 Blok Kat 4, 34758",
        "Telefon: +90 533 361 71 07",
        "E-posta: info@rahimoff.com",
      ],
    },
  ];

  return (
    <div ref={pageRef} className="privacy-policy-page">
      <section className="privacy-policy-hero">
        <div className="privacy-policy-container">
          <SectionHeading
            label="PRIVACY POLICY"
            title="Gizlilik ve Kişisel Verilerin Korunması Politikası"
          />
          <div className="privacy-intro-grid">
            <div className="privacy-intro-icon">
              <svg
                className="privacy-shield-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L4 6V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V6L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="privacy-intro-text">
              <p className="privacy-intro-paragraph">
                Rahimoff Nail Studio olarak, müşterilerimizin kişisel verilerinin güvenliği ve
                gizliliği bizim için en yüksek önceliğe sahiptir. Bu politika, 6698 sayılı Kişisel
                Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin nasıl
                toplandığını, işlendiğini ve korunduğunu açıklamaktadır.
              </p>
              <div className="privacy-compliance-badge">
                <span className="compliance-badge-icon">✓</span>
                <span className="compliance-badge-text">KVKK Uyumlu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={policiesRef} className="privacy-policy-content">
        <div className="privacy-policy-container">
          <div className="policies-grid">
            {policies.map((policy, index) => (
              <div
                key={index}
                className={`policy-card ${index % 2 === 0 ? "policy-card-light" : "policy-card-dark"}`}
              >
                <div className="policy-card-header">
                  <span className="policy-number">{policy.number}</span>
                  <h3 className="policy-title">{policy.title}</h3>
                </div>
                <div className="policy-content">
                  {policy.subtitle && <p className="policy-subtitle">{policy.subtitle}</p>}
                  {policy.items ? (
                    <ul className="policy-list">
                      {policy.items.map((item, i) => (
                        <li key={i} className="policy-list-item">
                          <span className="policy-bullet">•</span>
                          <span className="policy-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="policy-paragraph">{policy.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="privacy-policy-footer">
        <div className="privacy-policy-container">
          <div className="privacy-footer-content">
            <div className="privacy-footer-icon">
              <svg
                className="lock-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </svg>
            </div>
            <p className="privacy-footer-text">
              Bu politika, yasal düzenlemelerde veya iş uygulamalarımızda değişiklik olması
              durumunda güncellenebilir. Son güncelleme tarihi: {new Date().toLocaleDateString("tr-TR")}
            </p>
            <div className="privacy-footer-signature">
              <div className="signature-line"></div>
              <span className="signature-text">Rahimoff Nail Studio</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
