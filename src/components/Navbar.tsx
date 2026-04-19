import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
// import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Inicio", href: "/#hero" },
    { label: "Proyectos", href: "/projects" },
    { label: "Sobre mí", href: "/#about" },
    { label: "Contacto", href: "/#contact" },
    ];

const Navbar = () => {
    // const location = useLocation();
    // const isHome = location.pathname === "/";

    return (
        <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
        >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <a href="/" className="font-mono text-primary text-lg font-bold text-glow-primary">
            {"<PR/>"}
            </a>

            <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {
                const NavEl = "a";
                const props = { href: link.href };

                return (
                <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                >
                    <NavEl
                    {...(props as any)}
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                    >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span>
                    {" "}{link.label}
                    </NavEl>
                </motion.div>
                );
            })}
            </div>

            <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
                href="https://cv.ponchoramos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs border border-primary/50 text-primary px-4 py-2 hover:bg-primary/10 transition-all hover:box-glow-primary"
            >
                [ VIEW CV ]
            </a>
            </div>
        </div>
        </motion.nav>
    );
};

export default Navbar;
