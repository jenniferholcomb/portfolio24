import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./Resume.module.scss";

import resume from "/img/resume.webp";

function Resume() {
  const [ isMobile, isDesktop ] = useResize();
  
  return (
    <>
      <div className={styles.resumeWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        <h1 className={styles.pageHeader}>RESUME</h1>
        <div className={styles.resumeContainer}>
          <img src={resume} alt="resume" />
        </div>
      </div>
    </>
  );
}

export default Resume;