const navbar = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".ul-links");
//const homebg = document.querySelector(".inicio-bg");
const menu = document.querySelector(".nav-menu");
const sections = document.querySelectorAll("section");
const hr = document.querySelectorAll("hr");
const config = {
    rootMargin: "0px",
    threshold: [0.6, 0.9],
  };

//La barra de navegacion se hace opaca cuando se scrollea  
window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 20 && (navbar.style.background = `transparent`);
});

menu.addEventListener("click", esconderLinks);
navLinks.addEventListener("click", esconderLinks);

//Se esconde la barra de navegacion cuando la pantalla es pequeña
function esconderLinks() {
    if (window.innerWidth <= 1000) {
      navLinks.classList.toggle("visible");
    }
}

ScrollReveal().reveal(".inicio-perfil", { delay: 250 });
ScrollReveal().reveal(".inicio-titulo", { delay: 250 });
ScrollReveal().reveal(".inicio-titulo-secundario", { delay: 350 });
ScrollReveal().reveal(".seccion-titulo", { delay: 150 });
ScrollReveal().reveal(".seccion-subtitulo", { delay: 250 });
ScrollReveal().reveal(".card-grid", { delay: 350 });
ScrollReveal().reveal(".sobremi-descripcion", { delay: 350 });
ScrollReveal().reveal(".sobremi-habilidades", { delay: 350 });
ScrollReveal().reveal(".contacto-grid", { delay: 350 });
ScrollReveal().reveal(".inicio-contacto-grid", { delay: 350 });
ScrollReveal().reveal(".button-cv", { delay: 350 });
ScrollReveal().reveal(hr, { delay: 350 });