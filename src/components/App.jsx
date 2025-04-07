import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
  const [isHome, setIsHome] = useState(null);
  const [isProjectScreen, setIsProjectScreen] = useState(null);
  const [pageInFocus, setPageInFocus] = useState(null);
  const [isAbout, setIsAbout] = useState(null);
  const location = useLocation();

  const onExternalProjectClick = (id) => {
    setExternalProject(id);
  };

  useEffect(() => {
    setIsHome(location.pathname === "/");
    setIsProjectScreen(location.pathname === "/projects/pantrypro");
    setPageInFocus(location.pathname);
    setIsAbout(location.pathname === "/about");
  }, [location.pathname]);
  console.log(pageInFocus)
  return ( 
    <ExternalProjectProvider onExternalProjectClick={onExternalProjectClick}>
      <div className={isHome ? styles.bodyWrapperHome : isProjectScreen ? styles.projectWrapper : styles.bodyWrapper}>
        <GreenControl onExternalProjectClick={externalProject} 
                      isHome={isHome}
                      isProjectScreen={isProjectScreen} 
                      pageInFocus={pageInFocus} 
                      isAbout={isAbout} />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/projects" Component={Projects} />
          <Route exact path="/projects/pantrypro" Component={PantryPro} />
          <Route exact path="/pastgigs" Component={PastWork} />
          <Route exact path="/resume" Component={Resume} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </div>
    </ExternalProjectProvider>
  );
}

export default App;
