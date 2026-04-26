import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const MagneticElement = lazy(() => import("./FancyAnimations").then(m => ({ default: m.MagneticElement })));

const contactAscii = `
╔══════════════════════════╗
║                          ║
║   ┌──┐  CONTACTO  ┌──┐   ║
║   │▓▓│  ────────  │▓▓│   ║
║   └──┘            └──┘   ║
║                          ║
║   > Hablemos de tu       ║
║     próximo proyecto_    ║
║                          ║
╚══════════════════════════╝
`;

const socialLinks = [
  { name: "GitHub", url: "https://github.com/alfonso-ramos", icon: "◈" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "◇" },
  { name: "Email", url: "mailto:contacto@ponchoramos.com", icon: "✉" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-sm text-primary mb-2 block">{"// 03"}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
            Contacto
          </h2>
        </motion.div>

        <motion.pre
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="ascii-decoration text-primary/40 text-xs md:text-sm mx-auto inline-block mb-12"
        >
          {contactAscii}
        </motion.pre>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-foreground text-lg max-w-lg mx-auto mb-12 leading-relaxed"
        >
          ¿Tienes un proyecto en mente o simplemente quieres saludar? 
          No dudes en contactarme. Siempre estoy abierto a nuevas oportunidades 
          y colaboraciones interesantes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <Suspense key={link.name} fallback={
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-base border border-border px-8 py-4 text-muted-foreground hover:border-primary hover:text-primary transition-colors hover:box-glow-primary flex items-center gap-3"
              >
                <span className="text-primary text-lg">{link.icon}</span>
                {link.name}
              </a>
            }>
              <MagneticElement>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-base border border-border px-8 py-4 text-muted-foreground hover:border-primary hover:text-primary transition-colors hover:box-glow-primary flex items-center gap-3"
                >
                  <span className="text-primary text-lg">{link.icon}</span>
                  {link.name}
                </a>
              </MagneticElement>
            </Suspense>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <pre className="ascii-decoration text-muted-foreground/15 text-xs">
{`
  ██████╗  ██████╗ 
  ██╔══██╗██╔══██╗
  ██████╔╝██████╔╝
  ██╔═══╝ ██╔══██╗
  ██║     ██║  ██║
  ╚═╝     ╚═╝  ╚═╝
`}
          </pre>
          <p className="font-mono text-sm text-muted-foreground/40 mt-4">
            © 2026 Poncho Ramos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
