import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import Bio from "./Bio";
import styles from "./About.module.scss";

function About() {
  const [ isMobile, isDesktop ] = useResize();

  return (
    <>
      <div className={styles.aboutWrapper}>
        <h1 className={styles.pageHeader}>ABOUT</h1>
        <Bio />
      </div>
    </>
  );
}

export default About;
