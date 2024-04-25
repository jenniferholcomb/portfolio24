import React from "react";
import styles from "./GreenControl.module.scss";

function GreenControl() {
  return (
    <>
      <div className={`${styles.greenStyle} ${styles.greenWrapper}`}>
        <div className={styles.textWrapper}>
          <h1>Testing</h1>
        </div>
      </div>
    </>
  );
}

export default GreenControl;