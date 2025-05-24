import logo from "../assets/logo.webp";
import { NavLink } from "react-router";
import AppointmentButton from "./AppointmentButton.jsx";

const Navbar = () => {
  const links = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Hizmetlerimiz", url: "/services" },
    { name: "Biz Kimiz", url: "/about" },
    { name: "İletişim", url: "/contacts" },
  ];

  return (
    <nav
      className={`navbar flex w-full justify-between h-15 px-5 items-center border-b border-b-platinum-600 fixed bg-platinum-500/50 backdrop-blur-md z-10`}
    >
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
  );
};

export default Navbar;
