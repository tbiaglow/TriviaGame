
var time = 5;
$("#display").html("00:05");



var question1 = {
    question: "",
    answerA: "",
    answerB: 1,
    answerC: "",
    answerD: ""
};
var question2 = {
    question: "",
    answerA: "",
    answerB: "",
    answerC: 2,
    answerD: ""
};
var question3 = {
    question: "",
    answerA: 3,
    answerB: "",
    answerC: "",
    answerD: ""
};
var question4 = {
    question: "",
    answerA: 4,
    answerB: "",
    answerC: "",
    answerD: ""
};
var question5 = {
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: 5
};

var questions = [question1, question2, question3, question4, question5];
var correctAnswers = [questions[0].answerB, questions[1].answerC, questions[2].answerA, questions[3].answerA, questions[4].answerD];


var userAnswers = [1, 2, 3, 4, 5];

var gameInfo = $('#wrapper')

intervalID = setInterval(count, 1000);


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
  $('#wrapper').remove()
  $('body').append('<div id="score">Your score was: </div>')
  $("#score").append(score)
  $("#score").append("%")
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
