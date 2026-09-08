document.documentElement.classList.add("js");

const projects = [
  {
    name: "Hydro",
    desc: {
      en: "Single-file YouTube & media downloader for Google Colab with a free Cloudflare tunnel.",
      fa: "دانلودر تک‌فایلی ویدیو و مدیا برای Google Colab با تونل رایگان Cloudflare.",
    },
    lang: "Python",
    stars: 0,
    url: "https://github.com/Code-Leafy/hydro",
  },
  {
    name: "G2Leafy",
    desc: {
      en: "Web dashboard for managing Xray VLESS xHTTP configs on GitHub Codespaces.",
      fa: "داشبورد وب برای مدیریت کانفیگ‌های Xray VLESS xHTTP روی GitHub Codespaces.",
    },
    lang: "Python",
    stars: 206,
    url: "https://github.com/Code-Leafy/G2Leafy",
  },
  {
    name: "OpenGui",
    desc: {
      en: "Native Windows desktop client for OpenConnect VPNs, built with Tauri 2.",
      fa: "کلاینت دسکتاپ بومی ویندوز برای VPN های OpenConnect، ساخته‌شده با Tauri 2.",
    },
    lang: "Rust",
    stars: 0,
    url: "https://github.com/Code-Leafy/OpenGui",
  },
  {
    name: "SparkDns",
    desc: {
      en: "Cross-platform DNS management desktop app built with Tauri 2.",
      fa: "اپ دسکتاپ مدیریت DNS برای همه پلتفرم‌ها با Tauri 2.",
    },
    lang: "Rust",
    stars: 1,
    url: "https://github.com/Code-Leafy/SparkDns",
  },
  {
    name: "NetLeafyScanner",
    desc: {
      en: "Massively parallel IP/SNI discovery and real-proxy speed tester for VLESS & Trojan configs.",
      fa: "کشف موازی IP/SNI و تست سرعت پروکسی واقعی برای کانفیگ‌های VLESS و Trojan.",
    },
    lang: "Python",
    stars: 13,
    url: "https://github.com/Code-Leafy/NetLeafyScanner",
  },
  {
    name: "SshTunnel",
    desc: {
      en: "One-command, optimized SOCKS5 proxy panel with TCP tuning for any VPS.",
      fa: "پنل SOCKS5 یک‌دستوری و بهینه‌شده با تنظیمات TCP برای هر VPS.",
    },
    lang: "Python",
    stars: 2,
    url: "https://github.com/Code-Leafy/SshTunnel",
  },
  {
    name: "NetLeafy",
    desc: {
      en: "Client-side VLESS-over-xHTTP configuration generator for bypassing network restrictions.",
      fa: "تولیدکننده کانفیگ VLESS روی xHTTP سمت کلاینت برای عبور از محدودیت‌های شبکه.",
    },
    lang: "HTML",
    stars: 26,
    url: "https://github.com/Code-Leafy/NetLeafy",
  },
];

const i18n = {
  en: {
    "nav-bots": "Bots",
    "nav-projects": "Projects",
    "nav-github": "GitHub",
    "hero-eyebrow": "open-source · networking · desktop apps · bots",
    "hero-title": "Developer. Builder. Hobbyist at scale.",
    "hero-sub":
      "Networking tools, desktop apps, and Telegram bots — Rust, Python, and TypeScript under the hood, built to be demoed.",
    "hero-cta": "See the work ↓",
    "bots-title": "Telegram bots",
    "bots-sub": "Small, focused bots running on Cloudflare Workers.",
    "bot-shop-name": "Telegram Shop Bot",
    "bot-shop-tag": "Shop bot",
    "bot-price-name": "Telegram Price Bot",
    "bot-price-tag": "Price bot",
    "projects-title": "Projects",
    "projects-sub": "Open-source repos, newest first.",
  },
  fa: {
    "nav-bots": "ربات‌ها",
    "nav-projects": "پروژه‌ها",
    "nav-github": "گیت‌هاب",
    "hero-eyebrow": "متن‌باز · شبکه · اپ دسکتاپ · ربات",
    "hero-title": "توسعه‌دهنده. سازنده. علاقه‌مند در مقیاس بزرگ.",
    "hero-sub":
      "ابزارهای شبکه، اپ‌های دسکتاپ و ربات‌های تلگرام — با راست، پایتون و تایپ‌اسکریپت زیر کاپوت، آماده برای دمو.",
    "hero-cta": "مشاهده کارها ↓",
    "bots-title": "
