<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El diseño de sitios web con WordPress constituye una competencia técnica y analítica esencial en la formación profesional, ya que implica planificar y estructurar un entorno digital a partir del análisis de las necesidades del usuario. La elección entre plataformas comerciales (WordPress.com) o soluciones autoalojadas (WordPress.org), así como el método de instalación (local o en servidores remotos), son decisiones arquitectónicas que determinan la viabilidad y escalabilidad del proyecto. La correcta diagramación del sitio, la comprensión de la dualidad entre #[i Back End] y #[i Front End], el uso estratégico de categorías y etiquetas, y la diferenciación entre páginas estáticas y entradas dinámicas garantizan una arquitectura coherente. Esta organización, complementada con menús de navegación claros y enlaces permanentes legibles, asegura la accesibilidad, la usabilidad y una experiencia de usuario eficiente, convirtiendo la plataforma en un ecosistema inclusivo y funcional tanto para la formación como para la comunicación institucional o comercial.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Texto alternativo: Diagrama del diseño de sitios web en WordPress que muestra fundamentos, entornos de instalación, interfaz (Back End y Front End), arquitectura de la información y usabilidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
