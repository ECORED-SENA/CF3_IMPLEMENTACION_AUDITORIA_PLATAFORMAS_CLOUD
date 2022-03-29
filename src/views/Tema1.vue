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
    .titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right") 
      h2 1.2	Perspectivas según los tipos de servicios y modelos cloud

    .row.bg-tema-1-2
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.mb-5
          .col-md-7(data-aos="fade-right")  
            p El cliente que contrata a un prestador de servicios de computación en la nube tiene una obligación legal de rapidez para elegir únicamente un encargado que ofrezca garantías suficientes para aplicar medidas técnicas y organizativas apropiadas, de manera que el tratamiento esté conforme con los requisitos de la legislación aplicable y garantice la protección de los derechos del interesado.
            p Esta rapidez se traducirá dadas las características propias de estos servicios, en una selección de requerimientos de información al proveedor de servicios que estén direccionados a ofrecer las garantías para la protección de los datos personales de los cuales es responsable; todo esto, necesario para decidir sobre la modalidad de nube y el tipo de servicios que contrata y de esta forma, hacer la mejor elección entre sus proveedores.
            p En las administraciones públicas, la computación en la nube, debido al volumen y la sensibilidad de los datos que gestiona soporta unos riesgos específicos, estos deben analizarse de manera puntual, de acuerdo con los escenarios en donde se presente su uso, con lo cual se orienta para la disminución del riesgo el uso de cuidados en la implantación, evitando comprometer los derechos de autor y la seguridad de los ciudadanos. Por ello, es necesario tener presente que hay una regulación internacional en cuanto al movimiento de datos que es aplicable tanto al sector privado como al público.
          .col-md-5(data-aos="fade-left")
            img(src='@/assets/curso/tema1-2-img1.png' alt='Imagen decorativa')

        .tema1-2.bloque-texto-g.color-secundario.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-2-img2.jpg')})`}" )
          .bloque-texto-g__texto.p-4
            p.mb-0 En particular, debe tenerse muy presente que las autoridades competentes de terceros países en los que se traten datos personales en el marco de los servicios de computación en la nube podrían solicitar y acceder a la información de la cual las administraciones públicas son responsables, en algunos casos sin que se le informe de esta circunstancia. Por esta razón, el prestador de servicios de computación en la nube debe conocer la regulación existente en los países en donde se vayan a tratar los datos, y las decisiones que serían necesarias tomar al respecto. La trascendencia de estos posibles accesos es un factor muy relevante para decidir sobre la contratación de estos servicios y el proveedor que los preste.

        Separador

        .row.mb-5
          .col-md-12
            #t_1_3
            .titulo-segundo.color-acento-contenido
              h2 1.3	Estrategia y responsabilidad en protección de datos
          .col-md-7(data-aos="fade-right")  
            p Para poder determinar una estrategia en la transferencia de responsabilidades al proveedor de servicios en la nube, a continuación, se hace referencia del estándar para clientes que contraten servicios de computación en la nube, en particular las garantías exigibles que han de ser atendidas por el proveedor previo a una contratación.
            p Es fundamental, incluso, legalmente exigible según la normativa aplicable en cada caso, la adhesión del encargado del tratamiento a un código de conducta aprobado o a un mecanismo de certificación aprobado como elemento para demostrar la existencia de las garantías suficientes.
          .col-md-5(data-aos="fade-left")
            img(src='@/assets/curso/tema1-2-img3.png' alt='Imagen decorativa')


    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 1.3.1	Análisis previo antes de contratar servicios de computación en la nube
  
    p.mb-5(data-aos="fade") El análisis previo a la contratación de servicios en la nube requiere tener presente condiciones específicas, como puede ver, a continuación:

    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/tema1-3-1-infog.svg', alt='Análisis previo antes de contratar servicios de computación en la nube')


    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 1.3.2	Implicaciones del cliente en servicios en cloud

    p.mb-5(data-aos="fade") El cliente que contrata servicios de computación en la nube sigue siendo responsable del tratamiento de los datos personales, aunque se contrate con una gran compañía multinacional la responsabilidad en términos de “accountability” no se desplaza al prestador del servicio, ni siquiera incorporando una cláusula en el contrato con esta finalidad.  

    .tema1-3-2.bloque-texto-a.color-secundario.p-3.p-md-2.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4.ms-3
            h4 Encargado del tratamiento
            p.mb-0 El que ofrece la contratación de computación en nube es un prestador de servicios que en la ley de protección de datos aplicable tiene la calificación de ‘encargado del tratamiento’
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1-3-2-img.png', alt='Imagen decorativa')


    .titulo-tercero.mb-4(data-aos="fade-right") 
      h3 1.3.3	Legislación aplicable

    p(data-aos="fade") El modelo de computación en la nube hace posible que tanto los proveedores de servicios como los datos almacenados en la nube se encuentren ubicados en cualquier punto del planeta, en cualquier caso, el cliente sigue siendo responsable del tratamiento de los datos, por lo que la normativa aplicable al cliente y al prestador del servicio es la local del país del cliente.
    p.mb-4(data-aos="fade") La aplicación de dicha normativa no puede modificarse contractualmente y aunque le informen acerca de la disociación de los datos personales, no cambia la ley aplicable, ni la responsabilidad del cliente y del prestador del servicio.     

    .bg-tema1-3-1.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
          img(src="@/assets/curso/tema1-3-3-img.png")
        .col-md.col-lg-6
          .titulo-segundo.color-acento-botones(data-aos="flip-up")
            h2 Legislación actualizada en Colombia
          p.mb-4 Existen repositorios útiles para identificar la legislación actualizada en Colombia, así como la vigente en otros países, uno de estos es la Red Iberoamericana de Protección de Datos, la cual puede ser consultada en el siguiente enlace:
          a.boton.color-acento-botones.texto-blanco(href="https://www.redipd.org/es/legislacion?nid=83" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download


    .titulo-tercero.mb-4(data-aos="fade-right") 
      h3 1.3.4	Obligaciones del cliente de servicios en nube

    p.mb-0(data-aos="fade") Se debe ser diligente en la elección del prestador del servicio para que le ofrezca garantías suficientes en el cumplimiento de la ley de protección de datos aplicable y en la protección de los derechos de los interesados.
    p(data-aos="fade") Se debe formalizar un contrato con las garantías indicadas en el apartado “las garantías contractuales”.

    p.mb-5(data-aos="fade") En particular, debe solicitar y obtener información sobre si intervienen o no terceras personas (subcontratistas) en la prestación de servicios de computación en la nube, esta es una condición muy habitual entre proveedores de servicios, de ser así se requiere:

    .row.justify-content-center.mb-5
      .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1-3-4-infog.svg', alt='Obligaciones del cliente de servicios en la nube')
      .col-md-5(data-aos="fade-left")
        AcordionA.tema1-3-4(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Autorización previa")
            .col-md-12.mb-4.mb-md-0.ps-md-5
              p.mb-0 Dar su autorización previa y por escrito, a la participación de terceras empresas, al menos delimitando genéricamente los servicios en los que participarán, por ejemplo, en el alojamiento de datos. Para ello, el prestador del servicio de computación en la nube tiene que informarle sobre la tipología de servicios que pueden subcontratarse con terceros.
          .row(titulo="Empresas que intervienen")
            .col-md-12.mb-4.mb-md-0.ps-md-5
              p.mb-0 Tiene que poder conocer las terceras empresas que intervienen, pudiendo acceder a una página web o a través de otras opciones que le facilite el prestador del servicio.
          .row(titulo="Garantías jurídicas")
            .col-md-12.mb-4.mb-md-0.ps-md-5
              p.mb-0 El proveedor de la nube debe asumir en el contrato que los subcontratistas le ofrecen garantías jurídicas para el tratamiento de los datos equivalentes a los que él mismo asume.
          .row(titulo="Clausulas contractuales")
            .col-md-12.mb-4.mb-md-0.ps-md-5
              p.mb-0 El contrato que firma ha de incorporar cláusulas contractuales para la protección de los datos personales según se detalla en los siguientes puntos.       


    p.mb-4.text-center(data-aos="fade") Para la protección de los datos personales y en relación con las cláusulas contractuales es necesario:

    .row.justify-content-center.align-items-center.mb-3
      .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
        ul.lista-ul--color.color-acento-botones
          li 
            i.fas.fa-play
            | Relevancia de la ubicación de los datos personales.
          li 
            i.fas.fa-play
            | La localización de los datos es necesaria porque las garantías exigibles para su protección rigen de diferente forma, según los países en que se encuentren.
          li 
            i.fas.fa-play
            | Existen acuerdos bilaterales o reglamentos vinculantes para diferentes regiones geográficas, estas ofrecen garantías suficientes y no se considera legalmente que exista una transferencia internacional de datos.  
          li 
            i.fas.fa-play
            | Si los datos están localizados en países que no pertenecen al mismo espacio o región amparada por acuerdos en este nivel, al tener una transferencia internacional de datos, dependiendo del país en que se encuentren, deberán proporcionarse garantías jurídicas adecuadas. 
          li 
            i.fas.fa-play
            | Las garantías consideradas adecuadas para las transferencias internacionales de datos regulan bajo consideraciones como:     
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/tema1-3-4-img.png', alt='Imagen decorativa')

    h4.text-center Garantías de transferencia Internacional

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Consideración 1" :icono="require('@/assets/curso/tema1-3-4-ico.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            p El Artículo 26 de la Ley 1581 de 2012 prohíbe, por regla general, la transferencia internacional de datos personales de cualquier tipo a países que no garanticen un nivel adecuado de protección de datos.
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-3-4-tab1.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Consideración 2" :icono="require('@/assets/curso/tema1-3-4-ico.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Para efectos de la circulación transfronteriza de datos, la Superintendencia de Industria y Comercio (SIC) —autoridad colombiana de protección de datos personales— ha establecido que los siguientes países tienen nivel adecuado de protección de datos (SIC Circulares externas 5 y 8 de 2017 y 2 de 2018):
            p Alemania, Australia, Austria, Bélgica, Bulgaria, Chipre, Costa Rica, Croacia, Dinamarca, Eslovaquia, Eslovenia, Estonia, España, Estados Unidos de América, Finlandia, Francia, Grecia, Hungría, Irlanda, Islandia, Italia, Japón, Letonia, Lituania, Luxemburgo, Malta, México, Noruega, Países Bajos, Perú, Polonia, Portugal, Reino Unido, República Checa, República de Corea, Rumania, Serbia, Suecia y los países que han sido declarados con el nivel adecuado de protección por la Comisión Europea (Suiza, Canadá, Argentina, Guernsey, Isla de Man, Jersey, Islas Feroe, Andorra, Israel, Uruguay y Nueva Zelanda).
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-3-4-tab2.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Consideración 3" :icono="require('@/assets/curso/tema1-3-4-ico.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            p La prohibición no regirá cuando se trate de información respecto a la cual se disponga de la autorización expresa del titular o datos médicos por exigencias de salud o higiene pública. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-3-4-tab3.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Consideración 4" :icono="require('@/assets/curso/tema1-3-4-ico.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            p Adicionalmente, a las transferencias bursátiles les aplica la legislación específica y aquellas legalmente exigidas para la salvaguarda del interés público o para el reconocimiento, ejercicio o defensa de un derecho en procesos judiciales.
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-3-4-tab4.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Consideración 5" :icono="require('@/assets/curso/tema1-3-4-ico.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            p En otros casos, es la Superintendencia de Industria y Comercio la que debe pronunciarse para las transferencias internacionales con base en la Declaración de Conformidad. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-3-4-tab5.jpg', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Consideración 6" :icono="require('@/assets/curso/tema1-3-4-ico.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            p Más allá del trámite administrativo no se ha de olvidar que “los responsables del tratamiento de datos personales deben ser capaces de demostrar, a petición de la Superintendencia de Industria y Comercio, que han implementado medidas apropiadas y efectivas para cumplir con las obligaciones establecidas en la Ley 1581 de 2012” y en el Decreto 1377 de 2013, según se ha incorporado en el Decreto 1074 de 2015.
          .col-md-6
            figure
              img(src='@/assets/curso/tema1-3-4-tab6.jpg', alt='Imagen decorativa')
  

    .row.bg-tema-1-2
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.justify-content-center
          .col-md-12
            p.mb-4(data-aos="fade") Es preciso resaltar que la regulación sobre datos personales en Colombia impone cargas probatorias en cabeza de los responsables del tratamiento. Es así como en el siguiente recurso educativo se explican en brevedad:
          .col-md-10
            ul.lista-ul--color.color-acento-botones.mb-4
              li 
                i.fas.fa-play
                | Relevancia de la ubicación de los datos personales.
              li 
                i.fas.fa-play
                | La localización de los datos es necesaria porque las garantías exigibles para su protección rigen de diferente forma, según los países en que se encuentren. 
              li 
                i.fas.fa-play
                | Existen acuerdos bilaterales o reglamentos vinculantes para diferentes regiones geográficas, estas ofrecen garantías suficientes y no se considera legalmente que exista una transferencia internacional de datos. 
                br
                | Si los datos están localizados en países que no pertenecen al mismo espacio o región amparada por acuerdos en este nivel, al tener una transferencia internacional de datos, dependiendo del país en que se encuentren, deberán proporcionarse garantía
              li 
                i.fas.fa-play
                | Las garantías consideradas adecuadas para las transferencias internacionales de datos regulan bajo consideraciones como:
          .col-md-10.bg-acento-contenido.mb-2.py-3.r-5
            p.mb-0 Conservar prueba de haber informado al titular al momento de solicitarle la autorización, de manera clara y expresa lo que ordena el Artículo 12 de la Ley 1581 de 2012 y, cuando el titular lo solicite, entregarle copia de ello.
          .col-md-10.bg-acento-contenido.mb-2.py-3.r-5
            p.mb-0 Solicitar y conservar en las condiciones previstas en la presente ley, copia de la respectiva autorización otorgada por el titular.
          .col-md-10.bg-acento-contenido.mb-2.py-3.r-5
            p.mb-0 Proveer una descripción de los procedimientos usados para la recolección, almacenamiento, uso, circulación y supresión de información, como también la descripción de las finalidades para las cuales la información es recolectada y una explicación sobre la necesidad de recolectar los datos en cada caso.
          .col-md-10.bg-acento-contenido.mb-2.py-3.r-5
            p.mb-0 Documentar los procedimientos para el tratamiento, conservación y supresión de los datos personales de conformidad con las disposiciones aplicables a la materia de que se trate.
          .col-md-10.bg-acento-contenido.mb-2.py-3.r-5
            p.mb-0 Desarrollar sus políticas para el tratamiento de los datos personales y velar porque los encargados del tratamiento den cabal cumplimiento a las mismas.
          .col-md-10.bg-acento-contenido.mb-2.py-3.r-5
            p.mb-0 Conservar el modelo del aviso de privacidad que utilicen para cumplir con el deber que tienen de dar a conocer a los titulares la existencia de políticas del tratamiento de la información y la forma de acceder a las mismas, mientras se traten datos personales conforme al mismo y perduren las obligaciones que de este se deriven.
          .col-md-10.bg-acento-contenido.mb-2.py-3.r-5
            p.mb-0 Adoptar las medidas razonables para asegurar que los datos personales que reposan en las bases de datos sean precisos y suficientes y, cuando así lo solicite el titular o cuando el responsable haya podido advertirlo, sean actualizados, rectificados o suprimidos, de tal manera que satisfagan los propósitos del tratamiento.          

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11
        .cajon.color-acento-contenido.p-4
          p.mb-0 El reto de las organizaciones frente al Principio de responsabilidad demostrada va mucho más allá de la mera expedición de documentos o redacción de políticas. Se trata de una actividad constante que exige demostrar un cumplimiento real y efectivo en la práctica de sus labores.


    .titulo-tercero.mb-4(data-aos="fade-right") 
      h3 1.3.5	Medidas de seguridad exigibles


    .row
      .col-md-8.mb-4.mb-md-0(data-aos="fade-right")  
        p Las medidas de seguridad son indispensables para garantizar la integridad de los datos personales, evitar accesos no autorizados y recuperar la información en caso de que se produzcan incidencias de seguridad.
        p.mb-5  En la Guía para la implementación del principio de responsabilidad demostrada (accountability), establecida por las Superintendencia de Industria y Comercio se indica que las garantías, medidas de seguridad y mecanismos que garanticen la protección de datos personales serán los resultantes de  un sistema de administración de riesgos asociados al tratamiento de datos personales, con el fin de que permitan “identificar, medir, controlar y monitorear todos aquellos hechos o situaciones que puedan incidir en la debida administración del riesgo a que están expuestos en desarrollo del cumplimiento de las normas de protección de datos personales”.
        p Por su parte, la evaluación del riesgo o impacto en la privacidad debería incluir, al menos:
      .col-md-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-3-5-img.png' alt='Imagen decorativa')

    .row.justify-content-center.bg-2.mb-4.mx-1(data-aos="fade-down")
      .col-md-11.py-4
        ul.lista-ul--color.color-acento-botones.mb-0
          li 
            i.fas.fa-play
            | Una descripción detallada de las operaciones de tratamiento de datos personales que involucra el proyecto de comercio electrónico.
          li 
            i.fas.fa-play
            | Una evaluación de los riesgos específicos para los derechos y libertades de los titulares de los datos personales. 
          li 
            i.fas.fa-play
            | La identificación y clasificación de los riesgos, así como la adopción de medidas para mitigarlos.
          li 
            i.fas.fa-play
            | Las medidas previstas para afrontar los riesgos, incluidas las garantías, los controles de seguridad, el diseño de software, las tecnologías y mecanismos que garanticen la protección de datos personales, teniendo en cuenta los derechos e intereses legítimos de los titulares de los datos y de otras personas eventualmente afectadas.

    .row.mb-md-5
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right")  
        img(src='@/assets/curso/tema1-3-5-img2.png' alt='Imagen decorativa')
      .col-md-6(data-aos="fade-left")
        p Los resultados de este estudio, junto con las estrategias para mitigar los riesgos, hacen parte de la aplicación del principio de privacidad desde el diseño y por defecto.
        p En la gestión de los encargados del tratamiento en las transmisiones internacionales de datos personales, los sujetos obligados deben tomar las medidas necesarias para asegurar la protección de los datos personales, cuyo tratamiento es realizado por los encargados, a través de transmisiones internacionales de datos personales. Para ello, se deben tener en cuenta:

    .row.tema1-1-bg-slider.tarjeta.mb-4(data-aos="fade-down") 
      .col-md-12.pb-3.pt-4
        SlyderA.tema1-1(tipo="b")
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-3-5-slider1.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Disposiciones que incluyan requisitos para que los encargados cumplan con las normas colombianas de protección de datos de forma específica, adicionalmente las políticas de tratamiento del responsable.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-3-5-slider2.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Formación y educación para los empleados del encargado que tienen acceso a la información personal.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-3-5-slider3.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Exigencia de adherencia a las políticas de tratamiento si se utilizan subcontratistas.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-3-5-slider4.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Relación de auditorías internas y/o externas.
          .row.justify-content-center
            .col-md-10.mb-4.mb-md-2.p-0
              img(src='@/assets/curso/tema1-3-5-slider5.png', alt='Imagen decorativa')          
            .col-md-10.tema1-1-bg-slider-content.py-3
              p.text-center.mb-1 Acuerdos con los encargados y sus empleados, aceptando que cumplirán con las políticas y protocolos del responsable del tratamiento.        

    p.mb-5.text-center(data-aos="fade") No se debe olvidar las garantías de cumplimiento y adherencia continua de estas medidas con base al programa integral de gestión de datos personales.







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
