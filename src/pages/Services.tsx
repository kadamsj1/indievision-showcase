import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Film,
  Pen,
  Music,
  Megaphone,
  Palette,
  Smartphone,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Film Production",
    description:
      "Complete film production from pre-production through principal photography. We bring feature films, short films, and documentaries to life with meticulous attention to craft and narrative integrity.",
    features: [
      "Pre-production planning",
      "Location scouting & management",
      "Principal photography",
      "On-set production coordination",
    ],
  },
  {
    icon: Pen,
    title: "Script & Creative Development",
    description:
      "Transforming raw ideas into compelling screenplays. Our development process refines concepts, builds narrative structure, and prepares projects for production with clarity and purpose.",
    features: [
      "Script writing & revisions",
      "Story development",
      "Treatment creation",
      "Creative consulting",
    ],
  },
  {
    icon: Music,
    title: "Music Videos",
    description:
      "Visually striking music videos that amplify artistic vision. We collaborate closely with artists to create memorable visual experiences that resonate with audiences.",
    features: [
      "Concept development",
      "Performance capture",
      "Narrative music films",
      "Live session production",
    ],
  },
  {
    icon: Megaphone,
    title: "Commercial Ads",
    description:
      "Brand films and commercials that tell authentic stories. We create advertising content with the same cinematic sensibility we bring to narrative work—no shortcuts, no templates.",
    features: [
      "Brand storytelling",
      "Product films",
      "Campaign production",
      "Multi-platform delivery",
    ],
  },
  {
    icon: Palette,
    title: "Post-Production",
    description:
      "Where raw footage becomes cinema. Our post-production team handles editing, color grading, and sound design with the precision and artistry your project deserves.",
    features: [
      "Editorial & assembly",
      "Color grading & correction",
      "Sound design & mixing",
      "Visual effects & finishing",
    ],
  },
  {
    icon: Smartphone,
    title: "Digital Content",
    description:
      "Content crafted for the digital landscape. From social campaigns to web series, we create engaging digital content that maintains cinematic quality at any scale.",
    features: [
      "Social media content",
      "Web series production",
      "Behind-the-scenes content",
      "Platform-optimized delivery",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 reveal">
              Our Services
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-8 reveal reveal-delay-1">
              Full-service production
              <br />
              <span className="text-muted-foreground">from concept to screen</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed reveal reveal-delay-2">
              We offer comprehensive production services tailored to your unique
              vision and goals. Whether you need a full production team or
              specialized support, we have the expertise to bring your project
              to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 md:p-10 rounded-sm bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon size={26} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <Check size={16} className="text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Ready to start your project?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's discuss your vision and how we can bring it to life.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
