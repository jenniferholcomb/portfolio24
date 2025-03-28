import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";
import logoName from "/img/logoName.svg";
import logoLong from "/img/logo.svg";
import logoInitials from "/logoInitials.svg";

function Header(props) {
  const { homeClick, isHome, isMobile, isMdDesktop, isWdDesktop } = props;
  const location = useLocation();

  return (
    <>
      {/* <div className={`${styles.headerWrap} ${(location.pathname === '/') || (location.pathname === '/about') ? styles.header2Wrap : null}`}> */}
      <div className={`${ !isMobile ? styles.headerWrap : !isHome ? styles.headerHidden : styles.headerMobile } ${ (isHome && !isMobile) || (location.pathname === '/about') ? styles.header2Wrap : null}`}>
        <Link to={"/"} className={styles.linkStyle}>
          <div className={styles.logo} onClick={homeClick}>
            <object data={ 
                      isHome && !isMobile ? logoName : 
                      isMdDesktop || isWdDesktop || isMobile ? logoLong : 
                      logoInitials 
                    } 
                    className={
                      isHome && !isMobile ? styles.logoObject : 
                      isHome && isMobile ? styles.mobileLongLogoObject : 
                      styles.logoLongObject
                    } 
                    type="image/svg+xml" >
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
