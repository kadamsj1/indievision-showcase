import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "Feature Film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "Meridian",
    category: "Brand Campaign",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
  },
  {
    id: 3,
    title: "The Last Light",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Featured Work
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Recent Projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            View All Projects
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-sm tracking-wide mb-2">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-muted-foreground text-sm">
                  {project.year}
                </span>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <ArrowUpRight size={18} className="text-foreground group-hover:text-primary-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
