import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Layout>
      {/* Full-width Cinematic Video Section */}
      <section className="pt-24 md:pt-32 bg-background">
        <div className="container mx-auto px-6 mb-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 reveal">
              Showreel 2024
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 reveal reveal-delay-1">
              Our visual language
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed reveal reveal-delay-2">
              We approach every frame with intention. Our work blends naturalistic 
              cinematography with controlled compositions—films that feel real but 
              never accidental. This reel represents our range and philosophy.
            </p>
          </div>
        </div>

        {/* Video Embed - Full Width */}
        <div className="w-full reveal reveal-delay-3">
          <div className="relative aspect-[21/9] md:aspect-[2.35/1] bg-card overflow-hidden">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
                  alt="Showreel thumbnail"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/80" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-primary/20"
                    aria-label="Play showreel"
                  >
                    <Play
                      size={36}
                      className="text-primary-foreground fill-current ml-1"
                    />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-foreground text-sm">
                  03:42
                </div>
              </>
            ) : (
              /* Video Embed Placeholder - Replace src with actual YouTube/Vimeo embed */
              <iframe
                src="https://player.vimeo.com/video/824804225?autoplay=0&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Indievision Studios Showreel 2024"
              />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Ready to collaborate?
            </h2>
            <p className="text-muted-foreground mb-10">
              We're selective about the projects we take on, but always open to 
              conversations with filmmakers and brands who share our values.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Contact for Collaboration
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Showreel;
