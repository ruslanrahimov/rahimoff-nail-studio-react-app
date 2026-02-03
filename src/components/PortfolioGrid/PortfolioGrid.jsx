import { useEffect, useRef, useState } from "react";
import "./PortfolioGrid.css";

const PortfolioGrid = ({ data }) => {
  const containerRef = useRef(null);
  const rowRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  // Group data into rows of 3
  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateRowPositions();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateRowPositions = () => {
      if (!containerRef.current) return;

      const viewportHeight = window.innerHeight;

      // Batch DOM reads
      const rowData = rowRefs.current.map((row, index) => {
        if (!row) return null;
        const rowRect = row.getBoundingClientRect();
        return { row, rowTop: rowRect.top, index };
      }).filter(Boolean);

      // Batch DOM writes
      rowData.forEach(({ row, rowTop, index }) => {
        // Calculate how far this row has scrolled into view
        // 0 = just entering viewport, 1 = fully separated
        const scrollProgress = Math.max(0, Math.min(1,
          (viewportHeight - rowTop) / (viewportHeight * 0.8)
        ));

        // Reverse cascade: later rows cover earlier ones
        // Earlier rows (lower index) separate more as later rows scroll in
        const separationDistance = index * 140;
        const currentSeparation = scrollProgress * separationDistance;

        // Scale grows as row enters
        const scale = 0.94 + (scrollProgress * 0.06);

        // Rotation for dramatic 3D effect (reduces as it enters)
        const rotateX = (1 - scrollProgress) * 5;

        // Opacity fades in
        const opacity = 0.4 + (scrollProgress * 0.6);

        // REVERSED Z-INDEX: Higher index = higher z-index (later rows on top)
        const zIndex = 100 + index + Math.floor(scrollProgress * 50);

        // Apply all transforms in one go
        row.style.transform = `translateY(-${currentSeparation}px) scale(${scale}) rotateX(${rotateX}deg)`;
        row.style.opacity = opacity;
        row.style.zIndex = zIndex;

        // Reduce blur usage - only apply when significantly covered
        if (scrollProgress < 0.5) {
          const blur = (1 - scrollProgress) * 1.5;
          row.style.filter = `blur(${blur}px)`;
        } else if (row.style.filter) {
          row.style.filter = '';
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateRowPositions(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, rows.length]);

  return (
    <div className="portfolio-stack-container" ref={containerRef}>
      <div className={`portfolio-stack ${isVisible ? "portfolio-stack--visible" : ""}`}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowRefs.current[rowIndex] = el)}
            className="portfolio-row"
            style={{
              animationDelay: `${rowIndex * 0.1}s`,
            }}
          >
            <div className="portfolio-row__inner">
              {row.map((item, itemIndex) => (
                <div key={item.id} className="portfolio-card">
                  <div className="portfolio-card__inner">
                    <img
                      src={item.image}
                      alt={item.name || `Portfolio ${item.id}`}
                      className="portfolio-card__image"
                      loading="lazy"
                    />
                    <div className="portfolio-card__overlay" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
