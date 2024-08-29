import React, { useState } from "react";
import { Link } from "react-router-dom";
import useResize from "./hooks/useResize";

import Header from "./Header";
import styles from "./Home.module.scss";
import ppCard from "./../img/pantryProCard.webp";

function Home() {
  const [ isMobile, isDesktop ] = useResize();

  const cardArr = ["one", "two", "three"];
  
  return (
    <>
      
        {
          isMobile ?
            <Header />
          : null
        }
 
    </>
  );
}

export default Home;

