import React from 'react';
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion-3d";
import { Canvas } from '@react-three/fiber'
import logo from "./../img/logoName3.svg";
import OvalShape from './OvalShape';

function GreenControl() {

  return (
    <>
      <motion.div className={`${styles.greenStyle} ${styles.greenWrapper}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }} 
      >
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

        <div className={styles.lowerWrapper}>
          <motion.div 
            className={`${styles.bioImgWrap} ${styles.bioImgWrapJustify}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 4 }}
          >
            <Canvas>
              <ambientLight intensity={1.5} />
              <pointLight intensity={4} position={[5, 5, 0]} />
              <OvalShape />
            </Canvas>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default GreenControl;
