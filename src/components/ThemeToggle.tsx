import { motion } from "framer-motion";
import { useTheme } from "../hooks/use-theme";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="font-mono text-xs border border-border px-3 py-2 text-muted-foreground hover:border-primary hover:text-primary transition-all"
        aria-label="Toggle theme"
        >
        {theme === "dark" ? "☀ LIGHT" : "◑ DARK"}
        </motion.button>
    );
};

export default ThemeToggle;
