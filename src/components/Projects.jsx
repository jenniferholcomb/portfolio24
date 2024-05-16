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
        Projects
      </div>
    </>
  );
}

export default Projects;
