import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExternalProjectProvider } from "./ExternalProjectContext";

import Home from "./Home";
import Projects from "./Projects";
import PantryPro from "./PantryPro";
import PastWork from "./PastWork";
import Resume from "./Resume";
import About from "./About";
import GreenControl from "./GreenControl";

import styles from "./App.module.scss";

function App(){
  const [externalProject, setExternalProject] = useState(null);
  const [isHome, setIsHome] = useState(true);
  const [isProjectScreen, setIsProjectScreen] = useState(false);

  const onExternalProjectClick = (id) => {
    setExternalProject(id);
  };

  const onHomeClick = (home) => {
    setIsHome(home);
  };

  return ( 
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ExternalProjectProvider onExternalProjectClick={onExternalProjectClick}>
        <div className={isHome ? styles.bodyWrapperHome : isProjectScreen ? styles.projectWrapper : styles.bodyWrapper}>
          <GreenControl onExternalProjectClick={externalProject} 
                        onHomeClick={onHomeClick} 
                        isProjectScreen={isProjectScreen}
                        setIsProjectScreen={setIsProjectScreen} />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/projects" Component={Projects} />
            <Route exact path="/projects/pantrypro" Component={PantryPro} />
            <Route exact path="/pastwork" Component={PastWork} />
            <Route exact path="/resume" Component={Resume} />
            <Route exact path="/about" Component={About} />
          </Routes>
        </div>
      </ExternalProjectProvider>
    </BrowserRouter>
    
  );
}

export default App;
