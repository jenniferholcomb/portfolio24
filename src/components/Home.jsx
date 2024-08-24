import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./Home.module.scss";

function Home() {
  const [ isMobile, isDesktop ] = useResize();

  const cardArr = ["one", "two", "three"];
  
  return (
    <>
      <div className={styles.homeWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        {cardArr.map((entry, index) => 
         <div className={styles.projectCard}>
          <h1>{entry}</h1>
          <h2>{index}</h2>
        </div>
        )}
      </div>
    </>
  );
}

export default Home;