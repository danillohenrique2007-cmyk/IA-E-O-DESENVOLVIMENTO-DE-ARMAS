```javascript
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ==========================================
// ANIMAÇÃO DOS ELEMENTOS AO ENTRAR NA TELA
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay =
          `${Math.min(index * 35, 180)}ms`;

        entry.target.classList.add("visible");

        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});


// ==========================================
// EFEITO NO CABEÇALHO DURANTE O SCROLL
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  if (window.scrollY > 30) {
    header.style.background = "rgba(5, 12, 17, .94)";
  } else {
    header.style.background = "rgba(7, 16, 22, .82)";
  }
});


// ==========================================
// ROLAGEM SUAVE ENTRE AS SEÇÕES
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href");

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
```
