import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-8 overflow-hidden">
      {/* Gold radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Decorative lines */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="animate-fade-in-up flex flex-wrap items-center gap-3 mb-8">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
          >
            ✦ &nbsp;Премиальный VPN &nbsp;✦
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#4ade80",
            }}
          >
            🆓 Бесплатно
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              color: "#8a7d6e",
            }}
          >
            🎮 Партнёр Роблик
          </span>
        </div>

        <h1
          className="animate-fade-in-up delay-100 mb-6"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#e8e0d0",
          }}
        >
          Свобода
          <br />
          <em style={{ color: "#c9a84c", fontStyle: "italic" }}>без границ.</em>
        </h1>

        <p
          className="animate-fade-in-up delay-200 max-w-lg mb-12 leading-relaxed"
          style={{
            fontFamily: "'Golos Text', sans-serif",
            fontSize: "1rem",
            color: "#8a7d6e",
          }}
        >
          YA VPN на базе протокола V2Ray — партнёр Роблик. Ускоряет Roblox,
          обходит блокировки и работает там, где другие сервисы отказывают. Бесплатно.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <a
            href="#download"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300"
            style={{
              fontFamily: "'Golos Text', sans-serif",
              background: "linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)",
              color: "#0d0b09",
              letterSpacing: "0.12em",
            }}
          >
            <Icon name="Download" size={16} />
            Скачать для Android
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
            style={{
              fontFamily: "'Golos Text', sans-serif",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#8a7d6e",
              letterSpacing: "0.12em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
          >
            Узнать больше
            <Icon name="ArrowDown" size={16} />
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-24 pt-10 grid grid-cols-3 gap-8 animate-fade-in-up delay-400"
          style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
        >
          {[
            { num: "256-bit", label: "Шифрование" },
            { num: "0₽", label: "Стоимость" },
            { num: "∞", label: "Устройств" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  color: "#c9a84c",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                className="mt-2 uppercase tracking-widest text-xs"
                style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4a4037" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}