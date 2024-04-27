import React from "react";
import styles from "./GreenControl.module.scss";
import logo from "./../img/LogoName.png";
import ovalBorder from "./../img/Ellipse.svg";

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
              <h3 className={styles.links}>projects</h3>
              <h3 className={styles.links}>graphic design</h3>
              <h3 className={styles.links}>past work</h3>
            </div>
            <p className={styles.bio}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus.</p>
          </div>
        </div>
        <div className={styles.bioImgWrap}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="148" height="194" viewBox="0 0 148 194" fill="none">
              <path d="M146.5 97C146.5 123.347 138.309 147.144 125.136 164.323C111.963 181.501 93.8708 192 74 192C54.1292 192 36.0368 181.501 22.8644 164.323C9.69083 147.144 1.5 123.347 1.5 97C1.5 70.6533 9.69083 46.856 22.8644 29.677C36.0368 12.4994 54.1292 2 74 2C93.8708 2 111.963 12.4994 125.136 29.677C138.309 46.856 146.5 70.6533 146.5 97Z" stroke="#F5EBDE" stroke-width="3"/>
            </svg> */}

            <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" >
              <ellipse cx="100" cy="50" rx="31" ry="40" stroke="#F5EBDE" fill="none" stroke-width="1"/>
              <ellipse cx="100" cy="50" rx="26.75" ry="35.5" fill="#F5EBDE"/>
            </svg>
            {/* <svg className={styles.oval} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" fill="none">
              <ellipse cx="100" cy="50" rx="31" ry="40" stroke="#F5EBDE" stroke-width="1"/>
            </svg> */}

            <div className={styles.imgMask}>

            </div>
            {/* <img src={ovalBorder} alt="oval border" /> */}
          {/* <div className={styles.mask}>

          </div> */}
        </div>
      </div>
    </>
  );
}

export default GreenControl;