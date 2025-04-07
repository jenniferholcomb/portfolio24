import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
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

function GreenControl({ onExternalProjectClick, isHome, isProjectScreen, pageInFocus, isAbout }) {
  const [isMobile, isDesktop, isWdDesktop, isTablet, isMdDesktop] = useResize();
  const [showMenu, setShowMenu] = useState(false);
  const [projectSelected, setIsProjectSelected] = useState(null);

  const handleClick = () => {
    (isMobile || isProjectScreen) ? showMenu === true ? setShowMenu(false) : isHome ? null : setShowMenu(true) : null;
  };

  const handleProjectClick = (id) => {
    setIsProjectSelected(id);
  };

  const handleClosingProjectIntro = () => {
    setIsProjectSelected(null);
  };

  useEffect(() => {
    if (onExternalProjectClick !== null) {
      handleProjectClick(onExternalProjectClick);
    }
  }, [onExternalProjectClick]);

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
            <div onClick={handleClick} className={`${styles.iconContainer} ${styles.menuRoutes}`}>
              <object data={showMenu ? xmarkIcon : menuIconProj } type="image/svg+xml" className={showMenu && isMobile ? styles.markX : styles.icon}>
                <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
              </object>
            </div>
          :
          <Header homeClick={handleClick} 
                  isHome={isHome} 
                  isMobile={isMobile} 
                  isMdDesktop={isMdDesktop} 
                  isWdDesktop={isWdDesktop} /> 
        }

        <div className={(isMobile && !isHome) || isProjectScreen ? styles.navContainer : styles.textWrap} id={showMenu ? styles.menuActive : null} >
          <ul className={`
                ${(isMobile && !isHome) ? showMenu ? styles.menuItems : styles.menuHidden : styles.menuItems} 
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
                <Link onClick={handleClick} to={"/"}>Home</Link>
              </li>
            )}
            <li className={pageInFocus === "/projects" ? styles.pageFocus : null}>        
              <Link to={"/projects"} onClick={handleClick}>Projects</Link>
            </li>
            <li className={pageInFocus === "/pastWork" ? styles.pageFocus : null}>
              <Link to={"/pastgigs"}onClick={handleClick}>Past Gigs</Link>
            </li>
            <li className={pageInFocus === "/resume" ? styles.pageFocus : null}>
              <Link to={"/resume"} onClick={handleClick}>Resume</Link>
            </li>
            {
            isMobile ?
              <li className={pageInFocus === "/about" ? styles.pageFocus : null}>
                <Link to={"/about"} onClick={handleClick}>About</Link>
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
                     onInternalProjectClick={handleClick} 
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
