const navbar = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".ul-links");
//const homebg = document.querySelector(".inicio-bg");
const menu = document.querySelector(".nav-menu");
const sections = document.querySelectorAll("section");
const config = {
    rootMargin: "0px",
    threshold: [0.6, 0.9],
  };

//La barra de navegacion se hace opaca cuando se scrollea  
window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY > 80 && window.scrollY < 100 && (navbar.style.background = `rgba(0,0,0,0.7)`);
  window.scrollY > 60 && window.scrollY < 80 && (navbar.style.background = `rgba(0,0,0,0.6)`);
  window.scrollY > 40 && window.scrollY < 60 && (navbar.style.background = `rgba(0,0,0,0.4)`);
  window.scrollY > 20 && window.scrollY < 40 && (navbar.style.background = `rgba(0,0,0,0.2)`);
  window.scrollY < 20 && (navbar.style.background = `transparent`);
});

menu.addEventListener("click", esconderLinks);
navLinks.addEventListener("click", esconderLinks);

//Se esconde la barra de navegacion cuando la pantalla es pequeña
function esconderLinks() {
    if (window.innerWidth <= 600) {
      navLinks.classList.toggle("visible");
    }
}



let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersectionHandler(entry);
      }
    });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector(".ul-links  .active");
    const shouldBeActive = document.querySelector(
        ".ul-links [data-ref=" + id + "]"
    );

    if (currentlyActive) {
        currentlyActive.classList.remove("active");
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add("active"); 
    }
}  

ScrollReveal().reveal(".nav-bar", { delay: 250 });
ScrollReveal().reveal(".inicio-perfil", { delay: 350 });
ScrollReveal().reveal(".inicio-titulo", { delay: 350 });
ScrollReveal().reveal(".inicio-titulo-secundario", { delay: 550 });
ScrollReveal().reveal(".seccion-titulo", { delay: 250 });
ScrollReveal().reveal(".seccion-subtitulo", { delay: 350 });
ScrollReveal().reveal(".sobremi-descripcion", { delay: 450 });
ScrollReveal().reveal(".sobremi-habilidades", { delay: 450 });
ScrollReveal().reveal(".contacto-grid", { delay: 450 });