var app = new Vue({
  el: '#quiz-app',
  template: '<flow-form :questions="questions" :standalone="false" :language="language" />',
  data: function() {
    return {
      language: new FlowForm.LanguageModel({
        // Your language definitions here (optional).
        // You can leave out this prop if you want to use the default definitions.
      }),
      questions: [
          new FlowForm.QuestionModel({
            id: 'first_name',
            tagline: 'Hi! Welcome to our demo survey 😊',
            title: 'What is your first name?',
            type: FlowForm.QuestionType.Text,
            required: true,
            placeholder: 'Start typing here...'
          }),
          new FlowForm.QuestionModel({
            id: 'email',
            tagline: "Nice to meet you 👀, let's continue",
            title: 'Provide an example email.',
            type: FlowForm.QuestionType.Email,
            required: true,
            placeholder: 'Start typing here...'
          }),
           new FlowForm.QuestionModel({
            id: 'multiple_choice_image',
            tagline: "Let's take it one step further...",
            title: 'Tell us what is your favorite social network hangout.',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultiplePictureChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png",
                imageAlt: 'Facebook logo',
                label: 'Facebook'
              }),
              new FlowForm.ChoiceOption({
                imageSrc: "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png",
                imageAlt: 'Twitter logo',
                label: 'Twitter'
              }),
              new FlowForm.ChoiceOption({
                imageSrc: "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg",
                imageAlt: 'Instagram logo',
                label: 'Instagram'
              }),
              new FlowForm.ChoiceOption({
                imageSrc: "https://i.pinimg.com/originals/8e/1d/1c/8e1d1cee4879db1796c87f0a620afe6a.png",
                imageAlt: 'TikTok logo',
                label: 'TikTok'
              }),
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'phone',
            title: 'Doing great! 👍 Go ahead and try with a phone number.',
            type: FlowForm.QuestionType.Phone,
            required: true,
            mask: '(###) ###-####'
          }),
          new FlowForm.QuestionModel({
            id: 'movies',
            title: 'List your favorite movies. 🍿',
            type: FlowForm.QuestionType.LongText,
            required: true,
            placeholder: 'Start typing here...'
          }),
          new FlowForm.QuestionModel({
            id: 'multiple_choice',
            tagline: 'FYI, You can always go back 👈, use the up arrow on the bottom.',
            title: 'Multiple choice question:',
            helpTextShow: false,
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            allowOther: true,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Answer 1'
              }),
              new FlowForm.ChoiceOption({
                label: 'Answer 2'
               }),
              new FlowForm.ChoiceOption({
                label: 'Answer 3'
              })
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'multiple_choices',
            title: 'Multiple choices question:',
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: true,
            helpText: 'Select all that apply. 👇',
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Answer 1'
              }),
              new FlowForm.ChoiceOption({
                label: 'Answer 2'
              }),
              new FlowForm.ChoiceOption({
                label: 'Answer 3'
              }),
              new FlowForm.ChoiceOption({
                label: 'Answer 4'
              })
            ]
          }),
          new FlowForm.QuestionModel({
            id: 'break_1',
            title: 'Awesome, thank you. 🙏',
            content: 'You arrived at the section break of our little demo survey. To continue exploring, just press enter or use the continue button.',
            description: 'Note: We will take a look at our multiple path feature next.',
            type: FlowForm.QuestionType.SectionBreak
          }),
          new FlowForm.QuestionModel({
            id: 'choose_path',
            tagline: 'Where would you like to go? 🤔',
            title: 'Choose your path:',
            type: FlowForm.QuestionType.Dropdown,
            multiple: false,
            placeholder: 'Select',
            inline: true,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Path A'
              }),
              new FlowForm.ChoiceOption({
                label: 'Path B',
                value: 'path_b'
              })
            ],
            jump: {
              path_b: 'path_b'
            }
          }),
           new FlowForm.QuestionModel({
            id: 'path_a',
            title: 'Excellent choice! 🥳',
            content: 'Press enter or use the continue button for the final submit screen.',
            type: FlowForm.QuestionType.SectionBreak,
            jump: {
              _other: '_submit'
            }
          }),
          new FlowForm.QuestionModel({
            id: 'path_b',
            tagline: 'Path B',
            title: 'Hmm, are you sure?',
            helpText: 'Path A sounds like a winner! 😉',
            type: FlowForm.QuestionType.MultipleChoice,
            multiple: false,
            required: true,
            options: [
              new FlowForm.ChoiceOption({
                label: 'Ok, let\'s go with A',
                value: 'path_a'
              }),
              new FlowForm.ChoiceOption({
                label: 'Yes, finish the survey'
              })
            ],
            jump: {
              path_a: 'path_a'
            }
          })
        ]
    }
  }
});