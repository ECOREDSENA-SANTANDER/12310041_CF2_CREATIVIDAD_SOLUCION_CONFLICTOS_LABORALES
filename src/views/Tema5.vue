<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de acción

    .bloque-texto-g.bg8.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 El plan de acción es la fase en la que las soluciones acordadas se concretan en acciones específicas, permitiendo pasar del análisis a la intervención efectiva. Dentro de las propuestas para la solución de conflictos, es recomendable elaborar un informe que integre los gráficos utilizados, el análisis de la información, los puntos clave para la toma de decisiones y la definición clara de las acciones a ejecutar. 

    p La forma de presentar y divulgar el plan de acción depende del estilo de la organización y del nivel de complejidad del conflicto. Puede comunicarse mediante:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg2.p-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-5.col-4
              img(src='@/assets/curso/temas/t5/tarj1-1.svg', alt='')
            .col-lg-7.col-md-7.col-8
              p.mb-0 Exposiciones.
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg2.p-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-5.col-4
              img(src='@/assets/curso/temas/t5/tarj1-2.svg', alt='')
            .col-lg-7.col-md-7.col-8
              p.mb-0 Reuniones de equipo.
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg2.p-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-5.col-4
              img(src='@/assets/curso/temas/t5/tarj1-3.svg', alt='')
            .col-lg-7.col-md-7.col-8
              p.mb-0 Informes escritos.
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg2.p-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-5.col-4
              img(src='@/assets/curso/temas/t5/tarj1-4.svg', alt='')
            .col-lg-7.col-md-7.col-8
              p.mb-0 Publicaciones internas. 
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg2.p-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-5.col-4
              img(src='@/assets/curso/temas/t5/tarj1-5.svg', alt='')
            .col-lg-7.col-md-7.col-8
              p.mb-0 Carteleras informativas. 

    .row.justify-content-center.mb-4
      .col-lg-6(data-aos="fade-right")
        p Asimismo, el medio elegido debe ajustarse al tipo de problema: los conflictos individuales suelen abordarse mediante entrevistas, mientras que los conflictos grupales requieren reuniones de equipo u otros espacios colectivos.
        .cajon.color-acento-contenido.bg4.p-4.mb-4
          p.mb-0 En esta etapa resulta fundamental utilizar la creatividad para comunicar el plan de acción de manera clara y motivadora, así como promover la construcción de acuerdos por consenso, lo que favorece el compromiso de todos los participantes y aumenta la probabilidad de éxito en la solución del conflicto.
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/2.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/3.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        img.w-75x.mb-4(src='@/assets/curso/temas/t5/4.svg', alt='')
        p El plan de acción debe concebirse como un instrumento flexible, susceptible de ajustes según las circunstancias, los recursos disponibles o los cambios que se presenten durante su implementación.
        p Es indispensable dejar por escrito los acuerdos alcanzados, ya sea en un acta o en un documento similar, donde se consignen las actividades, los responsables, las fechas de ejecución y de ser posible, la firma de los participantes, con el fin de formalizar los compromisos asumidos.
    
    .mb-5
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 6.
        span Ejemplo para plasmar acuerdos alcanzados
      .tabla-a.color-primario.mb-5
        table
          thead
            tr.bg2
              th Acuerdo
              th Responsable
              th Fecha de entrega
              th Firma
          tbody
            tr
              td.fw-bold.text-start Definir acuerdo alcanzado
              td Director
              td Día/mes/año
              td.ct1 Para diligenciar
            tr
              td.fw-bold.text-start.ct1 Para diligenciar
              td.ct1 Para diligenciar
              td.ct1 Para diligenciar
              td.ct1 Para diligenciar

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Evaluación y retroalimentación

    p La evaluación y la retroalimentación constituyen un componente esencial del plan de acción, ya que no basta con definir las acciones y esperar a que se cumplan. Durante la implementación pueden surgir obstáculos como el olvido de compromisos, la desmotivación, limitaciones de recursos o la aparición de nuevos problemas.
    p.mb-4 Por esta razón, es necesario establecer acciones sistemáticas de seguimiento, entre las que se destacan:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-9.col-lg-6
            img(src='@/assets/curso/temas/t5/tarj2-1.svg', alt='')
        h4.text-center Cierre formal de la reunión
        p.mb-0 Antes de finalizar, comunicar la intención de resumir por escrito los acuerdos y fijar una fecha y hora para una reunión de seguimiento.
      .col-md.tarjeta.color-secundario.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-9.col-lg-6
            img(src='@/assets/curso/temas/t5/tarj2-2.svg', alt='')
        h4.text-center Comunicación posterior
        p.mb-0 Uno o dos días después, enviar un mensaje a los participantes agradeciendo sus aportes y detallando de manera precisa los pasos del plan de acción, las responsabilidades asignadas y los plazos establecidos, solicitando retroalimentación.
      .col-md.tarjeta.color-acento-contenido.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-9.col-lg-6
            img(src='@/assets/curso/temas/t5/tarj2-3.svg', alt='')
        h4.text-center Reunión de seguimiento
        p.mb-0 Programar claramente la fecha, hora y lugar del primer encuentro de seguimiento, reforzando la idea de que el proceso apenas comienza y que la comunicación abierta es clave para resolver y prevenir conflictos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/5.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p El seguimiento puede apoyarse en herramientas de control, como el diagrama de Gantt, listas de chequeo, encuestas, observación directa e indicadores de cumplimiento, las cuales permiten verificar avances, introducir mejoras y garantizar la sostenibilidad de las soluciones acordadas.
        p El plan de acción transforma las decisiones en hechos concretos. Cuando se acompaña de evaluación y retroalimentación permanente, se convierte en un mecanismo eficaz para gestionar conflictos de manera responsable, participativa y orientada al logro de objetivos organizacionales comunes.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.bg2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t5/6.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión y solución de conflictos en el ámbito organizacional exige un enfoque integral que articule el análisis riguroso del problema, la formulación creativa de soluciones, la planificación estructurada de acciones y un seguimiento constante. Cuando estos elementos se desarrollan de manera participativa, con comunicación asertiva y compromiso colectivo, los conflictos dejan de ser una amenaza y se convierten en oportunidades de aprendizaje, mejora continua y fortalecimiento de las relaciones laborales, contribuyendo al logro de los objetivos institucionales y a un clima organizacional saludable.





</template>

<script>
export default {
  name: 'Tema5',
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
