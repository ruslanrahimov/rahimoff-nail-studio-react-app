import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SectionHeading.css";

gsap.registerPlugin(ScrollTrigger);

const SectionHeading = ({ label, title, className = "" }) => {
  const decorLineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!decorLineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        decorLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`section-heading ${className}`}>
      {label && (
        <div className="section-heading-label">
          <span className="section-heading-label-text">{label}</span>
          <div ref={decorLineRef} className="section-heading-label-line"></div>
        </div>
      )}
      <h2 className="section-heading-title">{title}</h2>
    </div>
  );
};

export default SectionHeading;
