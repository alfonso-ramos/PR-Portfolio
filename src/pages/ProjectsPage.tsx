import { motion } from "framer-motion";
import { projects, ProjectCard } from "../components/ProjectsSection";
import { AsciiDivider } from "../components/AsciiArt";
import Navbar from "../components/Navbar";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <a
              href="/"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {"← Volver al inicio"}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <span className="font-mono text-sm text-primary mb-2 block">{"// ALL PROJECTS"}</span>
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-4">
              Proyectos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Todos mis proyectos — desde experimentos personales hasta aplicaciones fullstack completas.
            </p>
          </motion.div>

          <AsciiDivider className="text-border mb-12" />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-16 max-w-md"
          >
            <div className="border border-border p-4">
              <div className="font-mono text-2xl font-bold text-primary">{projects.length}</div>
              <div className="font-mono text-xs text-muted-foreground">Proyectos</div>
            </div>
            <div className="border border-border p-4">
              <div className="font-mono text-2xl font-bold text-primary">
                {new Set(projects.flatMap(p => p.tags)).size}
              </div>
              <div className="font-mono text-xs text-muted-foreground">Tecnologías</div>
            </div>
            <div className="border border-border p-4">
              <div className="font-mono text-2xl font-bold text-primary">☕</div>
              <div className="font-mono text-xs text-muted-foreground">∞ cafés</div>
            </div>
          </motion.div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          {/* ASCII footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <pre className="ascii-decoration text-primary/15 text-xs inline-block">
{`┌─────────────────────────────┐
│  Más proyectos en camino... │
│  Stay tuned ◈              │
└─────────────────────────────┘`}
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
