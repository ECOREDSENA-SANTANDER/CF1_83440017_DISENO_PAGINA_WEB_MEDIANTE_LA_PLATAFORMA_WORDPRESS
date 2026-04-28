<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        .row.justify-content-center.mb-4.bg-color-1.p-4
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/1.svg', alt='')
          .col-sm-12.col-lg-10
              p.mb-0  La inmersión en el ecosistema digital contemporáneo exige que los profesionales e instituciones pasen de ser simples consumidores de información a creadores activos de contenidos y plataformas. En este contexto, el curso Entorno de trabajo y arquitectura en WordPress se orienta al desarrollo de competencias técnicas y analíticas para planificar, estructurar y gestionar sitios web desde una perspectiva centrada en las necesidades del usuario y en las normas de accesibilidad. El dominio de este curso fortalece habilidades como el pensamiento sistémico, la resolución de problemas y la comunicación digital, aportando una ventaja competitiva en el ámbito laboral. Asimismo, facilita la creación de proyectos digitales, la optimización de procesos organizacionales y la construcción de entornos web funcionales.
        p.mb-0 Los contenidos se desarrollan de manera progresiva, desde fundamentos teóricos hasta su aplicación práctica, abordando la estructura del sitio, la organización de la información y la configuración del entorno de trabajo. Al finalizar, se contará con bases sólidas para diseñar sitios web coherentes, accesibles y alineados con los requerimientos del contexto digital.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
