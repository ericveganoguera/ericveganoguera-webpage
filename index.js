// Resalta en el menú la sección que se está viendo
const links = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
