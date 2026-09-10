# Altus Dev — sitio de presentación

Landing de una sola página para Altus Dev. Es HTML, CSS y JavaScript
estáticos, sin frameworks ni build: se puede abrir tal cual o publicar
directamente en GitHub Pages.

## Estructura

```
index.html      Contenido y estructura de la página
styles.css      Estilos (paleta, tipografía, layout, modo oscuro)
script.js       Menú móvil accesible + año del pie de página
assets/
  favicon.svg   Ícono del sitio
  nublo.png     Ilustración de Nublo (recortada del flyer de marca)
  og-image.jpg  Imagen de vista previa al compartir el enlace
```

Todas las rutas (CSS, JS, imágenes, enlaces internos `#seccion`) son
relativas, así que el sitio funciona igual en la raíz de un dominio o
bajo una subruta de repositorio de GitHub Pages (por ejemplo
`usuario.github.io/altus-dev/`).

## Ver el sitio en local

No requiere instalación. Basta con un servidor estático simple porque
los navegadores restringen `fetch`/módulos al abrir un archivo con
`file://` directamente:

```bash
# con Python (suele venir instalado)
python -m http.server 8080

# o con Node
npx serve .
```

Luego abre `http://localhost:8080` en el navegador.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (o usa uno existente) y sube estos
   archivos a la rama principal (`main`).
2. En el repositorio, ve a **Settings → Pages**.
3. En "Build and deployment", elige **Deploy from a branch**, selecciona
   la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub entrega una URL pública en uno o dos minutos, con el
   formato:
   - `https://usuario.github.io/` si el repositorio se llama
     `usuario.github.io`, o
   - `https://usuario.github.io/nombre-del-repositorio/` para
     cualquier otro nombre de repositorio.

No hace falta ningún ajuste adicional en el código para que funcione
en cualquiera de los dos casos.

## Dónde cambiar cada cosa

- **Textos**: todos están directamente en `index.html`, en español y
  sin marcadores de posición — busca la sección por su `id`
  (`#servicios`, `#proceso`, `#sobre`, `#contacto`) o por el texto
  visible.
- **Instagram / contacto**: el enlace
  `https://www.instagram.com/dev.altus/` aparece cuatro veces en
  `index.html` (botón del encabezado, dos llamados a la acción y el
  pie de página). Reemplázalo en las cuatro si cambia el usuario.
- **Colores**: están centralizados como variables al inicio de
  `styles.css` (bloque `:root`), con su versión para modo oscuro justo
  debajo (`@media (prefers-color-scheme: dark)`).
- **Imágenes**: reemplaza los archivos dentro de `assets/` conservando
  el mismo nombre, o actualiza la ruta en `index.html` si usas otro
  nombre de archivo. `nublo.png` es la ilustración de la mascota en el
  inicio; `og-image.jpg` es la imagen que se muestra al compartir el
  enlace (por ejemplo, al pegarlo en la biografía o en un mensaje de
  Instagram).
- **Metadatos para compartir**: título, descripción e imagen de vista
  previa están en las etiquetas `<meta property="og:...">` y
  `<meta name="twitter:...">` dentro de `<head>`.

## URL para poner en Instagram

Una vez publicado, coloca en la biografía de Instagram la URL exacta
que te entregó GitHub Pages en el paso anterior (por ejemplo
`https://usuario.github.io/altus-dev/`). Avísame cuál es el
repositorio definitivo si quieres que deje esa URL ya escrita en el
código (por ejemplo en la metaetiqueta `og:url`, que hoy no está
incluida porque el sitio todavía no tiene una dirección pública).
