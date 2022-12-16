import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaSearch, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="nav--container">
      <div>
        <GiHamburgerMenu className="hamburger_menu icon" />
        <FaTimes className="icon" style={{ display: "none" }} />
      </div>
      <form className="nav--container-form">
        <input
          className="nav--container-form_input"
          type="text"
          name="search"
        />
        <FaSearch className="search_icon" />
      </form>
      <div>
        <IoMoonSharp className="icon" />
        <FaToggleOff className="icon" />
        <FaToggleOn className="icon" />
        <IoSunnySharp className="icon" />
      </div>
    </nav>
  );
}
