import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion-3d";

import useResize from "./hooks/useResize";

import Header from "./Header";
import Bio from "./Bio";
import HomeProject from "./HomeProject";
import ProjectIntro from "./ProjectIntro";

import projects from "./../data/projectData";

import menuIcon from "/img/menuIcon.svg";
import menuIconProj from "/img/menuIconProject.svg";
import xmarkIcon from "/img/closeIcon.svg";

function GreenControl({ onExternalProjectClick, onHomeClick, isProjectScreen, setIsProjectScreen }) {
  const location = useLocation();
  const page = location.pathname;
  const [isMobile, isDesktop, isWdDesktop, isTablet, isMdDesktop] = useResize();
  // const [isProjectScreen, setIsProjectScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isHome, setIsHome] = useState(null);
  const [projectSelected, setIsProjectSelected] = useState(null);
  const [pageInFocus, setPageInFocus] = useState(null);

  const handleRoute = (tabSwitch) => {
    tabSwitch === "about" ? setIsAbout(true) : setIsAbout(false);
    (isMobile || isProjectScreen) ? showMenu === true ? setShowMenu(false) : isHome ? null : setShowMenu(true) : null;
    setIsProjectScreen(true);
    setIsHome(false);
    onHomeClick(false);
    setPageInFocus(tabSwitch);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  const handleHomeClick = () => {
    !isHome ? setIsHome(true) : null;
    isAbout ? setIsAbout(false) : null;
    isProjectScreen ? setIsProjectScreen(false) : null;
    isMobile || isProjectScreen ? setShowMenu(false): null;

    onHomeClick(true);
    setPageInFocus(null);
  }

  const handleProjectClick = (id) => {
    setIsProjectSelected(id);
  }

  const handleClosingProjectIntro = () => {
    setIsProjectSelected(null);
  }

  const onAboutSwitch = () => {
    setIsHome(true);
    setIsAbout(false);
    onHomeClick(true);
  };

  useEffect(() => {
    page === '/' ? setIsHome(true) : setIsHome(false);
  }, []);

  useEffect(() => {
    page === '/projects/pantrypro' ? setIsProjectScreen(true) : setIsProjectScreen(false);
  }, [page]);

  useEffect(() => {
    if (onExternalProjectClick !== null) {
      handleProjectClick(onExternalProjectClick);
    }
  }, [onExternalProjectClick]);

  useEffect(() => {
    if (isAbout && !isMobile) {
      onAboutSwitch();
    }
  }, [isMobile, isAbout])

  window.onpopstate = () => {
    page !== '/projects' ? setIsHome(true) : null;
  }

  return (
    <>
      <motion.div 
        className={`${
                      showMenu && isProjectScreen ? (isMobile ? styles.greenCollapse : styles.greenProjectWrapper) :
                      isProjectScreen || (!isHome && isMobile) ? styles.greenCollapse : 
                      isHome ? styles.greenWrapper : styles.greenWrapperTab
                    } 
                    ${
                      isHome || isAbout ? styles.homeWrapper : null
                    }`
                  }
        transition={{ duration: 4 }} 
      >
        {
          (isAbout && !isMobile) && (
            <Navigate to={"/"} />
          )
        }
        {
          (isProjectScreen && projectSelected === null) || (isMobile && !isHome) ? 
            <div onClick={handleMenuClick} className={`${styles.iconContainer} ${styles.menuRoutes}`}>
              <object data={showMenu ? xmarkIcon : menuIconProj } type="image/svg+xml" className={showMenu && isMobile ? styles.markX : styles.icon}>
                <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
              </object>
            </div>
          :
          <Header homeClick={handleHomeClick} 
                  isHome={isHome} 
                  isMobile={isMobile} 
                  isMdDesktop={isMdDesktop} 
                  isWdDesktop={isWdDesktop} /> 
        }

        <div className={(isMobile && !isHome) || isProjectScreen ? styles.navContainer : styles.textWrap} id={showMenu ? styles.menuActive : null} >
          <ul className={`
                ${isMobile ? showMenu ? styles.menuItems : styles.menuHidden : styles.menuItems} 
                ${
                  isHome ? 
                  styles.menuItems2 : styles.menuItems3
                }
                ${
                  isHome || (showMenu && isMobile) || !isMobile ?
                  styles.menuPointerEvents : styles.menuPointerEventsOff
                }
                ${
                  isProjectScreen ? styles.menuItemsProject : null
                }
              `} 
          >
            { showMenu && (
              <li>        
                <Link onClick={handleHomeClick} to={"/"}>Home</Link>
              </li>
            )}
            <li className={pageInFocus === "projects" ? styles.pageFocus : null}>        
              <Link onClick={() => handleRoute("projects")} to={"/projects"}>Projects</Link>
            </li>
            <li className={pageInFocus === "pastWork" ? styles.pageFocus : null}>
              <Link onClick={() => handleRoute("pastWork")} to={"/pastwork"}>Past Gigs</Link>
            </li>
            <li className={pageInFocus === "resume" ? styles.pageFocus : null}>
              <Link onClick={() => handleRoute("resume")} to={"/resume"}>Resume</Link>
            </li>
            {
            isMobile ?
              <li className={pageInFocus === "about" ? styles.pageFocus : null}>
                <Link onClick={() => handleRoute("about")} to={"/about"}>About</Link>
              </li>
              : null
            }
          </ul>
          {
            (!isMobile && isHome) ?            
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
            <ProjectIntro id={projects[projectSelected - 1].id}
                          project={projects[projectSelected - 1]} 
                          projectClick={handleProjectClick} 
                          onProjectSelect={true} />
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
