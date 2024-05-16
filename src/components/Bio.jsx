import React, { useMemo } from "react";
import { extend } from '@react-three/fiber';
import { MotionConfig, motion } from "framer-motion";
import { motion as motion3d, MotionCanvas  } from "framer-motion-3d";
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import OvalShape from "./OvalShape";
import styles from "./Bio.module.scss";

function Bio() {
  useMemo(() => extend(THREE), []);

  const bio= "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus.";

  return (
    <>
      <p className={styles.bioStyle}>{bio}</p>
      <MotionConfig>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // transition={{ delay: 2, duration: 4 }}
        >
          <div className={styles.bioImgWrap}>
            <MotionCanvas>
              <ambientLight intensity={1.5} /> 
              <pointLight intensity={4} position={[5, 5, 0]} />
              <OvalShape />
            </MotionCanvas>
          </div>
        </motion.div>
      </MotionConfig>
    </>
  );
}

export default Bio;
