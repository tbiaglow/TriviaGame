
var time = 120;
$("#display").html("02:00");



var question1 = {
    question: "Hello World",
    answerA: "A",
    answerB: "B",
    answerC: "C",
    answerD: "D"
};
var question2 = {
    question: "",
    answerA: "A",
    answerB: "B",
    answerC: "C",
    answerD: "D"
};
var question3 = {
    question: "",
    answerA: "A",
    answerB: "B",
    answerC: "C",
    answerD: "D"
};
var question4 = {
    question: "",
    answerA: "A",
    answerB: "B",
    answerC: "C",
    answerD: "D"
};
var question5 = {
    question: "",
    answerA: "A",
    answerB: "B",
    answerC: "C",
    answerD: "D"
};

var questions = [question1, question2, question3, question4, question5];
var correctAnswers = [questions[0].answerB, questions[1].answerC, questions[2].answerA, questions[3].answerA, questions[4].answerD];
var userAnswers = [];




intervalID = setInterval(count, 1000);

$(document).ready(function() {
$('#questionOne').prepend(question1.question)
$('#q1A').on("click", function () {userAnswers[0] = question1.answerA})
$('#q1B').on("click", function () {userAnswers[0] = question1.answerB})
$('#q1C').on("click", function () {userAnswers[0] = question1.answerC})
$('#q1D').on("click", function () {userAnswers[0] = question1.answerD})
$('#questionTwo').prepend(question2.question)
$('#q2A').on("click", function () {userAnswers[1] = question2.answerA})
$('#q2B').on("click", function () {userAnswers[1] = question2.answerB})
$('#q2C').on("click", function () {userAnswers[1] = question2.answerC})
$('#q2D').on("click", function () {userAnswers[1] = question2.answerD})
$('#questionThree').prepend(question3.question)
$('#q3A').on("click", function () {userAnswers[2] = question3.answerA})
$('#q3B').on("click", function () {userAnswers[2] = question3.answerB})
$('#q3C').on("click", function () {userAnswers[2] = question3.answerC})
$('#q3D').on("click", function () {userAnswers[2] = question3.answerD})
$('#questionFour').prepend(question4.question)
$('#q4A').on("click", function () {userAnswers[3] = question4.answerA})
$('#q4B').on("click", function () {userAnswers[3] = question4.answerB})
$('#q4C').on("click", function () {userAnswers[3] = question4.answerC})
$('#q4D').on("click", function () {userAnswers[3] = question4.answerD})
$('#questionFive').prepend(question5.question)
$('#q5A').on("click", function () {userAnswers[4] = question5.answerA})
$('#q5B').on("click", function () {userAnswers[4] = question5.answerB})
$('#q5C').on("click", function () {userAnswers[4] = question5.answerC})
$('#q5D').on("click", function () {userAnswers[4] = question5.answerD})
$('#doneButton').on("click", function () {gameOver()})
});


function determineScore(userAnswers, correctAnswers) {
  var score = 0;
  for (i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score += 1 / correctAnswers.length;
      
    }
  }
  score = Math.round(score * 100)
  return score
}

function gameOver() {
  score = determineScore(userAnswers, correctAnswers);
  $(document).ready(function() {
  $('#wrapper').hide()
  $('body').append('<div id="score">Your score was: </div>')
  $("#score").append(score)
  $("#score").append("%")
  $('body').append('<div id=playAgain>Play Again? </div>')
  $('#playAgain').append('<button id="playButton">Play</button>')
  $('#playButton').click(function (){startNewGame()})
  })
}


function startNewGame() {
  $(document).ready(function() {
  $('#score').remove()
  $('#playAgain').remove()
  })
  $(document).ready(function() {
  $('#wrapper').show()
  time = 120;
  $("#display").html("02:00");
  setInterval(count, 1000);
  })
}

function count() {

    time--;

    var counter = timeConverter(time);

    $("#display").html(counter);

  if (time === 0) {
    clearInterval(intervalID)
    gameOver()
  }
}

function timeConverter(t) {


  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
