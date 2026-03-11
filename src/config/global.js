export default {
  global: {
    Name: 'Comunicación asertiva para la gestión de conflictos',
    Description:
      'Este componente formativo desarrolla habilidades comunicativas y de pensamiento necesarias para gestionar conflictos laborales de manera asertiva. Aborda el proceso comunicativo, los estilos de conducta, el análisis de problemas y la formulación de soluciones mediante metodologías estructuradas, promoviendo el diálogo, la toma de decisiones informadas y la construcción de acuerdos que fortalezcan el clima organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El proceso comunicativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Asertividad en la comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Problemas en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis del campo de fuerzas',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Formulación de soluciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métodos de resolución de conflictos laborales colectivos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Diagramas para la planeación y solución de conflictos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  /*complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],*/
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'capacidad de expresar ideas y emociones con firmeza y respeto.',
    },
    {
      termino: 'Arbitraje',
      significado:
        'método donde un tercero decide de forma obligatoria el conflicto.',
    },
    {
      termino: 'Barreras de comunicación',
      significado:
        'factores que distorsionan o dificultan la comprensión del mensaje.',
    },
    {
      termino: 'Comunicación no verbal',
      significado: 'expresión mediante gestos, postura y lenguaje corporal.',
    },
    {
      termino: 'Comunicación paraverbal',
      significado: 'forma en que se emite el mensaje: tono, ritmo y volumen.',
    },
    {
      termino: 'Conducta agresiva',
      significado:
        'estilo comunicativo impositivo que ignora los derechos ajenos.',
    },
    {
      termino: 'Conducta asertiva',
      significado:
        'estilo equilibrado que respeta los derechos propios y de otros.',
    },
    {
      termino: 'Conducta sumisa',
      significado:
        'estilo que evita el conflicto y renuncia a los propios derechos.',
    },
    {
      termino: 'Conflicto laboral',
      significado:
        'situación de desacuerdo que afecta relaciones y objetivos laborales.',
    },
    {
      termino: 'Diagrama de Pareto',
      significado: 'herramienta para priorizar causas según su impacto.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'atención consciente que busca comprender y retroalimentar el mensaje.',
    },
    {
      termino: 'Mediación',
      significado: 'intervención de un tercero neutral que facilita acuerdos.',
    },
    {
      termino: 'Negociación',
      significado:
        'proceso de diálogo orientado a alcanzar acuerdos entre partes.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'conjunto organizado de actividades para implementar soluciones.',
    },
    {
      termino: 'Solución de conflictos',
      significado:
        'proceso estructurado para analizar, intervenir y evaluar desacuerdos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Marquez Vela, A. V., Silva Ramirez, J. T., & Yaya Vargas, B. S. (2022). Comunicación asertiva.',
      link: '',
    },
    {
      referencia:
        'Marín Olarte, D., & David Avendaño, L. F. (2022). Mejorando el clima organizacional a través de la comunicación asertiva y el trabajo en equipo.',
      link: '',
    },
    {
      referencia:
        'Ramos, J. (2023). Manual práctico de comunicación asertiva. XinXii.',
      link: '',
    },
    {
      referencia:
        'Presley, T. (2023). Comunicación asertiva: desarrolle sus habilidades de comunicación asertiva y aprenda instantáneamente cómo defenderse, comunicarse efectivamente y aumentar su confianza mientras gana el respeto de los demás. Timothy Presley.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alexandra Romero López',
          cargo: 'Instructora virtual',
          centro:
            'Centro de Tecnologías para la Construcción y la Madera - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
