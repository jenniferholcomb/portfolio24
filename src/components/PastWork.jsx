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
        <h1 className={styles.pageHeader}>Past Work</h1>
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
              <p className={styles.blurb}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
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
                <p className={styles.blurb}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
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
                <p className={styles.blurb}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
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
                <p className={styles.blurb}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
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
                <p className={styles.blurb}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
              </div>
              <img src={teachBundle} alt="Logo design examples with sketches and inspiration" className={styles.imgStyle} />
          </section>
    
        </div>
      </div>
    </>
  );
}

export default PastWork;