<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: require('@/assets/actividad/imagen5.png'),
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
    cuestionario: {
      tema: 'Nombre del CF',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cómo se define WordPress desde una perspectiva técnica, según el componente formativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como un Sistema de Gestión de Contenidos de código abierto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Como un editor gráfico exclusivo para comercio electrónico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como una red social orientada únicamente a blogs personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como un programa de escritorio que no usa base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con WordPress como CMS de código abierto orientado a la gestión de contenidos digitales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la definición y naturaleza técnica de WordPress.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza a una página web dinámica administrada con WordPress?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su contenido solo puede cambiarse editando archivos HTML de forma manual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No requiere servidor ni lenguaje de programación para mostrarse.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se construye al momento de la solicitud del usuario a partir de información almacenada en una base de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Siempre presenta el mismo contenido fijo sin posibilidad de actualización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la generación dinámica de páginas a partir de datos y configuraciones almacenadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la diferencia entre web estática y web dinámica.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el principio estructural que facilita la actualización y el mantenimiento de un sitio en WordPress?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación total de las bases de datos en el sitio web.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La separación entre el diseño del tema y los datos almacenados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La obligación de duplicar cada contenido en varias páginas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La escritura manual de todas las secciones en un solo archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la separación entre diseño y contenido como base de la gestión moderna de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura interna de WordPress y la reutilización del contenido.',
        },
        {
          id: 4,
          texto: '¿Qué enunciado describe correctamente a WordPress.com?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es la versión autoalojada que exige acceso completo al código fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un paquete de archivos que solo funciona en servidores locales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es un servicio comercial alojado que permite crear un sitio sin instalación previa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Es una herramienta para gestionar exclusivamente bases de datos remotas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con WordPress.com como servicio administrado de publicación web.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las diferencias entre WordPress.com y WordPress.org.',
        },
        {
          id: 5,
          texto:
            'Si un proyecto corporativo requiere instalar plugins externos, modificar el código y escalar sin restricciones del proveedor, ¿qué alternativa resulta más pertinente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'WordPress.org autoalojado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'WordPress.com en su plan gratuito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un sitio estático elaborado únicamente en HTML.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un servidor local sin posibilidad de publicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con WordPress.org como opción de mayor autonomía, flexibilidad y escalabilidad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la pertinencia profesional de la versión autoalojada de WordPress.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una ventaja principal de la instalación automática de WordPress en servicios de hosting?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desactiva la necesidad de definir usuario administrador y correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite que el proveedor ejecute en segundo plano la descarga de archivos y la creación de la base de datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Impide por completo el uso posterior de temas y plugins.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye el dominio propio por una cuenta obligatoria en WordPress.com.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la instalación automática como mecanismo de despliegue rápido y eficiente.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los autoinstaladores en servicios de alojamiento web.',
        },
        {
          id: 7,
          texto:
            'En una instalación manual de WordPress, ¿qué archivo se modifica para establecer la comunicación con la base de datos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'style.css',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'wp-config.php',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'index.html',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'license.txt',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con wp-config.php como archivo clave para la configuración de credenciales de base de datos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los pasos de la instalación manual de WordPress.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la finalidad de instalar WordPress en un servidor local en un contexto de aprendizaje y pruebas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar inmediatamente el sitio para todos los usuarios de internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de PHP y de gestores de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de estructurar contenidos antes del lanzamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trabajar en un entorno seguro de pruebas y desarrollo sin exponer el proyecto a la red pública.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el servidor local como entorno de pruebas, aprendizaje y experimentación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el uso de localhost en procesos formativos y de desarrollo.',
        },
        {
          id: 9,
          texto:
            'En una instalación manual de WordPress, ¿para qué se utilizan protocolos como FTP o SFTP en el proceso de despliegue hacia un servidor en internet?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para moderar comentarios desde el front end.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para clasificar entradas mediante categorías y etiquetas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para transferir archivos desde el equipo del desarrollador hasta el servidor remoto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para reemplazar el dominio por una dirección temporal del proveedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la transferencia remota de archivos hacia el servidor de publicación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la instalación manual en un servidor de internet.',
        },
        {
          id: 10,
          texto: 'En la arquitectura de WordPress, el front end corresponde a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La interfaz pública donde el usuario visualiza el diseño y navega por el sitio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El panel privado desde el cual se configuran usuarios y plugins.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La carpeta del servidor donde se aloja wp-config.php.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sistema interno que reemplaza la base de datos del sitio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el front end como espacio visible e interactivo para el visitante.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la diferencia funcional entre front end y back end.',
        },
        {
          id: 11,
          texto: '¿Qué describe mejor al back end en WordPress?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La biblioteca de medios visible solo en la página de inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La trastienda o panel de administración accesible mediante credenciales de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La plantilla gráfica que define los colores públicos del tema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La categoría principal donde se agrupan las noticias del sitio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el back end como centro de gestión privada del sitio web.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el entorno de trabajo administrativo de WordPress.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función del Escritorio principal o dashboard?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir completamente el menú lateral y la barra superior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Impedir la creación de borradores rápidos para nuevos contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Servir únicamente para instalar certificados SSL en el dominio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mostrar una vista panorámica del estado del sitio mediante widgets informativos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el dashboard como panel de control gerencial del sitio web.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el escritorio principal y sus widgets de información.',
        },
        {
          id: 13,
          texto:
            '¿Qué ventaja ofrece la barra de herramientas superior para el administrador logueado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Funciona como un atajo hacia acciones frecuentes tanto en el back end como en el front end.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Bloquea el acceso al front end mientras se edita el sitio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo aparece en servidores locales y desaparece en sitios remotos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplaza la necesidad de crear menús de navegación para el usuario final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la barra de herramientas superior como recurso de eficiencia operativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los atajos disponibles para el administrador del sitio.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes opciones pertenece al bloque de gestión administrativa del menú lateral de WordPress?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Apariencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usuarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Medios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la organización funcional del menú lateral de navegación en WordPress.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los bloques funcionales del menú lateral.',
        },
        {
          id: 15,
          texto:
            '¿Por qué es importante asignar roles y capacidades diferenciadas a los usuarios del sitio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite que todas las personas tengan control total del sitio por igual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque elimina la necesidad de usar contraseñas en el acceso al panel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque convierte automáticamente a todos los usuarios en administradores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque evita modificaciones accidentales en contenidos o configuraciones críticas y mejora la seguridad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de usuarios y roles como práctica de seguridad y orden estructural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la asignación de permisos dentro de WordPress.',
        },
        {
          id: 16,
          texto:
            '¿Qué rol predeterminado resulta más adecuado para un aprendiz o autor invitado que puede redactar entradas, pero no publicarlas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Colaborador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Editor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Autor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el rol de Colaborador dentro del flujo de revisión y publicación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los roles predeterminados de WordPress y sus capacidades.',
        },
        {
          id: 17,
          texto:
            '¿Qué ajuste inicial favorece directamente la accesibilidad y el posicionamiento al generar URLs legibles por humanos y buscadores?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La activación de comentarios en todas las entradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La instalación de un tema de pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La estructura de enlaces permanentes con nombre de la entrada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La creación automática de subcategorías en el blog.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los enlaces permanentes accesibles y legibles en WordPress.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los ajustes iniciales del sistema y las URLs amigables.',
        },
        {
          id: 18,
          texto:
            '¿Qué diferencia correctamente a las categorías frente a las etiquetas en WordPress?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las categorías son jerárquicas y amplias; las etiquetas son transversales y no jerárquicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las categorías se usan solo en páginas estáticas y las etiquetas en el panel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las etiquetas sustituyen a los menús y las categorías al dominio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las categorías son opcionales y las etiquetas obligatorias en toda entrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la organización taxonómica del contenido en WordPress.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con categorías y etiquetas como mecanismos de clasificación.',
        },
        {
          id: 19,
          texto:
            '¿Qué afirmación distingue correctamente a las páginas estáticas de las entradas dinámicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las páginas estáticas se organizan cronológicamente y las entradas no muestran fecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las páginas estáticas alojan información atemporal y estructural; las entradas se consumen en función del tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Las entradas dinámicas no admiten comentarios ni categorías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las páginas estáticas solo pueden existir en WordPress.com.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la diferencia semántica y estratégica entre páginas y entradas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la tipología de contenidos en WordPress.',
        },
        {
          id: 20,
          texto:
            'Según los criterios de usabilidad expuestos en el componente, ¿qué práctica es más adecuada al diseñar el menú principal de navegación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incluir la mayor cantidad posible de opciones en un solo nivel para evitar submenús.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar rótulos ambiguos para despertar curiosidad en el usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener una jerarquía clara, rótulos descriptivos y una carga cognitiva controlada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Saturar la navegación principal con enlaces repetidos a todas las secciones internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la usabilidad, la carga cognitiva y la jerarquía de los menús de navegación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las normas de acceso y usabilidad aplicadas a los menús.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
