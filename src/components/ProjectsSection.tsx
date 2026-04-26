import { motion } from "framer-motion";
import { info } from "../data/info";

export const ProjectCard = ({ project, index }: { project: typeof info.projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay: index * 0.12 }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="group relative border border-border bg-card hover:border-primary/50 transition-all duration-500 p-6 hover:box-glow-primary"
  >
    <img src={`${project.thumbnail}`} alt="" />

    <div className="flex items-start justify-between mb-3">
      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
    </div>

    <p className="text-base text-muted-foreground mb-5 leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-5">
      {project.technologies?.map(tag => (
        <span key={tag} className="font-mono text-xs border border-border px-3 py-1 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-4 font-mono text-sm">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        [GitHub]
      </a>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        [Live →]
      </a>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">{"// 01"}</span>
          <h2 className="text-4xl md:text-6xl font-bold text-primary">
            Proyectos
          </h2>
          <p className="font-mono text-base text-muted-foreground mt-4">
            {">"} Featured projects I've been working on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {info.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="font-mono text-base border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:box-glow-primary inline-block"
          >
            {">> VER TODOS LOS PROYECTOS"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
