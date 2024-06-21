import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion-3d";
// import { Canvas } from '@react-three/fiber';

import useResize from "./hooks/useResize";
import Header from "./Header";
import Bio from "./Bio";
import menuIcon from "./../img/menu_icon.svg";
import xmarkIcon from "./../img/xmark_icon.svg";

function GreenControl() {
  const location = useLocation();
  const [isMobile, isDesktop] = useResize();
  const [showMenu, setShowMenu] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isHome, setIsHome] = useState(null);

  const handleRoute = (aboutSwitch) => {
    aboutSwitch === "about" ? setIsAbout(true) : setIsAbout(false);
    isMobile ? setShowMenu(!showMenu) : null;
    setIsHome(false);
    console.log(isHome);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  const handleHomeClick = () => {
    !isHome ? setIsHome(true) : null;
    isAbout ? setIsAbout(false) : null;
    console.log("we got here");
  }

  useEffect(() => {
    location.pathname === '/' ? setIsHome(true) : setIsHome(false);
  }, []);

  return (
    <>
      <motion.div className={`${styles.greenWrapper} ${isHome || isAbout ? styles.homeWrapper : null}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }} 
      >
        {
          isAbout ?
            isDesktop ?
            <Navigate to={"/"} /> 
            : <Navigate to={"/about"} />
          : null
        }
        {
          isMobile ?
            <div onClick={handleMenuClick} className={`${styles.iconContainer} ${styles.menuRoutes}`}>
              <object data={showMenu ? xmarkIcon : menuIcon } type="image/svg+xml" className={showMenu ? styles.markX : styles.icon}>
                <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
              </object>
              {/* <i className={`${showMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i> */}
            </div>
          :
          <Header homeClick={handleHomeClick} />
        }
        <div className={`${isMobile ? styles.navContainer : styles.textWrap}`} id={`${showMenu ? styles.menuActive : null}`} >
          <ul className={styles.menuItems} id={`${showMenu ? styles.menuPointerEvents : null}`} >
            <li>
              <Link onClick={handleRoute} to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link onClick={handleRoute} to={"/pastwork"}>Past Work</Link>
            </li>
            <li>
              <Link onClick={handleRoute} to={"/resume"}>Resume</Link>
            </li>
            {
            !isDesktop || (!isHome && !isAbout) ?
              <li>
                <Link onClick={() => handleRoute("about")} to={"/about"}>About</Link>
              </li>
              : null
            }
          </ul>
          {
            (isDesktop && isHome) || (isDesktop && isAbout) ?
            <Bio />
            : null
          }
        </div>
      </motion.div>
    </>
  );
}

export default GreenControl;

// Navigate to={"/about"} state={{ blurb: `${bio}` }} />
// -- inside component --
// import { useLocation } from "react-router-dom";

// function Projects(size) {
//   const location = useLocation();
//   const { size } = location.state;
// ...
