import React from "react";
import { motion } from "framer-motion-3d";
import { Canvas } from '@react-three/fiber';

import OvalShape from "./OvalShape";
import styles from "./Bio.module.scss";

function Bio() {

  const bio= "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus.";

  return (
    <>
      <p className={styles.bioStyle}>{bio}</p>
      <motion.div 
        className={styles.bioImgWrap}
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
    </>
  );
}

export default Bio;
