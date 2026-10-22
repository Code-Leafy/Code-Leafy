document.documentElement.classList.add("js");

/* =========================================================
   CodeLeafy — content, motion & interactions
   ========================================================= */

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

let projects = [
  {
    name: "Canval",
    desc: {
      en: "Infinite canvas for real PTY-backed CLI terminals, notes, and agent workflows on Windows.",
      fa: "بوم بی‌نهایت برای ترمینال‌های واقعی مبتنی بر PTY، یادداشت‌ها و گردش کار عامل‌ها روی ویندوز.",
    },
    lang: "HTML",
    stars: 8,
    url: "https://github.com/Code-Leafy/Canval",
  },
  {
    name: "Hydro",
    desc: {
      en: "Single-file YouTube & media downloader for Google Colab with a free Cloudflare tunnel.",
      fa: "دانلودر تک‌فایلی ویدیو و رسانه برای Google Colab با تونل رایگان Cloudflare.",
    },
    lang: "Python",
    stars: 0,
    url: "https://github.com/Code-Leafy/Hydro",
  },
  {
    name: "V2Leafy",
    desc: {
      en: "Web dashboard for managing an Xray VLESS gateway on GitHub Codespaces and Railway.",
      fa: "داشبورد وب برای مدیریت یک دروازه Xray VLESS روی GitHub Codespaces و Railway.",
    },
    lang: "Python",
    stars: 212,
    url: "https://github.com/Code-Leafy/V2Leafy",
  },
  {
    name: "OpenGui",
    desc: {
      en: "Native Windows desktop client for OpenConnect VPNs, built with Tauri 2.",
      fa: "کلاینت دسکتاپ بومی ویندوز برای VPNهای OpenConnect، ساخته‌شده با Tauri 2.",
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
    stars: 25,
    url: "https://github.com/Code-Leafy/NetLeafy",
  },
];

const i18n = {
  en: {
    skip: "Skip to content",
    "nav-bots": "Bots",
    "nav-projects": "Projects",
    "nav-about": "About",
    "nav-contact": "Contact",
    "menu-open": "Open menu",
    "menu-close": "Close menu",
    "menu-github": "Find me on GitHub",
    "menu-note": "Open source · Networking · Desktop · Bots",
    status: "Open source · always shipping",
    "hero-title-1": "Developer.",
    "hero-title-2": "Builder.",
    "hero-title-3": "Hobbyist at scale.",
    "hero-sub":
      "I make networking tools, desktop apps, and Telegram bots — engineered in Rust, Python & TypeScript, and built to be used.",
    "hero-cta": "Explore the work",
    "stat-projects": "projects",
    "stat-stars": "stars earned",
    "stat-bots": "live bots",
    "stage-live": "Interactive demos",
    "stage-pause": "Pause",
    "stage-play": "Play",
    "stage-label": "Interactive product demos",
    "phone-1": "Bring demo 01, the shop bot, forward",
    "phone-2": "Bring demo 02, the price bot, forward",
    "phone-3": "Bring demo 03, the lab, forward",
    "demo-1": "Shop bot",
    "demo-2": "Price bot",
    "demo-3": "The lab",
    scroll: "Scroll to explore",
    "bots-kicker": "01 — In the wild",
    "bots-title-a": "Bots that get things",
    "bots-title-b": "done.",
    "bots-sub":
      "Small, focused Telegram automations running serverless on Cloudflare's edge. Open a chat — no install, no friction.",
    "bot-shop-name": "Telegram Shop Bot",
    "bot-shop-desc":
      "A complete storefront inside Telegram — browse the catalogue, fill a cart, check out, and manage everything from a public admin panel.",
    "bot-price-name": "Telegram Price Bot",
    "bot-price-desc":
      "Live gold, dollar, euro, pound, and oil prices with direction indicators — one tap, always current, no chart-reading required.",
    "bot-chat-name": "Telegram Chat Bot",
    "bot-chat-desc":
      "Anonymous chat matching in Persian and English — find a partner randomly, by GPS, by province, or by gender filter, with coins and age filters built in.",
    "bot-open": "Open in Telegram",
    "bot-watch": "Watch demo",
    "bot-lab-kicker": "Next up",
    "bot-lab-title": "Your idea, shipped.",
    "bot-lab-desc":
      "I build custom bots and automations. If it fits in a chat, it can probably be built.",
    "bot-lab-cta": "Start a conversation on GitHub",
    "projects-kicker": "02 — Open source",
    "projects-title-a": "Things I've",
    "projects-title-b": "shipped.",
    "projects-sub": "Repos you can read, run, and build on. Newest work first.",
    "projects-all": "View all on GitHub",
    "about-kicker": "03 — Behind the leaf",
    "about-title-a": "A one-person studio",
    "about-title-b": "for the web, the desktop & the terminal.",
    "about-lead":
      "I'm CodeLeafy — a developer and relentless tinkerer. I build small, sharp tools for problems I actually have: faster networks, calmer desktops, and bots that save people a few taps.",
    "about-p":
      "Open source is home base. Everything ships in public — from a full VPN dashboard to a single-file downloader — with an obsession for interfaces that feel effortless.",
    "about-value-1": "Build in public",
    "about-value-2": "Open source first",
    "about-value-3": "Small & sharp",
    "about-cta": "Read the code",
    "contact-kicker": "04 — Say hello",
    "contact-title-a": "Have a wild idea?",
    "contact-title-b": "Let's make it real.",
    "contact-sub":
      "Open to collaborations, open-source contributions, and interesting problems. The inbox is always open.",
    "contact-cta": "Find me on GitHub",
    "contact-alt": "Back to the demos",
    "footer-tagline":
      "Developer & builder — networking tools, desktop apps, and Telegram bots.",
    "footer-top": "Back to top",
    "footer-built": "Designed & built from scratch.",
    "project-open": "Open project",
  },
};

const languageColors = {
  Rust: "#e3a17a",
  Python: "#8cc8ff",
  TypeScript: "#8bb8ff",
  JavaScript: "#f5d76a",
  "C++": "#ff9db5",
  C: "#a8c7f0",
  "C#": "#9be3b0",
  Go: "#7fe3e0",
  Java: "#ffab91",
  Kotlin: "#c79bff",
  Ruby: "#ff8f9e",
  PHP: "#b7c6ff",
  Shell: "#9fe8b3",
  Lua: "#7cc4ff",
  Dart: "#6fe8ef",
  Vue: "#a5e8b5",
  HTML: "#ffb38c",
  CSS: "#b8a7ff",
  Swift: "#ffa1c0",
};

const stats = {
  projects: projects.length,
  stars: projects.reduce((sum, project) => sum + project.stars, 0),
  bots: 3,
};

const GITHUB_USER = "Code-Leafy";
const REPOS_ENDPOINT = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&direction=desc`;
const REPOS_CACHE_KEY = "codeleafy:repos-cache:v1";
const REPOS_CACHE_TTL = 10 * 60 * 1000; // 10 minutes — keeps us clear of the unauthenticated API rate limit.

let currentLang = null;
let projectsRendered = false;
let githubLoadStarted = false;
const projectDescriptions = [];

/* ---------- github projects ---------- */

function repoActivityTime(repo) {
  const pushed = Date.parse(repo.pushed_at || "") || 0;
  const updated = Date.parse(repo.updated_at || "") || 0;
  const created = Date.parse(repo.created_at || "") || 0;
  return Math.max(pushed, updated, created);
}

function mapGitHubRepo(repo) {
  const match = projects.find(
    (p) => p.name.toLowerCase() === repo.name.toLowerCase()
  );
  const fallback = (match && match.desc) || {};

  return {
    name: repo.name,
    desc: {
      en:
        repo.description ||
        fallback.en ||
        "Open-source project by CodeLeafy — see the repo for details.",
      fa: fallback.fa || "پروژه متن‌باز — جزئیات را در گیت‌هاب ببینید.",
    },
    lang: repo.language || (match && match.lang) || "Code",
    stars: repo.stargazers_count || 0,
    url: repo.html_url,
    activity: repoActivityTime(repo),
  };
}

function applyGitHubRepos(repos) {
  if (!Array.isArray(repos) || repos.length === 0) return;

  projects = repos;

  stats.projects = projects.length;
  stats.stars = projects.reduce((sum, project) => sum + project.stars, 0);

  renderProjects();
  initReveals();
  updateStatsText();
}

async function loadGitHubProjects() {
  if (githubLoadStarted) return;
  githubLoadStarted = true;

  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem(REPOS_CACHE_KEY) || "null");
  } catch (err) {
    cached = null;
  }

  if (cached && Array.isArray(cached.repos) && Date.now() - cached.time < REPOS_CACHE_TTL) {
    applyGitHubRepos(cached.repos);
    return;
  }

  try {
    const response = await fetch(REPOS_ENDPOINT, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);

    const rawRepos = await response.json();
    const repos = rawRepos
      .filter((repo) => !repo.fork && repo.name.toLowerCase() !== GITHUB_USER.toLowerCase())
      .map(mapGitHubRepo)
      .sort((a, b) => b.activity - a.activity); // newest activity first


    try {
      localStorage.setItem(
        REPOS_CACHE_KEY,
        JSON.stringify({ time: Date.now(), repos })
      );
    } catch (err) {
      /* storage unavailable — just skip caching */
    }

    applyGitHubRepos(repos);
  } catch (err) {
    console.warn("GitHub projects unavailable, keeping local list.", err);
  }
}

/* ---------- reveal ---------- */

const projectList = document.getElementById("project-list");
const mobileMenu = document.getElementById("mobile-menu");
const menuToggle = document.getElementById("menu-toggle");
const mainContent = document.getElementById("main");
const siteFooter = document.querySelector(".site-footer");
const stage = document.getElementById("demos");
const stageParallax = document.getElementById("stage-parallax");
const phones = Array.from(document.querySelectorAll(".phone"));
const demoTabs = Array.from(document.querySelectorAll(".demo-tab"));
const demoStatus = document.getElementById("demo-status");
const videos = Array.from(document.querySelectorAll(".phone-video"));
const cursorGlow = document.getElementById("cursor-glow");
const header = document.getElementById("site-header");
const progressBar = document.getElementById("scroll-progress");
const root = document.documentElement;

let activeDemo = 0;
let videosPlaying = !prefersReduced();
let suppressClickUntil = 0;

/* ---------- small helpers ---------- */

const tiltBound = new WeakSet();
let menuOpen = false;
let langSwitching = false;
let stageDragging = false;
let revealObserver = null;

function formatStat(key, value) {
  const locale = currentLang === "fa" ? "fa-IR" : "en-US";
  let text = new Intl.NumberFormat(locale).format(value);
  if (key !== "stars" && value < 10) {
    text = (currentLang === "fa" ? "۰" : "0") + text;
  }
  return text;
}

function updateStatsText() {
  document.querySelectorAll("[data-stat]").forEach((el) => {
    const key = el.dataset.stat;
    if (key in stats) el.textContent = formatStat(key, stats[key]);
  });
}

function updateDemoStatus() {
  if (!demoStatus) return;
  const key = `demo-${activeDemo + 1}`;
  demoStatus.textContent =
    i18n[currentLang || "en"][key] || i18n.en[key] || "";
}

function syncMenuAria() {
  if (!menuToggle) return;
  const key = menuOpen ? "menu-close" : "menu-open";
  menuToggle.setAttribute(
    "aria-label",
    (i18n[currentLang || "en"] || i18n.en)[key] || i18n.en[key]
  );
}

/* ---------- language ---------- */

function applyLanguage() {
  root.lang = "en";
  root.dir = "ltr";
  currentLang = "en";

  document.title = "CodeLeafy — Developer. Builder. Hobbyist at scale.";

  if (projectsRendered) updateProjectLanguage();
  updateStatsText();
  syncMenuAria();
  updateDemoStatus();
}

/* ---------- mobile menu ---------- */

function setMenu(open) {
  menuOpen = open;
  if (!mobileMenu || !menuToggle) return;

  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  mobileMenu.inert = !open;

  menuToggle.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);

  if (mainContent) mainContent.inert = open;
  if (siteFooter) siteFooter.inert = open;

  syncMenuAria();

  if (open) {
    setTimeout(() => {
      const firstLink = mobileMenu.querySelector("a");
      if (firstLink) firstLink.focus({ preventScroll: true });
    }, 280);
  } else if (mobileMenu.contains(document.activeElement)) {
    menuToggle.focus({ preventScroll: true });
  }
}

/* ---------- projects ---------- */

function bindTilt(el) {
  if (!el || !finePointer || prefersReduced() || tiltBound.has(el)) return;
  tiltBound.add(el);

  const strength = el.classList.contains("bot-card-inner") ? 5 : 4;
  let raf = 0;
  let rx = 0;
  let ry = 0;
  let mx = 50;
  let my = 50;

  const apply = () => {
    el.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    el.style.setProperty("--mx", `${mx.toFixed(1)}%`);
    el.style.setProperty("--my", `${my.toFixed(1)}%`);
    raf = 0;
  };

  el.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      mx = px * 100;
      my = py * 100;
      ry = (px - 0.5) * strength * 2;
      rx = (0.5 - py) * strength * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    },
    { passive: true }
  );

  el.addEventListener("pointerleave", () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    el.style.transform = "";
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  });
}

function updateProjectLanguage() {
  const lang = currentLang || "en";
  for (const item of projectDescriptions) {
    const description = item.project.desc[lang] || item.project.desc.en;
    item.el.textContent = description;
    if (item.link) {
      item.link.setAttribute(
        "aria-label",
        `${item.project.name} — ${description}`
      );
    }
  }
}

function renderProjects() {
  if (!projectList) return;
  projectList.replaceChildren();
  projectDescriptions.length = 0;

  projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.className = "project-card reveal";
    li.style.setProperty("--reveal-delay", `${Math.min(index * 0.035, 0.2)}s`);

    const link = document.createElement("a");
    link.className = "project-inner";
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute(
      "aria-label",
      `${project.name} — ${project.desc[currentLang || "en"] || project.desc.en}`
    );
    link.innerHTML = `
      <span class="project-top">
        <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="project-stars${project.stars ? "" : " is-zero"}">
          <svg class="icon icon--fill" aria-hidden="true"><use href="#i-star"></use></svg>
          <span>${project.stars}</span>
        </span>
      </span>
      <h3 class="project-name"></h3>
      <p class="project-desc"></p>
      <span class="project-foot">
        <span class="project-lang">
          <span class="lang-dot" style="--lang-color:${languageColors[project.lang] || "#b8f7c1"}"></span>
          <span class="project-lang-name"></span>
        </span>
        <span class="project-open" aria-hidden="true">
          <svg class="icon"><use href="#i-arrow-ne"></use></svg>
        </span>
      </span>
    `;

    link.querySelector(".project-name").textContent = project.name;
    link.querySelector(".project-lang-name").textContent = project.lang;
    const descEl = link.querySelector(".project-desc");
    descEl.textContent = project.desc[currentLang || "en"] || project.desc.en;
    projectDescriptions.push({ el: descEl, project, link });

    li.appendChild(link);
    projectList.appendChild(li);
    bindTilt(link);
  });

  projectsRendered = true;
  updateProjectLanguage();
}

/* ---------- reveal ---------- */

function initReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");

  if (!("IntersectionObserver" in window) || prefersReduced()) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
  }

  elements.forEach((el) => revealObserver.observe(el));
}

/* ---------- phone stage ---------- */

function setDemo(index, { scroll = false, announce = true } = {}) {
  activeDemo = ((Number(index) % 3) + 3) % 3;

  phones.forEach((phone, phoneIndex) => {
    const position = (phoneIndex - activeDemo + 3) % 3;
    const className =
      position === 0 ? "pos-center" : position === 1 ? "pos-right" : "pos-left";

    phone.classList.remove("pos-left", "pos-right", "pos-center");
    phone.classList.add(className);
    phone.setAttribute("aria-pressed", String(position === 0));
  });

  demoTabs.forEach((tab, tabIndex) => {
    const active = tabIndex === activeDemo;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-pressed", String(active));
  });

  if (announce) updateDemoStatus();

  if (scroll && stage) {
    stage.scrollIntoView({
      behavior: prefersReduced() ? "auto" : "smooth",
      block: "center",
    });
  }
}

/* ---------- video controls ---------- */

let stageVisible = true;

function playVideos() {
  videos.forEach((video) => {
    video.muted = true;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
  });
}

function pauseVideos() {
  videos.forEach((video) => {
    try {
      video.pause();
    } catch (err) {}
  });
}

function setVideosPlaying(play) {
  videosPlaying = play;
  if (play) playVideos();
  else pauseVideos();
}

/* ---------- scroll chrome ---------- */

const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const navSections = navLinks
  .map((link) => {
    const id = link.getAttribute("href");
    const el = id ? document.querySelector(id) : null;
    return el ? { link, el } : null;
  })
  .filter(Boolean);

let scrollQueued = false;

function updateScrollChrome() {
  const scrollY = window.scrollY || window.pageYOffset;
  const maxScroll = root.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

  root.style.setProperty("--progress", progress.toFixed(4));
  if (header) header.classList.toggle("is-scrolled", scrollY > 16);

  const marker = window.innerHeight * 0.36;
  let activeSection = null;
  for (const section of navSections) {
    if (section.el.getBoundingClientRect().top <= marker) activeSection = section;
  }

  for (const link of navLinks) {
    link.classList.toggle(
      "is-active",
      Boolean(activeSection) && activeSection.link === link
    );
  }

  scrollQueued = false;
}

function queueScrollUpdate() {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(updateScrollChrome);
}

/* ---------- cursor glow & stage parallax ---------- */

if (cursorGlow && finePointer && !prefersReduced()) {
  let glowX = 0;
  let glowY = 0;
  let glowFrame = 0;
  let hasMoved = false;

  const paintGlow = () => {
    cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
    glowFrame = 0;
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      glowX = event.clientX;
      glowY = event.clientY;
      if (!hasMoved) {
        hasMoved = true;
        cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      }
      cursorGlow.classList.add("is-visible");
      if (!glowFrame) glowFrame = requestAnimationFrame(paintGlow);
    },
    { passive: true }
  );

  document.addEventListener("pointerleave", () => {
    cursorGlow.classList.remove("is-visible");
  });
}

if (stageParallax && finePointer && !prefersReduced()) {
  let targetRX = 0;
  let targetRY = 0;
  let parallaxQueued = false;

  const applyParallax = () => {
    stageParallax.style.transform = `rotateX(${targetRX.toFixed(2)}deg) rotateY(${targetRY.toFixed(2)}deg)`;
    parallaxQueued = false;
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      if (!stageVisible || stageDragging) return;
      targetRY = (event.clientX / window.innerWidth - 0.5) * 7;
      targetRX = (0.5 - event.clientY / window.innerHeight) * 5;
      if (!parallaxQueued) {
        parallaxQueued = true;
        requestAnimationFrame(applyParallax);
      }
    },
    { passive: true }
  );
}

/* ---------- events ---------- */

if (menuToggle) {
  menuToggle.addEventListener("click", () => setMenu(!menuOpen));
}

if (mobileMenu) {
  for (const link of mobileMenu.querySelectorAll("a")) {
    link.addEventListener("click", () => setMenu(false));
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuOpen) {
    setMenu(false);
    if (menuToggle) menuToggle.focus({ preventScroll: true });
  }
});

/* ---------- content protection ---------- */

for (const eventType of ["copy", "cut", "contextmenu", "selectstart", "dragstart"]) {
  document.addEventListener(eventType, (event) => {
    event.preventDefault();
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 980 && menuOpen) setMenu(false);
  queueScrollUpdate();
});

for (const phone of phones) {
  phone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setDemo(Number(phone.dataset.demo));
    }
  });
}

if (stage) {
  stage.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    if (!event.target.closest(".phone, .demo-tab, .stage-toggle")) return;
    event.preventDefault();
    setDemo(activeDemo + (event.key === "ArrowRight" ? 1 : -1));
  });

  let dragStart = null;
  const dragThreshold = 50;

  stage.addEventListener(
    "pointerdown",
    (event) => {
      dragStart = { x: event.clientX, y: event.clientY };
      stageDragging = false;
      stage.classList.add("is-dragging");
    },
    { passive: true }
  );

  window.addEventListener(
    "pointermove",
    (event) => {
      if (!dragStart) return;
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      if (!stageDragging && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        stageDragging = true;
      }
      if (stageDragging && stageParallax) {
        stageParallax.style.transform = `translate3d(${dx * 0.15}px, 0, 0)`;
      }
    },
    { passive: true }
  );

  const endDrag = (event) => {
    if (!dragStart) return;
    const startX = dragStart.x;
    dragStart = null;
    stageDragging = false;
    if (stageParallax) {
      stageParallax.style.transform = "";
    }
    stage.classList.remove("is-dragging");

    const endX = event.clientX;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > dragThreshold) {
      suppressClickUntil = performance.now() + 400;
      setDemo(activeDemo + (deltaX < 0 ? 1 : -1));
    }
  };

  stage.addEventListener("pointerup", endDrag, { passive: true });
  stage.addEventListener("pointercancel", endDrag, { passive: true });
  window.addEventListener("pointerup", endDrag, { passive: true });
  window.addEventListener("pointercancel", endDrag, { passive: true });
}

document.addEventListener(
  "click",
  (event) => {
    if (performance.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const trigger = event.target.closest("[data-demo]");
    if (!trigger) return;

    const index = Number(trigger.dataset.demo);
    if (Number.isNaN(index)) return;

    setDemo(index, { scroll: trigger.dataset.jump === "true" });
  },
  true
);

if ("IntersectionObserver" in window && stage) {
  const stageObserver = new IntersectionObserver(
    (entries) => {
      stageVisible = Boolean(entries[0] && entries[0].isIntersecting);
      if (!videosPlaying) return;
      if (stageVisible && !document.hidden) playVideos();
      else pauseVideos();
    },
    { threshold: 0.04 }
  );
  stageObserver.observe(stage);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) pauseVideos();
  else if (videosPlaying && stageVisible) playVideos();
});

window.addEventListener("scroll", queueScrollUpdate, { passive: true });

/* ---------- init ---------- */

if (mobileMenu) mobileMenu.inert = true;

applyLanguage();
renderProjects();
initReveals();
loadGitHubProjects();
setDemo(0, { announce: false });

if (videosPlaying) playVideos();
else pauseVideos();

updateScrollChrome();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Make sure late webfont loading doesn't leave the stage mis-measured.
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    setDemo(activeDemo, { announce: false });
  });
}


