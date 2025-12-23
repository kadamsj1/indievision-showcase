import { Link } from "react-router-dom";
import { Film, Video, Clapperboard, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Film,
    title: "Film Production",
    description:
      "Full-service production from concept to screen. Feature films, shorts, and independent projects.",
  },
  {
    icon: Video,
    title: "Commercial Work",
    description:
      "Compelling brand films and commercials that connect with audiences and drive results.",
  },
  {
    icon: Clapperboard,
    title: "Documentary",
    description:
      "Authentic storytelling that illuminates truth and inspires change through powerful narratives.",
  },
  {
    icon: Sparkles,
    title: "Post-Production",
    description:
      "Expert editing, color grading, VFX, and sound design to bring your vision to life.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Comprehensive Production Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            From initial concept to final delivery, we provide end-to-end
            production services tailored to your unique vision and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 sm:p-8 rounded-sm bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon
                  size={22}
                  className="text-primary"
                />
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="w-full sm:w-auto min-h-[48px]" asChild>
            <Link to="/services" className="gap-2">
              Explore All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
