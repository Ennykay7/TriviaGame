var questions = [
    "N64 controllers had three places for your hands.",
    "The PS2 console used cartridges.",
    "The Gameboy Advanced was designed vertically."];

function createQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $("#playArea").append(
            "<div>" + questions[i] + "</div>" +
            "<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option1'>" +
            "<label class='form-check-label' for='inlineRadio1'>True</label>" +
            "</div>" +
            "<div class='form-check form-check-inline'>" +
            "<input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='option2'>" +
            "<label class='form-check-label' for='inlineRadio2'>False</label>" +
            "</div><br><br>"
        )
    }
}

$("#startGame").on("click", function () {
    $("#playArea").empty();
    createQuestions();
});