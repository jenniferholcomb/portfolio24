import React from "react";
import { useLocation } from "react-router-dom";

import Bio from "./Bio";
import styles from "./About.module.scss";

function About() {
  const location = useLocation();
  
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
