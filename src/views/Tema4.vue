<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Arquitectura y estructura del sitio
      
      .bloque-texto-g.bloque-texto-g.bg-color-5.pd-cus-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t4/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 La configuración técnica inicial del sistema carece de valor si no se fundamenta en una sólida Arquitectura de la Información (AI). Esta disciplina, esencial en el diseño web contemporáneo, se encarga de organizar, estructurar y etiquetar los contenidos de manera lógica y comprensible. 
      
      p.mb-5(data-aos='fade-right') El entorno mediado por TIC exige que el profesional no solo sepa redactar un texto, sino que comprenda cómo ese texto se interconecta con el resto del ecosistema digital. Si el contenido es la “sangre” del sitio web, la arquitectura funcional compuesta por categorías, etiquetas, páginas estáticas y menús conforma el “sistema circulatorio”. Un diseño deficiente en esta etapa resulta en sitios web laberínticos, altas tasas de rebote y un pobre posicionamiento en los motores de búsqueda. A continuación, se desglosan los elementos estructurales nativos de WordPress que permiten organizar la información de manera profesional y accesible.
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7 
          .bg-color-1.p-4.mb-5
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/3.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 Las categorías constituyen la columna vertebral de la organización temática del sitio. Permiten agrupar contenidos relacionados, facilitando la navegación y mejorando la comprensión de los usuarios. La correcta asignación de categorías desde el inicio evita la duplicación de información y contribuye al posicionamiento SEO, al establecer jerarquías claras dentro del sitio.
          p.mb-0 Las etiquetas funcionan como puntos de conexión transversal entre contenidos. A diferencia de las categorías, no implican jerarquía, sino relaciones contextuales que permiten a los usuarios explorar temas relacionados de manera intuitiva. Una planificación adecuada de etiquetas ayuda a generar mapas de contenido que refuerzan la experiencia del usuario y la accesibilidad de la información.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/4.png', alt='')

      p.mb-0(data-aos='fade-right') Los menús y la navegación principal constituyen la interfaz estructural que guía al visitante por el sitio web. Diseñar menús claros, coherentes y consistentes permite que los usuarios encuentren rápidamente la información que buscan. Además, los menús bien planificados ayudan a distribuir autoridad de página para SEO, asegurando que las secciones más importantes sean fácilmente rastreables por los motores de búsqueda.


      //-----------------------------------------------------------------
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Categorías taxonómicas
      
      img.mb-5.d-none.d-lg-block(src='@/assets/curso/temas/t4/5.png', alt='')(data-aos='fade-right')
      p.mb-5(data-aos='fade-right') Las categorías en WordPress funcionan como un sistema de clasificación jerárquico, diseñado para agrupar contenidos que comparten una temática general. Son la forma más amplia de organizar la información y su propósito principal es guiar al usuario a través de las diferentes áreas temáticas del sitio web. Desde el punto de vista técnico, actúan como contenedores de información; cuando se crea una categoría, WordPress genera automáticamente una página que reúne todas las publicaciones asociadas a esa temática en orden cronológico.

      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/6.png', alt='')
        .col-sm-12.col-lg-7 
          p.mb-3 Desde una perspectiva pedagógica y de diagramación, las categorías deben planificarse antes de publicar el primer contenido. Un error frecuente en personas sin formación en diseño web es crearlas de manera improvisada, lo que genera una estructura desorganizada y difícil de entender. Como principio general, las categorías deben ser amplias, claras y coherentes entre sí. Además, permiten establecer jerarquías mediante subcategorías, lo que facilita una organización más detallada del contenido.
          .bg-color-1.p-4.mb-0
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/7.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 Es importante comprender que una buena estructura de categorías mejora tanto la experiencia del usuario como la navegación dentro del sitio. Cuando las categorías están bien definidas, el visitante puede ubicar la información de forma rápida y lógica, sin necesidad de recorrer múltiples páginas sin orientación clara.
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-4
          .bg-color-2.p-4.mb-cus
            p.mb-0.mg-cus-4 Ejemplo en contexto de formación profesional: un aprendiz desarrolla el sitio web para un centro de emprendimiento. En lugar de crear categorías desordenadas por cada idea que surge, organiza el contenido de manera estructurada. Define categorías principales como:
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/8.svg', alt='')
        .col-sm-12.col-lg-5
          img.mb-3.w-cus-4.d-none.d-lg-block(src='@/assets/curso/temas/t4/9.svg', alt='')
          p.mb-3 Si la categoría “Financiación” crece en contenido, puede dividirla en subcategorías como “capital semilla” y “créditos bancarios”.
          p.mb-0 Esta organización no solo facilita el acceso a la información, sino que también permite al usuario comprender de manera visual la estructura del sitio y los servicios ofrecidos. De esta forma, la arquitectura del contenido se convierte en una herramienta clave para mejorar la usabilidad, la claridad y el impacto del sitio web.
      
      
      
      
      
      
      //-----------------------------------------------------------------
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Etiquetas como sistema de recuperación de información
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t4/10.png', alt='')
        .col-sm-12.col-lg-8.bg-color-2.p-4.mx-0
            p.mb-3 Mientras que las categorías son jerárquicas y obligatorias (si no se asigna una, WordPress clasifica el contenido por defecto en “sin categoría”), las etiquetas son opcionales, transversales y no jerárquicas. Las etiquetas funcionan como un sistema de microclasificación, similar al índice analítico que se encuentra al final de un libro. Su función es describir aspectos específicos de un contenido, permitiendo relacionar información entre diferentes categorías.
            p.mb-0 Desde el punto de vista práctico, las etiquetas facilitan la navegación y el descubrimiento de contenidos relacionados. Un usuario puede acceder a una etiqueta y visualizar todos los artículos que comparten ese mismo tema, aunque pertenezcan a diferentes categorías. Esto mejora la experiencia de navegación y permite explorar el sitio de manera más flexible.

      p.mb-5(data-aos='fade-right') Sin embargo, es importante utilizar las etiquetas de forma adecuada. Un error común es la sobreutilización, es decir, asignar demasiadas etiquetas a un mismo contenido. Esto no mejora la visibilidad; por el contrario, genera desorden y crea páginas con muy poco contenido, lo que puede afectar negativamente la organización del sitio y su posicionamiento en buscadores. Además, se recomienda evitar etiquetas repetidas o muy similares entre sí, ya que esto fragmenta la información y dificulta la comprensión del contenido. Cada etiqueta debe tener un propósito claro y agrupar varios contenidos relacionados, no ser usada de manera aislada.


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t4/11.svg', alt='')
        .col-sm-12.col-lg-8.bg-color-2.p-4.mx-0
            p.mb-3.mg-cus-5 Ejemplo en contexto de formación profesional: un artículo titulado “cómo registrar una empresa de tecnología en Colombia” puede pertenecer a la categoría “Legalidad”. Sin embargo, puede incluir etiquetas como “software”, “Cámara de comercio” y “Emprendimiento digital”. Si un usuario selecciona la etiqueta “software”, el sistema mostrará este contenido junto con otros relacionados, aunque pertenezcan a diferentes categorías.
            p.mb-0 De esta manera, las etiquetas permiten crear conexiones entre contenidos y facilitar rutas de navegación más dinámicas, contribuyendo a una mejor organización de la información y a una experiencia de usuario más clara y eficiente.







      
      
      
      
      //-----------------------------------------------------------------
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Páginas estáticas vs. Entradas dinámicas
      
      
      p.mb-5(data-aos='fade-right') Comprender la diferencia estructural entre páginas y entradas es fundamental para organizar correctamente un sitio en WordPress. Esta distinción no es solo técnica, sino también conceptual, ya que define cómo se presenta la información y cómo el usuario interactúa con ella a lo largo del tiempo.
      

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/12.svg', alt='')
        .col-sm-12.col-lg-8.bg-color-4.p-4
            .bg-color-7.p-3.mb-4.mg-cus-6
              h4.mb-0.text-white Entradas (contenido dinámico y cronológico)
            p.mb-3 Son publicaciones organizadas según la fecha. Generalmente incluyen información como fecha de publicación y autor, y se clasifican mediante categorías y etiquetas.
            p.mb-0 Cuando se publica una nueva entrada, esta aparece en primer lugar y desplaza las anteriores. Son ideales para noticias, artículos, novedades institucionales o contenidos que se actualizan con frecuencia. Además, permiten la interacción con los usuarios a través de comentarios.



      .bg-full-width.bg-color-1.mb-5(data-aos='fade-right')
        .px-4.px-md-5
          .row.mb-0.p-4
            .col-sm-12.col-lg-8
              .bg-color-7.p-3.mb-4.mt-4.w-cus-5
                  h4.mb-0.text-white Páginas (contenido estático y estructural
          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-8
              .row.justify-content-center.mb-4
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img.w-75(src='@/assets/curso/temas/t4/14.svg', alt='')
                .col-sm-12.col-lg-10
                    p.mb-0 Son contenidos permanentes que no dependen del tiempo. No utilizan categorías ni etiquetas y se organizan de forma jerárquica mediante páginas principales y subpáginas. Se emplean para información fija del sitio, como “quiénes somos”, “misión y visión”, “servicios”, “políticas” o “contacto”. Su función es presentar información estable que el usuario puede consultar en cualquier momento. Diferenciar correctamente entre páginas y entradas permite construir una estructura clara y funcional. Las entradas mantienen el sitio activo y actualizado, mientras que las páginas organizan la información esencial de forma permanente.
              p.mb-3 Un error común es utilizar entradas para publicar información que debería permanecer siempre visible, como reglamentos o datos de contacto. Debido a su naturaleza cronológica, este contenido se desplaza con el tiempo y se vuelve difícil de encontrar. Por esta razón, la información importante y de acceso constante debe ubicarse siempre en páginas.
              p.mb-0 Una adecuada organización entre páginas y entradas mejora la navegación, facilita el acceso a la información y contribuye a una mejor experiencia del usuario. Además, permite que el sitio web sea más claro, ordenado y profesional.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/13.png', alt='')






      
      
      //-----------------------------------------------------------------
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.4 Menús de navegación y usabilidad
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/15.png', alt='')
        .col-sm-12.col-lg-7 
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/16.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0   El punto de convergencia entre la arquitectura interna del sitio y la experiencia del usuario es el menú de navegación. Los menús funcionan como mapas interactivos que hacen parte de la diagramación visible del sitio web. En WordPress, su gestión se realiza desde el apartado “Apariencia”, donde es posible combinar enlaces a páginas, entradas, categorías o enlaces externos, organizándolos mediante una interfaz visual de arrastrar y soltar.
          p.mb-0 El diseño de los menús debe responder a principios de usabilidad y accesibilidad web. Un menú no debe entenderse como un espacio para acumular enlaces, sino como una herramienta que orienta al usuario y facilita la navegación. Por esta razón, su construcción implica tomar decisiones claras sobre qué información es más relevante y cómo debe presentarse.

      p.mb-5(data-aos='fade-right') A continuación, se presentan algunos criterios fundamentales para el diseño de menús:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                  img(src='@/assets/curso/temas/t4/18.svg')
            h3.text-center Carga cognitiva
            p.mb-0 Se recomienda no saturar el menú principal. Un número excesivo de opciones dificulta la toma de decisiones. Lo ideal es presentar entre cinco y siete elementos principales. Si se requiere incluir más información, se pueden utilizar submenús o ubicar enlaces secundarios en el pie de página.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                  img(src='@/assets/curso/temas/t4/19.svg')
            h3.text-center Claridad en los nombres
            p.mb-0 Los nombres de los enlaces deben ser directos y comprensibles. Por ejemplo, “Servicios académicos” resulta más claro que expresiones ambiguas. El usuario debe identificar fácilmente el contenido al que accederá.


        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                  img(src='@/assets/curso/temas/t4/20.svg')
            h3.text-center Jerarquía visual
            p.mb-0 El menú debe indicar en qué sección del sitio se encuentra el usuario. Esto se logra mediante cambios visuales como colores, subrayados o resaltados en la opción activa, lo cual evita la desorientación.
        
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                  img(src='@/assets/curso/temas/t4/21.svg')
            h3.text-center Adaptación a dispositivos móviles
            p.mb-0 El menú debe ajustarse correctamente a diferentes tamaños de pantalla. En dispositivos móviles, suele transformarse en un icono de tres líneas. Es importante que los botones sean lo suficientemente grandes para facilitar su uso táctil.
















      p.mb-5(data-aos='fade-right') Desde una perspectiva práctica, la ubicación de los elementos dentro del menú también influye en el comportamiento del usuario. Por ejemplo: en un sitio de comercio electrónico, ubicar la opción “Promociones” al inicio del menú puede aumentar su visibilidad y uso. Esto se relaciona con los patrones de lectura, donde los usuarios suelen prestar mayor atención a los primeros elementos.

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.pd-cus-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t4/17.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Además, un menú bien estructurado mejora la navegación general del sitio, reduce el tiempo de búsqueda de información y aumenta la satisfacción del usuario. Cuando el visitante encuentra rápidamente lo que necesita, es más probable que permanezca en el sitio y realice acciones como leer, registrarse o comprar. Por otra parte, una mala organización del menú puede generar confusión, abandono del sitio y pérdida de oportunidades. Por ello, su diseño debe ser coherente con la estructura general del contenido y con los objetivos del sitio web.
          p.mb-0 Para concluir, el manejo adecuado de elementos como categorías, etiquetas, páginas y menús no solo implica conocimientos técnicos, sino también habilidades analíticas. Estas permiten organizar la información de manera lógica, accesible y centrada en el usuario, garantizando una experiencia de navegación clara, eficiente y profesional.














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
