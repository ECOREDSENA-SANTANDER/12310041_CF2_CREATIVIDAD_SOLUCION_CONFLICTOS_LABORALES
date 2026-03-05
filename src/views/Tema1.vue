<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El proceso comunicativo
  
    p La comunicación es un proceso intencional mediante el cual una persona transmite un mensaje con el propósito de generar comprensión, compartir significados o influir en la conducta de otra. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Este proceso no ocurre de manera automática, se construye a partir de la interacción, la interpretación del mensaje y la respuesta que se genera.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t1/2.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 Comprender la comunicación como proceso permite reconocer que intervienen múltiples factores que pueden facilitar o dificultar el entendimiento. Cada mensaje se inicia, se desarrolla y concluye, pero su efecto depende de cómo es codificado, transmitido, recibido e interpretado. Por ello, mejorar la comunicación exige analizar no solo lo que se dice, sino ubicar diferentes factores que intervienen.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1. 
          span Factores que influyen en el proceso de comunicación
        figure
          img(src='@/assets/curso/temas/t1/fig1.svg', alt='Se representa el proceso de comunicación como una dinámica interrelacionada en la que intervienen cuatro factoresclave: cómo se transmite el mensaje, cuándo se expresa, por qué se comunica y en qué contexto se dice. Estos elementos se articulan de manera continua e influyen directamente en la comprensión y efectividad del mensaje.')
    
    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Tipos de comunicación

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t1/3.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La comunicación se manifiesta principalmente a través de #[b tres formas que actúan de manera complementaria]: la comunicación verbal, la comunicación no verbal y la comunicación paraverbal. Cada una, se integra en el proceso comunicativo y en conjunto, influyen en la interpretación y el significado del mensaje:
    
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-9.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')
        h4.text-center Comunicación verbal
        p.mb-0 Utiliza palabras, ya sea de forma oral o escrita, para estructurar ideas, argumentos y explicaciones.
      .col-md.tarjeta.color-secundario.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-9.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')
        h4.text-center Comunicación no verbal
        p.mb-0 Se expresa mediante gestos, miradas, posturas, movimientos corporales, imágenes y otros signos que acompañan o refuerzan el mensaje verbal.
      .col-md.tarjeta.color-acento-contenido.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-9.col-lg-6
            img(src='@/assets/curso/temas/t1/tarj1-3.svg', alt='')
        h4.text-center Comunicación paraverbal
        p.mb-0 Integra la forma en que se emite el mensaje verbal, a través del tono de voz, la entonación, el ritmo, el volumen, las pausas y los silencios, influyendo en la interpretación y el significado del mensaje.

    p.mb-4 Los tres tipos de comunicación influyen de manera directa en la interpretación del mensaje. En muchas situaciones, los componentes no verbales y paraverbales adquieren mayor relevancia que las palabras, especialmente cuando existe incoherencia entre lo que se dice y la forma en que se expresa.
    
    .row.bgc-1.align-items-center.p-2.p-md-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center        
            .col-12
              p Para complementar toda esta información sobre la comunicación, se invita al aprendiz a visitar el siguiente video:
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/uXr6LhZIwSc?si=qicfl-gr03IbLtDj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Clasificación de la comunicación en las empresas


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Elementos de la comunicación

    p.mb-4 Para comprender cómo se construye la comunicación, es importante identificar los componentes que participan en este proceso y su función.

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Elementos y funciones de la comunicación
        .tabla-a.color-acento-contenido.t2
          table
            thead
              tr
                th Elemento
                th Función dentro de la comunicación
            tbody
              tr
                td Emisor
                td Origina el mensaje.
              tr
                td Mensaje
                td Información transmitida.
              tr
                td Receptor
                td Interpreta el mensaje.
              tr
                td Canal
                td Medio de transmisión.
              tr
                td Código
                td Sistema de signos compartidos.
              tr
                td Contexto
                td Situación comunicativa.
      .col-lg-5.mb-4(data-aos="fade-left")
        img.mb-4(src='@/assets/curso/temas/t1/4.png', alt='')
        p A estos se suman otros factores determinantes, como el #[b ruido], que altera o distorsiona el mensaje; los #[b filtros], asociados a creencias, experiencias y emociones de los participantes, todo esto concluye con la #[b retroalimentación], la cual permite confirmar si el mensaje fue comprendido. Identificar fallas en cualquiera de estos componentes ayuda a detectar el origen de los problemas de comunicación.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Barreras de la comunicación

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4.mb-4.mb-lg-0
        .bg3.p-4.h-100
          p.mb-0 En todo proceso de comunicación es normal que parte de la información se pierda o se distorsione, ya que el mensaje no siempre se transmite ni se interpreta de manera exacta; esta situación, se agrava cuando aparecen diferentes barreras que interfieren en la comunicación, pues existen barreras psicológicas, como los prejuicios, estereotipos, emociones intensas o el miedo a expresarse, influyen tanto en la forma en que una persona comunica como en la manera en que interpreta lo que recibe. 
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/5.svg', alt='')
      .col-lg-5
        img.w-75x.mb-4(src='@/assets/curso/temas/t1/6.svg', alt='')
        p Por su parte, las barreras semánticas se presentan cuando el lenguaje utilizado es confuso, excesivamente técnico o demasiado extenso, lo que dificulta la comprensión del mensaje. Por tanto, las barreras físicas están relacionadas con el entorno, como el ruido, la distancia, el espacio o condiciones inadecuadas del lugar donde ocurre la comunicación. Reconocer la existencia de estas barreras permite entender por qué los mensajes no siempre llegan como se espera y facilita la implementación de estrategias que ayuden a mejorar la claridad, la comprensión y la efectividad de la comunicación.

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/7.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg1.p-4.p-lg-5.h-100
          h4.mb-lg-4 Ejemplo pedagógico de estas barreras:
          p.mb-lg-4 Supongamos que un docente explica una actividad utilizando un lenguaje muy técnico y extenso. Algunos estudiantes no comprenden completamente las instrucciones, lo que constituye una #[b barrera semántica]. 
          p.mb-lg-4 Al mismo tiempo, uno de los participantes se siente inseguro de preguntar por temor a equivocarse o a ser juzgado por sus compañeros, lo que refleja una #[b barrera psicológica]. 
          p.mb-lg-4 Además, el salón tiene ruido externo o mala acústica, dificultando que todos escuchen con claridad, lo que corresponde a una #[b barrera física]. 
          p.mb-lg-4 Como resultado, el mensaje no llega de forma clara y se presentan errores en el desarrollo de la actividad. 
          h5 Este ejemplo expone cómo reconocer las barreras de la comunicación permite ajustar el lenguaje, mejorar el ambiente y generar un clima de confianza para asegurar una comunicación más efectiva.

          
    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Cómo mejorar la comunicación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t1/8.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 Mejorar la comunicación en contextos laborales implica fortalecer dos aspectos fundamentales: la #[b escucha activa] y el manejo consciente de la #[b comunicación no verbal]. Escuchar activamente supone prestar atención real al mensaje, interpretar su significado completo y responder de manera adecuada, generando confianza y cooperación.
        p Así mismo, la comunicación no verbal (mirada, tono de voz, gestos y postura) refuerza la credibilidad del mensaje y refleja el estado emocional de quien comunica.
        p La coherencia entre lo que se dice y lo que se expresa corporalmente es clave para construir relaciones laborales sanas, prevenir conflictos y gestionar de forma efectiva las situaciones de desacuerdo.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/9.svg', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-2.ps-lg-4.pe-lg-5 Aplicación práctica de la escucha activa y la comunicación no verbal 

    p.mb-4 La escucha activa y la comunicación no verbal se fortalecen cuando se llevan a la práctica en situaciones cotidianas del entorno académico y laboral. En una conversación de trabajo, por ejemplo, practicar la escucha activa implica prestar atención plena al interlocutor, evitar distracciones, identificar las ideas principales y ofrecer retroalimentación clara mediante resúmenes o preguntas que confirmen la comprensión del mensaje. 

    .mb-5
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Acciones prácticas de la escucha activa y la comunicación no verbal
      .tabla-a.color-acento-contenido.t4
        table
          thead
            tr
              th Aspecto de la comunicación
              th Acción concreta
              th Efecto en la interacción
          tbody
            tr
              td.bg9.fw-bold(rowspan='3') Escucha activa
              td Prestar atención plena y evitar distracciones.
              td Mejora la claridad del mensaje.
            tr
              td Confirmar la comprensión mediante retroalimentación.
              td Demuestra respeto y genera confianza.
            tr
              td Mantener una actitud receptiva.
              td Reduce tensiones innecesarias.
            tr
              td.bg9.fw-bold(rowspan='4') Comunicación no verbal
              td Mantener contacto ocular adecuado.
              td Transmite interés y atención.
            tr
              td Adoptar una postura abierta.
              td Refuerza la disposición al diálogo.
            tr
              td Modular el tono de voz.
              td Expresa seguridad y coherencia emocional.
            tr
              td Controlar gestos y expresiones.
              td Facilita la interpretación de emociones.
            tr
              td.bg9.fw-bold Comunicación integral
              td Alinear el mensaje verbal y no verbal.
              td Favorece un clima de diálogo y cooperación.

    p.mb-4 En la práctica, integrar la escucha activa con una comunicación no verbal coherente permite resolver malentendidos, prevenir conflictos y fortalecer las relaciones interpersonales. Por ello, desarrollar estas habilidades requiere atención consciente, empatía y disposición para mejorar continuamente la forma en que se interactúa con los demás.

    .row.bgc-1.align-items-center.p-2.p-md-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center        
            .col-12
              p Para complementar toda esta información sobre la comunicación, se invita al aprendiz a visitar el siguiente video:
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/WYjKtF3AJBY?si=yMJDNjKpz_t6ggQr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Comunicación en el equipo de trabajo
    
    //.tarjeta.bg-img1.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t1/cta.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Video - Comunicación en el equipo de trabajo.
              p.mb-0 Para complementar toda esta información sobre la comunicación, se invita al aprendiz a visitar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/hNCY0m6VgRs')" target="_blank")
                span Abrir video
                i.fas.fa-file-video


  </template>

<script>
export default {
  name: 'Tema1',
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
