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
          [".hero-m-label", ".hero-m-title", ".hero-m-desc"],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.8"
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
      <div className="hero-masters-grid">
        {/* LEFT: editorial content */}
        <div className="hero-m-content-col">
          <div className="hero-m-inner">
            <div className="hero-m-label">
              <span className="hero-m-label-text">NAIL STUDIO · ISPARTA</span>
              <div className="hero-m-label-line" />
            </div>

            <h1 className="hero-m-title">
              Tırnaklarınız,
              <br />
              bir <em className="hero-m-title-accent">sanat eseri</em>.
            </h1>

            <p className="hero-m-desc">
              Isparta'nın merkezinde, steril ekipman ve sekiz yılı aşkın
              ustalıkla manikür, pedikür ve protez tırnak bakımı.
            </p>

            <div className="hero-m-actions">
              <a
                href={wpChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-m-btn hero-m-btn--primary"
              >
                <span>Randevu Al</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 L17 7" />
                  <path d="M10 7 H17 V14" />
                </svg>
              </a>

              <Link
                to="/services"
                className="hero-m-btn hero-m-btn--ghost"
              >
                Hizmetler & Fiyatlar
              </Link>
            </div>

            <ul className="hero-m-stats" aria-label="Studio öne çıkanları">
              <li>
                <strong>8+</strong> yıl tecrübe
              </li>
              <li aria-hidden="true" className="hero-m-stats-dot" />
              <li>
                <strong>2000+</strong> mutlu misafir
              </li>
              <li aria-hidden="true" className="hero-m-stats-dot" />
              <li>
                <strong>%100</strong> steril ekipman
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT: atmospheric image */}
        <div className="hero-m-image-col">
          <div
            ref={imageRef}
            className="hero-m-image"
            style={{ backgroundImage: `url(${baseUrl}discount-cover.webp)` }}
          >
            <div className="hero-m-image-overlay" />
            <span className="hero-m-studio-watermark" aria-hidden="true">
              RAHIMOFF
            </span>
          </div>
          <div className="hero-m-corner-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default HeroMasters;
