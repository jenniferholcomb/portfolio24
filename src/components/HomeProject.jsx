import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./HomeProject.module.scss";
import logo from "/logoInitials.svg";

function HomeProject({ projectData, onInternalProjectClick, onExternalProjectClick }) {
  
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.homeProjectHeader}>
          <object data={logo} className={styles.logoObject} type="image/svg+xml" >
            <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
          </object>
        </div>
        <div className={styles.cardContainer}>

          {projectData.map((project, index) => (
            <section className={styles.bubbleCard} key={index}>
              <div className={styles.bubbleContent}>
                <div className={styles.bubbleTop}>
                  <h3 className={styles.project}>{project.projectSubhead[0]}</h3>
                </div>
                <div className={styles.bubbleBottom}>
                  {project.disciplines.length === 1 ?
                    <>
                      <h4 className={styles.jobTag}>{project.disciplines[0]}</h4>
                      <h4 className={styles.noStyle}>.</h4>
                    </>
                  :
                    project.disciplines.map((item) => 
                      <h4 className={styles.jobTag} key={item}>{item}</h4>
                    )
                  };
                </div>
              </div>
              <div className={styles.picture}>
                { project.externalLink ?
                  <img className={styles.imgMask} src={project.smCard} onClick={() => onExternalProjectClick(project.id)} />
                :
                  <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={onInternalProjectClick}>
                    <img className={styles.imgMask} src={project.smCard} />
                  </Link>
                }
              </div>
            </section>
          ))};

        </div>
      </div>
    </>
  );
}

HomeProject.propTypes = {
  projectClick: PropTypes.func
};

export default HomeProject;