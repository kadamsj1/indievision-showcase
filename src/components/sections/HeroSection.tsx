import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />
        <img
          src={heroBg}
          alt="Cinematic film production set"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 reveal">
            Indievision Studios
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 reveal reveal-delay-1">
            Stories Crafted
            <br />
            <span className="text-muted-foreground">with Vision</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 reveal reveal-delay-2">
            Where cinematic artistry meets purposeful storytelling. We transform 
            ideas into visual experiences that resonate and endure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/showreel" className="gap-3">
                <Play size={18} className="fill-current" />
                View Showreel
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Work With Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 reveal reveal-delay-5">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
