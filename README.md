# Técnicas de Investigación Social II — guía interactiva

Sitio de apoyo a la asignatura **Técnicas de Investigación Social II** del Máster en
Intervención Social (UNIR). Prof. Javier Cantón.

Explica los siete temas de la asignatura con ejemplos, un caso que los recorre todos
(«Espacio Puente») y tres ejercicios interactivos: un selector de técnica, un laboratorio
de codificación y una autoevaluación.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo, `tecnicas-investigacion-social-2`) y sube estos archivos a la rama `main`.
2. En el repositorio, ve a **Settings → Pages**.
3. En *Source* elige **Deploy from a branch**, y selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En un par de minutos estará en `https://javicanton.github.io/nombre-del-repo/`.

Desde la línea de comandos:

```bash
git init
git add .
git commit -m "Guía interactiva de la asignatura"
git branch -M main
git remote add origin https://github.com/javicanton/nombre-del-repo.git
git push -u origin main
```

No hace falta compilar nada: es HTML, CSS y JavaScript sin dependencias ni build. El
archivo `.nojekyll` evita que GitHub Pages procese el sitio con Jekyll.

## Estructura

```
index.html                  Toda la estructura de la página
assets/css/estilos.css      Estilos
assets/js/contenidos.js     TODO EL TEXTO EDITABLE (temas, test, glosario, laboratorio)
assets/js/app.js            Lógica de los interactivos
.nojekyll
```

## Cómo editar los contenidos

Casi todo lo que querrás cambiar está en **`assets/js/contenidos.js`**, separado de la
lógica a propósito. No hace falta tocar `app.js`.

- **`TEMAS`** — los siete temas. Cada uno tiene `num`, `eje` (`Introducción`, `Proyecto`,
  `Análisis` o `Técnica`), `titulo`, `idea` (la frase que resume el tema), `bloques`
  (cada uno con encabezado `h`, párrafo `p` y una `lista` que puede ir vacía), `caso`
  (aplicación a Espacio Puente), `error` (el fallo típico), `frase` (la cita destacada) y,
  opcionalmente, `enlaceAtlas: true`.
- **`FRAGMENTO`** y **`CODIGOS`** — el ejercicio de codificación. Para cambiar la entrevista,
  sustituye los seis objetos de `FRAGMENTO`; cada uno lleva su código `correcto` y la
  `razon` que se muestra al comparar.
- **`PREGUNTAS`** — la autoevaluación. `p` es el enunciado, `o` las opciones, `c` el índice
  de la correcta (empezando en 0) y `f` la explicación.
- **`GLOSARIO`** — pares de `[término, definición]`.
- **`RECOMENDACIONES`**, **`AJUSTES_TIEMPO`** y **`AJUSTES_ACCESO`** — el selector de técnica.

Se puede escribir HTML dentro de los textos (`<strong>`, `<em>`, `<a>`), lo que es cómodo
para destacar conceptos o añadir enlaces.

La información de las dos actividades está en `index.html`, en la sección `#asignatura`.

## Numeración de los temas

La numeración es la misma en clases, guía y este sitio:

1. Introducción · Singularidades del objeto de las ciencias sociales
2. Proyecto · Diseño de estudios cualitativos
3. Análisis · Análisis de datos cualitativos
4. Técnica · Observación participante
5. Técnica · Entrevistas abiertas o en profundidad
6. Técnica · Historias de vida
7. Técnica · Grupos de discusión

## Accesibilidad y privacidad

- Navegable con teclado, con foco visible y estructura de encabezados correcta.
- Respeta `prefers-reduced-motion`: si el sistema pide menos movimiento, las animaciones no se ejecutan.
- Diseño adaptable a móvil.
- **No usa cookies, ni analítica, ni almacenamiento local.** Nada de lo que hace el
  alumnado en el laboratorio o en la autoevaluación se guarda ni se envía a ningún sitio.
  La única petición externa es la de las tipografías de Google Fonts; si prefieres evitarla,
  descarga las fuentes a `assets/fonts/` y cambia el `<link>` de `index.html` por un `@font-face`.
