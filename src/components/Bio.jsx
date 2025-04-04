import React, { useMemo, useState, useRef } from "react";
import { extend } from '@react-three/fiber';
import { MotionConfig, motion } from "framer-motion";
import { motion as motion3d, MotionCanvas  } from "framer-motion-3d";
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import OvalShape from "./OvalShape";
import styles from "./Bio.module.scss";

function Bio() {
  useMemo(() => extend(THREE), []);
  const [flipPhoto, setFlipPhoto] = useState(true);
  const timeoutRef = useRef(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setFlipPhoto((prev) => !prev);
    }, 500);
  };

  return (
    <>
      <div className={styles.bioContainer}>
        <p className={styles.bioStyle}>I&apos;m a problem solver, a builder, a thinker, and a maker. All strengths that have carried me through many creative endeavors &mdash; graphic and logo design, building brand identities, accessory design, pattern engineering, and now front end web development along with UX/UI design. My design ethos - I look for problems in our communities, and innovate creative solutions. I focus on a user, listen to their needs, and design around their preferences. I help others by developing a product that improves or enhances their day. 
        <br /><br />
        If not at home in Portland, you&apos;ll find me at the coast. All that the ocean offers; clamming, crabbing, sunsets, beach fires, seafood, sand, and general soul recharging. I'm also a fan of hiking, foraging, cooking, gardening, mountain lake swims, and being with my dogs and family.
        </p>
      </div>
      
      <MotionConfig>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // transition={{ delay: 2, duration: 4 }}
          className={styles.bioImgWrap}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.bioImg}>
            <MotionCanvas>
              <ambientLight intensity={1.6} /> 
              {/* <pointLight intensity={5} position={[5, 5, 5]} /> */}
              <directionalLight intensity={.2} position={[5, 5, 0]} />

              <OvalShape flipPhoto={flipPhoto} />
            </MotionCanvas>
          </div>
        </motion.div>
      </MotionConfig>
    </>
  );
}

export default Bio;
