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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                alt="Film production team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/30 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafting Visual Stories
              <br />
              <span className="text-muted-foreground">Since 2009</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Indievision Studios was founded on a simple belief: every story
              deserves to be told beautifully. We combine artistic vision with
              technical excellence to create films that resonate deeply with
              audiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our team of passionate filmmakers, directors, and creatives bring
              decades of combined experience to every project. Whether it's a
              feature film, documentary, or brand campaign, we approach each
              project with the same level of dedication and craft.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
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
