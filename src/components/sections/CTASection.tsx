import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">
            Let's Create Together
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 sm:mb-8 leading-tight">
            Ready to bring your
            <br />
            <span className="text-muted-foreground">vision to life?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Whether you have a script ready or just the seed of an idea, we'd
            love to hear from you. Let's discuss how we can help tell your
            story.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto min-h-[52px]" asChild>
              <Link to="/contact" className="gap-2">
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto min-h-[52px]" asChild>
              <Link to="/showreel">Watch Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
