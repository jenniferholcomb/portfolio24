import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion-3d";

import useResize from "./hooks/useResize";
import useCollapseGreen from "./hooks/useCollapseGreen";
import Header from "./Header";
import Bio from "./Bio";
import HomeProject from "./HomeProject";
import menuIcon from "./../img/menu_icon.svg";
import menuIconProj from "./../img/menu_icon_project.svg";
import xmarkIcon from "./../img/xmark_icon.svg";

function GreenControl() {
  const location = useLocation();
  const page = location.pathname;
  const [isMobile, isDesktop] = useResize();
  const [isProjectScreen, setIsProjectScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isHome, setIsHome] = useState(null);

  const handleRoute = (aboutSwitch) => {
    aboutSwitch === "about" ? setIsAbout(true) : setIsAbout(false);
    isMobile ? setShowMenu(!showMenu) : null;
    setIsHome(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    console.log("menu click")
  }

  const handleHomeClick = () => {
    !isHome ? setIsHome(true) : null;
    isAbout ? setIsAbout(false) : null;
  }

  useEffect(() => {
    page === '/' ? setIsHome(true) : setIsHome(false);
  }, []);

  useEffect(() => {
    page === '/projects/pantrypro' ? setIsProjectScreen(true) : setIsProjectScreen(false);
  }, [page]);

  window.onpopstate = () => {
    page !== '/projects' ? setIsHome(true) : null;
  }

  return (
    <>
      <motion.div className={`${isProjectScreen ? styles.greenCollapse : styles.greenWrapper} ${isHome || isAbout ? styles.homeWrapper : null}`}
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
          isProjectScreen || isMobile ? 
            <div onClick={handleMenuClick} className={`${styles.iconContainer} ${styles.menuRoutes}`}>
              <object data={showMenu ? xmarkIcon : isProjectScreen ? menuIconProj : menuIcon } type="image/svg+xml" className={showMenu ? styles.markX : styles.icon}>
                <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
              </object>
              {/* <i className={`${showMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i> */}
            </div>
          :
          <Header homeClick={handleHomeClick} />
        }
        <div className={`${isProjectScreen || isMobile ? styles.navContainer : styles.textWrap}`} id={`${showMenu ? styles.menuActive : null}`} >
          <ul className={`${styles.menuItems} ${(isHome || isAbout) ? styles.menuItems2 : styles.menuItems3}`} id={`${showMenu ? styles.menuPointerEvents : null}`} >
            <li>        
              <Link onClick={handleRoute} to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link onClick={handleRoute} to={"/pastwork"}>Past Gigs</Link>
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
      {
        isHome || (isDesktop && isAbout) ?
        <HomeProject projectClick={handleRoute} />
        : null
      }
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
