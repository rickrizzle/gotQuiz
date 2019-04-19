const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//const answers = Array.from(document.getElementById("answer"));
//const questionCounterText = document.getElementById("questionCounter");
let progress = Array.from(document.getElementById("progressText"));
//const score = document.getElementById("score");
const submitButton = document.getElementsByClassName("button");

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "How many direwolves were found for the Stark children?",
    choice1: "Five",
    choice2: "Three",
    choice3: "Seven",
    choice4: "Six",
    answer: 4
  },
  {
    question: "What is Daenerys Targaryen's first title?",
    choice1: "Daenerys the Mother of Dragons",
    choice2: "Daenerys Stormborn",
    choice3: "Daenerys the Mother Queen",
    choice4: "Daenerys the Conqueror",
    answer: 2
  },
  {
    question:
      "What is the name of Ned Stark's Valyrian steel sword (which was melted down into two other swords)?",
    choice1: "Broadsword",
    choice2: "Ice",
    choice3: "Oathkeeper",
    choice4: "Wolfspaw",
    answer: 2
  },
  {
    question: "What color eyes for Targaryen's have?",
    choice1: "Violet",
    choice2: "Blue",
    choice3: "Brown",
    choice4: "Red",
    answer: 1
  },
  {
    question:
      "Where is Tyrion first introduced in the first episode (Hint: He's already in Winterfell)?",
    choice1: "The Castle",
    choice2: "A Bar",
    choice3: "A Brothel",
    choice4: "The courtyard",
    answer: 3
  }
];

let progressText = [
  //'Your Quiz-Quest has Only Just Begun...',
  "Continue forward to the Wall!",
  "Hodor Hodor!",
  "Make it past this question, and the three-eyed raven will visit you...",
  "One more, mayhaps?"
];
//looping for however many questions are in array (5, so far)
/*for(let i=0; i < questions.length; i++){
    let response = choice[i];
    if( response == questions[i].answer) {

    }
}*/

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]; //takes available array and spreads them in a new array
  // console.log(availableQuestions);
  availableProgressText = [...progressText];
  getNewQuestion();
  submitButton.onclick = function() {
    showResults(questions, answer);
  };
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;

  //Update the progress bar

  progressBar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  /*Math.floor to make random number from Math.random into integer
  availableQuestions.lenght because number of questions will likely change*/

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  //Pulls random question to display on web page
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    //Pulls answers for each question to be displayed
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;

  progress.forEach(prog => {
    const text = prog.progressText[i];
    prog.innerHTML = progressText[i];
  });

  textSequence(0);
  let progressText = [
    //'Your Quiz-Quest has Only Just Begun...',
    "Continue forward to the Wall!",
    "Hodor Hodor!",
    "Make it past this question, and the three-eyed raven will visit you...",
    "One more, mayhaps?"
  ];
  function textSequence(i) {
    if (progressText.length > i) {
      document.getElementById("progressText").innerHTML = progressText[i];
      textSequence(++i);
      /*setTimeout(function() {
        document.getElementById("progressText").innerHTML = progressText[i];
        textSequence(++i);
      }, 1000); // 1 second (in milliseconds)*/
    } else if (progressText.length == i) {
      // Loop
      textSequence(0);
    }
  }

  /*const textIndex = Math.floor(Math.random() * availableProgressText.length);
  currentText = availableProgressText[textIndex];
  progress.innerText = currentQuestion.progress; */
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    // if (userAnswers >= 3 * 'stark' ) {
    //   send to 'You Belong in House Stark' end page

    getNewQuestion();
  });
});

startGame();
