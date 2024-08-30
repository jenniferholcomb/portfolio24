import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./PantryPro.module.scss";
import invLogo from "./../img/ppLogo.svg"
import bannerTop from "./../img/bannerImageWide.webp";
import ex1 from "./../img/InvEx1.webp";
import ex2 from "./../img/InvEx2.webp";
import ex3 from "./../img/InvEx3.webp";

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
        <div className={styles.topBar}>

        <div className={styles.logo}>
          <img src={invLogo} alt="top banner, graphic with food" />
        </div>
        <div className={styles.banner}>
          <img src={bannerTop} alt="top banner, graphic with food" />  
        </div>
        </div>        
        <div className={styles.section1}>
          <h1 className={styles.intro}>Inventory & Invoice Management Application</h1>              
          <svg xmlns="http://www.w3.org/2000/svg" width="532" height="2" viewBox="0 0 532 2" fill="none">
            <path d="M531 2C531.552 2 532 1.55228 532 1C532 0.447715 531.552 0 531 0V2ZM0 2H531V0H0V2Z" fill="#001B08"/>
          </svg>
          <div className={styles.info}>
            <h3 className={styles.infoYear}>2024</h3>                
            <p className={styles.infoBlurb}>Two challenges in the realm of restaurant inventory management; the slow process of entering new invoice data, and the tedious job of counting goods. This app is conceptualized to give the user power to upload invoices using AI technology, and a design to prevent task fatigue while counting items. In addition to being a streamlined application for managing and categorizing inventory.</p>
          </div>
        </div>
        <div className={styles.exShotInv}>
          <img src={ex1} alt="app landing page" className={styles.imgInv} />
          <img className={styles.imgInv} src={ex2} alt="app inventory listing page" />
          <img className={styles.imgInv} src={ex3} alt="app product counting page" />
        </div>
      </div>
      
      <div className={styles.bubble1}></div>
      <div className={styles.bubble1}></div>
    </>
  );
}

export default PantryPro;