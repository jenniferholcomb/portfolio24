import React from "react";
import { Canvas } from '@react-three/fiber'
// import Header from "./Header";
// import TicketControl from "./TicketControl";
import GreenControl from "./GreenControl";
import TanControl from "./TanControl";

import styles from "./App.module.scss";

function App(){
  return ( 
    <>
      <div className={styles.bodyWrapper}>
        <GreenControl />
        <TanControl />
      </div>
      {/* <Header />
      <TicketControl /> */}
    </>
  );
}

export default App;
