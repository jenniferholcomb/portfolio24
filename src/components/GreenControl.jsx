import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion-3d";
// import { Canvas } from '@react-three/fiber';

import Header from "./Header";
import Bio from "./Bio";

function GreenControl() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const handleRoute = (aboutSwitch) => {
    aboutSwitch === "about" ? setIsAbout(true) : setIsAbout(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  // const handleAboutClick = () => {
  //   setIsAbout(!isAbout);
  //   setShowMenu(!showMenu);
  // };

  const handleResize = () => {
    window.innerWidth < 480 ?
      setIsMobile(true) 
      : setIsMobile(false);
    
    window.innerWidth < 1024 ?
      setIsDesktop(false)
      : setIsDesktop(true);
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  });

  console.log(showMenu)

  return (
    <>
      <motion.div className={styles.greenWrapper}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }} 
      >
        <div className={styles.upperWrap}>
          
          {
            isAbout ?
              isDesktop ?
              <Navigate to={"/"} /> 
              : <Navigate to={"/about"} />
            : null
          }
          {
            isMobile ?
            <i className={`${showMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
            :
            <>
              <Header />
              <div className={styles.textWrap}>
                <ul className={styles.menuItems}>
                  <li>
                    <Link onClick={handleRoute} to={"/"} state={{ mobile: {isMobile} }}>Projects</Link>
                  </li>
                  <li>
                    <Link onClick={handleRoute} to={"/graphicdesign"}>Graphic Design</Link>
                  </li>
                  <li>
                    <Link onClick={handleRoute} to={"/pastwork"}>Past Work</Link>
                  </li>
                  {
                    !isDesktop ?
                    <li>
                      <Link onClick={() => handleRoute("about")} to={"/about"}>About</Link>
                    </li>
                    : null
                  }
                </ul>
                {
                  isDesktop ?
                  <Bio />
                  : null
                }
              </div>
            </>
          }
          {/* {
            isDesktop && isAbout ?
            <Navigate to={"/"} /> 
              : null
          } */}
        </div>
      </motion.div>
    </>
  );
}

export default GreenControl;

// Navigate to={"/about"} state={{ blurb: `${bio}` }} />
