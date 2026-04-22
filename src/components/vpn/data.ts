export const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Преимущества", href: "#features" },
  { label: "Сравнение", href: "#compare" },
  { label: "Скачать", href: "#download" },
];

export const FEATURES = [
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

export const COMPARE = [
  { feature: "Обход DPI", ya: true, openvpn: false, wireguard: false },
  { feature: "Маскировка трафика", ya: true, openvpn: false, wireguard: false },
  { feature: "Работа в России / Китае", ya: true, openvpn: false, wireguard: false },
  { feature: "Высокая скорость", ya: true, openvpn: false, wireguard: true },
  { feature: "Устойчивость к блокировке", ya: true, openvpn: false, wireguard: false },
  { feature: "Мобильное приложение", ya: true, openvpn: true, wireguard: true },
  { feature: "Нет журналов", ya: true, openvpn: false, wireguard: true },
  { feature: "Открытый исходный код", ya: true, openvpn: true, wireguard: true },
];
