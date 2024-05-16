import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./PastWork.module.scss";

function PastWork() {
  const [ isMobile, isDesktop ] = useResize();

  return (
    <>
      <div className={styles.pastWorkWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        Past Work
      </div>
    </>
  );
}

export default PastWork;