<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center
      .col-lg-12
        figure
          img(src='@/assets/curso/intro-banner.png' alt='Introducción')
      .col-lg-11.bg-degrade-gris.tarjeta.neg--top.p-4          
        p.mb-0 Se da la bienvenida al componente formativo <b>“Gestión del riesgo y seguridad en servicios en la nube”</b>. Para comenzar el recorrido por el mismo, visite el recurso didáctico que se muestra a continuación:


    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
