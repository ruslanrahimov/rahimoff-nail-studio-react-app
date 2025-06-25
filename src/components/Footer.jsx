import { NavLink } from "react-router";

const WP_LINK = import.meta.env.VITE_WP_CHAT_LINK;
const INST_LINK = import.meta.env.VITE_INST_PROFILE_LINK;

const Footer = () => {
  const links = [
    { name: "Gizlilik Ve Güvenlik", url: "/privacy" },
    { name: "Ziyaret Kuralları", url: "/rules" },
  ];

  return (
    <footer className="footer w-full font-raleway text-xs h-16 border-t border-t-platinum-600 max-md:h-auto max-md:pt-4 max-md:text-sm">
      <div className="footer-inner h-full w-11/12 mx-auto grid grid-cols-2 py-4 max-md:grid-cols-1 max-md:grid-rows-2">
        <div className="footer-links w-1/2 grid grid-cols-4 max-md:grid-cols-1 max-md:grid-rows-2 max-md:gap-3 max-lg:w-full">
          {links.map((link) => (
            <NavLink className="text-center my-auto" to={link.url} key={link.url}> {/*TODO Сделать что бы на мобильной версии при клике по ссылке скролл шел на самый верх*/}
               {link.name}
            </NavLink>
          ))}
          <a href={INST_LINK} className="instagtam my-auto text-center">
            Istagram
          </a>
          <a href={WP_LINK} className="whatsapp my-auto text-center">
            Whatsapp
          </a>
        </div>
        <p className="block text-end my-auto max-md:text-center">© 2024 Rahimoff All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
