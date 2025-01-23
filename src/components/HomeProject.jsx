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
            <div className={styles.bubbleContent}>
              <div className={styles.bubbleTop}>
                <div className={styles.number}>01.</div>
                <h3 className={styles.project}>dashboard</h3>
                {/* <div className={styles.projectArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
                    <path d="M7 7L0 0V14L7 7Z" fill="#001B08"/>
                  </svg>
                </div> */}
              </div>
              <div className={styles.bubbleBottom}>
                <h4 className={styles.jobTag}>Full Stack Development</h4>
                <h4 className={styles.jobTag}>UX Design</h4>
              </div>
            </div>
            <div className={styles.picture}>
              <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
                <img className={styles.imgMask} src={bsCard} />
              </Link>
            </div>
          </section>

          <section className={styles.bubbleCard}>
            <div className={styles.bubbleContent}>
              <div className={styles.bubbleTop}>
                <div className={styles.number}>02.</div>
                <h3 className={styles.project}>case study</h3>
                {/* <div className={styles.projectArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
                    <path d="M7 7L0 0V14L7 7Z" fill="#001B08"/>
                  </svg>
                </div> */}
              </div>
              <div className={styles.bubbleBottom}>
                <h4 className={styles.jobTag}>UX Design</h4>
                <h4 className={styles.noStyle}>.</h4>
              </div>
            </div>
            <div className={styles.picture}>
              <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
                <img className={styles.imgMask} src={ppCard} />
              </Link>
            </div>
          </section>

          <section className={styles.bubbleCard}>            
            <div className={styles.bubbleContent}>
              <div className={styles.bubbleTop}>
                <div className={styles.number}>03.</div>
                <h3 className={styles.project}>e-commerce website</h3>
                {/* <div className={styles.projectArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
                    <path d="M7 7L0 0V14L7 7Z" fill="#001B08"/>
                  </svg>
                </div> */}
              </div>
              <div className={styles.bubbleBottom}>
                <h4 className={styles.jobTag}>Front End Development</h4>
                <h4 className={styles.jobTag}>UX Design</h4>
              </div>
            </div>
            <div className={styles.picture}>
              <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
                <img className={styles.imgMask} src={tbCard} />
              </Link>
            </div>
          </section>
        </div>
  
        {/* <div className={styles.vertLine}>
          {/* <div className={styles.line3}></div> */}
          {/* <div className={styles.line1}></div>
          <div className={styles.line1}></div>
        </div> */}
        {/* <div className={styles.vertLine2}>
          <div className={styles.line1}></div>
        </div>  */}
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