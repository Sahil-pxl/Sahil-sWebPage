import { useState } from "react";
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

/* -------------------- DATA -------------------- */

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", level: 90, category: "frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", level: 90, category: "frontend", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", level: 85, category: "frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Next.js", level: 80, category: "frontend", icon: SiNextdotjs, color: "#000000" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", level: 75, category: "backend", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", level: 70, category: "backend", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", level: 65, category: "backend", icon: SiPostgresql, color: "#4169E1" },
  { name: "GraphQL", level: 60, category: "backend", icon: SiGraphql, color: "#E10098" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: SiGit, color: "#F05032" },
  { name: "GitHub", level: 90, category: "tools", icon: SiGithub, color: "#ffffff" },
  { name: "Docker", level: 70, category: "tools", icon: SiDocker, color: "#2496ED" },
  { name: "VS Code", level: 95, category: "tools", icon: VscVscode, color: "#007ACC" },
];

const categories = ["all", "frontend", "backend", "tools"];

/* -------------------- COMPONENT -------------------- */

export const SS = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl
                           border border-border
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Title + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-2xl" style={{ color: skill.color }} />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Percentage */}
                <p className="text-sm text-muted-foreground text-right">
                  {skill.level}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};