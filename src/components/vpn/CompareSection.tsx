import { useInView } from "./useInView";
import { COMPARE } from "./data";

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span style={{ color: "#c9a84c" }} className="text-lg font-bold">✦</span>
  ) : (
    <span className="text-[#3a3530] text-lg">—</span>
  );
}

export default function CompareSection() {
  const compRef = useInView();

  return (
    <section
      id="compare"
      className="py-32 px-8"
      style={{ borderTop: "1px solid rgba(201,168,76,0.1)", background: "#0d0b09" }}
    >
      <div ref={compRef.ref} className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
          >
            ✦ &nbsp;Сравнение
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 600,
              color: "#e8e0d0",
              letterSpacing: "-0.02em",
            }}
          >
            YA VPN vs конкуренты
          </h2>
        </div>

        <div
          className="overflow-hidden transition-all duration-700"
          style={{
            border: "1px solid rgba(201,168,76,0.2)",
            opacity: compRef.visible ? 1 : 0,
            transform: compRef.visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-4 text-xs uppercase tracking-widest"
            style={{
              background: "linear-gradient(135deg, #1a1510, #120f0b)",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div className="px-8 py-5" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4a4037" }}>
              Функция
            </div>
            <div
              className="px-4 py-5 text-center"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
            >
              YA VPN
            </div>
            <div
              className="px-4 py-5 text-center"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4a4037" }}
            >
              OpenVPN
            </div>
            <div
              className="px-4 py-5 text-center"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4a4037" }}
            >
              WireGuard
            </div>
          </div>

          {COMPARE.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-4"
              style={{
                borderBottom: i < COMPARE.length - 1 ? "1px solid rgba(201,168,76,0.07)" : "none",
                background: i % 2 === 0 ? "rgba(201,168,76,0.02)" : "transparent",
              }}
            >
              <div
                className="px-8 py-4 text-sm"
                style={{ fontFamily: "'Golos Text', sans-serif", color: "#8a7d6e" }}
              >
                {row.feature}
              </div>
              <div className="px-4 py-4 text-center"><Check ok={row.ya} /></div>
              <div className="px-4 py-4 text-center"><Check ok={row.openvpn} /></div>
              <div className="px-4 py-4 text-center"><Check ok={row.wireguard} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
