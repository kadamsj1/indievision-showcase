import { Layout } from "@/components/layout/Layout";
import { Film, Eye, Sparkles, Award } from "lucide-react";

const team = [
  {
    name: "Marcus Chen",
    role: "Founder & Creative Director",
    bio: "Former documentary filmmaker with 15 years in the industry. Started Indievision after realizing most production companies prioritize volume over vision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Sofia Rodriguez",
    role: "Executive Producer",
    bio: "Background in independent film production. Joined Indievision in 2012 to build something different from the agency world she left behind.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "James Wright",
    role: "Director of Photography",
    bio: "Cinematographer with a background in fine art photography. Obsessed with natural light and practical effects over post-production fixes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    name: "Emma Thompson",
    role: "Head of Post-Production",
    bio: "Editor and colorist who believes the best cuts are the ones you don't notice. Previously worked on award-winning indie features.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop",
  },
];

const reasons = [
  {
    icon: Film,
    title: "Cinematic Storytelling",
    description:
      "We don't make content. We make films. Every project, regardless of format or budget, receives the same attention to narrative structure, visual language, and emotional resonance that defines cinema.",
  },
  {
    icon: Eye,
    title: "Uncompromising Quality",
    description:
      "We've walked away from projects that demanded shortcuts. Our reputation is built on work we're proud to show, not work we rushed to deliver. Every frame matters.",
  },
  {
    icon: Sparkles,
    title: "Original Thinking",
    description:
      "We don't follow trends or copy what worked for someone else. Each project starts with a blank slate and a simple question: what does this story actually need?",
  },
  {
    icon: Award,
    title: "Long-term Relationships",
    description:
      "Most of our work comes from repeat clients. We prefer building ongoing partnerships over one-off transactions. It produces better work and better results.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero - Studio Introduction */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 reveal">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-10 reveal reveal-delay-1">
              A production company
              <br />
              <span className="text-muted-foreground">built on craft, not volume</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div className="reveal reveal-delay-2">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Indievision Studios was founded in 2009 with a straightforward premise: 
                make fewer projects, make them better. We're not an agency. We don't have 
                account managers or creative directors who've never touched a camera.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're filmmakers who happen to run a business. Every person in our studio 
                has made films independently before joining. That shared background shapes 
                how we approach commercial work—with the same care and intentionality we'd 
                bring to our own projects.
              </p>
            </div>
            <div className="reveal reveal-delay-3">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over fifteen years, we've worked with brands, organizations, and fellow 
                filmmakers who value substance over spectacle. We've turned down projects 
                that didn't align with how we work. We've built lasting relationships with 
                clients who trust our judgment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're based in Los Angeles, but we've shot on five continents. Our team 
                stays small by design—twelve people who know each other's work intimately. 
                When you hire Indievision, you get us. Not a B-team. Not freelancers we 
                found last week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
          alt="Film production set"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="border-l-2 border-primary pl-8">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe commercial filmmaking doesn't have to be disposable. 
                The best brand films, documentaries, and campaigns can stand alongside 
                independent cinema—not as advertisements, but as genuine pieces of work 
                that respect their audience's intelligence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal isn't to become the biggest production company. It's to 
                consistently make work that we'd choose to watch ourselves.
              </p>
            </div>

            {/* Mission */}
            <div className="border-l-2 border-accent pl-8">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To bring cinematic rigor to every project we take on. To treat 
                commercials with the same seriousness as features. To work only 
                with clients who want partners, not vendors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We measure success not by revenue or views, but by whether the 
                work holds up five years later. Whether we'd still be proud to 
                show it. Whether it actually moved someone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Indievision */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Why Work With Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              What makes Indievision different
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're not the right fit for every project. We work best with clients 
              who have something real to say and the patience to say it well. 
              If you're looking for the fastest or cheapest option, we're probably 
              not it. But if you want work that lasts, here's what we bring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-8 rounded-sm bg-secondary/30 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <reason.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              The Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              The people behind the work
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our core team has worked together for years. Most of us came from 
              indie film backgrounds—features, shorts, documentaries made on 
              shoestring budgets. That scrappy, figure-it-out mentality never left.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member) => (
              <div key={member.name} className="group flex gap-6">
                <div className="w-32 h-40 md:w-40 md:h-52 rounded-sm overflow-hidden shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              "We'd rather make one film we believe in than ten we don't."
            </blockquote>
            <p className="text-muted-foreground">
              — Marcus Chen, Founder
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
