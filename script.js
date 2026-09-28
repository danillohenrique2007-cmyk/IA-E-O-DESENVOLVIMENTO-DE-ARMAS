```javascript
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.getElementById("siteHeader");
const progressBar = document.getElementById("progressBar");


// ==========================================
// MENU MOBILE
// ==========================================

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}


// ==========================================
// CABEÇALHO + BARRA DE PROGRESSO
// ==========================================

function updateScrollUI() {

    const scrollTop = window.scrollY;


    // Efeito do cabeçalho

    if (siteHeader) {

        if (scrollTop > 35) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }

    }


    // Barra de progresso

    if (progressBar) {

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        let percentage = 0;

        if (documentHeight > 0) {

            percentage =
                (scrollTop / documentHeight) * 100;

        }

        progressBar.style.width =
            `${percentage}%`;

    }

}


// Executa quando a página rolar

window.addEventListener(
    "scroll",
    updateScrollUI,
    {
        passive: true
    }
);


// Executa imediatamente ao carregar

updateScrollUI();


// ==========================================
// ANIMAÇÃO DOS ELEMENTOS
// ==========================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(
                (entry, index) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    // Pequeno atraso entre os elementos

                    entry.target.style.transitionDelay =
                        `${Math.min(index * 45, 220)}ms`;


                    // Ativa a animação

                    entry.target.classList.add(
                        "visible"
                    );


                    // Para de observar depois que apareceu

                    observer.unobserve(
                        entry.target
                    );

                }
            );

        },

        {
            threshold: 0.10
        }

    );


// Observa todos os elementos .reveal

revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


// ==========================================
// ROLAGEM SUAVE DO MENU
// ==========================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const headerOffset = 70;


                const targetPosition =
                    target.getBoundingClientRect().top +
```
