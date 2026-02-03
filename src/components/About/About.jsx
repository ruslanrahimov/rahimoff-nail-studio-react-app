import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const decorLineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate decorative line
      gsap.fromTo(
        decorLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Animate text blocks
      gsap.fromTo(
        ".about-text-block",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Animate stats
      gsap.fromTo(
        statsRef.current?.querySelectorAll(".stat-item") || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Floating animation for decorative elements
      gsap.to(".about-decor-circle", {
        y: -20,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="about-label">
            <span className="about-label-text">ABOUT US</span>
            <div ref={decorLineRef} className="about-label-line"></div>
          </div>
          <h2 className="about-title">Biz Kimiz</h2>
        </div>

        {/* Main Content Grid */}
        <div className="about-content-grid">
          {/* Left: Decorative Quote */}
          <div className="about-visual-section">
            <div className="about-quote-wrapper">
              <div className="about-decor-circle"></div>
              <div className="quote-mark">"</div>
              <p className="about-quote">
                Güzellik detaylarda gizlidir ve biz her detaya özen gösteririz
              </p>
              <div className="quote-attribution">
                <div className="attribution-line"></div>
                <span>Rahimoff Felsefesi</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="about-text-content">
            <div className="about-text-block">
              <div className="text-block-number">01</div>
              <div className="text-block-content">
                <h3 className="text-block-title">Misyonumuz</h3>
                <p className="text-block-paragraph">
                  Rahimoff Nail Studio, manikür ve pedikür hizmetlerini rahat ve temiz bir ortamda sunan
                  bir salondur. Amacımız, misafirlerimize kaliteli hizmeti uygun fiyatlarla sunarken
                  kendilerini iyi hissetmelerini sağlamaktır.
                </p>
              </div>
            </div>

            <div className="about-text-block">
              <div className="text-block-number">02</div>
              <div className="text-block-content">
                <h3 className="text-block-title">Yaklaşımımız</h3>
                <p className="text-block-paragraph">
                  Güncel teknikleri takip ediyor, hijyene büyük önem veriyor ve her işlemde steril
                  ekipman kullanıyoruz. Deneyimli ekibimiz, sade ve huzurlu ortamımızda sizi en iyi
                  şekilde ağırlamak için burada.
                </p>
              </div>
            </div>

            <div className="about-text-block">
              <div className="text-block-number">03</div>
              <div className="text-block-content">
                <h3 className="text-block-title">Deneyiminiz</h3>
                <p className="text-block-paragraph">
                  İster tırnak bakımı, ister kalıcı oje veya protez tırnak olsun — her detay özenle
                  düşünülür. Kahvenizi yudumlarken kendinize ayırdığınız bu zamanı keyifle geçirmenizi
                  istiyoruz. Rahimoff, günlük hayatın koşturmacasında küçük ama değerli bir mola yeridir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="about-stats">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Yıllık Deneyim</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">2000+</div>
            <div className="stat-label">Mutlu Müşteri</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Steril Ekipman</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="about-decor-grid">
          <div className="decor-line decor-line-1"></div>
          <div className="decor-line decor-line-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
