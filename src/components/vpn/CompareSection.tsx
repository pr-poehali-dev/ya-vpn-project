import { useInView } from "./useInView";
import { COMPARE } from "./data";
import Icon from "@/components/ui/icon";

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <div
      className="inline-flex items-center justify-center w-7 h-7"
      style={{
        background: "rgba(201,168,76,0.1)",
        border: "1px solid rgba(201,168,76,0.3)",
      }}
    >
      <Icon name="Check" size={12} style={{ color: "#c9a84c" }} />
    </div>
  ) : (
    <div
      className="inline-flex items-center justify-center w-7 h-7"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <span style={{ color: "#2a2520", fontSize: "0.8rem" }}>—</span>
    </div>
  );
}

export default function CompareSection() {
  const compRef = useInView();

  return (
    <section
      id="compare"
      className="py-36 relative overflow-hidden"
      style={{
        background: "var(--obsidian)",
        borderTop: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 60%, rgba(201,168,76,0.04) 0%, transparent 50%)`,
        }}
      />

      <div ref={compRef.ref} className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">

        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-px" style={{ background: "#c9a84c" }} />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "#c9a84c",
                letterSpacing: "0.45em",
                fontSize: "0.6rem",
              }}
            >
              СРАВНЕНИЕ
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
            YA VPN<br />
            <em style={{ fontStyle: "italic", color: "var(--text-muted)", fontWeight: 300, fontSize: "0.75em" }}>
              vs конкуренты
            </em>
          </h2>
        </div>

        {/* Table */}
        <div
          className="overflow-hidden transition-all duration-700"
          style={{
            border: "1px solid rgba(201,168,76,0.12)",
            opacity: compRef.visible ? 1 : 0,
            transform: compRef.visible ? "translateY(0)" : "translateY(32px)",
            background: "var(--surface)",
          }}
        >
          {/* Header row */}
          <div
            className="grid grid-cols-4"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%)",
              borderBottom: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <div
              className="px-10 py-6"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--text-faint)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              Функция
            </div>
            {[
              { label: "YA VPN", highlight: true },
              { label: "OpenVPN", highlight: false },
              { label: "WireGuard", highlight: false },
            ].map((col) => (
              <div
                key={col.label}
                className="px-4 py-6 text-center"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: col.highlight ? "#c9a84c" : "var(--text-faint)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  borderLeft: col.highlight ? "1px solid rgba(201,168,76,0.15)" : "1px solid rgba(201,168,76,0.05)",
                }}
              >
                {col.highlight && (
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 mb-1"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse" />
                    {col.label}
                  </div>
                )}
                {!col.highlight && col.label}
              </div>
            ))}
          </div>

          {COMPARE.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-4 group transition-colors duration-200"
              style={{
                borderBottom: i < COMPARE.length - 1 ? "1px solid rgba(201,168,76,0.06)" : "none",
                background: "transparent",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.025)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <div
                className="px-10 py-5 text-sm"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {row.feature}
              </div>
              {[row.ya, row.openvpn, row.wireguard].map((val, j) => (
                <div
                  key={j}
                  className="py-5 flex items-center justify-center"
                  style={{
                    borderLeft: j === 0 ? "1px solid rgba(201,168,76,0.1)" : "1px solid rgba(201,168,76,0.04)",
                    background: j === 0 ? "rgba(201,168,76,0.015)" : "transparent",
                  }}
                >
                  <Check ok={val} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="mt-8 text-xs"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "var(--text-faint)",
            letterSpacing: "0.1em",
          }}
        >
          * Основано на реальных условиях работы в России и СНГ, 2024
        </p>
      </div>
    </section>
  );
}
