import React, { useState, useRef, useEffect } from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import Slides from "./Slides";
import VideoPlay from "./VideoPlay";
import styles from "./PantryPro.module.scss";
import invLogo from "./../img/ppLogo.svg"
import bannerTop from "./../img/bannerImageWide.webp";
import ex1 from "./../img/InvEx1.webp";
import ex2 from "./../img/InvEx2.webp";
import ex3 from "./../img/InvEx3.webp";
import stMp from "./../img/InventorySitemap.svg";
import hm1 from "./../img/Homepage1.webp";
import hm2 from "./../img/Homepage2.webp";
import hm3 from "./../img/Homepage3.webp";
import hm4 from "./../img/Homepage4.webp";
import des1 from "./../img/Details1.webp";
import des2 from "./../img/Details2.webp";
import desKitImg from "./../img/stickerSheet.webp";
import allInv from "./../img/allInv.webp";

function PantryPro() {
  const [ isMobile, isDesktop ] = useResize();
  const [ carouselIndex, setCarouselIndex ] = useState(0);
  const videoEl = useRef(null);

  const handleCircleClick = (index) => {
    console.log('here', index)
    setCarouselIndex(index);
  }

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  
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
          <img loading="lazy" src={invLogo} alt="app logo" />
        </div>
        <div className={styles.banner}>
          <img loading="lazy" src={bannerTop} alt="top banner, graphic with food" />  
        </div>

        </div>        
        <div className={styles.sectionIntro}>
          <h1 className={styles.intro}>Inventory & Invoice Management Application</h1>              
          <svg xmlns="http://www.w3.org/2000/svg" width="532" height="2" viewBox="0 0 532 2" fill="none">
            <path d="M531 2C531.552 2 532 1.55228 532 1C532 0.447715 531.552 0 531 0V2ZM0 2H531V0H0V2Z" fill="#001B08"/>
          </svg>
          <div className={styles.info}>
            <h3 className={styles.infoYear}>
              Case Study 
              <br />
              <span className={styles.year}>2024</span>
            </h3>                
            <p className={styles.infoBlurb}>Two challenges in the realm of restaurant inventory management; the slow process of entering new invoice data, and the tedious job of counting goods. This app is conceptualized to give the user power to upload invoices using AI technology, and a design to prevent task fatigue while counting items. In addition to being a streamlined application for managing and categorizing inventory.</p>
          </div>
        </div>
        <div className={styles.exShotInv}>
          <img loading="lazy" className={styles.imgInv} src={ex1} alt="app landing page" />
          <img loading="lazy" className={styles.imgInv} src={ex2} alt="app inventory listing page" />
          <img loading="lazy" className={styles.imgInv} src={ex3} alt="app product counting page" />
        </div>

        <div className={styles.section1}>
          <div className={styles.oneInfo}>
            <div className={styles.numberInv}>01.</div>
            <h2 className={styles.headersInv} id={styles.headers}>The Problem</h2>
          </div>
          <div className={styles.line}>
            <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
              <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08"/>
            </svg>
          </div>          
        </div>
        <p id={styles.blurb1} className={styles.blOne}>How to address these two challenges?</p>
        <p id={styles.blurb1} className={styles.blTwo}>1. With modern technology, users no longer need to manually enter line items from invoices. AI can facilitate managers with scanning and categorizing data into fields that can be edited and cataloged. Based on interviews with restaurant managers, invoice data entry is time consuming and suspect of human error. A system to alleviate these pain points is valid in creating trusted and productive inventory management. </p>
        <p id={styles.blurb1} className={styles.blThree}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>         
  
        <Slides slideIndex={carouselIndex} handleCircleClick={handleCircleClick}/>
       
        <div className={styles.twoBlurb}>
          <h2 className={styles.headersInv} id={styles.userResHead}>User Research</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="677" height="2" viewBox="0 0 677 2" fill="none">
            <path d="M697 2.00006C697.552 2.00006 698 1.55235 698 1.00006C698 0.447776 697.552 6.0982e-05 697 6.09337e-05L697 2.00006ZM-8.74228e-08 2L697 2.00006L697 6.09337e-05L8.74228e-08 0L-8.74228e-08 2Z" fill="#001B08"/>
          </svg>
          <p id={styles.blurb1} className={styles.blFour}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
        </div>

        <div className={`${styles.section1} ${styles.problem}`}>
          <div className={styles.oneInfo}>
            <div className={styles.numberInv}>02.</div>
            <h2 className={styles.headersInv} id={styles.headers}>Solution</h2>
          </div>
          <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08"/>
          </svg>
        </div>
        <p id={styles.blurb1} className={styles.blOne}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
        <div className={styles.site}>
          <img loading="lazy" className={styles.siteMap} src={stMp} alt="sitemap illustration" />
        </div>

        <div className={styles.section3}>       
          {/* <img className={styles.img3} src={ex1} alt="app landing page"  /> */}
          <VideoPlay />
          {/* <img className={styles.img3} src={ex2} alt="app inventory listing page" /> */}
        </div>

        <div className={`${styles.section4Img} ${styles.section4}`}>
          <img loading="lazy" src={hm1} alt="landing page iteration 1" />
          <img loading="lazy" src={hm2} alt="landing page iteration 2" />
          <img loading="lazy" src={hm3} alt="landing page iteration 3" />
          <img loading="lazy" src={hm4} alt="landing page iteration 4" />
        </div>
        <div className={styles.twoBlurb}>
          <h2 className={styles.headersInv} id={styles.usaStdy}>Usability Study</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="677" height="2" viewBox="0 0 677 2" fill="none">
            <path d="M697 2.00006C697.552 2.00006 698 1.55235 698 1.00006C698 0.447776 697.552 6.0982e-05 697 6.09337e-05L697 2.00006ZM-8.74228e-08 2L697 2.00006L697 6.09337e-05L8.74228e-08 0L-8.74228e-08 2Z" fill="#001B08"/>
          </svg>
          <p id={styles.blurb1} >2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
        </div>
        <div className={`${styles.section4Img} ${styles.section4B}`}>
          <img loading="lazy" src={hm1} alt="landing page iteration 1" />
          <img loading="lazy" src={hm2} alt="landing page iteration 2" />
          <img loading="lazy" src={hm3} alt="landing page iteration 3" />
        </div>
        <img className={`${styles.sec4LastImg} ${styles.section4B}`} src={hm4} alt="landing page iteration 4" />

        <h2 className={styles.headersInv} id={styles.desDetails}>Design Details</h2>
        <h2 className={styles.headersInv} id={styles.desKit}>Design Kit</h2>
        <svg className={styles.line} id={styles.lineDes} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
          <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08"/>
        </svg>
        <div className={styles.section5}>
          <p id={styles.blurb1}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
          <div className={styles.detailsImg}>
            <img loading="lazy" src={des1} alt="design details example 1" />
            <img loading="lazy" src={des2} alt="design details example 2" />
          </div>
        </div>
        <div className={styles.section5B}>
          <img loading="lazy" className={styles.bImg} src={desKitImg} alt="screenshot of design kit" />
        </div>

        <img className={styles.finalSection} src={allInv} alt="screenshot of all pages in app" />
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRu2A0JM3KAsndEESFDJ5ID%2FInventory-app%3Fnode-id%3D1429-4746%26node-type%3DFRAME%26t%3DVDWd9J0xfe4sHeRp-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D8%253A85%26starting-point-node-id%3D1429%253A4746" allowFullScreen></iframe>

        <div className={`${styles.section1} ${styles.problem}`}>
          <div className={styles.oneInfo}>
            <div className={styles.numberInv}>03.</div>
            <h2 className={styles.headersInv} id={styles.headers}>Solution</h2>
          </div>
          <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08"/>
          </svg>
        </div>
        <p id={styles.blurb1} className={styles.finalOne}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a necessary part of weekly costing. For small restaurants, and food carts, profits can drastically swing from week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
        
        <div className={styles.addInfo}>
          <h2 className={styles.headersInv} id={styles.desDetails}>Additional Projects</h2>
          <svg className={styles.line} id={styles.lineDes} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08"/>
          </svg>
        </div>
      </div>



      <div className={styles.bubbles}>
        <div className={styles.bubble1}></div>
        <div className={styles.bubble2}></div>
        <div className={styles.bubble3}></div>
        
      </div>        
    </>
  );
}

export default PantryPro;