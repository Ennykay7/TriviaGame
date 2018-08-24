var questions = [
    "N64 controllers had three places for your hands.",
    "The PS2 console used cartridges.",
    "The Gameboy Advanced was designed vertically."
];
var answers = [
    "t",
    "f",
    "f"
];
var unanswered = 0;
var correct = 0;
var wrong = 0;

function createQuestions() {
    $("#playArea").html("<form id=questionArea></form>")
    for (var i = 0; i < questions.length; i++) {
        $("#questionArea").append(
            "<div>" + questions[i] + "</div>" +
            "<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='radio' name='inlineRadioOptions" + i + "' id='" + i + "inlineRadio1' value='t'>" +
            "<label class='form-check-label' for='inlineRadio1'>True</label>" +
            "</div>" +
            "<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='radio' name='inlineRadioOptions" + i + "' id='" + i + "inlineRadio2' value='f'>" +
            "<label class='form-check-label' for='inlineRadio2'>False</label>" +
            "</div><br><br>"
        )
    }
}

function tallyScore(){
    for(var i = 0; i < questions.length; i++){
        var radios = $("input[name=inlineRadioOptions" + i +"]");
        console.log(radios)
        if (radios[0].checked === false && radios[1].checked === false){
            unanswered++;
        } else if (radios[0].checked && radios[0].value === answers[i]){
            correct++;
        }else if (radios[1].checked && radios[1].value === answers[i]){
            correct++;
        } else {
            wrong++;
        }
    }
}

$("#startGame").on("click", function () {
    createQuestions();
    $("#playArea").append(
        "<button id='finish'>Done</button>"
    )
    
});

$(document).on("click", "#finish", function(){
    tallyScore();
    $("#playArea").html("<div>Correct: " + correct + "</div><div>Wrong: " + wrong + "</div><div>Unanswered: " + unanswered + "</div>");
});