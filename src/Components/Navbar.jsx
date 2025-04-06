import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSaveAs } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import UserAvatar from "./UserAvatar";

function Navbar() {
  const [defaultImage, setDefaultImage] = useState(false);

  return (
    <div className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-xl text-[#1c1b1b] font-semibold">
            <Link to="/">MadeInHome</Link>
          </p>
          <div>
            <Link to="/">
              <div className="flex relative items-center">
                <form>
                  <input
                    type="text"
                    name=""
                    placeholder="Search"
                    className="outline-none border-b lg:w-96 bg-transparent
                                        border-[#1c1b1b] placeholder:text-[#1c1b10a7]"
                  />
                </form>
                <span className=" absolute right-0">
                  <BiSearch />
                </span>
              </div>
            </Link>
          </div>
          <ul className="flex gap-10 items-center">
            <li>
              <Link to="/">
                <span className="text-xl relative flex">
                  <HiOutlineSaveAs />
                  <span className="absolute -top-3 -right-2 text-sm">0</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li>
              <Link to={'/user'}>
                <img
                  src=""
                  alt="User Image"
                  onError={() => setDefaultImage(true)}
                  className={defaultImage ? "hidden" : "rounded-full w-8 h-8"}
                />
                {defaultImage && <UserAvatar />}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
