<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Interfaz, diagramación y normativas de acceso
      
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.pd-cus-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 Con la plataforma correctamente instalada e interconectada con su base de datos, el foco del aprendizaje se desplaza hacia la interacción con el software. Ahora es necesario identificar las normas mínimas que faciliten el acceso y la diagramación de las páginas del sitio web. Para ello, es imperativo que el aprendiz decodifique, interprete y domine el entorno de trabajo que WordPress ofrece. La interfaz de usuario de este CMS ha sido refinada a lo largo de décadas para equilibrar potencia técnica con accesibilidad visual, pero requiere un mapa mental claro para ser utilizada con eficiencia.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .row.align-items-center.mb-5.titulo-icono
            .col-auto.titulo-icono-img
              img(src='@/assets/curso/temas/bg/1.svg', alt='')
            .col
              h3.mb-0.titulo-icono-text.px-0.py-2 Entorno de trabajo en WordPress
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/3.svg', alt='')
            .col-sm-12.col-lg-11
                p.mb-0 El entorno de trabajo de WordPress no es un bloque monolítico; está dividido en dos dimensiones operativas que cumplen funciones distintas pero interdependientes. Comprender esta dualidad es el primer paso para organizar un flujo de trabajo eficiente en el diseño web. La primera dimensión se centra en la administración del contenido: entradas, páginas, medios y categorías, mientras que la segunda dimensión abarca la configuración visual y estructural, como temas, menús, #[i widgets] y bloques de contenido.
          p.mb-0 La interfaz se compone de menús laterales, paneles de control y áreas de edición de contenido, todos diseñados para que el aprendiz pueda gestionar información de manera intuitiva. El dominio de estos elementos permite estructurar la información de forma coherente y accesible, facilitando que los usuarios finales encuentren rápidamente lo que buscan. Además, proporciona herramientas para aplicar estilos visuales consistentes y mantener la uniformidad del sitio web.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png', alt='')

      
      p.mb-5(data-aos='fade-right') El aprendizaje de la diagramación y la arquitectura de información también deben incluir la comprensión de las normativas de acceso y usabilidad. Esto implica organizar el contenido de manera lógica, etiquetar correctamente los elementos y garantizar que las páginas sean navegables por cualquier usuario, incluyendo personas con discapacidad. La implementación de estas prácticas no solo cumple con estándares legales y éticos, sino que mejora la experiencia del usuario y refuerza la profesionalidad del sitio.


      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7 
          .bg-color-1.p-4.mb-5
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/5.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 La personalización de la interfaz mediante la selección de temas y la disposición de bloques de contenido permite que cada sitio cumpla con objetivos específicos, ya sea informativos, comerciales o educativos. Los aprendices aprenden a combinar contenido textual, imágenes, videos y enlaces, estructurando la información de manera que fluya de forma natural para el visitante. Este enfoque promueve la comprensión integral de cómo la diagramación, la estética y la funcionalidad se integran en un proyecto web profesional.
          p.mb-0 El dominio del entorno de trabajo, la diagramación y las normativas de acceso proporciona al aprendiz una base sólida para desarrollar sitios web eficientes, inclusivos y profesionales. La práctica continua en la gestión de contenido, la estructuración visual y la aplicación de estándares de accesibilidad permite consolidar competencias técnicas y analíticas esenciales para cualquier proyecto digital.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png', alt='')
      p.mb-5 Para complementar toda esta información se invita al aprendiz a visitar el siguiente pódcast que será de gran utilidad:

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t3/6.png')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-color-2.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-primario.mb-4.p-4(
              texto="Entorno de trabajo en WordPress"
              :audio="require('@/assets/curso/temas/t3/podcast.mp3')"
          )





      //-----------------------------------------------------------------
      Separador
      #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 3.1 #[i Front End] y #[i Back End]
      p.mb-5 En la arquitectura de sistemas informáticos y diseño web, se utilizan los términos #[i Front End] y #[i Back End] para delimitar la frontera entre lo que consume el usuario final y lo que controla el administrador.
      TabsC.color-acento-botones.mb-5(data-aos='fade-right')
        .py-3.py-md-4(titulo="<i>Front End</i> (la fachada o interfaz pública)")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/7.svg', alt='')
            .col-sm-12.col-lg-6
                p.mb-0 Es la parte del sitio web visible para cualquier visitante que ingresa la URL en su navegador. Es el resultado visual de la diagramación, donde operan los colores, las tipografías, la disposición de las columnas, las imágenes y los textos. Desde la perspectiva del Resultado de Aprendizaje 2, el #[i Front End] es el espacio donde se deben materializar las normas de accesibilidad, garantizando que el diseño sea responsivo, que los contrastes de color permitan una lectura cómoda y que la navegación sea intuitiva.
        .py-3.py-md-4(titulo="<i>Back End</i> (la trastienda o panel de administración)")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/8.svg', alt='')
            .col-sm-12.col-lg-6
                p.mb-0 Es el área de gestión privada, accesible únicamente mediante credenciales de seguridad. En WordPress, el #[i Back End] es el centro de mando donde se estructura la información, se redactan los contenidos, se instalan funcionalidades y se configura el comportamiento del sitio. Los visitantes regulares jamás interactúan con esta sección.

      p.mb-5(data-aos='fade-right') Pensemos en un restaurante de alta cocina. El #[i Front End] es el salón comedor: la decoración, la disposición de las mesas, el menú impreso y la presentación de los platos. Todo está diseñado para la experiencia del comensal. El #[i Back End], por su parte, es la cocina: un entorno cerrado al público, estructurado para la eficiencia, con zonas de preparación de alimentos (creación de páginas), almacenes de ingredientes (biblioteca de medios) y personal asignado a tareas específicas (usuarios y roles). Un buen administrador de WordPress debe saber organizar la cocina para que el salón comedor funcione a la perfección.


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t3/9.png', alt='')
        .col-sm-12.col-lg-8.bg-color-2.p-4.mx-0
            img.w-cus-2.mb-3(src='@/assets/curso/temas/t3/10.svg', alt='')
            p.mb-3 La relación entre #[i Front End] y #[i Back End] es dinámica y complementaria. Cada cambio realizado en el #[i Back End], ya sea en la estructura de menús, la incorporación de #[i plugins] o la actualización de contenido, se refleja inmediatamente en el #[i Front End], modificando la experiencia del usuario. Comprender esta interdependencia permite al aprendiz anticipar cómo cada decisión técnica impacta en la interfaz pública.
            p.mb-0 Asimismo, dominar ambos entornos es fundamental para optimizar la accesibilidad y la usabilidad. Por ejemplo, configurar correctamente los roles de usuario y los permisos en el #[i Back End] asegura que solo personal autorizado pueda modificar contenido sensible, mientras que en el #[i Front End] se mantiene la coherencia visual y la navegación clara para el público general.


      p.mb-5(data-aos='fade-right') El aprendizaje integral de #[i Front End] y #[i Back End] también fomenta habilidades analíticas y de resolución de problemas. Cuando un sitio presenta errores de visualización o mal funcionamiento, el aprendiz puede identificar si la causa proviene de la estructura del contenido, la configuración de #[i plugins] o la interacción entre los elementos del #[i Back End] y del #[i Front End], desarrollando competencias críticas para la gestión profesional de plataformas web.

      















      //-----------------------------------------------------------------
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 El escritorio principal (#[i Dashboard])
      
      .bg-full-width.bg-color-1.mb-5(data-aos='fade-right')
        .px-4.px-md-5
          .row.justify-content-center.mb-0.p-4
            .col-sm-12.col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/11.svg', alt='')
            .col-sm-12.col-lg-11
                p.mb-0 Al ingresar las credenciales correctas en la ruta de acceso al #[i Back End] (generalmente misitio.com/wp-admin), el usuario aterriza inmediatamente en el escritorio principal, también conocido como #[i Dashboard]. Este espacio funciona como un panel de control gerencial que ofrece una vista panorámica del estado de salud y la actividad reciente del sitio web.

      p.mb-5(data-aos='fade-right') El Escritorio está compuesto por bloques modulares denominados #[i widgets], los cuales pueden ser reorganizados, minimizados o desactivados según las preferencias del administrador. Entre los módulos informativos más relevantes se encuentran:

      .tarjeta--container.row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.tarjeta.color-acento-contenido.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/12.svg')          
          h2.text-center De un vistazo
          p.mb-0 Un resumen estadístico que indica la cantidad de entradas publicadas, páginas creadas y comentarios recibidos, así como la versión actual de WordPress y el tema activo.
        
        .col-sm-12.col-md-6.col-lg-4.tarjeta.color-primario.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/13.svg')          
          h2.text-center Actividad
          p.mb-0 Presenta las últimas publicaciones realizadas y los comentarios recientes, permitiendo moderarlos rápidamente.
        
        .col-sm-12.col-md-6.col-lg-4.tarjeta.color-acento-botones.p-5.mb-cus
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/14.svg')          
          h2.text-center Borrador rápido
          p.mb-0 Una herramienta fundamental para la productividad. Permite al usuario capturar una idea, asignarle un título y guardarla como borrador sin necesidad de abrir el editor completo, ideal para retener ráfagas de creatividad durante la planificación de contenidos.


      p.mb-5(data-aos='fade-right') En contextos de formación profesional, se debe mantener el escritorio limpio y libre de notificaciones acumuladas (alertas de actualización), fomentando una cultura de mantenimiento y seguridad digital constante.



      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/15.png', alt='')
        .col-sm-12.col-lg-7 
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/16.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Además, el #[i Dashboard] ofrece accesos directos a funciones esenciales del sitio, como la creación de nuevas entradas o páginas, la gestión de menús y la instalación de extensiones. Estos accesos permiten al aprendiz navegar con eficiencia, evitando la pérdida de tiempo en la búsqueda de opciones dentro del #[i Back End].
          p.mb-3 La personalización del escritorio contribuye al aprendizaje autónomo. Al reorganizar los #[i widgets] según sus prioridades, el aprendiz desarrolla una comprensión intuitiva de la estructura y el flujo de trabajo del sitio, fortaleciendo la planificación de contenidos y la administración de recursos digitales.
          .bg-color-1.p-4
            p.mb-0 El uso constante del #[i Dashboard] también promueve la capacidad de monitorear indicadores de desempeño del sitio web. Al analizar estadísticas de publicaciones, comentarios y actualizaciones pendientes, el aprendiz adquiere habilidades en gestión de proyectos digitales, mantenimiento preventivo y toma de decisiones informadas sobre la arquitectura y presentación del contenido.









      //-----------------------------------------------------------------
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 La barra de herramientas superior
      
      .row.justify-content-center.mb-5.align-items-center.bg-color-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t3/17.png', alt='')
        .col-sm-12.col-lg-7.p-4
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/18.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Ubicada en la franja superior de la pantalla, la barra de herramientas es un elemento persistente que acompaña al administrador mientras se encuentra logueado, tanto en el #[i Back End] como al navegar por el #[i Front End] del sitio. Su propósito es funcionar como un acceso rápido hacia las acciones más frecuentes.
          p.mb-0 Desde esta barra, el usuario puede añadir rápidamente una nueva entrada, subir un archivo multimedia, crear una página, gestionar los perfiles de usuario o alternar entre la vista de administración y la vista pública del sitio. La comprensión pedagógica de este elemento radica en la eficiencia, ya que su uso recurrente reduce significativamente el número de clics necesarios para ejecutar tareas cotidianas, optimizando el tiempo del profesional encargado del mantenimiento del sitio web.

      p.mb-5(data-aos='fade-right') Adicionalmente, la barra de herramientas superior proporciona notificaciones importantes, como actualizaciones pendientes de WordPress, temas o módulos, así como alertas sobre comentarios nuevos o solicitudes de moderación. Esto permite al administrador mantenerse al tanto del estado del sitio sin necesidad de revisar múltiples secciones del #[i Back End].

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/19.svg', alt='')
        .col-sm-12.col-lg-7.p-4.bg-color-4
          p.mb-4.mg-cus-3 En el contexto de formación, es recomendable que el aprendiz explore cada ítem de la barra de herramientas, comprendiendo la función de cada acceso directo y cómo estos contribuyen a la administración eficiente del sitio. La familiarización temprana con estos atajos facilita la navegación y la gestión integral de la plataforma, fomentando una cultura de productividad y organización digital.
          p.mb-0 Por último, la barra de herramientas superior actúa como un puente entre la gestión del contenido y la experiencia del usuario final. Permite comprobar cambios en tiempo real, alternar vistas y ejecutar tareas de mantenimiento de manera inmediata, consolidando así la relación entre la planificación, la estructura del sitio y la experiencia visual del visitante.







      //-----------------------------------------------------------------
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.4 El menú lateral de navegación
      

      p.mb-4(data-aos='fade-right') Si el Escritorio es el panel de resumen, el menú lateral izquierdo es la columna vertebral operativa de WordPress. Es el mapa de navegación que otorga acceso a absolutamente todas las herramientas de diagramación, estructuración y configuración. Dominar este menú es indispensable para interpretar las herramientas de la plataforma y diseñar la estructura del sitio.
      p.mb-5(data-aos='fade-right') El menú lateral se organiza jerárquicamente en tres grandes bloques funcionales:

      .row.justify-content-center.cursor-pointer.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-cus
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
                img(src="@/assets/curso/temas/t3/20.png", alt="")
            .crd_hover_txt--body
              .d-flex.mb-4.align-items-center
                img.w-cus-3(src="@/assets/curso/temas/t3/23.svg", alt="")
                h4.mb-0.mx-3 Gestión de contenidos
              p.mb-0 Agrupa los menús de "entradas" (para artículos dinámicos), "medios" (la biblioteca de imágenes, audios y documentos), "páginas" (para contenidos estáticos) y "comentarios" (para la moderación de la interacción con los usuarios).
        .col-sm-12.col-lg-4.mb-cus
          .crd_hover_txt
            .crd_hover_txt--img
                img(src="@/assets/curso/temas/t3/21.png", alt="")
            .crd_hover_txt--body
              .d-flex.mb-4.align-items-center
                img.w-cus-3(src="@/assets/curso/temas/t3/23.svg", alt="")
                h4.mb-0.mx-3 Gestión de diseño y funcionalidad
              p.mb-0 Incluye el menú "apariencia" (donde se gestionan los temas, menús y configuración visual, clave para el resultado de aprendizaje) y el menú "#[i Plugins]" (para instalar módulos que expanden las capacidades técnicas del sitio).
        .col-sm-12.col-lg-4.mb-cus
          .crd_hover_txt
            .crd_hover_txt--img
                img(src="@/assets/curso/temas/t3/22.png", alt="")
            .crd_hover_txt--body
              .d-flex.mb-4.align-items-center
                img.w-cus-3(src="@/assets/curso/temas/t3/23.svg", alt="")
                h4.mb-0.mx-3 Gestión administrativa
              p.mb-0 Abarca los menús de “usuarios”, “herramientas” (para importación/exportación y salud del sitio) y “ajustes” (las reglas de comportamiento general del sistema).


      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10.mb-cus
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 2. 
            span Estructura del menú principal en WordPress: bloques funcionales para la gestión del sitio
          .bg-color-3.br-1.px-5.py-2
            figure.mb-0
              img.py-5(src='@/assets/curso/temas/t3/24.png', alt=' Panel de administración de WordPress con menú lateral resaltado que divide funciones en tres bloques: creación de contenido, diseño y funcionalidades, y configuración global del sitio.')












      //-----------------------------------------------------------------
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.5 Gestión de usuarios y roles
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/25.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 En el entorno digital contemporáneo, la creación de sitios web rara vez es una labor solitaria; suele requerir el esfuerzo colaborativo de redactores, editores, diseñadores y administradores de sistemas. WordPress integra un robusto sistema de gestión de usuarios basado en roles y capacidades, lo cual es vital para mantener la seguridad y el orden estructural de la plataforma.
      p.mb-5(data-aos='fade-right') Asignar el rol correcto a cada miembro del equipo garantiza que cada persona tenga acceso únicamente a las herramientas necesarias para cumplir su función, evitando modificaciones accidentales en la diagramación o configuraciones críticas. Los roles predeterminados, ordenados de mayor a menor jerarquía, son:

      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos='fade-right')
        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-6.m-auto
              img(src='@/assets/curso/temas/t3/26.svg' alt='')
          h2.text-center Administrador
          p.mb-0.text-center Posee control absoluto sobre todo el sitio. Puede cambiar temas, instalar complementos, modificar el código y eliminar a otros usuarios. En un proyecto formativo o profesional, este rol debe reservarse estrictamente para los desarrolladores principales.

        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-6.m-auto
              img(src='@/assets/curso/temas/t3/27.svg' alt='')
          h2.text-center Editor
          p.mb-0.text-center Tiene control total sobre la sección de contenidos. Puede publicar, editar y eliminar cualquier entrada o página, incluso aquellas creadas por otros usuarios, así como moderar comentarios.

        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-6.m-auto
              img(src='@/assets/curso/temas/t3/28.svg' alt='')
          h2.text-center Autor
          p.mb-0.text-center Puede redactar, editar, publicar y eliminar exclusivamente sus propios artículos, además de subir archivos a la biblioteca de medios.

        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-6.m-auto
              img(src='@/assets/curso/temas/t3/29.svg' alt='')
          h2.text-center Colaborador
          p.mb-0.text-center Puede redactar y editar sus propias entradas, pero no tiene permisos para publicarlas. Su trabajo queda en estado de revisión hasta que un editor o administrador lo apruebe. Es el rol ideal para aprendices en formación o autores invitados.

        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3.d-none.d-lg-block
            .col-6.m-auto
              img(src='@/assets/curso/temas/t3/30.svg' alt='')
          h2.text-center Suscriptor
          p.mb-0.text-center Es el nivel más básico. Únicamente puede iniciar sesión para gestionar su perfil personal y dejar comentarios sin necesidad de ingresar sus datos repetidamente.

      p.mb-5(data-aos='fade-right') El correcto manejo de usuarios y roles no solo facilita el trabajo colaborativo, sino que también protege la integridad del sitio web. Por ejemplo: otorgar el rol de administrador a un gran número de personas aumenta el riesgo de errores accidentales o acciones malintencionadas que pueden afectar la seguridad y estabilidad del sitio.

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.pd-cus-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/31.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Además, una buena administración de roles ayuda a cumplir con normativas y políticas de seguridad de la información, asegurando que solo el personal autorizado pueda acceder a funciones sensibles. Esto es fundamental para proteger datos confidenciales y garantizar el correcto funcionamiento de la plataforma.
          p.mb-0 Por último, comprender la importancia de esta jerarquía y su aplicación práctica es clave para el desarrollo profesional en gestión de sitios web. Los aprendices deben interiorizar que la asignación adecuada de roles es una medida preventiva crucial que promueve la eficiencia, la seguridad y el orden dentro del proyecto digital.









      //-----------------------------------------------------------------
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.6 Ajustes iniciales del sistema
      
      p.mb-5(data-aos='fade-right') Antes de proceder a la creación de contenidos o a la diagramación visual, el proceso de estructuración requiere calibrar los ajustes fundamentales de WordPress. El submenú ajustes determina el comportamiento global de la plataforma frente a los usuarios y a los motores de búsqueda, como Google. Ignorar esta configuración es uno de los errores más comunes entre desarrolladores novatos, entre los ajustes críticos iniciales se destacan:    

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
           AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-6")
            .row(titulo="Ajustes generales")
              .col-12
                p.mb-0 Aquí se define el “título del sitio” y la “descripción corta”. Estos campos no solo informan al usuario sobre la identidad de la página, sino que son los primeros datos que leen los algoritmos de búsqueda. También se configura la zona horaria y el formato de fecha, aspectos esenciales para sitios de noticias o eventos.
            .row(titulo="Ajustes de lectura")
              .col-12
                p.mb-0 En esta sección se toma una decisión arquitectónica clave: ¿la página de inicio mostrará las últimas entradas del blog (dinámica) o una página estática diseñada a medida? Para un sitio web corporativo o un portafolio profesional, la recomendación es usar una página estática como carta de presentación, relegando las noticias a una sección interna.
            .row(titulo="Ajustes de enlaces permanentes (<i>permalinks</i>)")
              .col-12
                p.mb-0 Esta configuración técnica es una de las más importantes para la accesibilidad y el posicionamiento en buscadores (SEO). Por defecto, WordPress puede generar URLs poco amigables, con números de base de datos (por ejemplo, misitio.com/?p=123). El administrador debe modificar esta estructura a “Nombre de la entrada” (misitio.com/cursos-sena). Esto asegura que las URLs sean legibles para los usuarios y fácilmente indexables por los motores de búsqueda, cumpliendo con las normas de acceso y usabilidad requeridas.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/32.png', alt='')



      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/33.png', alt='')
        .col-sm-12.col-lg-7
          .px-4.py-3.bg-color-1.mb-4
            p.mb-0 Además, en el submenú Ajustes es posible gestionar las opciones de comentarios, lo que permite controlar si se aceptan, moderan o bloquean antes de su publicación. Esta funcionalidad es fundamental para mantener la calidad y seguridad del sitio, evitando spam o contenido inapropiado y asegurando una interacción positiva con los visitantes. Es recomendable ajustar las opciones de medios, que definen las dimensiones predeterminadas para imágenes y otros archivos multimedia. Mantener un control adecuado sobre estas configuraciones contribuye a una presentación visual uniforme y a la optimización del rendimiento, especialmente en dispositivos móviles donde la velocidad de carga es crucial.
          p.mb-0 Por otra parte, los ajustes de privacidad y visibilidad permiten determinar si el sitio será accesible para todos los usuarios o restringido a ciertos grupos, aspecto relevante en proyectos en desarrollo o con información sensible. Configurar estos parámetros correctamente desde el inicio ayuda a evitar exposiciones involuntarias y a garantizar la protección de datos. La correcta configuración inicial de los ajustes no solo mejora la experiencia del usuario y la funcionalidad del sitio, sino que también previene problemas técnicos y estructurales difíciles de corregir más adelante. Por ello, dedicar tiempo a esta etapa es una inversión esencial para la calidad y el éxito del proyecto digital.

      p.mb-0(data-aos='fade-right') Comprender y aplicar estos ajustes en forma adecuada permite que el aprendiz no solo domine aspectos técnicos, sino que también desarrolle una visión estratégica para alinear la estructura del sitio con los objetivos comunicativos y comerciales del proyecto.
























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
