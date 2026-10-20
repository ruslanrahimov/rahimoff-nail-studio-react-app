// Minimal react-router replacement for the Astro build.
// Components keep their `react-router` imports (aliased in astro.config.mjs),
// but navigation is plain <a> links between statically generated pages.
import { createContext, forwardRef, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext({ pathname: "/", search: "", hash: "", params: {} });

export function RouterProvider({ pathname = "/", params = {}, children }) {
  const [hash, setHash] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sync = () => {
      setHash(window.location.hash);
      setSearch(window.location.search);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const value = useMemo(() => ({ pathname, search, hash, params }), [pathname, search, hash, params]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export const useLocation = () => useContext(RouterContext);
export const useParams = () => useContext(RouterContext).params;
export const useSearchParams = () => {
  const { search } = useContext(RouterContext);
  return [new URLSearchParams(search)];
};
export const useNavigate = () => (to) => window.location.assign(to);

const normalize = (path) => (path.length > 1 ? path.replace(/\/$/, "") : path);

export const Link = forwardRef(function Link({ to, ...rest }, ref) {
  return <a ref={ref} href={to} {...rest} />;
});

export const NavLink = forwardRef(function NavLink({ to, className, ...rest }, ref) {
  const { pathname } = useContext(RouterContext);
  const isActive = normalize(pathname) === normalize(to.split("#")[0] || "/");
  const resolved = typeof className === "function" ? className({ isActive }) : className;
  return <a ref={ref} href={to} className={resolved} aria-current={isActive ? "page" : undefined} {...rest} />;
});

// Wraps a component so it can be used as an Astro island with router context.
export const withRouter = (Component) =>
  function RoutedIsland({ pathname = "/", params = {}, ...props }) {
    return (
      <RouterProvider pathname={pathname} params={params}>
        <Component {...props} />
      </RouterProvider>
    );
  };
