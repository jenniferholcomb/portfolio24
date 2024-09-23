import React, { useEffect, useRef, useState } from "react";
import { useInView, InView } from "react-intersection-observer";

import useResize from "./hooks/useResize";
import styles from "./PantryPro.module.scss";

function VideoPlay(props) {

  const { video1, video2 } = props;

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const [ vidPlaying, setVidPlaying ] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [isMobile, isDesktop] = useResize();

  const setInView = (inView, entry) => {
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

  const setInViewInvoice = (inView, entry) => {
    if (inView) {
      videoRef3.current.play();
    } else {
      videoRef3.current.pause();
    }
  };

  const handleVideoPlaying = (video) => {
    setVidPlaying(video);
  };

  useEffect(() => {
    {
      video2 !== undefined ?
      setInView(inView)
      : null
    }
  }, [vidPlaying]);
  
  return (
    <>
      {
        video2 !== undefined ?
          <div id={styles.sectionWrapper} ref={ref}>
            <InView onChange={setInView} threshold={0.8} key={1}>
              <video 
                src={video1} 
                width={isDesktop ? "300rem" : "275rem"} 
                height="" 
                className={styles.vid} 
                playsInline 
                onEnded={() => handleVideoPlaying(2)}
                muted 
                preload="auto" 
                ref={videoRef}
              ></video>
              <video 
                src={video2} 
                width={isDesktop ? "300rem" : "275rem"}  
                height="" 
                className={styles.vid} 
                playsInline 
                
                muted 
                preload="auto" 
                ref={videoRef2}
                onEnded={() => handleVideoPlaying(1)}
              ></video>
            </InView>
          </div>
        :
          <div ref={ref}>
            <InView onChange={setInViewInvoice} threshold={0.8} key={2}>
              <video 
                  src={video1} 
                  width={isDesktop ? "300rem" : "275rem"} 
                  height="" 
                  className={styles.vidInv}
                  playsInline 
                  loop
                  muted 
                  preload="auto" 
                  ref={videoRef3}
                ></video>
            </InView>
          </div>
      }
    </>
  );
}

export default VideoPlay;