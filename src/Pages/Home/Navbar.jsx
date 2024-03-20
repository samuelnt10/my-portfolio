import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const closeMenu = () => {
    // Function to close the menu
  };

  const openResume = () => {
    window.open("https://docs.google.com/document/d/e/2PACX-1vTYRc4zCds1r7-ZkMETpPrx_Al4As_uCUHwrB-VgK6On2VqD_QQViQWYKW2-4XYsgxYbCkPoI8kEUyX/pub", "_blank");
  };
  
  return (   
    <nav className="navbar">
      <div className="sam-image">
        <img src="../img/samuelntambwe.png" alt="Logoipsum" />
      </div>
      <a 
        className="nav__hamburger"
        onClick={closeMenu}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className="navbar--items">
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar--buttons">
        <button onClick={openResume} className="btn btn-outline-primary mr-2">
          Open Resume
        </button>
        <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-outline-primary"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
