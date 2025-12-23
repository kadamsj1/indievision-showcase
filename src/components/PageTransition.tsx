import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset and trigger animation on route change
    setIsVisible(false);
    
    // Small delay to ensure CSS transition triggers
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`page-transition ${isVisible ? "page-visible" : "page-hidden"}`}
    >
      {children}
    </div>
  );
}
