import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { masters } from "../../data/masters.js";
import "./HeroMasters.css";

const baseUrl = import.meta.env.BASE_URL;

const HeroMasters = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const masterPromos = masters
    .filter((m) => m.promotions?.length > 0)
    .map((m) => ({
      id: m.id,
      name: m.name,
      photo: m.photo,
      promo: m.promotions[0],
    }));

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
          "-=0.7"
        )
        .fromTo(
          ".hero-m-row",
          { opacity: 0, x: 18 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-m-footer",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.1"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-masters">
      <div className="hero-masters-grid">

        {/* LEFT: atmospheric image */}
        <div className="hero-m-image-col">
          <div
            ref={imageRef}
            className="hero-m-image"
            style={{ backgroundImage: `url(${baseUrl}discount-cover.webp)` }}
          >
            <div className="hero-m-image-overlay" />
            <div className="hero-m-image-bottom-overlay" />
            <span className="hero-m-studio-watermark" aria-hidden="true">
              RAHIMOFF
            </span>
          </div>
          <div className="hero-m-corner-accent" aria-hidden="true" />
        </div>

        {/* RIGHT: content + master rows */}
        <div className="hero-m-content-col">
          <div className="hero-m-inner">

            {/* Header */}
            <div className="hero-m-header">
              <div className="hero-m-label">
                <span className="hero-m-label-text">ÖZEL TEKLİFLER</span>
                <div className="hero-m-label-line" />
              </div>
              <h1 className="hero-m-title">
                UZMAN<br />
                <span>TEKLİFLERİ</span>
              </h1>
              <p className="hero-m-desc">
                Uzmanlarımızın sizi bekleyen kişisel fırsatları
              </p>
            </div>

            {/* Master promo rows */}
            <div className="hero-m-rows">
              {masterPromos.map((item, i) => (
                <Link
                  key={item.id}
                  to={`/masters/${item.id}#promotions`}
                  className="hero-m-row"
                >
                  <div className="hero-m-photo-wrap">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="hero-m-photo"
                    />
                  </div>

                  <div className="hero-m-info">
                    <span className="hero-m-name">{item.name}</span>
                    <span className="hero-m-promo-title">{item.promo.title}</span>
                  </div>

                  <div className="hero-m-badge">
                    <span className="hero-m-badge-value">{item.promo.discount}</span>
                    <span className="hero-m-badge-label">İndirim</span>
                  </div>

                  <div className="hero-m-arrow" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12 H19" />
                      <path d="M13 6 L19 12 L13 18" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer: all masters link */}
            <div className="hero-m-footer">
              <Link to="/masters" className="hero-m-all-link">
                Tüm Uzmanları Keşfet
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
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroMasters;
