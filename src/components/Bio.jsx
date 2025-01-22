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

  return (
    <>
      <div className={styles.bioContainer}>
        <p className={styles.bioStyle}>I&apos;m a problem solver, a builder, a thinker, and a maker. All attributes that have carried me through many creative endeavors &mdash; graphic and logo design, building brand identities, accessory design and accessory pattern engineering, and now UX/UI design and front end web development. I look for problems in our communities, and innovate creative solutions. I focus on a user, listen to their needs, and design around their preferences. I help others by developing a product that improves or enhances their day. 
        <br /><br />
        If not at home in Portland, you&apos;ll find me at the coast. All that the ocean offers; clamming, crabbing, sunsets, beach fires, seafood, sand, and windswept hair. I'm also partial to mountain lake swims, hiking, foraging, cooking, gardening, and of course hanging with my family and dogs.
        </p>
      </div>
      
      <MotionConfig>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // transition={{ delay: 2, duration: 4 }}
          className={styles.bioImgWrap}
        >
          <div className={styles.bioImg}>
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
