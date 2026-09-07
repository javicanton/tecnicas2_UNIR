/* ------------------------------------------------------------------
   Contenidos de la guía. Todo el texto editable está aquí, separado
   de la lógica (app.js) para que se pueda actualizar sin tocar código.
   ------------------------------------------------------------------ */

const TEMAS = [
  {
    num: 1,
    guia: 1,
    semana: '7–11 sept',
    titulo: 'Singularidades del objeto de las ciencias sociales',
    idea: 'La sociedad no se deja estudiar como una piedra: el investigador está dentro de aquello que investiga, y eso obliga a tener más de un método.',
    bloques: [
      {
        h: 'Cuatro niveles que no hay que mezclar',
        p: 'Casi todos los líos metodológicos vienen de confundir estos cuatro planos. Van de lo más abstracto a lo más concreto y cada uno responde a una pregunta distinta.',
        lista: [
          '<strong>Ontología</strong>: qué es la realidad social. ¿Existe como algo real o es el resultado del sentido que le damos?',
          '<strong>Epistemología</strong>: qué se puede llegar a conocer científicamente de esa realidad.',
          '<strong>Metodología</strong>: por qué vía accedemos a ella.',
          '<strong>Técnica</strong>: con qué herramienta concreta producimos los datos. La entrevista es una técnica, no una metodología.'
        ]
      },
      {
        h: 'Por qué las ciencias sociales no copian a la física',
        p: 'No existe un método científico único, aunque sí hay valores comunes. El objeto de las ciencias sociales tiene cuatro rasgos que lo hacen distinto:',
        lista: [
          'El propio investigador está incluido en el objeto.',
          'El objeto no es solo objetivo (estructuras, ambientes, procedimientos): también es subjetivo, son personas con voluntad y reflexividad.',
          'El objeto es reactivo: cuando estudiamos la sociedad, la cambiamos.',
          'Las personas son un ser complejo, difícil de aprehender.'
        ]
      },
      {
        h: 'Cinco vías de acceso a la realidad social',
        p: 'No compiten entre sí: cada una sirve para un tipo de pregunta. En intervención social las cinco tienen algo que decir.',
        lista: [
          '<strong>Histórico</strong>. Todo fenómeno social es histórico. Sirve para hacer «posdicción»: entender cómo esto ha llegado a ser lo que es. En intervención, marca qué transformaciones son realmente posibles en un contexto.',
          '<strong>Comparativo</strong>. Exige tensión entre semejanza y diferencia. Nos libra del etnocentrismo y da pistas sobre qué ha funcionado en otro sitio y podría adaptarse aquí.',
          '<strong>Crítico-racional</strong>. La ciencia no se ocupa solo de los medios. Si no discutimos racionalmente los fines, los fines quedan en manos de la opinión o de la fuerza. Intervenir es, literalmente, cambiar una realidad por otra que consideramos mejor.',
          '<strong>Cuantitativo</strong>. Medición, variables, correlaciones. Nos dice cuánta gente y con qué frecuencia.',
          '<strong>Cualitativo</strong>. El lenguaje como objeto, la observación, el sentido subjetivo de la acción. No busca explicar sino comprender (<em>verstehen</em>).'
        ]
      }
    ],
    caso: 'En Espacio Puente, lo cuantitativo ya está contado: 48 de 87 dejan de acudir. Ese número dice que el problema es relevante, pero no dice nada de por qué. La lógica y el sentido de ese abandono, desde el punto de vista de quien abandona, solo se alcanza por la vía cualitativa. Y el método histórico añadiría algo que ningún dato del año pasado recoge: cómo se diseñó el programa y qué se esperaba de él cuando se puso en marcha hace tres años.',
    error: 'Escribir «la metodología empleada fue la entrevista». Mezcla el nivel metodológico con el técnico. La metodología es cualitativa, de orientación comprensiva; la entrevista es la herramienta.',
    frase: '«Todo proyecto de intervención tiene un previo proyecto de investigación.»'
  },

  {
    num: 2,
    guia: 7,
    semana: '14–18 sept',
    titulo: 'Diseño de estudios cualitativos',
    idea: 'El diseño cualitativo es circular: recoges, analizas, y lo que descubres te obliga a volver al campo con otras preguntas.',
    bloques: [
      {
        h: 'El modelo circular frente al modelo lineal',
        p: 'En el modelo clásico primero se diseña, luego se recoge y al final se analiza. Glaser y Strauss proponen otra cosa: recogida, interpretación y selección del siguiente material se alimentan entre sí durante todo el proceso.',
        lista: [
          'La estructuración teórica del problema se pospone hasta que aparece en el estudio.',
          'Los supuestos no se aplican al objeto: se descubren al relacionarse con el campo.',
          'La circularidad obliga a preguntarse todo el rato hasta qué punto los métodos, las categorías y las teorías que uso hacen justicia a los datos.',
          'Recomendación central: actitud abierta ante la evidencia emergente. Atención flotante.'
        ]
      },
      {
        h: 'Validez y fiabilidad, sin complejos',
        p: 'Lo cualitativo no renuncia a los criterios de toda investigación empírica, los cumple de otra manera.',
        lista: [
          '<strong>Valor añadido</strong>: representatividad estructural. La interacción directa y sin restricciones con el objeto robustece la validez.',
          '<strong>Deficiencia</strong>: no hay representatividad estadística, no se pueden cuantificar las relaciones identificadas.',
          '<strong>Solución</strong>: número adecuado de casos y registros, triangulación, y procedimientos de análisis sistemáticos y explícitos.'
        ]
      },
      {
        h: 'La pregunta de investigación',
        p: 'La pregunta no se formula una vez: se reformula al conceptualizar el diseño, al entrar en el campo, al seleccionar los casos y al recoger los datos. Hay que hacerla del tamaño adecuado, delimitar el área de interés y poder responderla con los recursos que tienes.',
        lista: [
          '<strong>Orientadas a estados</strong>: cómo se ha producido cierto estado, de qué tipo es, con qué frecuencia y cómo se mantiene.',
          '<strong>Orientadas a procesos</strong>: cómo algo se desarrolla o cambia, con qué causas, consecuencias y estrategias.',
          '<strong>Generadoras</strong>: si buscan confirmar supuestos existentes o descubrir supuestos nuevos.'
        ]
      },
      {
        h: 'Dónde te colocas tú',
        p: 'El investigador y sus competencias comunicativas son el instrumento principal de recogida de datos. Por eso no puede adoptar un rol neutral. Adler y Adler describen tres posiciones intermedias entre el distanciamiento y la fusión:',
        lista: [
          '<strong>Periférico</strong>: presente en el campo, sin implicarse en sus actividades centrales.',
          '<strong>Activo</strong>: participa en las actividades, sin llegar a ser un miembro más.',
          '<strong>Participante completo</strong>: es un miembro del grupo, con todo lo que eso implica.',
          'En campos sensibles se combinan roles al descubierto y encubiertos, lo que abre un problema ético que hay que justificar, no esquivar.'
        ]
      }
    ],
    caso: 'La dirección de Espacio Puente quiere saber «por qué abandonan». Esa pregunta es demasiado grande para responderla. Una del tamaño adecuado sería: «¿cómo encajan las citas de seguimiento del jueves por la mañana en las semanas de las personas que trabajan a turnos cambiantes?». Se puede responder en cuatro meses, con el acceso que hay, y su respuesta sirve para decidir algo concreto.',
    error: 'Cerrar el guion, la muestra y las categorías antes de pisar el campo, y luego no cambiar nada aunque el campo diga otra cosa. Eso es un diseño cuantitativo con datos cualitativos dentro.',
    frase: '«El estrecho vínculo entre la recogida y la interpretación de los datos permite al investigador no solo hacer repetidas veces la pregunta, sino también responderla.» — Flick'
  },

  {
    num: 3,
    guia: 6,
    semana: '21–25 sept',
    titulo: 'Análisis de datos cualitativos',
    idea: 'Analizar son dos tareas a la vez: una administrativa, que consiste en ordenar y poder recuperar, y otra interpretativa, que consiste en volver a narrar.',
    bloques: [
      {
        h: 'Tres familias de análisis',
        p: 'La correspondencia con cada tipo de material es una pauta heurística, no una ley: en la práctica investigadora son intercambiables.',
        lista: [
          '<strong>Inducción analítica y teoría fundamentada</strong> (sobre todo, observaciones). La inducción analítica formula y reformula hipótesis progresivamente hasta encontrar patrones generales. La teoría fundamentada genera teoría desde los datos mediante codificación abierta, axial y selectiva.',
          '<strong>Análisis de contenido</strong> (sobre todo, documentos). Sistematiza, codifica y categoriza para revelar temas recurrentes y estructuras subyacentes. Puede ser cualitativo y cuantitativo a la vez.',
          '<strong>Análisis del discurso</strong> (sobre todo, discursos hablados). Estudia cómo el lenguaje construye realidades, identidades y relaciones de poder, atendiendo tanto a lo explícito como a lo implícito.'
        ]
      },
      {
        h: 'Las decisiones de fondo que condicionan tu análisis',
        p: 'Antes de codificar una sola línea ya has tomado, sepas o no, estas tres decisiones.',
        lista: [
          '<strong>Inducción o deducción.</strong> La lógica de lo cualitativo es inductiva: generar teoría sin imponer un marco a priori. A menudo se trata de comprobar corazonadas.',
          '<strong>Nomotético o idiográfico.</strong> ¿Te interesan las dimensiones en que todos varían y lo que tienen en común, o el individuo como caso único?',
          '<strong>Realismo o constructivismo.</strong> ¿Describes un mundo que existe aparte de ti, o analizas construcciones sociales múltiples? No hay análisis puros: el tuyo será una interpretación y también una construcción.'
        ]
      },
      {
        h: 'Antes de analizar: preparar',
        p: 'La transcripción no es un trámite mecánico. Es un cambio de medio, y en todo cambio de medio hay transformación, interpretación y pérdida.',
        lista: [
          'El nivel de transcripción va de la exacta a la funcional: elígelo según lo que vayas a analizar.',
          'Lo habitual es que transcriba la misma persona que investiga, y eso ya es un primer análisis.',
          'La precisión importa: un error de transcripción puede cambiar el significado de una frase.',
          'Los datos de internet ya llegan digitalizados, pero necesitan más procesamiento, no menos.'
        ]
      },
      {
        h: 'Descripción densa',
        p: 'Antes de explicar hay que describir bien. La descripción densa de Geertz no es acumular detalle: es mostrar la riqueza de lo que pasa y cómo se involucran ahí las intenciones y las estrategias de las personas. Solo desde ahí se puede ir más allá y ofrecer una explicación.',
        lista: []
      },
      {
        h: 'CAQDAS: qué es y qué no es',
        p: 'El software transformó un proceso que antes era manual: textos, memos, notas y códigos exigían una gestión que ahora el ordenador simplifica. Lo que no hace es interpretar por ti.',
        lista: [
          '<strong>Lo que debe tener</strong>: búsqueda de contenido, codificación, enlazado, mapas y redes, consultas, y herramientas de escritura y anotación.',
          '<strong>Ventajas</strong>: ahorro de tiempo, organización, inclusividad, exploración de los datos, hipertextualidad, intersubjetividad interna y externa, reutilización de datos secundarios, modelización y visualización, exportación.',
          '<strong>Resistencias epistemológicas</strong>: riesgo de homogeneización, pérdida del aporte individual, alejamiento de lo cualitativo, mitificación de la informática. El ordenador es una herramienta, no un experto.',
          '<strong>Resistencias operativas</strong>: curva de aprendizaje, coste, formatos, y el tiempo de transcripción.'
        ]
      }
    ],
    caso: 'Con las entrevistas de Espacio Puente transcritas, el primer paso no es teorizar sino gestionar: nombrar los documentos, anonimizarlos y poder recuperar en dos segundos todos los pasajes en los que alguien habla de horarios. Solo cuando ese material está ordenado empieza lo interpretativo: decidir que «me cambian el turno cada semana» y «me dieron cita para dentro de un mes» son dos caras de la misma cosa, y ponerle nombre a esa cosa.',
    error: 'Convertir la lista de códigos en el índice del trabajo. El sistema de códigos es a-teórico y describe los datos; los capítulos de resultados los organizas después, y no tienen por qué coincidir.',
    frase: 'ATLAS.ti trabaja sobre el principio VISE: Visualización, Inmersión, Serendipia y Exploración.',
    enlaceAtlas: true
  },

  {
    num: 4,
    guia: 2,
    semana: '28 sept–2 oct',
    titulo: 'Observación participante',
    idea: 'Etnografía significa literalmente descripción de un pueblo: se ocupa de las personas en sentido colectivo, no de individuos.',
    bloques: [
      {
        h: 'De dónde viene',
        p: 'Los pioneros creían estar aplicando el método de las ciencias naturales, pero vivir en la comunidad que analizaban introducía un grado de subjetividad que ese método no contemplaba. Esa tensión sigue viva.',
        lista: [
          'Antropología británica: Radcliffe-Brown y Malinowski, en el contexto del colonialismo.',
          'Antropología estadounidense: Boas, Benedict, Mead y Lowie, estudiando pueblos nativos.',
          'Malinowski permaneció cuatro años en las Trobriand casi por accidente, cuando la Primera Guerra Mundial le sorprendió allí. De ahí la idea de inmersión total y a largo plazo.',
          'La Escuela de Chicago adaptó los métodos etnográficos al estudio de grupos sociales urbanos y modernos.'
        ]
      },
      {
        h: 'Siete rasgos del método etnográfico',
        p: 'Si a tu propuesta le falta alguno de estos rasgos, probablemente no estés haciendo etnografía sino observación puntual, que también es legítima pero es otra cosa.',
        lista: [
          '<strong>De campo</strong>: en los entornos reales donde vive la gente, no en un laboratorio.',
          '<strong>Personalizado</strong>: contacto diario cara a cara, participando y observando.',
          '<strong>Multifactorial</strong>: dos o más técnicas de recogida para triangular.',
          '<strong>De largo plazo</strong>: exige compromiso sostenido.',
          '<strong>Inductivo</strong>: acumula detalle descriptivo hasta llegar a patrones.',
          '<strong>Dialógico</strong>: las interpretaciones se construyen hablando con quienes participan.',
          '<strong>Integral</strong>: busca el retrato más completo posible del grupo.'
        ]
      },
      {
        h: 'El informe también es parte del método',
        p: 'El producto etnográfico es una narración, y la forma de narrar es una decisión metodológica con consecuencias.',
        lista: [
          '<strong>Modo realista</strong>: relato despersonalizado, presentado por un analista aparentemente neutral.',
          '<strong>Modo confesional</strong>: el etnógrafo es actor central y cuenta desde su punto de vista.',
          '<strong>Modo impresionista</strong>: adopta abiertamente recursos literarios, diálogos, retratos, metáforas.',
          'Todo informe necesita: introducción con el valor analítico, presentación densa del escenario, análisis que conecte los detalles con patrones socioculturales, y conclusión con la aportación del estudio.'
        ]
      },
      {
        h: 'El contexto ha cambiado',
        p: 'La caja de herramientas ya no es cuaderno, lápiz y cámara: hay grabadoras, móviles y CAQDAS. Y las comunidades ya no están aisladas ni ligadas necesariamente a un lugar. De ahí la etnografía virtual, que estudia comunidades mediadas digitalmente y obliga a replantear las implicaciones éticas desde cero.',
        lista: []
      }
    ],
    caso: 'La sala común de Espacio Puente a las cinco de la tarde es un campo etnográfico completo: quién se sienta con quién, quién habla con el equipo y quién lo evita, qué se resuelve en esa sala que no se resuelve en las citas formales. Ahí es donde se ven las redes de apoyo mutuo que ninguna entrevista formal sacaría igual de bien.',
    error: 'Escribir en las notas de campo «los jóvenes estaban desmotivados». Eso es interpretación disfrazada de dato. La nota descriptiva sería: «tres personas permanecieron unos cuarenta minutos en la sala sin dirigirse al equipo ni participar en el taller anunciado». La interpretación va después, y marcada como tal.',
    frase: '«La cultura se revela mejor en lo que la gente hace.»'
  },

  {
    num: 5,
    guia: 3,
    semana: '5–9 oct',
    titulo: 'Entrevistas abiertas o en profundidad',
    idea: 'Entre-vista: una visión entre dos. El conocimiento no se recoge, se produce en la interacción.',
    bloques: [
      {
        h: 'Conversación, pero no cualquier conversación',
        p: 'La entrevista de investigación es una conversación con una estructura y un propósito determinados por una de las partes. Suele atravesar tres secuencias, y la buena entrevista llega a la tercera.',
        lista: [
          '<strong>Interrogatorio</strong>: preguntas y respuestas, sin construcción compartida.',
          '<strong>Cooperación artificial</strong>: la persona colabora, pero dando lo que cree que se espera de ella.',
          '<strong>Entrevistador implicado</strong>: los dos construyen sentido sobre un tema de interés común.'
        ]
      },
      {
        h: 'Dos maneras de entender lo que estás haciendo',
        p: 'La metáfora que uses sin darte cuenta condiciona todo tu diseño.',
        lista: [
          '<strong>El minero</strong>: el conocimiento está ahí, enterrado en la persona, y la entrevista lo extrae. Concepción positivista, la entrevista como colección de hechos.',
          '<strong>El viajero</strong>: el conocimiento se produce en el camino, en la conversación misma. Concepción posmoderna, la entrevista como construcción social compartida.'
        ]
      },
      {
        h: 'El poder está repartido de forma desigual',
        p: 'Una entrevista de investigación no es un diálogo igualitario entre compañeros. Hay una asimetría específica: tú montas el escenario, controlas la secuencia y utilizas el resultado para tus propios propósitos. Reconocerlo no la invalida; ocultarlo, sí.',
        lista: []
      },
      {
        h: 'Ética que se decide sobre la marcha',
        p: 'Las directrices éticas se formulan de forma general y dejan mucho al juicio del investigador. Siendo tú el instrumento, las decisiones éticas se apoyan en gran medida en tu integridad como persona.',
        lista: [
          'Consentimiento informado, confidencialidad, consecuencias de participar y conciencia de tu propio papel.',
          'Durante la entrevista decides continuamente sobre qué profundizar y qué connotación puede ser demasiado sensible para seguir tirando del hilo.',
          'Más allá de la micro ética de proteger a quien participa, hay una macro ética: qué valor tiene el conocimiento que produces en un contexto social más amplio.'
        ]
      }
    ],
    caso: 'Un guion para Espacio Puente no se escribe como una lista de preguntas sino como bloques temáticos: la llegada al programa, una semana cualquiera, la relación con el equipo, los momentos de dejar de venir, y qué haría falta. Dentro de cada bloque, mejor pedir reconstrucciones concretas («cuéntame cómo fue la última vez que viniste») que pedir explicaciones («¿por qué dejaste de venir?»), porque las explicaciones ya vienen prefabricadas y las reconstrucciones no.',
    error: 'Preguntar «¿por qué dejaste de venir?» en el minuto tres. La persona te dará la razón que cree aceptable, la conversación se cerrará ahí y te quedarás en la cooperación artificial toda la entrevista.',
    frase: '«La entrevista es una conversación, es el arte de realizar preguntas y escuchar respuestas.» — Denzin y Lincoln'
  },

  {
    num: 6,
    guia: 4,
    semana: '12–16 oct',
    titulo: 'Historias de vida',
    idea: 'Es una entrevista en profundidad, pero girada noventa grados: donde la entrevista es sincrónica, la historia de vida es diacrónica.',
    bloques: [
      {
        h: 'Qué son y de dónde vienen',
        p: 'Se orientan hacia temas muy generales (la vida como totalidad, o una cuestión que atraviesa toda una vida) y requieren muchas aproximaciones entre el protagonista y quien relata.',
        lista: [
          '<em>El campesino polaco en Europa y América</em> (Thomas y Znaniecki, 1918-1920) es la investigación paradigmática de la Escuela de Chicago. Junto a la narración biográfica usaron la correspondencia entre familiares.',
          'Cuando la Escuela de Chicago declinó en los años treinta, los métodos cualitativos quedaron relegados a la antropología (Oscar Lewis) y al movimiento de historia oral.',
          'El renacer de la microsociología y el fin de la hegemonía cuantitativa trajeron de vuelta las historias de vida y los documentos personales.',
          'En España hay una tendencia anti-introspectiva, un cierto recato autobiográfico que hace este trabajo más difícil y más interesante.'
        ]
      },
      {
        h: 'Familia de términos',
        p: 'No son sinónimos y en un trabajo conviene usar el correcto.',
        lista: [
          '<strong>Autobiografía</strong>: vidas narradas por quienes las han vivido. Protagonista y relator coinciden, así que aumentan las cautelas por subjetividad e inexactitud.',
          '<strong>Biografía</strong>: el sujeto de la narración no es su autor final.',
          '<strong>Memorias</strong>: biografías obtenidas a partir de convocatorias públicas.',
          '<strong>Historia de vida</strong>: no es solo el relato, sino toda la información acumulada sobre esa vida (informes sociales, expedientes, documentos personales) más el trabajo de análisis.'
        ]
      },
      {
        h: 'El método de Bruselas: autobiografía asistida',
        p: 'Harré y De Waele proponen construir la autobiografía negociándola con un equipo. En su versión original eran doce personas, cada una analizando la vida desde su perspectiva profesional; en versión simplificada, cuatro personas de distintas edades, dos hombres y dos mujeres, dos de ellas con formación.',
        lista: [
          'La persona escribe su autobiografía. El texto se divide en segmentos temporales y temáticos.',
          'Cada miembro del equipo recibe un segmento, lo analiza y reconstruye desde ahí la vida del sujeto.',
          'El equipo presenta sus reconstrucciones y las confirma o modifica con el sujeto en entrevistas sucesivas.',
          'Se elabora una segunda autobiografía atendiendo a los temas longitudinales que han aparecido.',
          'El esquema de análisis tiene nueve apartados en tres bloques: marco microsociológico (perspectiva temporal, ecología social, condiciones socioeconómicas), pautas psicosociológicas (familia y grupos, valores y roles, situación institucional) y características individuales (autodescripciones, intereses, fines y conflictos).'
        ]
      },
      {
        h: 'El dilema de la intensidad',
        p: 'La intensidad varía inversamente respecto de la extensión: cuanto más a fondo estudias a una persona, a menos personas puedes estudiar. El riesgo del diseño intensivo no es solo la lentitud, es que el caso elegido resulte no ser representativo de su clase, o que acabes construyendo un ejemplar distorsionado.',
        lista: []
      }
    ],
    caso: 'Con una participante de Espacio Puente que pasó por el sistema de protección, una historia de vida reconstruiría su trayectoria residencial y laboral desde los dieciséis años, cruzando su relato con los informes sociales que existen sobre ella. Eso muestra algo que ninguna entrevista sincrónica ve: que su relación actual con los servicios sociales viene de mucho antes de este programa.',
    error: 'Llamar historia de vida a una entrevista larga. Si no hay perspectiva diacrónica, varios encuentros y otras fuentes además del relato, es una entrevista en profundidad y hay que llamarla así.',
    frase: '«La intensidad varía inversamente respecto de la extensión.»'
  },

  {
    num: 7,
    guia: 5,
    semana: '19–23 oct',
    titulo: 'Grupos de discusión',
    idea: 'No es una entrevista en grupo ni un debate: lo que se produce y se analiza es la interacción entre los participantes.',
    bloques: [
      {
        h: 'La definición operativa',
        p: 'Cualquier debate de grupo se puede llamar grupo de discusión en la medida en que el investigador estimule activamente la interacción del grupo y esté atento a ella. Si te limitas a plantear la misma pregunta a cada uno por turnos, estás haciendo entrevistas individuales con público.',
        lista: [
          'El objetivo es que los participantes hablen entre sí, no contigo.',
          'Se prepara una guía temática y material de estímulo que anime esa interacción.',
          'Se atiende a la dinámica del grupo y a las actividades en las que se implica.'
        ]
      },
      {
        h: 'Cuatro tradiciones distintas',
        p: 'Nacieron en los años cuarenta con Lazarsfeld, Merton y su equipo en Columbia, para poner a prueba reacciones a la propaganda y a las emisiones de radio durante la guerra. Desde entonces se han desarrollado en cuatro circuitos que a veces se contradicen:',
        lista: [
          'Radiodifusión, márquetin y relaciones públicas, donde ni siquiera se contemplaba transcribir para analizar en detalle.',
          'Investigación y desarrollo de organizaciones.',
          'Desarrollo comunitario y enfoques participativos, con la investigación dialógica de Freire y la producción de conocimiento por y para los sujetos.',
          'Servicios sanitarios e investigación en ciencia social.'
        ]
      },
      {
        h: 'Para qué sirven y para qué no',
        p: 'Es un método flexible y de fácil acceso, y ese es justamente su riesgo: se usa de forma oportunista y eso empobrece el diseño y los datos.',
        lista: [
          '<strong>Sirven</strong> para las preguntas del tipo «¿por qué no…?», para acceder a temas sobre los que la gente ha pensado poco, para personas reacias a la entrevista individual y para las de difícil acceso.',
          '<strong>Sirven</strong> para inspirar el diseño de encuestas y para esclarecer resultados cuantitativos ya obtenidos.',
          '<strong>Sirven</strong> en enfoques de investigación-acción, y pueden iluminar preocupaciones de quienes no suelen ser escuchados.',
          '<strong>No sirven</strong> como puerta de atrás para recoger datos de encuesta: no miden actitudes ni permiten generalización estadística.',
          '<strong>No son la primera opción</strong> cuando lo que buscas son narraciones. Para eso, entrevista.'
        ]
      },
      {
        h: 'Decisiones de diseño que la gente olvida',
        p: 'No existen entornos neutrales para un grupo de discusión. Todo lo que rodea a la sesión acaba dentro de los datos.',
        lista: [
          'El lugar condiciona el contenido: anticípalo y planifica en consecuencia. Usar más de un entorno da datos comparativos.',
          'El moderador también condiciona: algunos equipos usan estratégicamente sus características personales para generar datos comparables.',
          'Cuidado con los porteros que seleccionan tu muestra: tanto de arriba a abajo como de abajo a arriba se pierden voces.',
          'Pagar puede ampliar la participación, pero no siempre es apropiado; a veces funcionan mejor vales o acreditación formativa.',
          'Al presentar resultados, no te apoyes solo en citas individuales: usa fragmentos que muestren la interacción, sobre todo cuando una idea se ha construido entre varios.'
        ]
      }
    ],
    caso: 'Dos grupos en Espacio Puente: uno con participantes y otro con el equipo profesional, sobre el mismo material de estímulo (por ejemplo, el cartel de normas del centro). Lo interesante no será lo que diga cada persona, sino ver cómo en un grupo se construye colectivamente la idea de que las normas son razonables y en el otro la de que son imposibles de cumplir.',
    error: 'Presentar los resultados como una lista de citas individuales, cada una con su código de participante. Se pierde justo lo que este método aporta y que ningún otro da: cómo una postura se refuerza, se matiza o se derrumba cuando otro la contesta.',
    frase: '«Cualquier debate de grupo se puede denominar grupo de discusión en la medida en que el investigador estimule activamente la interacción del grupo y esté atento a ella.»'
  }
];

/* ------------------------------------------------------------------ */

const FRAGMENTO = [
  {
    id: 's1',
    texto: 'Al principio venía casi todos los días, me gustaba tener un sitio al que ir por la mañana.',
    correcto: 'sentido',
    razon: 'Habla de lo que el recurso significaba para ella: no un servicio, sino una estructura para el día. Es sentido atribuido al acompañamiento.'
  },
  {
    id: 's2',
    texto: 'Pero me salió trabajo en la obra y me cambian el turno cada semana, así que la cita del jueves ya no me cuadraba.',
    correcto: 'normas',
    razon: 'Choque directo entre un horario institucional fijo y unas condiciones laborales inestables. Es el núcleo del código de normas y condiciones de vida.'
  },
  {
    id: 's3',
    texto: 'Llamé para cambiarla y me dijeron que hasta dentro de un mes no había hueco.',
    correcto: 'normas',
    razon: 'También es normas y condiciones de vida, aunque aquí en su versión administrativa. Si te salieran muchos pasajes así, tendrías motivo para abrir un subcódigo de barreras administrativas dentro de la misma categoría.'
  },
  {
    id: 's4',
    texto: 'Y cada vez que vas te toca contar otra vez lo de mi madre, lo del piso, todo desde el principio. Eso cansa mucho.',
    correcto: 'juicio',
    razon: 'Repetir el relato ante desconocidos es una experiencia de exposición, no un problema de agenda. Va con reconocimiento y juicio.'
  },
  {
    id: 's5',
    texto: 'Hay una chica del equipo que sí, con ella me entiendo, no me mira como si fuera un caso.',
    correcto: 'juicio',
    razon: 'Es el reverso positivo del mismo código: aquí sí hay reconocimiento. Un buen código recoge el fenómeno y su ausencia, no solo lo negativo.'
  },
  {
    id: 's6',
    texto: 'Ahora vengo sobre todo por la tarde, a la sala, porque entre nosotros nos vamos pasando lo de las habitaciones y lo de los papeles.',
    correcto: 'apoyo',
    razon: 'Red informal entre iguales que resuelve vivienda y documentación. Es apoyo mutuo, y además explica una permanencia que las cifras de asistencia a talleres no captarían.'
  }
];

const CODIGOS = {
  normas:  { nombre: 'Normas y condiciones de vida', clase: 'ambar' },
  juicio:  { nombre: 'Reconocimiento y juicio',      clase: 'rosa' },
  apoyo:   { nombre: 'Apoyo mutuo',                  clase: 'verde' },
  sentido: { nombre: 'Sentido del acompañamiento',   clase: 'violeta' }
};

/* ------------------------------------------------------------------ */

const PREGUNTAS = [
  {
    p: 'Escribes en un trabajo: «la metodología utilizada ha sido la entrevista semiestructurada». ¿Qué falla?',
    o: [
      'Nada, está bien redactado',
      'Confunde el nivel metodológico con el técnico',
      'Debería decir «entrevista en profundidad»',
      'Falta indicar el número de entrevistas'
    ],
    c: 1,
    f: 'La entrevista es una técnica: la herramienta concreta con la que produces datos. La metodología es la vía de acceso, en este caso cualitativa y de orientación comprensiva. Son dos de los cuatro niveles del Tema 1.'
  },
  {
    p: '¿Por qué se dice que el objeto de las ciencias sociales es «reactivo»?',
    o: [
      'Porque los datos sociales cambian muy rápido',
      'Porque las personas mienten en las entrevistas',
      'Porque al estudiar la sociedad la modificamos',
      'Porque cada investigador obtiene resultados distintos'
    ],
    c: 2,
    f: 'Investigar sobre la sociedad forma parte de la sociedad. Ese es uno de los cuatro rasgos que impiden aplicar automáticamente el método de las ciencias físico-naturales.'
  },
  {
    p: 'En un diseño cualitativo circular, ¿cuándo se estructura teóricamente el problema?',
    o: [
      'Antes de entrar al campo, para no perderse',
      'Se pospone hasta que aparece en el propio estudio',
      'Al terminar la recogida, antes de analizar',
      'Nunca: lo cualitativo no usa teoría'
    ],
    c: 1,
    f: 'Los supuestos teóricos no se aplican al objeto: se descubren y se formulan al relacionarse con el campo y con los datos empíricos que se encuentran en él.'
  },
  {
    p: 'La investigación cualitativa no aspira a la representatividad estadística. ¿Qué ofrece a cambio?',
    o: [
      'Representatividad estructural',
      'Mayor tamaño muestral',
      'Resultados más objetivos',
      'Menor coste de ejecución'
    ],
    c: 0,
    f: 'La interacción directa y sin restricciones con el objeto robustece la validez. Con un número adecuado de casos y con triangulación es posible generalizar los hallazgos, aunque no en términos estadísticos.'
  },
  {
    p: 'Estás construyendo tu lista de códigos. ¿Cuál de estas prácticas es correcta?',
    o: [
      'Organizarla según los capítulos que quieres escribir',
      'Buscar un único código para cada pasaje, sin excepción',
      'Tener unas cuarenta categorías de primer nivel',
      'Guardar en una carpeta aparte los códigos que no encajan en ninguna categoría'
    ],
    c: 3,
    f: 'Los códigos sueltos no se descartan: se agrupan en una carpeta para no perderlos. Y la lista se organiza por similitudes conceptuales, con entre 10 y 25 categorías de primer nivel. Si un pasaje tiene varias capas, se codifica dos veces.'
  },
  {
    p: 'En unas notas de campo, ¿cuál de estas frases es descripción y no interpretación?',
    o: [
      'El ambiente en la sala era tenso',
      'Los usuarios se mostraban desmotivados',
      'Dos personas permanecieron 40 minutos sin dirigirse al equipo',
      'Se notaba desconfianza hacia las educadoras'
    ],
    c: 2,
    f: 'Registra qué ocurrió y durante cuánto tiempo, de forma verificable. Las otras tres ya son lecturas: pueden ir en las notas, pero marcadas como interpretación para poder discutirlas después.'
  },
  {
    p: 'Tu objetivo es entender cómo se construye colectivamente la idea de que «las normas del centro son razonables». ¿Qué técnica encaja mejor?',
    o: [
      'Historia de vida de un participante',
      'Grupo de discusión',
      'Entrevista en profundidad a la dirección',
      'Análisis de contenido del reglamento'
    ],
    c: 1,
    f: 'Lo que quieres observar es la construcción compartida de una postura: cómo se refuerza o se derrumba cuando otro la contesta. Eso solo se produce y se analiza en la interacción de un grupo.'
  },
  {
    p: '¿Qué diferencia principal hay entre una entrevista en profundidad y una historia de vida?',
    o: [
      'La historia de vida dura más horas',
      'La entrevista se graba y la historia de vida no',
      'La historia de vida es diacrónica y suele integrar otras fuentes',
      'La historia de vida no necesita consentimiento informado'
    ],
    c: 2,
    f: 'La entrevista tiene un tempo sincrónico; la historia de vida recorre la trayectoria en el tiempo y no es solo el relato, sino toda la información acumulada sobre esa vida más el trabajo de análisis. La duración, por sí sola, no convierte una cosa en la otra.'
  }
];

/* ------------------------------------------------------------------ */

const GLOSARIO = [
  ['Atención flotante', 'Actitud del investigador que mantiene la mirada abierta al contexto durante todo el proceso, sin fijarla de antemano en lo que espera encontrar.'],
  ['CAQDAS', 'Programas de apoyo al análisis cualitativo asistido por ordenador, como ATLAS.ti. Gestionan textos, códigos, memos y redes. No interpretan: eso sigue siendo tarea tuya.'],
  ['Categoría', 'Agrupación de códigos que representan el mismo tipo de cosa. En un sistema bien construido hay entre 10 y 25 de primer nivel.'],
  ['Codificación abierta, axial y selectiva', 'Las tres fases de la teoría fundamentada: abrir los datos en conceptos, relacionarlos entre sí y seleccionar el núcleo alrededor del cual se articula la teoría.'],
  ['Descripción densa', 'Concepto de Geertz. No es acumular detalle, sino mostrar la riqueza de lo que sucede y cómo intervienen ahí las intenciones y estrategias de las personas.'],
  ['Etnografía virtual', 'Estudio de comunidades mediadas digitalmente, a partir de contenidos publicados y entrevistas en línea. Obliga a replantear las implicaciones éticas.'],
  ['Fiabilidad', 'Grado en que distintas catas de datos sobre el mismo hecho permiten extraer conclusiones convergentes.'],
  ['Idiográfico', 'Enfoque centrado en el individuo como caso único y en la interacción de factores que pueden ser específicos suyos.'],
  ['Inducción analítica', 'Método basado en formular y reformular hipótesis progresivamente a partir del análisis sistemático de los datos, hasta encontrar patrones generales.'],
  ['Memo', 'Nota que el investigador escribe durante el análisis para registrar una idea, una duda o una decisión. Es el rastro de tu razonamiento y hace tu análisis discutible.'],
  ['Nomotético', 'Enfoque interesado en las dimensiones generales en que varían todos los individuos y situaciones, y en lo que tienen en común.'],
  ['Porteros', 'Personas u organizaciones que controlan el acceso al campo o a los participantes. Facilitan la entrada, pero condicionan qué voces acaban en tu muestra.'],
  ['Rapport', 'Relación de confianza que se establece con las personas del campo y que hace posible observar y preguntar sin que la presencia del investigador lo distorsione todo.'],
  ['Representatividad estructural', 'Lo que aporta lo cualitativo frente a lo estadístico: no cuántos casos hay, sino que estén presentes las posiciones que estructuran el fenómeno.'],
  ['Roles de pertenencia', 'Posiciones del investigador en el campo según Adler y Adler: periférico, activo o participante completo.'],
  ['Saturación teórica', 'Momento en que los nuevos casos dejan de aportar propiedades nuevas a las categorías. Es un criterio para dejar de recoger datos, no una cifra fijada de antemano.'],
  ['Serendipia', 'Hallazgo valioso que no se estaba buscando. La S del principio VISE de ATLAS.ti: el análisis debe dejar sitio para que aparezca.'],
  ['Triangulación', 'Contrastar un mismo fenómeno desde varias técnicas, fuentes, momentos o investigadores para reforzar validez y fiabilidad.'],
  ['Validez', 'Grado de confianza en que aquello que hemos identificado explica realmente el fenómeno estudiado.'],
  ['Verstehen', 'Comprender, en el sentido de Weber. Frente a explicar causalmente, lo cualitativo busca captar el sentido subjetivo que las personas dan a su acción.'],
  ['VISE', 'Enfoque de trabajo de ATLAS.ti: Visualización, Inmersión, Serendipia y Exploración.']
];

/* ------------------------------------------------------------------ */

const RECOMENDACIONES = {
  practicas: {
    tecnica: 'Observación participante',
    tema: 4,
    porque: 'Quieres saber qué hace la gente, y para eso hay que estar donde lo hace. Lo que las personas cuentan sobre sus prácticas y lo que sus prácticas son casi nunca coinciden del todo, y esa distancia es un dato en sí misma.',
    ojo: 'Es la técnica más exigente en tiempo y la que más ética de campo requiere. Necesitas resolver cómo entras, qué rol adoptas y cómo separas descripción de interpretación en las notas.'
  },
  experiencia: {
    tecnica: 'Entrevista abierta o en profundidad',
    tema: 5,
    porque: 'Da acceso único al mundo vivido: la persona describe con sus propias palabras sus actividades, sus experiencias y sus opiniones. Es la vía más directa cuando lo que te interesa es el sentido que alguien le da a lo que le pasa.',
    ojo: 'No es un diálogo entre iguales: tú montas el escenario y usas el resultado. Pide reconstrucciones concretas antes que explicaciones, o te quedarás en respuestas prefabricadas.'
  },
  colectivo: {
    tecnica: 'Grupo de discusión',
    tema: 7,
    porque: 'Lo que se analiza es la interacción: cómo una postura se defiende, se matiza o se cae cuando otro la contesta. Va especialmente bien con preguntas del tipo «¿por qué no…?» y con temas sobre los que la gente ha pensado poco.',
    ojo: 'No mide actitudes ni permite generalizar estadísticamente, y no es la primera opción si lo que buscas son narraciones. Y no hay entornos neutrales: el lugar y el moderador entran en los datos.'
  },
  trayectoria: {
    tecnica: 'Historia de vida',
    tema: 6,
    porque: 'Tiene un tempo diacrónico: recorre la trayectoria en el tiempo en lugar de fotografiar el presente. Permite ver cómo lo micro (la acción de una persona) se enlaza con lo macro (los hechos sociales que la atraviesan).',
    ojo: 'La intensidad varía inversamente respecto de la extensión: vas a poder estudiar muy pocos casos. Piensa bien la representatividad de quien elijas y prevé más de un encuentro y más de una fuente.'
  },
  documentos: {
    tecnica: 'Análisis de contenido, o análisis del discurso',
    tema: 3,
    porque: 'Si el material ya existe, no necesitas producirlo. El análisis de contenido sistematiza, codifica y categoriza para sacar temas recurrentes y estructuras subyacentes. Si además te interesa cómo ese lenguaje construye identidades y relaciones de poder, entra el análisis del discurso.',
    ojo: 'Trabajar sobre material ya existente no te ahorra las preguntas difíciles: quién produjo esos documentos, para quién y qué queda fuera de ellos.'
  }
};

const AJUSTES_TIEMPO = {
  corto: {
    practicas: 'Con unas pocas semanas, no intentes una etnografía completa: plantéala como etnografía focalizada, sobre una pregunta muy concreta y en un contexto que ya conozcas.',
    experiencia: 'Unas semanas dan para un número reducido de entrevistas bien hechas. Mejor pocas y bien transcritas que muchas a medias.',
    colectivo: 'Es de las técnicas que mejor encajan en poco tiempo: dos sesiones bien diseñadas pueden dar un material muy rico.',
    trayectoria: 'Aquí el tiempo va justo. Una historia de vida necesita varios encuentros y una negociación con la persona que no se puede acelerar.',
    documentos: 'El tiempo no es tu limitación principal: lo será acotar bien el corpus.'
  },
  medio: {
    practicas: 'Dos o tres meses permiten una observación sostenida si delimitas bien los momentos y espacios que vas a observar.',
    experiencia: 'Margen suficiente para entrevistar, transcribir, analizar y volver a entrevistar con las preguntas que hayan surgido. Aprovecha esa segunda vuelta.',
    colectivo: 'Da para varios grupos y para comparar entre entornos o entre perfiles, que es donde este método rinde de verdad.',
    trayectoria: 'Es un plazo razonable para una o dos historias de vida si consigues acceso también a otras fuentes documentales.',
    documentos: 'Suficiente para un corpus amplio y para hacer una segunda codificación de contraste.'
  },
  largo: {
    practicas: 'Con medio curso puedes plantear una inmersión de verdad, con compromiso a largo plazo y triangulación con entrevistas.',
    experiencia: 'Con este margen, plantéate combinar entrevistas con observación: verás qué distancia hay entre lo que se cuenta y lo que ocurre.',
    colectivo: 'Aprovecha para hacer trabajo de campo preliminar antes de los grupos: conocer el contexto mejora muchísimo la guía temática.',
    trayectoria: 'Es el escenario ideal. Puedes plantear una autobiografía asistida con varias sesiones y un equipo que contraste las reconstrucciones.',
    documentos: 'Con este tiempo, combina el corpus documental con entrevistas a quienes produjeron esos documentos.'
  }
};

const AJUSTES_ACCESO = {
  dentro: 'Trabajar dentro te da un acceso que casi nadie tiene, y también el problema contrario: lo familiar deja de verse. Explicita desde el principio tu rol de pertenencia y cómo vas a manejar la doble condición de profesional y de investigador, incluido qué pasa con lo que sabes por tu trabajo y no por la investigación.',
  visitante: 'Ser alguien de fuera tiene una ventaja: la extrañeza te hace ver lo que quienes están dentro ya no ven. A cambio, tendrás que invertir tiempo en construir rapport y en negociar la proximidad y la distancia.',
  personas: 'Sin acceso al espacio, descarta cualquier diseño basado en la observación. Todo tu material vendrá del relato, así que refuerza el diseño por otro lado: varias personas con posiciones distintas, o documentos que permitan triangular.'
};
