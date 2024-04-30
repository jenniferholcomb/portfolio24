import React from "react";
import styles from "./GreenControl.module.scss";
import Oval from "./Oval";
import logo from "./../img/logoName3.svg";

function GreenControl() {

 

  return (
    <>
      <div className={`${styles.greenWrapper}`}>
        <div className={styles.upperWrap}>
          <div className={styles.logoWrap}>
            <object data={logo} type="image/svg+xml">
              <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
            </object>
          </div> 
          <div className={styles.textWrap}>
            <div className={styles.linkWrap}>
              <h3 className={`${styles.links} ${styles.linksLineHeight}`}>projects</h3>
              <h3 className={`${styles.links} ${styles.linksLineHeight}`}>graphic design</h3>
              <h3 className={`${styles.links} ${styles.linksAlignLow}`}>past work</h3>
            </div>
            <p className={styles.bio}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus.</p>
          </div>
        </div>
        <Oval />
        {/* <div className={styles.bioImgWrap}>
          <svg 
            // viewBox="0 0 500 70" 
            width="166px"
            height="222px"
            xmlns="/#pattern" >
              <defs>
                <pattern
                  id="pattern"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="3">
                  <image
                    href={imgArr[imgArrKey]}
                    height={222}
                    x={-15}
                    y={-12}
                    alt="profile picture"
                  />
                </pattern>
              </defs>
            <ellipse 
              cx="83" 
              cy="110.5" 
              rx="80" 
              ry="108" 
              stroke="#F5EBDE" 
              fill="none" 
              strokeWidth="3" />
            <ellipse 
              className={styles.filledOval}
              cx="83" 
              cy="110.5" 
              rx="72" 
              ry="100"
              fill="url(#pattern)" />
          </svg> 
        </div> */}
      </div>
    </>
  );
}

export default GreenControl;