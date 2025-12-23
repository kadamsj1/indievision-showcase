import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight, X, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const categories = ["All", "Short Film", "Ad", "Music Video"];

const projects = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "Short Film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    year: "2024",
    description: "A sci-fi drama exploring the boundaries of human consciousness and artificial intelligence. Shot over 18 days in Iceland and Norway, the film combines practical effects with minimal CGI to create an immersive near-future world.",
    stills: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Meridian",
    category: "Ad",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "Brand campaign for a luxury automotive company launching their electric vehicle line. The film focuses on the intersection of craftsmanship and innovation, shot across three countries over two weeks.",
    stills: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "The Last Light",
    category: "Short Film",
    image: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    description: "An intimate portrait of lighthouse keepers preserving maritime traditions. This documentary short explores solitude, duty, and the quiet heroism of those who guide ships through darkness.",
    stills: [
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476673160081-cf065bc4cecb?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Velocity",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "High-energy music video featuring innovative visual effects and choreography. Created in collaboration with the artist to push the boundaries of what's possible in a three-minute visual experience.",
    stills: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Silent Waters",
    category: "Short Film",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2028&auto=format&fit=crop",
    year: "2023",
    description: "A psychological thriller set in the remote fishing villages of Northern Europe. The 25-minute short explores grief, isolation, and the thin line between memory and imagination.",
    stills: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Artisan",
    category: "Ad",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop",
    year: "2023",
    description: "Brand documentary celebrating master craftspeople who keep traditional arts alive. Produced for a heritage luxury brand, the film honors the hands that shape timeless objects.",
    stills: [
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 7,
    title: "Urban Pulse",
    category: "Ad",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    description: "Dynamic brand film capturing the energy and rhythm of city life. Created for a global sportswear brand, blending street culture with athletic performance.",
    stills: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 8,
    title: "Neon Dreams",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    description: "Synthwave-inspired visual journey through a retro-futuristic cityscape. The video combines practical neon lighting with digital environments to create a hypnotic visual experience.",
    stills: [
      "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    ],
  },
];

type Project = typeof projects[number];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                onClick={() => setSelectedProject(project)}
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
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
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

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl bg-card border-border/50 p-0 overflow-hidden">
          {selectedProject && (
            <>
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-secondary/50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110">
                    <Play size={32} className="text-primary-foreground ml-1" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {selectedProject.category}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {selectedProject.year}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  {selectedProject.title}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                  {selectedProject.description}
                </p>

                {/* Stills */}
                <div>
                  <h3 className="text-sm text-foreground uppercase tracking-[0.15em] mb-4">
                    Production Stills
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.stills.map((still, index) => (
                      <div
                        key={index}
                        className="aspect-[3/2] rounded-sm overflow-hidden"
                      >
                        <img
                          src={still}
                          alt={`${selectedProject.title} still ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <DialogClose className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors">
                <X size={20} className="text-foreground" />
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Portfolio;
