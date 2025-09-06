document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil accesible
(function () {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  function toggleMenu(forceState) {
    const isOpen = typeof forceState === 'boolean' ? forceState : menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.remove('hidden');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Cerrar menú');
      // Focus en el primer enlace
      const firstLink = menu.querySelector('a');
      firstLink && firstLink.focus();
    } else {
      menu.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menú');
      button.focus();
    }
  }

  button.addEventListener('click', () => toggleMenu());

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });

  // Cerrar al navegar
  menu.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('a')) toggleMenu(false);
  });
})();

// Resaltar enlace activo según sección visible
(function () {
  const links = Array.from(document.querySelectorAll('a.nav-link'));
  if (!links.length) return;

  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) {
      const el = document.querySelector(id);
      if (el) map.set(a, el);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const active = [...map.entries()].find(([, el]) => el === entry.target)?.[0];
          if (active) {
            links.forEach((l) => l.classList.remove('active'));
            active.classList.add('active');
          }
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
  );

  map.forEach((el) => observer.observe(el));
})();

document.getElementById('year').textContent = new Date().getFullYear();


