import { NavLink, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

const linkBase = "text-[13px] font-normal uppercase tracking-[0.1em] transition-colors duration-200 text-[#e8ddd0] hover:text-white";
const linkActive = "text-[13px] font-normal uppercase tracking-[0.1em] text-white underline underline-offset-4 decoration-[#e8ddd0]";

const Navbar = () => {
        const links = [
{ name: "Hizmetlerimiz", url: "/services" },
                { name: "Uzmanlar", url: "/masters" },
                { name: "Kampanyalar", url: "/promotions" },
        ];

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);
        const location = useLocation();
        const navigate = useNavigate();

        useEffect(() => {
                const handleScroll = () => setIsScrolled(window.scrollY > 0);
                window.addEventListener("scroll", handleScroll, { passive: true });
                return () => window.removeEventListener("scroll", handleScroll);
        }, []);

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
                        <nav className={`fixed top-0 left-0 right-0 w-full h-[54px] bg-[#7B2D3E] z-50 max-lg:hidden border-b transition-colors duration-300 ${isScrolled ? "border-[#e8ddd0]" : "border-transparent"}`}>
                                <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between gap-6">
                                        <ul className="flex items-center gap-6">
                                                {links.map((link, index) => (
                                                        <li key={index}>
                                                                {link.isScroll ? (
                                                                        <button
                                                                                type="button"
                                                                                onClick={(event) => handleSectionScroll(event, link.targetId)}
                                                                                className={`${linkBase} bg-transparent border-0 p-0 cursor-pointer`}
                                                                                style={{ fontFamily: "Manrope, sans-serif" }}
                                                                        >
                                                                                {link.name}
                                                                        </button>
                                                                ) : (
                                                                        <NavLink
                                                                                to={link.url}
                                                                                className={({ isActive }) => isActive ? linkActive : linkBase}
                                                                                style={{ fontFamily: "Manrope, sans-serif" }}
                                                                        >
                                                                                {link.name}
                                                                        </NavLink>
                                                                )}
                                                        </li>
                                                ))}
                                        </ul>

                                        <NavLink to="/" className="absolute left-1/2 -translate-x-1/2 flex-shrink-0">
                                                <img
                                                        src="/logo-new.png"
                                                        alt="Rahimoff Nail Studio"
                                                        className="h-8 w-auto object-contain"
                                                />
                                        </NavLink>

                                        <div className="flex items-center gap-5">
                                                <button
                                                        type="button"
                                                        onClick={(event) => handleSectionScroll(event, "footer")}
                                                        className={`${linkBase} bg-transparent border-0 p-0 cursor-pointer`}
                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                >
                                                        İletişim
                                                </button>
                                                <a
                                                        href="tel:+905060352137"
                                                        className="text-[13px] font-normal text-[#e8ddd0] uppercase tracking-[0.1em] hover:text-white transition-colors duration-200"
                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                >
                                                        +90 506 035 21 37
                                                </a>
                                                <a
                                                        href={wpChatLink}
                                                        className="px-5 py-1.5 border border-[#e8ddd0] text-[#e8ddd0] text-[12px] font-normal uppercase tracking-[0.1em] hover:bg-[#e8ddd0] hover:text-[#7B2D3E] transition-colors duration-200"
                                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                                >
                                                        Randevu Al
                                                </a>
                                        </div>
                                </div>
                        </nav>

                        {/* Mobile Navbar */}
                        <nav className="fixed top-0 left-0 right-0 w-full h-[54px] bg-[#7B2D3E] z-50 lg:hidden">
                                <div className="h-full px-5 flex items-center justify-between">
                                        <NavLink to="/">
                                                <img
                                                        src="/logo-new.png"
                                                        alt="Rahimoff Nail Studio"
                                                        className="h-8 w-auto object-contain"
                                                />
                                        </NavLink>

                                        <button
                                                onClick={() => setIsMenuOpen(true)}
                                                className="w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
                                                aria-label="Open menu"
                                        >
                                                <span className="w-5 h-[2px] bg-[#e8ddd0]"></span>
                                                <span className="w-5 h-[2px] bg-[#e8ddd0]"></span>
                                                <span className="w-5 h-[2px] bg-[#e8ddd0]"></span>
                                        </button>
                                </div>
                        </nav>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                                <div className="fixed inset-0 bg-[#7B2D3E] z-[60] lg:hidden">
                                        <div className="h-full flex flex-col">
                                                <div className="h-[60px] px-5 flex items-center justify-between border-b border-[#9a3a5a]">
                                                        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                                                                <img
                                                                        src="/logo-new.png"
                                                                        alt="Rahimoff Nail Studio"
                                                                        className="h-8 w-auto object-contain"
                                                                />
                                                        </NavLink>

                                                        <button
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="w-8 h-8 flex items-center justify-center text-[#e8ddd0] text-2xl"
                                                                aria-label="Close menu"
                                                        >
                                                                ×
                                                        </button>
                                                </div>

                                                <div className="flex-1 flex flex-col justify-between overflow-y-auto">
                                                        <ul className="pt-8 px-5">
                                                                {links.map((link, index) => (
                                                                        <li key={index} className="border-b border-[#9a3a5a]">
                                                                                {link.isScroll ? (
                                                                                        <button
                                                                                                type="button"
                                                                                                onClick={(event) => handleSectionScroll(event, link.targetId)}
                                                                                                className="block w-full py-4 text-lg font-normal uppercase tracking-[0.05em] text-[#e8ddd0] text-left bg-transparent border-0 cursor-pointer"
                                                                                                style={{ fontFamily: "Manrope, sans-serif" }}
                                                                                        >
                                                                                                {link.name}
                                                                                        </button>
                                                                                ) : (
                                                                                        <NavLink
                                                                                                to={link.url}
                                                                                                onClick={() => setIsMenuOpen(false)}
                                                                                                className={({ isActive }) =>
                                                                                                        `block py-4 text-lg font-normal uppercase tracking-[0.05em] ${isActive ? "text-white" : "text-[#e8ddd0]"}`
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
                                                                        <p className="text-[11px] uppercase text-[#e8ddd0] opacity-60 mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                                                                                Çalışma Saatleri
                                                                        </p>
                                                                        <p className="text-sm text-[#e8ddd0]" style={{ fontFamily: "Manrope, sans-serif" }}>
                                                                                Pzt - Cmt: 10:00 - 20:00
                                                                        </p>
                                                                </div>

                                                                <div>
                                                                        <p className="text-[11px] uppercase text-[#e8ddd0] opacity-60 mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                                                                                İletişim
                                                                        </p>
                                                                        <a
                                                                                href="tel:+905060352137"
                                                                                className="block text-lg text-[#e8ddd0]"
                                                                                style={{ fontFamily: "Manrope, sans-serif" }}
                                                                        >
                                                                                +90 506 035 21 37
                                                                        </a>
                                                                </div>

                                                                <a
                                                                        href={wpChatLink}
                                                                        className="block w-full py-3 border border-[#e8ddd0] text-[#e8ddd0] text-center text-[12px] font-normal uppercase tracking-[0.05em] hover:bg-[#e8ddd0] hover:text-[#7B2D3E] transition-colors duration-200"
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
