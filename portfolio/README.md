# Portfolio Profesional - Ivan Rengel

Portfolio web estático profesional orientado a empresas, desarrollado con HTML, CSS y JavaScript vanilla. Diseño responsive con tema oscuro por defecto y enfoque en accesibilidad.

## 🎯 Objetivo

Portfolio para estudiantes de ingeniería que buscan prácticas o oportunidades laborales, con énfasis en:
- Presentación profesional y moderna
- Accesibilidad web (WCAG)
- Rendimiento optimizado
- SEO técnico
- Responsive design

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── main.js            # Funcionalidad JavaScript
└── README.md          # Documentación
```

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos personalizados y utilidades
- **JavaScript ES6+**: Funcionalidad interactiva
- **Tailwind CSS**: Framework CSS via CDN
- **Google Fonts**: Tipografía Inter

## 📄 Archivos del Proyecto

### index.html
Página principal del portfolio con las siguientes secciones:

#### 1. Head (Metadatos y configuración)
```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Portfolio | Ivan Rengel</title>
  <meta name="description" content="Portfolio profesional orientado a empresas..." />
  
  <!-- SEO y Open Graph -->
  <link rel="canonical" href="https://www.tu-dominio.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Portfolio | Ivan Rengel" />
  <!-- ... más metadatos -->
  
  <!-- Fuentes y estilos -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

**Propósito**: Configuración de metadatos, SEO, fuentes y framework CSS.

#### 2. Configuración de Tailwind
```html
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#eef7ff',
            100: '#d8ecff',
            // ... paleta de colores personalizada
          }
        },
        fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
      }
    }
  }
</script>
```

**Propósito**: Configuración personalizada de Tailwind con tema oscuro y colores de marca.

#### 3. Header (Navegación)
```html
<header class="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-50">
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Principal">
    <!-- Logo y nombre -->
    <a class="flex items-center gap-2 font-semibold text-slate-900 dark:text-white" href="#" aria-label="Inicio">
      <span class="inline-flex h-8 w-8 items-center justify-center rounded bg-brand-600 text-white">IR</span>
      <span>Ivan Rengel</span>
    </a>
    
    <!-- Menú hamburger móvil -->
    <button id="mobile-menu-button" class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-600" aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir menú">
      <!-- SVG del menú hamburger -->
    </button>
    
    <!-- Navegación desktop -->
    <ul class="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
      <li><a class="hover:text-brand-600 nav-link" href="#proyectos">Proyectos</a></li>
      <li><a class="hover:text-brand-600 nav-link" href="#sobre-mi">Sobre mí</a></li>
      <li><a class="hover:text-brand-600 nav-link" href="#contacto">Contacto</a></li>
    </ul>
    
    <!-- CTA principal -->
    <div class="hidden md:flex items-center gap-2">
      <a href="#contacto" class="inline-flex items-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">Disponible para prácticas</a>
    </div>
  </nav>
  
  <!-- Menú móvil desplegable -->
  <div id="mobile-menu" class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden">
    <!-- Contenido del menú móvil -->
  </div>
</header>
```

**Características**:
- Sticky header con backdrop blur
- Navegación accesible con ARIA labels
- Menú hamburger para móvil
- Tema oscuro/claro
- CTA prominente

#### 4. Hero Section
```html
<section class="relative">
  <div class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-white dark:from-slate-900 dark:to-slate-950"></div>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
    <div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        Estudiante de Ingeniería en Sistemas de Información
      </h1>
      <p class="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-prose">
        Desarrollador junior con pasión por aprender y resolver problemas...
      </p>
      <!-- CTAs y indicadores de credibilidad -->
    </div>
    <div class="relative">
      <!-- Imagen con overlay de métricas -->
    </div>
  </div>
</section>
```

**Elementos**:
- Titular principal (H1) con propuesta de valor
- Subtítulo descriptivo
- CTAs (Ver proyectos, Hablemos)
- Indicadores de credibilidad
- Imagen visual con overlay

#### 5. Sección de Proyectos
```html
<section id="proyectos" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
  <div class="flex items-end justify-between gap-6">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Proyectos académicos</h2>
      <p class="mt-2 text-slate-600 dark:text-slate-400">Proyectos desarrollados durante mi formación universitaria.</p>
    </div>
    <a href="#" class="hidden md:inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800">Ver todos</a>
  </div>
  
  <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Cards de proyectos -->
    <article class="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <a href="#" class="block">
        <div class="aspect-video w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
          <!-- Icono SVG personalizado -->
        </div>
        <div class="p-4">
          <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span class="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">Java</span>
            <span class="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">POO</span>
            <span class="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">Console</span>
          </div>
          <h3 class="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">Simulador de Máquina Expendedora</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">Descripción del proyecto...</p>
        </div>
      </a>
    </article>
    <!-- Más proyectos... -->
  </div>
</section>
```

**Características**:
- Grid responsive (1 col móvil, 2 tablet, 3 desktop)
- Cards con hover effects
- Iconos SVG personalizados
- Tags de tecnologías
- Gradientes de colores por tecnología

#### 6. Sección Sobre Mí
```html
<section id="sobre-mi" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 dark:border-slate-800">
  <div class="grid gap-8 lg:grid-cols-3">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Sobre mí</h2>
      <p class="mt-2 text-slate-600 dark:text-slate-400">Estudiante de Ingenieria en sistemas de informacion.</p>
    </div>
    <div class="lg:col-span-2">
      <div class="prose prose-slate dark:prose-invert max-w-none">
        <p>Descripción personal y profesional...</p>
      </div>
      <ul class="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
        <li class="flex items-center gap-2 text-slate-800 dark:text-slate-300">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-600"></span> 
          Java (POO, Spring Boot)
        </li>
        <!-- Más habilidades... -->
      </ul>
    </div>
  </div>
</section>
```

**Elementos**:
- Grid layout (1/3 + 2/3)
- Prose styling para texto
- Lista de habilidades con bullets
- Tema oscuro compatible

#### 7. Sección de Contacto
```html
<section id="contacto" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
  <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-brand-50 to-white dark:from-slate-900 dark:to-slate-950 p-8 md:p-12">
    <div class="grid gap-6 md:grid-cols-2 items-center">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Hablemos de oportunidades</h2>
        <p class="mt-2 text-slate-600 dark:text-slate-400">Busco prácticas o proyectos donde pueda aplicar mis conocimientos...</p>
      </div>
      <div class="flex md:justify-end gap-3">
        <a href="mailto:ivanrrengelf@gmail.com" class="inline-flex items-center rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">Contactar por email</a>
        <a href="#" class="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800">Descargar CV</a>
      </div>
    </div>
  </div>
</section>
```

**Características**:
- CTA destacado con gradiente
- Email real configurado
- Botón para CV
- Grid responsive

#### 8. Footer
```html
<footer class="border-t border-slate-200 dark:border-slate-800 py-8">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
    <p>© <span id="year"></span> Ivan Rengel. Todos los derechos reservados.</p>
    <div class="flex items-center gap-4">
      <a class="hover:text-slate-700 dark:hover:text-slate-300" href="#">LinkedIn</a>
      <a class="hover:text-slate-700 dark:hover:text-slate-300" href="#">GitHub</a>
      <a class="hover:text-slate-700 dark:hover:text-slate-300" href="#">X</a>
    </div>
  </div>
</footer>
```

**Elementos**:
- Copyright dinámico
- Enlaces sociales
- Layout responsive

### styles.css
Estilos personalizados y utilidades:

```css
/* Refinamientos globales y utilidades de accesibilidad */
:root { 
  --radius: 12px; 
}

.prose p + p { 
  margin-top: 0.75rem; 
}

.prose a { 
  text-decoration: underline; 
  text-underline-offset: 2px; 
}

/* Utilidades de accesibilidad */
.sr-only { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  margin: -1px; 
  overflow: hidden; 
  clip: rect(0,0,0,0); 
  white-space: nowrap; 
  border: 0; 
}

.not-sr-only { 
  position: static; 
  width: auto; 
  height: auto; 
  padding: 0; 
  margin: 0; 
  overflow: visible; 
  clip: auto; 
  white-space: normal; 
}

/* Estado activo del enlace de navegación */
.nav-link.active { 
  color: rgb(44 134 255); 
  font-weight: 600; 
}
```

**Propósito**:
- Variables CSS personalizadas
- Estilos para texto prose
- Utilidades de accesibilidad (screen reader only)
- Estado activo de navegación

### main.js
Funcionalidad JavaScript:

```javascript
// Actualizar año en el footer
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
```

**Funcionalidades**:
1. **Año dinámico**: Actualiza el copyright automáticamente
2. **Menú móvil accesible**:
   - Toggle con ARIA attributes
   - Cierre con tecla Escape
   - Focus management
   - Cierre al hacer clic en enlaces
3. **Navegación activa**:
   - Intersection Observer para detectar secciones visibles
   - Resaltado automático del enlace activo
   - Configuración de umbrales personalizada

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
brand: {
  50: '#eef7ff',   /* Muy claro */
  100: '#d8ecff',  /* Claro */
  200: '#b5dbff',  /* Medio claro */
  300: '#86c5ff',  /* Medio */
  400: '#56a8ff',  /* Medio oscuro */
  500: '#2c86ff',  /* Base */
  600: '#1a67e6',  /* Oscuro */
  700: '#154fba',  /* Muy oscuro */
  800: '#143f92',  /* Extra oscuro */
  900: '#123775'   /* Más oscuro */
}
```

### Tipografía
- **Fuente principal**: Inter (Google Fonts)
- **Pesos**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Fallbacks**: system-ui, sans-serif

### Espaciado
- **Container**: max-width: 7xl (1280px)
- **Padding**: 4 (1rem) móvil, 6 (1.5rem) tablet, 8 (2rem) desktop
- **Gaps**: 6 (1.5rem) entre elementos

## ♿ Accesibilidad

### Características implementadas:
1. **Semántica HTML**: Uso correcto de elementos semánticos
2. **ARIA labels**: Navegación y controles etiquetados
3. **Skip links**: Enlace para saltar al contenido
4. **Focus management**: Navegación por teclado
5. **Contraste**: Cumple WCAG AA
6. **Screen readers**: Texto alternativo y labels

### Ejemplos de accesibilidad:
```html
<!-- Skip link -->
<a href="#contenido" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-white focus:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:px-3 focus:py-2 focus:rounded">
  Saltar al contenido
</a>

<!-- Navegación con ARIA -->
<nav aria-label="Principal">
  <button aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir menú">
    <!-- SVG del menú -->
  </button>
</nav>

<!-- Imágenes con alt text -->
<img src="..." alt="Vista previa de proyectos" loading="lazy" decoding="async" />
```

## 🚀 Rendimiento

### Optimizaciones implementadas:
1. **Lazy loading**: Imágenes cargadas bajo demanda
2. **Decoding async**: Decodificación asíncrona de imágenes
3. **Preconnect**: Conexiones previas a Google Fonts
4. **Font display swap**: Fuentes con fallback inmediato
5. **Script defer**: JavaScript no bloquea el renderizado

### Ejemplos:
```html
<!-- Preconnect para fuentes -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Imagen optimizada -->
<img src="..." alt="..." loading="lazy" decoding="async" width="1200" height="900" />

<!-- Script defer -->
<script src="./main.js" defer></script>
```

## 📱 Responsive Design

### Breakpoints:
- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Ejemplos de responsive:
```html
<!-- Grid responsive -->
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<!-- Texto responsive -->
<h1 class="text-3xl sm:text-4xl lg:text-5xl">

<!-- Padding responsive -->
<div class="px-4 sm:px-6 lg:px-8">

<!-- Flex responsive -->
<div class="flex flex-col md:flex-row">
```

## 🔍 SEO Técnico

### Metadatos implementados:
```html
<!-- Básicos -->
<title>Portfolio | Ivan Rengel</title>
<meta name="description" content="Portfolio profesional orientado a empresas..." />
<link rel="canonical" href="https://www.tu-dominio.com/" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Portfolio | Ivan Rengel" />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://www.tu-dominio.com/" />
<meta property="og:image" content="https://www.tu-dominio.com/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Portfolio | Ivan Rengel" />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://www.tu-dominio.com/og-image.jpg" />
```

## 🛠️ Personalización

### Para cambiar el contenido:

1. **Información personal**:
   - Nombre: Buscar "Ivan Rengel" en index.html
   - Email: Buscar "ivanrrengelf@gmail.com"
   - Descripción: Modificar el texto en hero y sobre mí

2. **Proyectos**:
   - Editar las cards en la sección #proyectos
   - Cambiar títulos, descripciones y tecnologías
   - Modificar iconos SVG si es necesario

3. **Colores**:
   - Editar la paleta en tailwind.config
   - Cambiar clases de color en el HTML

4. **Imágenes**:
   - Reemplazar URLs de Unsplash
   - Añadir imágenes propias

### Para añadir nuevas secciones:
1. Crear nueva sección con ID único
2. Añadir enlace en la navegación
3. Actualizar el JavaScript de navegación activa

## 📦 Despliegue

### Opciones de hosting:
1. **Vercel** (recomendado):
   - Conectar repositorio GitHub
   - Deploy automático
   - HTTPS incluido

2. **Netlify**:
   - Drag & drop de la carpeta
   - Formularios incluidos
   - CDN global

3. **GitHub Pages**:
   - Subir archivos al repositorio
   - Activar Pages en settings

### Preparación para producción:
1. Actualizar URLs en metadatos
2. Añadir imagen OG (1200x630px)
3. Configurar analytics (opcional)
4. Crear sitemap.xml
5. Añadir robots.txt

## 🔧 Mantenimiento

### Actualizaciones regulares:
1. **Contenido**: Proyectos, habilidades, experiencia
2. **Tecnologías**: Actualizar dependencias
3. **SEO**: Revisar metadatos y performance
4. **Accesibilidad**: Testing con herramientas

### Herramientas recomendadas:
- **Lighthouse**: Audit de performance y accesibilidad
- **WAVE**: Evaluación de accesibilidad
- **PageSpeed Insights**: Análisis de velocidad
- **axe DevTools**: Testing de accesibilidad

## 📞 Contacto

- **Email**: ivanrrengelf@gmail.com
- **Universidad**: CEU San Pablo
- **Carrera**: Ingeniería en Sistemas de Información (3er año)

---

*Documentación generada automáticamente - Última actualización: Diciembre 2024*
