import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import React from "react";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
export default function Navbar() {
  return (
    <>
      <nav className="w-full h-14 bg-gray-50  sticky top-0 z-20 text-black flex md:flex-row items-center shadow-md justify-evenly">
        <div className="flex items-center gap-2">
          <Facebook />
          <Twitter />
          <FaPinterest />
          <Instagram />
        </div>

        <ul className="flex gap-4 items-center text-[18px] font-medium text-gray-600">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/blogs"}>
            <li>Blogs</li>
          </Link>

          <Link to={"/blogs"}>
            <li>Categories</li>
          </Link>

          <Link to={"/about"}>
            <li>About</li>
          </Link>

          {/* <Link to={"/write"}>
            <li>Write</li>
          </Link> */}

          {/* <Link>
            <li>LogOut</li>
          </Link> */}
        </ul>
        <div className="flex items-center gap-4 ">
          <div>
            <img
              src={profile}
              alt="profile pic"
              className="w-10 h-10 rounded-full"
            />
          </div>

          <div>
            <Search />
          </div>
        </div>
      </nav>
    </>
  );
}
