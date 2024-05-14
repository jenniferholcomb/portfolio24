import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  function handleResize() {
    window.innerWidth < 480 ?
      setIsMobile(true) 
      : setIsMobile(false);
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  });


  return (
    <>
      <div className={styles.navBar}>
        <div onClick={handleClick} className={`${styles.iconContainer} ${styles.menuRoutes}`}>
          {
            isMobile ? 
            <i className={`${showMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
            : null 
          }
        </div>
        <div className={styles.navContainer} id={`${showMenu ? styles.menuActive : null}`} >
          {/* <div className={styles.iconContainer}>

          </div> */}
          <ul className={styles.menuItems}>
            <li>
              <Link onClick={handleClick} to={"/"}>Projects</Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/graphicdesign"}>Graphic Design</Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/pastwork"}>Past Work</Link>
            </li>
            <li>
              <Link onClick={handleClick} to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default NavBar;