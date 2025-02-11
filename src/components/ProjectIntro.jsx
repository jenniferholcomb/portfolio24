import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Projects.module.scss";

function ProjectIntro({project, projectClick, onProjectSelect}) {

  return (
    <section className={onProjectSelect ? styles.bubbleSelect : styles.bubbleCard} key={project.projectName}>
      <div className={styles.picture}>
        {project.externalLink ?
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCardStyle}
            onClick={() => console.log(`Opening external project: ${project.name}`)}
          >
            <img className={styles.imgMask} src={project.imgCard} alt={project.name} />
          </a>
        :
          <Link to={project.link} className={styles.linkCardStyle} onClick={projectClick}>
            <img className={styles.imgMask} src={project.imgCard} />
          </Link>
        }
      </div>
      <div className={styles.bubbleContent}>
        <div className={styles.bubbleHeader}>
          <h2 className={styles.header}>{project.projectName}</h2>
          <div className={styles.arrowContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 10 16" fill="none">
              <path d="M6.21622 8L0 1.86667L1.89189 0L10 8L1.89189 16L0 14.1333L6.21622 8Z" fill="#1B1B1B" fillOpacity="0.886275"/>
            </svg>
          </div>
        </div>
        <div className={styles.projectDescription}>
          <div className={styles.descCol1}>
            <h4 className={styles.bubbleHeader2}>{project.projectSubhead}</h4>
            <h4 className={styles.bubbleHeader2}>{project.projectYear}</h4>
            <p className={styles.bubbleSubHead} id={styles.ux}>
              {project.disciplines.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index < project.disciplines.length - 1 && <br/>}
                </React.Fragment>
              ))}
            </p>
            <h4 className={styles.bubbleHeader2} id={styles.tech}>technologies</h4>
            <p className={styles.bubbleSubHead}>
              {project.technologies.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index < project.technologies.length - 1 && <br/>}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className={styles.descCol2}>
            <p className={styles.blurb}>{project.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;