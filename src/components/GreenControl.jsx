import { Suspense, useState } from 'react';
import styles from "./GreenControl.module.scss";
import { motion } from "framer-motion";
// import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber'
import Oval from "./Oval";
import logo from "./../img/logoName3.svg";
import OvalShape from './OvalShape';

function GreenControl() {
  const [isHover, setIsHover] = useState(false);
  const [currentKey, setCurrentKey] = useState(0);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

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
        <Canvas camera={{ position: [0, 0, 5] }}>
          <OvalShape />
        </Canvas>

        
          {/* <div className={styles.bioImgWrap}>
            <motion.svg 
              // viewBox="0 0 500 70" 
              width="166px"
              height="222px"
              viewBox="0 0 166 222"
              initial="hidden"
              animate="visible" 
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave} 
            >
              {/* <defs>
                <pattern
                  id="pattern"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="3">
                  <image
                    href={imgArr[currentKey]}
                    height={222}
                    x={-15}
                    y={-12}
                    alt="profile picture"
                  />
                </pattern>
              </defs> */}
              {/* <motion.ellipse 
                cx="83" 
                cy="110.5" 
                rx="80" 
                ry="108" 
                stroke="#F5EBDE" 
                fill="none" 
                strokeWidth="3" 
                variants={draw}
                custom={2} /> */}

                {/* <motion.ellipse 
                  className={styles.filledOval}
                  cx="83" 
                  cy="110.5" 
                  rx="70" 
                  ry="98"
                  fill="url(#pattern)"
                  variants={draw}
                  custom={4} /> */}
            {/* </motion.svg> 
          </div>
          <Canvas>
                {/* <pointLight position={[10, 10, 10]} /> */}
            {/* <Oval position={[1, 1, 1]} />
          </Canvas>  */}
      </div> 
    </>
  );
}

export default GreenControl;

{/* <Oval currentImg={currentKey}/> */}