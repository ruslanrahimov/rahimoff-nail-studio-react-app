import { NavLink } from "react-router";

const SecondaryLinkButton = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className="block bg-transparent border-2 border-burgundy-500 text-burgundy-500 text-center px-8 py-3 text-[13px] font-medium uppercase tracking-wider transition-all duration-300 hover:bg-burgundy-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 max-md:w-full"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {children}
    </NavLink>
  );
};

export default SecondaryLinkButton;
