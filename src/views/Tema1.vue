<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos y estructuración del sitio web
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-sm-12.col-lg-7
          p.mb-3 Para establecer la estructura de un sitio web de manera coherente, el primer paso técnico consiste en comprender la naturaleza del entorno en el que se desarrollará. La selección de la plataforma y la comprensión de su funcionamiento interno constituyen decisiones arquitectónicas fundamentales que determinarán el éxito, la escalabilidad y la adaptabilidad del proyecto a las necesidades del usuario final.
          .bg-color-1.p-4
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/2.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 El ecosistema del desarrollo web ha evolucionado considerablemente, alejándose de los paradigmas que requerían la programación manual de extensas líneas de código en lenguajes complejos. En la actualidad, la gestión de la información digital se apoya en herramientas intermediarias que facilitan y democratizan el acceso al desarrollo web.



      //------------------------------
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 ¿Qué es WordPress?
      
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.pd-cus-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/3.svg')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 Desde una perspectiva técnica y conceptual, WordPress es un Sistema de Gestión de Contenidos (CMS, por sus siglas en inglés, #[i Content Management System]) de código abierto, desarrollado en PHP y vinculado a bases de datos MySQL o MariaDB. WordPress puede entenderse como el “motor” y el “chasis” de un vehículo digital: el desarrollador no necesita construir el motor desde cero, sino ensamblar las piezas correctas, diseñar la carrocería (el aspecto visual) y definir la ruta (la estructura del contenido), garantizando que el usuario tenga una experiencia segura y eficiente.

      p.mb-5(data-aos='fade-right') En el marco de la formación profesional mediada por Tecnologías de la Información y la Comunicación (TIC), WordPress constituye un entorno de aprendizaje ideal. Permite al estudiante interactuar con conceptos de arquitectura cliente y servidor, gestión de bases de datos y diseño de interfaces, sin la complejidad de aprender múltiples lenguajes de programación simultáneamente.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4.bg-color-1.p-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0  Por ejemplo: un estudiante del programa de gastronomía del SENA que desee crear una plataforma para ofrecer servicios de banquetes puede centrarse en estructurar secciones como menús, galerías, testimonios y formularios de cotización, utilizando módulos preconstruidos (#[i plugins]), en lugar de invertir tiempo en programar cada funcionalidad desde cero. Esto facilita la transformación de las necesidades del usuario final en soluciones digitales funcionales, eficientes y coherentes.
          p.mb-0 WordPress ofrece una arquitectura modular que permite ampliar las funcionalidades de un sitio web mediante #[i plugins] y plantillas, adaptándose a los requerimientos específicos de cada proyecto. Esta flexibilidad posibilita la creación de sitios escalables, desde blogs personales hasta plataformas corporativas, sin comprometer la seguridad ni la estabilidad del sistema.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.png', alt='')

      p.mb-5 El uso de WordPress fomenta el desarrollo de competencias analíticas y de diseño en el estudiante, ya que implica planificar la estructura de la información, organizar menús y categorías, y diseñar la experiencia del usuario de manera lógica y accesible. De esta forma, el estudiante no solo aprende a manejar la herramienta, sino que integra conocimientos de arquitectura web, usabilidad y comunicación digital, esenciales para la gestión efectiva de cualquier proyecto en línea.




      //------------------------------
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Las páginas web dinámicas
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t1/6.png', alt='')
        .col-sm-12.col-lg-8.bg-color-2.p-4.mx-0
            p.mb-4 Para comprender el valor de un Sistema de gestión de contenidos (CMS, por sus siglas en inglés), es fundamental diferenciar entre la web estática y la web dinámica. Una página web estática es un documento fijo, escrito tradicionalmente en HTML, cuyo contenido no cambia a menos que el desarrollador modifique manualmente el archivo de código fuente. Por el contrario, WordPress genera páginas web dinámicas.
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/7.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0  Una página web dinámica se construye “al vuelo” en el momento en que un usuario la solicita. Cuando un visitante ingresa a una URL administrada por WordPress, el sistema consulta una base de datos central, extrae la información solicitada (textos, imágenes, configuraciones de diseño) y la ensambla en milisegundos para presentarla en el navegador. Esta separación estructural entre el diseño (la plantilla o tema) y el contenido (los datos almacenados) es el principio rector de la gestión moderna de la información en línea.

      p.mb-5(data-aos='fade-right') Comprender este concepto es crucial para la diagramación y estructuración del sitio. La información es maleable y reutilizable. Un mismo artículo (entrada) puede mostrarse en la página de inicio, en un archivo mensual o en un bloque de noticias relacionadas, sin necesidad de duplicar el texto. Esto facilita enormemente la actualización y el mantenimiento del sitio a largo plazo.


      .cajon.color-secundario.p-4(data-aos='fade-right')
          .h5 Por ejemplo
          p.mb-0 Un centro de formación del SENA crea un portal de noticias para su comunidad. Si el sitio fuera estático, publicar una nueva noticia implicaría editar la página de inicio, crear una nueva página para la noticia y actualizar los menús manualmente. Al ser un sitio dinámico en WordPress, el administrador redacta la noticia en un procesador de texto interno y presiona “publicar”. El sistema actualiza automáticamente la base de datos, coloca el titular en la página de inicio, genera la página del artículo completo y lo clasifica en la categoría Noticias Institucionales, optimizando el tiempo y reduciendo el margen de error humano.




      //------------------------------
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Diferencias entre WordPress.com y WordPress.org
      p.mb-5(data-aos='fade-right') Uno de los obstáculos cognitivos más frecuentes en las etapas iniciales del aprendizaje de esta plataforma es la confusión entre sus dos vertientes principales: WordPress.com y WordPress.org. Aclarar esta dicotomía resulta un paso imprescindible para poder determinar correctamente la estructura del sitio, ya que la elección de una u otra plataforma implica restricciones o posibilidades tecnológicas significativamente distintas.
        
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Comparación entre WrodPress.org y WordPress.com
      .tabla-b.color-secundarioo.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.w-25 #[b Criterio de comparación]
              th #[b WordPress.org]
              th #[b WordPress.com]
          tbody
            tr
              td.fw-bold Naturaleza de la plataforma
              td Corresponde al #[i software] libre, gratuito y de código abierto de WordPress, disponible para descarga desde el sitio oficial.
              td Corresponde a un servicio comercial de alojamiento y publicación de sitios web, ofrecido por la empresa Automattic, a partir del #[i software] WordPress.
            tr
              td.fw-bold Modalidad de uso
              td Se implementa bajo un modelo auto alojado, por lo que la persona usuaria o la institución asume la instalación y administración del sistema.
              td Opera bajo un modelo de servicio administrado, en el cual la plataforma ofrece una solución integrada para crear y publicar contenidos sin instalación previa.
            tr
              td.fw-bold Requerimientos de implementación
              td Exige la contratación independiente de un servicio de #[i hosting] y de un dominio propio.
              td No requiere la búsqueda ni contratación inicial de #[i hosting], dado que este componente está integrado en el servicio.
            tr
              td.fw-bold Instalación del sistema
              td Requiere descargar e instalar el #[i software] en el entorno de alojamiento seleccionado.
              td No exige instalación directa del #[i software], ya que el usuario únicamente crea una cuenta y comienza a utilizar el servicio.
            tr
              td.fw-bold Nivel de autonomía
              td Ofrece un alto nivel de control y autonomía sobre el sitio web, su estructura y su funcionamiento.
              td Presenta un nivel de autonomía más limitado, especialmente en los planes gratuitos o básicos.
            tr
              td.fw-bold Gestión técnica del entorno
              td Permite intervenir de manera directa en la configuración y administración del sitio, así como en su entorno técnico.
              td Restringe el acceso a componentes técnicos del entorno, entre ellos los archivos del servidor.
            tr
              td.fw-bold Modificación del código fuente
              td Posibilita la modificación del código fuente, lo que favorece procesos avanzados de personalización y desarrollo.
              td No ofrece el mismo nivel de acceso ni de intervención sobre la base técnica del sistema.
            tr
              td.fw-bold Instalación de temas y #[i plugins]
              td Permite instalar cualquier tema o #[i plugin] de terceros, sin restricciones comerciales impuestas por la plataforma.
              td En sus planes gratuitos o básicos no permite la instalación de #[i plugins] externos, lo que limita la ampliación de funcionalidades.
            tr
              td.fw-bold Escalabilidad del proyecto
              td Facilita el crecimiento y escalamiento del sitio web sin restricciones estructurales impuestas por el proveedor de la plataforma.
              td Para acceder a funcionalidades equivalentes a las de WordPress.org, exige la contratación de planes empresariales de mayor costo.
            tr
              td.fw-bold Restricciones comerciales
              td No impone restricciones comerciales propias de una plataforma de servicio, ya que el control recae en quien administra el sitio.
              td En los planes iniciales incorpora restricciones funcionales y puede incluir publicidad de la plataforma dentro del sitio.
            tr
              td.fw-bold Pertinencia profesional
              td Se reconoce como el estándar de la industria para desarrolladores web profesionales, debido a su flexibilidad y capacidad de personalización.
              td Resulta funcional para experiencias iniciales o para usuarios que privilegian la facilidad de uso sobre el control técnico.
            tr
              td.fw-bold Implicación formativa
              td Favorece el desarrollo de competencias técnicas más amplias, relacionadas con la autonomía digital, la administración web y la personalización avanzada.
              td Favorece una aproximación inicial más sencilla al entorno WordPress, aunque con limitaciones que reducen la exploración profunda de su potencial técnico.


      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t1/8.svg', alt='')
        .col-sm-12.col-lg-9.bg-color-2.p-4.mx-0.align-items-center
            p.mb-0.mg-cus-1 La elección entre ambas opciones debe basarse en un análisis de los requerimientos del proyecto. Si un usuario requiere un blog personal transitorio para una tarea académica, la inmediatez de WordPress.com resulta adecuada. No obstante, si un aprendiz desarrolla el sitio web corporativo de una Pyme que incluirá comercio electrónico, aulas virtuales o sistemas de reservas complejos, la estructura cerrada de WordPress.com constituirá un impedimento, haciendo necesaria la elección de WordPress.org para garantizar el control de la información y la soberanía de los datos empresariales. En el contexto de esta formación y de la práctica profesional, el enfoque principal se orienta hacia el dominio de la versión autoalojada (WordPress.org), debido a su potencial formativo y su impacto en el sector productivo.
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
