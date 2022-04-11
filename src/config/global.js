export default {
  global: {
    componenteFormativo:
      'Gestión del riesgo y seguridad en servicios en la nube',
    descripcionCurso:
      'Los procesos tecnológicos de las organizaciones requieren aliarse con cambios y mejoras tecnológicas, la computación en la nube es el factor diferenciador y necesario de  mayor adopción y migración de servicios, los datos en la nube traen cambios desde lo técnico, económico, legislativo y de acceso; es necesario conocer cuáles son esos riesgos que pueden afectar su integridad, confidencialidad, disponibilidad y protección.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Seguridad en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Distribución de las responsabilidades en seguridad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Perspectivas según los tipos de servicio y modelos cloud',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estrategia y responsabilidad en protección de datos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Acuerdos del nivel de servicio',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Gestión de las organizaciones basadas en el riesgo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodología de gestión del riesgo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Riesgos políticos y administrativos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Riesgos técnicos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Riesgos legales',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Riesgos relacionados con la nube',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aspectos profesionales: protección de datos, cloud computing y sistemas de gestión. (2012). <em>Cláusulas contractuales en entornos de cloud computing</em>. [Blog].',
      link:
        'http://www.aspectosprofesionales.info/2012/10/clausulas-contractuales-en-entornos-de.html',
    },
    {
      referencia:
        'Brun, L. y Bellanova, R. (2018). <em>The role of the European Union Agency for Network and Information Security (ENISA) in the governance strategies of European cybersecurity</em>. Université Catholique de Louvain.',
    },
    {
      referencia:
        'Ferma. (2003). <em>Estándares de gerencia de riesgos</em>. Ferma. ',
      link:
        'https://www.theirm.org/media/6836/rm_standard_spanish_15_11_04-1.pdf',
    },
    {
      referencia:
        'ISO/IEC 27005:2018(en) Information technology — Security techniques — Information security risk management. (2021). <em>Foreword.</em>',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:27005:ed-3:v1:en',
    },
    {
      referencia: 'ISO 31000. (2021). <em>Risk management.</em>',
      link: 'https://www.iso.org/iso-31000-risk-management.html',
    },
    {
      referencia:
        'Samarati, P., Di Vimercati, S., Murugesan, S. & Bojanova, I. (2016). Cloud security: Issues and concerns. <em>Encyclopedia on cloud computing</em>, p. 1-14.',
    },
    {
      referencia:
        'Swain, B., Pohlman, M. y Posey, L. (2010). <em>Cloud Security Alliance GRC Stack Training.</em>',
    },
  ],
  glosario: [
    {
      termino: '<em>Accountability</em>',
      significado:
        'Habilidad de asumir responsabilidades y su importancia en las empresas.',
    },
    {
      termino: 'Amenaza <em>(Threat)</em>',
      significado:
        'Es la causa potencial de un incidente no deseado, que puede provocar daños a un sistema o a la organización.',
    },
    {
      termino: '<em>Blockchain</em>',
      significado:
        'Economía de bloques es una tecnología que permite crear redes de dispositivos sin la necesidad de un servidor central y localizado para conectarlos entre sí. Podría decirse que funciona como un libro de cuentas donde se registran las operaciones de compra, venta o cualquier transacción.',
    },
    {
      termino: '<em>CIO (Chief Security Officer</em>',
      significado: 'Responsable del área  de informática.',
    },
    {
      termino: 'CISO',
      significado:
        'Responsable de la seguridad de la información, su función principal es evaluar las prácticas de seguridad del proveedor de servicios en la nube, en relación con el tipo de datos que se trate y la criticidad del servicio para el negocio.',
    },
    {
      termino: '<em>Compliance</em>',
      significado:
        'Es, según el Comité de Basilea, “una función independiente que identifica, asesora, alerta, monitorea y reporta los riesgos de cumplimiento en las organizaciones”. Además, también se entiende como el riesgo de recibir sanciones, sufrir pérdidas financieras o de reputación.',
    },
    {
      termino: 'DDoS',
      significado: 'Ataques de denegación de servicios distribuidos.',
    },
    {
      termino: '<em>Hacking</em>',
      significado:
        'Es el conjunto de técnicas a través de las cuales se accede a un sistema informático, vulnerando las medidas de seguridad establecidas originalmente.',
    },
    {
      termino: 'ISO 27000',
      significado:
        'Las normas que forman la serie ISO/IEC-27000 son un conjunto de estándares creados y gestionados por la Organización Internacional para la Estandarización (ISO) y la Comisión Electrónica Internacional (IEC). Ambas organizaciones internacionales están participadas por multitud de países, lo que garantiza su amplia difusión, implantación y reconocimiento en todo el mundo. <br> <br>Las series 27000 están orientadas al establecimiento de buenas prácticas en relación con la implantación, mantenimiento y gestión del Sistema de Gestión de Seguridad de la Información (SGSI).',
    },
    {
      termino: '<em>Malware</em>',
      significado: '<em>Software</em> malicioso.',
    },
    {
      termino: 'ODP',
      significado:
        'Oficial de datos personales, persona o área responsable de la atención de peticiones, consultas y reclamos, ante la cual el titular de la información puede ejercer sus derechos a conocer, actualizar, rectificar y suprimir el dato y revocar la autorización.',
    },
    {
      termino: '<em>Randsomware</em>',
      significado:
        'El <em>malware</em> de rescate o <em>ransomware</em>, es un tipo de <em>malware</em> que impide a los usuarios acceder a su sistema o a sus archivos personales y que exige el pago de un rescate para poder acceder de nuevo a ellos.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Se define como el efecto de la incertidumbre sobre los objetivos.',
    },
    {
      termino: 'Vulnerabilidad <em>(Vulnerability)</em>',
      significado:
        'Es la debilidad de un activo o control que puede ser explotada por una o más amenazas.',
    },
    {
      termino: 'XaaS',
      significado: 'Despliegue de servicios en la nube.',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 1377 de 2013. [Presidencia de la República de Colombia]. Por el cual se reglamenta parcialmente la Ley 1581 de 2012. Junio 27 de 2013. ',
      tipo: 'Decreto',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1276081',
    },
    {
      texto:
        'Red Iberoamericana de Protección de Datos. (2021). Legislación.  Red Iberoamericana. ',
      tipo: 'Página web',
      link: 'https://www.redipd.org/es/legislacion?nid=83',
    },
    {
      texto:
        'Superintendencia de Industria y Comercio. Colombia. (s.f.). Guía para la implementación del principio de responsabilidad demostrada. Superintendencia de Industria y Comercio. ',
      tipo: 'Documento',
      link:
        'https://www.sic.gov.co/sites/default/files/files/Publicaciones/Guia-Accountability.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Instructor experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
