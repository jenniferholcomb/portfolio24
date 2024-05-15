import React from "react";

import styles from "./GreenControl.module.scss";
import logo from "./../img/logoName3.svg";

function Header() {
  return (
    <>
      <div className={styles.logoWrap}>
        <object data={logo} type="image/svg+xml">
          <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
        </object>
      </div> 
    </>
  );
};

export default Header;
