// ============================
// KELIN REGINA PORTFÓLIO
// ============================

// Fade ao aparecer

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade").forEach(el=>{

    observer.observe(el);

});

// Contador animado

const counters=document.querySelectorAll(".number");

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.getAttribute("data-target");

        const c=+counter.innerText;

        const increment=target/120;

        if(c<target){

            counter.innerText=Math.ceil(c+increment);

            setTimeout(update,20);

        }else{

            counter.innerText=target+"+";

        }

    }

    update();

});

// Navbar transparente

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(nav){

        if(window.scrollY>60){

            nav.classList.add("scrolled");

        }else{

            nav.classList.remove("scrolled");

        }

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

console.log("Portfólio carregado.");
