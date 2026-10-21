import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./Location.css";

const PHONE_DISPLAY = "+90 (506) 055 21-37";
const PHONE_HREF = "tel:+905060552137";
const ADDRESS_LINES = ["İstiklal Mah. 101. Cd.", "No:90/4, Isparta/Merkez"];
const HOURS = "Pazartesi – Cumartesi, 10:00 – 20:00";

const MAPS_LINK =
  import.meta.env.PUBLIC_GOOGLE_MAPS_LINK || "https://maps.app.goo.gl/75nCFBMDjJ3V9bhB6";
// Optional: exact place link from Google Maps → Share → "Write a review".
const REVIEW_LINK = import.meta.env.PUBLIC_GOOGLE_REVIEW_LINK;
// Optional: Google Maps → Share → Embed a map → copy the iframe `src` value.
const MAP_EMBED =
  import.meta.env.PUBLIC_GOOGLE_MAPS_EMBED ||
  `https://www.google.com/maps?q=${encodeURIComponent(
    "Rahimoff Nail Studio, İstiklal Mah. 101. Cd. No:90/4, Isparta",
  )}&output=embed`;

const Location = () => (
  <section id="contact" className="location bg-white py-[60px] px-[30px] max-md:py-[40px] max-md:px-[20px]">
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading label="LOCATION" title="Bizi Ziyaret Edin" />

      <div className="location-grid">
        <div className="location-info">
          <div className="location-block">
            <span className="location-label">Adres</span>
            <address className="location-text">
              {ADDRESS_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>

          <div className="location-block">
            <span className="location-label">Çalışma saatleri</span>
            <p className="location-text">{HOURS}</p>
          </div>

          <div className="location-block">
            <span className="location-label">Telefon</span>
            <a href={PHONE_HREF} className="location-text location-phone">
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="location-actions">
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="location-btn location-btn--primary">
              Yol tarifi al
            </a>
            {REVIEW_LINK && (
              <a href={REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="location-btn location-btn--ghost">
                Google&apos;da yorum bırakın
              </a>
            )}
          </div>
        </div>

        <div className="location-map">
          <iframe
            title="Rahimoff Nail Studio harita konumu"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default Location;
