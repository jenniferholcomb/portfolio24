import React, { useRef, useState } from "react";
import { useInView, InView } from "react-intersection-observer";

import vid from "./../img/pracprac.mp4";

import styles from "./Resume.module.scss";

function VideoPlay() {

  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const setInView = (inView, entry) => {
    if (inView) {
      videoRef.current.play();
    } else {
      if (videoRef.current.play) {
        videoRef.current.pause();
      }
    }
  };
  
  return (
    <>
      <div id="section-wrapper" ref={ref}>
        <InView onChange={setInView} threshold={0.8} key={1}>
          <video 
            src={vid} 
            width="324" 
            height="576" 
            className={styles.vid} 
            playsInline 
            loop 
            muted 
            preload="auto" 
            ref={videoRef}
          ></video>
        </InView>
      </div>
    </>
  );
}

export default VideoPlay;