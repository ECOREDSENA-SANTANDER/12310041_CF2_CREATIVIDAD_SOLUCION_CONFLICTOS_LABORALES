<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La forma en que las personas comunican sus ideas, emociones y puntos de vista desempeña un papel decisivo en la gestión de los conflictos laborales. No basta con tener argumentos sólidos o propuestas bien estructuradas; el impacto real de la comunicación depende, en gran medida, de cómo se expresan. Una comunicación inadecuada puede intensificar tensiones y malentendidos, mientras que una comunicación clara y consciente puede abrir espacios de diálogo, comprensión y búsqueda conjunta de soluciones.
        p.mb-0 La comunicación funciona como un sistema esencial que permite la circulación de la información, la articulación entre áreas, la coordinación de acciones y el mantenimiento del equilibrio interno. Cuando este proceso se interrumpe, se distorsiona o se debilita, surgen dificultades que afectan el clima laboral, las relaciones interpersonales y el cumplimiento de los objetivos institucionales. Por esta razón, comunicarse con claridad, coherencia y oportunidad no es un aspecto secundario del trabajo, sino una condición fundamental para su adecuado desarrollo. 

    p.mb-4 Por ello, la comunicación asertiva adquiere especial relevancia. Ser asertivo implica expresar ideas, necesidades y emociones de manera firme y respetuosa, evitando actitudes agresivas o pasivas. Esta forma de comunicación favorece relaciones laborales equilibradas y constructivas, incluso en situaciones de desacuerdo o conflicto y contribuye al fortalecimiento de entornos de trabajo más colaborativos y saludables. 

</template>

<script>
export default {
  name: 'Introduccion',
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
