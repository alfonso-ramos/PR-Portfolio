import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setThemeState] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setThemeState(prev => prev === "dark" ? "light" : "dark");

    return { theme, toggleTheme };
};
