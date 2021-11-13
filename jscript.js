var myQuestions = [
    {
      question: "What does CSS stand for?",
      answerChoices: ["Cascading Style Sheets", "Class Style Sheet", "Clear Style Structure"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      answerChoices: ["Hyper text mark up language", "hyper processor message language", "hyper text management language?"],
      correctAnswer: "Hyper text mark up language"
    },
    {
      question: "A header element in a HTML file is written like ___ .",
      answerChoices: ["<header/><header>", "</header><header>", "<header></header>", "</header/>"],
      correctAnswer: "<header></header>"
    },
    {
      question: "What is used to iterate a block of code?",
      answerChoices: ["object", "for Loop", "array", "concat()"],
      correctAnswer: "for Loop"
    },
    {
      question: "how does javascript affect a web page?",
      answerChoices: ["creates a basic web page layout?", "styling websites?", "adds automation, animations and interactivity to Web pages."],
      correctAnswer: "adds automation, animations and interactivity to Web pages."
    }
  ];


var questionContainer = document.querySelector(".question");
var answerContainer = document.querySelector(".answer");
var button = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var createUlEl = document.querySelector(".ulList");
var solutionContainer = document.getElementById("solution");
var subContainer = document.querySelector(".quiz-box");
var mainContainer = document.querySelector(".main-container");
var header = document.querySelector("header");
var body = document.querySelector("body");

var timerCount = 50;
var timePenalty = -10;
var timerInterval;
var timeEnd = 0;
var index = 0;
var score = 0;

function renderQuiz () {
console.log(index)
  questionContainer.setAttribute("class", "question-start");
  answerContainer.setAttribute("class", "answer-start");
  
  questionContainer.textContent = "";
  createUlEl.textContent = "";
  

    var addQuestion = myQuestions[index].question;
    var addChoices = myQuestions[index].answerChoices;
    questionContainer.textContent = addQuestion;
  
   
  addChoices.forEach(function (newInput){
    var listEl = document.createElement("li");
    listEl.textContent = newInput;
    createUlEl.appendChild(listEl);
    listEl.addEventListener("click", result);
  })
}
 
function result(event){
  listEl = event.target;
  solutionContainer.setAttribute("class", "solution-container")
   
  console.log(listEl.textContent);
   console.log(myQuestions[index]);

    if (listEl.textContent == myQuestions[index].correctAnswer){
      score++; 
      solution.textContent = "Correct! The answer is " +  myQuestions[index].correctAnswer;
index++
      renderQuiz()
      console.log("correct")
    } else {
      timerCount = timerCount + timePenalty;
      solution.textContent = "Wrong! The right answer is " +  myQuestions[index].correctAnswer;
      index++
      renderQuiz();
      console.log("wrong")
    }
    return;

}

function removeFunction() {
    
    button.remove();

    timer.textContent = timerCount;
    renderQuiz(index);
    startTimer();
}

function startTimer() {
  
    timerInterval = setInterval(function() {
        timerCount--;
        timer.textContent = timerCount;

        if (timerCount === 0){
            clearInterval(timerInterval);
            showEndScreen();
        }
    },1000);

}

function showEndScreen (){
  header.remove();
  subContainer.remove();
  var pEl = document.createElement("p");

  mainContainer.textContent = "Times up!";

  mainContainer.appendChild(pEl);

  pEl.textContent = "Your final score is: " + score + "/5";


}

button.addEventListener("click", removeFunction);