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
    desc: "Протокол V2Ray шифрует весь трафик с помощью современных алгоритмов. Ваши данные недоступны для посторонних.",
  },
  {
    icon: "Zap",
    title: "Высокая скорость",
    desc: "Оптимизированный протокол обеспечивает минимальные задержки. Стриминг, игры и работа без замедлений.",
  },
  {
    icon: "EyeOff",
    title: "Полная анонимность",
    desc: "Нет журналов активности. Ваш реальный IP-адрес надёжно скрыт от любых наблюдателей.",
  },
  {
    icon: "Globe",
    title: "Обход блокировок",
    desc: "V2Ray разработан специально для обхода глубокой инспекции пакетов (DPI). Работает там, где другие VPN не справляются.",
  },
  {
    icon: "Settings",
    title: "Гибкая настройка",
    desc: "Многоуровневая маршрутизация трафика, поддержка нескольких протоколов и тонкая настройка под любые задачи.",
  },
  {
    icon: "Smartphone",
    title: "Все устройства",
    desc: "Android, iOS, Windows, macOS, Linux. Один аккаунт — неограниченное количество устройств.",
  },
];

const COMPARE = [
  { feature: "Обход DPI", v2ray: true, openvpn: false, wireguard: false },
  { feature: "Маскировка трафика", v2ray: true, openvpn: false, wireguard: false },
  { feature: "Работа в России/Китае", v2ray: true, openvpn: false, wireguard: false },
  { feature: "Высокая скорость", v2ray: true, openvpn: false, wireguard: true },
  { feature: "Устойчивость к блокировке", v2ray: true, openvpn: false, wireguard: false },
  { feature: "Мобильное приложение", v2ray: true, openvpn: true, wireguard: true },
  { feature: "Нет журналов", v2ray: true, openvpn: false, wireguard: true },
  { feature: "Открытый исходный код", v2ray: true, openvpn: true, wireguard: true },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="text-emerald-600 font-medium text-base">✓</span>
  ) : (
    <span className="text-zinc-300 text-base">—</span>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const featRef = useInView();
  const compRef = useInView();
  const dlRef = useInView();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#111]">

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7f6f3]/95 backdrop-blur border-b border-zinc-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-['IBM_Plex_Mono',monospace] font-medium text-sm tracking-widest uppercase text-zinc-800">
            FA<span className="text-orange-500">VPN</span>
          </span>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#download"
            className="text-xs font-semibold bg-zinc-900 text-white px-4 py-2 hover:bg-zinc-700 transition-colors duration-200 rounded-sm"
          >
            Скачать
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-orange-500 uppercase">
              Протокол V2Ray
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black leading-[1.05] text-zinc-900 mt-4 mb-8 animate-fade-in-up delay-100"
            style={{ letterSpacing: "-0.03em" }}
          >
            Свобода в&nbsp;сети.
            <br />
            <span className="text-orange-500">Без компромиссов.</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl mb-10 leading-relaxed animate-fade-in-up delay-200">
            FA VPN на базе V2Ray — следующее поколение VPN-протоколов. Обходит блокировки,
            где другие сервисы отказывают. Код даёт Ярослав.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 text-sm font-semibold hover:bg-zinc-700 transition-colors duration-200 rounded-sm"
            >
              <Icon name="Download" size={16} />
              Скачать для Android
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 px-8 py-4 text-sm font-medium hover:border-zinc-500 transition-colors duration-200 rounded-sm"
            >
              Узнать больше
              <Icon name="ArrowDown" size={16} />
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-zinc-200 grid grid-cols-3 gap-8 animate-fade-in-up delay-400">
            {[
              { num: "256-bit", label: "Шифрование" },
              { num: "0", label: "Журналов" },
              { num: "∞", label: "Устройств" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-['IBM_Plex_Mono',monospace] text-2xl font-bold text-zinc-900">
                  {s.num}
                </div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 bg-white border-t border-zinc-100">
        <div ref={featRef.ref} className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-orange-500 uppercase">
              Преимущества
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-zinc-900 mt-3 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Почему V2Ray лучше
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`bg-white p-8 transition-all duration-500 ${
                  featRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 mb-5 rounded-sm">
                  <Icon name={f.icon} fallback="Shield" size={18} className="text-orange-500" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2 text-base">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="py-24 px-6 bg-[#f7f6f3] border-t border-zinc-100">
        <div ref={compRef.ref} className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-orange-500 uppercase">
              Сравнение
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-zinc-900 mt-3 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              V2Ray vs конкуренты
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              Объективное сравнение с популярными протоколами
            </p>
          </div>

          <div
            className={`border border-zinc-200 bg-white overflow-hidden rounded-sm transition-all duration-700 ${
              compRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-4 bg-zinc-900 text-white text-xs font-medium uppercase tracking-wider">
              <div className="px-6 py-4 col-span-1">Функция</div>
              <div className="px-4 py-4 text-center text-orange-400">FA VPN / V2Ray</div>
              <div className="px-4 py-4 text-center text-zinc-400">OpenVPN</div>
              <div className="px-4 py-4 text-center text-zinc-400">WireGuard</div>
            </div>

            {COMPARE.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 border-t border-zinc-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-zinc-50"
                }`}
              >
                <div className="px-6 py-4 text-sm text-zinc-700 font-medium">{row.feature}</div>
                <div className="px-4 py-4 text-center">
                  <Check ok={row.v2ray} />
                </div>
                <div className="px-4 py-4 text-center">
                  <Check ok={row.openvpn} />
                </div>
                <div className="px-4 py-4 text-center">
                  <Check ok={row.wireguard} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-24 px-6 bg-zinc-900 text-white">
        <div ref={dlRef.ref} className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              dlRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-orange-400 uppercase">
              Скачивание
            </span>
            <h2
              className="text-3xl md:text-5xl font-black mt-3 mb-4 tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Начни прямо сейчас
            </h2>
            <p className="text-zinc-400 text-base mb-12 max-w-lg leading-relaxed">
              Скачай приложение V2Ray из Google Play, установи и&nbsp;получи код у&nbsp;Ярослава —
              всё готово за 2 минуты.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  n: "01",
                  title: "Скачай приложение",
                  desc: "Найди v2rayNG в Google Play и установи",
                },
                {
                  n: "02",
                  title: "Получи код",
                  desc: "Напиши Ярославу — он пришлёт конфигурационный код",
                },
                {
                  n: "03",
                  title: "Подключись",
                  desc: "Вставь код в приложение и нажми подключить",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="border border-zinc-700 p-6 rounded-sm"
                >
                  <div className="font-['IBM_Plex_Mono',monospace] text-3xl font-bold text-zinc-700 mb-4">
                    {step.n}
                  </div>
                  <div className="font-semibold text-white mb-1">{step.title}</div>
                  <div className="text-sm text-zinc-400">{step.desc}</div>
                </div>
              ))}
            </div>

            <a
              href="https://play.google.com/store/search?q=v2rayng&c=apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 text-sm font-semibold hover:bg-orange-400 transition-colors duration-200 rounded-sm"
            >
              <Icon name="Download" size={18} />
              Скачать v2rayNG в Google Play
            </a>

            <p className="mt-6 text-xs text-zinc-600 font-['IBM_Plex_Mono',monospace]">
              После установки — свяжись с Ярославом для получения кода подключения
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-zinc-600 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-['IBM_Plex_Mono',monospace]">
          <span className="text-zinc-500">
            FA<span className="text-orange-500">VPN</span> — на базе V2Ray
          </span>
          <span>Код даёт Ярослав</span>
        </div>
      </footer>
    </div>
  );
}