# Técnicas de Investigación Social II — guía interactiva

Sitio de apoyo a la asignatura **Técnicas de Investigación Social II** del Máster en
Intervención Social (UNIR). Prof. Javier Cantón.

Explica los siete temas con ejemplos, un caso que los recorre todos («Espacio Puente»)
y tres ejercicios: un selector de técnica, un laboratorio de codificación y una
autoevaluación. Es HTML, CSS y JavaScript, sin dependencias ni paso de compilación.

## Qué hay aquí

- Un caso único, Espacio Puente, que sirve de hilo para todas las técnicas.
- Un selector que recomienda técnica según la pregunta, el tiempo y el acceso al campo.
- Los siete temas, cada uno con la idea central, cómo se aplicaría al caso y el error
  que más se repite en los trabajos.
- Un laboratorio para practicar la codificación a mano, y el enlace al curso de ATLAS.ti.
- Una autoevaluación con la lógica del examen (decidir, no memorizar) y un glosario.

## Numeración de los temas

1. Introducción · Singularidades del objeto de las ciencias sociales
2. Proyecto · Diseño de estudios cualitativos
3. Análisis · Análisis de datos cualitativos
4. Técnica · Observación participante
5. Técnica · Entrevistas abiertas o en profundidad
6. Técnica · Historias de vida
7. Técnica · Grupos de discusión

## Archivos

```
index.html                  Estructura de la página
assets/css/estilos.css      Estilos
assets/js/contenidos.js     Texto editable (temas, test, glosario, laboratorio)
assets/js/app.js            Lógica de los interactivos
```

Casi todo lo que se quiere cambiar está en **`assets/js/contenidos.js`**, separado de la
lógica a propósito. No hace falta tocar `app.js`.

- **`TEMAS`** — los siete temas. Cada uno tiene `num`, `eje` (`Introducción`, `Proyecto`,
  `Análisis` o `Técnica`), `titulo`, `idea`, `bloques`, `caso`, `error`, `frase` y,
  opcionalmente, `enlaceAtlas: true`.
- **`FRAGMENTO`** y **`CODIGOS`** — el ejercicio de codificación.
- **`PREGUNTAS`** — la autoevaluación.
- **`GLOSARIO`** — pares de `[término, definición]`.
- **`RECOMENDACIONES`**, **`AJUSTES_TIEMPO`** y **`AJUSTES_ACCESO`** — el selector de técnica.

Se puede escribir HTML dentro de los textos (`<strong>`, `<em>`, `<a>`).

La información de las dos actividades está en `index.html`, en la sección `#asignatura`.

## Accesibilidad y privacidad

- Navegable con teclado, con foco visible y estructura de encabezados correcta.
- Respeta `prefers-reduced-motion`: si el sistema pide menos movimiento, las animaciones no se ejecutan.
- Diseño adaptable a móvil.
- **No usa cookies, ni analítica, ni almacenamiento local.** Nada de lo que hace el
  alumnado en el laboratorio o en la autoevaluación se guarda ni se envía a ningún sitio.
  La única petición externa es la de las tipografías de Google Fonts.
