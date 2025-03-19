import React from "react";
import useResize from "./hooks/useResize";

import Header from "./Header";

function Home() {
  const [ isMobile, isDesktop ] = useResize();

  return (
    <>
      {
        isMobile ?
          <Header isMobile={isMobile} />
        : null
      }
    </>
  );
}

export default Home;

