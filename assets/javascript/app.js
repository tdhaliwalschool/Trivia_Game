
// onclick of 'start id' run a function
$("#start").on("click", function () {
    //remove start button currently iin subwrapper
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
        $('#subwrapper').append('<h2>' + questions[i] + question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#subwrapper").append("<input type='radio' name= 'question-'" +i + value=
                + questions[i].answers[j] +  ">" + questions[i].answers[j])
            }
    }
})

//create questions array
var questions = [{
    question: "what is name of the Disney mouse?",
    options: ["mickey", "johnny", "sammy"],
    answers: "MICKEY"

}, {
    question: "what is name of the Disney mouse?",
    options: ["mickey", "johnny", "sammy"],
    answers: "johnny"

}


];