import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** ASCII Rain — characters fall like Matrix rain */
export const AsciiRain = () => {
  const chars = "░▒▓█╬╠╣╦╩┼─│┌┐└┘◈◉★♦▲▼◆";
  const columns = 30;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-primary whitespace-pre leading-tight"
          style={{ left: `${(i / columns) * 100}%` }}
          initial={{ y: "-100%" }}
          animate={{ y: "110vh" }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {Array.from({ length: 15 }).map(() => chars[Math.floor(Math.random() * chars.length)]).join("\n")}
        </motion.div>
      ))}
    </div>
  );
};

/** Magnetic button — follows cursor within proximity */
export const MagneticElement = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/** Text that reveals character by character */
export const TextReveal = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [revealed, setRevealed] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setRevealed(prev => {
          if (prev >= text.length) { clearInterval(interval); return prev; }
          return prev + 1;
        });
      }, 35);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [started, text, delay]);

  return (
    <span ref={ref} className={className}>
      <span>{text.slice(0, revealed)}</span>
      <span className="opacity-0">{text.slice(revealed)}</span>
      {revealed < text.length && started && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="text-primary"
        >
          █
        </motion.span>
      )}
    </span>
  );
};

/** Infinite scrolling marquee with ASCII art */
export const AsciiMarquee = ({ className = "" }: { className?: string }) => {
  const content = "  ◈  PONCHO RAMOS  ◈  WEB DEVELOPER  ◈  MERN STACK  ◈  PERN STACK  ◈  REACT  ◈  TYPESCRIPT  ◈  NODE.JS  ◈  COFFEE LOVER  ";

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-marquee inline-block font-mono text-sm text-muted-foreground/40 tracking-widest">
        {content}{content}
      </div>
    </div>
  );
};

/** Morphing ASCII shape */
export const MorphingAscii = ({ className = "" }: { className?: string }) => {
  const shapes = [
    `╔═══╗\n║ ◈ ║\n╚═══╝`,
    `┌───┐\n│ ★ │\n└───┘`,
    `╭───╮\n│ ◉ │\n╰───╯`,
    `▛▀▀▀▜\n▌ ♦ ▐\n▙▄▄▄▟`,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % shapes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.pre
      key={index}
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      transition={{ duration: 0.5 }}
      className={`ascii-decoration text-primary/50 text-sm ${className}`}
    >
      {shapes[index]}
    </motion.pre>
  );
};

/** Parallax scroll container */
export const ParallaxText = ({ children, speed = 0.5, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${scrollY * speed * -0.1}px)` }}>
      {children}
    </div>
  );
};
