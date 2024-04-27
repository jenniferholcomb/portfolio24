import React from "react";
import styles from "./GreenControl.module.scss";
import logo from "./../img/LogoName.png";
import profileImage from "./../img/profilepic.png";

function GreenControl() {
  return (
    <>
      <div className={`${styles.greenStyle} ${styles.greenWrapper}`}>
        <div className={styles.upperWrap}>
          <div className={styles.logoWrap}>
            <img src={logo} alt="Jennifer Holcomb logo" />
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
        <div className={styles.bioImgWrap}>
          <svg 
            viewBox="0 0 100 100" 
            width="175"
            height="195"
            xmlns="/#pattern" >
              <defs>
                <pattern
                  id="pattern"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="2">
                  <image
                    href={profileImage}
                    height={105}
                    x={-8}
                    y={-7}
                    alt="profile picture"
                  />
                </pattern>
              </defs>
            <ellipse 
              cx="166" 
              cy="50" 
              rx="37" 
              ry="49" 
              stroke="#F5EBDE" 
              fill="none" 
              strokeWidth="1.5" />
            <ellipse 
              cx="166" 
              cy="50" 
              rx="32.75" 
              ry="44.5" 
              fill="url(#pattern)" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default GreenControl;