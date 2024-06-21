import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./Resume.module.scss";

function Home() {
  const [ isMobile, isDesktop ] = useResize();
  
  return (
    <>
      <div className={styles.resumeWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        Home
      </div>
    </>
  );
}

export default Home;