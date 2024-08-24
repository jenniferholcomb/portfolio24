import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./Projects.module.scss";

function Projects() {
  const [ isMobile, isDesktop ] = useResize();

  return (
    <>
      <div className={styles.projectsWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        <h1 className={styles.pageHeader}>PROJECTS</h1>
        <div className={styles.projectCard}>
          <h1>Pantry Pro</h1>
        </div>
      </div>
    </>
  );
}

export default Projects;
