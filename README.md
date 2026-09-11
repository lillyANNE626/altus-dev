# Altus Dev — rediseño 2026

Landing estática, responsive y lista para GitHub Pages o cualquier hosting de archivos. No requiere compilación ni dependencias.

## Dirección de diseño

La idea visual es **precisión con personalidad**: estructura editorial, mucho aire y detalles técnicos discretos, equilibrados con la cercanía de Nublo. Se mantiene la identidad petróleo/aqua, pero el aqua deja de ocupar grandes superficies y pasa a señalar acciones, énfasis y estados. La tipografía display aporta carácter; la sans serif conserva legibilidad.

El hero responde tres preguntas en el primer viewport: qué hace Altus Dev, para quién y cuál es el siguiente paso. El CTA conduce al único canal de contacto confirmado. No se agregaron testimonios, cifras, proyectos ni formularios ficticios.

## Estructura

1. Header sticky: marca, navegación, tema y CTA.
2. Hero: propuesta de valor, beneficios breves y visual de Nublo.
3. Declaración: principio de claridad que diferencia la marca.
4. Servicios: tres ofertas con alcance comprensible.
5. Proceso: cuatro pasos con responsabilidades visibles.
6. Enfoque Altus: trato directo, criterio técnico y continuidad.
7. Contacto: invitación concreta a conversar por Instagram.
8. Footer: navegación y datos esenciales.

## Sistema de diseño

| Token | Claro | Oscuro | Uso |
| --- | --- | --- | --- |
| `--bg` | `#F4FBFC` | `#071B21` | Fondo general |
| `--surface` | `#FFFFFF` | `#0D272F` | Tarjetas y paneles |
| `--ink` | `#0B3742` | `#EDFAFA` | Texto principal |
| `--ink-soft` | `#496B73` | `#AAC5CA` | Texto secundario |
| `--primary` | `#0B4654` | `#9BDFDD` | Acciones y bloques de alto contraste |
| `--accent` | `#86D2D0` | `#72C9C7` | Acentos de marca |
| `--line` | `#CFE5E8` | `#21434B` | Bordes |

Tipografías: DM Serif Display para títulos y DM Sans para interfaz/cuerpo. El título principal usa `clamp(3.15rem, 10vw, 6.6rem)` con línea 0.94; títulos de sección `clamp(2.5rem, 6vw, 4.7rem)`; cuerpo principal desde 1rem con línea 1.65. La escala espacial parte en múltiplos de 4/8 px. Radios: 12, 20 y 32 px. Sombras amplias, poco opacas y reservadas para jerarquía.

## Wireframe

```text
[ Header: Altus Dev | Servicios · Proceso · Enfoque | Tema | Hablemos ]

[ Mensaje principal + CTA             | Nublo en marco editorial ]
[ Indicadores de confianza            | Notas flotantes          ]

[ Manifiesto breve: claridad antes que ruido                         ]

[ Servicios: Sitio / Catálogo destacado / Formulario                 ]

[ Introducción de proceso fija        | 01 Entender                ]
[                                     | 02 Definir                 ]
[                                     | 03 Diseñar y desarrollar   ]
[                                     | 04 Revisar y publicar      ]

[ Enfoque y trato directo             | Cuadrícula de principios   ]

[ CTA de contacto: contexto + botón de Instagram                     ]
[ Footer                                                          ]
```

En móvil, cada bloque pasa a una sola columna, el menú se vuelve desplegable y se ocultan las notas flotantes que competirían con el contenido.

## Copywriting aplicado

- Se reemplazó lenguaje genérico por resultados entendibles: ordenar la oferta, responder dudas y facilitar el contacto.
- Se evita prometer ventas, autonomía total o mantenimiento cero.
- El texto usa primera persona sin convertir el nombre personal en elemento de marca.
- El CTA “Cuéntame tu proyecto” reduce presión; la sección final aclara que el cliente no necesita llegar con todo definido.

## Checklist

- HTML semántico, jerarquía de encabezados y landmarks.
- Enlace de salto, foco visible, control con teclado y cierre del menú con Escape.
- Contraste AA en ambos temas y soporte de colores forzados.
- Respeto por `prefers-reduced-motion`.
- Layout mobile-first y puntos de ajuste a 768 y 976 px.
- Tipografía fluida, áreas táctiles mínimas y texto ampliable.
- Imagen principal dimensionada, optimizada y con prioridad de carga.
- JavaScript progresivo y sin dependencias.
- Metadatos de título, descripción, Open Graph y tema.
- Sin formularios falsos, métricas inventadas ni enlaces de contacto no confirmados.

## Archivos

- `index.html`: estructura y contenido.
- `styles.css`: tokens, temas, responsive y movimiento.
- `script.js`: menú, tema, header y aparición progresiva.
- `assets/`: favicon e imagen optimizada.

El contenido está preparado para publicarse directamente desde la raíz de la rama `main` con GitHub Pages.
