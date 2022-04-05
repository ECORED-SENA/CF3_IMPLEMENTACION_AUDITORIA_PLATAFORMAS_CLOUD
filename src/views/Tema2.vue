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
            .col-md-6(data-aos="fade-right") 
              p Típicamente, contra las amenazas no se pueden introducir acciones específicas; por ejemplo, amenazas naturales. Pero sí en las vulnerabilidades reduciendo la posibilidad de materialización de las amenazas que aprovechan las vulnerabilidades asociadas a cada activo en particular.
              p Por ejemplo, en relación a las amenazas naturales que puedan afectar a los equipos informáticos que dan soporte a la nube se pueden reducir las debilidades a los que están expuestos con elementos de protección contra rayos en los edificios en los que están ubicados, situarse en pisos elevados del nivel del suelo para situaciones de inundaciones, generadores eléctricos para el caso de corte de tendidos aéreos por vientos fuertes y, en el caso de la nube, migración de las instancias a otras ubicaciones geográficas no afectadas por catástrofes naturales aprovechando el beneficio de la abstracción de las máquinas virtuales de un hardware concreto.
            .col-md-4(data-aos="fade-left")
              img(src='@/assets/curso/tema2-2-img2.png' alt='Imagen decorativa')

    .row.mb-4
      .col-md-1
      .col-md-5.mb-4(data-aos="fade-right") 
        img(src='@/assets/curso/tema2-2-img3.png' alt='Imagen decorativa')
      .col-md-1
      .col-md-5(data-aos="fade-left")
        p El riesgo es una parte inherente a las actividades de cualquier negocio que afecta sus operaciones y actividades, lo que los lleva a implementar procesos adecuados de gestión de riesgos para gestionar y tratar dichos riesgos de manera efectiva.
        p Las organizaciones más exitosas tienen la capacidad de identificar y gestionar riesgos, antes de que esos riesgos se conviertan en realidades destructivas que perjudiquen la reputación de la organización y su capacidad para operar, presentamos a continuación los pasos indicados en el estándar que toda metodología debe incluir para una evaluación completa de los riesgos.

    TabsB.color-acento-botones.tema2-2
      .py-4.py-md-5(titulo="Criterios de riesgos" :icono="require('@/assets/curso/tema2-1-ico-tab1.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Términos de referencia frente a los cuales se evalúa la importancia de un riesgo, esto implica la decisión en:
            ul.lista-ul--color.color-acento-botones.mb-0 
              li.mb-2 
                i.fas.fa-play
                | La naturaleza y el tipo de consecuencias que deben incluirse y cómo van a ser medidas.
              li.mb-2 
                i.fas.fa-play
                | La forma en que expresaremos los niveles de probabilidad. 
              li.mb-2 
                i.fas.fa-play
                | Cómo determinará el nivel de riesgo aceptable.
              li.mb-2 
                i.fas.fa-play
                | Los criterios por los que se decidirá cuando un riesgo requiere tratamiento y cuando no.
              li.mb-2
                i.fas.fa-play
                | Los criterios para decidir cuándo un riesgo es aceptable y/o tolerable.
              li.mb-2 
                i.fas.fa-play
                | Si tendremos en cuenta o no las combinaciones de diferentes escenarios de riesgo.        
          .col-md-4
            figure
              img(src='@/assets/curso/tema2-2-tab1.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Identificación del riesgo" :icono="require('@/assets/curso/tema2-1-ico-tab2.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Proceso para encontrar, reconocer y describir el riesgo.
            ul.lista-ul--color.color-acento-botones.mb-0 
              li.mb-2 
                i.fas.fa-play
                | Proceso formal y estructurado que incluya fuentes de riesgo, eventos, sus causas y sus posibles consecuencias. 
              li.mb-2 
                i.fas.fa-play
                | Creación de una lista completa de riesgos (internos y externos) que enfrenta la organización y puede incluir aportes de fuentes como datos históricos, análisis teóricos, opciones de expertos y las necesidades de los interesados. 
              li.mb-2 
                i.fas.fa-play
                | El proceso de identificación de riesgos permite a la organización identificar sus activos, fuentes de riesgo, eventos de riesgo, medidas existentes y consecuencias.
              li.mb-2
                i.fas.fa-play
                | Al identificar dichos elementos, la organización estará lista para comenzar el proceso de análisis de riesgos.      
          .col-md-4
            figure
              img(src='@/assets/curso/tema2-2-tab2.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Análisis del riesgo" :icono="require('@/assets/curso/tema2-1-ico-tab3.svg')")
        .row.justify-content-center
          .col-md-10
            p Proceso para comprender la naturaleza del riesgo y determinar el nivel de riesgo. Existen muchos tipos distintos de metodologías y de valoración del riesgo, pero prácticamente todas utilizan uno de los dos siguientes enfoques:
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--color.color-acento-botones.mb-3
              li.mb-2 
                i.fas.fa-play
                | Análisis de riesgos cuantitativo: tiene como objetivo calcular valores numéricos para cada uno de los componentes (activos/actividades/servicios, probabilidades, impacto) identificados durante la valoración del riesgo para desarrollar un análisis de coste/beneficio que sea lo más objetivo posible. 
              li.mb-2 
                i.fas.fa-play
                | Análisis de riesgos cualitativo: Determinar el valor monetario de cada activo (AV) identificado para orientar a la Gerencia en relación a cuánto dinero y tiempo deberían dedicar a su seguridad. Para asignar un valor a un activo se deben calcular los siguientes 4 factores principales:
            ul.lista-ul--color.color-primario.mb-0 
              li.mb-0
                i.fas.fa-check
                | El valor financiero del activo: calculo directo en términos financieros y utiliza simplificaciones siempre que sean posibles.   
              li.mb-0
                i.fas.fa-check
                | El impacto financiero de perder un activo: el ejemplo más claro podría ser el asociado a la indisponibilidad de la Web de venta online durante x horas.
              li.mb-0
                i.fas.fa-check
                | El impacto indirecto de perder el activo: campañas de publicidad no planificadas y/u ofertas que contrarresten daños a la imagen por incidentes de seguridad.
              li.mb-0
                i.fas.fa-check
                | Es habitual que los análisis utilicen una combinación de ambos enfoques que de denominan análisis de riesgos “Semi”-cualitativos/cuantitativos.    
          .col-md-4
            figure
              img(src='@/assets/curso/tema2-2-tab3.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Evaluación del riesgo" :icono="require('@/assets/curso/tema2-1-ico-tab4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-10
            p Proceso de comparación de los resultados del análisis del riesgo con los criterios del riesgo, para determinar si el riesgo, su magnitud o ambos son aceptables o tolerables.
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--color.color-acento-botones.mb-3
              li.mb-2 
                i.fas.fa-play
                | Proceso de comparación de los resultados del análisis del riesgo con los criterios del riesgo, para determinar si el riesgo, su magnitud o ambos son aceptables o tolerables. 
              li.mb-2 
                i.fas.fa-play
                | El resultado de este proceso es un informe de evaluación del riesgo que incluye:
            ul.lista-ul--color.color-primario.mb-3
              li.mb-0
                i.fas.fa-check
                | Una lista priorizada típicamente con los riesgos más altos comenzando por los no aceptables primero en atención al criterio marcado por la dirección.
              li.mb-0
                i.fas.fa-check
                | Un conjunto de recomendaciones para prevenirlos/ mitigarlos.
              li.mb-0
                i.fas.fa-check 
                | Una vez se dispone del informe de valoración de riesgos existen varias opciones que se deben de considerar para gestionar los riesgos y reducirlos a niveles aceptables.
              li.mb-0
                i.fas.fa-check
                | Evitar: eliminando la causa raíz que origina el riesgo asociado.
              li.mb-0
                i.fas.fa-check 
                | Transferir: trasladar los riesgos asociados del negocio a otras partes, por ejemplo, aseguradores, proveedores.
              li.mb-0
                i.fas.fa-check
                | Reducir: aplicar los controles apropiados que reduzcan el grado de vulnerabilidad, frecuencia y/o impacto.
              li.mb-0
                i.fas.fa-check
                | Aceptar: consentir los riesgos consciente y objetivamente, siempre que satisfagan las políticas y criterios de la organización para la aceptación de los riesgos. 
          .col-md-4
            figure
              img(src='@/assets/curso/tema2-2-tab4.png', alt='Imagen decorativa')
          .col-md-10
            p La comparación de diferentes soluciones internas/externas considerando las ventajas, inconvenientes, costos (inicio, mantenimiento y ejecución) y capacidad de mitigación y opciones de control permitirá determinar las mejores decisiones.

    Separador


    #t_2_3
      .titulo-segundo.color-acento-contenido
        h2 2.3	Riesgos políticos y administrativos

    p.mb-5(data-aos="fade") A continuación, se presentan los riesgos más comunes que desde el punto de vista administrativo y político se pueden tener al adquirir servicios en la nube; una presentación condensada de estos se aprecia en la siguiente figura:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
      p.mb-0 <b>Figura 1.</b> Riesgos políticos y administrativos.
    
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/tema2-3-infog.svg', alt='Riesgos políticos y administrativos')

    p.mb-5(data-aos="fade") Un mayor detalle de los aspectos correspondientes a los riesgos políticos y administrativos presentes en la gestión del riesgo se muestran a continuación:

    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 2.3.1	Vinculación

    .row.mb-4
      .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/tema2-3-1-img.png', alt='Imagen decorativa')
      .col-md-7
        p La oferta actual en cuanto a herramientas, procedimientos o formatos de datos normalizados o interfaces de servicio que puedan garantizar la portabilidad del servicio y de los datos es aún escasa, aunque existen algunas iniciativas de estandarización. 
        p Por este motivo, la migración del servicio de un cliente a otro o la migración de datos y servicios desde un entorno de tecnologías de la información interno o al mismo puede ser muy compleja. Además, los proveedores de servicios cloud pueden tener un incentivo para impedir (directa o indirectamente) la portabilidad de los datos o los servicios de sus clientes.
        p Esta dependencia potencial de la prestación del servicio de un proveedor de servicios cloud concreto, en función de los compromisos del mismo, puede generar un fracaso catastrófico del negocio si el proveedor va a la quiebra y la ruta de migración de la aplicación y el contenido a otro proveedor es demasiado costosa (en términos económicos o temporales) o no se proporciona una alerta suficiente (no hay alerta temprana).
    
    p.text-center(data-aos="fade") Es importante entender que el grado y la naturaleza de la vinculación varían en función del tipo de nube, que se describe a continuación:

    .row.bg-tema-2-3-1
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-0
        .row.justify-content-center
          .col-md-6.mb-5
            img(src='@/assets/curso/tema2-3-1-infog.svg', alt='grado y la naturaleza de la vinculación varían en función del tipo de nube')

          .col-md-12
            .titulo-personalizado.text-white.mb-4(data-aos="fade-right") 
              h3.mb-0 Vinculación SaaS
            p(data-aos="fade") Los datos del cliente suelen almacenarse en un esquema de base de datos de uso diseñado por el proveedor del SaaS. 
            p.mb-4(data-aos="fade") No se ofrece una aplicación comercial con una rutina de «exportación» de datos, el cliente tendrá que desarrollar un programa que extraiga sus datos y los escriba en el archivo, dejándolos listos para importarlos a otro proveedor.

          .row.mb-4
            .col-md-6.mb-4(data-aos="fade-right") 
              img(src='@/assets/curso/tema2-3-1-img2.svg', alt='Imagen decorativa')
            .col-md-6(data-aos="fade-left") 
              p Hay pocos acuerdos formales sobre la estructura de los registros comerciales (por ejemplo, los campos de un registro de cliente en un proveedor de SaaS pueden ser distintos en otro proveedor), aunque existen formatos de archivo subyacentes comunes para la importación y la exportación de datos, por ejemplo, XML. 
              ul.lista-ul--color.color-acento-botones
                li 
                  i.fas.fa-play
                  | Por lo general, el nuevo proveedor “negocia esta ayuda. Sin embargo, si los datos deben volver a la empresa, el cliente tendrá que escribir rutinas de importación que se ocupan de las comparaciones de datos necesarias, a menos que el proveedor de servicios cloud ofrezca esta rutina. Este punto lleva a evaluar decisiones respecto a la migración, impactando en el interés comercial a largo plazo del proveedor de servicios en cuanto a una portabilidad más fácil, completa y rentable posible.
                li 
                  i.fas.fa-play
                  | La vinculación de la aplicación es la forma más evidente de este servicio (aunque no es específica de los servicios en la nube). Los proveedores de SaaS suelen desarrollar una aplicación personalizada a medida de las necesidades de su mercado objetivo.
                li 
                  i.fas.fa-play
                  | Los clientes de SaaS que poseen una amplia base de usuarios pueden contraer gastos de conmutación muy elevados a la hora de migrar a otro proveedor de SaaS, afectando la experiencia del usuario final (por ejemplo, es necesario realizar un reciclaje de formación). Si el cliente ha desarrollado programas para interactuar con las API de los proveedores directamente (por ejemplo, para integrarse con otras aplicaciones), éstos también deberán ser reescritos para tener en cuenta la API del nuevo proveedor.    

          .row.mb-4
            .col-md-12
              .titulo-personalizado.text-white.mb-4(data-aos="fade-right") 
                h3.mb-0 Vinculación PaaS
            .col-md-6(data-aos="fade-right") 
              p La vinculación PaaS se produce tanto en el nivel de API (llamadas específicas de la API a la plataforma) como a nivel de componente. 
              p El proveedor de PaaS puede ofrecer un almacenamiento de datos secundario de gran eficacia. El cliente no sólo debe desarrollar un código utilizando las API personalizadas que ofrece el proveedor, sino que también debe codificar las rutinas de acceso a los datos para compatibilizarlas con el almacenamiento de datos secundario. 
              p Este código no tiene por qué ser portátil entre proveedores de PaaS, incluso si se ofrece una API con un alto grado de compatibilidad, ya que el modelo de acceso a datos puede ser diferente (por ejemplo, relacional frente a codificación «hashing»).
              ul.lista-ul--color.color-acento-botones
                li 
                  i.fas.fa-play
                  | La vinculación PaaS en el nivel de API se produce cuando distintos proveedores ofrecen distintas API.
                li 
                  i.fas.fa-play
                  | La vinculación PaaS se produce en el nivel de ejecución, puesto que las ejecuciones estándar suelen estar muy personalizadas, a fin de operar de modo seguro en el entorno en la nube, por ejemplo, una ejecución Java puede sufrir la eliminación o la modificación de llamadas «peligrosa s» por motivos de seguridad. Corresponde a los desarrolladores del cliente entender y tener en cuenta estas diferencias.
                li 
                  i.fas.fa-play
                  | PaaS también es objeto de vinculación de datos, del mismo modo que el SaaS, pero en este caso, el cliente es el único responsable de crear rutinas de exportación compatibles.   
            .col-md-6.mb-4(data-aos="fade-left") 
              img(src='@/assets/curso/tema2-3-1-img3.svg', alt='Imagen decorativa')

          .row.mb-5
            .col-md-12
              .titulo-personalizado.text-white.mb-4(data-aos="fade-right") 
                h3.mb-0 Vinculación IaaS
            .col-md-6.mb-4(data-aos="fade-right") 
              img(src='@/assets/curso/tema2-3-1-img4.svg', alt='Imagen decorativa')
            .col-md-6(data-aos="fade-left") 
              p La vinculación IaaS varía en función de los servicios de infraestructura específicos que se consumen. Por ejemplo, un cliente que utiliza almacenamiento en la nube no se verá afectado por formatos de máquina virtual (VM) no compatibles.
              ul.lista-ul--color.color-acento-botones
                li 
                  i.fas.fa-play
                  | Los proveedores de computación IaaS ofrecen máquinas virtuales basadas en hipervisor. Los metadatos de VM y software se agrupan por motivos de portabilidad (suele hacerse únicamente dentro de la nube del proveedor). La migración entre proveedores es no trivial hasta que se adoptan normas abiertas, como el formato abierto de virtualización (OVF – Open Virtualization Format).
                li 
                  i.fas.fa-play
                  | Las ofertas de los proveedores de almacenamiento IaaS incluyen desde sencillos almacenajes de datos basados en valores/claves hasta almacenajes basados en archivos mejorados por políticas. Los conjuntos de características varían de forma considerable, y en consecuencia, también lo hace la semántica del almacenamiento. Sin embargo, la dependencia del grado de aplicación de las características específicas de la política (por ejemplo, los controles de acceso) puede limitar la selección de proveedor por parte del cliente.
                li 
                  i.fas.fa-play
                  | La vinculación de datos constituye la preocupación obvia con respecto a los servicios de almacenamiento IaaS. A medida que los clientes en nube empujan más datos para ser almacenados en la nube, la vinculación de los datos aumenta a menos que el CSP permita la portabilidad de los datos.

    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 2.3.2	Pérdida de gobernanza

    p.mb-4(data-aos="fade") Al utilizar las infraestructuras de nube, el cliente necesariamente cede el control de una serie de cuestiones que pueden influir en la seguridad al proveedor de servicios cloud, por ejemplo, los términos de uso pueden prohibir el escaneado de puertos, la evaluación de vulnerabilidades y las pruebas de penetración. Además, pueden surgir conflictos entre los procedimientos de refuerzo del cliente y el entorno en nube. Por otra parte, puede ocurrir que los acuerdos de nivel de servicio no incluyan la prestación de dichos servicios por parte del proveedor de servicios cloud, dejando así una laguna en las defensas de seguridad.  

    .tema1-3-6.bloque-texto-a.color-secundario.p-3.p-md-2.mb-4
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.p-0
          img(src='@/assets/curso/tema2-3-2-img.png', alt='Imagen decorativa')
        .col-lg-8  
          .bloque-texto-a__texto.p-4.ms-3
            p.mb-0 Asimismo, el proveedor de servicios cloud puede subcontratar o externalizar servicios a terceros (proveedores desconocidos) que podrían no ofrecer las mismas garantías (como la prestación del servicio de manera legal), ofrecidas por el proveedor o que se produzcan cambios en el control del proveedor de servicios cloud, de modo que provoquen una modificación de los términos y condiciones de sus servicios.

    p(data-aos="fade") La pérdida de gobernanza y control podría repercutir gravemente sobre la estrategia de la organización y por tanto, sobre la capacidad de cumplir su misión y sus objetivos. La pérdida de control y gobernanza podría generar la imposibilidad de cumplir los requisitos en materia de seguridad, la falta de confidencialidad, integridad y disponibilidad de los datos, el deterioro del rendimiento y de la calidad del servicio, por no mencionar la introducción de desafíos de cumplimiento

    Separador


    #t_2_4
      .titulo-segundo.color-acento-contenido
        h2 2.4	Riesgos técnicos





    Separador


    #t_2_5
      .titulo-segundo.color-acento-contenido
        h2 2.5	Riesgos legales       







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
