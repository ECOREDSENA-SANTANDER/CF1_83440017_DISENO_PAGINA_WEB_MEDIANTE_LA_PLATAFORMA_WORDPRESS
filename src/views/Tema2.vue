<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Instalación de WordPress
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-12.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='')
      
      p.mb-5(data-aos='fade-right') Una vez establecida la diferencia conceptual entre las variantes de la plataforma y comprendida la naturaleza dinámica de la gestión de contenidos, el proceso formativo avanza hacia la materialización del entorno de trabajo. La instalación de WordPress no debe abordarse como un simple trámite mecánico, sino como la primera decisión técnica orientada a determinar la estructura del sitio web con base en las necesidades del usuario. Dependiendo de los recursos económicos, el nivel de privacidad requerido durante el  desarrollo y los conocimientos técnicos previos,  se deberá seleccionar el método de  implementación más adecuada.
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png', alt='')
        .col-sm-12.col-lg-7 
          .bg-color-1.p-4.mb-4
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/3.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 El uso de la variante comercial, WordPress.com, representa el camino de menor complejidad técnica para la publicación en línea. Al operar bajo un modelo de software como servicio (SaaS), la instalación tradicional se elimina por completo. El usuario únicamente debe registrarse en la plataforma, seleccionar un subdominio gratuito (por ejemplo: misitio.wordpress.com) y elegir una plantilla predeterminada.
          p.mb-0 Desde una perspectiva pedagógica, este entorno resulta útil para la elaboración de prototipos rápidos o para introducir a aprendices sin conocimientos técnicos previos en la lógica de publicación de entradas y páginas. Permite centrar la atención en la redacción de contenidos y en la estructuración básica de la información. Sin embargo, como se analizó previamente, su ecosistema cerrado impide el acceso a los archivos del núcleo de WordPress y a la base de datos. Por consiguiente, si el análisis de necesidades del usuario determina que el sitio web requerirá integraciones complejas, como pasarelas de pago, foros de discusión o un diseño de interfaz personalizado, el uso de WordPress.com en su versión gratuita resultará insuficiente, lo que hace necesario migrar hacia soluciones con alojamiento propio.
      
      
      
      
      //------------------------------------------------------------------
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Instalación automática en servicios de alojamiento web (#[i hosting])
      

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.pd-cus-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/4.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 En el ámbito profesional y empresarial, la contratación de un servicio de alojamiento web y un dominio propio constituye el estándar de la industria. Con el fin de facilitar el despliegue de aplicaciones, la mayoría de los proveedores de alojamiento modernos integran en sus paneles de control (como cPanel o Plesk) herramientas de instalación automática mediante scripts, entre las que destacan Softaculous e Installatron.
          p.mb-0 Este método de instalación automática resulta altamente eficiente. Se selecciona el ícono de WordPress, se completa un formulario básico (nombre del sitio, usuario administrador, contraseña y correo electrónico) y el sistema ejecuta en segundo plano las operaciones necesarias: descarga los archivos más recientes, crea una base de datos, asigna los privilegios de usuario y vincula el archivo de configuración.

      p.mb-5(data-aos='fade-right') Cuando se enfrenta el reto de entregar un proyecto final para un cliente real, por ejemplo: una tienda de artesanías locales, el tiempo se convierte en un factor crítico. El uso de un instalador automático permite configurar el entorno en pocos minutos, garantizando que los protocolos de seguridades iniciales y la conexión a la base de datos se establezcan correctamente. De este modo, la mayor parte del proceso formativo y de desarrollo se enfoca en aspectos que aportan valor, como el diseño de la interfaz y la arquitectura de la información, en coherencia con los objetivos de diagramación y accesibilidad del sitio.






      //------------------------------------------------------------------
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Instalación manual

      .row.justify-content-center.mb-4.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 A pesar de la conveniencia de los instaladores automáticos, el conocimiento de la instalación manual, conocida históricamente en la comunidad de desarrolladores como “la instalación de cinco minutos”, constituye un pilar fundamental en la formación integral mediada por TIC. Aprender a instalar WordPress de forma manual permite desarrollar una comprensión profunda de la arquitectura cliente servidor y de la estructura interna del sistema de gestión de contenidos. 

      p.mb-5(data-aos='fade-right') El proceso manual exige la interacción directa con los dos componentes esenciales de cualquier aplicación web dinámica: los archivos del sistema y la base de datos. Los pasos fundamentales incluyen: 


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png', alt='')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-primario
            .row.mb-0(numero="1" titulo="Descargar")
              .col-12
                p.mb-0 Descargar el paquete oficial de archivos desde WordPress.org. 
            .row.mb-0(numero="2" titulo="Crear")
              .col-12
                p.mb-0 Crear una base de datos vacía y un usuario con privilegios en el gestor de bases de datos del servidor, generalmente phpMyAdmin
            .row.mb-0(numero="3" titulo="Modificar")
              .col-12
                p.mb-0 Modificar el archivo de configuración principal (wp config sample.php a wp config.php), incorporando las credenciales correspondientes para establecer la conexión con la base de datos. 
            .row.mb-0(numero="4" titulo="Subir")
              .col-12
                p.mb-0 Subir los archivos al servidor y ejecutar el proceso de instalación desde el navegador. 

      p.mb-5(data-aos='fade-right') Dominar este proceso es comparable a comprender la mecánica básica de un automóvil antes de conducirlo. En caso de presentarse un error de conexión, como el mensaje “error al establecer una conexión con la base de datos”, quien ha realizado instalaciones manuales puede identificar con precisión el archivo implicado (wp config.php), verificar las credenciales y resolver el problema de manera eficiente, evidenciando competencias técnicas y capacidad de respuesta ante situaciones reales.



      
      //------------------------------------------------------------------
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Instalación en servidor local
      

      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t2/7.png', alt='')
        .col-sm-12.col-lg-8.bg-color-2.p-4.mx-0
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/8.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 En el marco de la formación complementaria del SENA, uno de los escenarios más frecuentes es la necesidad de practicar, diseñar y experimentar en un entorno seguro, sin incurrir en costos asociados a servicios de alojamiento comercial ni exponer proyectos en desarrollo a la red pública. Para responder a esta necesidad, se recurre a la instalación en un servidor local (#[i localhost]). 
                  
            p.mb-0 Un servidor local es un entorno de software que replica las condiciones de un servidor web dentro del propio equipo, sin depender de una conexión a internet. Herramientas de uso gratuito como XAMPP, WampServer, MAMP o aplicaciones especializadas como LocalWP permiten instalar un paquete que integra un servidor web (Apache o Nginx), un gestor de bases de datos (MySQL o MariaDB) y el lenguaje de programación PHP.


      p.mb-5(data-aos='fade-right') Comparación visual del recorrido de una solicitud en línea frente a una arquitectura aislada en #[i localhost].
      .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
        h5 Figura 1. 
        span Diagrama de flujo: servidor web remoto vs. servidor local  
      .row.justify-content-center.align-items-center.mb-5.bg-color-3.br-1(data-aos='fade-right')
       .col-sm-12.col-lg-10.mb-cus
          figure.mb-0
            img.py-5(src='@/assets/curso/temas/t2/9.svg', alt='Diagrama comparativo entre servidor web remoto y servidor local, mostrando flujo de usuario, procesamiento en servidor, uso de internet y acceso a base de datos en cada entorno.')

      p.mb-5(data-aos='fade-right') Una vez que el entorno local está activo, el aprendiz procede a realizar una instalación manual (o automática,  según la herramienta) en su propia máquina. Las ventajas formativas son incalculables: la velocidad de carga es instantánea, se pueden clonar sitios para realizar pruebas de diseño destructivas sin riesgo, y se fomenta el aprendizaje autónomo y experimental, consolidando los saberes de proceso relacionados con la estructuración del sitio antes de su lanzamiento oficial.





      //------------------------------------------------------------------
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Instalación manual en un servidor de internet
      
      p.mb-5(data-aos='fade-right') El proceso de desarrollo web finaliza cuando un sitio, previamente diseñado y estructurado en un servidor local, debe publicarse en internet para cumplir su propósito comunicativo o comercial. En esta etapa, la instalación en un servidor en línea sigue una lógica similar a la instalación manual, pero incorpora un elemento adicional: la transferencia de archivos desde el equipo local hacia el servidor remoto.  

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.bg-color-2.p-4.mb-cus
            p.mb-0.mg-cus-2 Para realizar este traslado, se emplean protocolos de transferencia de archivos como FTP (Protocolo de Transferencia de Archivos) o SFTP (Protocolo Seguro de Transferencia de Archivos), utilizando programas como FileZilla o Cyberduck. Para establecer la conexión, es necesario configurar estos programas con los datos del servidor, como la dirección, el usuario, la contraseña y el puerto de acceso.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/12.svg', alt='')
        .col-sm-12.col-lg-5
          img.mb-4.w-cus-1(src='@/assets/curso/temas/t2/13.svg', alt='')
          p.mb-0 Comprender este proceso es fundamental en la formación, ya que permite adquirir conocimientos sobre la organización de archivos en el servidor, la estructura de carpetas y aspectos básicos de seguridad. Generalmente, los archivos del sitio web se alojan en directorios como “public_html” o “www”, que corresponden a la carpeta principal visible en internet. Al completar esta etapa, se logra llevar el proyecto desde su fase de diseño hasta su publicación, permitiendo que esté disponible para los usuarios.

      p.mb-5(data-aos='fade-right') Durante este proceso de publicación, también es importante verificar que todos los archivos se hayan transferido correctamente y que el sitio funcione sin errores. Esto implica revisar enlaces, imágenes, formularios y la correcta visualización en diferentes dispositivos. Una verificación adecuada permite identificar fallos antes de que el sitio sea utilizado por los usuarios, garantizando una experiencia de navegación óptima.

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/10.png', alt='')
        .col-sm-12.col-lg-7 
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/11.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Otro aspecto relevante es la configuración del dominio, ya que este será la dirección mediante la cual los usuarios accederán al sitio web. Es necesario asociar el dominio contratado con el servidor donde se encuentra alojado el sitio, lo cual se realiza mediante la configuración de los registros DNS. Este paso asegura que, al escribir la dirección web en el navegador, el usuario sea dirigido correctamente al contenido publicado.
          p.mb-0 La publicación de un sitio web no representa el fin del proceso, sino el inicio de una fase de mantenimiento continuo. Es necesario actualizar contenidos, realizar copias de seguridad, verificar la seguridad del sitio y optimizar su funcionamiento. De esta manera, se garantiza que el sitio web permanezca activo, seguro y actualizado, respondiendo a las necesidades cambiantes de los usuarios y del entorno digital.

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
