import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: "w-7 h-7", text: "text-base" },
    md: { icon: "w-9 h-9", text: "text-xl" },
    lg: { icon: "w-12 h-12", text: "text-2xl" },
  };

  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-2 group transition-all duration-300",
        className
      )}
    >
      {/* Logo Icon - Film Reel / Camera Aperture inspired */}
      <div className={cn("relative", sizes[size].icon)}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            className="stroke-primary"
            strokeWidth="2"
            fill="none"
          />
          {/* Inner film reel holes */}
          <circle cx="24" cy="10" r="3" className="fill-primary" />
          <circle cx="36.1" cy="17" r="3" className="fill-primary" />
          <circle cx="36.1" cy="31" r="3" className="fill-primary" />
          <circle cx="24" cy="38" r="3" className="fill-primary" />
          <circle cx="11.9" cy="31" r="3" className="fill-primary" />
          <circle cx="11.9" cy="17" r="3" className="fill-primary" />
          {/* Center aperture */}
          <circle
            cx="24"
            cy="24"
            r="8"
            className="stroke-foreground group-hover:stroke-primary transition-colors duration-300"
            strokeWidth="2"
            fill="none"
          />
          {/* Center dot */}
          <circle
            cx="24"
            cy="24"
            r="3"
            className="fill-foreground group-hover:fill-primary transition-colors duration-300"
          />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-serif font-semibold tracking-tight text-foreground group-hover:text-foreground/90 transition-colors",
              sizes[size].text
            )}
          >
            INDIEVISION
          </span>
          <span className="text-[0.6em] tracking-[0.25em] text-muted-foreground uppercase">
            Studios
          </span>
        </div>
      )}
    </Link>
  );
}
