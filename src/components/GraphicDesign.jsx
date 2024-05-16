import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./GraphicDesign.module.scss";

function GraphicDesign() {
  const [ isMobile, isDesktop ] = useResize();
  
  return (
    <>
      <div className={styles.graphicDesignWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        Graphic Design
      </div>
    </>
  );
}

export default GraphicDesign;