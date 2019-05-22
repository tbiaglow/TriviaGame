
var time = 5;
$("#display").html("00:05");
var questions = [question1, question2, question3, question4, question5];

var userAnswers = [];
//var correctAnswers = [questions[0].answerB, questions[1].answerC, questions[2].answerA, questions[3].answerA, questions[4].answerD];

var question1 = {
    question: "",
    answerA: "",
    answerB: "",
    AnswerC: "",
    AnswerD: ""
};
var question2 = {
    question: "",
    answerA: "",
    answerB: "",
    AnswerC: "",
    AnswerD: ""
};
var question3 = {
    question: "",
    answerA: "",
    answerB: "",
    AnswerC: "",
    AnswerD: ""
};
var question4 = {
    question: "",
    answerA: "",
    answerB: "",
    AnswerC: "",
    AnswerD: ""
};
var question5 = {
    question: "",
    answerA: "",
    answerB: "",
    AnswerC: "",
    AnswerD: ""
};

var gameInfo = $('#wrapper')

intervalID = setInterval(count, 1000);

score = "88%"
// function determineScore(userAnswers, correctAnswers) {
//   return score
// }

function gameOver() {
  $('#wrapper').remove()
  $('body').append('<div id="score">Your score was: </div>')
  $("#score").append(score)
  $('body').append('<div id=playAgain>Play Again? </div>')
  $('#playAgain').append('<button id="playButton">Play</button>')
  $('#playButton').click(function (){startNewGame()})
}


function startNewGame() {
  $('#score').remove()
  $('#playAgain').remove()
  $('body').append(gameInfo)
  time = 5;
  $("#display").html("00:05");
  setInterval(count, 1000);
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
