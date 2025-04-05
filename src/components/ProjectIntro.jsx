import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.scss";

function ProjectIntro({id, project, projectClick, onProjectSelect}) {

  return (
    <>
      <section className={onProjectSelect ? styles.bubbleSelect : styles.bubbleCard}>
        <div className={styles.picture}>
          {project.externalLink ?
            <a
              key={id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCardStyle}
              onClick={() => projectClick(project.id)}
            >
              <img className={onProjectSelect ? styles.imgMaskSelect : styles.imgMask} src={project.imgCard} alt={project.name} />
            </a>
          : project.link ?
            <Link to={project.link} className={styles.linkCardStyle} onClick={projectClick}>
              <img className={onProjectSelect ? styles.imgMaskSelect : styles.imgMask} src={project.imgCard} />
            </Link>
          : 
            <img className={onProjectSelect ? styles.imgMaskSelect : styles.imgMaskPort} src={project.imgCard} alt={project.name} />
          }
        </div>
        <div className={`${onProjectSelect ? styles.bubbleHeaderSelect : styles.bubbleHeader} ${project.id === 4 ? styles.portfolioHeader : null}`}>
          {project.externalLink ?
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={styles.header}>{project.projectName}</h2>
              <div className={styles.arrowContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 10 16" fill="none">
                  <path d="M6.21622 8L0 1.86667L1.89189 0L10 8L1.89189 16L0 14.1333L6.21622 8Z" fill="#1B1B1B" fillOpacity="0.886275"/>
                </svg>
              </div>
            </a>
            
          : project.link ?
            <Link to={project.link} onClick={projectClick}>
              <h2 className={styles.header}>{project.projectName}</h2>
              <div className={styles.arrowContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 10 16" fill="none">
                  <path d="M6.21622 8L0 1.86667L1.89189 0L10 8L1.89189 16L0 14.1333L6.21622 8Z" fill="#1B1B1B" fillOpacity="0.886275"/>
                </svg>
              </div>
            </Link>
          :
            <h2 className={styles.header}>{project.projectName}</h2>
          }
        </div>
        <div className={`${styles.descCol1} ${onProjectSelect ? styles.descCol1Select : null}`}>
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
        </div>
        <div className={`${styles.descCol1B} ${onProjectSelect ? styles.descCol1BSelect : null}`}>
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
        <div className={`${styles.descCol2} ${styles.copyrightCol2}`}>
          { project.id === 4 ?
            <p className={styles.copyright}>Site developed and designed by me.<br/>copyright © 2025 Jennifer Holcomb</p>
          :            
            <p className={styles.blurb}>{project.description}</p>
          }
          { (project.externalLink || project.projectName === "Personal Website") && (
            <>
              {project.id !== 4 && (
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveSite}
              >
                Live Demo
              </a>
              )}
              <a 
              key={project.id}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.github} ${project.id === 4 ? styles.copyrightGithub : null}`}
              >
                Github
              </a>
            </>
          )}
          { project.figma && (
            <>
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveSite}
              >
                Case Study
              </a>
              <a 
              key={project.id}
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.github} ${project.id === 4 ? styles.copyrightGithub : null}`}
              >
                Figma
              </a>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectIntro;