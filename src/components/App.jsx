import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import PantryPro from "./PantryPro";
import PastWork from "./PastWork";
import Resume from "./Resume";
import About from "./About";
import GreenControl from "./GreenControl";

import styles from "./App.module.scss";

function App(){
  return ( 
    <BrowserRouter>
      <div className={styles.bodyWrapper}>
        <GreenControl />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/projects" Component={Projects} />
          <Route exact path="/projects/pantrypro" Component={PantryPro} />
          <Route exact path="/pastwork" Component={PastWork} />
          <Route exact path="/resume" Component={Resume} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
