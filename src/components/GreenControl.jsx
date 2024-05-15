import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion-3d";
// import { Canvas } from '@react-three/fiber';

import useResize from "./hooks/useResize";
import Header from "./Header";
import Bio from "./Bio";

function GreenControl() {
  const [isMobile, isDesktop] = useResize();
  const [showMenu, setShowMenu] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const handleRoute = (aboutSwitch) => {
    aboutSwitch === "about" ? setIsAbout(true) : setIsAbout(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

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
                    <Link onClick={handleRoute} to={"/"}>Projects</Link>
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
