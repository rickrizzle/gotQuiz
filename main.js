const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//const answers = Array.from(document.getElementById("answer"));
const submitButton = document.getElementsByClassName("button");

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Which of these's animals do you prefer?",
    choice1: "Wolf",
    choice2: "Lion",
    choice3: "Raindeer",
    choice4: "Lizard",
    answer1: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4
  },
  {
    question: "Which of these traits best describe you...",
    choice1: "Brave",
    choice2: "Cunning",
    choice3: "Tough",
    choice4: "Majestic",
    answer1: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4
  },
  {
    question: "What among these is your choice of weapon...",
    choice1: "Broadsword",
    choice2: "Dagger",
    choice3: "Warhammer",
    choice4: "Fire",
    answer1: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4
  },
  {
    question: "Do you have more...",
    choice1: "Heart",
    choice2: "Brains",
    choice3: "Brawn",
    choice4: "Willpower",
    answer1: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4
  },
  {
    question: "What color eyes do you prefer...",
    choice1: "Brown",
    choice2: "Green",
    choice3: "More Brown",
    choice4: "Violet",
    answer1: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4
  }
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
  //Math.floor to make random number from Math.random into integer
  //availableQuestions.lenght because number of questions will likely change
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
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApplyStark = "incorrect";
    if (selectedAnswer == currentQuestion.answer1) {
      classToApply = "stark";
    }
    console.log(classToApplyStark);

    getNewQuestion();
  });
});

startGame();
