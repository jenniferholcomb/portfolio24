import React, { useEffect, useRef, useState } from "react";
import { useInView, InView } from "react-intersection-observer";

import vid from "./../img/mockVid.mp4";
import vid2 from "./../img/wireVid.mp4";

import styles from "./Resume.module.scss";

function VideoPlay() {

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const [ vidPlaying, setVidPlaying ] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const setInView = (inView, entry) => {
  console.log("ppp")
  console.log(inView)
    if (inView) {
      if (vidPlaying === 1){
        videoRef.current.play();
      } else {
        videoRef2.current.play();
      }     
    } else {
      if (videoRef.current.play || videoRef2.current.play) {
        if (vidPlaying === 1){
          videoRef.current.pause();
        } else {
          videoRef2.current.pause();
        } 
      }
    }
  };

  const handleVideoPlaying = (video) => {
    console.log("ooo")
    setVidPlaying(video);
  };

  useEffect(() => {
    setInView(inView);
    console.log("ppp")
  }, [vidPlaying]);
  
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
            onEnded={() => handleVideoPlaying(2)}
            
            muted 
            preload="auto" 
            ref={videoRef}
            
          ></video>
          <video 
            src={vid2} 
            width="324" 
            height="576" 
            className={styles.vid} 
            playsInline 
            
            muted 
            preload="auto" 
            ref={videoRef2}
            onEnded={() => handleVideoPlaying(1)}
          ></video>
        </InView>
      </div>
    </>
  );
}

export default VideoPlay;