import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./Projects.module.scss";

import ppCard from "./../img/pantryPro_previewIMG.webp";
import bsCard from "./../img/bendInSpoon_previewIMG.webp";

function Projects({projectClick}) {
  const [ isMobile, isDesktop ] = useResize();

  const cardArr = ["one", "two", "three"];

  return (
    <>
      <div className={styles.projectsWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        <h1 className={styles.pageHeader}>PROJECTS</h1>

          <div className={styles.cardContainer}>
            <section className={styles.bubbleCard}>
              <div className={styles.picture}>
                <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
                  <img className={styles.imgMask} src={bsCard} />
                </Link>
              </div>
              <div className={styles.bubbleContent}>
                <div className={styles.bubbleHeader}>
                  <h2 className={styles.header}>Bend In Spoon</h2>
                  <div className={styles.arrowContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                      <path d="M6.21622 8L0 1.86667L1.89189 0L10 8L1.89189 16L0 14.1333L6.21622 8Z" fill="#1B1B1B" fill-opacity="0.886275"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.projectDescription}>
                  <div className={styles.descCol1}>
                    <h4 className={styles.bubbleHeader2}>dashboard</h4>
                    <h4 className={styles.bubbleHeader2}>2024</h4>
                    <p className={styles.bubbleSubHead} id={styles.ux}>Full Stack Development<br/>UI Design</p>
                    <h4 className={styles.bubbleHeader2} id={styles.tech}>technologies</h4>
                    <p className={styles.bubbleSubHead}>React.js<br/>CSS<br/>Firestore<br/>API's<br/>Figma</p>
                  </div>
                  <div className={styles.descCol2}>
                    <p className={styles.blurb}>My strategy for developing brand identities is to align company culture with client input, work to create cohesive logo and branding across in-store and digital platforms, then elevate consumer brand awareness. Thought is given to interior design, refreshed employee uniforms, stylized menus, and website interfaces. Additionally, a logo-driven merchandise program is created to further strengthen brand recognition.</p>
                  </div>
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
                <div className={styles.bubbleHeader}>
                  <h2 className={styles.header}>Pantry Pro</h2>
                  <div className={styles.arrowContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                      <path d="M6.21622 8L0 1.86667L1.89189 0L10 8L1.89189 16L0 14.1333L6.21622 8Z" fill="#1B1B1B" fill-opacity="0.886275"/>
                    </svg>
                </div>
                </div>
                <div className={styles.projectDescription}>
                  <div className={styles.descCol1}>
                    <h4 className={styles.bubbleHeader2}>case study</h4>
                    <h4 className={styles.bubbleHeader2}>2024</h4>
                    <p className={styles.bubbleSubHead} id={styles.ux}>UX/UI Design</p>
                    <h4 className={styles.bubbleHeader2} id={styles.tech}>technologies</h4>
                    <p className={styles.bubbleSubHead}>Figma<br/>Illustrator<br/>Photoshop</p>
                  </div>
                  <div className={styles.descCol2}>
                    <p className={styles.blurb}>My strategy for developing brand identities is to align company culture with client input, work to create cohesive logo and branding across in-store and digital platforms, then elevate consumer brand awareness. Thought is given to interior design, refreshed employee uniforms, stylized menus, and website interfaces. Additionally, a logo-driven merchandise program is created to further strengthen brand recognition.</p>
                  </div>
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
                <div className={styles.bubbleHeader}>
                  <h2 className={styles.header}>Terra Bean Coffee Co.</h2>
                  <div className={styles.arrowContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                      <path d="M6.21622 8L0 1.86667L1.89189 0L10 8L1.89189 16L0 14.1333L6.21622 8Z" fill="#1B1B1B" fill-opacity="0.886275"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.projectDescription}>
                  <div className={styles.descCol1}>
                    <h4 className={styles.bubbleHeader2}>ecommerce website</h4>
                    <h4 className={styles.bubbleHeader2}>2024</h4>
                    <p className={styles.bubbleSubHead} id={styles.ux}>Front End Development<br/>UI Design</p>
                    <h4 className={styles.bubbleHeader2} id={styles.tech}>technologies</h4>
                    <p className={styles.bubbleSubHead}>React.js<br/>CSS<br/>Figma</p>
                  </div>
                  <div className={styles.descCol2}>
                    <p className={styles.blurb}>My strategy for developing brand identities is to align company culture with client input, work to create cohesive logo and branding across in-store and digital platforms, then elevate consumer brand awareness. Thought is given to interior design, refreshed employee uniforms, stylized menus, and website interfaces. Additionally, a logo-driven merchandise program is created to further strengthen brand recognition.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </div>
    </>
  );
}

export default Projects;
