const root = document.documentElement;
const themeButton = document.querySelector('[data-theme-toggle]');
const navButton = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('altus-theme', theme);
  themeButton?.setAttribute('aria-pressed', String(theme === 'dark'));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071b21' : '#f4fbfc');
}

setTheme(root.dataset.theme || 'light');

themeButton?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

navButton?.addEventListener('click', () => {
  const open = navButton.getAttribute('aria-expanded') !== 'true';
  navButton.setAttribute('aria-expanded', String(open));
  navButton.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
  nav.dataset.open = String(open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navButton?.setAttribute('aria-expanded', 'false');
  nav.dataset.open = 'false';
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.dataset.open === 'true') {
    navButton?.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
    navButton.focus();
  }
});

const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
