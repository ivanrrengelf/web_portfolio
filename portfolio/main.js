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

// Copiar email al portapapeles
(function () {
  const copyButton = document.getElementById('copy-email');
  if (!copyButton) return;

  const email = 'ivanrrengelf@gmail.com';

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      
      // Feedback visual
      const originalText = copyButton.textContent;
      copyButton.textContent = '¡Email copiado!';
      copyButton.classList.add('bg-green-600', 'hover:bg-green-700');
      copyButton.classList.remove('bg-brand-600', 'hover:bg-brand-700');
      
      // Restaurar después de 2 segundos
      setTimeout(() => {
        copyButton.textContent = originalText;
        copyButton.classList.remove('bg-green-600', 'hover:bg-green-700');
        copyButton.classList.add('bg-brand-600', 'hover:bg-brand-700');
      }, 2000);
      
    } catch (err) {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      // Feedback visual
      const originalText = copyButton.textContent;
      copyButton.textContent = '¡Email copiado!';
      copyButton.classList.add('bg-green-600', 'hover:bg-green-700');
      copyButton.classList.remove('bg-brand-600', 'hover:bg-brand-700');
      
      setTimeout(() => {
        copyButton.textContent = originalText;
        copyButton.classList.remove('bg-green-600', 'hover:bg-green-700');
        copyButton.classList.add('bg-brand-600', 'hover:bg-brand-700');
      }, 2000);
    }
  });
})();

// Header compacto al hacer scroll
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
      // Mostrar header compacto
      header.classList.add('header-compact');
      if (document.documentElement.classList.contains('dark')) {
        header.classList.add('dark');
      }
    } else {
      // Mostrar header normal
      header.classList.remove('header-compact', 'dark');
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
})();

document.getElementById('year').textContent = new Date().getFullYear();


