import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./Projects.module.scss";
import ppCard from "./../img/pantryProCard.webp";

function Projects() {
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

              <div className={styles.picture}>
                <Link to={"/projects/pantrypro"} className={styles.linkCardStyle}>
                  <img className={styles.imgMask} src={ppCard} />
                </Link>
              </div>
          
          
        
        {/* <div className={styles.projectCard} onClick={homeClick}></div>
        <div className={styles.picture}>
          <img className={styles.imgMask} src={ppCard} />
        </div> */} 
  
        {cardArr.map((entry, index) => 
        <div className={styles.projectCard}>
          <h1>{entry}</h1>
          <h2>{index}</h2>
        </div>
        )}
      </div>
    </>
  );
}

export default Projects;
