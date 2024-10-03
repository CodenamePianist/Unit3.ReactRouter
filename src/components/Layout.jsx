import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/red">Red</NavLink>
          <NavLink to="/blue">Blue</NavLink>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
