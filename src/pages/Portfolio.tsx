import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Feature Film", "Commercial", "Documentary", "Music Video"];

const projects = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "Feature Film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    year: "2024",
    description: "A sci-fi drama exploring the boundaries of human consciousness and artificial intelligence.",
  },
  {
    id: 2,
    title: "Meridian",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "Brand campaign for a luxury automotive company launching their electric vehicle line.",
  },
  {
    id: 3,
    title: "The Last Light",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    description: "An intimate portrait of lighthouse keepers preserving maritime traditions.",
  },
  {
    id: 4,
    title: "Velocity",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "High-energy music video featuring innovative visual effects and choreography.",
  },
  {
    id: 5,
    title: "Silent Waters",
    category: "Feature Film",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2028&auto=format&fit=crop",
    year: "2023",
    description: "A psychological thriller set in the remote fishing villages of Northern Europe.",
  },
  {
    id: 6,
    title: "Artisan",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop",
    year: "2023",
    description: "Celebrating master craftspeople who keep traditional arts alive in the modern world.",
  },
  {
    id: 7,
    title: "Urban Pulse",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "Dynamic brand film capturing the energy and rhythm of city life.",
  },
  {
    id: 8,
    title: "Neon Dreams",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    description: "Synthwave-inspired visual journey through a retro-futuristic cityscape.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 reveal">
              Our Work
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-8 reveal reveal-delay-1">
              Stories that
              <br />
              <span className="text-muted-foreground">leave a mark</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative aspect-[16/10] overflow-hidden rounded-sm hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-primary text-sm tracking-wide mb-2">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <ArrowUpRight size={20} className="text-foreground group-hover:text-primary-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
