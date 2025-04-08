import React from "react";
import styles from "./Resume.module.scss";
import resume from "/img/resume.webp";

function Resume() {
  
  return (
    <>
      <div className={styles.resumeWrapper}>
        <h1 className={styles.pageHeader}>RESUME</h1>
        <div className={styles.resumeContainer}>
          <a 
            href="/Jennifer-Holcomb-Resume.pdf"
            download
            className={styles.downloadBtn}
          >
            Download PDF
          </a>
          <img src={resume} alt="resume" />
        </div>
      </div>
    </>
  );
}

export default Resume;