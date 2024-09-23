import React, { useState, useRef, useEffect } from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import Slides from "./Slides";
import VideoPlay from "./VideoPlay";
import styles from "./PantryPro.module.scss";
import invLogo from "./../img/ppLogo.svg"
import bannerTop from "./../img/bannerImageWide.webp";
import ex1 from "./../img/landPg.webp";
import ex2 from "./../img/goods1.webp";
import ex3 from "./../img/InvEx3.webp";
import stMp from "./../img/InventorySitemap.svg";
import hm1 from "./../img/quickSketch.webp";
import hm2 from "./../img/Homepage2.webp";
import hm4 from "./../img/Homepage4.webp";
import hm5 from "./../img/redesign1.webp";
import hm6 from "./../img/redesign2.webp";
import invoiceLnd from "./../img/InvoiceEx.webp";
import kitImg1 from "./../img/desKit1.webp";
import kitImg2 from "./../img/desKit2.webp";
import kitImg3 from "./../img/desKit3.webp";
import kitImg4 from "./../img/desKit4.webp";
import kitImg5 from "./../img/desKit5.webp";
import kitImg6 from "./../img/desKit6.webp";
import kitImg7 from "./../img/desKit7.webp";
import kitImg8 from "./../img/desKit8.webp";
import allInv from "./../img/allFrames.webp";
import vid from "./../img/mockVid.mp4";
import vid2 from "./../img/wireVid.mp4";
import vid3 from "./../img/invoiceFlow2.mp4";

function PantryPro() {
  const [isMobile, isDesktop] = useResize();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCircleClick = (index) => {
    setCarouselIndex(index);
  }

  return (
    <>
      <div className={styles.pantryProWrapper}>
        {/* {
          isMobile ?
            <Header />
            : null
        } */}
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <img loading="lazy" src={invLogo} alt="app logo" />
          </div>
          <div className={styles.banner}>
            <img loading="lazy" src={bannerTop} alt="top banner, graphic with food" />
          </div>

        </div>
        <div className={styles.sectionIntro}>
          <div className={styles.info}>
            <h3 className={styles.infoYear}>
              Pantry Pro
              <br />
              Conceptual Mobile App
              <br />
              2024
            </h3>
          </div>
          <p className={`${styles.infoBlurb} ${styles.info}`} id={styles.summary}>Improving inventory and invoice management for restaurant owners and operators.</p>
          <svg className={`${styles.line} ${styles.introLine}`} xmlns="http://www.w3.org/2000/svg" width="532" height="2" viewBox="0 0 532 2" fill="none">
            <path d="M531 2C531.552 2 532 1.55228 532 1C532 0.447715 531.552 0 531 0V2ZM0 2H531V0H0V2Z" fill="#001B08" />
          </svg>
          <div className={styles.info}>
            <p className={styles.infoBlurb}>Two challenges in the realm of restaurant inventory management; the slow process of entering new invoice data, and the tedious job of counting goods. This app is conceptualized to give the user power to upload invoices using AI technology, and a design to prevent task fatigue while counting items. In addition to being a streamlined application for managing and categorizing inventory.</p>
          </div>
        </div>
        <div className={styles.exShotInv}>
          <img loading="lazy" className={styles.imgInv} src={ex1} alt="app landing page" />
          <img loading="lazy" className={styles.imgInv} src={ex2} alt="app inventory listing page" />
          <img loading="lazy" className={styles.imgInv} id={styles.imgInvHide} src={ex3} alt="app product counting page" />
        </div>

        <div className={styles.section1}>
          <div className={styles.oneInfo}>
            <div className={styles.numberInv}>01.</div>
            <h2 className={styles.headersInv} id={styles.headers}>The Problem</h2>
          </div>
          <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
          </svg>
        </div>

        <div className={styles.prob1}>
          <p id={styles.blurb1} className={styles.blOne}>How to improve the experience of managing inventory for restaurants and food carts?  After research and interviews, I was able to outline a few inconveniences of overseeing the ebb and flow of inventory, and pain points of other inventory management apps.<span className={styles.blOneB}> Overwhelmingly, updating logs of current inventory was voiced by managers as a monotonous and dreaded responsibility.</span></p>
        </div>
        <div className={styles.prob2}>
          <p id={styles.blurb1} className={styles.blTwo}>Overwhelmingly, updating logs of current inventory was voiced by managers as a monotonous and dreaded responsibility.  Small restaurant owners cited the chore as not being a priority, with time better spent on other business dealings.</p>
        </div>
        <div className={styles.prob3}>
          <p id={styles.blurb1}><span className={styles.blThreeB}>Small restaurant owners cited the chore as not being a priority, with time better spent on other business dealings.</span><span className={styles.blThree}>Though, a common grievance among business owners is rising cost of goods and labor, both contributing to higher daily operational expenses.  All recognize a necessity for keeping accurate books, and desire for an improved system to manage inventory.</span></p>
        </div>

        <div className={`${styles.section1} ${styles.solution} ${styles.useResHide}`}>
          <div className={styles.useResInfo}>
            <h2 className={styles.headersInv} id={styles.useResDetails}>User Research</h2>
          </div>
          <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
          </svg>
        </div>

        <Slides slideIndex={carouselIndex} handleCircleClick={handleCircleClick} />

        <div className={styles.twoSection}>
          <div className={styles.twoSectionHide}>
            <h2 className={styles.headersInv} id={styles.userResHead}>User Research</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="677" height="2" viewBox="0 0 677 2" fill="none">
              <path d="M697 2.00006C697.552 2.00006 698 1.55235 698 1.00006C698 0.447776 697.552 6.0982e-05 697 6.09337e-05L697 2.00006ZM-8.74228e-08 2L697 2.00006L697 6.09337e-05L8.74228e-08 0L-8.74228e-08 2Z" fill="#001B08" />
            </svg>
          </div>
          <p className={styles.usResBlurb} id={styles.blurb1}>The user for this project consists of restaurant, and food truck, owners and operators. They require an app that simplifies how data updates are made when receiving inventory, as well as managing accurate counts of inventory on hand. Additionally, desire for an interface that is easy to navigate, and streamlines product information.</p>
          <p className={styles.usResBlurbB} id={styles.blurb1}>A monthly inventory count helper, ability to upload invoices from photo or pdf, easy access to past reports, auto updates to product quantities, and auto reminders for products needing to be replenished &mdash; all features recommended for this app to be successful.</p>
        </div>

        <div className={`${styles.section1} ${styles.solution}`}>
          <div className={styles.oneInfo}>
            <div className={styles.numberInv}>02.</div>
            <h2 className={styles.headersInv} id={styles.headers}>Solution</h2>
          </div>
          <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
          </svg>
        </div>
        <div className={styles.siteSection}>
          <p id={styles.blurb1} className={`${styles.sitePA}`}>How to address the challenges of task fatigue when entering invoice data or counting inventory?<br /><br />1. With modern technology, manual data entry can be eliminated. AI can facilitate managers with scanning invoices and categorizing data into fields that can be edited and cataloged. This removes chance for human error, and frees up valuable time. An app invoice reader is necessary for establishing trusted inventory data.<span className={styles.sitePAHide}><br /><br />2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a requirement of weekly costing. For small restaurants, and food carts, profits can drastically change week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</span></p>
          <p id={styles.blurbPadAdj} className={`${styles.sitePB}`}>2. Who likes counting, over and over again? Keeping accurate counts of inventory on hand is a requirement of weekly costing. For small restaurants, and food carts, profits can drastically change week to week. A system designed to aid managers in quick counting of goods, and reports itemizing what needs a restock, are both tools that could ease the daily rigor of owning or operating a small restaurant.</p>
          <div className={styles.site}>
            <img loading="lazy" className={styles.siteMap} src={stMp} alt="sitemap illustration" />
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.threeBlurb}>
            <div className={styles.usaInfo}>
              <h2 className={`${styles.headersInv} ${styles.usaHeader}`} >Usability Study</h2>
            </div>
            <svg className={`${styles.line} ${styles.usaLineA}`} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
              <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
            </svg>
            <svg className={`${styles.line} ${styles.usaLineB}`} xmlns="http://www.w3.org/2000/svg" width="532" height="2" viewBox="0 0 532 2" fill="none">
              <path d="M531 2C531.552 2 532 1.55228 532 1C532 0.447715 531.552 0 531 0V2ZM0 2H531V0H0V2Z" fill="#001B08" />
            </svg>
            <div className={styles.usaPContainer}>
              <p className={styles.siteUSA} id={styles.blurb1}>Original ideation focused on a broader set of users; including employees in addition to managers. With a restaurant&ndash;wide user base, a message board containing shop to&ndash;do&apos;s and reminders was designed into the landing page. It was also conceived a POS system would be incorporated into the interface &mdash; a feature necessary for auto&ndash;updating product quantities. As these both would be beneficial, it was decided collectively these features are beyond the current scope of this project. <span className={styles.siteUSSpanA}>Therefore, the user was reevaluated and focused solely on individuals who manage inventory, the owners and operators.</span></p>
              <p className={styles.siteUSB} id={`${styles.usaBlurbWide}`}><span className={styles.siteUSSpanB}>Therefore, the user was reevaluated and focused solely on individuals who manage inventory, the owners and operators.<br /><br /></span>Conducting new research with a singular user, interface flow took precedence.  Landing page would now prioritize color coded call-to-action buttons, in addition to drop down menus for quick access to all inventory and recent invoice uploads. A shopping list feature was also added to help with product ordering.</p>
            </div>
          </div>
          <div className={styles.section3b}>
            <VideoPlay video1={vid} video2={vid2} />
            <h3 className={styles.videoCaption}>Flow - Inventory count</h3>
          </div>
        </div>

        <div className={`${styles.section4Img}`}>
            <img className={styles.fourImg} loading="lazy" src={hm1} alt="landing page iteration 1" />
            <img className={styles.fourImg} loading="lazy" src={hm2} alt="landing page iteration 2" />
            <img className={styles.fourImg} loading="lazy" src={hm4} alt="landing page iteration 4" />
            <img className={styles.fourImg} loading="lazy" src={hm5} alt="landing page iteration 1" />
            <img className={styles.fourImg} loading="lazy" src={hm6} alt="landing page iteration 2" />
        </div>
        <h3 className={styles.section4Caption}>Design Iterations - Landing page</h3>

        <div className={styles.section5}>
          <h2 className={styles.headersInv} id={styles.desDetails}>Invoice Reader Details</h2>
          <h2 className={styles.headersInv} id={styles.desKit}>UI Kit</h2>
          <svg className={`${styles.line} ${styles.sec5Line}`} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
          </svg>
        {/* </div>
        <div className={styles.section5P}> */}
          <p className={styles.sec5P} id={styles.blurb1}>Competitive analysis for this project concluded that the ability to scan or upload invoices was not a standard feature amongst competitors. Though, other types of apps utilize the technology. I studied recipe box interfaces that allow users to upload printed copies, or photos, of personal recipes, that are then converted into a digital recipe. In addition, I probed how ChapGPT would analyze an invoice. The process to translate an invoice from paper to digital seems simple enough; ask AI to analyze document, detail how you would like information in return, then fill data into editable text fields for user to scan for errors.</p>
          {/* <div className={styles.invoiceContent}> */}
            <div className={styles.invVidCap}>
              <VideoPlay video1={vid3} />
              <h3 className={styles.videoCaption}>Flow - AI Invoice Reader</h3>
            </div>
            <img loading="lazy" src={invoiceLnd} className={styles.invImg} alt="design details example 1" />
          {/* </div> */}
        {/* </div>
        <div className={styles.section5B}> */}
          <div className={styles.kitGrp1}>
            <img loading="lazy" className={styles.uiImg} id={styles.kit1} src={kitImg1} alt="screenshot of UI kit" />
            <img loading="lazy" className={styles.uiImg} id={styles.kit3} src={kitImg2} alt="screenshot of UI kit" />
            <img loading="lazy" className={styles.uiImg} id={styles.kit4} src={kitImg3} alt="screenshot of UI kit" />
          </div>
          <div className={styles.kitGrp2}>
            <img loading="lazy" className={styles.uiImg} id={styles.kit2} src={kitImg8} alt="screenshot of UI kit" />
            <img loading="lazy" className={styles.uiImg} id={styles.kit7} src={kitImg6} alt="screenshot of UI kit" />
          </div>
          <div className={styles.kitGrp3}>
            <img loading="lazy" className={styles.uiImg} id={styles.kit5} src={kitImg4} alt="screenshot of UI kit" />
          </div>
          <div className={styles.kitGrp4}>
            <img loading="lazy" className={styles.uiImg} id={styles.kit6} src={kitImg5} alt="screenshot of UI kit" />

          </div>
        <img className={styles.finalSectionImg} src={allInv} alt="screenshot of all pages in app" />
        <svg className={`${styles.line} ${styles.secKitLine}`} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
          <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
        </svg>
        </div>



        <div className={`${styles.section1}`}>
          <div className={styles.refInfo}>
            <div className={styles.numberInv}>03.</div>
            <h2 className={styles.headersInv} id={styles.headers}>Reflection</h2>
          </div>
          <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
          </svg>
        </div>
        <p id={styles.blurb1} className={styles.columnOneParagraph}>What has so far been ideated for this project is just a shell of what an inventory management application could encompass.<br /><br />Further exploration might include developing a POS system that automates inventory quantity counts based on items sold, or including menu prep lists that predict what goods need to be ordered. Highlighting products that have increased in price, while simultaneously recommending menu items to push that cost less to make.</p>
        <p id={styles.blurb1} className={styles.columnTwoParagraph}>A fully automated inventory management system that would benefit restaurant and food cart owners, saving them both time and money.<br /><br />Designing for the user, researching what tools can enhance their day to day, features they want or ones they don&apos;t yet realize, is my constant source for inspiring new ideas.</p>

        <div className={styles.addInfo}>
          <h2 className={`${styles.addInfoColContainer} ${styles.headersInv}`} id={styles.addDetails}>Additional Projects</h2>
          <svg className={styles.line} id={styles.lineDes} xmlns="http://www.w3.org/2000/svg" width="1728" height="2" viewBox="0 0 1728 2" fill="none">
            <path d="M1743 2C1743.55 2 1744 1.55228 1744 1C1744 0.447715 1743.55 0 1743 0V2ZM-18 2H1743V0H-18V2Z" fill="#001B08" />
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