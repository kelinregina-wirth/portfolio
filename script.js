const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");
const filterButtons = document.querySelectorAll("[data-filter]");
const contentCards = document.querySelectorAll("[data-category]");
const parallax = document.querySelector("[data-parallax]");

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count);
      let current = 0;
      const steps = 36;
      const increment = target / steps;

      const tick = () => {
        current += increment;
        if (current >= target) {
          element.textContent = `+${target}`;
          return;
        }
        element.textContent = `+${Math.ceil(current)}`;
        requestAnimationFrame(tick);
      };

      tick();
      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    contentCards.forEach((card) => {
      const categories = card.dataset.category?.split(" ") ?? [];
      card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

window.addEventListener(
  "scroll",
  () => {
    if (!parallax || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const movement = Math.min(window.scrollY * 0.035, 34);
    parallax.style.transform = `translateY(${movement}px)`;
  },
  { passive: true }
);
