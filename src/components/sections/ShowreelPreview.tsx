import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function ShowreelPreview() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 reveal">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Craft
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Experience Our Vision
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated collection of our finest work—stories that resonate, 
            visuals that captivate, moments that endure.
          </p>
        </div>

        {/* Video Preview Container */}
        <div className="relative max-w-5xl mx-auto reveal reveal-delay-1">
          <div className="aspect-video relative rounded-lg overflow-hidden group cursor-pointer">
            {/* Video Placeholder / Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-muted">
              {/* Cinematic bars */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-black/60" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/60" />
              
              {/* Film grain overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Link 
                to="/showreel"
                className="group/play relative"
              >
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
                
                {/* Play button */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover/play:bg-primary/20 group-hover/play:scale-110 group-hover/play:border-primary/50">
                  <Play className="w-10 h-10 md:w-14 md:h-14 text-primary fill-primary/20 ml-1 transition-transform duration-300 group-hover/play:scale-110" />
                </div>
              </Link>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Showreel info */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl text-foreground">Indievision Studios Showreel 2024</h3>
              <p className="text-muted-foreground text-sm">3:45 • Cinematic Collection</p>
            </div>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/showreel" className="gap-2">
                <Play size={16} className="fill-current" />
                Watch Full Showreel
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
