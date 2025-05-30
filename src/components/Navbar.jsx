import { clsx } from "clsx";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router";
import AppointmentButton from "./AppointmentButton.jsx";
import { useState, useEffect } from "react";

const Navbar = () => {
  const links = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Hizmetlerimiz", url: "/services" },
    { name: "Biz Kimiz", url: "/about" },
    { name: "İletişim", url: "/contacts" },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState("none");

  const closeMenu = () => {
    setIsMenuVisible("none");
  };

  useEffect(() => {
    if (isMenuVisible === "visible") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuVisible]);

  return (
    <>
      <nav className="navbar flex w-full justify-between h-15 px-5 items-center border-b border-b-platinum-600 fixed bg-platinum-500/50 backdrop-blur-md z-10 max-md:hidden">
        <div className="links-wrapper flex items-center gap-10 h-full">
          <NavLink to="/">
            <img
              src={logo}
              alt="rahimoff nail studio"
              className="logo block w-30 h-auto max-h-13 object-contain"
            />
          </NavLink>
          <ul className="flex gap-4">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.url}
                    className="block text-charcoal-900 p-1 hover:text-charcoal-300 transition duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <AppointmentButton url="#">Randevu Al</AppointmentButton>
      </nav>
      <nav className="nav-mobile h-14 w-full bg-platinum-500 fixed p-2 z-10 md:hidden ">
        <div className="nav-mobile-inner flex justify-between">
          <NavLink to="/">
            <img
              src={logo}
              alt="rahimoff nail studio"
              className="logo block h-10 max-h-10 object-contain"
            />
          </NavLink>
          <button className="burger-menu text-4xl" onClick={() => setIsMenuVisible("visible")}>
            =
          </button>
        </div>
      </nav>
      <div
        className={`${clsx({ hidden: isMenuVisible === "none", visible: isMenuVisible === "visible" })} links-list flex flex-col justify-between fixed h-full right-0 left-0 w-full pt-40 px-4 bg-platinum-900/70 backdrop-blur-md z-20`}
      >
        <button
          className="menu-close absolute right-5 top-10 text-platinum-500 text-2xl"
          onClick={closeMenu}
        >
          X
        </button>
        <ul className="flex flex-col gap-6">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.url}
                  onClick={closeMenu}
                  className="block text-platinum-500 text-3xl "
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="info-block flex flex-col gap-2 text-platinum-500 pb-8">
          <p className="">Pzt - Cmt: 10:00 - 20:00</p>
          <a href="tel:+905060552137" className="text-xl">
            +90 506 055 21 37
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
