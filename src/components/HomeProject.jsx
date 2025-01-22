import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Home.module.scss";
import logo from "./../img/logoInitials.svg";
import ppCard from "./../img/pantryProThumbnailNoClip.webp";
import bsCard from "./../img/bendInSpoonThumbnailNoClip.webp";
import tbCard from "./../img/terraBeanThumbnailNoClip.webp";

function HomeProject(props) {
  const { projectClick } = props;
  const cardArr = ["one", "two", "three"];
  
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.homeProjectHeader}>
          <object data={logo} className={styles.logoObject} type="image/svg+xml" >
            <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
          </object>
        </div>
        <div className={styles.cardContainer}>
          <section className={styles.bubbleCard}>
            <div className={styles.picture}>
              <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
                <img className={styles.imgMask} src={bsCard} />
              </Link>
            </div>
            <div className={styles.bubbleContent}>
              <div className={styles.bubbleTop}>
                <h3 className={styles.project}>dashboard</h3>
              </div>
              <div className={styles.bubbleBottom}>
                <h4 className={styles.jobTag}>Full Stack Development</h4>
                <h4 className={styles.jobTag}>UX Design</h4>
              </div>
            </div>
          </section>

          <section className={styles.bubbleCard}>
            <div className={styles.picture}>
              <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
                <img className={styles.imgMask} src={ppCard} />
              </Link>
            </div>
            <div className={styles.bubbleContent}>
              <div className={styles.bubbleTop}>
                <h3 className={styles.project}>case study</h3>
              </div>
              <div className={styles.bubbleBottom}>
                <h4 className={styles.jobTag}>UX Design</h4>
                <h4 className={styles.noStyle}>.</h4>
              </div>
            </div>
          </section>

          <section className={styles.bubbleCard}>            
            <div className={styles.picture}>
              <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
                <img className={styles.imgMask} src={tbCard} />
              </Link>
            </div>
            <div className={styles.bubbleContent}>
              <div className={styles.bubbleTop}>
                <h3 className={styles.project}>e-commerce website</h3>
              </div>
              <div className={styles.bubbleBottom}>
                <h4 className={styles.jobTag}>Front End Development</h4>
                <h4 className={styles.jobTag}>UX Design</h4>
              </div>
            </div>
          </section>
        </div>
  
        {/* {cardArr.map((entry, index) => 
        <div className={styles.projectCard}>
          <h1>{entry}</h1>
          <h2>{index}</h2>
        </div>
        )} */}
      </div>
    </>
  );
}

HomeProject.propTypes = {
  projectClick: PropTypes.func
};

export default HomeProject;