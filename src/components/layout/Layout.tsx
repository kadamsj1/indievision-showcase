import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
