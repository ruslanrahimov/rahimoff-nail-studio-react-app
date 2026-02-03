import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = ({ title, text, image, isReversed, children }) => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Elegant staggered entrance animation
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2 }
      )
        .fromTo(
          contentRef.current.querySelector(".hero-title"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          contentRef.current.querySelector(".hero-text"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          contentRef.current.querySelector(".hero-buttons"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-modern">
      <div className={`hero-modern-grid ${isReversed ? "hero-reversed" : ""}`}>
        {/* IMAGE */}
        <div className="hero-modern-image-wrapper">
          <div
            ref={imageRef}
            className="hero-modern-image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="hero-image-overlay"></div>
          </div>
          {/* Decorative element */}
          <div className="hero-decorative-accent"></div>
        </div>

        {/* CONTENT */}
        <div ref={contentRef} className="hero-modern-content">
          <div className="hero-content-inner">
            <div className="hero-label">
              <span className="hero-label-text">PROMOSYON</span>
              <div className="hero-label-line"></div>
            </div>

            <h1 className="hero-title">{title}</h1>

            <p className="hero-text">{text}</p>

            <div className="hero-buttons">{children}</div>

            {/* Decorative corner element */}
            <div className="hero-corner-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
