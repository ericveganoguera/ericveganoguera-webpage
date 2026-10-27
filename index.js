const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const root = document.documentElement;

// Tema oscuro / claro (recuerda la elección)
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
if (saved) root.dataset.theme = saved;
$("#theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});

// Aparición al hacer scroll
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
$$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });

// Enlace activo del menú
const links = $$(".links a");
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.hash === `#${e.target.id}`));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach((s) => spy.observe(s));

// Barra de progreso (solo si el navegador no soporta scroll-timeline)
if (!CSS.supports("animation-timeline", "scroll()")) {
  const bar = $(".progress");
  addEventListener("scroll", () => {
    bar.style.transform = `scaleX(${scrollY / (root.scrollHeight - innerHeight || 1)})`;
  }, { passive: true });
}

if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  // Luz que sigue al cursor
  addEventListener("pointermove", (e) => {
    root.style.setProperty("--mx", `${e.clientX}px`);
    root.style.setProperty("--my", `${e.clientY}px`);
  });

  // Botones magnéticos
  $$(".mag").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });

}

// Copiar email
const copy = $("#copy");
copy.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText("ericveganoguera@gmail.com"); copy.textContent = "¡Copiado!"; }
  catch { copy.textContent = "ericveganoguera@gmail.com"; }
  setTimeout(() => (copy.textContent = "Copiar email"), 2000);
});
