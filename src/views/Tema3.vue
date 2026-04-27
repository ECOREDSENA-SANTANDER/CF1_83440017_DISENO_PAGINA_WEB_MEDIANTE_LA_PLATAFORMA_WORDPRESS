<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Interfaz, Diagramación y Normativas de Acceso
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Front End y Back End
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 El escritorio principal (Dashboard)
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 La barra de herramientas superior
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.4 El menú lateral de navegación
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.5 Gestión de usuarios y roles
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.6 Ajustes iniciales del sistema
      
        

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
