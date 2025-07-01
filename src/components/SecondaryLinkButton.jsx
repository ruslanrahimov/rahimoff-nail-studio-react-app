import { NavLink } from "react-router";

const SecondaryLinkButton = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className="block bg-charcoal-300 text-white text-center px-4 py-2 hover:bg-charcoal-900 transition cursor-pointer max-md:w-full "
    >
      {children}
    </NavLink>
  );
};

export default SecondaryLinkButton;
