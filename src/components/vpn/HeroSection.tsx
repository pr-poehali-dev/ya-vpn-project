import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--obsidian)" }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Central glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: "50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.09) 0%, rgba(201,168,76,0.03) 40%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />

      {/* Top horizontal line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 50%, transparent 100%)" }}
      />

      {/* Left vertical accent */}
      <div
        className="pointer-events-none absolute left-8 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.15) 30%, rgba(201,168,76,0.15) 70%, transparent 100%)" }}
      />

      {/* Floating orbs */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          right: "15%",
          top: "25%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          border: "1px solid rgba(201,168,76,0.06)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          right: "20%",
          top: "30%",
          width: "160px",
          height: "160px",
          border: "1px solid rgba(201,168,76,0.08)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-8 lg:px-16 pt-32 pb-20">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="animate-fade-in-up flex items-center gap-4 mb-12">
            <div className="w-8 h-px" style={{ background: "#c9a84c" }} />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "#c9a84c",
                letterSpacing: "0.45em",
                fontSize: "0.65rem",
                fontWeight: 500,
              }}
            >
              ПРЕМИАЛЬНЫЙ VPN
            </span>
            <div className="w-8 h-px" style={{ background: "rgba(201,168,76,0.3)" }} />
            <span
              className="inline-flex items-center gap-2 px-3 py-1"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                background: "rgba(34,197,94,0.07)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "#4ade80",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              БЕСПЛАТНО
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up delay-100 mb-8"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(4rem, 11vw, 9.5rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            Свобода
            <br />
            <em
              className="gold-shimmer"
              style={{ fontStyle: "italic", fontWeight: 400 }}
            >
              без границ.
            </em>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-in-up delay-200 mb-14 leading-relaxed"
            style={{
              fontFamily: "'Golos Text', sans-serif",
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              maxWidth: "480px",
              lineHeight: 1.75,
            }}
          >
            YA VPN на базе протокола V2Ray — обходит любые блокировки там,
            где другие сервисы отказывают. Код подключения даёт Ярослав лично.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-xs uppercase tracking-widest transition-all duration-400 group"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
                backgroundSize: "200% auto",
                color: "#0a0804",
                fontWeight: 500,
                letterSpacing: "0.2em",
                boxShadow: "0 0 40px rgba(201,168,76,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "right center";
                e.currentTarget.style.boxShadow = "0 0 60px rgba(201,168,76,0.35), inset 0 1px 0 rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "left center";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(201,168,76,0.2), inset 0 1px 0 rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Icon name="Download" size={14} />
              Скачать для Android
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-xs uppercase tracking-widest transition-all duration-300"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "var(--text-muted)",
                letterSpacing: "0.2em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                e.currentTarget.style.color = "#c9a84c";
                e.currentTarget.style.background = "rgba(201,168,76,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Узнать больше
              <Icon name="ArrowDown" size={14} />
            </a>
          </div>

          {/* Stats row */}
          <div
            className="animate-fade-in-up delay-500 mt-24 pt-10 grid grid-cols-3 gap-10"
            style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
          >
            {[
              { num: "256", unit: "bit", label: "Шифрование" },
              { num: "0", unit: "₽", label: "Стоимость" },
              { num: "∞", unit: "", label: "Устройств" },
            ].map((s) => (
              <div key={s.label} className="group">
                <div className="flex items-end gap-1 mb-2">
                  <span
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 300,
                      color: "#c9a84c",
                      lineHeight: 1,
                      transition: "color 0.3s",
                    }}
                  >
                    {s.num}
                  </span>
                  {s.unit && (
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.7rem",
                        color: "rgba(201,168,76,0.5)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {s.unit}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "var(--text-faint)",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 50%, transparent 100%)" }}
      />
    </section>
  );
}
