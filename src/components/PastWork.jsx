import React from "react";

import useResize from "./hooks/useResize";
import styles from "./PastWork.module.scss";

import pastGigs from "./../data/pastGigData.jsx";

function PastWork() {
  
  return (
    <>
      <div className={styles.pastWorkWrapper}>
        <h1 className={styles.pageHeader}>PAST GIGS</h1>
        <div className={styles.bubbles}>

          {pastGigs.map((item, index) => (
            <section className={styles.bubbleShape} key={index}>
              <div className={styles.headerContainer}>
                <div className={styles.number}>{"0" + (index + 1).toString() + "."}</div>
                <h2 className={styles.headers}><span className={styles.blocked}>{item.title[0]}</span>
                  {item.title.length > 1 && (
                    <span className={styles.blocked}>+ {item.title[1]}</span>
                  )}
                </h2>
              </div>
              <p className={styles.blurb}>{item.description}</p>
              <img src={item.imgCard} alt={item.alt} className={styles.imgStyle} id={item.id === 2 ? styles.bsStyle : item.id === 1 ? styles.graphStyle : null} />
            </section>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default PastWork;