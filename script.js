// ---- Render project cards -------------------------------------------------
const grid = document.getElementById("grid");
const projects = window.PROJECTS || [];

function cardHTML(p, i) {
  const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  return `
    <article class="card" data-category="${p.category}" style="--accent:${p.accent}; --i:${i}">
      <div class="card__top">
        <span class="card__emoji">${p.emoji}</span>
        <span class="card__year">${p.year}</span>
      </div>
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.description}</p>
      <div class="card__tags">${tags}</div>
      <a class="card__link" href="${p.repo}" target="_blank" rel="noopener">
        View source <span aria-hidden="true">→</span>
      </a>
    </article>`;
}

function render(filter = "all") {
  const items = projects.filter((p) => filter === "all" || p.category === filter);
  grid.innerHTML = items.map(cardHTML).join("");
}

render();

// ---- Filters --------------------------------------------------------------
const filters = document.getElementById("filters");
filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filters.querySelectorAll(".filter").forEach((f) => f.classList.remove("is-active"));
  btn.classList.add("is-active");
  render(btn.dataset.filter);
});

// ---- Stats counters -------------------------------------------------------
const totalProjects = projects.length;
const totalSites = projects.filter(
  (p) => p.category === "website" || p.category === "ecommerce"
).length;

function countUp(el, target) {
  let n = 0;
  const step = Math.max(1, Math.round(target / 30));
  const tick = () => {
    n = Math.min(target, n + step);
    el.textContent = n;
    if (n < target) requestAnimationFrame(tick);
  };
  tick();
}
countUp(document.getElementById("statProjects"), totalProjects);
countUp(document.getElementById("statSites"), totalSites);

// ---- Rotating hero word ---------------------------------------------------
const rotator = document.getElementById("rotator");
const words = ["tell stories.", "convert visitors.", "feel alive.", "load fast.", "delight people."];
let wi = 0;
setInterval(() => {
  wi = (wi + 1) % words.length;
  rotator.style.opacity = "0";
  setTimeout(() => {
    rotator.textContent = words[wi];
    rotator.style.opacity = "1";
  }, 250);
}, 2600);

// ---- Theme toggle ---------------------------------------------------------
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector(".nav__theme-icon");
const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.body.classList.add("light");
  icon.textContent = "☀️";
}
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  icon.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ---- Navbar shadow on scroll ----------------------------------------------
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
});

// ---- Reveal-on-scroll -----------------------------------------------------
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".work, .about, .contact, .section-head").forEach((el) => io.observe(el));

// ---- Footer year ----------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
