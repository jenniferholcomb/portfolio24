import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./Projects";
import GraphicDesign from "./GraphicDesign";
import PastWork from "./PastWork";
import About from "./About";
import GreenControl from "./GreenControl";

import styles from "./App.module.scss";

function App(){
  return ( 
    <BrowserRouter>
      <div className={styles.bodyWrapper}>
        <GreenControl />
        <Routes>
          <Route exact path="/" Component={Projects} />
          <Route exact path="/graphicdesign" Component={GraphicDesign} />
          <Route exact path="/pastwork" Component={PastWork} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
