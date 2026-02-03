import { brandsData } from "../../data/brandsData.js";
import { useEffect, useRef } from "react";
import "./Brands.css";

const Brands = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const currentTransformRef = useRef(0);

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brandsData, ...brandsData, ...brandsData];

  useEffect(() => {
    let ticking = false;
    let speedMultiplier = -50; // Default speed

    // Get responsive speed multiplier based on screen width
    const updateSpeedMultiplier = () => {
      const width = window.innerWidth;
      if (width <= 480) speedMultiplier = -120; // Mobile: much faster to show more brands
      else if (width <= 768) speedMultiplier = -85; // Tablet: faster
      else if (width <= 1024) speedMultiplier = -65; // Small desktop: slightly faster
      else speedMultiplier = -50; // Desktop: default speed
    };

    // Initialize speed multiplier
    updateSpeedMultiplier();

    const updateScrollProgress = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate scroll progress when element is in viewport
      const startScroll = rect.top - windowHeight;
      const totalScroll = windowHeight + elementHeight;
      const currentScroll = -startScroll;

      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      scrollProgressRef.current = progress;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        updateScrollProgress();
        requestAnimationFrame(() => {
          ticking = false;
        });
      }
    };

    // Smooth animation loop using RAF
    const animate = () => {
      if (!trackRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // Smooth interpolation with easing - responsive speed
      const targetTransform = scrollProgressRef.current * speedMultiplier;
      const smoothingFactor = 0.08; // Lower = smoother but slower
      currentTransformRef.current += (targetTransform - currentTransformRef.current) * smoothingFactor;

      // Apply transform directly to avoid React re-renders
      trackRef.current.style.transform = `translateX(${currentTransformRef.current}%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    // Attach scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Update speed on resize
    const handleResize = () => {
      updateSpeedMultiplier();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="brands-parallax-container" ref={containerRef}>
      <div className="brands-parallax-track" ref={trackRef}>
        {duplicatedBrands.map((data, index) => (
          <div
            key={`${data.id}-${index}`}
            className="brand-parallax-item"
            style={{
              animationDelay: `${index * 0.08}s`
            }}
          >
            <div className="brand-card">
              <div className="brand-card-inner">
                <img
                  src={data.image}
                  alt={data.name}
                  className="brand-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
