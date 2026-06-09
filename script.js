// ---- Render project cards -------------------------------------------------
const grid = document.getElementById("grid");
const projects = window.PROJECTS || [];

function cardHTML(p, i) {
  const no = String(i + 1).padStart(2, "0");
  const tags = p.tags.map((t) => `<span>${t}</span>`).join("");
  const link = p.url
    ? `<a class="card__link" href="${p.url}" target="_blank" rel="noopener">View website <span aria-hidden="true">→</span></a>`
    : `<span class="card__link card__link--soon">Coming soon</span>`;
  return `
    <article class="card" data-category="${p.category}" style="--accent:${p.accent}; --i:${i}">
      <div class="card__top">
        <span class="card__no">${no}</span>
        <span class="card__year">${p.year}</span>
      </div>
      <div class="card__sector">${p.sector}</div>
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.description}</p>
      <div class="card__tags">${tags}</div>
      ${link}
    </article>`;
}

function render(filter = "all") {
  const items = projects.filter((p) => filter === "all" || p.category === filter);
  // Re-number sequentially within the current view.
  grid.innerHTML = items.map((p, i) => cardHTML(p, i)).join("");
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
const totalLive = projects.filter((p) => p.url).length;

function countUp(el, target) {
  let n = 0;
  const step = Math.max(1, Math.round(target / 24));
  const tick = () => {
    n = Math.min(target, n + step);
    el.textContent = String(n).padStart(2, "0");
    if (n < target) requestAnimationFrame(tick);
  };
  tick();
}
countUp(document.getElementById("statProjects"), totalProjects);
countUp(document.getElementById("statLive"), totalLive);

// ---- Navbar hairline on scroll --------------------------------------------
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 16);
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
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---- Footer year ----------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
