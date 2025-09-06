# Explicación Detallada del Código

## 📋 Índice
1. [Estructura HTML](#estructura-html)
2. [Configuración CSS](#configuración-css)
3. [JavaScript Funcional](#javascript-funcional)
4. [Sistema de Navegación](#sistema-de-navegación)
5. [Responsive Design](#responsive-design)
6. [Accesibilidad](#accesibilidad)
7. [Optimizaciones](#optimizaciones)

---

## 🏗️ Estructura HTML

### 1. Documento Base
```html
<!DOCTYPE html>
<html lang="es" class="dark">
```
**Explicación**:
- `<!DOCTYPE html>`: Declara HTML5
- `lang="es"`: Idioma español para lectores de pantalla
- `class="dark"`: Activa tema oscuro por defecto

### 2. Head - Metadatos y Configuración
```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Portfolio | Ivan Rengel</title>
  <meta name="description" content="Portfolio profesional orientado a empresas..." />
```

**Cada línea explicada**:
- `charset="utf-8"`: Codificación de caracteres (soporta acentos, emojis)
- `viewport`: Hace la página responsive en móviles
- `title`: Aparece en la pestaña del navegador y resultados de búsqueda
- `description`: Descripción para SEO y redes sociales

### 3. SEO y Open Graph
```html
<link rel="canonical" href="https://www.tu-dominio.com/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Portfolio | Ivan Rengel" />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://www.tu-dominio.com/" />
<meta property="og:image" content="https://www.tu-dominio.com/og-image.jpg" />
```

**Propósito**:
- `canonical`: Evita contenido duplicado en SEO
- `og:*`: Metadatos para compartir en redes sociales (Facebook, LinkedIn)
- `og:image`: Imagen que aparece al compartir el enlace

### 4. Fuentes y Estilos
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
```

**Explicación**:
- `preconnect`: Establece conexión temprana con Google Fonts (más rápido)
- `crossorigin`: Permite cargar fuentes desde dominio externo
- `display=swap`: Muestra texto con fuente del sistema mientras carga Inter
- `tailwindcss.com`: Framework CSS desde CDN

---

## 🎨 Configuración CSS

### 1. Configuración de Tailwind
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
            200: '#b5dbff',
            300: '#86c5ff',
            400: '#56a8ff',
            500: '#2c86ff',
            600: '#1a67e6',
            700: '#154fba',
            800: '#143f92',
            900: '#123775'
          }
        },
        fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
      }
    }
  }
</script>
```

**Explicación detallada**:
- `darkMode: 'class'`: Tema oscuro se activa con clase `dark` en HTML
- `colors.brand`: Paleta personalizada de azules
- `fontFamily.sans`: Inter como fuente principal, con fallbacks
- Los números (50-900) son intensidades: 50=muy claro, 900=muy oscuro

### 2. Estilos Personalizados (styles.css)
```css
:root { 
  --radius: 12px; 
}
```
**Propósito**: Variable CSS para border-radius consistente

```css
.prose p + p { 
  margin-top: 0.75rem; 
}
```
**Explicación**: Espaciado entre párrafos en texto largo

```css
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
```
**Propósito**: Oculta elementos visualmente pero los mantiene accesibles para lectores de pantalla

```css
.nav-link.active { 
  color: rgb(44 134 255); 
  font-weight: 600; 
}
```
**Explicación**: Estilo para enlace de navegación activo (sección visible)

---

## ⚡ JavaScript Funcional

### 1. Año Dinámico
```javascript
document.getElementById('year').textContent = new Date().getFullYear();
```
**Explicación**:
- `document.getElementById('year')`: Busca elemento con ID "year"
- `new Date().getFullYear()`: Obtiene año actual
- `textContent`: Actualiza el texto del elemento
- **Resultado**: Copyright se actualiza automáticamente cada año

### 2. Menú Móvil Accesible
```javascript
(function () {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;
```
**Explicación**:
- `(function () { ... })()`: Función auto-ejecutable (IIFE)
- `const`: Variables que no cambian
- `if (!button || !menu) return;`: Sale si no encuentra los elementos

```javascript
function toggleMenu(forceState) {
  const isOpen = typeof forceState === 'boolean' ? forceState : menu.classList.contains('hidden');
  if (isOpen) {
    menu.classList.remove('hidden');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Cerrar menú');
    const firstLink = menu.querySelector('a');
    firstLink && firstLink.focus();
  } else {
    menu.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menú');
    button.focus();
  }
}
```
**Explicación línea por línea**:
- `forceState`: Parámetro opcional para forzar estado (abrir/cerrar)
- `typeof forceState === 'boolean'`: Verifica si se pasó un estado específico
- `menu.classList.contains('hidden')`: Verifica si el menú está oculto
- `aria-expanded`: Atributo para lectores de pantalla
- `aria-label`: Etiqueta descriptiva para el botón
- `firstLink.focus()`: Mueve el foco al primer enlace del menú
- `button.focus()`: Devuelve el foco al botón al cerrar

```javascript
button.addEventListener('click', () => toggleMenu());
```
**Explicación**: Escucha clics en el botón hamburger

```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleMenu(false);
});
```
**Explicación**: Cierra el menú al presionar tecla Escape

```javascript
menu.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.matches('a')) toggleMenu(false);
});
```
**Explicación**: Cierra el menú al hacer clic en cualquier enlace

### 3. Navegación Activa por Scroll
```javascript
const links = Array.from(document.querySelectorAll('a.nav-link'));
if (!links.length) return;
```
**Explicación**: Obtiene todos los enlaces de navegación

```javascript
const map = new Map();
links.forEach((a) => {
  const id = a.getAttribute('href');
  if (id && id.startsWith('#')) {
    const el = document.querySelector(id);
    if (el) map.set(a, el);
  }
});
```
**Explicación**:
- `Map()`: Estructura de datos para relacionar enlaces con secciones
- `forEach`: Itera sobre cada enlace
- `getAttribute('href')`: Obtiene el destino del enlace
- `startsWith('#')`: Verifica que sea enlace interno
- `document.querySelector(id)`: Busca la sección correspondiente
- `map.set(a, el)`: Relaciona enlace con sección

```javascript
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
```
**Explicación detallada**:
- `IntersectionObserver`: API para detectar cuando elementos entran/salen del viewport
- `entries`: Array de elementos observados
- `entry.isIntersecting`: True si el elemento es visible
- `[...map.entries()]`: Convierte Map a Array
- `.find(([, el]) => el === entry.target)`: Busca el enlace correspondiente a la sección visible
- `?.[0]`: Operador de encadenamiento opcional (evita errores si no encuentra)
- `rootMargin: '-40% 0px -50% 0px'`: Zona de detección personalizada
- `threshold: [0, 0.25, 0.5, 1]`: Porcentajes de visibilidad para activar

```javascript
map.forEach((el) => observer.observe(el));
```
**Explicación**: Inicia la observación de cada sección

---

## 🧭 Sistema de Navegación

### 1. Header Sticky
```html
<header class="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-50">
```
**Clases explicadas**:
- `border-b`: Borde inferior
- `border-slate-200`: Color del borde (claro)
- `dark:border-slate-800`: Color del borde (oscuro)
- `bg-white/80`: Fondo blanco con 80% opacidad
- `dark:bg-slate-900/80`: Fondo oscuro con 80% opacidad
- `backdrop-blur`: Efecto de desenfoque del fondo
- `sticky top-0`: Se mantiene fijo en la parte superior
- `z-50`: Z-index alto para estar sobre otros elementos

### 2. Navegación Desktop
```html
<ul class="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
  <li><a class="hover:text-brand-600 nav-link" href="#proyectos">Proyectos</a></li>
  <li><a class="hover:text-brand-600 nav-link" href="#sobre-mi">Sobre mí</a></li>
  <li><a class="hover:text-brand-600 nav-link" href="#contacto">Contacto</a></li>
</ul>
```
**Clases explicadas**:
- `hidden md:flex`: Oculto en móvil, visible en desktop
- `items-center`: Centrado verticalmente
- `gap-6`: Espacio entre elementos
- `text-sm`: Tamaño de texto pequeño
- `hover:text-brand-600`: Color al pasar el mouse
- `nav-link`: Clase personalizada para JavaScript

### 3. Menú Móvil
```html
<button id="mobile-menu-button" class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-600" aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir menú">
```
**Atributos de accesibilidad**:
- `id="mobile-menu-button"`: Identificador único
- `aria-controls="mobile-menu"`: Indica qué elemento controla
- `aria-expanded="false"`: Estado del menú (cerrado)
- `aria-label="Abrir menú"`: Descripción para lectores de pantalla

---

## 📱 Responsive Design

### 1. Grid Responsive
```html
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
```
**Explicación**:
- `grid`: Layout de cuadrícula
- `gap-6`: Espacio entre elementos
- `sm:grid-cols-2`: 2 columnas en pantallas pequeñas (≥640px)
- `lg:grid-cols-3`: 3 columnas en pantallas grandes (≥1024px)
- **Por defecto**: 1 columna en móvil

### 2. Texto Responsive
```html
<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
```
**Explicación**:
- `text-3xl`: Tamaño base (móvil)
- `sm:text-4xl`: Tamaño en tablet
- `lg:text-5xl`: Tamaño en desktop
- `font-bold`: Peso de fuente
- `tracking-tight`: Espaciado entre letras

### 3. Padding Responsive
```html
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
```
**Explicación**:
- `mx-auto`: Centrado horizontal
- `max-w-7xl`: Ancho máximo (1280px)
- `px-4`: Padding horizontal en móvil (1rem)
- `sm:px-6`: Padding horizontal en tablet (1.5rem)
- `lg:px-8`: Padding horizontal en desktop (2rem)
- `py-16`: Padding vertical (4rem)
- `lg:py-24`: Padding vertical en desktop (6rem)

---

## ♿ Accesibilidad

### 1. Skip Link
```html
<a href="#contenido" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-white focus:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:px-3 focus:py-2 focus:rounded">
  Saltar al contenido
</a>
```
**Explicación**:
- `sr-only`: Solo visible para lectores de pantalla
- `focus:not-sr-only`: Visible cuando tiene foco
- `focus:fixed focus:top-4 focus:left-4`: Posición fija al recibir foco
- `focus:bg-white`: Fondo blanco al recibir foco
- `focus:ring-2 focus:ring-brand-500`: Anillo de foco

### 2. Navegación Semántica
```html
<nav class="..." aria-label="Principal">
```
**Explicación**:
- `<nav>`: Elemento semántico para navegación
- `aria-label="Principal"`: Etiqueta descriptiva

### 3. Imágenes Accesibles
```html
<img src="..." alt="Vista previa de proyectos" loading="lazy" decoding="async" width="1200" height="900" />
```
**Atributos explicados**:
- `alt="..."`: Texto alternativo para lectores de pantalla
- `loading="lazy"`: Carga diferida (mejor rendimiento)
- `decoding="async"`: Decodificación asíncrona
- `width/height`: Dimensiones para evitar layout shift

---

## ⚡ Optimizaciones

### 1. Preconnect
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```
**Explicación**:
- `preconnect`: Establece conexión temprana con el servidor
- `crossorigin`: Permite recursos de dominios externos
- **Resultado**: Fuentes cargan más rápido

### 2. Lazy Loading
```html
<img src="..." loading="lazy" />
```
**Explicación**:
- `loading="lazy"`: Imagen se carga solo cuando es visible
- **Resultado**: Página carga más rápido inicialmente

### 3. Script Defer
```html
<script src="./main.js" defer></script>
```
**Explicación**:
- `defer`: Script se ejecuta después de que el HTML esté parseado
- **Resultado**: No bloquea el renderizado de la página

### 4. Font Display Swap
```html
<link href="...&display=swap" rel="stylesheet" />
```
**Explicación**:
- `display=swap`: Muestra texto con fuente del sistema mientras carga Inter
- **Resultado**: Evita texto invisible durante la carga

---

## 🎯 Casos de Uso Específicos

### 1. Card de Proyecto
```html
<article class="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:shadow-md focus-within:shadow-md">
  <a href="#" class="block">
    <div class="aspect-video w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
      <!-- Contenido de la card -->
    </div>
  </a>
</article>
```
**Clases explicadas**:
- `group`: Permite efectos hover en elementos hijos
- `rounded-xl`: Bordes redondeados
- `transition`: Transición suave
- `hover:shadow-md`: Sombra al pasar el mouse
- `focus-within:shadow-md`: Sombra cuando tiene foco (accesibilidad)
- `aspect-video`: Mantiene proporción 16:9
- `bg-gradient-to-br`: Gradiente diagonal

### 2. Botón CTA
```html
<a href="mailto:ivanrrengelf@gmail.com" class="inline-flex items-center rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
  Contactar por email
</a>
```
**Clases explicadas**:
- `inline-flex`: Display flex inline
- `items-center`: Centrado vertical
- `rounded-md`: Bordes redondeados medianos
- `bg-brand-600`: Fondo con color de marca
- `px-4 py-2.5`: Padding horizontal y vertical
- `text-sm font-semibold`: Tamaño y peso de texto
- `hover:bg-brand-700`: Color más oscuro al hover

---

## 🔧 Mantenimiento y Extensión

### Para añadir nueva sección:
1. **HTML**: Crear sección con ID único
```html
<section id="nueva-seccion" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
  <!-- Contenido -->
</section>
```

2. **Navegación**: Añadir enlace
```html
<li><a class="hover:text-brand-600 nav-link" href="#nueva-seccion">Nueva Sección</a></li>
```

3. **JavaScript**: Se actualiza automáticamente (usa `a.nav-link`)

### Para cambiar colores:
1. **Editar paleta en Tailwind**:
```javascript
colors: {
  brand: {
    500: '#nuevo-color', // Color principal
    600: '#color-oscuro', // Hover
  }
}
```

2. **Usar en HTML**:
```html
<div class="bg-brand-500 hover:bg-brand-600">
```

### Para añadir animaciones:
```css
/* En styles.css */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

---

*Esta documentación explica cada línea de código, su propósito y cómo funciona. Úsala como referencia para entender, modificar o extender el portfolio.*
