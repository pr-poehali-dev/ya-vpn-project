import { NAV_LINKS } from "./data";

interface NavBarProps {
  scrolled: boolean;
}

export default function NavBar({ scrolled }: NavBarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(13,11,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <span
          className="tracking-[0.25em] uppercase text-sm"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "#c9a84c",
            letterSpacing: "0.3em",
          }}
        >
          YA VPN
        </span>
        <div className="hidden md:flex gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest transition-colors duration-200"
              style={{
                fontFamily: "'Golos Text', sans-serif",
                color: "#8a7d6e",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7d6e")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#download"
          className="text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            border: "1px solid #c9a84c",
            color: "#c9a84c",
            letterSpacing: "0.12em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#c9a84c";
            e.currentTarget.style.color = "#0d0b09";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c9a84c";
          }}
        >
          Скачать
        </a>
      </div>
    </nav>
  );
}
