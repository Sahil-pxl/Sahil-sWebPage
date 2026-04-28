import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative bg-card rounded-lg overflow-hidden border border-border shadow-sm"
    >
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-primary text-white hover:scale-110 transition"
          >
            <ExternalLink size={18} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-primary text-white hover:scale-110 transition"
          >
            <SiGithub size={18} />
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};