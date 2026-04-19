import { motion } from "framer-motion";
import { AsciiDivider } from "./AsciiArt";
import { ParallaxText } from "./FancyAnimations";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "PostgreSQL", level: 75 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "Git", level: 85 },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="group"
  >
    <div className="flex justify-between font-mono text-sm mb-1.5">
      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
        {skill.name}
      </span>
      <span className="text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 bg-muted overflow-hidden rounded-sm">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
        className="h-full bg-primary"
      />
    </div>
  </motion.div>
);

const asciiPortrait = `
     ┌─────────┐
     │  ◉   ◉  │
     │    ▲    │
     │  ╰───╯  │
     │ PONCHO  │
     └─────────┘
  ┌──┤ RAMOS  ├──┐
  │  └─────────┘  │
  │   ║     ║    │
  │   ║     ║    │
  └───╨─────╨────┘
`;

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 noise-overlay">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">{"// 02"}</span>
          <h2 className="text-4xl md:text-6xl font-bold text-primary">
            Sobre mí
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-8 mb-8">
              <ParallaxText speed={0.3} className="hidden lg:block">
                <pre className="ascii-decoration text-primary/40 text-xs">
                  {asciiPortrait}
                </pre>
              </ParallaxText>
              <div>
                <p className="text-foreground leading-relaxed mb-4 text-base">
                  Desarrollador web mexicano junior apasionado por el café y la programación. 
                  Utilizo MERN y PERN stack para crear proyectos fullstack, constantemente 
                  entrenando y aprendiendo para mejorar profesionalmente.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Me enfoco en crear experiencias web que combinan funcionalidad sólida 
                  con diseño atractivo. Cada proyecto es una oportunidad para aprender algo nuevo.
                </p>
              </div>
            </div>

            <AsciiDivider className="text-border mb-8" />

            <div className="font-mono text-sm text-muted-foreground space-y-2">
              <div><span className="text-primary font-semibold">location:</span> México 🇲🇽</div>
              <div><span className="text-primary font-semibold">stack:</span> MERN / PERN</div>
              <div><span className="text-primary font-semibold">status:</span> <span className="text-primary">● open to work</span></div>
              <div><span className="text-primary font-semibold">coffee:</span> always ☕</div>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-base text-primary mb-6 font-semibold"
            >
              {">"} skills.map()
            </motion.h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
