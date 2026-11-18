// Ubah alamat ini setelah website utama KosCare di InfinityFree sudah aktif.
const KOSCARE_APP_URL = ""; // Contoh: https://namawebsite.infinityfreeapp.com

document.querySelectorAll(".app-link").forEach(link => {
  if (KOSCARE_APP_URL) link.href = KOSCARE_APP_URL;
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4 * 90, 270)}ms`;
  revealObserver.observe(el);
});

const topButton = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  topButton.classList.toggle("show", window.scrollY > 450);
}, { passive: true });
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("year").textContent = new Date().getFullYear();
