import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";
const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const blogRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const blogArr = [blogRef];
  const logoArr = [logoRef];

  useGsapDownStagger(liArr, 0.9);
  useGsapDownStagger(logoArr, 1.5);
  useGsapDownStagger(blogArr, 1.9);

  return (
    <nav className='navbar wrapper'>
      <ul className='links'>
        <li ref={li1}>
          <Link to='/Featured'>Featured</Link>
        </li>
        <li ref={li2}>
          <Link to='/about'>About</Link>
        </li>
        <li ref={li3}>
          <Link to='/gallery'>Gallery</Link>
        </li>
      </ul>
      <div className='logo' ref={logoRef}>
        <Link to='/'>
          <h2>Immemorial</h2>
        </Link>
      </div>
      <div className='blog-link' ref={blogRef}>
        <Link to='/blog'>Blog</Link>
      </div>

      <div className='phone-menu'>
        <li ref={li1}>
          <Link to='/Featured'>Featured</Link>
        </li>
        <li ref={li2}>
          <Link to='/about'>About</Link>
        </li>
        <li ref={li3}>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <div className='blog-link' ref={blogRef}>
          <Link to='/blog'>Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import gsap from "gsap";
// import "../style.css"; // Import your CSS file
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const animateMenu = () => {
//     const tl = gsap.timeline({ paused: true });
//     tl.to(".menu", {
//       opacity: 1,
//       duration: 1,
//       top: 0,
//       ease: "Power2.easeInOut",
//     });
//     tl.to(
//       ".nav",
//       {
//         opacity: 1,
//         marginBottom: 0,
//         duration: 1,
//         ease: "Power2.easeInOut",
//         stagger: 0.3,
//       },
//       ">-0.5"
//     );
//     return tl;
//   };

//   const t1 = animateMenu();

//   return (
//     <div>
//       <div className='home'>
//         <div className='container'>
//           <div className='logo'>Uniqo</div>
//         </div>
//         <div className='container'>
//           <div className='menu-div' onClick={toggleMenu}>
//             Menu
//           </div>
//         </div>
//       </div>

//       {/* Menu Stuff */}
//       <div className={`menu ${isMenuOpen ? "open" : ""}`}>
//         <div className='background'>Menu</div>
//         <div className='exit' onClick={closeMenu}>
//           <img src='./assets/exit.svg' alt='' />
//         </div>
//         <div className='menu-container'>
//           <ul className='options'>
//             <li className='nav'>
//               <Link href='#' className='nav-link'>
//                 Home <span className='small-number'>01</span>
//               </Link>
//             </li>
//             <li className='nav'>
//               <Link href='#' className='nav-link'>
//                 Blog <span className='small-number'>02</span>
//               </Link>
//             </li>
//             <li className='nav'>
//               <Link href='#' className='nav-link'>
//                 About <span className='small-number'>03</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className='menu-container right'>
//           {/* Your other menu content */}
//           <div class='information'>
//             <p class='title'>Where am I?</p>
//             <p class='description'>123 my address</p>
//           </div>
//           <div class='information'>
//             <p class='title'>Contact</p>
//             <p class='description'>andrewwoan@gmail.com</p>
//           </div>
//           <div class='information'>
//             <p class='title'>Follow me</p>
//             <div class='social-medias'>
//               <Link href='' class='social-media'>
//                 twitter
//               </Link>
//               <Link href='' class='social-media'>
//                 youtube
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
