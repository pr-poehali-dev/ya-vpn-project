import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Преимущества", href: "#features" },
  { label: "Сравнение", href: "#compare" },
  { label: "Скачать", href: "#download" },
];

const FEATURES = [
  {
    icon: "Shield",
    title: "Максимальная защита",
    desc: "Протокол V2Ray шифрует весь трафик по военным стандартам. Ваши данные недоступны ни для кого.",
  },
  {
    icon: "Zap",
    title: "Высокая скорость",
    desc: "Минимальные задержки. Стриминг 4K, онлайн-игры и работа — без торможений.",
  },
  {
    icon: "EyeOff",
    title: "Полная анонимность",
    desc: "Нулевые журналы активности. Ваш реальный IP-адрес надёжно скрыт от любых глаз.",
  },
  {
    icon: "Globe",
    title: "Обход блокировок",
    desc: "V2Ray обходит глубокую инспекцию пакетов (DPI). Работает там, где другие VPN бессильны.",
  },
  {
    icon: "Settings",
    title: "Гибкая настройка",
    desc: "Многоуровневая маршрутизация, несколько протоколов и тонкая подстройка под любые задачи.",
  },
  {
    icon: "Smartphone",
    title: "Все устройства",
    desc: "Android, iOS, Windows, macOS, Linux. Один аккаунт — неограниченное число устройств.",
  },
];

const COMPARE = [
  { feature: "Обход DPI", ya: true, openvpn: false, wireguard: false },
  { feature: "Маскировка трафика", ya: true, openvpn: false, wireguard: false },
  { feature: "Работа в России / Китае", ya: true, openvpn: false, wireguard: false },
  { feature: "Высокая скорость", ya: true, openvpn: false, wireguard: true },
  { feature: "Устойчивость к блокировке", ya: true, openvpn: false, wireguard: false },
  { feature: "Мобильное приложение", ya: true, openvpn: true, wireguard: true },
  { feature: "Нет журналов", ya: true, openvpn: false, wireguard: true },
  { feature: "Открытый исходный код", ya: true, openvpn: true, wireguard: true },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span style={{ color: "#c9a84c" }} className="text-lg font-bold">✦</span>
  ) : (
    <span className="text-[#3a3530] text-lg">—</span>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const featRef = useInView();
  const compRef = useInView();
  const dlRef = useInView();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0d0b09", color: "#e8e0d0" }}>

      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* NAV */}
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

      {/* HERO */}
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
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs tracking-[0.4em] uppercase mb-8"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
            >
              ✦ &nbsp;Премиальный VPN &nbsp;✦
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
            YA VPN на базе протокола V2Ray — обходит любые блокировки там, где другие сервисы
            отказывают. Код подключения даёт Ярослав лично.
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
              { num: "0", label: "Журналов" },
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

      {/* FEATURES */}
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

      {/* COMPARE */}
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

      {/* DOWNLOAD */}
      <section
        id="download"
        className="py-32 px-8 relative overflow-hidden"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
          background: "#0f0d0a",
        }}
      >
        {/* Gold glow bottom */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse at bottom, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />

        <div ref={dlRef.ref} className="max-w-6xl mx-auto relative z-10">
          <div
            className="transition-all duration-700"
            style={{
              opacity: dlRef.visible ? 1 : 0,
              transform: dlRef.visible ? "translateY(0)" : "translateY(32px)",
            }}
          >
            <span
              className="inline-block text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
            >
              ✦ &nbsp;Скачивание
            </span>
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 600,
                color: "#e8e0d0",
                letterSpacing: "-0.02em",
              }}
            >
              Начни прямо сейчас
            </h2>
            <p
              className="mb-16 max-w-lg leading-relaxed"
              style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "1rem", color: "#6a5d50" }}
            >
              Скачай приложение V2Ray из Google Play, установи и получи персональный код у Ярослава.
              Всё готово за две минуты.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { n: "I", title: "Скачай приложение", desc: "Найди v2rayNG в Google Play и установи на устройство" },
                { n: "II", title: "Получи код", desc: "Напиши Ярославу — он пришлёт персональный конфигурационный код" },
                { n: "III", title: "Подключись", desc: "Вставь код в приложение, нажми подключить — готово" },
              ].map((step) => (
                <div
                  key={step.n}
                  className="p-8 relative"
                  style={{ border: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <div
                    className="mb-6"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "3rem",
                      fontWeight: 600,
                      color: "rgba(201,168,76,0.25)",
                      lineHeight: 1,
                    }}
                  >
                    {step.n}
                  </div>
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#e8e0d0",
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "0.875rem", color: "#5a4f44" }}
                  >
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://play.google.com/store/search?q=v2rayng&c=apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Golos Text', sans-serif",
                background: "linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)",
                color: "#0d0b09",
                letterSpacing: "0.12em",
              }}
            >
              <Icon name="Download" size={18} />
              Скачать v2rayNG в Google Play
            </a>

            <p
              className="mt-8 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3a3025" }}
            >
              Персональный код — у Ярослава
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-8"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)", background: "#080705" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="tracking-[0.3em] uppercase text-sm"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
          >
            YA VPN
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3a3025" }}
          >
            Powered by V2Ray &nbsp;✦&nbsp; Код даёт Ярослав
          </span>
        </div>
      </footer>
    </div>
  );
}
