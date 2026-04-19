import { motion } from "framer-motion";
import AsciiArt, { AsciiDivider } from "./AsciiArt";
import { AsciiRain, TextReveal, AsciiMarquee, MorphingAscii, MagneticElement } from "./FancyAnimations";

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-overlay">
        {/* ASCII Rain background */}
        <AsciiRain />

        {/* Floating ASCII decorations */}
        <motion.div
            className="absolute top-24 left-10 opacity-15"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
            <AsciiArt pattern="circuit" className="text-primary" />
        </motion.div>

        <motion.div
            className="absolute bottom-36 right-16 opacity-10"
            animate={{ y: [0, 10, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
            <AsciiArt pattern="star" className="text-primary/60" />
        </motion.div>

        <motion.div
            className="absolute top-1/3 right-24 hidden lg:block"
        >
            <MorphingAscii />
        </motion.div>

        <motion.div
            className="absolute bottom-24 left-24 opacity-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            <AsciiArt pattern="cactus" className="text-primary" />
        </motion.div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-full h-px bg-primary/15 animate-scan-line" />
        </div>

        {/* Soft orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-sm text-muted-foreground mb-8"
            >
            {"// ═══════════════════════════════════════"}
            </motion.div>

            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
            >
            <span className="text-primary">Poncho</span>
            <br />
            <span className="text-foreground">Ramos</span>
            </motion.h1>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-mono text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-4"
            >
            <span className="text-primary font-semibold">$</span>{" "}
            <TextReveal text="Mexican Web Developer · Coffee Enthusiast · Code Craftsman" delay={0.8} />
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-mono text-sm text-muted-foreground/60 mb-12"
            >
            MERN · PERN · TypeScript · React · Node.js
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            <MagneticElement>
                <a
                href="#projects"
                className="font-mono text-base border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-all duration-300 hover:box-glow-primary inline-block"
                >
                {">> VER PROYECTOS"}
                </a>
            </MagneticElement>
            <MagneticElement>
                <a
                href="#contact"
                className="font-mono text-base border border-border text-muted-foreground px-8 py-3 hover:border-primary hover:text-primary transition-all duration-300 inline-block"
                >
                {":: CONTACTO ::"}
                </a>
            </MagneticElement>
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20"
            >
            <AsciiMarquee />
            </motion.div>
        </div>
        </section>
    );
};

export default HeroSection;
