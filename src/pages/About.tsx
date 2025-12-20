import { Layout } from "@/components/layout/Layout";
import { Users, Award, Heart, Target } from "lucide-react";

const team = [
  {
    name: "Marcus Chen",
    role: "Founder & Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Sofia Rodriguez",
    role: "Executive Producer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "James Wright",
    role: "Director of Photography",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    name: "Emma Thompson",
    role: "Post-Production Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop",
  },
];

const values = [
  {
    icon: Target,
    title: "Vision",
    description: "Every project starts with a clear creative vision that guides our storytelling.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every frame, every cut, every moment.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great films are made through partnership and shared creative vision.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of craft and quality.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 reveal">
              About Indievision
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-8 reveal reveal-delay-1">
              We believe in the power of
              <br />
              <span className="text-muted-foreground">visual storytelling</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed reveal reveal-delay-2">
              Founded in 2009, Indievision Studios has grown from a small
              independent production house to an award-winning studio known for
              creating compelling visual narratives that resonate with audiences
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  What started as a passion project between two film school
                  graduates has evolved into a full-service production company
                  with a reputation for cinematic excellence. Over the years,
                  we've had the privilege of working with brands, filmmakers, and
                  organizations who share our commitment to storytelling.
                </p>
                <p>
                  Our journey has taken us from local commercials to
                  international film festivals, from corporate videos to
                  award-winning documentaries. Through it all, we've maintained
                  our core belief: that every story, no matter the scale,
                  deserves to be told with care, craft, and creativity.
                </p>
                <p>
                  Today, our team of directors, producers, cinematographers, and
                  editors continues to push the boundaries of visual
                  storytelling, always seeking new ways to connect with audiences
                  and create lasting impact.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                  alt="Behind the scenes at Indievision Studios"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              The Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Meet Our Creatives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
