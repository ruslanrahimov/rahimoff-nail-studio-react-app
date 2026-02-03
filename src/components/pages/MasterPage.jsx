import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { masters } from "../../data/masters.js";
import MasterPriceListTabs from "../MasterPriceListTabs.jsx";
import "./MasterPage.css";

gsap.registerPlugin(ScrollTrigger);

const levelTitles = {
  top: "Top Master",
  middle: "Middle Master",
  "junior-plus": "Junior+",
  intern: "Stajyer",
};

const MasterPage = () => {
  const { id } = useParams();
  const master = masters.find((m) => m.id === id);

  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const skillsRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!master) return;

    const ctx = gsap.context(() => {
      const ease = "power3.out";

      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelector(".master-photo-wrapper"),
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease }
        );

        gsap.fromTo(
          headerRef.current.querySelector(".master-info"),
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.8, ease, delay: 0.2 }
        );
      }

      // Skills animation
      if (skillsRef.current) {
        const tags = skillsRef.current.querySelectorAll(".master-skill-tag");
        gsap.fromTo(
          tags,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease,
            stagger: 0.05,
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Gallery animation
      if (galleryRef.current) {
        const items = galleryRef.current.querySelectorAll(".master-gallery-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease,
            stagger: 0.1,
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, [master]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="master-star filled">
            ★
          </span>
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <span key={i} className="master-star filled" style={{ opacity: 0.5 }}>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="master-star">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  if (!master) {
    return (
      <div className="master-page">
        <div className="master-page-container">
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "14px",
              color: "#5a5a5a",
              textAlign: "center",
              padding: "60px 0",
            }}
          >
            Master bulunamadı.
          </p>
        </div>
      </div>
    );
  }

  const levelClassName = `level-${master.level}`;

  return (
    <div ref={pageRef} className="master-page">
      <div className="master-page-container">
        {/* HEADER SECTION */}
        <div ref={headerRef} className="master-header">
          {/* Photo */}
          <div className="master-photo-wrapper">
            <img src={master.photo} alt={master.name} className="master-photo" />
            <div className="master-photo-overlay"></div>
            <div className="master-photo-corner-accent"></div>

            {/* Badge */}
            <div className={`master-badge ${levelClassName}`}>
              <span className="master-badge-text">{levelTitles[master.level]}</span>
            </div>
          </div>

          {/* Info */}
          <div className="master-info">
            <h1 className="master-name">{master.name}</h1>
            <p className="master-role">{master.role}</p>

            {/* Meta */}
            <div className="master-meta">
              <span className="master-experience">{master.experience}</span>
              <div className="master-rating">{renderStars(master.rating)}</div>
            </div>

            {/* Description */}
            <p className="master-description">{master.description}</p>

            {/* CTA */}
            <a
              href={`https://wa.me/905060552137?text=${encodeURIComponent(
                `Merhaba! ${master.name} için randevu almak istiyorum. Müsait olduğunuz saatleri paylaşabilir misiniz?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="master-cta"
            >
              Randevu Al <span style={{ fontVariantEmoji: 'text' }}>→</span>
            </a>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div ref={skillsRef} className="master-skills-section">
          <h2 className="master-section-title">Uzmanlık Alanları</h2>
          <div className="master-skills-list">
            {master.skills.map((skill, i) => (
              <span key={i} className="master-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* PRICE LIST */}
        <MasterPriceListTabs masterId={master.id} />

        {/* GALLERY SECTION */}
        <div ref={galleryRef} className="master-gallery-section">
          <h2 className="master-section-title">Çalışmalar</h2>
          <div className="master-gallery-grid">
            {/* Featured first image */}
            <div className="master-gallery-item featured">
              <img src={master.gallery[0]} alt="" className="master-gallery-image" />
            </div>

            {/* Other images */}
            {master.gallery.slice(1).map((img, i) => (
              <div key={i} className="master-gallery-item">
                <img src={img} alt="" className="master-gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPage;
