import { NAV_LINKS } from "./data";

interface NavBarProps {
  scrolled: boolean;
}

export default function NavBar({ scrolled }: NavBarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled
          ? "rgba(8,7,5,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-px h-6"
            style={{ background: "linear-gradient(180deg, transparent, #c9a84c, transparent)" }}
          />
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "#c9a84c",
              letterSpacing: "0.4em",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            YA VPN
          </span>
          <div
            className="w-px h-6"
            style={{ background: "linear-gradient(180deg, transparent, #c9a84c, transparent)" }}
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative group text-xs uppercase tracking-widest transition-colors duration-300"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "#5a5040",
                letterSpacing: "0.18em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5040")}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "rgba(201,168,76,0.4)" }}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-300 group"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            border: "1px solid rgba(201,168,76,0.35)",
            color: "#c9a84c",
            background: "rgba(201,168,76,0.04)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(201,168,76,0.1)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(201,168,76,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(201,168,76,0.04)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Подключиться
        </a>
      </div>
    </nav>
  );
}
