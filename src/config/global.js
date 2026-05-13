export default {
  global: {
    Name: 'Entorno de trabajo y arquitectura en WordPress',
    Description:
      'El componente Entorno de trabajo y arquitectura en WordPress desarrolla competencias técnicas y analíticas para planificar, estructurar, instalar y gestionar sitios web en el entorno digital, con enfoque en las necesidades del usuario final. Promueve el pensamiento sistémico, la resolución de problemas y la construcción de la arquitectura de la información y la diagramación visual, alineadas con los requerimientos del proyecto y las normativas de accesibilidad web.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
              'Instalación automática en servicios de alojamiento web (<i>hosting</i>)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Instalación manual',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Instalación en servidor local',
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
        titulo: 'Interfaz, diagramación y normativas de acceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<i>Front End</i> y <i>Back End</i>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'El escritorio principal (<i>Dashboard</i>)',
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
      termino: '<i>Back end</i>',
      significado:
        'área privada o panel de administración de un sistema informático. En WordPress, es el escritorio de trabajo al que solo ingresan los usuarios registrados con permisos, utilizado para gestionar la base de datos, configurar el sistema y crear contenidos.',
    },
    {
      termino: 'Base de datos',
      significado:
        'sistema estructurado que recopila y almacena la información digital. En el contexto de este curso, WordPress utiliza sistemas relacionales como mysql para guardar cada texto, configuración y credencial de usuario ingresada en la plataforma.',
    },
    {
      termino: 'Categoría',
      significado:
        'taxonomía principal y jerárquica de WordPress utilizada para clasificar las entradas dinámicas en grandes bloques temáticos, facilitando la estructura del sitio y la navegación lógica del usuario.',
    },
    {
      termino: 'CMS (sistema de gestión de contenidos)',
      significado:
        '<i>software</i> diseñado para permitir a usuarios técnicos y no técnicos crear, editar, organizar y publicar información digital en una página web sin necesidad de escribir código de programación manual desde cero',
    },
    {
      termino: 'Dominio',
      significado:
        'nombre único, alfanumérico e irrepetible que identifica a un sitio web en internet (ejemplo: sena.edu.co), funcionando como la dirección equivalente a la de un domicilio físico en la red mundial.',
    },
    {
      termino: 'Entrada (<i>post</i>)',
      significado:
        'unidad de información dinámica diseñada para su consumo cronológico. Se agrupa en categorías, admite el uso de etiquetas y se utiliza habitualmente para publicar noticias, artículos de opinión o actualizaciones periódicas.',
    },
    {
      termino: 'Etiqueta (<i>tag</i>)',
      significado:
        'taxonomía secundaria y no jerárquica que describe detalles específicos o palabras clave dentro de un contenido. Funciona como un mecanismo transversal de recuperación de información para vincular artículos de diferentes categorías.',
    },
    {
      termino: '<i>Front end</i>',
      significado:
        'interfaz pública de un sitio web, conformada por los elementos visuales e interactivos (textos, imágenes, menús y formularios) con los que el usuario final interactúa directamente desde su navegador.',
    },
    {
      termino: '<i>Hosting</i> (alojamiento web)',
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
        'formato de publicación en WordPress utilizado para albergar información atemporal e institucional (como el portafolio de servicios o contacto). no utiliza categorías ni fechas visibles, y se estructura jerárquicamente (páginas principales y subpáginas).',
    },
    {
      termino: '<i>Plugin</i>',
      significado:
        'módulo de <i>software</i> externo o extensión de código que se instala y se integra en el núcleo de WordPress para añadir funcionalidades específicas que la plataforma no incluye de forma nativa, como tiendas virtuales, foros o sistemas de seguridad avanzados.',
    },
    {
      termino: 'Responsividad (diseño responsivo)',
      significado:
        'principio de diseño y diagramación web que garantiza que la interfaz visual de una página se adapte, reordene y escale fluidamente de acuerdo con el tamaño y la resolución de la pantalla del dispositivo desde el cual se visualiza (computadoras, tabletas o teléfonos móviles).',
    },
    {
      termino: 'Servidor local (<i>localhost</i>)',
      significado:
        'entorno de desarrollo informático instalado en la propia computadora del usuario, que emula el comportamiento de un servidor web remoto. Permite realizar instalaciones, pruebas y diseños web sin necesidad de conexión a internet o pagos de <i>hosting</i>.',
    },
    {
      termino: 'Taxonomía',
      significado:
        'ciencia y práctica de la clasificación. En diseño web, se refiere al método utilizado para agrupar, ordenar y estructurar lógicamente los contenidos de un sitio web para facilitar su comprensión cognitiva.',
    },
    {
      termino: 'Tema (<i>theme</i>)',
      significado:
        'paquete de archivos de diseño, hojas de estilo (css) y plantillas que determinan de manera integral la apariencia visual, la disposición geométrica y la paleta de colores del <i>front end</i> en WordPress, sin alterar el contenido almacenado.',
    },
    {
      termino: 'Url amigable',
      significado:
        'dirección web estructurada con palabras claras y descriptivas (generalmente el título del artículo) en lugar de códigos numéricos complejos, lo cual mejora sustancialmente la accesibilidad para el usuario y el posicionamiento en buscadores.',
    },
    {
      termino: '<i>Widget</i>',
      significado:
        'bloque modular de contenido o funcionalidad específica que se puede añadir, organizar y desplazar visualmente dentro de áreas predefinidas del diseño web, como en las barras laterales, el pie de página o el propio escritorio de administración.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consorcio World Wide Web (W3C). (2023). Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2. W3C Recommendation.',
    },

    {
      referencia:
        'Fundación WordPress. (2024). Documentación oficial, manual de administración y convenciones de codificación. Codex y Developer Handbook. Recuperado de la biblioteca de recursos técnicos de WordPress.org.',
    },

    {
      referencia:
        'García, L. M. (2022). Diseño de interfaces web y experiencia de usuario en entornos formativos digitales. Editorial Síntesis.',
    },

    {
      referencia:
        "Morville, P., Rosenfeld, L., & Arango, J. (2021). Arquitectura de la información para la World Wide Web y ecosistemas digitales (5.ª ed.). O'Reilly Media. (Adaptación al español para contextos académicos de gestión de información).",
    },

    {
      referencia:
        'Nielsen Norman Group. (2023). Directrices de usabilidad para menús de navegación y arquitectura de sitios web dinámicos. Informes de experiencia de usuario.',
    },

    {
      referencia:
        'Williams, B., Damstra, D., & Stern, H. (2021). Desarrollo profesional con WordPress: Diseño, arquitectura y despliegue de plataformas (4.ª ed.). John Wiley & Sons.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andres Bonza Reyes',
          cargo: 'Instructor virtual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
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
