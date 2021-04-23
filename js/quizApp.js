var app = new Vue({
  el: '#quiz-app',
  template: '#checkbox-template',
  data: function() {
    return {
      vitamins: {k: 0.12, a: 0.9, d: 0.015, e: 15},
      woman: null,
      pregnant: null,
      submitted: false,
      language: new FlowForm.LanguageModel({
        shiftKey: 'Shift',
        ok: 'Ok',
        continue: 'Continuar',
        skip: 'Omitir',
        pressEnter: 'Presiona :enterKey',
        multipleChoiceHelpText: 'Escoge cuantas respuestas quieras',
        multipleChoiceHelpTextSingle: 'Escoge solo una respuesta',
        otherPrompt: 'Otro',
        placeholder: 'Escribe tu respuesta aquí...',
        submitText: 'Terminar',
        longTextHelpText: ':shiftKey + :enterKey para nueva línea.',
        prev: 'Anterior',
        next: 'Siguiente',
        percentCompleted: ':percent% completado',
        invalidPrompt: 'Por favor, rellena el campo correctamente',
        thankYouText: '¡Gracias!',
        successText: 'Tu quiz ha terminado.',
        ariaOk: 'Presiona para continuar',
        ariaRequired: 'Esta pregunta es requerida',
        ariaPrev: 'Pregunta anterior',
        ariaNext: 'Siguiente pregunta',
        ariaSubmitText: 'Presiona para terminar',
        ariaMultipleChoice: 'Presiona :letter para seleccionar',
        ariaTypeAnswer: 'Escribe tu respuesta aquí',
      }),
      questions: [
          new FlowForm.QuestionModel({
            id: 'gender',
            title: '¿Cuál es su sexo?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultiplePictureChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Mujer',
                imageSrc: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png',
                imageAlt: 'woman',
                value: 'mujer'
              }),
              new FlowForm.ChoiceOption({
                label: 'Hombre',
                imageSrc: 'https://esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-9.png',
                imageAlt: 'man',
                value: 'hombre'
               })
            ],
            jump: {
              mujer: 'embarazada',
              hombre: 'age'
            }
          }),
          new FlowForm.QuestionModel({
            id: 'embarazada',
            title: '¿Se encuentra embarazada?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Sí',
                value: 'si'
              }),
              new FlowForm.ChoiceOption({
                label: 'No',
                value: 'no'
               })
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'age',
            title: '¿En qué rango de edad se encuentra?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: '4 a 8 años', 
                value: '1'
              }),
              new FlowForm.ChoiceOption({
                label: '9 a 13 años', 
                value: '2'
               }),
              new FlowForm.ChoiceOption({
                label: '14 a 18 años', 
                value: '3'
              }), 
              new FlowForm.ChoiceOption({
                label: 'Mayor de 18 años', 
                value: '4'
              })
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'ejercicio',
            title: '¿Cuál es tu nivel de actividad física diaria?:',
            type: FlowForm.QuestionType.MultipleChoice,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Nulo'
              }),
              new FlowForm.ChoiceOption({
                label: 'Bajo'
              }),
              new FlowForm.ChoiceOption({
                label: 'Moderado'
              }),
              new FlowForm.ChoiceOption({
                label: 'Activo'
              }),
              new FlowForm.ChoiceOption({
                label: 'Deportista'
              }),
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'vitaminab',
            title: '¿Tiene insuficiencia de vitamina D?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Sí',
                value: 'Si'
              }),
              new FlowForm.ChoiceOption({
                label: 'No',
                value: 'No'
               })
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'porque',
            title: '¿Cuál de estas frases representa mejor el por qué se va a suplementar?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Poseo una enfermedad y quiero mejorar mis síntomas',
                value: 'enfermedad'
              }),
              new FlowForm.ChoiceOption({
                label: 'Soy deportista y quiero elevar mi consumo vitamínico',
                value: 'deportista'
              }),
              new FlowForm.ChoiceOption({
              label: 'Sufro de diversos síntomas que afectan el desarrollo de mi día a día',
              value: 'sintomas'
              })
            ],
            jump: {
              enfermedad: 'enfermedad',
              deportista: 'deportista',
              sintomas: 'sintomas'
            }
          }),
          new FlowForm.QuestionModel({
            id: 'enfermedad',
            title: '¿Cuál de estas deficiencias posee o se encuentra en alguna de estas situaciones?',
            helpText: 'En caso no se encuentre entre las opciones, marque "Ninguna".',
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: true,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                value: '1',
                label: 'Problemas de coagulación'
              }),
              new FlowForm.ChoiceOption({
                value: '2',
                label: 'Hematomas'
              }),
              new FlowForm.ChoiceOption({
                value: '3',
                label: 'Dolor de huesos'
              }),
              new FlowForm.ChoiceOption({
                value: '4',
                label: 'Debilidad muscular'
              }),
              new FlowForm.ChoiceOption({
                value: '5',
                label: 'Problemas cardiacos'
              }),
              new FlowForm.ChoiceOption({
                value: '6',
                label: 'Problemas de visión'
              }),
              new FlowForm.ChoiceOption({
                value: '7',
                label: 'Xeroftalmia'
              }),
              new FlowForm.ChoiceOption({
                value: '8',
                label: 'Anemia'
              }),
              new FlowForm.ChoiceOption({
                value: '9',
                label: 'Periodo de lactancia'
              }),
              new FlowForm.ChoiceOption({
                value: '10',
                label: 'Dolor en las articulaciones'
              }),
              new FlowForm.ChoiceOption({
                value: '11',
                label: 'Fracturas'
              }),
              new FlowForm.ChoiceOption({
                value: '12',
                label: 'Cansancio'
              }),
              new FlowForm.ChoiceOption({
                value: '13',
                label: 'Depresión'
              }),
              new FlowForm.ChoiceOption({
                value: '14',
                label: 'Debilidad muscular'
              }),
              new FlowForm.ChoiceOption({
                value: '15',
                label: 'Problema de visión'
              }),
              new FlowForm.ChoiceOption({
                value: '16',
                label: 'Pérdida del equilibrio'
              }),
              new FlowForm.ChoiceOption({
                value: '17',
                label: 'Sensibilidad en las extremidades'
              }),
              new FlowForm.ChoiceOption({
                value: '18',
                label: 'Problemas de coordinación'
              }),
              new FlowForm.ChoiceOption({
                value: 'Ninguna',
                label: 'Ninguna'
              })
            ],
            jump: {
              Ninguna: 'sintomas',
              _other: 'email'
            }
          }),
          new FlowForm.QuestionModel({
            id: 'deportista',
            title: '¿Cuántas horas semanales de ejercicio realizas?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: '1 a 4 horas',
                value: '1 a 4'
              }),
              new FlowForm.ChoiceOption({
                label: '5 a 8 h horas',
                value: '5 a 8'
              }),
              new FlowForm.ChoiceOption({
              label: '9 a 12 horas',
              value: '9 a 12'
              }),
              new FlowForm.ChoiceOption({
                label: '13 a 15 horas',
                value: '13 a 15'
              }),
              new FlowForm.ChoiceOption({
                label: 'Más de 15 horas',
                value: 'mas de 15'
              })
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'deportista2',
            title: '¿Qué tipo de ejercicio realizas?',
            helpText: 'Marque las alternativas que describan mejor su entrenamiento',
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: true,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Cardiovascular  (correr, trotar, trekking)',
                value: 'Cardiovascular'
              }),
              new FlowForm.ChoiceOption({
                label: 'Tennis',
                value: 'Tennis'
              }),
              new FlowForm.ChoiceOption({
                label: 'Basketball',
                value: 'Basketball'
              }),
              new FlowForm.ChoiceOption({
                label: 'Football',
                value: 'Football'
              }),
              new FlowForm.ChoiceOption({
                label: 'Natación',
                value: 'Natación'
              }),
              new FlowForm.ChoiceOption({
                label: 'Volleyball',
                value: 'Volleyball'
              }),
              new FlowForm.ChoiceOption({
                label: 'Golf',
                value: 'Golf'
              }),
              new FlowForm.ChoiceOption({
                label: 'Remo',
                value: 'Remo'
              }),
              new FlowForm.ChoiceOption({
                label: 'Gym',
                value: 'Gym'
              }),
              new FlowForm.ChoiceOption({
                label: 'Box',
                value: 'Box'
              }),
              new FlowForm.ChoiceOption({
                label: 'Gimnasia',
                value: 'Gimnasia'
              }),
              new FlowForm.ChoiceOption({
                label: 'Artes marciales',
                value: 'Artes marciales'
              }),
              new FlowForm.ChoiceOption({
                label: 'Functional',
                value: 'Functional'
              }),
              new FlowForm.ChoiceOption({
                label: 'Crossfit',
                value: 'Crossfit'
              })
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'deportista3',
            title: '¿Te encuentras en proceso de ganancia muscular o pérdida de grasa?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Ganancia muscular',
                value: 'ganancia'
              }),
              new FlowForm.ChoiceOption({
                label: 'Pérdida de grasa',
                value: 'perdida'
              })
            ],
            jump: {
              _other: 'email'
            }
          }),
          new FlowForm.QuestionModel({
            id: 'sintomas',
            title: '¿Cuáles se aplican a tu día a día?',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: true,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Debilidad muscular'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Cansancio'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Heridas en la boca'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Dolor en las articulaciones'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Problemas de cicatrización'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Sentimiento depresivo'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Problemas de coordinación'
              }),
              new FlowForm.ChoiceOption({
                value: 'P,érdida de memoria',
                label: 'Pérdida de memoria'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Pérdida de peso'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Sensibilidad en las extremidades'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Dolores de cabeza frecuentes'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Estreñimiento'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Diarrea'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Acidez estomacal'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Dermatitis'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Pérdida de cabello'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Fragilidad en las uñas'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Sistema inmune deficiente (me enfermo con facilidad)'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Problemas vista'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Falta de aliento'
              }),
              new FlowForm.ChoiceOption({
                value: '',
                label: 'Retención de líquidos'
              }),
            ],
            jump: {
              _other: 'email'
            }
          }),
          new FlowForm.QuestionModel({
            id: 'email',
            subtitle: 'Antes de terminar, ingrese tu correo si quiere que enviemos sus resultados',
            description: 'Puede dejar el campo en blanco si solo desea ver sus resultados en línea.',
            type: FlowForm.QuestionType.Email,
            required: false,
            placeholder: 'nombre@correo.com'
          })
        ]
    }
  },
  methods: {
    onAnswer({id, answer}) {
      if (id === 'gender') this.woman = (answer === 'mujer');
      else if (id === 'embarazada') this.pregnant = (answer === 'si');
      else if (id === 'age') {
        if (answer === '1') this.vitamins = {k: 0.055, a: 0.4, d: 0.015, e: 7};
        else if (answer === '2') this.vitamins = {k: 0.06, a: 0.6, d: 0.015, e: 11};
        else if (answer === '3') this.vitamins = {k: 0.075, a: 0.7, d: 0.015, e: 15};
        else if (answer === '4' && this.pregnant) this.vitamins = {k: 0.09, a: 0.77, d: 0.015, e: 15};
        else if (answer === '4' && this.woman) this.vitamins = {k: 0.09, a: 0.7, d: 0.015, e: 15};
        else if (answer === '4') this.vitamins = {k: 0.12, a: 0.9, d: 0.015, e: 15}; // man
        else {
          this.vitamins = {k: 0.12, a: 0.9, d: 0.015, e: 15}; // man
          console.log("man")
        }
      }
      
    },
    onQuizSubmit() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true
      
      this.submitted = true
    },
  }
});