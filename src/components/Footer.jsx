import { NavLink } from "react-router";

const WP_LINK = import.meta.env.VITE_WP_CHAT_LINK;
const INST_LINK = import.meta.env.VITE_INST_PROFILE_LINK;

const Footer = () => {
  const links = [
    { name: "Gizlilik Ve Güvenlik", url: "/privacy" },
    { name: "Ziyaret Kuralları", url: "/rules" },
  ];

  return (
    <footer className="footer w-full font-raleway text-xs h-16 border-t border-t-platinum-600">
      <div className="footer-inner h-full w-11/12 mx-auto flex justify-center items-center">
        <div className="footer-links flex flex-1 gap-8">
          {links.map((link) => (
            <NavLink to={link.url} key={link.url}>
              {link.name}
            </NavLink>
          ))}
          <a href={INST_LINK} className="instagtam">Istagram</a>
          <a href={WP_LINK} className="whatsapp">Whatsapp</a>
        </div>
        <p className="block">© 2024 "Rahimoff" All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
