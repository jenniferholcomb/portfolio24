import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion";

import useResize from "./hooks/useResize";

import Header from "./Header";
import Bio from "./Bio";
import HomeProject from "./HomeProject";
import ProjectIntro from "./ProjectIntro";

import projects from "./../data/projectData";

import menuIcon from "/img/menuIcon.svg";
import menuIconProj from "/img/menuIconProject.svg";
import xmarkIcon from "/img/closeIcon.svg";

function GreenControl() {
  const location = useLocation();
  const page = location.pathname;
  const [isMobile, isDesktop] = useResize();
  const [isProjectScreen, setIsProjectScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isHome, setIsHome] = useState(null);
  const [projectSelected, setIsProjectSelected] = useState(null);

  const handleRoute = (aboutSwitch) => {
    aboutSwitch === "about" ? setIsAbout(true) : setIsAbout(false);
    isMobile || isProjectScreen ? setShowMenu(!showMenu) : null;
    setIsHome(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  const handleHomeClick = () => {
    !isHome ? setIsHome(true) : null;
    isAbout ? setIsAbout(false) : null;
    isProjectScreen ? setIsProjectScreen(false) : null;
    showMenu ? setShowMenu(false): null;
  }

  const handleProjectClick = (id) => {
    setIsProjectSelected(id);
    console.log(id);
  }

  const handleClosingProjectIntro = () => {
    setIsProjectSelected(null);
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
      {/* <motion.div className={`${isProjectScreen ? styles.greenCollapse : styles.greenWrapper} ${isHome || isAbout ? styles.homeWrapper : null}`} */}
      <motion.div className={`${showMenu && isProjectScreen ? styles.greenWrapper : isProjectScreen ? styles.greenCollapse : styles.greenWrapper} ${isHome || isAbout ? styles.homeWrapper : null}`}
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
              <object data={showMenu ? xmarkIcon : isProjectScreen ? menuIconProj : menuIcon } type="image/svg+xml" className={showMenu && isMobile ? styles.markX : styles.icon}>
                <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
              </object>
            </div>
          :
          <Header homeClick={handleHomeClick} />
        }
        {/* <div className={isProjectScreen || isMobile ? styles.navContainer : styles.textWrap} id={showMenu ? styles.menuActive : null} > */}
        <div className={isMobile ? styles.navContainer : isProjectScreen && showMenu ? styles.textWrap : isProjectScreen ? styles.noTextWrap : styles.textWrap} id={showMenu ? styles.menuActive : null} >
          <ul className={`${styles.menuItems} ${(isHome || isAbout) ? styles.menuItems2 : styles.menuItems3}`} id={showMenu ? styles.menuPointerEvents : null} >
            {isProjectScreen && showMenu && (
              <li>        
                <Link onClick={handleHomeClick} to={"/"}>Home</Link>
              </li>
            )}
            <li>        
              <Link onClick={handleRoute} to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link onClick={handleRoute} to={"/pastwork"}>Past Gigs</Link>
            </li>
            <li>
              <Link onClick={handleRoute} to={"/resume"}>Resume</Link>
            </li>
            {/* {
            !isDesktop || (!isHome && !isAbout) ?
              <li>
                <Link onClick={() => handleRoute("about")} to={"/about"}>About</Link>
              </li>
              : null
            } */}
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
        <HomeProject projectData={projects}
                     onInternalProjectClick={handleRoute} 
                     onExternalProjectClick={handleProjectClick} />
        : null
      }

      { projectSelected && (
        <>
          <div className={styles.projectPopup}>
            {/* <div className={styles.popupContainer}> */}
              <ProjectIntro id={projects[projectSelected - 1].id}
                            project={projects[projectSelected - 1]} 
                            projectClick={handleProjectClick} 
                            onProjectSelect={true} />
            {/* </div> */}
            <svg className={styles.closeIcon} onClick={handleClosingProjectIntro} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21" fill="none">
              <path d="M2.1 21L0 18.9L8.4 10.5L0 2.1L2.1 0L10.5 8.4L18.9 0L21 2.1L12.6 10.5L21 18.9L18.9 21L10.5 12.6L2.1 21Z" fill="white"/>
            </svg>
          </div>
        </>
      )}
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
