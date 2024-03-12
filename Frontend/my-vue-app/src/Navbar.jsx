import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./assets/Maximus-Gaming.jpg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav className="nav sticky">
        <div className="container">
          <div className="brand-icon">
            <div className="icon-rounded">
              <NavLink to="/">
                <img src={Logo} className="brand-img" alt="Logo" />
              </NavLink>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <span className="additional-menu-btn-icon">
              <div className="burger burger1"></div>
              <div className="burger burger2"></div>
              <div className="burger burger3"></div>
            </span>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
