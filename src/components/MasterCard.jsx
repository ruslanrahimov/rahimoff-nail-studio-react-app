import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MasterCard.css";

gsap.registerPlugin(ScrollTrigger);

const levelTitles = {
  top: "Top Master",
  middle: "Middle Master",
  "junior-plus": "Junior+",
  intern: "Stajyer",
};

const MasterCard = ({
  id,
  name,
  role,
  experience,
  priceLevel,
  description,
  photo,
  level,
  rating,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="master-card-star filled">
            ★
          </span>
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <span key={i} className="master-card-star filled" style={{ opacity: 0.5 }}>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="master-card-star">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  const levelClassName = `level-${level}`;

  return (
    <Link to={`/masters/${id}`} ref={cardRef} className="master-card master-card-animate">
      {/* Corner accent - appears on hover */}
      <div className="master-card-corner-accent"></div>

      {/* Photo Section - Full Width */}
      <div className="master-card-photo-section">
        <img src={photo} alt={name} className="master-card-photo" />
        <div className="master-card-photo-overlay"></div>

        {/* Level badge */}
        <div className={`master-card-level ${levelClassName}`}>
          <span className="master-card-level-text">{levelTitles[level]}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="master-card-content">
        {/* Name */}
        <h3 className="master-card-name">{name}</h3>

        {/* Role */}
        <p className="master-card-role">{role}</p>

        {/* Divider */}
        <div className="master-card-divider"></div>

        {/* Experience & Price */}
        <div className="master-card-meta">
          <span className="master-card-experience">{experience}</span>
          <span className="master-card-price">{priceLevel}</span>
        </div>

        {/* Rating */}
        <div className="master-card-rating">{renderStars(rating)}</div>

        {/* Description */}
        <p className="master-card-description">{description}</p>

        {/* Link */}
        <div className="master-card-link-wrapper">
          <span className="master-card-link">
            Detaylı Bilgi
            <span className="master-card-link-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 L17 7" />
                <path d="M10 7 H17 V14" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MasterCard;
