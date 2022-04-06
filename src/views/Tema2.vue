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

    .tema1-3-6.bloque-texto-a.color-secundario.p-3.p-md-2.mb-4(data-aos="fade-down") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.p-0
          img(src='@/assets/curso/tema2-3-2-img.png', alt='Imagen decorativa')
        .col-lg-8  
          .bloque-texto-a__texto.p-4.ms-3
            p.mb-0 Asimismo, el proveedor de servicios cloud puede subcontratar o externalizar servicios a terceros (proveedores desconocidos) que podrían no ofrecer las mismas garantías (como la prestación del servicio de manera legal), ofrecidas por el proveedor o que se produzcan cambios en el control del proveedor de servicios cloud, de modo que provoquen una modificación de los términos y condiciones de sus servicios.

    p.mb-5(data-aos="fade") La pérdida de gobernanza y control podría repercutir gravemente sobre la estrategia de la organización y por tanto, sobre la capacidad de cumplir su misión y sus objetivos. La pérdida de control y gobernanza podría generar la imposibilidad de cumplir los requisitos en materia de seguridad, la falta de confidencialidad, integridad y disponibilidad de los datos, el deterioro del rendimiento y de la calidad del servicio, por no mencionar la introducción de desafíos de cumplimiento

    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 2.3.3	Desafíos de rendimiento
    
    p.mb-4(data-aos="fade") Determinadas organizaciones que migran a la nube han realizado inversiones considerables para alcanzar la certificación, bien para lograr una ventaja competitiva o para ajustarse a los requisitos normativos o reglamentarios del sector. Esta inversión puede verse amenazada por la migración a la nube en:
    
    .row.bg-tema-2-3-3.mb-4
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-0
        .row.justify-content-evenly.p-3.d-flex
          .col-md-3.h-100.mb-4
            .borde-alto
            .cajon-azul.px-3.py-4
              .titulo-azul-degrade.bg-degrade-azul.px-3.py-2.mb-4
                h4.mb-0.text-white Cumplimiento
              p.mb-0 Si el Proveedor de Servicios Cloud no puede demostrar su propio cumplimiento de los requisitos pertinentes.
          .col-md-3.h-100.mb-4
            .borde-alto
            .cajon-azul.px-3.py-4
              .titulo-azul-degrade.bg-degrade-azul.px-3.py-2.mb-4
                h4.mb-0.text-white Auditoría
              p.mb-0 Si el Proveedor de Servicios Cloud no permite que el cliente lleve a cabo la auditoría.
    
    p.mb-4(data-aos="fade") En determinados casos, también significa que el uso de una infraestructura pública de nube implica que no pueden alcanzarse determinados niveles de cumplimiento y por ello, los servicios de alojamiento en la nube no pueden utilizarse para los servicios que los necesitan.

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        .cajon.color-acento-contenido.p-4
          p.mb-0 Por ejemplo, EC2 de Amazon afirma que los clientes estarán presionados para alcanzar el cumplimiento PCI (Estándar de seguridad de datos para la industria de tarjeta de pago o PCI DSS) en su plataforma. Por este motivo, los servicios alojados en EC2 no pueden utilizarse para gestionar transacciones con tarjeta de crédito.

    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 2.3.4	Pérdida de renombre empresarial por la prestación conjunta
    
    p.mb-4(data-aos="fade") Los recursos compartidos implican la posibilidad de que las actividades maliciosas de un prestador puedan afectar el renombre de otro, por ejemplo, el spam, el escaneado de puertos o la prestación de contenido malicioso de la infraestructura en nube puede ocasionar:

    .row.bg-tema-2-3-4.mb-5
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-0
        .row.justify-content-evenly.p-3.d-flex
          .col-md-3.h-100.mb-4
            .borde-alto
            .cajon-azul.px-3.py-4
              .titulo-azul-degrade.bg-degrade-azul.px-3.py-2.mb-4
                h4.mb-0.text-white Bloqueo
              p.mb-0 El bloqueo de un rango de direcciones IP, incluidos el atacante y otros proveedores de infraestructura inocentes.
          .col-md-3.h-100.mb-4
            .borde-alto
            .cajon-azul.px-3.py-4
              .titulo-azul-degrade.bg-degrade-azul.px-3.py-2.mb-4
                h4.mb-0.text-white Confiscación de recursos
              p.mb-0 La confiscación de los recursos debido a las actividades de vecindad (orden judicial de vecindad).
          .col-md-3.h-100.mb-4
            .borde-alto
            .cajon-azul.px-3.py-4
              .titulo-azul-degrade.bg-degrade-azul.px-3.py-2.mb-4
                h4.mb-0.text-white Servicio deficiente
              p.mb-0 El impacto puede traducirse en una entrega deficiente del servicio y en la pérdida de datos, así como en problemas para el renombre de la organización.

    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 2.3.5	Error o cancelación de servicio en la nube

    .row.justify-content-center.mb-5
      .col-md-9(data-aos="fade-right") 
        p Como en cualquier mercado nuevo, la presión de la competencia, una estrategia de negocios inapropiada, la falta de apoyo financiero, etc., pueden provocar el cierre de algunos proveedores o como mínimo, obligarles a reestructurar su oferta de cartera de servicios. 
        p Dicho de otro modo, es posible que a corto o mediano plazo finalicen algunos servicios de computación en la nube. El impacto de esta amenaza para el cliente de servicios cloud es sencillo de entender, ya que puede dar lugar a una pérdida o al deterioro del rendimiento y de la calidad del servicio, así como a una pérdida de la inversión.
        p Además, los errores en los servicios subcontratados al proveedor de servicios cloud pueden repercutir considerablemente sobre la capacidad del cliente de estos servicios para cumplir sus funciones y obligaciones para con sus propios clientes. Así, este puede encontrarse expuesto a la responsabilidad contractual y extracontractual frente a sus clientes, basándose en la negligencia de su proveedor. 
      .col-md-3(data-aos="fade-left")
        img(src='@/assets/curso/tema2-3-5-img.svg' alt='Imagen decorativa')

    .titulo-tercero.mb-3(data-aos="fade-right") 
      h3 2.3.6	Fallo en la cadena de suministro

    p(data-aos="fade")  Un proveedor de servicios cloud puede subcontratar determinadas tareas especializadas de su cadena «de producción» a terceros. En esta situación, el nivel de seguridad del proveedor de servicios cloud puede estar supeditado al nivel de seguridad de cada enlace y al grado de dependencia de terceros de este.

    p(data-aos="fade")  Cualquier interrupción o corrupción de la cadena, así como la falta de coordinación de las responsabilidades entre las partes implicadas puede ocasionar:

    .row.tema2-3-6.mb-4(data-aos="fade-down") 
      .col-md-4
        .tarjeta.bg-tema2-3-6.p-4.mb-4.mb-md-0
          img.centrar-img.mb-4(src='@/assets/curso/tema2-3-6-img1.png' alt='Imagen decorativa')
          p.text-center.mb-0 La no disponibilidad de los servicios.
      .col-md-4
        .tarjeta.bg-tema2-3-6.p-4.mb-4.mb-md-0
          img.centrar-img.mb-4(src='@/assets/curso/tema2-3-6-img2.png' alt='Imagen decorativa' style="width: 180px;")
          p.text-center.mb-0 La pérdida de la confidencialidad, la integridad y la disponibilidad de los datos.
      .col-md-4
        .tarjeta.bg-tema2-3-6.p-4
          img.centrar-img.mb-4(src='@/assets/curso/tema2-3-6-img3.png' alt='Imagen decorativa' style="width: 250px;")
          p.text-center.mb-0 Las pérdidas económicas y de renombre, debidas a la incapacidad de cumplir las demandas del cliente.        
    .row.tema2-3-6.justify-content-evenly.mb-5(data-aos="fade-down") 
      .col-md-4
        .tarjeta.bg-tema2-3-6.p-4.mb-4.mb-md-0
          img.centrar-img.mb-4(src='@/assets/curso/tema2-3-6-img4.png' alt='Imagen decorativa' style="width: 185px;")
          p.text-center.mb-0 El incumplimiento de los acuerdos de nivel de servicio (SLA).
      .col-md-4
        .tarjeta.bg-tema2-3-6.p-4
          img.centrar-img.mb-4(src='@/assets/curso/tema2-3-6-img5.png' alt='Imagen decorativa' style="width: 200px;")
          p.text-center.mb-0 El fallo en el servicio de conexión en cascada.

    p(data-aos="fade") Un ejemplo importante al respecto es la existencia de una dependencia crítica de un servicio de gestión de identidad o de un inicio de sesión único de un tercero. En este caso, la interrupción del servicio del tercero o de la conexión del proveedor de servicios cloud al servicio o las deficiencias de sus procedimientos de seguridad pueden poner en entredicho la disponibilidad o la confidencialidad de un cliente de servicios cloud, o de hecho, de toda la oferta en la nube.

    Separador

    .row.bg-tema-2-4
      .col-lg-12.px-lg-5.px-4.py-4.pb-md-5
        .row.justify-content-center
          .col-md-12
            #t_2_4
              .titulo-segundo.color-acento-contenido
                h2 2.4	Riesgos técnicos
            p.mb-5(data-aos="fade") La seguridad de cloud computing presenta los mismos problemas que los sistemas propios (infraestructura no externalizada), pero adicionalmente han surgido otros nuevos, resultado del uso de nuevas tecnologías implementadas como es la virtualización, las arquitecturas orientadas a servicios o las nuevas aplicaciones, que afectan la prestación del servicio desde lo técnico. Algunos de estos riesgos son:    
            
            .titulo-personalizado.text-white.mb-4(data-aos="fade-right") 
                h3.mb-0 Agotamiento de recursos (prestación excesiva o insuficiente)
            p.mb-4(data-aos="fade") Un modelado inadecuado del uso de recursos que pudiera concluir en un agotamiento de recursos, debido a un fallo en los algoritmos de provisión de recursos, en donde se presentan varias características, estas son:

            .row.justify-content-center.mb-5
              .col-md-6.mb-4.mb-md-0.px-2.px-md-4(data-aos="fade-right") 
                ul.lista-ul--color.color-acento-contenido.mb-2
                  li 
                    i.fas.fa-cloud
                    h4 De qué se trata
                p Los servicios en la nube son servicios bajo demanda, por tanto, existe un nivel de riesgo calculado en la asignación de todos los recursos de un servicio en la nube, puesto que los recursos se asignan en función de las proyecciones estadísticas.
              .col-md-6.px-2.px-md-4(data-aos="fade-left")
                ul.lista-ul--color.color-acento-contenido.mb-2
                  li 
                    i.fas.fa-cloud
                    h4 Uso inadecuado de los recursos
                p Una forma poco apropiada de la utilización de recursos (los algoritmos de asignación de recursos comunes son vulnerables a la distorsión de la imparcialidad) o una provisión de recursos e inversiones en infraestructura que sea inadecuada, puede dar lugar, desde la perspectiva del proveedor de servicios cloud a:

            .row.justify-content-center.mb-5
              .col-md-7.mb-4.mb-md-0.px-2.px-md-4(data-aos="fade-right") 
                LineaTiempoD.color-acento-contenido
                  p.mb-0(numero="1" titulo="No disponibilidad del servicio") Los fallos en determinados escenarios de aplicación muy específicos que utilizan un recurso concreto de manera muy intensiva (es decir, simulación o procesamiento de números intensivo de memoria/CPU (por ejemplo, la previsión de precios de las existencias).
                  p.mb-0(numero="2" titulo="Poner en peligro el control del acceso") En ocasiones puede ser posible forzar el sistema para que se «abra en fallo» en caso de agotamiento de los recursos.
                  p.mb-0(numero="3" titulo="Pérdidas económicas y de reputación") Debidas a la incapacidad de hacer frente a la demanda de los clientes.
                  p.mb-0(numero="4" titulo="Sobredimensionamiento de la infraestructura") Las consecuencias contrarias de una estimación imprecisa de las necesidades en términos de recursos, pueden dar lugar al sobredimensionamiento de la infraestructura, que corresponde a prestación excesiva que genera pérdidas económicas y pérdida de rentabilidad.
                  .row(numero="5" titulo="Selección deficiente de proveedores") 
                    p Desde la perspectiva del cliente de servicios cloud, una selección de proveedores deficiente y una falta de redundancia en el suministrador puede dar lugar a:
                    p.mb-1 - No disponibilidad del servicio: errores en la entrega (o rendimiento deficiente) de los servicios, tanto en tiempo real como en tiempo no real.
                    p.mb-1 - Poner en peligro el sistema de control del acceso: comprometer la confidencialidad y la integridad de los datos
                    p - Pérdidas económicas y de renombre: a raíz de la incapacidad de hacer frente a la demanda de los clientes, incumplimiento del acuerdo de nivel de servicio (SLA), error en el servicio de conexión en cascada, etc.
                    p.mb-0 Este riesgo también puede derivarse de un ataque DDoS y del mal funcionamiento de las aplicaciones debido a una compartimentación deficiente de la aplicación en algunos sistemas de los proveedores de servicios cloud.
              .col-md-5.px-2.px-md-4(data-aos="fade-left")
                img(src='@/assets/curso/tema2-4-img.png' alt='Imagen decorativa')





    Separador


    #t_2_5
      .titulo-segundo.color-acento-contenido
        h2 2.5	Riesgos legales       

    p.mb-4(data-aos="fade") Además de la pérdida de información o la intervención malintencionada de terceros, existen otros riesgos que amenazan seriamente los datos almacenados de las organizaciones, bien sea por la intervención directa de una orden judicial, por la pérdida de autonomía de ejecución dentro del territorio, la intrusión a la privacidad de los usuarios e incluso al caducar las licencias. Algunos de estos riesgos de orden legal se explican a continuación:

    .row.mb-5
      .col-md-12(data-aos="fade-right") 
        .titulo-tercero.mb-4(data-aos="fade-right") 
          h3 Órdenes judiciales y descubrimiento electrónico
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right") 
        p En caso de confiscación de hardware físico a raíz de una orden judicial de las fuerzas policiales o de demandas civiles, la centralización del almacenamiento y el hecho de que varios clientes compartan el hardware físico implica que hay un número mayor de clientes que corren el riesgo de que sus datos se revelen a partes no deseadas.
        p Al mismo tiempo, podría ser imposible que las fuerzas de una única nación confiscaran «una nube», a la vista de los avances pendientes en torno a la migración de hipervisor a larga distancia.
      .col-md-6(data-aos="fade-left") 
        img(src='@/assets/curso/tema2-5-img.jpg', alt='Imagen decorativa')

    .row.mb-5
      .col-md-12(data-aos="fade-right") 
        .titulo-tercero.mb-4(data-aos="fade-right") 
          h3 Riesgo derivado del cambio de jurisdicción
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right") 
        img(src='@/assets/curso/tema2-5-img2.jpg', alt='Imagen decorativa')
      .col-md-6(data-aos="fade-left") 
        p Los datos de los clientes pueden albergarse en múltiples jurisdicciones, algunas de las cuales pueden ser de alto riesgo. Si los centros de datos están ubicados en países de alto riesgo, por ejemplo, aquellos en los que no impera el Estado de derecho cuyo marco jurídico y ejecución de leyes son impredecibles, los Estados policiales autocráticos, los Estados que no respetan los acuerdos internacionales, etc., los sitios podrían ser objeto de incursiones de las autoridades locales y los datos o sistemas podrían ser divulgados o confiscados por la fuerza. 
        p Cabe señalar que, a este respecto, no queremos dar a entender que todas las medidas para el cumplimiento de la ley mediante órdenes judiciales sean inaceptables, sino simplemente que algunas pueden serlo, y que, en ocasiones, las confiscaciones legítimas de hardware (que parecen ser inusuales) pueden afectar a otros clientes que no son objeto de las actuaciones represivas, dependiendo del modo en que estén almacenados los datos.

    .row.mb-5
      .col-md-12(data-aos="fade-right") 
        .titulo-tercero.mb-4(data-aos="fade-right") 
          h3 Riesgos de la protección de datos
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right") 
        p La computación en la nube plantea varios riesgos relativos a la protección de datos tanto para clientes en nube como para proveedores de servicios cloud. Se deben tener en cuenta varios aspectos:
        p 1- Puede ser difícil para el cliente de servicios cloud (en su función de controlador de datos) comprobar eficazmente el procesamiento de datos que lleva a cabo el proveedor, sin certeza del como se gestionan en conformidad con la ley. Es el cliente el principal responsable del procesamiento de datos personales, incluso cuando dicho procesamiento lo realice el proveedor de servicios cloud CSP en su papel de procesador externo. El incumplimiento de la legislación en materia de protección de datos por parte del controlador, puede dar lugar a la imposición de sanciones administrativas, civiles o penales, que varían en función del país. En nubes federadas, en donde puede haber casos de transferencias múltiples de datos, este problema es aún mayor. Aunque, algunos proveedores de servicios cloud sí proporcionan información sobre sus prácticas de procesamiento de datos. Otros también ofrecen resúmenes de certificación sobre sus actividades de procesamiento y seguridad de datos y los controles de datos a que se someten.
      .col-md-6(data-aos="fade-left") 
        img(src='@/assets/curso/tema2-5-img3.jpg', alt='Imagen decorativa')
      .col-md-12(data-aos="fade-right")
        p 2- Pueden producirse infracciones de la seguridad de los datos que el cliente de servicios cloud no notifique al controlador.
        p 3- El cliente de servicios cloud puede perder el control de los datos procesados por el proveedor de servicios cloud. Este problema aumenta en los casos de transferencias múltiples de datos (por ejemplo, entre nubes federadas).
        p 4- El proveedor de servicios cloud puede recibir datos que no hayan sido recabados legalmente por su cliente (el controlador).

    .row.mb-
      .col-md-12(data-aos="fade-right") 
        .titulo-tercero.mb-4(data-aos="fade-right") 
          h3 Riesgos asociados al licenciamiento
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right") 
        img(src='@/assets/curso/tema2-5-img4.jpg', alt='Imagen decorativa')
      .col-md-6(data-aos="fade-left") 
        p Las condiciones de la licencia, como los acuerdos por puesto, y las comprobaciones de las licencias en línea pueden no ser factibles en un entorno de nube. 
        p Por ejemplo, si el software se carga por instancia cada vez que una máquina nueva es instanciada, los gastos de licencia para el cliente de servicios cloud podrían aumentar exponencialmente, a pesar de estar utilizando el mismo número de máquinas durante el mismo período. 
        p En el caso de PaaS e IaaS, existe la posibilidad de crear trabajo original en la nube (nuevas aplicaciones, software, etc.). Al igual que con la propiedad intelectual, si no se encuentra protegido por las cláusulas contractuales apropiadas este trabajo original puede verse amenazado.
      


    Separador


    #t_2_6
      .titulo-segundo.color-acento-contenido
        h2 2.6 Riesgos relacionados con la nube

    p.mb-5(data-aos="fade") Durante este componente se identifican las siguientes amenazas no específicas de la computación en la nube, pero que deben considerarse detenidamente a la hora de evaluar el riesgo de un sistema típico basado en la nube, de igual manera, se identifican una serie de vulnerabilidades que pueden ocasionar amenazas y riesgos que afectan los datos y servicios a través de la nube, vea esta información a través de los siguientes puntos:    

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          div
            h5.mb-4 Brechas en la red
            p.mb-0 La pérdida de control, compromiso, divulgación no autorizada, adquisición no autorizada o cualquier suceso similar en el que una persona que no sea un usuario autorizado accede o potencialmente accede a información de identificación personal, o un usuario autorizado accede o potencialmente accede a información de identificación personal para un propósito distinto al autorizado.
            p Es uno de los mayores riesgos, ya que son miles de clientes los que se ven potencialmente afectados al mismo tiempo. Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Configuración deficiente.
              li 
                i.fas.fa-play
                | Vulnerabilidades del sistema o del sistema operativo.
              li 
                i.fas.fa-play
                | Ausencia de aislamiento de los recursos.
              li 
                i.fas.fa-play
                | Software que no es de confianza.      
          div
            h5.text-left.mb-4 Gestión de la red (congestión de la red/fallo en la conexión/uso no óptimo)
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Configuración deficiente.
              li 
                i.fas.fa-play
                | Vulnerabilidades del sistema o del sistema operativo. 
              li 
                i.fas.fa-play
                | Ausencia de aislamiento de los recursos. 
              li 
                i.fas.fa-play
                | Software que no es de confianza.   

          div
            h5.text-left.mb-4 Modificación del tráfico de la red
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Vulnerabilidades del alta de usuarios.
              li 
                i.fas.fa-play
                | Vulnerabilidades de la baja de usuarios.
              li 
                i.fas.fa-play
                | Vulnerabilidades en la codificación de la comunicación.
              li 
                i.fas.fa-play
                | Falta de control en el proceso de evaluación de vulnerabilidad.
          div
            h5.text-left.mb-4 Escalada de privilegios
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Vulnerabilidades del alta de usuarios.
              li 
                i.fas.fa-play
                | Vulnerabilidades de la baja de usuarios.
              li 
                i.fas.fa-play
                | Vulnerabilidades del hipervisor.
              li 
                i.fas.fa-play
                | Funciones y responsabilidades confusas.             
              li 
                i.fas.fa-play
                | Aplicación deficiente de las definiciones de funciones.
              li 
                i.fas.fa-play
                | No aplicación del principio de conocimiento con base a la necesidad justificada (“<em>need-to-know</em>”).

          div
            h5.text-left.mb-4 Ataques de ingeniería social 
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Ausencia de conciencia de seguridad.
              li 
                i.fas.fa-play
                | Vulnerabilidades del alta de usuarios.
              li 
                i.fas.fa-play
                | Ausencia de aislamiento de los recursos.
              li 
                i.fas.fa-play
                | Vulnerabilidades en la codificación de la comunicación. 
              li 
                i.fas.fa-play
                | Procedimientos de seguridad física inadecuados.  
          div
            h5.text-left.mb-4 Pérdida o compromiso de los registros operativos
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Responsabilidad por pérdida de datos.
              li 
                i.fas.fa-play
                | Vulnerabilidades AAA.
              li 
                i.fas.fa-play
                | Vulnerabilidades del alta de usuarios.
              li 
                i.fas.fa-play
                | Vulnerabilidades de la baja de usuarios.             
              li 
                i.fas.fa-play
                | Ausencia de disponibilidad experta.
              li 
                i.fas.fa-play
                | Vulnerabilidades del sistema o del sistema operativo.

          div
            h5.text-left.mb-4 Pérdida o compromiso de los registros de seguridad (manipulación de la investigación experta)
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Responsabilidad por pérdida de datos.
              li 
                i.fas.fa-play
                | Vulnerabilidades AAA.
              li 
                i.fas.fa-play
                | Vulnerabilidades del alta de usuarios.
              li 
                i.fas.fa-play
                | Vulnerabilidades de la baja de usuarios. 
              li 
                i.fas.fa-play
                | Ausencia de disponibilidad experta. 
              li 
                i.fas.fa-play
                | Vulnerabilidades del sistema o del sistema operativo.
          div
            h5.text-left.mb-4 Pérdida o robo de las copias de seguridad
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Procedimientos inadecuados de seguridad física.
              li 
                i.fas.fa-play
                | Vulnerabilidades del alta de usuarios.
              li 
                i.fas.fa-play
                | Vulnerabilidades de la baja de usuarios.

          div
            h5.text-left.mb-4 Acceso no autorizado
            p.text-left Dado que los proveedores de servicios cloud concentran los recursos en grandes centros de datos, y aunque es probable que los controles del perímetro físico sean más potentes, el impacto de la corrupción de estos controles será mayor por vulnerabilidades relacionadas con procedimientos de seguridad física inadecuados.
          div
            h5.text-left.mb-4 Robo de equipos informáticos
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Procedimientos inadecuados de seguridad física.

          div
            h5.text-left.mb-4 Catástrofes naturales
            p.text-left Vulnerabilidades:En términos generales, el riesgo de que se produzcan catástrofes naturales es más bajo, en comparación con las infraestructuras tradicionales, ya que los proveedores de servicios cloud ofrecen múltiples sitios redundantes y rutas de red por defecto.
            p.text-left Vulnerabilidades:
            ul.lista-ul--color.color-acento-contenido
              li 
                i.fas.fa-play
                | Emplazamientos inseguros.
              li 
                i.fas.fa-play
                | Falta de medidas de protección adecuadas (agua, fuego, rayos, emisiones electromagnéticas…).


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
