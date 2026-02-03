import { clsx } from "clsx";
import logo from "../assets/logo.webp";
import { NavLink, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

const Navbar = () => {
        const links = [
                { name: "Ana Sayfa", url: "/" },
                { name: "Hizmetlerimiz", url: "/services" },
                { name: "Portfolyo", url: "#portfolio", targetId: "portfolio", isScroll: true },
                { name: "Yorumlar", url: "#reviews", targetId: "reviews", isScroll: true },
                { name: "İletişim", url: "#footer", targetId: "footer", isScroll: true },
                { name: "Uzmanlar", url: "/masters" },
        ];

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const location = useLocation();
        const navigate = useNavigate();

        useEffect(() => {
                if (isMenuOpen) {
                        document.body.style.overflow = "hidden";
                } else {
                        document.body.style.overflow = "";
                }

                return () => {
                        document.body.style.overflow = "";
                };
        }, [isMenuOpen]);

        const handleSectionScroll = (event, targetId) => {
                event.preventDefault();
                setIsMenuOpen(false);
                if (location.pathname !== "/") {
                        navigate(`/#${targetId}`);
                        return;
                }
                const target = document.getElementById(targetId);
                if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.history.replaceState(null, "", `#${targetId}`);
                }
        };

        return (
                <>
                        {/* Desktop Navbar */}
                        <nav className="fixed top-0 left-0 right-0 w-full h-[54px] bg-[#fcfbf7] border-b border-[#e6e4de] z-50 max-lg:hidden">
                                <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between gap-6">
                                        <div className="flex items-center gap-10 lg:gap-20">
                                                <NavLink to="/" className="flex-shrink-0">
                                                        <img
                                                                src={logo}
                                                                alt="Rahimoff Nail Studio"
                                                                className="h-9 w-auto object-contain"
                                                        />
                                                </NavLink>

                                                <ul className="flex items-center gap-7">
                                                        {links.map((link, index) => (
                                                                <li key={index}>
                                                                        {link.isScroll ? (
                                                                                <button
                                                                                        type="button"
                                                                                        onClick={(event) => handleSectionScroll(event, link.targetId)}
                                                                                        className="text-[14px] font-normal uppercase tracking-[0.08em] transition-colors duration-200 text-[#2e2e2e] hover:text-burgundy-500 bg-transparent border-0 p-0 cursor-pointer"
                                                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                                                >
                                                                                        {link.name}
                                                                                </button>
                                                                        ) : (
                                                                                <NavLink
                                                                                        to={link.url}
                                                                                        className={({ isActive }) =>
                                                                                                `text-[14px] font-normal uppercase tracking-[0.08em] transition-colors duration-200 ${isActive ? "text-burgundy-500" : "text-[#2e2e2e] hover:text-burgundy-500"
                                                                                                }`
                                                                                        }
                                                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                                                >
                                                                                        {link.name}
                                                                                </NavLink>
                                                                        )}
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>

                                        <div className="flex items-center gap-4">
                                                <a
                                                        href="tel:+905060552137"
                                                        className="text-[14px] font-normal text-[#2e2e2e] uppercase tracking-[0.08em] hover:text-burgundy-500 transition-colors duration-200"
                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                >
                                                        +90 506 055 21 37
                                                </a>
                                                <a
                                                        href={wpChatLink}
                                                        className="px-4 py-1.5 bg-burgundy-500 text-white text-[13px] font-normal uppercase tracking-[0.08em] hover:bg-burgundy-700 transition-colors duration-200"
                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                >
                                                        Randevu Al
                                                </a>
                                        </div>
                                </div>
                        </nav>

                        {/* Mobile Navbar */}
                        <nav className="fixed top-0 left-0 right-0 w-full h-[54px] bg-[#fcfbf7] border-b border-[#e6e4de] z-50 lg:hidden">
                                <div className="h-full px-5 flex items-center justify-between">
                                        <NavLink to="/">
                                                <img
                                                        src={logo}
                                                        alt="Rahimoff Nail Studio"
                                                        className="h-8 w-auto object-contain"
                                                />
                                        </NavLink>

                                        <button
                                                onClick={() => setIsMenuOpen(true)}
                                                className="w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
                                                aria-label="Open menu"
                                        >
                                                <span className="w-5 h-[2px] bg-[#2e2e2e]"></span>
                                                <span className="w-5 h-[2px] bg-[#2e2e2e]"></span>
                                                <span className="w-5 h-[2px] bg-[#2e2e2e]"></span>
                                        </button>
                                </div>
                        </nav>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                                <div className="fixed inset-0 bg-[#fcfbf7] z-[60] lg:hidden">
                                        <div className="h-full flex flex-col">
                                                <div className="h-[60px] px-5 flex items-center justify-between border-b border-[#e6e4de]">
                                                        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                                                                <img
                                                                        src={logo}
                                                                        alt="Rahimoff Nail Studio"
                                                                        className="h-8 w-auto object-contain"
                                                                />
                                                        </NavLink>

                                                        <button
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="w-8 h-8 flex items-center justify-center text-[#2e2e2e] text-2xl"
                                                                aria-label="Close menu"
                                                        >
                                                                ×
                                                        </button>
                                                </div>

                                                <div className="flex-1 flex flex-col justify-between overflow-y-auto">
                                                        <ul className="pt-8 px-5">
                                                                {links.map((link, index) => (
                                                                        <li key={index} className="border-b border-[#e6e4de]">
                                                                                {link.isScroll ? (
                                                                                        <button
                                                                                                type="button"
                                                                                                onClick={(event) => handleSectionScroll(event, link.targetId)}
                                                                                                className="block w-full py-4 text-lg font-normal uppercase tracking-[0.02em] text-[#2e2e2e] text-left bg-transparent border-0 cursor-pointer"
                                                                                                style={{ fontFamily: "Manrope, sans-serif" }}
                                                                                        >
                                                                                                {link.name}
                                                                                        </button>
                                                                                ) : (
                                                                                        <NavLink
                                                                                                to={link.url}
                                                                                                onClick={() => setIsMenuOpen(false)}
                                                                                                className={({ isActive }) =>
                                                                                                        `block py-4 text-lg font-normal uppercase tracking-[0.02em] ${isActive ? "text-burgundy-500" : "text-[#2e2e2e]"
                                                                                                        }`
                                                                                                }
                                                                                                style={{ fontFamily: "Manrope, sans-serif" }}
                                                                                        >
                                                                                                {link.name}
                                                                                        </NavLink>
                                                                                )}
                                                                        </li>
                                                                ))}
                                                        </ul>

                                                        <div className="px-5 pb-8 space-y-5">
                                                                <div>
                                                                        <p className="text-[11px] uppercase text-[#2e2e2e] opacity-60 mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                                                                                Çalışma Saatleri
                                                                        </p>
                                                                        <p className="text-sm text-[#2e2e2e]" style={{ fontFamily: "Manrope, sans-serif" }}>
                                                                                Pzt - Cmt: 10:00 - 20:00
                                                                        </p>
                                                                </div>

                                                                <div>
                                                                        <p className="text-[11px] uppercase text-[#2e2e2e] opacity-60 mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                                                                                İletişim
                                                                        </p>
                                                                        <a
                                                                                href="tel:+905060552137"
                                                                                className="block text-lg text-[#2e2e2e]"
                                                                                style={{ fontFamily: "Manrope, sans-serif" }}
                                                                        >
                                                                                +90 506 055 21 37
                                                                        </a>
                                                                </div>

                                                                <a
                                                                        href={wpChatLink}
                                                                        className="block w-full py-3 bg-burgundy-500 text-white text-center text-[12px] font-normal uppercase tracking-[0.02em] hover:bg-burgundy-700 transition-colors duration-200"
                                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                                >
                                                                        Randevu Al
                                                                </a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        )}
                </>
        );
};

export default Navbar;
