var intervalId;
var time = 120;
questions = [question1, question2, question3, question4, question5];

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

$("#display").html("02:00");

intervalId = setInterval(count, 1000);

function count() {

    time--;

    var counter = timeConverter(time);

    $("#display").html(counter);
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