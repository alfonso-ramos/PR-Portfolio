import { motion } from "framer-motion";

const asciiPatterns = {
  corner: `╔══════╗
║ ◈◈◈◈ ║
║ ◈  ◈ ║
║ ◈◈◈◈ ║
╚══════╝`,
  border: `┌─────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓             ▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
└─────────────────────┘`,
  skull: `   ░░░░░░░
  ░░░░░░░░░
 ░░ ▀ ░ ▀ ░░
 ░░░░░▄░░░░░
  ░░░░░░░░░
   ░░▀▀▀░░`,
  wave: `~^~^~^~^~^~^~^~^~^~
 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
~^~^~^~^~^~^~^~^~^~`,
  circuit: `┌──┬──┬──┐
├──┼──┼──┤
│  ◉  │  ◉  │
├──┼──┼──┤
└──┴──┴──┘`,
  star: `    ★
   ╱│╲
  ╱ │ ╲
 ★──★──★
  ╲ │ ╱
   ╲│╱
    ★`,
  cactus: `    🌵
   ┃┃┃
   ┃┃┃
 ━━┻┻┻━━
   ╳╳╳`,
};

interface AsciiArtProps {
  pattern: keyof typeof asciiPatterns;
  className?: string;
  animate?: boolean;
}

const AsciiArt = ({ pattern, className = "", animate = true }: AsciiArtProps) => {
  const content = (
    <pre className={`ascii-decoration text-xs md:text-sm ${className}`}>
      {asciiPatterns[pattern]}
    </pre>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  );
};

export const AsciiDivider = ({ className = "" }: { className?: string }) => (
  <div className={`ascii-decoration text-center text-xs overflow-hidden ${className}`}>
    ═══════════════════════════════════════════════════════════════════
  </div>
);

export const AsciiFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <span className="ascii-decoration absolute -top-4 -left-4 text-primary text-xs">╔══╗</span>
    <span className="ascii-decoration absolute -top-4 -right-4 text-primary text-xs">╔══╗</span>
    <span className="ascii-decoration absolute -bottom-4 -left-4 text-primary text-xs">╚══╝</span>
    <span className="ascii-decoration absolute -bottom-4 -right-4 text-primary text-xs">╚══╝</span>
    {children}
  </div>
);

export default AsciiArt;
