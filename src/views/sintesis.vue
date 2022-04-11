<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4(data-aos="fade") El uso de diversas tecnologías que ofrezcan disponibilidad de múltiples combinaciones, acordes con los cambios que se ven en la economía, la administración e incluso en las políticas públicas, no siempre van de la mano, aunque en la actualidad las organizaciones pequeñas y grandes cada vez demandan más su implementación. Vea que un término en boga es el <em>cloud computing</em> o computación en la nube, que permite entre otras cosas gestionar información de manera remota, su demanda cada vez va en aumento, en donde un conjunto de recursos informáticos configurables se encuentran dispuestos, con un mínimo de esfuerzo e incluso algunas veces sin proveedor de servicios en la nube.
    
    .row.bg-degrade-gris-vertical.bg-absoluto
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.justify-content-center.align-items-center
          .col-md-7.mb-md-0.mb-3(data-aos="fade-right")
            p No obstante y pese a la reducción de costos de operación, escalabilidad, reducción de costos de obsolescencia tecnológica, acceso a tecnología de punta e incluso rápida recuperación de información se encuentran algunos riesgos de cuidado que, si no son atendidos de manera temprana, pueden afectar el objetivo y propósito de la empresa al no contemplarlos cuando se lleva a cabo la implementación.
            p Todos los temas de seguridad tradicionales permanecen, pero la naturaleza de los riesgos, roles, responsabilidades y la implementación de los controles cambian, aunque el alcance general de la seguridad y el cumplimiento no lo haga, pueden agregarse nuevos actores o se hace redistribución de responsabilidades, pero es el controlador el de la información quien deberá estar presente y pendiente de minimizar los fallos, con el fin de generar un óptimo servicio.
          .col-md-5(data-aos="fade-left")
            img(src='@/assets/curso/sintesis-img.png' alt='Imagen decorativa')
          
    .row.justify-content-center.neg--top.mb-5
      .col-md-10.bg-acento-contenido2.p-4(data-aos="fade-down")
            p.mb-0 Basado en lo anterior, en el siguiente mapa conceptual, podrá tener un repaso breve de los contenidos vistos en este componente formativo:  
    

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
