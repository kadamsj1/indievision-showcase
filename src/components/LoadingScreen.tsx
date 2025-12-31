import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
}

export function LoadingScreen({ 
  onLoadingComplete, 
  minDuration = 2000 
}: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 600); // Match exit animation duration
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoadingComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-600",
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Film Grain on loading screen too */}
      <div className="film-grain" aria-hidden="true" />
      
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 animate-logo-reveal">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Outer ring - draws in */}
            <circle
              cx="24"
              cy="24"
              r="22"
              className="stroke-primary animate-draw-circle"
              strokeWidth="2"
              fill="none"
              strokeDasharray="138.23"
              strokeDashoffset="138.23"
              style={{ animationDelay: "0.2s" }}
            />
            {/* Inner film reel holes - fade in sequentially */}
            <circle cx="24" cy="10" r="3" className="fill-primary opacity-0 animate-dot-appear" style={{ animationDelay: "0.6s" }} />
            <circle cx="36.1" cy="17" r="3" className="fill-primary opacity-0 animate-dot-appear" style={{ animationDelay: "0.7s" }} />
            <circle cx="36.1" cy="31" r="3" className="fill-primary opacity-0 animate-dot-appear" style={{ animationDelay: "0.8s" }} />
            <circle cx="24" cy="38" r="3" className="fill-primary opacity-0 animate-dot-appear" style={{ animationDelay: "0.9s" }} />
            <circle cx="11.9" cy="31" r="3" className="fill-primary opacity-0 animate-dot-appear" style={{ animationDelay: "1.0s" }} />
            <circle cx="11.9" cy="17" r="3" className="fill-primary opacity-0 animate-dot-appear" style={{ animationDelay: "1.1s" }} />
            {/* Center aperture */}
            <circle
              cx="24"
              cy="24"
              r="8"
              className="stroke-foreground animate-draw-circle"
              strokeWidth="2"
              fill="none"
              strokeDasharray="50.27"
              strokeDashoffset="50.27"
              style={{ animationDelay: "0.4s" }}
            />
            {/* Center dot */}
            <circle
              cx="24"
              cy="24"
              r="3"
              className="fill-foreground opacity-0 animate-dot-appear"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>
        </div>

        {/* Text appears after logo */}
        <div className="flex flex-col items-center leading-none opacity-0 animate-text-reveal" style={{ animationDelay: "1.2s" }}>
          <span className="text-3xl font-serif font-semibold tracking-tight text-foreground">
            INDIEVISION
          </span>
          <span className="text-sm tracking-[0.25em] text-muted-foreground uppercase mt-1">
            Studios
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-0.5 bg-muted overflow-hidden mt-4 opacity-0 animate-text-reveal" style={{ animationDelay: "1.4s" }}>
          <div className="h-full bg-primary animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
