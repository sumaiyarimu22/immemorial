import React, { useState } from "react";
import gsap from "gsap";
import "./styles.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const animateMenu = () => {
    const tl = gsap.timeline({ paused: true });
    tl.to(".menu", {
      opacity: 1,
      duration: 1,
      top: 0,
      ease: "Power2.easeInOut",
    });
    tl.to(
      ".nav",
      {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: "Power2.easeInOut",
        stagger: 0.3,
      },
      ">-0.5"
    );
    return tl;
  };

  const t1 = animateMenu();

  return (
    <div>
      <div className='home'>
        <div className='container'>
          <div className='logo'>Uniqo</div>
        </div>
        <div className='container'>
          <div className='menu-div' onClick={toggleMenu}>
            Menu
          </div>
        </div>
      </div>

      {/* Menu Stuff */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className='background'>Menu</div>
        <div className='exit' onClick={closeMenu}>
          <img src='./assets/exit.svg' alt='' />
        </div>
        <div className='menu-container'>
          <ul className='options'>
            <li className='nav'>
              <Link href='#' className='nav-link'>
                Home <span className='small-number'>01</span>
              </Link>
            </li>
            <li className='nav'>
              <Link href='#' className='nav-link'>
                Blog <span className='small-number'>02</span>
              </Link>
            </li>
            <li className='nav'>
              <Link href='#' className='nav-link'>
                About <span className='small-number'>03</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='menu-container right'>
          {/* Your other menu content */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
