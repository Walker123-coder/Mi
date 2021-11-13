var myQuestions = [
    {
      question: "What is the correct way to inspect the heart?",
      answerChoices: ["Just observe it as it goes past on the chain?", "Pick it up make an incision and put it back down?", "make 3-4 incisions observing the cuts then turning the heart over and palpating the outside of it?"],
      correctAnswer: "Make 3-4 incisions observing the cuts then turning the heart over and palpating the outside of it?"
    },
    {
      question: "What is the correct way to inspect the lungs?",
      answerChoices: ["observe the lungs?", "Palpate the outside of the lungs while observing the bronchial track and lymph nodes,then turning it over and palpating the other side?", "Just stamping it out because the company doesent keep them?"],
      correctAnswer: "Palpate the outside of the lungs while observing the bronchial track and lymph nodes,then turning it over and palpating the other side?"
    },
    {
      question: "Youve noticed the green offal on the next body has an enclosed abscess on the paunch what do u do?",
      answerChoices: ["Stamp out the hole tray?", "Ask the fsma for help because you dont know what you should do?", "Do the inspection as per normal and inspect the affected area just stamping the paunch out?"],
      correctAnswer: "Do the inspection as per normal and inspect the affected area just stamping the paunch out?"
    },
    {
      question: "Youve noticed the next body's green offal is covered in ingesta this particular plant doesent have an offal recovery system in place but the supervisor is upset about yeilds what do you do?",
      answerChoices: ["Do the inspection as normal and let the offal in question go through?", "Do your inspection as normal then,Pick through the offal and see what you can save ?", "Stamp it all out?", "Ask someone for help"],
      correctAnswer: "Do your inspection as normal then,Pick through the offal and see what you can save ?"
    },
    {
      question: "How do you perform an emergency kill/Suspect body?",
      answerChoices: ["Do your inspection as normal nothings diffrent?", "Tell the fsma to do it because its above your pay grade?", "Perform your inspection as normal but making a point to check and incise the lymph nodes of the offal like a book looking for growths or abnormal activity?"],
      correctAnswer: "Perform your inspection as normal but making a point to check and incise the lymph nodes of the offal like a book looking for growths or abnormal activity?"
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