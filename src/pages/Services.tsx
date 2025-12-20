import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Film,
  Video,
  Clapperboard,
  Sparkles,
  Camera,
  Music,
  Lightbulb,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Film Production",
    description:
      "End-to-end film production services from development through delivery. We handle feature films, short films, and independent productions with the same level of dedication and craft.",
    features: [
      "Script development & consulting",
      "Pre-production planning",
      "Principal photography",
      "On-set production management",
    ],
  },
  {
    icon: Video,
    title: "Commercial & Brand Films",
    description:
      "Compelling commercial content that tells your brand story and connects with audiences. From product spots to brand documentaries, we create work that drives results.",
    features: [
      "Brand strategy & concept",
      "Storyboarding",
      "Multi-platform delivery",
      "Performance optimization",
    ],
  },
  {
    icon: Clapperboard,
    title: "Documentary Production",
    description:
      "Authentic documentary storytelling that illuminates truth and inspires change. We specialize in character-driven narratives that leave lasting impressions.",
    features: [
      "Research & development",
      "Interview production",
      "Archival integration",
      "Festival strategy",
    ],
  },
  {
    icon: Sparkles,
    title: "Post-Production",
    description:
      "State-of-the-art post-production services to bring your vision to life. Our team of editors, colorists, and sound designers craft polished final products.",
    features: [
      "Editorial & assembly",
      "Color grading",
      "Visual effects",
      "Sound design & mixing",
    ],
  },
  {
    icon: Camera,
    title: "Cinematography",
    description:
      "Expert cinematography services for productions of all sizes. Our directors of photography bring artistic vision and technical excellence to every frame.",
    features: [
      "Camera & lighting design",
      "Aerial & drone footage",
      "Specialized equipment",
      "On-location shooting",
    ],
  },
  {
    icon: Music,
    title: "Music & Sound",
    description:
      "Original music composition and comprehensive sound design services. We create immersive audio experiences that elevate your visual storytelling.",
    features: [
      "Original score composition",
      "Sound design",
      "Foley & ADR",
      "Final mix & master",
    ],
  },
  {
    icon: Lightbulb,
    title: "Creative Development",
    description:
      "Strategic creative services to help bring your ideas to life. From concept development to pitch materials, we help you refine and present your vision.",
    features: [
      "Concept development",
      "Treatment writing",
      "Pitch deck creation",
      "Creative consulting",
    ],
  },
  {
    icon: Users,
    title: "Production Services",
    description:
      "Comprehensive production support services for visiting productions. We provide local expertise, crew, equipment, and logistics management.",
    features: [
      "Location scouting",
      "Crew sourcing",
      "Equipment rental",
      "Production coordination",
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
