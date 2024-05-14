import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./About.module.scss";

function About() {
  const location = useLocation();
  const { blurb } = location.state;

  // function handleResize() {
  //   window.innerWidth < 480 ?
  //     setIsMobile(true) 
  //     : setIsMobile(false);
    
  //   window.innerWidth < 1024 ?
  //     setIsDesktop(false)
  //     : setIsDesktop(true);
  // }

  // useEffect(() => {
  //   handleResize();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return _ => {
  //     window.removeEventListener('resize', handleResize);
  //   }
  // });

  console.log(location)
  
  return (
    <>
      <div className={styles.aboutWrapper}>
        About hello
        <p className={`${styles.bioStyle} ${styles.bio}`}>{blurb}</p>
      </div>
    </>
  );
}

export default About;