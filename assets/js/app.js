/* ------------------------------------------------------------------
   Técnicas de Investigación Social II — guía interactiva
   Vanilla JS, sin dependencias ni almacenamiento.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================ NAVEGACIÓN ============================ */

  const menuBtn = $('#menuBtn');
  const nav = $('#navPrincipal');

  menuBtn.addEventListener('click', () => {
    const abierto = nav.classList.toggle('nav--abierta');
    menuBtn.setAttribute('aria-expanded', String(abierto));
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('nav--abierta');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  /* ====================== HERO: CODIFICAR EN VIVO ===================== */

  const heroMarcas = $$('#heroTranscripcion .marca');
  const heroCodigos = $$('#heroCodigos .codigo');

  function animarHero() {
    heroMarcas.forEach((m) => m.classList.remove('marca--visible'));
    heroCodigos.forEach((c) => c.classList.remove('codigo--visible'));

    if (menosMovimiento) {
      heroMarcas.forEach((m) => m.classList.add('marca--visible'));
      heroCodigos.forEach((c) => c.classList.add('codigo--visible'));
      return;
    }
    heroMarcas.forEach((marca, i) => {
      const codigo = heroCodigos[i];
      setTimeout(() => {
        marca.classList.add('marca--visible');
        setTimeout(() => codigo && codigo.classList.add('codigo--visible'), 340);
      }, 700 + i * 900);
    });
  }

  $('#repetirHero').addEventListener('click', animarHero);
  setTimeout(animarHero, 350);

  /* =========================== LOS 7 TEMAS =========================== */

  const contenedorTemas = $('#listaTemas');

  contenedorTemas.innerHTML = TEMAS.map((t) => {
    const bloques = t.bloques.map((b) => `
      <div class="bloque">
        <h4>${b.h}</h4>
        <p>${b.p}</p>
        ${b.lista.length ? `<ul>${b.lista.map((li) => `<li>${li}</li>`).join('')}</ul>` : ''}
      </div>`).join('');

    const atlas = t.enlaceAtlas ? `
      <p class="tema__atlas">
        <a href="#laboratorio">Practica la codificación en el laboratorio</a> y sigue con la
        <a href="https://javicanton.github.io/curso-atlas-ti" target="_blank" rel="noopener">introducción al análisis cualitativo con ATLAS.ti</a>.
      </p>` : '';

    return `
    <article class="tema" id="tema-${t.num}">
      <button class="tema__cabecera" type="button" aria-expanded="false" aria-controls="panel-${t.num}">
        <span class="tema__num">${String(t.num).padStart(2, '0')}</span>
        <span class="tema__titular">
          <span class="tema__titulo">${t.titulo}</span>
          <span class="tema__idea">${t.idea}</span>
        </span>
        <span class="tema__eje">${t.eje}</span>
        <span class="tema__flecha" aria-hidden="true"></span>
      </button>
      <div class="tema__panel" id="panel-${t.num}" hidden>
        <div class="tema__contenido">
          ${bloques}
          <div class="tema__aplicacion">
            <h4>En Espacio Puente</h4>
            <p>${t.caso}</p>
          </div>
          <div class="tema__error">
            <h4>El error que más se repite</h4>
            <p>${t.error}</p>
          </div>
          <blockquote class="tema__frase">${t.frase}</blockquote>
          ${atlas}
        </div>
      </div>
    </article>`;
  }).join('');

  function alternarTema(cabecera, forzar) {
    const panel = document.getElementById(cabecera.getAttribute('aria-controls'));
    const abierto = typeof forzar === 'boolean' ? forzar : cabecera.getAttribute('aria-expanded') !== 'true';
    cabecera.setAttribute('aria-expanded', String(abierto));
    panel.hidden = !abierto;
    cabecera.closest('.tema').classList.toggle('tema--abierto', abierto);
  }

  contenedorTemas.addEventListener('click', (e) => {
    const cab = e.target.closest('.tema__cabecera');
    if (cab) alternarTema(cab);
  });

  $('#abrirTodos').addEventListener('click', () => $$('.tema__cabecera').forEach((c) => alternarTema(c, true)));
  $('#cerrarTodos').addEventListener('click', () => $$('.tema__cabecera').forEach((c) => alternarTema(c, false)));

  // Si se llega por enlace directo a un tema, se abre solo.
  function abrirDesdeHash() {
    const m = /^#tema-(\d)$/.exec(window.location.hash);
    if (!m) return;
    const art = document.getElementById('tema-' + m[1]);
    if (art) alternarTema($('.tema__cabecera', art), true);
  }
  window.addEventListener('hashchange', abrirDesdeHash);
  abrirDesdeHash();

  /* ======================== SELECTOR DE TÉCNICA ====================== */

  const selector = $('#selector');
  const resultado = $('#resultado');

  selector.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(selector);
    const q1 = datos.get('q1'), q2 = datos.get('q2'), q3 = datos.get('q3');

    if (!q1 || !q2 || !q3) {
      resultado.hidden = false;
      resultado.className = 'resultado resultado--falta';
      resultado.innerHTML = '<p>Faltan respuestas. Contesta a las tres preguntas y vuelve a intentarlo.</p>';
      return;
    }

    const r = RECOMENDACIONES[q1];
    resultado.hidden = false;
    resultado.className = 'resultado';
    resultado.innerHTML = `
      <p class="resultado__etiqueta">Por aquí empezaría</p>
      <h3>${r.tecnica}</h3>
      <p>${r.porque}</p>
      <div class="resultado__cajas">
        <div><h4>Ten en cuenta</h4><p>${r.ojo}</p></div>
        <div><h4>Con el tiempo que tienes</h4><p>${AJUSTES_TIEMPO[q2][q1]}</p></div>
        <div><h4>Con tu acceso al campo</h4><p>${AJUSTES_ACCESO[q3]}</p></div>
      </div>
      <p class="resultado__pie">
        <a class="boton" href="#tema-${r.tema}">Ir al tema ${r.tema}</a>
        <span>Ninguna técnica es obligatoria: si justificas bien la coherencia entre problema, diseño, técnica y análisis, otra elección también vale.</span>
      </p>`;
    resultado.scrollIntoView({ behavior: menosMovimiento ? 'auto' : 'smooth', block: 'nearest' });
  });

  /* ===================== LABORATORIO DE CODIFICACIÓN ================= */

  const fragmento = $('#fragmento');
  const paleta = $('#paleta');
  const labAyuda = $('#labAyuda');
  const labResultado = $('#labResultado');
  let codigoActivo = null;
  const asignados = {};

  fragmento.innerHTML = FRAGMENTO.map((s) => `
    <button class="seg" type="button" data-id="${s.id}" aria-pressed="false">
      <span class="seg__texto">${s.texto}</span>
      <span class="seg__etiqueta" aria-hidden="true"></span>
    </button>`).join('');

  paleta.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    const cod = chip.dataset.cod;
    if (codigoActivo === cod) {
      codigoActivo = null;
      chip.classList.remove('chip--activo');
      labAyuda.textContent = 'Ningún código seleccionado. Pincha en uno para empezar.';
      return;
    }
    codigoActivo = cod;
    $$('.chip', paleta).forEach((c) => c.classList.toggle('chip--activo', c === chip));
    labAyuda.textContent = 'Con «' + CODIGOS[cod].nombre + '» activo, pincha en las frases donde aparezca. Vuelve a pinchar para quitarlo.';
  });

  fragmento.addEventListener('click', (e) => {
    const seg = e.target.closest('.seg');
    if (!seg) return;
    if (!codigoActivo) {
      labAyuda.textContent = 'Primero elige un código arriba y después pincha en la frase.';
      labAyuda.classList.add('lab__ayuda--aviso');
      setTimeout(() => labAyuda.classList.remove('lab__ayuda--aviso'), 1200);
      return;
    }
    const id = seg.dataset.id;
    if (asignados[id] === codigoActivo) {
      delete asignados[id];
      seg.className = 'seg';
      seg.setAttribute('aria-pressed', 'false');
      $('.seg__etiqueta', seg).textContent = '';
    } else {
      asignados[id] = codigoActivo;
      seg.className = 'seg seg--' + CODIGOS[codigoActivo].clase;
      seg.setAttribute('aria-pressed', 'true');
      $('.seg__etiqueta', seg).textContent = CODIGOS[codigoActivo].nombre;
    }
  });

  $('#compararLab').addEventListener('click', () => {
    const hechos = Object.keys(asignados).length;
    if (hechos === 0) {
      labResultado.hidden = false;
      labResultado.className = 'lab__resultado lab__resultado--falta';
      labResultado.innerHTML = '<p>Todavía no has codificado nada. Elige un código y marca al menos una frase.</p>';
      return;
    }
    const aciertos = FRAGMENTO.filter((s) => asignados[s.id] === s.correcto).length;

    const filas = FRAGMENTO.map((s) => {
      const tuyo = asignados[s.id];
      const igual = tuyo === s.correcto;
      const estado = !tuyo ? 'sin' : (igual ? 'igual' : 'distinto');
      const etiquetaTuya = tuyo
        ? `<span class="pastilla pastilla--${CODIGOS[tuyo].clase}">${CODIGOS[tuyo].nombre}</span>`
        : '<span class="pastilla pastilla--vacia">Sin codificar</span>';
      return `
        <li class="comparacion comparacion--${estado}">
          <p class="comparacion__cita">${s.texto}</p>
          <p class="comparacion__codigos">
            <span>Tú: ${etiquetaTuya}</span>
            <span>Propuesta: <span class="pastilla pastilla--${CODIGOS[s.correcto].clase}">${CODIGOS[s.correcto].nombre}</span></span>
          </p>
          <p class="comparacion__razon">${s.razon}</p>
        </li>`;
    }).join('');

    let cierre;
    if (aciertos === FRAGMENTO.length) {
      cierre = 'Coincides en las seis. Ahora la pregunta interesante es otra: ¿podrías defender una codificación distinta de la frase sobre la cita para dentro de un mes? Casi siempre se puede, y eso no es un fallo del método.';
    } else if (aciertos >= 4) {
      cierre = 'Coincides en la mayoría. Donde no coincides, lee la razón y decide si te convence: en codificación no hay una única respuesta correcta, hay decisiones que se sostienen mejor o peor.';
    } else {
      cierre = 'Hay bastantes diferencias, y eso es normal la primera vez. Fíjate sobre todo en un criterio: cada código debe cubrir un solo concepto. Si dudas entre dos, casi siempre es que el pasaje tiene dos capas y admite dos códigos.';
    }

    labResultado.hidden = false;
    labResultado.className = 'lab__resultado';
    labResultado.innerHTML = `
      <p class="lab__marcador">Coincides con la propuesta en <strong>${aciertos} de ${FRAGMENTO.length}</strong> fragmentos.</p>
      <ul class="comparaciones">${filas}</ul>
      <p class="lab__cierre">${cierre}</p>`;
    labResultado.scrollIntoView({ behavior: menosMovimiento ? 'auto' : 'smooth', block: 'nearest' });
  });

  $('#reiniciarLab').addEventListener('click', () => {
    Object.keys(asignados).forEach((k) => delete asignados[k]);
    codigoActivo = null;
    $$('.chip', paleta).forEach((c) => c.classList.remove('chip--activo'));
    $$('.seg', fragmento).forEach((s) => {
      s.className = 'seg';
      s.setAttribute('aria-pressed', 'false');
      $('.seg__etiqueta', s).textContent = '';
    });
    labAyuda.textContent = 'Ningún código seleccionado. Pincha en uno para empezar.';
    labResultado.hidden = true;
    labResultado.innerHTML = '';
  });

  /* =========================== AUTOEVALUACIÓN ======================== */

  const test = $('#test');
  const marcador = $('#marcador');
  let respondidas = 0, correctas = 0;

  function pintarTest() {
    respondidas = 0; correctas = 0;
    marcador.textContent = '';
    test.innerHTML = PREGUNTAS.map((q, i) => `
      <fieldset class="pregunta-test" data-i="${i}">
        <legend><span class="pregunta-test__num">${i + 1}</span> ${q.p}</legend>
        <div class="opciones">
          ${q.o.map((op, j) => `
            <button class="opcion" type="button" data-i="${i}" data-j="${j}">${op}</button>`).join('')}
        </div>
        <p class="feedback" hidden></p>
      </fieldset>`).join('');
  }

  test.addEventListener('click', (e) => {
    const btn = e.target.closest('.opcion');
    if (!btn) return;
    const fs = btn.closest('.pregunta-test');
    if (fs.classList.contains('pregunta-test--hecha')) return;

    const i = Number(btn.dataset.i), j = Number(btn.dataset.j);
    const q = PREGUNTAS[i];
    const acierto = j === q.c;

    fs.classList.add('pregunta-test--hecha');
    $$('.opcion', fs).forEach((o) => {
      o.disabled = true;
      if (Number(o.dataset.j) === q.c) o.classList.add('opcion--correcta');
    });
    if (!acierto) btn.classList.add('opcion--fallo');

    const fb = $('.feedback', fs);
    fb.hidden = false;
    fb.innerHTML = `<strong>${acierto ? 'Correcto.' : 'No es esa.'}</strong> ${q.f}`;

    respondidas++;
    if (acierto) correctas++;
    marcador.textContent = respondidas < PREGUNTAS.length
      ? `${correctas} de ${respondidas} acertadas.`
      : `Has terminado: ${correctas} de ${PREGUNTAS.length}. Repasa las que fallaste en el tema correspondiente.`;
  });

  $('#reiniciarTest').addEventListener('click', pintarTest);
  pintarTest();

  /* ============================== GLOSARIO ========================== */

  const listaGlosario = $('#listaGlosario');
  const vacio = $('#glosarioVacio');

  listaGlosario.innerHTML = GLOSARIO.map(([t, d]) => `
    <div class="termino" data-busca="${(t + ' ' + d).toLowerCase()}">
      <dt>${t}</dt><dd>${d}</dd>
    </div>`).join('');

  const normaliza = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  $('#buscadorGlosario').addEventListener('input', (e) => {
    const q = normaliza(e.target.value.trim());
    let visibles = 0;
    $$('.termino', listaGlosario).forEach((el) => {
      const coincide = !q || normaliza(el.dataset.busca).includes(q);
      el.hidden = !coincide;
      if (coincide) visibles++;
    });
    vacio.hidden = visibles > 0;
  });

})();
