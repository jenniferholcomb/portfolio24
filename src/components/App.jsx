import React, { useState } from "react";
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

  const onExternalProjectClick = (id) => {
    setExternalProject(id);
  };

  return ( 
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ExternalProjectProvider onExternalProjectClick={onExternalProjectClick}>
        <div className={styles.bodyWrapper}>
          <GreenControl onExternalProjectClick={externalProject} />
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
