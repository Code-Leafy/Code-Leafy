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
    "hero-title": "Developer. Builder. Hobbyist at\u00a0scale.",
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
    "bots-title": "ربات‌های تلگرام",
    "bots-sub": "ربات‌های کوچک و متمرکز روی Cloudflare Workers.",
    "bot-shop-name": "ربات فروشگاه تلگرام",
    "bot-shop-tag": "ربات فروشگاه",
    "bot-price-name": "ربات قیمت تلگرام",
    "bot-price-tag": "ربات قیمت",
    "projects-title": "پروژه‌ها",
    "projects-sub": "مخازن متن‌باز، از جدیدترین.",
  },
};

const SWEEP_MS = 950;

let currentLang = "en";

function setLang(lang, { animate = false } = {}) {
  if (lang === currentLang && !animate) return;

  const strings = i18n[lang];
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.dataset.i18n;
    if (strings[key] != null) {
      if (key === "hero-title") {
        el.innerHTML = strings[key];
      } else {
        el.textContent = strings[key];
      }
    }
  }

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  for (const btn of document.querySelectorAll(".lang-btn")) {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  }

  currentLang = lang;
  renderProjects();
  try {
    localStorage.setItem("codeleafy-lang", lang);
  } catch (err) {}
}

function startSweep(targetLang) {
  const sweep = document.getElementById("sweep");
  const label = document.getElementById("sweep-label");

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !sweep) {
    setLang(targetLang, { animate: true });
    return;
  }

  const toFa = targetLang === "fa";
  label.textContent = toFa ? "فارسی" : "English";

  sweep.classList.remove("to-fa", "to-en", "is-running");
  void sweep.offsetWidth;
  sweep.classList.add("is-running", toFa ? "to-fa" : "to-en");

  setTimeout(() => setLang(targetLang, { animate: true }), SWEEP_MS * 0.47);

  setTimeout(() => {
    sweep.classList.remove("is-running", "to-fa", "to-en");
  }, SWEEP_MS + 80);
}

for (const btn of document.querySelectorAll(".lang-btn")) {
  btn.addEventListener("click", () => {
    const target = btn.dataset.lang;
    if (target !== currentLang) startSweep(target);
  });
}

function renderProjects() {
  const list = document.getElementById("project-list");
  list.replaceChildren();

  for (const p of projects) {
    const li = document.createElement("li");
    li.className = "project-row reveal";

    const a = document.createElement("a");
    a.href = p.url;
    a.target = "_blank";
    a.rel = "noopener";

    const name = document.createElement("span");
    name.className = "project-name";
    name.textContent = p.name;

    const desc = document.createElement("span");
    desc.className = "project-desc";
    desc.textContent = p.desc[currentLang];

    const meta = document.createElement("span");
    meta.className = "project-meta";

    const lang = document.createElement("span");
    const dot = document.createElement("span");
    dot.className = "lang-dot";
    dot.setAttribute("aria-hidden", "true");
    lang.appendChild(dot);
    lang.appendChild(document.createTextNode(p.lang));

    meta.appendChild(lang);

    if (p.stars > 0) {
      const stars = document.createElement("span");
      stars.textContent = `★ ${p.stars}`;
      meta.appendChild(stars);
    }

    a.append(name, desc, meta);
    li.appendChild(a);
    list.appendChild(li);
  }

  requestAnimationFrame(() => {
    for (const el of list.querySelectorAll(".reveal")) el.classList.add("is-visible");
  });
}

const revealables = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
  );
  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("is-visible"));
}

let saved = null;
try {
  saved = localStorage.getItem("codeleafy-lang");
} catch (err) {}
if (saved === "fa") {
  setLang("fa");
}
