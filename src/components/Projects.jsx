import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./Projects.module.scss";

function Projects(size) {
  const location = useLocation();
  const { mobile } = location.state;
  console.log(mobile);
  return (
    <>
      <div className={styles.projectsWrapper}>
        Projects
      </div>
    </>
  );
}

export default Projects;
