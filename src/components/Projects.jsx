import React from "react";
import ProjectIntro from "./ProjectIntro.jsx";
import styles from "./Projects.module.scss";

import projectData from "./../data/projectData.jsx";

function Projects({projectClick}) {

  return (
    <>
      <div className={styles.projectsWrapper}>
        <h1 className={styles.pageHeader}>PROJECTS</h1>
        <div className={styles.cardContainer}>
          {projectData.map((project) => (
            <ProjectIntro key={project.id}
                          project={project} 
                          projectClick={projectClick} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
