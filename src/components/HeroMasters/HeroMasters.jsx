import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import "./HeroMasters.css";

const baseUrl = import.meta.env.BASE_URL;
const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

const HeroMasters = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const ease = "power3.out";
      const tl = gsap.timeline({ defaults: { ease } });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.2 }
      )
        .fromTo(
          ".hero-m-coupon",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.8"
        )
        .fromTo(
          [".hero-m-label", ".hero-m-title", ".hero-m-desc"],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          ".hero-m-actions > *",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        .fromTo(
          ".hero-m-stats",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-masters">
      <div className="hero-m-image-col">
        <div
          ref={imageRef}
          className="hero-m-image"
          style={{ backgroundImage: `url(${baseUrl}discount-cover.webp)` }}
        />
      </div>

      <div className="hero-m-coupon" role="note">
        <div className="hero-m-coupon-body">
          <span className="hero-m-coupon-tag">Kampanya</span>
          <div className="hero-m-coupon-headline">
            <span className="hero-m-coupon-title">
              Eski yapılan işlemin çıkartılması
            </span>
            <span className="hero-m-coupon-free">ücretsiz</span>
          </div>
          <p className="hero-m-coupon-text">
            Tırnak uzatma veya kalıcı oje işlemine gelen misafirlerimiz için eski
            yapılan işlemin çıkartılması hediye.
          </p>
        </div>
        <div className="hero-m-coupon-stub" aria-hidden="true">
          <span className="hero-m-coupon-notch hero-m-coupon-notch--top" />
          <span className="hero-m-coupon-notch hero-m-coupon-notch--bottom" />
          <span className="hero-m-coupon-stub-text">HEDİYE</span>
        </div>
      </div>

      <div className="hero-m-content">
        <span className="hero-m-label">NAIL STUDIO · ISPARTA</span>

        <h1 className="hero-m-title">
          Tırnaklarınız, bir <em>sanat eseri</em>.
        </h1>

        <p className="hero-m-desc">
          Isparta&apos;nın merkezinde, steril ekipman ve sekiz yılı aşkın ustalıkla
          manikür, pedikür ve protez tırnak bakımı.
        </p>

        <div className="hero-m-actions">
          <a
            href={wpChatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-m-btn hero-m-btn--primary"
          >
            Randevu Al <span aria-hidden="true">↗</span>
          </a>
          <Link to="/services" className="hero-m-btn hero-m-btn--ghost">
            Hizmetler & Fiyatlar
          </Link>
        </div>

        <ul className="hero-m-stats" aria-label="Studio öne çıkanları">
          <li>
            <strong>8+</strong> yıl tecrübe
          </li>
          <li>
            <strong>2000+</strong> mutlu misafir
          </li>
          <li>
            <strong>%100</strong> steril ekipman
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroMasters;
