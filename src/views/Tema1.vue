<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Seguridad en la nube

    .row.bg-tema1
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.align-items-center
          .col-md-4.mb-md-0.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/tema1-img1.png' alt='Imagen decorativa')
          .col-md-1  
          .col-md-6.text-white.esquina.p-3(data-aos="fade-left")
            p.mb-0 Corresponde a la seguridad de la información, que corresponde a las políticas, tecnologías y formas de control, que están enfocadas en la protección de datos, aplicaciones e infraestructura asociadas a la computación en la nube.
          .col-md-1 


    Separador

    

    .row.bg-tema-1-1
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.mb-5
          .col-md-7(data-aos="fade-right")
            #t_1_1
            .titulo-segundo.color-acento-contenido
              h2 1.1	Distribución de las responsabilidades en seguridad
            p A nivel mundial se han desarrollado normativas frente a la protección de los datos personales, incluso, en organizaciones mundiales como la OEA, que desde el año 1996 ha venido aprobando resoluciones enmarcadas en la protección de los datos personales, de hecho, el pasado 9 de abril de 2021 el Comité Jurídico Iberoamericano (JCI) aprobó los principios actualizados sobre la Privacidad y la protección de datos personales.
            p La computación en la nube obliga a que se establezcan acuerdos y la aplicación de la normativa jurídica en materia de la oferta de servicios en la nube, entre quienes ofrecen el servicio como proveedores y quienes consumen los servicios como clientes. Las diferentes normativas distinguen dos sujetos distintos: el responsable del archivo o del tratamiento de los datos y el encargado del tratamiento.
          .col-md-1
          .col-md-4(data-aos="fade-left")
            img(src='@/assets/curso/tema1-1-img1.png' alt='Imagen decorativa')
        .row
          .col-md-12(data-aos="fade-down")
            .titulo-personalizado.text-white.mb-4
              h3.mb-0 Responsable del archivo
          .col-md-5.mb-3.mb-md-0(data-aos="fade-right")
            img(src='@/assets/curso/tema1-1-img2.png' alt='Imagen decorativa')      
          .col-md-7(data-aos="fade-left")
            p Es la persona, profesional o entidad que decide sobre la finalidad, contenido y uso del tratamiento, por esto, el cliente que contrata servicios de computación en nube, las decisiones sobre dicho contrato, el mantenimiento o no de sus propios sistemas de información, la modalidad de nube, la tipología de servicios y la elección del proveedor en función de las condiciones ofrecidas, sigue manteniendo la condición de responsable del tratamiento de los datos sobre los que se aplicarán los citados servicios.
            p En estos acuerdos aparecen varios actores responsables de la protección y tratamiento adecuado de los datos, dentro de estos roles se encuentran los siguientes:  

    .row.mb-5
      .col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/tema1-1-img3.png' alt='Imagen decorativa')   
      .col-md-7(data-aos="fade-left")
        SlyderF.tema1-1(columnas="col-12")
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center EL CIO
            h4.text-center.italic Chief Security Officer
            p.text-center Responsable del área de informática en conjunto con otros técnicos de su equipo que son los responsables de comparar el nuevo servicio requerido en la nube con el sistema actual, identificando y especificando los puntos de integración entre un servicio en la nube y los sistemas internos, evaluando y gestionando el impacto de la nube en la infraestructura de la empresa, como puede ser en la red de comunicaciones de acceso a Internet. 
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center EL PROPIETARIO DEL PROCESO DE NEGOCIO
            p.text-center Los owner o dueños de los procesos son regularmente quienes identifican en primer lugar la necesidad de migrar un servicio on-premise o local a la nube y por tanto, conocerá perfectamente los beneficios que espera obtener del nuevo modelo.
            p.text-center Lo que no está tan claro es que se haya dado cuenta de la existencia de riesgos, por lo que otros miembros del equipo deberán velar porque no proceda por su cuenta sin ningún tipo de estrategia para mitigar dichos riesgos.
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center EL EQUIPO DE GESTIÓN DE PROVEEDORES Y CONTRATOS TI
            p.text-center Este grupo debe ser el responsable de gestionar la relación global con el proveedor en la nube, inicia con la búsqueda y selección inicial del proveedor de servicios cloud (CSP), interviene en la negociación del contrato, durante la utilización del servicio en la nube y en la finalización del servicio, regularmente son responsables de dirigir y coordinar todas las actividades del equipo a cargo de la migración y despliegue de los servicios en la nube.
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center EL CISO
            h4.text-center.italic (Chief Information Security Officer)
            p.text-center Responsable de la seguridad de la información, su función principal es evaluar las prácticas de seguridad del proveedor de servicios en la nube, en relación con el tipo de datos que se trate y la criticidad del servicio para el negocio. Debe identificar los riesgos y si el uso del servicio en la nube se alinea con la política de seguridad existente en la organización.
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center OFICIAL DE PROTECCIÓN DE DATOS (OPD)
            p.text-center Llamado en Europa el Delegado de Protección de Datos – DPD y en Colombia Oficial de Protección de Datos – OPD, esta figura aparece con el surgimiento mismo de las normativas de <em>hábeas data</em> en los diferentes países, aun cuando su obligatoriedad no ha sido generalizada en todos.
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center REPRESENTANTES DEL DEPARTAMENTO LEGAL
            p.text-center La computación en la nube puede tener amplias implicaciones legales y al ser dicho modelo de entrega de servicios relativamente nuevo, los precedentes legales en muchos casos todavía no existen. 
            p.text-center Es importante involucrar a un abogado para determinar las cuestiones legales (como la indemnización y limitaciones de responsabilidad) en relación al contrato con el proveedor de servicios en la nube, determinando si al proporcionarnos un servicio en la nube se cumple con las obligaciones legales.
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center RESPONSABLE DE COMPRAS DE RIESGO
            h4.text-center El responsable y/o personal de compras
            p.text-center Si no se puede adquirir material o servicios en la empresa sin pasar por el departamento de compras, deben estar presentes en el equipo. 
            p.text-center La nube implica nuevos riesgos a los que seguramente el personal de compras no estará familiarizado. Su presencia servirá para educar e involucrar a dicho personal, además de mantener el organigrama empresarial.
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-3
                img(src='@/assets/curso/tema1-slyderf.svg' alt='Icono')
            h3.text-center AUDITORÍA, CUMPLIMIENTO, GOBIERNO Y GESTIÓN DE RIESGO
            p.text-center Estas personas son responsables de asegurar que las actividades de la organización cumplen con las regulaciones gubernamentales y las políticas internas. 
            p.text-center Otra vez, decir que los desafíos y riesgos de la nube son bastante novedosos, por lo que debemos involucrar a estos actores en una fase temprana para que puedan identificar y abordar, todas las cuestiones con suficiente antelación.  

    .row.mb-4(data-aos="fade-down")
      .col-md-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 En cuanto al Oficial de Protección de Datos ODP  en Colombia no hay norma alguna que lo defina de manera expresa, y su exigencia se ha desprendido del Artículo 23 del Decreto 1377 de 2013, ahora refundado en el Decreto 1074 de 2015, Artículo 2.2.2.25.3.1, que ordena contar con una “Persona o área responsable de la atención de peticiones, consultas y reclamos ante la cual el titular de la información puede ejercer sus derechos a conocer, actualizar, rectificar y suprimir el dato y revocar la autorización”, pero no se había establecido con carácter de obligatoriedad en ninguna norma específica; sin embargo, recientemente el Decreto 620 de 2020 modificatorio del Decreto 1078 de 2015, rige para los actores involucrados en los servicios ciudadanos digitales.

    p.mb-5(data-aos="fade") Si los servicios contratados o migrados a la nube requieren el tratamiento de datos personales su presencia es fundamental y se ha de tener en cuenta que el Oficial de Protección de Datos ODP como encargado de dirigir el Sistema de Protección de Datos Personales en la organización y responsable de velar por el cumplimiento del mismo en ella, se encarga, entre otras, de cumplir con las actividades que se aprecian a continuación:

    .row.tema1-1-bg-slider.tarjeta(data-aos="fade-down") 
      .col-md-12.pb-3.pt-4
        SlyderA.tema1-1(tipo="b")
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider1.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Orientar la constitución del Gobierno del Sistema de Protección de Datos corresponde a la asignación de roles y responsabilidades asociadas al hábeas data y a la gestión del Sistema de Protección de Datos en las áreas internas involucradas.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider2.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Monitorear del Sistema de Protección de Datos, haciendo seguimiento y control del cumplimiento de la obligación legal asociada al hábeas data en las operaciones de la organización, mediante la implementación de indicadores y evaluaciones de cumplimiento.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider3.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Gestionar el cumplimiento del principio de responsabilidad demostrada o accountability, mediante el aseguramiento de la documentación y conservación de las evidencias de todas las actividades desarrolladas para el mantenimiento de la protección de los datos personales de sus titulares.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider4.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Mantener actualizado el sistema de protección de datos frente a los cambios, cuando por la dinámica de la operación existan variaciones en los elementos inherentes al Sistema de Protección de Datos (datos personales, titulares de datos personales, finalidades de tratamiento, etc.).
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider5.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Asegurarse le implementación de la Política de Tratamiento de la Información, el aviso de privacidad y el manual de políticas y procedimientos de protección de datos adecuados a las características propias de la organización.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider6.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Gestionar y mantener actualizado el Registro Nacional de Bases de Datos – RNBD ante la Súper Intendencia de Industria y Comercio.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider7.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Orientar la evaluación de los riesgos a que estén expuestas las bases de datos, lo mismo que su gestión conforme al nivel de riesgo que posea cada una de ellas.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-1-slider8.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Asegurarse en general del cumplimiento de las obligaciones legales, y sobre todo, que las autorizaciones se recolecten siempre de manera previa, expresa e informada de los titulares o sus representantes.            

    Separador


    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2	Perspectivas según los tipos de servicios y modelos cloud


  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
