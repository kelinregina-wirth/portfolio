/* ==========================================
   PORTFÓLIO - KELIN REGINA
========================================== */

/* -------------------------------
   HEADER AO ROLAR
-------------------------------- */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});


/* -------------------------------
   ANIMAÇÃO DAS SEÇÕES
-------------------------------- */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* -------------------------------
   MENU ATIVO
-------------------------------- */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* -------------------------------
   FOTO COM EFEITO
-------------------------------- */

const foto = document.querySelector(".hero-photo img");

if (foto) {

    foto.addEventListener("mouseenter", () => {

        foto.style.transform = "scale(1.03) rotate(-1deg)";
        foto.style.transition = ".4s";

    });

    foto.addEventListener("mouseleave", () => {

        foto.style.transform = "scale(1) rotate(0deg)";

    });

}


/* -------------------------------
   BOTÃO VOLTAR AO TOPO
-------------------------------- */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.background = "#111";
topButton.style.color = "#fff";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* -------------------------------
   DIGITAÇÃO NO HERO
-------------------------------- */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const textoOriginal = heroTitle.innerText;

    heroTitle.innerText = "";

    let i = 0;

    function escrever() {

        if (i < textoOriginal.length) {

            heroTitle.innerHTML += textoOriginal.charAt(i);

            i++;

            setTimeout(escrever, 18);

        }

    }

    escrever();

}