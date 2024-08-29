import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./PantryPro.module.scss";
import invLogo from "./../img/ppLogo.svg"
import bannerTop from "./../img/bannerImageWide.webp";

function PantryPro() {
  const [ isMobile, isDesktop ] = useResize();
  
  return (
    <>
      <div className={styles.pantryProWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        
        <div className={styles.logo}>
          <img src={invLogo} alt="top banner, graphic with food" />
        </div>
        <div className={styles.banner}>
          <img src={bannerTop} alt="top banner, graphic with food" />  
        </div>
        <div className={styles.bubbles}>
          <section className={styles.bubbleShape}>
            <div className={styles.bubbleContent}>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default PantryPro;