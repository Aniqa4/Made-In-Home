import { NavLink } from "react-router-dom";

function ActiveRoute({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border px-5 py-1 bg-[#1c1b1b] rounded text-white"
          : "border px-5 py-1 rounded hover:bg-slate-200"
      }
    >
      {children}
    </NavLink>
  );
}

export default ActiveRoute;
