import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MasterPromotions.css";

gsap.registerPlugin(ScrollTrigger);

const SparkleIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
  </svg>
);

const ScissorsIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <line x1="20" y1="4" x2="8.5" y2="15.5" />
    <line x1="14.5" y1="14.5" x2="20" y2="20" />
    <line x1="8.5" y1="8.5" x2="12" y2="12" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MasterPromotions = ({ promotions, masterName, whatsappNumber }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".promo-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const buildWhatsAppLink = (promotionTitle) => {
    const text = encodeURIComponent(
      `Merhaba! ${masterName} için "${promotionTitle}" promosyonundan yararlanmak istiyorum. Randevu almak için müsait saatleri paylaşabilir misiniz?`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <div ref={sectionRef} className="master-promotions-section">
      <div className="promo-section-header">
        <h2 className="master-section-title">Özel Teklifler</h2>
        <span className="promo-section-badge">
          <SparkleIcon />
          {promotions.length} Aktif Teklif
        </span>
      </div>

      <div className="promo-cards-list">
        {promotions.map((promo, i) => (
          <div key={i} className={`promo-card promo-card--${promo.type}`}>
            {/* Left accent stripe */}
            <div className="promo-accent-stripe" />

            {/* Card content */}
            <div className="promo-content">
              <div className="promo-header-row">
                <div className="promo-icon-wrap">
                  <SparkleIcon />
                </div>
                <h3 className="promo-title">{promo.title}</h3>
              </div>

              <p className="promo-description">{promo.description}</p>

              <div className="promo-meta">
                <span className="promo-service-tag">
                  <ScissorsIcon />
                  {promo.service}
                </span>
                <span className="promo-validity">
                  <CalendarIcon />
                  <span className="promo-validity-label">Son:</span>
                  {promo.validUntil}
                </span>
              </div>
            </div>

            {/* Discount badge */}
            <div className="promo-discount-area">
              <span className="promo-discount-value">{promo.discount}</span>
              <span className="promo-discount-label">İndirim</span>
            </div>

            {/* CTA */}
            <a
              href={buildWhatsAppLink(promo.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="promo-cta-btn"
            >
              <span className="promo-cta-text">Randevu Al</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12 H19" />
                <path d="M13 6 L19 12 L13 18" />
              </svg>
            </a>

            {/* Corner accent */}
            <div className="promo-corner-accent" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterPromotions;
