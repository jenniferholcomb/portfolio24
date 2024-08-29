import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function useCollapseGreen() {
  const location = useLocation();
  const [isProjectScreen, setIsProjectScreen] = useState(false);

  useEffect(() => {
    location.pathname === '/project/pantrypro' ? setIsProjectScreen(true) : setIsProjectScreen(false);
  }, []);
  console.log("collapse green")

  return [isProjectScreen, setIsProjectScreen];
};

export default useCollapseGreen;