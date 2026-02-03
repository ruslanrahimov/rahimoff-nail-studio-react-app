import { useEffect, useRef, useState } from "react";

const ValueCard = ({ title, backgroundImage, children, index, parentInView = true }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of card is visible
        rootMargin: "-50px 0px", // Adds offset to trigger point
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Subtle parallax effect on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!cardRef.current) {
            ticking = false;
            return;
          }

          const rect = cardRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;

          // Calculate progress from -1 to 1 as element passes through viewport
          const progress = 1 - (elementCenter / windowHeight);
          setScrollProgress(Math.max(-1, Math.min(1, progress)));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered animation delays for cascade effect
  const cascadeDelay = index * 0.15; // Delay between each card
  const initialY = 60; // Upward movement distance
  const initialRotate = index % 2 === 0 ? -3 : 3; // Alternating rotation

  // Parallax offset calculation
  const parallaxOffset = scrollProgress * 30;

  return (
    <div
      ref={cardRef}
      className="value-card-wrapper"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(0) scale(1) rotate(0deg)`
          : `translateY(${initialY}px) scale(0.92) rotate(${initialRotate}deg)`,
        transition: `
          opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${cascadeDelay}s,
          transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${cascadeDelay}s
        `,
      }}
    >
      <div
        className="value-card"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* Background image layer with parallax */}
        <div
          className="value-card__image-container"
          style={{
            transform: `scale(1.15) translateY(${parallaxOffset * -0.3}px)`,
          }}
        >
          <div
            className="value-card__image"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="value-card__overlay" />
        </div>

        {/* Content layer */}
        <div className="value-card__content">
          <div className="value-card__number">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="value-card__title">{title}</h3>
          <p className="value-card__text">{children}</p>
        </div>

        {/* Decorative corner accent */}
        <div className="value-card__accent" />
      </div>

      <style jsx>{`
        .value-card-wrapper {
          position: relative;
          perspective: 1200px;
          will-change: transform, opacity;
        }

        .value-card {
          position: relative;
          height: 400px;
          overflow: hidden;
          border-radius: 6px;
          background: #0a0a0a;
          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.12),
            0 16px 48px rgba(0, 0, 0, 0.18);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.16),
            0 24px 64px rgba(0, 0, 0, 0.22);
        }

        .value-card__image-container {
          position: absolute;
          inset: -8%;
          overflow: hidden;
        }

        .value-card__image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .value-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 10, 10, 0.3) 0%,
            rgba(10, 10, 10, 0.5) 40%,
            rgba(10, 10, 10, 0.85) 75%,
            rgba(10, 10, 10, 0.95) 100%
          );
        }

        .value-card__content {
          position: relative;
          height: 100%;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          z-index: 2;
        }

        .value-card__number {
          font-family: "DM Serif Display", Georgia, serif;
          font-size: 64px;
          font-weight: 400;
          line-height: 1;
          color: rgba(255, 255, 255, 0.08);
          position: absolute;
          top: 28px;
          right: 28px;
          letter-spacing: -0.02em;
        }

        .value-card__title {
          font-family: "DM Serif Display", Georgia, serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
        }

        .value-card__text {
          font-family: "Manrope", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          max-width: 100%;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        .value-card__accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 180px;
          height: 3px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.4) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          z-index: 3;
        }

        @media (max-width: 1200px) {
          .value-card {
            height: 380px;
          }

          .value-card__title {
            font-size: 28px;
          }

          .value-card__text {
            font-size: 13px;
          }
        }

        @media (max-width: 1024px) {
          .value-card {
            height: 400px;
          }

          .value-card__content {
            padding: 36px 28px;
          }

          .value-card__number {
            font-size: 56px;
            top: 24px;
            right: 24px;
          }

          .value-card__title {
            font-size: 30px;
          }

          .value-card__text {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .value-card {
            height: 420px;
          }

          .value-card__content {
            padding: 32px 28px;
          }

          .value-card__number {
            font-size: 52px;
          }

          .value-card__title {
            font-size: 28px;
            margin-bottom: 12px;
          }

          .value-card__text {
            font-size: 13px;
            line-height: 1.55;
          }

          .value-card__accent {
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default ValueCard;
