import React from "react";
import useResize from "./hooks/useResize";

import Header from "./Header";

function Home() {
  const [ isMobile, isDesktop ] = useResize();

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

