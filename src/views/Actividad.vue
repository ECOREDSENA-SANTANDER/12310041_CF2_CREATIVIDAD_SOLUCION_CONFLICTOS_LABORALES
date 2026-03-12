<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono='far fa-question-circle', titulo='Actividad didáctica')
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad_Cuestionario
    <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación asertiva para la gestión de conflictos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de la comunicación asertiva y su aplicación en la solución de conflictos en contextos laborales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de la comunicación en el contexto laboral?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmitir información de manera rápida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar comprensión y coordinar acciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Imponer criterios organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el conflicto interpersonal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 2,
          texto:
            '¿Qué ocurre cuando el proceso comunicativo se distorsiona dentro de una organización?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se fortalece el liderazgo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora el clima laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentan los malentendidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se reducen los conflictos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes elementos inicia el proceso de comunicación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Receptor',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Canal',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Código',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Emisor',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de comunicación se relaciona con el tono, el ritmo y las pausas al hablar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verbal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No verbal',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Paraverbal',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Escrita',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 5,
          texto:
            '¿Qué componente de la comunicación permite confirmar si el mensaje fue comprendido?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Retroalimentación',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contexto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Código',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Canal',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 6,
          texto: '¿Cuál es una barrera psicológica de la comunicación?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prejuicios personales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Lenguaje técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ruido ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distancia física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 7,
          texto: '¿Qué caracteriza principalmente la escucha activa?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escuchar sin intervenir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prestar atención y retroalimentar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar el contacto visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el tiempo de conversación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 8,
          texto:
            '¿Qué efecto genera la coherencia entre el lenguaje verbal y no verbal?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambigüedad comunicativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desconfianza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Credibilidad del mensaje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Autoridad jerárquica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 9,
          texto: '¿Qué define a la comunicación asertiva en el trabajo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Expresar ideas con respeto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Imponer opiniones personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar expresar desacuerdos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizar los derechos ajenos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 10,
          texto:
            '¿Qué conducta comunicativa se asocia con imponer criterios sin considerar a los demás?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asertiva',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sumisa',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pasiva',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agresiva',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 11,
          texto: '¿Cuál es una característica de la conducta sumisa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tono firme y claro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evita el conflicto a cualquier costo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Escucha activa constante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Defensa equilibrada de derechos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 12,
          texto:
            '¿Qué derecho asertivo permite establecer límites de forma respetuosa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cometer errores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar de parecer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Decir "no".',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pedir aclaraciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 13,
          texto: '¿Qué relación existe entre asertividad y autoestima?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son independientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La autoestima alta facilita la asertividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La asertividad reduce la autoestima.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No influyen en la comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 14,
          texto:
            '¿Qué metáfora se utiliza para explicar la profundidad de los conflictos laborales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El iceberg',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El círculo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cadena',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El engranaje',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la primera fase del proceso de solución de conflictos?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actuar',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verificar',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hacer',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planear',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 16,
          texto: '¿Qué principio fundamenta el Diagrama de Pareto?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todas las causas tienen el mismo impacto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cambio es progresivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El 80 % de los efectos proviene del 20 % de las causas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La solución depende del consenso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 17,
          texto:
            '¿Qué técnica permite evaluar fuerzas que impulsan o limitan una solución?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagrama de flujo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Análisis del campo de fuerzas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diagrama de Gantt.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagrama de árbol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 18,
          texto:
            '¿Qué criterio evalúa si una solución puede ejecutarse con los recursos disponibles?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eficacia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Beneficios adicionales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realismo',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Impacto económico',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 19,
          texto: '¿Qué tipo de solución busca anticipar conflictos futuros?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Correctiva',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Paliativa',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Provisional',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preventiva',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito central del plan de acción?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar el conflicto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formalizar sanciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Convertir decisiones en acciones concretas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Identificar responsables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sus respuestas reflejan una comprensión clara de la comunicación asertiva y su aplicación en la gestión de conflictos laborales.',
          mensaje_incorrecto:
            'Se invita al aprendiz a leer nuevamente el componente formativo sobre comunicación asertiva para fortalecer la comprensión y mejorar los resultados.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre comunicación asertiva para la gestión de conflictos.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
