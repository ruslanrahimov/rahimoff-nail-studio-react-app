import { NavLink } from "react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const WP_LINK = import.meta.env.VITE_WP_CHAT_LINK;
const INST_LINK = import.meta.env.VITE_INST_PROFILE_LINK;
const MAPS_LINK =
        import.meta.env.VITE_GOOGLE_MAPS_LINK ||
        "https://maps.app.goo.gl/75nCFBMDjJ3V9bhB6";

const Footer = () => {
        const footerRef = useRef(null);

        const legalLinks = [
                { name: "Gizlilik ve Güvenlik", url: "/privacy" },
                { name: "Ziyaret Kuralları", url: "/rules" },
        ];

        useEffect(() => {
                const ctx = gsap.context(() => {
                        gsap.fromTo(
                                ".footer-content > *",
                                { opacity: 0, y: 30 },
                                {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.6,
                                        stagger: 0.15,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                                trigger: footerRef.current,
                                                start: "top 85%",
                                                once: true,
                                        },
                                }
                        );
                }, footerRef);

                return () => ctx.revert();
        }, []);

        return (
                <footer ref={footerRef} id="footer" className="footer">
                        <div className="footer-container">
                                <div className="footer-content">
                                        {/* Top section */}
                                        <div className="footer-top">
                                                {/* Left: Phone and Logo */}
                                                <div className="footer-left">
                                                        <div className="footer-label">
                                                                <span className="footer-label-text">İLETİŞİM</span>
                                                                <div className="footer-label-line"></div>
                                                        </div>

                                                        <a href="tel:+905060552137" className="footer-phone">
                                                                +90 (506) 055 21-37
                                                        </a>

                                                        <div className="footer-logo">RAHIMOFF</div>

                                                        <div className="footer-tagline">
                                                                Nail Studio · Isparta
                                                        </div>
                                                </div>

                                                {/* Right: Address and Social */}
                                                <div className="footer-right">
                                                        <div className="footer-address">
                                                                <div className="address-line">İstiklal mah. 101 cd.</div>
                                                                <div className="address-line">NO:90/4, Isparta/Merkez</div>
                                                                <div className="footer-hours">PZT-CMT, 10:00–20:00</div>
                                                        </div>

                                                        {/* Social icons */}
                                                        <div className="footer-social">
                                                                <a
                                                                        href={WP_LINK}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="social-link"
                                                                        aria-label="WhatsApp"
                                                                >
                                                                        <svg className="social-icon" viewBox="0 0 24 24">
                                                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                                        </svg>
                                                                </a>
                                                                <a
                                                                        href={INST_LINK}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="social-link"
                                                                        aria-label="Instagram"
                                                                >
                                                                        <svg className="social-icon" viewBox="0 0 24 24">
                                                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                                        </svg>
                                                                </a>
                                                                <a
                                                                        href={MAPS_LINK}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="social-link"
                                                                        aria-label="Google Maps"
                                                                >
                                                                        <svg className="social-icon" viewBox="0 0 24 24">
                                                                                <path d="M12 2.25c-3.86 0-7 3.14-7 7 0 5.05 6.35 12.06 6.62 12.36a.5.5 0 0 0 .76 0C12.65 21.31 19 14.3 19 9.25c0-3.86-3.14-7-7-7zm0 10.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5z" />
                                                                        </svg>
                                                                </a>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* Bottom section */}
                                        <div className="footer-bottom">
                                                <div className="footer-links">
                                                        {legalLinks.map((link, index) => (
                                                                <span key={link.url} className="link-wrapper">
                                                                        <NavLink to={link.url} className="footer-link">
                                                                                {link.name}
                                                                        </NavLink>
                                                                        {index < legalLinks.length - 1 && (
                                                                                <span className="link-divider">·</span>
                                                                        )}
                                                                </span>
                                                        ))}
                                                </div>

                                                <div className="footer-copyright">
                                                        © 2026 Rahimoff All Rights Reserved.
                                                </div>
                                        </div>

                                        {/* Decorative element */}
                                        <div className="footer-decor"></div>
                                </div>
                        </div>
                </footer>
        );
};

export default Footer;
