import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./PastWork.module.scss";

import cbBundle from "./../img/chowburgerbundle.png";
import bsBundle from "./../img/bellysanbundle.png";
import okBundle from "./../img/accessorybundle.png";
import techBundle from "./../img/patterntechbundle.png";
import teachBundle from "./../img/teachingbundle.png";

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
          <section className={styles.bubbleShape}>
            <div className={styles.bubbleContent}>
              <div className={styles.headerContainer}>
                <div className={styles.number}>01.</div>
                <h2 className={styles.headers}><span className={styles.blocked}>Brand Identity</span><span className={styles.blocked}>+ Graphic Design</span></h2>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="361" height="2" viewBox="0 0 361 2" fill="none">
                <path d="M360 2C360.552 2 361 1.55228 361 1C361 0.447715 360.552 0 360 0V2ZM0 2H360V0H0V2Z" fill="#001B08"/>
              </svg>
              <p className={styles.blurb}>My strategy for developing brand identities is to align company culture with client input, work to create cohesive logo and branding across in-store and digital platforms, then elevate consumer brand awareness. Thought is given to interior design, refreshed employee uniforms, stylized menus, and website interfaces. Additionally, a logo-driven merchandise program is created to further strengthen brand recognition.</p>
            </div>
            <img src={cbBundle} alt="Brand Development and graphic design examples collage" className={styles.imgStyle} />
          </section>
        
          <section className={styles.bubbleShape}>
            <div className={styles.bubbleContent}>
              <div className={styles.headerContainer}>  
                <div className={styles.number}>02.</div>
                <h2 className={styles.headers}>Logo Design</h2>
              </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="361" height="2" viewBox="0 0 361 2" fill="none">
                  <path d="M360 2C360.552 2 361 1.55228 361 1C361 0.447715 360.552 0 360 0V2ZM0 2H360V0H0V2Z" fill="#001B08"/>
                </svg>
                <p className={styles.blurb}>Creating custom logo designs is a collaborative effort with the client.  Mashing multiple points of inspiration, colors, font styles, or geographical location; all are factors contributing to the unique artwork. Starting with process sketches, then iterating multiple times over design, before digitizing final art. Continuing to work with the client, a series of color studies is presented to ensure final design is aligned with their brand.  </p>
              </div>
              <img src={bsBundle} alt="Logo design examples with sketches and inspiration" className={styles.imgStyle} />
          </section>
          
          <section className={styles.bubbleShape}>
            <div className={styles.bubbleContent}>
              <div className={styles.headerContainer}>  
                <div className={styles.number}>03.</div>
                <h2 className={styles.headers}><span className={styles.blocked}>Accessory Design</span><span className={styles.blocked}>+ Founder</span></h2>
              </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="361" height="2" viewBox="0 0 361 2" fill="none">
                  <path d="M360 2C360.552 2 361 1.55228 361 1C361 0.447715 360.552 0 360 0V2ZM0 2H360V0H0V2Z" fill="#001B08"/>
                </svg>
                <p className={styles.blurb}>I launched a startup leather bag and accessory company, ok Louise. Brand ethos was to reduce waste and maximize yield by pairing cleverly engineered patterns with high quality deadstock leathers. Inspired by the strength and spirit of the Pacific Northwest woman, both past and present, designs were highly functional and built to be worn season after season.</p>
              </div>
              <img src={okBundle} alt="Logo design examples with sketches and inspiration" className={styles.imgStyle} />
          </section>

          <section className={styles.bubbleShape}>
            <div className={styles.bubbleContent}>
              <div className={styles.headerContainer}>  
                <div className={styles.number}>04.</div>
                <h2 className={styles.headers}><span className={styles.blocked}>Pattern Engineering</span><span className={styles.blocked}>+ Tech Sketching</span></h2>
              </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="361" height="2" viewBox="0 0 361 2" fill="none">
                  <path d="M360 2C360.552 2 361 1.55228 361 1C361 0.447715 360.552 0 360 0V2ZM0 2H360V0H0V2Z" fill="#001B08"/>
                </svg>
                <p className={styles.blurb}>In addition to founding my own accessory brand, I also partnered with other label founders. My speciality was in technical design and technical packages, as well as digital and flat pattern engineering. Though, I also worked on organizing order of operations and pattern inventories for bag production, prototype construction, and costing.</p>
              </div>
              <img src={techBundle} alt="Logo design examples with sketches and inspiration" className={styles.imgStyle} />
          </section>
          
          <section className={styles.bubbleShape}>
            <div className={styles.bubbleContent}>
              <div className={styles.headerContainer}>  
                <div className={styles.number}>05.</div>
                <h2 className={styles.headers}>Teaching</h2>
              </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="361" height="2" viewBox="0 0 361 2" fill="none">
                  <path d="M360 2C360.552 2 361 1.55228 361 1C361 0.447715 360.552 0 360 0V2ZM0 2H360V0H0V2Z" fill="#001B08"/>
                </svg>
                <p className={styles.blurb}>
                  I developed and taught accessory and apparel design courses, guiding students through the entire creative process from concept to production. By researching and designing curriculum aligned with industry standards, I created digitized patterns and instructional materials to support student progress. My classes covered a wide range of skills, including leatherworking, handbag design, shoemaking, and outerwear construction.
                </p>
              </div>
              <img src={teachBundle} alt="Logo design examples with sketches and inspiration" className={styles.imgStyle} />
          </section>
    
        </div>
      </div>
    </>
  );
}

export default PastWork;