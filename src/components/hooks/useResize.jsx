import { useState, useEffect } from "react";

function useResize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMdDesktop, setIsMdDesktop] = useState(false);
  const [isWdDesktop, setIsWdDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setIsWdDesktop(false);
      setIsMdDesktop(false);
      setIsDesktop(false);
      setIsTablet(false);
      setIsMobile(true);
    } else if (window.innerWidth < 1024) {
      setIsWdDesktop(false);
      setIsMdDesktop(false);
      setIsDesktop(false);
      setIsTablet(true);
      setIsMobile(false);
    } else if (window.innerWidth < 1270) {
      setIsWdDesktop(false);
      setIsMdDesktop(false);
      setIsDesktop(true);
      setIsTablet(false);
      setIsMobile(false);
    } else if (window.innerWidth < 1400 && window.innerWidth >= 1270) {
      setIsWdDesktop(false);
      setIsMdDesktop(true);
      setIsDesktop(false);
      setIsTablet(false);
      setIsMobile(false);
    } else if (window.innerWidth >= 1400) {
      setIsWdDesktop(true);
      setIsMdDesktop(false);
      setIsDesktop(false);
      setIsTablet(false);
      setIsMobile(false);
    }
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

  return [isMobile, isDesktop, isWdDesktop, isTablet, isMdDesktop];
};

export default useResize;
