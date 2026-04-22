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

  const handleApply = () => { setStage("loading"); };
  const handleClose = () => { setStage("idle"); setElapsed(0); };
  const submitted = stage === "done";

  const steps = [
    { n: "01", title: "Скачай приложение", desc: "Найди v2rayNG в Google Play и установи на устройство" },
    { n: "02", title: "Получи код", desc: "Напиши Ярославу — он пришлёт персональный конфигурационный код" },
    { n: "03", title: "Подключись", desc: "Вставь код в приложение, нажми подключить — готово" },
  ];

  return (
    <>
      {/* DOWNLOAD */}
      <section
        id="download"
        className="py-36 relative overflow-hidden"
        style={{
          background: "var(--obsidian-2)",
          borderTop: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        {/* Glow */}
        <div
          className="pointer-events-none absolute"
          style={{
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse at bottom, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />

        <div ref={dlRef.ref} className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div
            className="transition-all duration-700"
            style={{
              opacity: dlRef.visible ? 1 : 0,
              transform: dlRef.visible ? "translateY(0)" : "translateY(32px)",
            }}
          >
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
                  ПОДКЛЮЧЕНИЕ
                </span>
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                Начни прямо<br />
                <em style={{ fontStyle: "italic", color: "#c9a84c", fontWeight: 400 }}>сейчас</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  maxWidth: "440px",
                  lineHeight: 1.75,
                }}
              >
                Скачай приложение V2Ray, получи персональный код у Ярослава.
                Всё готово за две минуты.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-16" style={{ background: "rgba(201,168,76,0.06)" }}>
              {steps.map((step, i) => (
                <div
                  key={step.n}
                  className="group relative p-10 overflow-hidden transition-all duration-400"
                  style={{ background: "var(--obsidian-2)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--obsidian-2)"; }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
                  />
                  <div
                    className="mb-8"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "4.5rem",
                      fontWeight: 300,
                      color: "rgba(201,168,76,0.12)",
                      lineHeight: 1,
                      transition: "color 0.4s",
                    }}
                  >
                    {step.n}
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <div
                    className="w-6 h-px mb-4 group-hover:w-12 transition-all duration-400"
                    style={{ background: "rgba(201,168,76,0.3)" }}
                  />
                  <p
                    style={{
                      fontFamily: "'Golos Text', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://play.google.com/store/search?q=v2rayng&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 text-xs uppercase tracking-widest transition-all duration-300"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
                  backgroundSize: "200% auto",
                  color: "#0a0804",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  boxShadow: "0 0 40px rgba(201,168,76,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "right center";
                  e.currentTarget.style.boxShadow = "0 0 60px rgba(201,168,76,0.35)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "left center";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(201,168,76,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon name="Download" size={14} />
                Скачать v2rayNG
              </a>

              <button
                onClick={handleApply}
                className="inline-flex items-center gap-3 px-10 py-4 text-xs uppercase tracking-widest transition-all duration-300"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: "#c9a84c",
                  letterSpacing: "0.2em",
                  background: "rgba(201,168,76,0.03)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.55)";
                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(201,168,76,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                  e.currentTarget.style.background = "rgba(201,168,76,0.03)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon name="Send" size={14} />
                Подать заявку
              </button>
            </div>

            <p
              className="mt-8"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "var(--text-faint)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              ✦ &nbsp; Персональный код — у Ярослава
            </p>

            {/* Loading overlay */}
            {stage === "loading" && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center px-6"
                style={{ background: "rgba(5,4,3,0.97)", backdropFilter: "blur(24px)" }}
              >
                <div
                  className="relative max-w-sm w-full p-14 text-center"
                  style={{
                    border: "1px solid rgba(201,168,76,0.15)",
                    background: "var(--surface)",
                    boxShadow: "0 0 80px rgba(201,168,76,0.06)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
                  />

                  <p
                    className="text-xs tracking-[0.45em] uppercase mb-12 relative z-10"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--text-faint)" }}
                  >
                    Обработка заявки
                  </p>

                  <div className="flex items-center justify-center gap-4 mb-12">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: "#c9a84c",
                          animation: `pulse-dot 1.4s ease-in-out ${i * 0.35}s infinite`,
                        }}
                      />
                    ))}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "2.2rem",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Отправлено на<br />
                    <em style={{ fontStyle: "italic", color: "#c9a84c", fontWeight: 400 }}>рассмотрение</em>
                  </h3>
                </div>
              </div>
            )}

            {/* Done overlay */}
            {submitted && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center px-6"
                style={{ background: "rgba(5,4,3,0.97)", backdropFilter: "blur(24px)" }}
                onClick={handleClose}
              >
                <div
                  className="relative max-w-md w-full p-14 text-center"
                  style={{
                    border: "1px solid rgba(201,168,76,0.18)",
                    background: "var(--surface)",
                    boxShadow: "0 0 100px rgba(201,168,76,0.08)",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
                  />

                  <div
                    className="w-16 h-16 mx-auto mb-10 flex items-center justify-center relative z-10"
                    style={{
                      border: "1px solid rgba(201,168,76,0.25)",
                      background: "rgba(201,168,76,0.06)",
                      boxShadow: "0 0 30px rgba(201,168,76,0.1)",
                    }}
                  >
                    <Icon name="CheckCheck" size={24} style={{ color: "#c9a84c" }} />
                  </div>

                  <p
                    className="text-xs tracking-[0.45em] uppercase mb-5 relative z-10"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#c9a84c" }}
                  >
                    Заявка принята
                  </p>

                  <h3
                    className="mb-6 relative z-10"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "2.8rem",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.05,
                    }}
                  >
                    Передано<br />
                    <em style={{ fontStyle: "italic", color: "#c9a84c", fontWeight: 400 }}>Ярославу</em>
                  </h3>

                  <div className="gold-divider mb-6 relative z-10" />

                  <p
                    className="mb-10 relative z-10"
                    style={{
                      fontFamily: "'Golos Text', sans-serif",
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    Позвоните ему — он выдаст персональный код подключения.
                  </p>

                  <button
                    onClick={handleClose}
                    className="text-xs uppercase tracking-widest px-8 py-3 transition-all duration-300 relative z-10"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      border: "1px solid rgba(201,168,76,0.15)",
                      color: "var(--text-faint)",
                      background: "transparent",
                      cursor: "pointer",
                      letterSpacing: "0.25em",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                      e.currentTarget.style.color = "#c9a84c";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
                      e.currentTarget.style.color = "var(--text-faint)";
                    }}
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
        className="py-12 px-8"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.08)",
          background: "var(--obsidian)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-px h-5" style={{ background: "linear-gradient(180deg, transparent, #c9a84c, transparent)" }} />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "#c9a84c",
                letterSpacing: "0.4em",
                fontSize: "0.7rem",
              }}
            >
              YA VPN
            </span>
            <div className="w-px h-5" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
          </div>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--text-faint)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Powered by V2Ray &nbsp;✦&nbsp; Код даёт Ярослав
          </span>
        </div>
      </footer>
    </>
  );
}
