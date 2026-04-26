import { motion } from "framer-motion";
import { info } from "../data/info.js";

const skills = info.skills;

const SkillChip = ({ skill, index }: { skill: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03, duration: 0.3 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/5 text-foreground font-mono text-xs border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-all cursor-default"
  >
    {skill}
  </motion.span>
);

const InfoCard = ({ label, value, icon }: { label: string; value: string; icon: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
    <span className="text-sm font-mono text-primary w-6 h-6 flex items-center justify-center rounded bg-primary/10">{icon}</span>
    <div>
      <span className="text-muted-foreground text-xs font-mono block">{label}</span>
      <span className="text-foreground text-sm font-medium">{value}</span>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-wider">Sobre mí</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Conóceme
          </h2>
          <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-4" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left - Image & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image with decorative frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-border/30 bg-background">
                <img 
                  className="w-full aspect-square object-cover" 
                  src="/assets/images/me.webp" 
                  alt="Profile" 
                />
              </div>
            </motion.div>

            {/* Info Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              <InfoCard label="Ubicación" value="México" icon="MX" />
              <InfoCard label="Stack" value="MERN / PERN" icon="&lt;/&gt;" />
              <InfoCard label="Status" value="Open to work" icon="●" />
            </motion.div>
          </div>

          {/* Right - Bio & Skills */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-foreground leading-relaxed text-lg">
                Desarrollador web mexicano junior apasionado por el cafe y la programacion. 
                Utilizo <span className="text-primary font-medium">MERN</span> y <span className="text-primary font-medium">PERN</span> stack para crear proyectos fullstack.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Me enfoco en crear experiencias web que combinan funcionalidad sólida 
                con diseño atractivo. Cada proyecto es una oportunidad para aprender algo nuevo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Constantemente entrenando y aprendiendo para mejorar profesionalmente.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary">{'>'}</span>
                <span className="font-mono text-sm text-muted-foreground">tecnologías</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <SkillChip key={skill} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors group"
              >
                <span className="font-mono">{'>'} Conectemos</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
