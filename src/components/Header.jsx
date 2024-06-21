import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "./../img/logo.svg";

function Header(props) {
  const { homeClick } = props;
  const location = useLocation();

  return (
    <>
      <div className={`${styles.headerWrap} ${(location.pathname === '/') || (location.pathname === '/about') ? styles.header2Wrap : null}`}>
        <Link to={"/"} className={styles.linkStyle}>
          <div className={styles.logo} onClick={homeClick}>
            <object data={logo} className={styles.logoObject} type="image/svg+xml" >
              <span className={styles.fallbackInfo}>Your browser does not support SVG</span>
            </object>
          </div>
        </Link>
      </div> 
    </>
  );
};

Header.propTypes = {
  homeClick: PropTypes.func
};

export default Header;
