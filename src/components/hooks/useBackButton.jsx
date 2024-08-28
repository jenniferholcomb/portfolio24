import { useState, useEffect } from "react";

function useHomeSwitch() {
  const [isHome, setIsHome] = useState(null);

  const handleHomeSwitch = () => {
    setIsHome(false);
  };

  // useEffect(() => {
  //   handleResize();
  // }, []);

  useEffect(() => {
    location.pathname === '/' ? setIsHome(true) : setIsHome(false);
  }, []);

  return [isHome, handleHomeSwitch];
};

export default useHomeSwitch;