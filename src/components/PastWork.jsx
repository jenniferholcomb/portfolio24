import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./PastWork.module.scss";

import pastGigs from "./../data/pastGigData.jsx";

function PastWork() {
  const [ isMobile, isDesktop ] = useResize();
  
  return (
    <>
      <div className={styles.pastWorkWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        <h1 className={styles.pageHeader}>PAST GIGS</h1>
        <div className={styles.bubbles}>

          {pastGigs.map((item, index) => (
            <section className={styles.bubbleShape} key={index}>
              <div className={styles.bubbleContent}>
                <div className={styles.headerContainer}>
                  <div className={styles.number}>{"0" + (index + 1).toString() + "."}</div>
                  <h2 className={styles.headers}><span className={styles.blocked}>{item.title[0]}</span>
                    {item.title.length > 1 && (
                      <span className={styles.blocked}>+ {item.title[1]}</span>
                    )}
                  </h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="361" height="1" viewBox="0 0 361 1" fill="none">
                  <path d="M360 2C360.552 2 361 1.55228 361 1C361 0.447715 360.552 0 360 0V2ZM0 2H360V0H0V2Z" fill="#001B08"/>
                </svg>
                <p className={styles.blurb}>{item.description}</p>
              </div>
              <img src={item.imgCard} alt={item.alt} className={styles.imgStyle} id={item.id === 2 && (styles.bsStyle)} />
            </section>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default PastWork;