import React from "react";

import useResize from "./hooks/useResize";
import Bio from "./Bio";
import styles from "./About.module.scss";

function About() {
  const [ isMobile, isDesktop ] = useResize();

  return (
    <>
      <div className={styles.aboutWrapper}>
        About hello
        <Bio />
      </div>
    </>
  );
}

export default About;
