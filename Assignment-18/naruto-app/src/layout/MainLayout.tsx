import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">მთავარი</NavLink>
        <NavLink to="/characters">პერსონაჟები</NavLink>
        <NavLink to="/add">დამატება</NavLink>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
