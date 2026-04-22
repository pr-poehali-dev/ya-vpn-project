import Icon from "@/components/ui/icon";
import { useInView } from "./useInView";

export default function DownloadSection() {
  const dlRef = useInView();

  return (
    <>
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
    </>
  );
}
