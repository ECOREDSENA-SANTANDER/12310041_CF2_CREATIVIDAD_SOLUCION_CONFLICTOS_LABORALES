<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Formulación de soluciones

    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0 
        p Una vez identificadas y analizadas las causas principales del problema, se pasa a la formulación de soluciones, en donde se deben diseñar alternativas de intervención que permitan resolver el conflicto o reducir significativamente sus efectos. En este momento, el uso de técnicas de creatividad resulta fundamental, ya que favorece la generación de ideas innovadoras, viables y ajustadas a la realidad de la organización.
        .cajon.color-primario.bg1.p-4.mb-4
          p.mb-0 Formular soluciones no implica elegir la primera opción disponible, sino evaluar diferentes alternativas, compararlas y seleccionar aquella que ofrezca mayores beneficios con el menor nivel de riesgo.
      .col-lg-6.col-md-8
        img(src='@/assets/curso/temas/t4/1.png', alt='')
      
    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Criterios para elegir una solución

    p Para que una solución sea adecuada, es recomendable valorarla a partir de los siguientes criterios:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Criterios para evaluar soluciones a un problema
        .tabla-a.color-acento-contenido.t2
          table
            thead
              tr
                th.w-25 Criterio
                th Descripción por criterio
            tbody
              tr
                td Realismo
                td La solución debe poder llevarse a la práctica con los recursos humanos, técnicos y organizacionales disponibles.
              tr
                td Viabilidad a corto plazo
                td Debe ser posible implementarla en un tiempo razonable, sin depender de condiciones externas difíciles de controlar.
              tr
                td Eficacia
                td La alternativa debe responder directamente a las causas del problema y contribuir de manera clara a su solución.
              tr
                td Aspectos económicos
                td La solución debe ser financieramente sostenible y acorde con el presupuesto de la organización.
              tr
                td Beneficios adicionales
                td Debe generar impactos positivos complementarios, como la mejora del clima laboral o de los procesos internos.

    p.mb-5 La alternativa de solución seleccionada debe cumplir los objetivos planteados, minimizar los riesgos asociados y evitar la aparición de nuevos conflictos.
    
    .subt2.mb-4(data-aos="fade-right")
      h3.mb-0.px-4 Tipos de soluciones

    .bg-img2.tarjeta.p-4.mb-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-md-6.col-9
          img(src='@/assets/curso/temas/t4/2.png', alt='')
        .col-lg-8
          p Las soluciones pueden clasificarse según su alcance y finalidad:
          SlyderF(columnas="col-xl-4 col-md-6")
            .tarjeta.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-8.col-lg-8
                  img(src='@/assets/curso/temas/t4/tarj1-1.svg' alt='')
              p #[b Provisional:] se aplica de manera temporal mientras se identifican con mayor precisión las causas del problema.
            .tarjeta.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-8.col-lg-8
                  img(src='@/assets/curso/temas/t4/tarj1-2.svg' alt='')
              p #[b Adaptativa:] permite convivir con efectos tolerables cuando las causas no pueden eliminarse completamente.
            .tarjeta.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-8.col-lg-8
                  img(src='@/assets/curso/temas/t4/tarj1-3.svg' alt='')
              p #[b Correctiva:] actúa directamente sobre las causas conocidas del problema.
            .tarjeta.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-8.col-lg-8
                  img(src='@/assets/curso/temas/t4/tarj1-4.svg' alt='')
              p #[b Preventiva:] anticipa situaciones futuras, reduciendo la probabilidad de que el conflicto ocurra.
            .tarjeta.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-6.col-md-8.col-lg-8
                  img(src='@/assets/curso/temas/t4/tarj1-5.svg' alt='')
              p #[b Paliativa:] busca mitigar de forma inmediata los efectos negativos, sin eliminar la causa raíz.
              
    p Esta clasificación permite ajustar la respuesta al tipo de conflicto, evitando soluciones desproporcionadas o ineficaces.
  

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Métodos de resolución de conflictos laborales colectivos

    p Los conflictos laborales de tipo colectivo requieren un tratamiento especial, ya que suelen estar relacionados con condiciones salariales, jornadas laborales, cumplimiento normativo o cambios en el entorno económico y tecnológico. En estos casos, el objetivo principal es alcanzar acuerdos, evitando medidas de presión que deterioren las relaciones laborales.

    .bg-img2.tarjeta.p-4.mb-5(data-aos="fade-down")
      .bg-white.tarjeta.p-md-4.p-3
        PasosB.color-secundario
          .row.justify-content-center.align-items-center(titulo="Negociación")
            .col-lg-5.col-11
              h4 Negociación
              p Implica un diálogo directo entre las partes, con la voluntad de llegar a un acuerdo. Cuando el proceso se vuelve complejo, puede recurrirse a una negociación asistida, en la que un experto acompaña el proceso, aporta análisis y propone alternativas, sin imponer decisiones.
            .col-lg-6.col-md-8.col-11
              img(src='@/assets/curso/temas/t4/pasos1-1.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Mediación")
            .col-lg-5.col-11
              h4 Mediación
              p Se basa en la intervención de un tercero neutral, cuyo rol es facilitar la comunicación y acercar posiciones. El mediador no decide, sino que ayuda a las partes a construir su propio acuerdo.
              p Habilidades clave del mediador:
              ul.lista-ul--color.fa-lista
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Mantener credibilidad y neutralidad.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Facilitar la comunicación entre las partes.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Ayudar a clarificar intereses y posiciones.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Detectar señales de acuerdo.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Actuar con discreción y objetividad.
            .col-lg-6.col-md-8.col-11
              img(src='@/assets/curso/temas/t4/pasos1-2.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Arbitraje")
            .col-lg-5.col-11
              h4 Arbitraje
              p El arbitraje se utiliza cuando la negociación y la mediación no han sido suficientes. En este caso, una autoridad competente interviene y define una solución obligatoria para las partes. Puede ser voluntario u obligatorio y suele aplicarse en conflictos laborales de alta complejidad.
              p Acción básica del árbitro:
              ul.lista-ul--color.fa-lista
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Explicar su rol y el problema.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Presentar las medidas de control.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Exponer las consecuencias de la situación.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Emitir una decisión que debe ser acatada.
            .col-lg-6.col-md-8.col-11
              img(src='@/assets/curso/temas/t4/pasos1-3.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Manejo integrado del conflicto

    p El manejo efectivo de un conflicto implica un proceso progresivo:

    .row.justify-content-center.mb-5
      .col-lg-6
         LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Evaluación")
            ul.lista-ul--color.fa-lista
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Analizar la situación con calma.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Recolectar información relevante.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Identificar límites y puntos de negociación.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Reconocer los intereses de la otra parte.
          .div(numero="2" titulo="Aceptación")
            ul.lista-ul--color.fa-lista
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Escuchar activamente.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Comprender el punto de vista ajeno.
          .div(numero="3" titulo="Actitud")
            ul.lista-ul--color.fa-lista
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Evitar prejuicios y estereotipos.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Mantener objetividad y flexibilidad.
          .div(numero="4" titulo="Acción")
            ul.lista-ul--color.fa-lista
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Cuidar el lenguaje verbal y no verbal.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Centrarse en el problema, no en las personas.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Evitar promesas incumplibles.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Plantear soluciones cooperativas.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Confirmar y clarificar la información.
          .div(numero="5" titulo="Análisis")
            ul.lista-ul--color.fa-lista
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Verificar que se consideraron todos los intereses.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Resumir acuerdos y decisiones.
              li
                i.fas.fa-puzzle-piece
                span.mb-0 Ajustar procedimientos para implementar cambios.
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/3.png', alt='')

    p Este enfoque integral favorece soluciones #[b sostenibles y aceptadas por las partes].

    .row.bgc-1.align-items-center.p-2.p-md-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center        
            .col-12
              p Para ampliar la información por favor visite el siguiente video:
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/6A49I1EIbwQ?si=_QDpAjTLhkr5ICdx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Conflicto en la comunicación y sus soluciones
    
    //.tarjeta.bg-img1.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t1/cta.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Video - Conflicto en la comunicación y sus soluciones. 
              p.mb-0 Para ampliar la información por favor visite el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/A_qgEONAKhc')" target="_blank")
                span Abrir video
                i.fas.fa-file-video


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Diagramas para la planeación y solución de conflictos

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t4/4.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 Los siguientes diagramas constituyen herramientas clave de apoyo en la solución de conflictos, ya que permiten organizar la información, planear acciones y visualizar de manera clara las alternativas de intervención, facilitando la toma de decisiones y la implementación de soluciones efectivas.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg8")
          .row(titulo="Diagrama de flujo")
            .col-lg-11
              p El diagrama de flujo representa de manera gráfica la secuencia lógica de actividades y decisiones necesarias para resolver un problema. Utiliza símbolos estandarizados que permiten visualizar el proceso completo.
              p Ventajas principales:
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Facilita la comprensión organizada de la información.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Permite detectar oportunidades de mejora.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Ayuda a definir límites y responsabilidades.
          .row(titulo="Diagrama de Gantt")
            .col-lg-11
              p El diagrama de Gantt es un cronograma que muestra las actividades del proyecto en función del tiempo. Permite visualizar qué se debe hacer, cuándo y quién es responsable.
              p Se utiliza especialmente para:
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Planes con varias actividades.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Control del avance del proyecto.
                li
                  i.fas.fa-puzzle-piece
                  span.mb-0 Asignación clara de responsabilidades y tiempos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/5.png', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 PERT: Técnica de Evaluación y Revisión de Programas (#[em Program Evaluation and Review Technique])

    p.mb-4 La técnica PERT se emplea en proyectos complejos o de alto costo. Representa la secuencia de actividades, identifica dependencias y permite determinar la ruta crítica, es decir, el tiempo mínimo necesario para completar el proyecto.
    
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .bg1.p-4.py-lg-5.h-100
          p Esta herramienta ayuda a: 
          ul.lista-ul--color.color-primario.fa-lista
            li
              i.fas.fa-puzzle-piece
              span.mb-0 Anticipar cuellos de botella.
            li
              i.fas.fa-puzzle-piece
              span.mb-0 Optimizar tiempos y recursos.
            li
              i.fas.fa-puzzle-piece
              span.mb-0 Tomar decisiones estratégicas en proyectos de gran escala.
          p.mb-0 La formulación de soluciones no es un acto improvisado, sino un proceso estructurado que combina análisis, creatividad, negociación y planificación. El uso adecuado de métodos y herramientas incrementa la probabilidad de resolver los conflictos de manera eficaz, sostenible y alineada con los objetivos organizacionales.
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/6.png', alt='')




</template>

<script>
export default {
  name: 'Tema4',
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
