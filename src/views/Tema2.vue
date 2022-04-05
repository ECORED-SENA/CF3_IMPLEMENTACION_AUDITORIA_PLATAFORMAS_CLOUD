<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Gestión del riesgo

    .row.bg-tema-2
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-0
        .row.justify-content-center
          .col-md-12  
            .row.mb-5.justify-content-center
              .col-lg-12
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema2-banner.png' alt='Introducción')
              .col-lg-11.bg-degrade-gris-horizontal.tarjeta.neg--top.p-4(data-aos="fade")   
                p.mb-0 En los últimos años, las estrategias corporativas se han centrado en dedicar los recursos propios en las actividades consideradas “core” o esenciales para mantener la competitividad en los mercados, externalizando aquellas otras actividades necesarias desde el punto de vista logístico u operativo, pero difíciles de entender por ser ajenas a la cultura de la organización y de la dirección, además de costosas de mantener por ser adquiridas y consumidas en un volumen reducido.

          p.mb-0(data-aos="fade") El desarrollo de la tecnología en los últimos veinte años ha impulsado la prestación de los servicios relacionados con las TIC, de forma acelerada hasta un nivel de madurez que no solo permite su externalización alineada con las actividades “core” del negocio, sino que son parte integral del negocio y forman parte de su cadena de valor, tal y como se referencia en ITIL 4, atendiendo a la denominada cuarta revolución industrial y la transformación digital relacionada.

          Separador

          #t_2_1
            .titulo-segundo.color-acento-contenido
              h2 2.1	Gestión de las organizaciones basadas en el riesgo

    .row.bg-tema2-1
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.align-items-center.justify-content-center
          .col-md-4.mb-md-0.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/tema2-1-img.png' alt='Imagen decorativa')
          .col-md-7.text-white.esquina.p-3(data-aos="fade-left")
            p Ante la gran variedad de posibles opciones de despliegue de los servicios de nube (XaaS) en entornos públicos, privados o híbridos el enfoque de aplicar un conjunto de controles de seguridad preestablecido no es viable desde el punto de vista técnico, ni económico.
            p.mb-0 Hay que considerar que lo que puede funcionar en un proveedor o en un cliente puede ser ineficiente, inviable o directamente no cobra ningún sentido en otra organización distinta.

    p(data-aos="fade") Además, la aplicación de controles necesita de recursos para su implementación, mantenimiento y que finalmente se verán reflejados en cifras económicas de gastos operativos.

    p.mb-4(data-aos="fade") Otro enfoque habitual es la aplicación de controles técnicos individuales según se van descubriendo situaciones de riesgo que puedan comprometer la información entre el sistema de información proporcionado por el proveedor, los sistemas y las redes de comunicación de los usuarios del cliente de servicios web.

    .tema1-3-2.bloque-texto-a.color-secundario.p-3.p-md-2.mb-4
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4.ms-3
            p.mb-0 Inicialmente, este enfoque puede dar la sensación de un avance progresivo y proporcionado a las necesidades requeridas por la organización, pero ya ha quedado ampliamente demostrado que conduce finalmente a una falta de control y al desgobierno por ser un enfoque reactivo; pero además, por la incertidumbre de cómo los nuevos controles que se implementan acaban afectando la eficacia de aquellos previamente implementados.
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/tema2-1-img2.png', alt='Imagen decorativa', style="width: 270px; margin: 0 auto;")

    p.mb-0(data-aos="fade") El proceso de análisis y evaluación de riesgos habilita a las gerencias a tomar en consideración todos los aspectos de riesgo que son pertinentes al contexto de la actividad de la organización y a sus objetivos estratégicos de modo que, con base en el resultado del proceso que aporta una identificación completa del escenario de riesgos en un informe puedan decidir en su experiencia como gestores (ahora sí) qué situaciones de riesgo no son asumibles, priorizando unas acciones respecto a otras según el impacto financiero, económico, operativo, reputacional  y los recursos requeridos para su control efectivo.

    Separador

    #t_2_2
      .titulo-segundo.color-acento-contenido
        h2 2.2	Metodología de gestión del riesgo

    .row.mb-5
      .col-md-8.mb-4.mb-md-0(data-aos="fade-right")  
        p En primer lugar, se introducirá en este momento algunos términos y definiciones esenciales para poder entender los fundamentos de las metodologías en gestión del riesgo.
        p Las referencias en este caso están tomadas de la ISO 27000, norma de consenso y alcance internacional, que toma referencias anteriores como la Guía ISO 72:2009 y amplía adicionalmente, proporcionando una visión general de las normas que componen la serie 27000 (como ISO 27017 y 27018 relacionadas con la prestación de servicios de computación en la nube) y que recopila todas las definiciones relevantes a la seguridad de la información de las publicaciones, de manera que en el siguiente recurso didáctico encontrará una explicación al respecto:
      .col-md-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-2-img.png' alt='Imagen decorativa')

    .row.bg-tema2-2
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.justify-content-center
          .col-md-12
            .titulo-personalizado.text-white.mb-4(data-aos="fade-right") 
              h3.mb-0 Riesgo, efecto e incertidumbre
            p(data-aos="fade") Riesgo (Risk) se define como el efecto de la incertidumbre sobre los objetivos. El “efecto” es una desviación de lo esperado y puede ser favorable (positivo) o desfavorable (negativo). Habitualmente, los informes de análisis de riesgos de enfocan en los efectos negativos para el estudio de posibles estrategias de gestión que los reduzcan.
            p.mb-4(data-aos="fade") Adicionalmente, la “incertidumbre “es el estado, incluso parcial, de deficiencia de información relacionada con la comprensión o conocimiento de un evento, su consecuencia o probabilidad.  
          .col-md-8.mb-5
            figure
              img(src='@/assets/curso/tema2-2-infog.svg', alt='El riesgo a menudo se caracteriza por la referencia a posibles “eventos” (Guía ISO 73: 2009) y “consecuencias” (Guía ISO 73: 2009) o una combinación de estos')
          
          p.mb-4(data-aos="fade") El riesgo a menudo se expresa en términos de una combinación de las consecuencias de un evento (incluyendo cambios en las circunstancias) y la “probabilidad” asociada (Guía ISO 73: 2009) de ocurrencia. En el contexto de los sistemas de gestión de seguridad de la información, los riesgos de seguridad de la información pueden expresarse como un efecto de incertidumbre sobre los objetivos de seguridad de la información.
          .col-md-8.mb-5
            figure
              img(src='@/assets/curso/tema2-2-infog2.svg', alt='Una forma típica de describir los eventos relacionados con el estado de incertidumbre es mediante el uso de los términos de amenaza y vulnerabilidad')

          .row.justify-content-evenly
            .col-md-6
              p Típicamente, contra las amenazas no se pueden introducir acciones específicas; por ejemplo, amenazas naturales. Pero sí en las vulnerabilidades reduciendo la posibilidad de materialización de las amenazas que aprovechan las vulnerabilidades asociadas a cada activo en particular.
              p Por ejemplo, en relación a las amenazas naturales que puedan afectar a los equipos informáticos que dan soporte a la nube se pueden reducir las debilidades a los que están expuestos con elementos de protección contra rayos en los edificios en los que están ubicados, situarse en pisos elevados del nivel del suelo para situaciones de inundaciones, generadores eléctricos para el caso de corte de tendidos aéreos por vientos fuertes y, en el caso de la nube, migración de las instancias a otras ubicaciones geográficas no afectadas por catástrofes naturales aprovechando el beneficio de la abstracción de las máquinas virtuales de un hardware concreto.
            .col-md-4
              img(src='@/assets/curso/tema2-2-img2.png' alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Tema2',
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
