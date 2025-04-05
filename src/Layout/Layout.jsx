
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="text-[#1c1b1b]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
