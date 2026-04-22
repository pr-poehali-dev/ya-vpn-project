import Icon from "@/components/ui/icon";
import { useInView } from "./useInView";
import { FEATURES } from "./data";

export default function FeaturesSection() {
  const featRef = useInView();

  return (
    <section
      id="features"
      className="py-36 relative overflow-hidden"
      style={{
        background: "var(--obsidian-2)",
        borderTop: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      {/* Subtle bg pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 50%)`,
        }}
      />

      <div ref={featRef.ref} className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">

        {/* Header */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px" style={{ background: "#c9a84c" }} />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: "#c9a84c",
                  letterSpacing: "0.45em",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                }}
              >
                ПРЕИМУЩЕСТВА
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 300,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Почему<br />
              <em style={{ fontStyle: "italic", color: "#c9a84c", fontWeight: 400 }}>YA VPN</em>
            </h2>
          </div>
          <p
            className="max-w-xs"
            style={{
              fontFamily: "'Golos Text', sans-serif",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
            }}
          >
            Протокол V2Ray нового поколения — там, где классические VPN уже не работают.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(201,168,76,0.06)" }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="premium-card group relative overflow-hidden p-10"
              style={{
                background: "var(--obsidian-2)",
                opacity: featRef.visible ? 1 : 0,
                transform: featRef.visible ? "translateY(0)" : "translateY(28px)",
                transitionDelay: `${i * 80}ms`,
                transitionDuration: "700ms",
                transitionProperty: "opacity, transform",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{
                  background: "radial-gradient(ellipse at 30% 30%, rgba(201,168,76,0.06) 0%, transparent 60%)",
                }}
              />

              {/* Number label */}
              <span
                className="absolute top-8 right-8"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "5rem",
                  fontWeight: 300,
                  color: "rgba(201,168,76,0.04)",
                  lineHeight: 1,
                  userSelect: "none",
                  transition: "color 0.4s",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center mb-8 transition-all duration-400 group-hover:scale-110"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "rgba(201,168,76,0.04)",
                  boxShadow: "inset 0 1px 0 rgba(201,168,76,0.1)",
                }}
              >
                <Icon name={f.icon} fallback="Shield" size={18} style={{ color: "#c9a84c" }} />
              </div>

              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-px mb-5 transition-all duration-400 group-hover:w-16"
                style={{ background: "rgba(201,168,76,0.3)" }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
