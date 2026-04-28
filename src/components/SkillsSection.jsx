import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


/* ================== DATA ================== */
const skills = [
  { name: "HTML", level: 95, icon: SiHtml5, color: "#E34F26", category: "frontend", projects: 8 },
  { name: "JavaScript", level: 90, icon: SiJavascript, color: "#F7DF1E", category: "frontend", projects: 7 },
  { name: "React", level: 90, icon: SiReact, color: "#61DAFB", category: "frontend", projects: 6 },
  { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6", category: "frontend", projects: 4 },
  { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#38BDF8", category: "frontend", projects: 6 },
  { name: "Next.js", level: 80, icon: SiNextdotjs, color: "#000000", category: "frontend", projects: 3 },

  { name: "Node.js", level: 80, icon: SiNodedotjs, color: "#339933", category: "backend", projects: 5 },
  { name: "Express", level: 75, icon: SiExpress, color: "#ffffff", category: "backend", projects: 4 },
  { name: "MongoDB", level: 70, icon: SiMongodb, color: "#47A248", category: "backend", projects: 4 },
  { name: "PostgreSQL", level: 65, icon: SiPostgresql, color: "#4169E1", category: "backend", projects: 3 },
  { name: "GraphQL", level: 60, icon: SiGraphql, color: "#E10098", category: "backend", projects: 2 },

  { name: "Git", level: 90, icon: SiGit, color: "#F05032", category: "tools", projects: 8 },
  { name: "GitHub", level: 90, icon: SiGithub, color: "#ffffff", category: "tools", projects: 8 },
  { name: "Docker", level: 70, icon: SiDocker, color: "#2496ED", category: "tools", projects: 3 },
  { name: "VS Code", level: 95, icon: VscVscode, color: "#007ACC", category: "tools", projects: 10 },
];

const categories = ["all", "frontend", "backend", "tools"];

/* ================== COMPONENT ================== */
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* ================== FILTERS (Keyboard Accessible) ================== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveCategory(category);
                }
              }}
              tabIndex={0}
              aria-pressed={activeCategory === category}
              className={cn(
                "px-5 py-2 rounded-full capitalize outline-none transition",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================== GRID ================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card p-6 rounded-xl border border-border
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg
                           group relative"
              >
                {/* ================== ICON + TITLE ================== */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className="text-2xl transition-all duration-300"
                    style={{ color: skill.color }}
                  />

                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                {/* ================== TOOLTIP ================== */}
                <span
                  className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md
                             bg-popover text-popover-foreground
                             opacity-0 group-hover:opacity-100 transition"
                >
                  Used in {skill.projects} projects
                </span>

                {/* ================== PROGRESS BAR (Animated on Scroll) ================== */}
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 12px ${skill.color}`, // 🔥 glow
                    }}
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  Proficiency: {skill.level}%
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};