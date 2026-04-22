import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "./useInView";

export default function DownloadSection() {
  const dlRef = useInView();
  const [stage, setStage] = useState<"idle" | "loading" | "done">("idle");
  const [elapsed, setElapsed] = useState(0);
  const DURATION = 10;

  useEffect(() => {
    if (stage !== "loading") return;
    setElapsed(0);
    const tick = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= DURATION) {
          clearInterval(tick);
          setTimeout(() => setStage("done"), 300);
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [stage]);

  const handleApply = () => {
    setStage("loading");
  };

  const handleClose = () => {
    setStage("idle");
    setElapsed(0);
  };

  const submitted = stage === "done";

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

            <div className="flex flex-col sm:flex-row gap-4 items-start">
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

              <button
                onClick={handleApply}
                className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  letterSpacing: "0.12em",
                  background: "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
              >
                <Icon name="Send" size={18} />
                Подать заявку
              </button>
            </div>

            <p
              className="mt-8 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3a3025" }}
            >
              Персональный код — у Ярослава
            </p>

            {/* Loading overlay */}
            {stage === "loading" && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center px-6"
                style={{ background: "rgba(8,7,5,0.95)", backdropFilter: "blur(20px)" }}
              >
                <div
                  className="relative max-w-sm w-full p-12 text-center"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", background: "#0f0d0a" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)",
                    }}
                  />

                  <p
                    className="text-xs tracking-[0.4em] uppercase mb-10 relative z-10"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4a4037" }}
                  >
                    ✦ &nbsp;Обработка заявки
                  </p>

                  {/* Dots animation */}
                  <div className="flex items-center justify-center gap-3 mb-10">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: "#c9a84c",
                          animation: `pulse 1.2s ease-in-out ${i * 0.4}s infinite`,
                          opacity: 0.3,
                        }}
                      />
                    ))}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "#e8e0d0",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Читают операторы
                  </h3>
                  <p
                    style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "0.85rem", color: "#4a4037" }}
                  >
                    Ваша заявка на рассмотрении...
                  </p>

                  {/* Timer bar */}
                  <div
                    className="mt-8 h-px w-full overflow-hidden"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <div
                      className="h-full"
                      style={{
                        background: "linear-gradient(90deg, #c9a84c, #e8c97a)",
                        width: `${(elapsed / DURATION) * 100}%`,
                        transition: "width 0.9s linear",
                      }}
                    />
                  </div>
                  <p
                    className="mt-3 text-xs"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#3a3025" }}
                  >
                    {DURATION - elapsed} сек
                  </p>
                </div>
              </div>
            )}

            {/* Confirmation overlay */}
            {submitted && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center px-6"
                style={{ background: "rgba(8,7,5,0.92)", backdropFilter: "blur(20px)" }}
                onClick={handleClose}
              >
                <div
                  className="relative max-w-md w-full p-12 text-center"
                  style={{ border: "1px solid rgba(201,168,76,0.25)", background: "#0f0d0a" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Gold glow */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
                    }}
                  />

                  <div
                    className="w-16 h-16 mx-auto mb-8 flex items-center justify-center"
                    style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <Icon name="CheckCheck" size={28} style={{ color: "#c9a84c" }} />
                  </div>

                  <p
                    className="text-xs tracking-[0.4em] uppercase mb-4"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
                  >
                    ✦ &nbsp;Заявка принята
                  </p>

                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      color: "#e8e0d0",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    Передано Ярославу
                  </h3>

                  <p
                    className="mb-10 leading-relaxed"
                    style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "0.9rem", color: "#6a5d50" }}
                  >
                    Ярослав получил вашу заявку и&nbsp;свяжется с&nbsp;вами в&nbsp;ближайшее время.
                    Ожидайте персональный код подключения.
                  </p>

                  <button
                    onClick={handleClose}
                    className="text-xs uppercase tracking-widest px-8 py-3 transition-all duration-200"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "#4a4037",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            )}
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