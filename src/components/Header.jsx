import React from "react";

import styles from "./Header.module.scss";
import logo from "./../img/logo.svg";

function Header() {
  return (
    <>
      <div className={styles.headerWrap}>
        <object data={logo} type="image/svg+xml">
          <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
        </object>
      </div> 
    </>
  );
};

export default Header;
