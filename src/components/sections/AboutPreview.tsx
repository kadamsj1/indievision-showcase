import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "15", label: "Years Experience" },
  { value: "30+", label: "Awards Won" },
  { value: "100%", label: "Client Satisfaction" },
];

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] sm:aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                alt="Film production team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element - Hidden on mobile */}
            <div className="absolute -bottom-6 -right-6 w-32 sm:w-48 h-32 sm:h-48 border border-primary/30 rounded-sm -z-10 hidden sm:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              About Us
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 leading-tight">
              Crafting Visual Stories
              <br />
              <span className="text-muted-foreground">Since 2009</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Indievision Studios was founded on a simple belief: every story
              deserves to be told beautifully. We combine artistic vision with
              technical excellence to create films that resonate deeply with
              audiences.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Our team of passionate filmmakers, directors, and creatives bring
              decades of combined experience to every project. Whether it's a
              feature film, documentary, or brand campaign, we approach each
              project with the same level of dedication and craft.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl sm:text-3xl text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="w-full sm:w-auto min-h-[48px]" asChild>
              <Link to="/about" className="gap-2">
                Our Story
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
