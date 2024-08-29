import { useState, useEffect } from "react";

function useResize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    window.innerWidth < 667 ?
    setIsMobile(true) 
    : setIsMobile(false);
  
    window.innerWidth < 1024 ?
      setIsDesktop(false)
      : setIsDesktop(true);
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return [isMobile, isDesktop];
};

export default useResize;
