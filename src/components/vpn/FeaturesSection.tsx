import Icon from "@/components/ui/icon";
import { useInView } from "./useInView";
import { FEATURES } from "./data";

export default function FeaturesSection() {
  const featRef = useInView();

  return (
    <section
      id="features"
      className="py-32 px-8"
      style={{ borderTop: "1px solid rgba(201,168,76,0.1)", background: "#0f0d0a" }}
    >
      <div ref={featRef.ref} className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
          >
            ✦ &nbsp;Преимущества
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
            Почему YA VPN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(201,168,76,0.08)" }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="p-8 transition-all duration-600"
              style={{
                background: "#0f0d0a",
                opacity: featRef.visible ? 1 : 0,
                transform: featRef.visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 90}ms`,
                transitionDuration: "600ms",
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center mb-6"
                style={{ border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <Icon name={f.icon} fallback="Shield" size={18} style={{ color: "#c9a84c" }} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#e8e0d0",
                }}
              >
                {f.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontSize: "0.875rem",
                  color: "#6a5d50",
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
