import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global {
  constructor() {}

  public TITLE_NOVEDADES = 'Novedades';
  public TITLE_RECOMENDADOS = 'Recomendados';
  public TITLE_LITERATURA = 'Literatura';
  public TITLE_AUSTRAL = 'Austral';
  public TITLE_CONTACTO = 'Contacto';
  public TITLE_NUEVO_LIBRO = 'Nuevo Libro';
  public MAX_TAMANO_IMAGE = 2048000; //2MB
  public URL_REST_SERVICES = 'https://db-librosarequipa.herokuapp.com/'; 
  public ESTADO = {
    ACTIVO: 'ACT',
    INACTIVO: 'INA',
    BORRADO: 'DEL'
  }

  public LISTA_LIBROS = {
    "novedades": [
      {
        "titulo": "EL CHICO QUE SIGUIÓ A SU PADRE HASTA AUSCHWITZ",
        "autor": "JEREMY DRONFIELD",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "48.30",
        "precioVenta": "62.10",
        "tipoDeCompra": "30% DESCUENTOS",
        "imagen": "el-chico-que-siguio-a-su-padre-hasta-auschwitz.jpg",
        "cantidad": 1,
        "filtro": "filter_mayo",
        "detalle": {
            "descripcion": "En 1939, Gustav Kleinmann, un tapicero judío de Viena, fue capturado por los nazis. Junto a Fritz, su hijo adolescente, fueron mandados al campo de Buchenwald, en Alemania. Empieza así una desgarradora historia en la que sus protagonistas serán víctimas del hambre y de las palizas, mientras participan como mano de obra en la construcción del mismo campo de concentración en el que permanecerán cautivos. Cuando Gustav reciba la noticia de su traslado a Auschwitz, una segura sentencia de muerte, su hijo Fritz hará todo lo posible por no separarse de su padre y seguirlo hasta Polonia. Ante el horror cotidiano del que serán testigos, solo una fuerza les mantendrá con vida: el amor entre un padre y su hijo. Basado en el diario secreto que Gustav escribió durante los seis años de cautiverio, así como en entrevistas con miembros de la familia y supervivientes, este libro emerge como un extraordinario relato de coraje, lealtad y supervivencia.",
            "medidas": "15 x 23",
            "paginas": "512",
            "peso": "0.5750",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "MIL NOCHES SIN TI",
        "autor": "FEDERICO MOCCIA",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "48.30",
        "precioVenta": "62.10",
        "tipoDeCompra": "30% DESCUENTOS",
        "imagen": "mil-noches.jpg",
        "cantidad": 1,
        "filtro": "filter_mayo",
        "detalle": {
            "descripcion": "Vuelven los protagonistas de Esta noche dime que me quieres. Vive una historia de amor absolutamente irresistible. Tras un paréntesis de ocho meses en Rusia, para Sofía ha llegado el momento de poner orden a su vida sentimental. Ya no puede seguir huyendo de su pasado, de la soledad de su matrimonio, ni de la historia pasional y rota con Tancredi. Regresa a Roma, aunque su relación con Andrea no conseguirá superar todo lo sucedido, y menos cuando descubre que le ha estado mintiendo. Sofía abandonará a su marido para iniciar una exitosa gira mundial como pianista. En un viaje a Sicilia para visitar a sus padres, descubrirá un secreto familiar que le afectará profundamente. Mientras tanto, Tancredi sigue todos sus pasos y acabarán reecontrándose; aunque Sofía no confía en él, Tancredi es un hombre enamorado que nunca se ha rendido a la primera.",
            "medidas": "150 x 230",
            "paginas": "464",
            "peso": "0.5250",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA SOSPECHA",
        "autor": "FIONA BARTON",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "48.30",
        "precioVenta": "62.10",
        "tipoDeCompra": "30% DESCUENTOS",
        "imagen": "la-sospecha.jpg",
        "cantidad": 1,
        "filtro": "filter_mayo",
        "detalle": {
            "descripcion": "Cuando dos jóvenes británicas desaparecen en su año sabático en Tailandia, su caso pasa a copar el foco de la atención mediática internacional. La periodista Kate Waters está lista para informar sobre la historia: como siempre, quiere ser la primera en conseguir la exclusiva y descubrir la verdad, y esta vez no será una excepción. Sin embargo, a medida que se van conociendo más detalles de la investigación, Kate no puede dejar de pensar en su propio hijo, a quien no ha visto en dos años.",
            "medidas": "13 x 22",
            "paginas": "600",
            "peso": "0.5400",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ESTRATEGIAS CON CALLE",
        "autor": "CRISTINA QUIÑONES",
        "editorial": "Planeta",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "estrategias-con-calle.jpg",
        "cantidad": 1,
        "filtro": "filter_abril",
        "detalle": {
            "descripcion": "Estamos ante un nuevo peruano, un nuevo país. No basta pensar en una transformación digital, hay que sumar la transformación cultural. Sin entendimiento cultural, street data o human insights estaremos perdiendo una maravillosa oportunidad para conectar con los peruanos de hoy; sin entendimiento cultural estaremos perdiendo también la oportunidad para engrandecer y reivindicar a los ciudadanos, y en general personas de este país que demandan un mundo empresarial más justo, más humano y ciertamente más inclusivo. La transformación cultural es un deber y una responsabilidad en el mundo empresarial. No podemos seguir mirando el mundo con los mismos ojos y con los mismos lentes. Tenemos que sumergirnos en una nueva realidad social, cultural y psicológica, aquella que escasea en los directorios, en los libros de management y muchas veces en las conversaciones de negocios. Este no es un libro, es una invitación al cambio. Queremos movilizar mentes y desafiarlas, porque si no empezamos a cuestionar el status quo, poco favor le hacemos a esta sociedad y al consumo. Estamos aquí no para repetir lo que otros dicen, sino para revelar lo que muchos callan. ¡Pisemos la calle!",
            "medidas": "15 x 23",
            "paginas": "328",
            "peso": "0.4250",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "DÍAS SIN TI",
        "autor": "ELVIRA SASTRE",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "dias-sin-ti.jpg",
        "cantidad": 1,
        "filtro": "filter_abril",
        "detalle": {
            "descripcion": "Días sin ti es una historia de complicidad a través del tiempo, la de una abuela y su nieto. Dora, maestra en tiempos de la República, comparte con Gael la historia que la ha llevado a ser quien es. Con ternura, pero con crudeza, confiesa sus emociones a su nieto escultor, un joven con una sensibilidad especial, y le brinda, sin que éste lo sepa todavía, las claves para reponerse de las heridas causadas por un amor truncado. A través de la reflexión y de lo que enseña la melancolía, esta novela transita esos caminos por los que todos, en algún momento, tenemos que pasar para comprender que la vida y el amor son sublimes precisamente porque tienen un final.",
            "medidas": "14 x 23",
            "paginas": "264",
            "peso": "0.2750",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA MUJER SOVIÉTICA",
        "autor": "DANY SALVATIERRA",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "mujer-sovietica.jpg",
        "cantidad": 1,
        "filtro": "filter_abril",
        "detalle": {
            "descripcion": "Con una estética a medio camino entre el melodrama, las novelas de Manuel Puig y los thrillers policiales, Dany Salvatierra nos presenta una cautivante novela en tres actos protagonizada por una diva en decadencia. Jacqueline Metalius es una leyenda viva de las telenovelas latinoamericanas. Arrolladora, indómita y de carácter volcánico, decidió enfocarse en su carrera antes que en su vida personal. Un día, en medio de las grabaciones de su más reciente producción en Miami, recibe un mensaje anónimo de quien parece ser su difunta madre, asegurándole que no está muerta. A partir de entonces, se verá atrapada en una red de espionaje internacional que la traerá de vuelta, después de cuarenta años, a Lima, su ciudad natal, donde los cadáveres regresarán de sus tumbas para desenmascarar los más oscuros y terribles secretos.",
            "medidas": "15 x 23",
            "paginas": "364",
            "peso": "0.4050",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "FILOSOFÍA EN 11 FRASES",
        "autor": "DARIO SZTAJNSZRAJBER",
        "editorial": "Paidós",
        "precioOriginal": "59.00",
        "precioCompra": "39.34",
        "precioVenta": "53.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "filosofia-11-frases.jpg",
        "cantidad": 1,
        "filtro": "filter_abril",
        "detalle": {
            "descripcion": "Filosofía en 11 frases de Darío Sztajnszrajberes un libro que no pretende ser un manual; sin embargo en ningún momento rehúsa a su carácter didáctico. El título no deja lugar a sorpresas se trata de un libro que toma once frases insignes del saber filosófico para desde ellas adentrarse en ciertas corrientes pero que tiene la particularidad de quedarse a medio camino entre novela y ensayo conteniendo incluso diálogos a la forma socrática platónica. De esta manera desde algo muy difundido como lo son la mayoría de las frases escogidas el autor ahonda en sus distintas posibilidades hasta penetrar en ellas desarmándolas repensándolas y volviéndolas a armar.",
            "medidas": "23 x 15",
            "paginas": "312",
            "peso": "0.3600",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL PUZZLE DE CRISTAL",
        "autor": "BLUE JEANS",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "puzle-cristal.jpg",
        "cantidad": 1,
        "filtro": "filter_marzo",
        "detalle": {
            "descripcion": "Tras la explosión en la estación de metro, Julia no es la misma. Se ha convertido en una chica insegura, a veces insolente, y a la que le cuesta encontrar motivación para disfrutar de la vida como lo hacía antes. También las cosas han cambiado para Emilio y Vanesa. El primer martes de enero del nuevo año, Julia recibe una inquietante e inesperada llamada. Hugo Velero, uno de los compañeros de piso de Iván Pardo, le asegura que el chico del piercing en la ceja ha desaparecido. Iván le ha hablado mucho a su amigo de la inteligencia y capacidad deductiva de Julia, por lo que le pide ayuda para encontrarlo. La joven, en principio, piensa que es una broma. Pero, casualmente, su abuela Pilar, una entrañable y curiosa septuagenaria con las mismas capacidades mentales que su nieta, vive cerca del edificio en el que ahora reside el joven del que estuvo enamorada y del que no sabe nada desde hace unos meses. Una extraña desaparición, un misterioso crimen en el que todos parecen sospechosos y un puzle de cristal por resolver, se cruzan en el camino de la chica de la memoria prodigiosa.",
            "medidas": "15 x 23",
            "paginas": "544",
            "peso": "0.6050",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA MUERTE DEL COMENDADOR 2",
        "autor": "HARUKI MURAKAMI",
        "editorial": "Tusquets",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "muerte-comendador-2.jpg",
        "cantidad": 1,
        "filtro": "filter_marzo",
        "detalle": {
            "descripcion": "En el primer volumen, dejamos al protagonista deseoso de saber qué se oculta detrás del cuadro titulado La muerte del comendador. También ha aprendido a convivir con los extraños personajes y objetos que lo envuelven desde que se instaló en la casa en las montañas. Y, a petición de su vecino, ha empezado a esbozar el retrato de una peculiar adolescente, Marie Akikawa. Pero cuando ésta, una tarde en que regresaba del colegio, desaparece misteriosamente, el protagonista se lanzará en su busca. Y para encontrarla no dudará en enfrentarse a lo desconocido, y tampoco a los terribles dilemas a los que su aventura va a conducirle. ¿Qué le ocurrió en el pasado al autor del cuadro La muerte del comendador? ¿Quién es el hombre sin rostro?... En este segundo libro, de ritmo acelerado y lleno de suspense, las incógnitas sembradas en el anterior volumen van desvelándose, y encajan en el lugar que deben ocupar, como en un puzzle, para que el lienzo entero cobre pleno sentido.",
            "medidas": "15 x 23",
            "paginas": "496",
            "peso": "0.5350",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      }
    ],
    "recomendados": [
      {
        "titulo": "YO JULIA",
        "autor": "SANTIAGO POSTERGUILLO",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "yo-julia.jpg",
        "cantidad": 2,
        "filtro": "",
        "detalle": {
            "descripcion": "192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más grande: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
            "medidas": "15 x 23",
            "paginas": "704",
            "peso": "0.7550",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "HOMO DEUS",
        "autor": "YUVAL NOAH HARARI",
        "editorial": "Debate",
        "precioOriginal": "89.00",
        "precioCompra": "59.34",
        "precioVenta": "80.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "homo-deus.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Tras el éxito de Sapiens. De animales a dioses, Yuval Noah Harari vuelve su mirada al futuro para ver hacia dónde nos dirigimos. La guerra es algo obsoleto. Es más probable quitarse la vida que morir en un conflicto bélico. La hambruna está desapareciendo. Es más habitual sufrir obesidad que pasar hambre. La muerte es solo un problema técnico. Adiós igualdad. Hola inmortalidad. ¿Qué nos depara el futuro? Yuval Noah Harari, autor del best seller de Sapiens de animales a dioses, augura un mundo no tan lejano en el cual nos veremos enfrentados a una nueva serie de retos. Homo Deus explora los proyectos, los sueños y las pesadillas que irán moldeando el siglo XXI -desde superar la muerte hasta la creación de la inteligencia artificial. Cuando tu Smartphone te conozca mejor de lo que te conoces a ti mismo, ¿seguirás escogiendo tu trabajo, a tu pareja y a tu presidente? Cuando la inteligencia artificial nos desmarque del mercado laboral, ¿encontrarán los millones de desempleados algún tipo de significado en las drogas o los juegos virtuales? Cuando los cuerpos y cerebros sean productos de diseño, ¿cederá la selección natural el paso al diseño inteligente? Esto es el futuro de la evolución. Esto es Homo Deus.",
            "medidas": "23 x 15",
            "paginas": "490",
            "peso": "0.5850",
            "anio_publicacion": "2015",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "POESÍA COMPLETA",
        "autor": "CESAR VALLEJO",
        "editorial": "Seix Barral",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "poesia-completa.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "En Contra el secreto profesional, escribe: «Hay un timbre humano, un latido vital y sincero, al cual debe propender el artista, a través de no importa qué disciplinas, teorías o procesos creadores. Desde esa emoción, seca, natural, pura, es decir, prepotente y eterna, y no importan los menesteres de estilo, manera, procedimientos, etc.». Se trata más bien de una anti-arte-poética que no prescribe (ni proscribe) ningún género de procedimiento. […] Vallejo se acerca a la escritura desde una perspectiva de marginalidad. Ante el lenguaje, su sujeto lírico será el niño, el indio, el iletrado: su imagen no es la del literato que se sitúa por encima del lenguaje y gobierna todos sus registros (cuyo paradigma podría ser Lugones, por ejemplo), sino la de quien lucha con un lenguaje establecido, equivocándolo, deformándolo, minándolo.",
            "medidas": "14 x 22",
            "paginas": "622",
            "peso": "0.6850",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "UNA NOVELA CRIMINAL",
        "autor": "JORGE VOLPI",
        "editorial": "Alfaguara",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "novela-criminal.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Todo lo que se narra en esta novela ocurrió así, todos sus personajes son personas de carne y hueso, y la historia, desentrañada con maestría e iluminada hasta sus últimos recovecos por una ingente tarea de documentación, es real. El 8 de diciembre de 2005, al sur de Ciudad de México, la policía federal detiene a Israel Vallarta y a Florence Cassez y los acusa de secuestro e integración en banda criminal. Al día siguiente, a las 06:47 de la mañana, los canales de televisión Televisa y TV Azteca emiten en directo la entrada de los agentes federales en el rancho Las Chinitas, la liberación de tres rehenes y la detención de Israel y Florence. En los días siguientes, los detenidos sufrirán torturas, se les negarán sus derechos y la lista de acusaciones irá en aumento. Pero cuando los abogados defensores captan la inconsistencia entre los partes de detención, los vídeos de la emisión televisiva y la versión de sus defendidos, comienza una carrera contra el tiempo para sacar a la luz uno de los mayores montajes policiales de la historia de México, cuyo desarrollo hizo que se tambalearan los cimientos del gobierno de Felipe Calderón y culminó con un incidente diplomático entre México y Francia. Narración despiadada a la hora de mostrar los entresijos del poder, las raíces más hondas de la corrupción y su alcance, así como los embotados mecanismos de la justicia, Una novela criminal es también una valiente denuncia del coste social de las políticas que declaran la guerra al crimen sin poner freno a sus causas.",
            "medidas": "15 x 24",
            "paginas": "504",
            "peso": "0.6100",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "SÁLVESE QUIEN PUEDA",
        "autor": "ANDRÉS OPPENHEIMER",
        "editorial": "Debate",
        "precioOriginal": "89.00",
        "precioCompra": "59.34",
        "precioVenta": "80.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "salvese-quien-pueda.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Con una prosa vibrante y lúcida, Andrés Oppenheimer encara un fenómeno que transformará radicalmente la sociedad: es probable que, en las próximas dos décadas, casi la mitad de los trabajos sea reemplazada por computadoras con inteligencia artificial. Abogados, contadores, médicos, comunicadores, vendedores, banqueros, maestros, obreros, restauranteros, analistas, choferes, meseros, trabajadores y estudiantes... tiemblen o prepárense. En su nueva obra, Oppenheimer -uno de los periodistas más importantes de Hispanoamérica, coganador del premio Pulitzer- detalla qué y cómo ocurrirá, a qué ritmo y qué países sufrirán más por el golpe. Y tal vez lo más importante: gracias a su investigación, realizada por tres continentes, logra explicar qué puede hacer cada uno de nosotros ante el terremoto que se acerca y enlista cuáles son los trabajos que, esos sí, tienen futuro.",
            "medidas": "15 x 23",
            "paginas": "360",
            "peso": "0.4300",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "RENDICIÓN",
        "autor": "RAY LORIGA",
        "editorial": "Alfaguara",
        "precioOriginal": "59.00",
        "precioCompra": "39.34",
        "precioVenta": "53.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "rendicion.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Han pasado diez largos años desde que estalló la guerra, y el matrimonio sigue sin conocer el paradero de sus hijos, sin saber si su país fue el agresor o el agredido. Fuera cual fuese el origen de la contienda, él, hombre de campo, y ella, su antigua patrona, siguen amándose y sus vidas transcurren sencilla y rutinariamente. Un día un muchacho mudo entra en su propiedad. Al principio lo encierran como a un prisionero, pero acaban por tomarle cierto cariño y, cuando las autoridades comunican que la zona debe ser evacuada y que tienen que poner rumbo a la ciudad transparente, los tres parten juntos. En ese momento el muchacho es bautizado como Julio. En una sociedad en la que lo privado es de dominio público, en un mundo feliz y asfixiante que ataca al ser humano, emergen los más estremecedores augurios de nuestro futuro.",
            "medidas": "15 x 24",
            "paginas": "216",
            "peso": "0.2800",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "21 LECCIONES PARA EL SIGLO XXI",
        "autor": "YUVAL NOAH HARARI",
        "editorial": "Debate",
        "precioOriginal": "89.00",
        "precioCompra": "59.34",
        "precioVenta": "80.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "21-lecciones-siglo-xxi.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "De animales a dioses es un recorrido por nuestro pasado. Homo Deus, una mirada a nuestro futuro. 21 lecciones para el siglo XXI es una exploración de nuestro presente. ¿Cómo podemos protegernos de las guerras nucleares, los cataclismos ecológicos o las tecnologías disruptivas? ¿Qué podemos hacer contra la propagación de la posverdad o la amenaza del terrorismo? ¿Qué debemos enseñar a nuestros hijos? Con la misma prosa inteligente, fresca y provocadora, Harari vuelve a librerías con un nuevo título, 21 lecciones para el siglo XXI, en el que examina algunas de las cuestiones más urgentes de nuestro presente. El hilo dorado que recorre este estimulante nuevo libro es el desafío de mantener nuestro enfoque colectivo e individual frente al constante y desorientador cambio que estamos viviendo. ¿Somos aún capaces de entender el mundo que hemos creado?",
            "medidas": "15 x 23",
            "paginas": "404",
            "peso": "0.4500",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "CANCIÓN DE HIELO Y FUEGO",
        "autor": "GEORGE R. R. MARTIN",
        "editorial": "DeBolsillo",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "cancion-hielo-fuego-1.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Juego de tronos es el primer volumen de Canción de hielo y fuego, la monumental saga de fantasía épica del escritor George R. R. Martin que ha vendido más de 20 millones de ejemplares en todo el mundo. Traducida a más de 30 idiomas, esta novela ha sido adaptada a la televisión en una superproducción de HBO. En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen en los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganar la más mortal de las batallas: el trono de hierro, una poderosa trampa que atrapará a los personajes... y al lector.",
            "medidas": "14 x 21",
            "paginas": "800",
            "peso": "0.6550",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ELON MUSK",
        "autor": "ASHLEE VANCE",
        "editorial": "Vergara",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "elon-musk.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Esta es la fascinante historia de la tumultuosa ascensión a las cumbres del mundo empresarial de Musk, un hombre que ha revolucionado la industria estadounidense rompiendo todos los límites de la innovación, y ganándose de forma inevitable unos cuantos enemigos por el camino. Más que un inventor, más que un pensador, más que un genio, Musk es el perfecto ejemplo del emprendedor que persigue cambiar nuestra vida cotidiana hasta extremos que aún no somos capaces de imaginar.",
            "medidas": "15 x 23",
            "paginas": "448",
            "peso": "0.5350",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "STEVE JOBS",
        "autor": "KAREN BLUMENTHAL",
        "editorial": "Altea",
        "precioOriginal": "59.00",
        "precioCompra": "39.34",
        "precioVenta": "53.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "steve-jobs.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Autodidacta, visionario, genio, intuitivo, iconoclassta, diferente, inventor. Steve Jobs, el hombre que pensaba diferente. Un libro inspirador para los JÓVENES que no están dispuestos a renunciar a sus sueños. Más que aparatos electrónicos, lo que Jobs dejó a los jóvenes fueron importantes lecciones de vida: un modelo de coraje, de iniciativa y de creatividad. Ésta es su historia, escrita de la manera que a ti te gustaría que te la contaran. La trayectoria de este genio, icono del siglo XXI, fue impredecible desde el inicio. Al nacer, fue dado en adopción, abandonó la carrera tras el primer semestre en la universidad... Sin embargo, con tan solo veinte años, creó Apple en el garaje de su casa junto con su amigo Steve Wozniack. Y así surgió su marca personal: una rigurosa búsqueda de perfección, un modo alternativo de acercarse a los problemas y un estilo que le llevó más allá de todo límite. Steve Jobs no solo te interesará por sus ordenadores, iPads e iPods, sino por cómo era y cómo vivió su vida: un visionario con un complicado carácter que resultó ser todo un ejemplo de lo que se puede conseguir si uno persigue sus sueños y permanece fiel a sí mismo. «No dejéis que el ruido de las opiniones de los demás ahogue vuestra propia voz interior. Tened el coraje de seguir vuestro corazón y vuestra intuición. De algún modo, ellos ya saben lo que realmente quieres ser. Vuestro tiempo es finito, no lo malgastéis viviendo la vida de otro» #Steve Jobs",
            "medidas": "14 x 22",
            "paginas": "358",
            "peso": "0.3550",
            "anio_publicacion": "2012",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "MIENTRAS ESCRIBO",
        "autor": "STEPHEN KING",
        "editorial": "DeBolsillo",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "mientras-escribo.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Mientras escribo empieza con el relato de la asombrosa infancia de Stephen King y su extraño y temprano interés por la escritura. Una serie de vívidos recuerdos de la adolescencia, de la universidad y de los años de lucha que lo llevaron a la culminación de su primera novela, Carrie, aportan al lector una amena y divertida perspectiva sobre la formación del escritor. A continuación King describe las herramientas básicas del oficio y expone sus opiniones personales sobre el secreto de la escritura. Mientras escribo culmina con el conmovedor relato de cómo su necesidad de escribir lo estimuló para recuperarse de su casi fatal accidente en el verano del año 2000.",
            "medidas": "13 x 19",
            "paginas": "320",
            "peso": "0.2450",
            "anio_publicacion": "2000",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "MIEDO",
        "autor": "BOB WOODWARD",
        "editorial": "Roca",
        "precioOriginal": "89.00",
        "precioCompra": "59.34",
        "precioVenta": "80.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "miedo-trump-casa-blanca.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Con esa forma de comunicar tan autoritaria, perfeccionada durante ocho presidencias desde Nixon hasta Obama, el autor Bob Woodward revela con una minuciosidad sin precedentes la tormentosa vida del presidente Donald Trump dentro de la Casa Blanca, así como los detalles intrínsecos sobre la toma de importantes decisiones en política nacional e internacional. «Miedo» es el retrato más íntimo que se haya publicado sobre un presidente en el poder durante su primer año de mandato. Woodward extrae su información de cientos de horas de entrevistas con fuentes de primera mano, anotaciones de reuniones, diarios personales, archivos y documentos. Lleno de detalles del día a día, «Miedo» hace un recorrido por las negociaciones entre los abogados de Trump y Robert Mueller, el fiscal especial en las investigaciones sobre Rusia, exponiendo públicamente por primera vez las discusiones y estrategias que se fueron planteando reunión tras reunión. Revela cómo los altos cargos de la Casa Blanca de Trump tuvieron que organizarse para robar proyectos de decreto del Despacho Oval del presidente para que no creara normativas que pusieran en jaque operaciones de inteligencia cruciales.",
            "medidas": "15 x 24",
            "paginas": "456",
            "peso": "0.5550",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "PADRE RICO PADRE POBRE",
        "autor": "ROBERT KIYOSAKI",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "padre-rico-padre-pobre.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Padre rico, padre pobre es el libro de finanzas personales nº 1 en todo el mundo, el manual de Robert T. Kiyosaki que enseña a las personas a hacerse millonarias. Padre rico, padre pobre te ayudará a derribar el mito de que necesitas tener ingresos elevados para hacerte rico. Desafiar la creencia de que tu casa es una inversión. Demostrar a los padres por qué no deben confiar en el sistema escolar para que sus hijos aprendan a manejar el dinero. Definir de una vez y para siempre qué es una inversión, y qué es una obligación. A saber qué debes enseñar a tus hijos sobre el dinero para que tengan éxito financiero en el futuro. Robert T. Kiyosaki ha transformado radicalmente la forma en que millones de personas alrededor del mundo perciben el concepto del dinero. Con perspectivas que contradicen el conocimiento convencional, Robert, también conocido como el «maestro» millonario, se ha ganado una gran reputación por hablar claro, ser irreverente y tener valor. Es reconocido en todo el mundo como un defensor apasionado de la educación financiera.",
            "medidas": "13 x 19",
            "paginas": "264",
            "peso": "0.2100",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "PIENSE Y HAGASE RICO",
        "autor": "NAPOLEON HILL",
        "editorial": "DeBolsillo",
        "precioOriginal": "39.00",
        "precioCompra": "26.00",
        "precioVenta": "35.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "piense-hagase-rico.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Es así de sencillo: la riqueza y la realización personal están al alcance de todas aquellas personas que lo desean; basta simplemente con desvelar un secreto, el secreto del éxito. Hill aprendió este secreto del famoso industrial, filántropo y escritor Andreus Carnegie y lo sistematizó para hacerlo accesible en Piense y hágase rico.",
            "medidas": "13 x 19",
            "paginas": "272",
            "peso": "0.2100",
            "anio_publicacion": "2013",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ACTITUD MENTAL POSITIVA",
        "autor": "NAPOLEON HILL",
        "editorial": "DeBolsillo",
        "precioOriginal": "39.00",
        "precioCompra": "26.00",
        "precioVenta": "35.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "actitud-mental-positiva.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Los poderes de la mente son infinitos. ¿Los ha comprendido usted realmente alguna vez y ha vislumbrado lo que pueden llegar a suponer en su vida? Gracias a esta obra descubrirá un sorprendente plan basado en una idea genial: «Aquello que la mente puede concebir y creer puede alcanzarlo». Este método le indicará cómo deshacerse de sus «telarañas» mentales, pensar con claridad y explorar a fondo el subconsciente; cómo fijarse un objetivo y cómo alcanzarlo mediante la reflexión persistente y una acción positiva. Inicie ahora su camino hacia el éxito en los negocios y en su vida familiar y social. Lea lo que los otros han conseguido y recuerde que ¡también usted puede hacerlo!",
            "medidas": "13 x 19",
            "paginas": "412",
            "peso": "0.3200",
            "anio_publicacion": "2016",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "MUCHAS VIDAS MUCHOS MAESTROS",
        "autor": "BRIAN WEISS",
        "editorial": "B de Bolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "muchas-vidas-muchos-maestros.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "La historia real de un psiquiatra, su joven paciente y la terapia de regresión que cambió sus vidas para siempre. Un punto de encuentro entre ciencia y metafísica. El doctor Brian Weiss, jefe de psiquiatría del hospital Mount Sinai de Miami, relata en éste, si primer libro, una asombrosa experiencia que cambió por completo su propia vida y su visión de la psicoterapia. Una de sus pacientes, Catherine, recordó bajo hipnosis varias de sus vidas pasadas y pudo encontrar en ellas el origen de muchos de los traumas que sufría. Catherine se curó, pero ocurrió algo todavía más importante: logró ponerse en contacto con los Maestros, espíritus superiores que habitan los estados entre dos vidas. Ellos le comunicaron importantes mensajes de sabiduría y de conocimiento. Este relato, profundamente conmovedor, punto de encuentro entre ciencia y metafísica, constituyó un extraordinario best seller y sigue siendo de obligada lectura en un mundo convulsionado, en especial para los que buscan un sentido espiritual.",
            "medidas": "14 x 22",
            "paginas": "224",
            "peso": "0.2450",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "CHARLAS TED",
        "autor": "CHRIS ANDERSON",
        "editorial": "New York Times",
        "precioOriginal": "59.00",
        "precioCompra": "39.34",
        "precioVenta": "53.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "charlas-ted.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "TED revolucionó la forma en que se habla en público, la manera como se divulga el conocimiento y los escenarios en los que se comparten ideas a escala global. Desde 2006, cuando se empezaron a realizar y a transmitir a través de la red, las charlas TED se convirtieron en una marca única de cómo presentar y hablar, al mismo tiempo que se consolidaron como herramientas de aprendizaje y divulgación de ideas frescas, innovadoras y creativas sobre todos los temas de interés humano. Detrás de casa charla hay un cuidadoso proceso de selección y de entrenamiento para que los presentadores logren tocar los corazones de su audiencia y sacudir su realidad. Este libro pone al alcance de todos cómo ocurre el milagro de hablar bien en público de la mano del director general de TED, Chris Anderson.",
            "medidas": "15 x 23",
            "paginas": "328",
            "peso": "0.3900",
            "anio_publicacion": "2016",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL CAMINO HACIA EL LEAN STARTUP",
        "autor": "ERIC RIES",
        "editorial": "DeBolsillo",
        "precioOriginal": "59.00",
        "precioCompra": "39.34",
        "precioVenta": "53.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "camino-hacia-lean-startup.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "El camino hacia el Lean Startup explica cómo empresas de todo tipo pueden incrementar sus ingresos, impulsar la innovación y convertirse en organizaciones preparadas para sacar partido de las inmensas oportunidades que nos brinda el siglo XXI. Si en el bestseller El método Lean Startup el autor dirigía su atención hacia las startups de éxito, en esta ocasión lo hace hacia un nuevo grupo de organizaciones: multinacionales emblemáticas como General Electric y Toyota; pioneros tecnológicos consolidados como Amazon, Intuit o Facebook; startups de hipercrecimiento de próxima generación como Twilio, Dropbox y Airbnb e infinidad de otras startups en ciernes de las cuales no has oído hablar… todavía. Basándose en su experiencia de los últimos cinco años, en los que ha trabajado con algunas de estas organizaciones, así como con organismos sin ánimo de lucro, ONG y diversos Gobiernos, Ries presenta un sistema de gestión emprendedora que conduce a las organizaciones de diferentes dimensiones y sectores a lograr un crecimiento sostenido y generar un impacto de resultados a largo plazo. A partir de experiencias reales de empresas que han llevado a la práctica estas ideas en un amplio abanico de sectores, industrias y servicios, El camino hacia el Lean Startup aborda con detalle un conjunto de iniciativas que pueden ayudarte a apostar por el espíritu emprendedor como eje central de tu negocio, así como mostrarte cómo cambiar la mentalidad de tu equipo directivo.",
            "medidas": "15 x 23",
            "paginas": "416",
            "peso": "0.4100",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      }
    ],
    "literatura": [
      {
        "titulo": "MITOS, LEYENDAS Y CUENTOS PERUANOS",
        "autor": "JOSÉ MARÍA ARGUEDAS",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "mitos-leyendas.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Mitos, leyendas y cuentos peruanos es una obra compuesta por narraciones populares recogidas por los maestros y alumnos en las tres regiones geográficas del país: la costa, la sierra, y la selva, seleccionadas y anotadas por José María Arguedas y Francisco Izuierdo Ríos, ambos profundamente comprometidos con el rescate y la valoración de la literatura oral del Perú, porque, como decía José María Arguedas, ...es incompleta la cultura de quienes desconocen esta fuente",
            "medidas": "13 x 19",
            "paginas": "216",
            "peso": "0.1750",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ABRIL ROJO",
        "autor": "SANTIAGO RONCAGLIOLO",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "abril-rojo.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Siempre quise escribir un thriller, es decir, un policial sangriento con asesinos en serie y crímenes monstruosos. Y encontré los elementos necesarios en la historia de mi país: una zona de guerra, una celebración de la muerte como la Semana Santa, una ciudad poblada de fantasmas. ¿Se puede pedir más? El investigador de los asesinatos es el fiscal distrital adjunto Félix Chacaltana Saldívar. A él le gusta que lo llamen así, con su título y todo. El fiscal Chacaltana nunca ha hecho nada malo, nunca ha hecho nada bueno, nunca ha hecho nada que no estuviese claramente estipulado en los reglamentos de su institución. Pero ahora va a conocer el horror. Y el horror no se ha leído el código civil. Siempre quise escribir una novela sobre lo que ocurre cuando la muerte se convierte en la única forma de vida. Y aquí está. Santiago Roncagliolo",
            "medidas": "13 x 19",
            "paginas": "336",
            "peso": "0.2700",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "COSAS QUE NO HAY QUE CONTAR",
        "autor": "RENATO CISNEROS",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "cosas-no-contar.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Domingo Sologuren es un periodista treintañero, sin pareja fija ni casa propia, que lleva el registro detallado de su experiencia sentimental. Su diario se explaya en un repertorio de anécdotas, entre pueriles, románticas y desfachatadas, donde lo vemos recorrer la ciudad en su modesto Volkswagen; pasear por los locales nocturnos de Lima; bailar con lumbalgia; cortejar mujeres en Cuzco, Cartagena y Santiago; conversar con su perro sobre el desamor humano; o reflexionar sobre el sexo, la infidelidad, el despecho y el romance en Internet. Con el dominio narrativo que distingue a su prosa, Renato Cisneros escarba en la intimidad de un personaje que ha sabido hilvanar en un dietario las diversas historias de una misma adicción: enamorar y enamorarse.",
            "medidas": "13 x 19",
            "paginas": "224",
            "peso": "0.1700",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ABRAHAM VALDELOMAR",
        "autor": "SELECCIÓN VALDELOMAR",
        "editorial": "EstruendoMudo",
        "precioOriginal": "29.00",
        "precioCompra": "19.34",
        "precioVenta": "26.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "valdelomar.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Tiene usted en sus manos 13 cuentos finamente seleccionados de la producción de Abraham Valdelomar. De elaboración esteticista, exótica, criolla y fantástica, la prosa del conde de Lemos es tan versátil como elegante y original. Un autor para los gustos más exigentes.",
            "medidas": "15 x 23",
            "paginas": "160",
            "peso": "0.2550",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA GUERRA NO TIENE ROSTRO DE MUJER",
        "autor": "STEVLANA ALEXIEVICH",
        "editorial": "Debate",
        "precioOriginal": "89.00",
        "precioCompra": "59.34",
        "precioVenta": "80.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "guerra-no-tiene-rostro-mujer.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "PREMIO NOBEL DE LITERATURA 2015 «Ganadora del premio Nobel 2015 por su obra polifónica, un monumento al sufrimiento y al coraje en nuestro tiempo». Academia Sueca Casi un millón de mujeres combatió en las filas del Ejército Rojo durante la segunda guerra mundial, pero su historia nunca ha sido contada. Este libro reúne los recuerdos de cientos de ellas, mujeres que fueron francotiradoras, condujeron tanques o trabajaron en hospitales de campaña. Su historia no es una historia de la guerra, ni de los combates, es la historia de hombres y mujeres en guerra.¿Qué les ocurrió? ¿Cómo les transformó? ¿De qué tenían miedo? ¿Cómo era aprender a matar? Estas mujeres, la mayoría por primera vez en sus vidas, cuentan la parte no heroica de la guerra, a menudo ausente de los relatos de los veteranos. Hablan de la suciedad y del frío, del hambre y de la violencia sexual, de la angustia y de la sombra omnipresente de la muerte. Alexiévich deja que sus voces resuenen en este libro estremecedor, que pudo reescribir en 2002 para introducir los fragmentos tachados por la censura y material que no se había atrevido a usar en la primera versión.",
            "medidas": "15 x 23",
            "paginas": "364",
            "peso": "0.4200",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"	
        }
      },
      {
        "titulo": "SIDDARTHA",
        "autor": "HESSE",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "siddhartha.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Esta novela, ambientada en la India tradicional, relata la vida de Siddhartha, un hombre para quien el camino de la verdad pasa por la renuncia y la comprensión de la unidad que subyace en todo lo existente. En sus páginas, el autor ofrece todas las opciones espirituales del hombre. Hermann Hesse buceó en el alma de Oriente a fin de aportar sus aspectos positivos a nuestra sociedad. Siddhartha es la obra más representativa de este proceso y ha ejercido una gran influencia en la cultura occidental del siglo XX.",
            "medidas": "13 x 19",
            "paginas": "212",
            "peso": "0.1750",
            "anio_publicacion": "2014",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "DESGRACIA",
        "autor": "COETZEE",
        "editorial": "DeBolsillo",
        "precioOriginal": "39.00",
        "precioCompra": "26.00",
        "precioVenta": "35.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "desgracia.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "A los cincuenta y dos años, David Lurie tiene poco de lo que enorgullecerse. Con dos divorcios a sus espaldas, apaciguar el deseo es su única aspiración; sus clases en la universidad son un mero trámite para él y para los estudiantes. Cuando se destapa su relación con una alumna, David, en un acto de soberbia, preferirá renunciar a su puesto antes que disculparse en público. Rechazado por todos, abandona Ciudad del Cabo y va a visitar la granja de su hija Lucy. Allí, en una sociedad donde los códigos de comportamiento, sean de blancos o de negros, han cambiado; donde el idioma es una herramienta viciada que no sirve a este mundo naciente, David verá hacerse añicos todas sus creencias en una tarde de violencia implacable. Una historia profunda, extraordinaria, que por momentos atenaza el corazón, y es siempre, hasta el final, subyugante: Desgracia, que obtuvo el prestigioso premio Booker, no dejará indiferente al lector.",
            "medidas": "13 x 19",
            "paginas": "272",
            "peso": "0.1900",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA BAILARINA DE AUSCHWITZ",
        "autor": "EDITH EGER",
        "editorial": "Planeta",
        "precioOriginal": "59.00",
        "precioCompra": "41.30",
        "precioVenta": "53.10",
        "tipoDeCompra": "30% DESCUENTOS",
        "imagen": "la-bailarina-de-auschwitz.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Eger tenía dieciséis años cuando los nazis invadieron su pueblo de Hungría y se la llevaron con el resto de su familia a Auschwitz. Al pisar el campo, sus padres fueron enviados a la cámara de gas y ella permaneció junto a su hermana, pendiente de una muerte segura. Pero bailar El Danubio azul para Mengele salvó su vida, y a partir de entonces empezó una nueva lucha por la supervivencia. Primero en los campos de exterminio, luego en la Checoslovaquia tomada por los comunistas y, finalmente, en Estados Unidos, donde acabaría convirtiéndose en discípula de Viktor Frankl. Fue en ese momento, tras décadas ocultando su pasado, cuando se dio cuenta de la necesidad de curar sus heridas, de hablar del horror que había vivido y de perdonar como camino a la sanación. Su mensaje es claro: tenemos la capacidad de escapar de las prisiones que construimos en nuestras mentes y podemos elegir ser libres, sean cuales sean las circunstancias de nuestra vida.",
            "medidas": "15 x 23",
            "paginas": "414",
            "peso": "0.4650",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA CHICA INVISIBLE",
        "autor": "BLUE JEANS",
        "editorial": "Planeta",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "chica-invisible.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "En este instituto todos tienen secretos, todos parecen culpables, todos son sospechosos. Aurora Ríos es invisible para casi todos. Los acontecimientos del pasado han hecho que se aísle del mundo y que apenas se relacione. A sus diecisiete años, no tiene amigos y está harta de que los habitantes de aquel pueblo hablen a su espalda. Una noche de mayo, su madre no la encuentra en casa cuando regresa del trabajo. No es lo habitual. Aurora aparece muerta a la mañana siguiente en el vestuario de su instituto, el Rubén Darío. Tiene un golpe en la cabeza y han dejado una brújula junto a su cuerpo. ¿Quién es el responsable de aquel terrible suceso? Julia Plaza, compañera de clase de la chica invisible, está obsesionada con encontrar la respuesta. Su gran inteligencia y su memoria prodigiosa le sirven para realizar el cubo de Rubik en cincuenta segundos o ser invencible jugando al ajedrez. Pero ¿podrá ayudar a sus padres en la resolución de aquel enigma? Su madre, Aitana, es la forense del caso y su padre, Miguel Ángel, el sargento de la Policía Judicial de la Guardia Civil encargado de la investigación. Julia, junto a su inseparable amigo Emilio, un chico muy particular con una mirada inquietante, tratará de hacer todo lo que esté en su mano para que el asesinato de Aurora Ríos no quede impune.",
            "medidas": "15 x 23",
            "paginas": "546",
            "peso": "0.6000",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA MUERTE DEL COMENDADOR",
        "autor": "HARUKI MURAKAMI",
        "editorial": "Tusquets",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "muerte-comendador-1.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "En plena crisis de pareja, un retratista de cierto prestigio abandona Tokio en dirección al norte de Japón. Confuso, sumido en sus recuerdos, deambula por el país hasta que, finalmente, un amigo le ofrece instalarse en una pequeña casa aislada, rodeada de bosques, que pertenece a su padre, un pintor famoso. En suma, un lugar donde retirarse durante un tiempo. En esa casa de paredes vacías, tras oír extraños ruidos, el protagonista descubre en un desván lo que parece un cuadro, envuelto y con una etiqueta en la que se lee: «La muerte del comendador». Cuando se decida a desenvolverlo se abrirá ante él un extraño mundo donde la ópera Don Giovanni de Mozart, el encargo de un retrato, una tímida adolescente y, por supuesto, un comendador, sembrarán de incógnitas su vida, hasta hace poco anodina y rutinaria. Este primer volumen de la novela La muerte del comendador es un fascinante laberinto donde lo cotidiano se ve invadido de señales indescifrables, de preguntas cuya respuesta todavía está lejos de vislumbrarse. El lector, al igual que el protagonista, deberá permanecer muy atento.",
            "medidas": "15 x 22",
            "paginas": "450",
            "peso": "0.5250",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "BAILA, BAILA, BAILA",
        "autor": "HARUKI MURAKAMI",
        "editorial": "Tusquets",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "baila-baila-baila.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Una magnífica combinación de intriga, sexo y rock and roll con los densos y poéticos silencios del mejor Murakami. En marzo de 1983, el joven protagonista de esta novela, redactor freelance todoterreno, después de pasar días sombríos, siente la necesidad de volver a ciertos escenarios de su vida para ajustar cuentas con el pasado. Viaja a Sapporo con la intención de alojarse en el Hotel Delfín, donde años atrás pasó una semana con una misteriosa mujer que, de manera inesperada, desapareció de su lado. A su llegada descubre que han derribado el hotel y que en su lugar se alza otro, moderno y lujoso, pero su estancia allí propicia la aparición de personajes envueltos en un aura de irrealidad: una guapa recepcionista que ha vivido experiencias inverosímiles, una adolescente dotada de una aguda sensibilidad, o un antiguo compañero de colegio, ahora actor de éxito, que lo meterá en graves aprietos. Asesinatos, viajes a Hawai, pasajes a otros mundos y fiestas se suceden al ritmo de la música que suena en la radio de su destartalado Subaru. Lo cierto es que, como afirma un enigmático personaje, todo está conectado. Porque sólo se regresa al Hotel Delfín para poder empezar de nuevo.",
            "medidas": "13 x 19",
            "paginas": "464",
            "peso": "0.3050",
            "anio_publicacion": "1988",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "PATRIA",
        "autor": "FERNANDO ARAMBURO",
        "editorial": "Tusquets",
        "precioOriginal": "89.00",
        "precioCompra": "59.34",
        "precioVenta": "80.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "patria.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "El día en que ETA anuncia el abandono de las armas, Bittori se dirige al cementerio para contarle a la tumba de su marido el Txato, asesinado por los terroristas, que ha decidido volver a la casa donde vivieron. ¿Podrá convivir con quienes la acosaron antes y después del atentado que trastocó su vida y la de su familia? ¿Podrá saber quién fue el encapuchado que un día lluvioso mató a su marido, cuando volvía de su empresa de transportes? Por más que llegue a escondidas, la presencia de Bittori alterará la falsa tranquilidad del pueblo, sobre todo de su vecina Miren, amiga íntima en otro tiempo, y madre de Joxe Mari, un terrorista encarcelado y sospechoso de los peores temores de Bittori. ¿Qué pasó entre esas dos mujeres? ¿Qué ha envenenado la vida de sus hijos y sus maridos tan unidos en el pasado? Con sus desgarros disimulados y sus convicciones inquebrantables, con sus heridas y sus valentías, la historia incandescente de sus vidas antes y después del cráter que fue la muerte del Txato, nos habla de la imposibilidad de olvidar y de la necesidad de perdón en una comunidad rota por el fanatismo político.",
            "medidas": "15 x 23",
            "paginas": "648",
            "peso": "0.7200",
            "anio_publicacion": "2016",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "1984",
        "autor": "GEORGE ORWELL",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "1984.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso y su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos. Hasta que decide replantearse la verdad del sistema que los gobierna y somete.",
            "medidas": "13 x 19",
            "paginas": "352",
            "peso": "0.2500",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"	
        }
      },
      {
        "titulo": "FICCIONES",
        "autor": "BORGES",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "ficciones.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Pensé en un laberinto, en un sinuoso laberinto creciente que abarcara el pasado y el porvenir y que implicara de algún modo los astros.» Ficciones es quizá el libro más reconocido de Jorge Luis Borges. Entre los cuentos que se reúnen aquí hay algunos de corte policial, como «La muerte y la brújula», otros sobre libros imaginarios, como «Tlön, Uqbar, Orbis Tertius», y muchos pertenecientes al género fantástico, como «Las ruinas circulares» o «El Sur», acaso su mejor relato, en palabras del mismo autor. Está compuesto por los libros El jardín de senderos que se bifurcan (1941) y Artificios (1944), considerados piezas fundamentales del universo borgeano. Jorge Luis Borges (Buenos Aires, 1899 – Ginebra, 1986) es uno de los mayores escritores de habla hispana. Publicó libros de poesía, ensayo y cuentos, por los cuales ha obtenido renombre en todo el mundo. Recibió distinciones de universidades y gobiernos extranjeros y numerosos premios, entre los que se destaca el Cervantes en 1979.",
            "medidas": "13 x 19",
            "paginas": "223",
            "peso": "0.1750",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "BESTIARIO",
        "autor": "JULIO CORTAZAR",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "bestiario.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Bestiario es el primer libro de relatos que Julio Cortázar publica con su auténtico nombre. No hay en estas ocho obras maestras ni el menor balbuceo ni resacas juveniles: son perfectas. Estos cuentos, que hablan de objetos y hechos cotidianos, pasan a la dimensión de la pesadilla o de la revelación de un modo natural e imperceptible. Sorpresa o incomodidad son, en cada texto, un condimento que se agrega al placer indescriptible de su lectura. Sus relatos nos desazonan porque poseen una característica muy rara en la literatura: se nos quedan mirando, como si esperaran algo de nosotros. Después de leer estos verdaderos clásicos del género, nuestra opinión sobre el mundo no puede seguir siendo la misma.",
            "medidas": "12 x 19",
            "paginas": "134",
            "peso": "0.0130",
            "anio_publicacion": "2016",
            "presentacion": "Tapa Rústica"	
        }
      },
      {
        "titulo": "MISERY",
        "autor": "STEPHEN KING",
        "editorial": "DeBolsillo",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "misery.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Paul Shledon es un escritor que sufre un grave accidente y recobra el conocimiento en una apartada casa en la que vive una misteriosa mujer, corpulenta y de extraño carácter. Se trata de una antigua enfermera, involucrada en varias muertes misteriosas ocurridas en diversos hospitales. Fanática de un personaje de una serie de libros que él ha decido dejar de escribir, está dispuesta a hacer todo lo necesario para «convencerlo» de que retome la escritura. Esta mujer es capaz de los mayores horrores, y Paul, con las piernas rotas y entre terribles dolores, tendrá que luchar por su vida.",
            "medidas": "12 x 19",
            "paginas": "372",
            "peso": "0.2650",
            "anio_publicacion": "2012",
            "presentacion": "Tapa Rústica"
        }
      },

      {
        "titulo": "EL VIEJO Y EL MAR",
        "autor": "ERNEST HEMINGWAY",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "viejo-y-mar.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Con un lenguaje de gran fuerza y sencillez, El viejo y el mar narra la historia de un viejo pescador cubano a quien la suerte parece haber abandonado, y del desafío mayúsculo al que se enfrenta: la batalla despiadada y sin tregua con un pez gigantesco en las aguas del golfo. Escrito en 1952, por encargo de la revista Life, este relato lo confirmó como uno de los escritores más significativos del siglo XX, obteniendo el Premio Pulitzer en 1953 y allanando su carrera hacia el Nobel de Literatura, que recibió en 1954.",
            "medidas": "13 x 19",
            "paginas": "208",
            "peso": "0.1550",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ASESINATO EN EL ORIENTE EXPRESS",
        "autor": "AGATHA CHRISTIE",
        "editorial": "Booket",
        "precioOriginal": "29.00",
        "precioCompra": "19.34",
        "precioVenta": "26.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "asesinato-orient-express.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Un grupo de viajeros se ven atrapados en el Orient Express en plena tormenta de nieve. Entre ellos pronto se descubre un cadáver. El asesino tiene que ser uno de los presentes. Al detective más famoso de la historia, Hercules Poirot, le corresponde averiguar quién ha cometido un crimen.",
            "medidas": "13 x 19",
            "paginas": "240",
            "peso": "0.2200",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ALICIA EN EL PAÍS DE LAS MARAVILLAS",
        "autor": "LEWIS CARROLL",
        "editorial": "Penguin Clásicos",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "alicia-pais-maravillas.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Alicia en el país de las maravillas traspasa el umbral que separa la realidad del sueño y se adentra en un territorio sin leyes ni normas donde todo es posible. Triunfo de la imaginación y del ingenio, esta narración recrea un mundo de escenarios y criaturas insólitos, y pone en entredicho todos y cada uno de los postulados lógicos del mundo convencional. Este volumen presenta, junto a la traducción magistral de Luis Maristany y las láminas clásicas de John Tenniel, una nueva edición de Las aventuras subterráneas de Alicia, la obra seminal que el reverendo Dodgson -Lewis Carroll era su seudónimo- escribió e ilustró a mano para Alice Liddell en 1864. Cierra el tomo Alicia para los pequeños, la adaptación infantil que el propio autor hizo de su propia obra en 1890.",
            "medidas": "13 x 19",
            "paginas": "396",
            "peso": "0.2800",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL GRAN GATSBY",
        "autor": "SCOTT FITZGERALD",
        "editorial": "Origo",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "gran-gatsby-origo.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "El gran Gatsby, considerada por la critica como la gran novela norteamericana del siglo XX, se sumerge en lo mas profundo de los locos años 20, época marcada por la recuperación económica tras la Primera Guerra Mundial y la Ley Seca. Jay Gatsby, un enigmático millonario que se ha hecho a sí mismo, icono del sueño americano, construye en torno a su figura un mundo frívolo y lujoso, a través del cual pretende recuperar un amor perdido. Pero el vértigo de aquellos años, el vano resplandor de sus apariencias, acabará muy pronto... y con él, las esperanzas de su héroe.",
            "medidas": "21 x 15",
            "paginas": "216",
            "peso": "",
            "anio_publicacion": "2014",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL HOMBRE ILUSTRADO",
        "autor": "RAY BRADBURY",
        "editorial": "Booket",
        "precioOriginal": "39.00",
        "precioCompra": "26.00",
        "precioVenta": "35.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "hombre-ilustrado.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "En esta colección de historias entrelazadas, el narrador anónimo conoce a El Hombre Ilustrado, un curioso personaje con el cuerpo completamente cubierto de tatuajes. Sin embargo, lo más remarcable e inquietante es que las ilustraciones están mágicamente vivas y cada una de ellas empieza a desarrollar su propia historia, como en La pradera donde unos niños llegan un juego de realidad virtual más allá de sus límites. O en «Calidoscopio», el sobrecogedor relato de un astronauta que se dispone a reentrar en la atmósfera terrestre sin la protección de una nave espacial. O en La hora cero, en el que los invasores extraterrestres han encontrado unos aliados lógicos y sorprendentes: los niños humanos.",
            "medidas": "12 x 19",
            "paginas": "288",
            "peso": "0.2300",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL GRAN GATSBY",
        "autor": "SCOTT FITZGERALD",
        "editorial": "DeBolsillo",
        "precioOriginal": "39.00",
        "precioCompra": "26.00",
        "precioVenta": "35.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "gran-gatsby-bolsillo.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Jay Gatsby, el caballero que reina sobre West Egg, es el arquetipo de aquellos míticos años veinte en que pareció que todo era posible, un tiempo de felicidad entre el horror de la Primera Guerra Mundial y la barbarie de la Segunda. Junto al resto de los protagonistas, representa a la Generación Perdida, a todos aquellos «jóvenes tristes» que personificaron el mito de la pasión y el desamor, de la literatura que se funde con la vida. Publicada por primera vez en 1925, El gran Gatsby está considerada como La Gran Novela Americana. Simboliza el triunfo, la perpetua juventud y el deslumbramiento que desembocan en la tragedia, la decadencia y la caída, constantes reflejadas con asombrosa precisión en la propia vida de Fitzgerald.",
            "medidas": "13 x 19",
            "paginas": "192",
            "peso": "0.1600",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "FAHRENHEIT 451",
        "autor": "RAY BRADBURY",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "fahrenheit.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Fahrenheit 451 cuenta la historia de un sombrío y horroroso futuro. Montag, el protagonista, pertenece a una extraña brigada de bomberos cuya misión, paradójicamente, no es la de sofocar incendios, sino la de provocarlos para quemar libros. Porque en el país de Montag está terminantemente prohibido leer. Porque leer obliga a pensar, y en el país de Montag está prohibido pensar. Porque leer impide ser ingenuamente feliz, y en el país de Montag hay que ser feliz a la fuerza...",
            "medidas": "13 x 19",
            "paginas": "192",
            "peso": "0.1400",
            "anio_publicacion": "2016",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "DIARIO",
        "autor": "ANNA FRANK",
        "editorial": "DeBolsillo",
        "precioOriginal": "39.00",
        "precioCompra": "26.00",
        "precioVenta": "35.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "diario-ana-frank.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Un testimonio único sobre el horror y la barbarie nazi, y sobre los sentimientos y experiencias que vivió una niña judía recluida con su familia para huir del Holocausto Tras la invasión de Holanda, los Frank, comerciantes judíos alemanes emigrados a Amsterdam en 1933, se ocultaron de la Gestapo en una buhardilla anexa al edificio donde el padre de Anne tenía sus oficinas. Eran ocho personas y permanecieron recluidas desde junio de 1942 hasta agosto de 1944, fecha en que fueron detenidas y enviadas a campos de concentración. En ese lugar y en las más precarias condiciones, Anne, a la sazón una niña de trece años, escribió su estremecedor Diario: un testimonio único en su género sobre el horror y la barbarie nazi, y sobre los sentimientos y experiencias de la propia Anne y sus acompañantes. Anne murió en el campo de Bergen-Belsen en marzo de 1945. Su Diario nunca morirá.",
            "medidas": "13 x 19",
            "paginas": "348",
            "peso": "0.2950",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ROBINSON CRUSOE",
        "autor": "DANIEL DEFOE",
        "editorial": "DeBolsillo",
        "precioOriginal": "39.00",
        "precioCompra": "27.34",
        "precioVenta": "35.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "robinson-crusoe.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Robinson Crusoe naufraga y acaba en una isla desierta. Allí tendrá que hacer uso de su inteligencia y perspicacia para defenderse de los peligros que esconde el lugar, deshabitado solo en apariencia. Publicada en 1719, está considerado uno de los clásicos más leídos de todos los tiempos, y en rigor, se trata de la primera de las grandes novelas inglesas, un texto fundacional. Además de un libro de aventuras, lleno de inolvidables personajes, Robinson Crusoe es una de las primeras reflexiones narrativas sobre la soledad, la sociedad y las relaciones humanas. La presente edición, traducción de Julio Cortázar, incorpora una detallada cronología, además de una introducción a cargo de John Richetti, catedrático emérito A. M. Rosenthal de lengua inglesa en la Universidad de Pensilvania y uno de los más reconocidos especialistas en la literatura del siglo XVIII. Entre sus numerosos estudios cabe destacar The Life of Daniel Defoe (2005).",
            "medidas": "13 x 19",
            "paginas": "608",
            "peso": "0.4500",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "MUJERCITAS",
        "autor": "LOUISA MAY ALCOTT",
        "editorial": "Penguin Clásicos",
        "precioOriginal": "69.00",
        "precioCompra": "46.00",
        "precioVenta": "62.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "mujercitas.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Mujercitas, el clásico de Louisa May Alcott ambientado en la guerra de Secesión, fue publicado en Estados Unidos en 1868. Han pasado casi ciento cincuenta años desde entonces, pero la complicidad de las cuatro hermanas March, quienes a través de sus gestos y palabras resumen el espíritu crítico de una época, sigue siendo fuente de inspiración y disfrute para las generaciones de lectores que se asoman a las páginas de esta fascinante obra. Elaine Showalter, catedrática de la Universidad de Princeton, está considerada una de las voces más representativas de la crítica literaria feminista. En su brillante introducción analiza en detalle las influencias de la autora, así como el impacto de Mujercitas en la obra de escritoras de la talla de Simone de Beauvoir, Joyce Carol Oates o Cinthya Ozick.",
            "medidas": "13 x 19",
            "paginas": "800",
            "peso": "0.5800",
            "anio_publicacion": "2017",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL HOBBIT",
        "autor": "J. R. R. TOLKIEN",
        "editorial": "Booket",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "hobbit.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Cuando alrededor de 1930, J.R.R. Tolkien comenzó a escribir El Hobbit, hacía ya diez años que trabajaba en el vasto panorama mitológico de El Libro de los Relatos, que más tarde se llamaría El Silmarillion. Así como esas crónicas tempranas narraban los mitos inmemoriales de la Primera y Segunda Edad, Tolkien pronto advirtió que El Hobbit iba ordenándose de algún modo como un relato de la Tercera Edad (Gandalf habla del Nigromante en las primeras páginas), aunque las inesperadas aventuras de un pacífico hombre del campo no parecieran tener mucha relación con las vastas y oscuras mitologías de la Tierra Media. El estilo directo y lineal, con alusiones (que el autor deploró más tarde) a un público infantil, no impide la poderosa irrupción -unas pocas veces en términos de comedia- de los grandes temas tolkienianos (el poder, la codicia, la guerra, la muerte) que reaparecerían en una dimensión a menudo obviamente épica en El Señor de los Anillos.",
            "medidas": "13 x 19",
            "paginas": "288",
            "peso": "0.2200",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "CUENTOS DE BUENAS NOCHES PARA NIÑAS REBELDES 2",
        "autor": "ELENA FAVILLI",
        "editorial": "Planeta",
        "precioOriginal": "59.00",
        "precioCompra": "39.34",
        "precioVenta": "53.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "cuentos-de-buenas-noches-2.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "La nueva entrega del bestseller internacional que inspira a las niñas de todos los rincones del mundo a soñar en grande, aspirar a más y a luchar con fuerza. Cuentos de buenas noches para niñas rebeldes 2 es una colección totalmente inédita de cuentos que celebran a más mujeres extraordinarias, como Rigoberta Menchú, Beyoncé, Lorena Ochoa, Celia Cruz, J. K. Rowling y más.",
            "medidas": "17 x 24",
            "paginas": "212",
            "peso": "0.6100",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "CAMBIO DE PALABRAS",
        "autor": "CESAR HILDEBRANDT",
        "editorial": "Planeta",
        "precioOriginal": "49.00",
        "precioCompra": "32.67",
        "precioVenta": "41.10",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "cambio-palabras.jpg",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "Cambio de palabras reúne 25 de las mejores entrevistas de César Hildebrandt, el periodista más respetado del país. Publicadas de 1971 a 1992, en el semanario Caretas principalmente, las conversaciones con políticos como Víctor Raúl Haya de la Torre o Fernando belaunde Terry, o escritores como Mario Vargas Llosa, Julio Cortázar, Jorge Luis Borges o Juan Gonzalo Rose, son consideradas verdaderas clases de buen periodismo. Esta es la edición de un libro ya clásico. Releyendo algunas de las entrevistas de esta edición compruebo, además, que la política peruana se quedó sin repuestos. A Sánchez lo sucedió don Nadie, a Towsend le tomó la posta el silencio, a Pedro Beltrán lo heredó la Confiep, de Barrantes solo quedaron viudad. cambio de palabras no podría haberse hecho ahora por falta de elenco. Cuando escucho a muchos de los congresistas balbucera desde sus escaños una jerga brotada en sucesivas lobotomías, me digo que tuve, como muchos, la suerte de asistir a un país mejor educado. Suerte relativa, por supuesto, porque junto con ella viene algo parecido a la melancolía. - César Hildebrandt",
            "medidas": "15 x 23",
            "paginas": "332",
            "peso": "0.8500",
            "anio_publicacion": "2018",
            "presentacion": "Tapa Rústica"
        }
      }
    ],
    "austral": [
      {
        "titulo": "DRÁCULA",
        "autor": "BRAM STOKER",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "dracula2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA ODISEA",
        "autor": "HOMERO",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "la-odisea2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA CASA DE LOS ESPÍRITUS",
        "autor": "ISABEL ALLENDE",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "la-casa-espiritus2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LA ILIADA",
        "autor": "HOMERO",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "la-iliada2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ROMEO Y JULIETA",
        "autor": "SHAKESPEARE",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "romeo-y-julieta2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "ORGULLO Y PREJUICIO",
        "autor": "JANE AUSTEN",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "orgullo-y-prejuicio2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "CUENTOS",
        "autor": "ALLAN POE",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "cuentos2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "LOS CACHORROS",
        "autor": "VARGAS LLOSA",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "los-cachorros2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL PERFUME",
        "autor": "SUSKIND",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "el-perfume2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "EL RETRATO DE DORIAN GREY",
        "autor": "OSCAR WILDE",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "el-retrato-dorian-grey2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "FRANKEINSTEIN",
        "autor": "SHELLEY",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "frankenstein2.png",
        "cantidad": 1,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      },
      // {
      //   "titulo": "LA METAMORFÓSIS",
      //   "autor": "KAFKA",
      //   "editorial": "Austral",
      //   "precioOriginal": "19.90",
      //   "precioCompra": "19.00",
      //   "precioVenta": "19.90",
      //   "tipoDeCompra": "",
      //   "imagen": "",
      //   "cantidad": 0,
      //   "filtro": "",
        //   "detalle": {

        //   }
      // },
      // {
      //   "titulo": "BODA DE SANGRE",
      //   "autor": "GARCIA LORCA",
      //   "editorial": "Austral",
      //   "precioOriginal": "19.90",
      //   "precioCompra": "19.00",
      //   "precioVenta": "19.90",
      //   "tipoDeCompra": "",
      //   "imagen": "",
      //   "cantidad": 0,
      //   "filtro": "",
    //   "detalle": {

    //   }
      // },
      // {
      //   "titulo": "VEINTE POEMAS DE AMOR Y UNA CANCIÓN DESESPERADA",
      //   "autor": "NERUDA",
      //   "editorial": "Austral",
      //   "precioOriginal": "19.90",
      //   "precioCompra": "19.00",
      //   "precioVenta": "19.90",
      //   "tipoDeCompra": "",
      //   "imagen": "",
      //   "cantidad": 0,
      //   "filtro": "",
    //   "detalle": {

    //   }
      // },
      {
        "titulo": "EL TÚNEL",
        "autor": "SABATO",
        "editorial": "Austral",
        "precioOriginal": "19.90",
        "precioCompra": "19.00",
        "precioVenta": "19.90",
        "tipoDeCompra": "",
        "imagen": "el-tunel2.png",
        "cantidad": 0,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2019",
            "presentacion": "Tapa Rústica"
        }
      }
    ],
    "otros": [
      {
        "titulo": "EL MONJE QUE VENDIÓ SU FERRARI",
        "autor": "ROBIN S. SHARMA",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "monje-que-vendio-su-ferrari.jpg",
        "cantidad": 0,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "SABIDURÍA COTIDIANA",
        "autor": "ROBIN S. SHARMA",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "sabiduria-cotidiana-monje.jpg",
        "cantidad": 0,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "2010",
            "presentacion": "Tapa Rústica"
        }
      },
      {
        "titulo": "DESCUBRE TU DESTINO",
        "autor": "ROBIN S. SHARMA",
        "editorial": "DeBolsillo",
        "precioOriginal": "35.00",
        "precioCompra": "23.34",
        "precioVenta": "31.50",
        "tipoDeCompra": "oferta 3 x 2",
        "imagen": "descubre-tu-destino.jpg",
        "cantidad": 0,
        "filtro": "",
        "detalle": {
            "descripcion": "",
            "medidas": "",
            "paginas": "",
            "peso": "",
            "anio_publicacion": "",
            "presentacion": "Tapa Rústica"
        }
      }
    ]
  }

}
