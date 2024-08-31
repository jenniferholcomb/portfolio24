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
        <div className={styles.sectionIntro}>
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


        <div className={styles.section1}>
          <div className={styles.oneInfo}>
            <div className={styles.numberInv}>01.</div>
            <h2 className={styles.headersInv}>The Problem</h2>
          </div>
          <div className={styles.line}>
            <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
              <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08"/>
            </svg>
          </div>
          

            <p className={styles.blurb11}>So how to address these two challenges,</p>
            <p className={styles.blurb12}>1. With modern technology, users no longer need to manually enter line items from invoices. AI can facilitate managers with scanning and categorizing data into fields that can be edited and cataloged. Based on interviews with restaurant managers, invoice data entry is time consuming and suspect of human error. A system to alleviate these pain points is valid in creating trusted and productive inventory management. </p>
            <p className={styles.blurb13}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
          

          </div>
          <div className={styles.oneCarousel}>
            <div className={styles.carouselContent}>

            </div>
        </div>
            <div className={styles.twoBlurb}>
            <h2 className={styles.headersInv}>The Problem</h2>
            <p className={styles.blurb1}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
            </div>
      </div>


      <div className={styles.bubbles}>
        <div className={styles.bubble1}></div>
        <div className={styles.bubble2}></div>
        <div className={styles.bubble2}></div>
        
      </div>        
    </>
  );
}

export default PantryPro;