import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./Resume.module.scss";

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
        Resume
      </div>
    </>
  );
}

export default Resume;