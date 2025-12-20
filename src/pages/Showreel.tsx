import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Volume2 } from "lucide-react";

const Showreel = () => {
  return (
    <Layout>
      {/* Hero Video Section */}
      <section className="pt-24 md:pt-32 min-h-screen flex flex-col justify-center bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 reveal">
              Showreel 2024
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6 reveal reveal-delay-1">
              Experience our craft
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto reveal reveal-delay-2">
              A curated selection of our finest work from the past year,
              showcasing our range and dedication to cinematic excellence.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video max-w-5xl mx-auto rounded-sm overflow-hidden reveal reveal-delay-3">
            {/* Placeholder for video - in production this would be an actual video player */}
            <div className="absolute inset-0 bg-card border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
                alt="Showreel thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-primary/30">
                  <Play
                    size={40}
                    className="text-primary-foreground fill-current ml-2"
                  />
                </button>
              </div>
              {/* Video Controls Hint */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-muted-foreground">
                <Volume2 size={18} />
                <span className="text-sm">Best experienced with sound</span>
              </div>
              {/* Duration */}
              <div className="absolute bottom-6 right-6 text-muted-foreground text-sm">
                03:42
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Reels */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Specialized Showreels
            </h2>
            <p className="text-muted-foreground">
              Explore our work by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Reel",
                duration: "02:15",
                image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Documentary Reel",
                duration: "02:48",
                image: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Music Video Reel",
                duration: "01:58",
                image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((reel) => (
              <div
                key={reel.title}
                className="group relative aspect-video rounded-sm overflow-hidden hover-lift cursor-pointer"
              >
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/70 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-primary/80 group-hover:bg-primary flex items-center justify-center transition-all duration-300 mb-4">
                    <Play size={24} className="text-primary-foreground fill-current ml-1" />
                  </button>
                  <h3 className="font-serif text-xl text-foreground mb-1">
                    {reel.title}
                  </h3>
                  <span className="text-muted-foreground text-sm">
                    {reel.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Like what you see?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Start a Project
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Full Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Showreel;
