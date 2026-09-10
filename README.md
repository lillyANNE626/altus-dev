# Altus Dev — sitio de presentación

Landing de una sola página para Altus Dev. Es HTML, CSS y JavaScript
estáticos, sin frameworks ni build: se puede abrir tal cual o publicar
directamente en GitHub Pages.

## Estructura

```
index.html            Contenido y estructura de la página
styles.css            Estilos (paleta, tipografía, layout)
script.js             Menú móvil accesible + año del pie de página
assets/
  favicon.svg         Ícono del sitio
  nublo.png           Nublo en el inicio (hero)
  nublo-servicios.png Nublo junto al encabezado de Servicios
  nublo-proceso.png   Nublo junto a los pasos de Cómo trabajo
  nublo-sobre.png     Nublo junto al texto de Sobre Altus Dev
  nublo-contacto.png  Nublo en la franja de Contacto
  og-image.jpg        Imagen de vista previa al compartir el enlace
```

La paleta es fija (azul hielo, petróleo y acentos aqua): el sitio no
cambia con el modo oscuro del sistema, para mantener siempre la misma
identidad visual de la marca.

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

Ya está publicado: el repositorio es
[github.com/lillyANNE626/altus-dev](https://github.com/lillyANNE626/altus-dev)
y GitHub Pages sirve la rama `main` completa (carpeta raíz). Cualquier
`git push` a `main` actualiza el sitio publicado en uno o dos minutos.

Para republicarlo desde cero en otra cuenta o repositorio:

1. Crea un repositorio en GitHub (público, para que Pages sea gratis)
   y sube estos archivos a la rama `main`.
2. En el repositorio, ve a **Settings → Pages**.
3. En "Build and deployment", elige **Deploy from a branch**, selecciona
   la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub entrega una URL pública en uno o dos minutos, con el
   formato `https://usuario.github.io/nombre-del-repositorio/`.

No hace falta ningún ajuste en el código: todas las rutas son
relativas, así que funcionan igual bajo cualquier subruta.

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
  `styles.css` (bloque `:root`). La paleta es única a propósito: no
  cambia con el modo oscuro del sistema.
- **Imágenes**: reemplaza los archivos dentro de `assets/` conservando
  el mismo nombre, o actualiza la ruta en `index.html` si usas otro
  nombre de archivo. Las cinco ilustraciones `nublo-*.png` acompañan
  cada sección (ver tabla de arriba); `og-image.jpg` es la imagen que
  se muestra al compartir el enlace (por ejemplo, al pegarlo en la
  biografía o en un mensaje de Instagram).
- **Metadatos para compartir**: título, descripción e imagen de vista
  previa están en las etiquetas `<meta property="og:...">` y
  `<meta name="twitter:...">` dentro de `<head>`. Si cambias de
  repositorio o dominio, actualiza también `og:url`, `og:image` y
  `twitter:image`, que están escritos como URL absoluta.

## URL para poner en Instagram

**https://lillyanne626.github.io/altus-dev/**

Esa es la URL pública real, ya verificada (responde 200 y carga sin
errores en móvil y escritorio). Colócala como enlace del perfil de
Instagram.
