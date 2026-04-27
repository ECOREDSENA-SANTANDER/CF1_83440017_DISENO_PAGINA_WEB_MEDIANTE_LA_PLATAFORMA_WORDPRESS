export default {
  global: {
    Name: 'Entorno de trabajo y arquitectura en WordPress.',
    Description:
      'El componente Entorno de trabajo y arquitectura en WordPress desarrolla competencias técnicas y analíticas para planificar, estructurar, instalar y gestionar sitios web en el entorno digital, con enfoque en las necesidades del usuario final. Promueve el pensamiento sistémico, la resolución de problemas y la construcción de la arquitectura de la información y la diagramación visual, alineadas con los requerimientos del proyecto y las normativas de accesibilidad web.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos y estructuración del sitio web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es WordPress?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Las páginas web dinámicas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diferencias entre WordPress.com y WordPress.org',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instalación de WordPress',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Instalación automática en servicios de alojamiento web (hosting)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Instalación manual0',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Instalación en servidor local1',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Instalación manual en un servidor de internet',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interfaz, Diagramación y Normativas de Acceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Front End y Back End',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'El escritorio principal (Dashboard)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'La barra de herramientas superior',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'El menú lateral de navegación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gestión de usuarios y roles',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Ajustes iniciales del sistema',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Arquitectura y estructura del sitio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Categorías taxonómicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Etiquetas como sistema de recuperación de información',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Páginas estáticas vs. Entradas dinámicas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Menús de navegación y usabilidad',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad web',
      significado:
        'conjunto de normativas, principios y técnicas de diseño gráfico y de codificación que garantizan que un sitio web pueda ser utilizado, navegado y comprendido por cualquier persona, incluyendo aquellas con discapacidades visuales, auditivas o motoras.',
    },
    {
      termino: 'Back end',
      significado:
        'área privada o panel de administración de un sistema informático. en wordpress, es el escritorio de trabajo al que solo ingresan los usuarios registrados con permisos, utilizado para gestionar la base de datos, configurar el sistema y crear contenidos.',
    },
    {
      termino: 'Base de datos',
      significado:
        'sistema estructurado que recopila y almacena la información digital. en el contexto de este curso, wordpress utiliza sistemas relacionales como mysql para guardar cada texto, configuración y credencial de usuario ingresada en la plataforma.',
    },
    {
      termino: 'Categoría',
      significado:
        'taxonomía principal y jerárquica de wordpress utilizada para clasificar las entradas dinámicas en grandes bloques temáticos, facilitando la estructura del sitio y la navegación lógica del usuario.',
    },
    {
      termino: 'Cms (sistema de gestión de contenidos):',
      significado:
        'software diseñado para permitir a usuarios técnicos y no técnicos crear, editar, organizar y publicar información digital en una página web sin necesidad de escribir código de programación manual desde cero',
    },
    {
      termino: 'Dominio',
      significado:
        'nombre único, alfanumérico e irrepetible que identifica a un sitio web en internet (ejemplo: sena.edu.co), funcionando como la dirección equivalente a la de un domicilio físico en la red mundial.',
    },
    {
      termino: 'Entrada (post)',
      significado:
        'unidad de información dinámica diseñada para su consumo cronológico. se agrupa en categorías, admite el uso de etiquetas y se utiliza habitualmente para publicar noticias, artículos de opinión o actualizaciones periódicas.',
    },
    {
      termino: 'Etiqueta (tag)',
      significado:
        'taxonomía secundaria y no jerárquica que describe detalles específicos o palabras clave dentro de un contenido. funciona como un mecanismo transversal de recuperación de información para vincular artículos de diferentes categorías.',
    },
    {
      termino: 'Front end',
      significado:
        'interfaz pública de un sitio web, conformada por los elementos visuales e interactivos (textos, imágenes, menús y formularios) con los que el usuario final interactúa directamente desde su navegador.',
    },
    {
      termino: 'Hosting (alojamiento web)',
      significado:
        'servicio tecnológico provisto por una empresa que alquila espacio en servidores físicos conectados ininterrumpidamente a internet, necesario para almacenar los archivos y bases de datos de un sitio web público.',
    },
    {
      termino: 'Menú de navegación',
      significado:
        'conjunto organizado de enlaces interactivos ubicados estratégicamente en la diagramación de la interfaz web, cuya función es guiar al usuario a través de la arquitectura de la información y las secciones más relevantes del sitio.',
    },
    {
      termino: 'Página estática',
      significado:
        'formato de publicación en wordpress utilizado para albergar información atemporal e institucional (como el portafolio de servicios o contacto). no utiliza categorías ni fechas visibles, y se estructura jerárquicamente (páginas principales y subpáginas).',
    },
    {
      termino: 'Plugin',
      significado:
        'módulo de software externo o extensión de código que se instala y se integra en el núcleo de wordpress para añadir funcionalidades específicas que la plataforma no incluye de forma nativa, como tiendas virtuales, foros o sistemas de seguridad avanzados.',
    },
    {
      termino: 'Responsividad (diseño responsivo)',
      significado:
        'principio de diseño y diagramación web que garantiza que la interfaz visual de una página se adapte, reordene y escale fluidamente de acuerdo con el tamaño y la resolución de la pantalla del dispositivo desde el cual se visualiza (computadoras, tabletas o teléfonos móviles).',
    },
    {
      termino: 'Servidor local (localhost)',
      significado:
        'entorno de desarrollo informático instalado en la propia computadora del usuario, que emula el comportamiento de un servidor web remoto. permite realizar instalaciones, pruebas y diseños web sin necesidad de conexión a internet o pagos de hosting.',
    },
    {
      termino: 'Taxonomía',
      significado:
        'ciencia y práctica de la clasificación. en diseño web, se refiere al método utilizado para agrupar, ordenar y estructurar lógicamente los contenidos de un sitio web para facilitar su comprensión cognitiva.',
    },
    {
      termino: 'Tema (theme)',
      significado:
        'paquete de archivos de diseño, hojas de estilo (css) y plantillas que determinan de manera integral la apariencia visual, la disposición geométrica y la paleta de colores del front end en wordpress, sin alterar el contenido almacenado.',
    },
    {
      termino: 'Url amigable',
      significado:
        'dirección web estructurada con palabras claras y descriptivas (generalmente el título del artículo) en lugar de códigos numéricos complejos, lo cual mejora sustancialmente la accesibilidad para el usuario y el posicionamiento en buscadores.',
    },
    {
      termino: 'Widget',
      significado:
        'bloque modular de contenido o funcionalidad específica que se puede añadir, organizar y desplazar visualmente dentro de áreas predefinidas del diseño web, como en las barras laterales, el pie de página o el propio escritorio de administración.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
