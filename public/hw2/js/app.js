$(document).ready(function () {
    var balance = localStorage.getItem("balance");
    $("#spin").on("click", spinSlots);
    
    function getSlot() {
        let slotsArray = ["s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png", "win.png"];
        slotsArray = _.shuffle(slotsArray);
        return slotsArray[0];
    }
    function spinSlots() {
        let result = getSlot();
        $('#slotMachine').attr("src", "slots/slots.mp4")
    }
    
    function isFormValid() {
        let isValid = true;
        if ($("#q1").val() == "") {
            isValid = false;
            $("#validationFeedback").html("Question 1 was not answered");
            console.log("called");
        }
        return isValid;
    }

    function gradeQuiz() {
        $("#validationFeedback").html("");
        if (!isFormValid()) {
            return;
        }
        score = 0;
        let q1Response = $("#q1").val().toLowerCase();
        let q2Response = $("#q2").val();
        let q4Response = $("input[name=q4]:checked").val();
        console.log(q4Response);
        if (q1Response == "sacramento") {
            rightAnswer(1);
        } else {
            wrongAnswer(1);
        }
        if (q2Response == "mo") {
            rightAnswer(2);
        } else {
            wrongAnswer(2);
        }
        if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") &&
            !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")) {
            rightAnswer(3);
        } else {
            wrongAnswer(3);
        }
        if (q4Response == "Rhode Island") {
            rightAnswer(4);
        } else {
            wrongAnswer(4);
        }
        if ($("#seal2").css("background-color") == "rgb(255, 255, 0)") {
            rightAnswer(5)
        } else {
            wrongAnswer(5);
        }
        $("#totalScore").html(`Total Score: ${score}`);
        if (score < 80) {
            $("#totalScore").css("color", "red");
        } else {
            $("#totalScore").css("color", "green");
            $("#totalScore").append("<br>Congratulations! You scored 80 or above!<br>")

        }
        $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
        localStorage.setItem("total_attempts", attempts);
    }

    function rightAnswer(index) {
        $(`#q${index}Feedback`).html("Correct!");
        $(`#q${index}Feedback`).attr("class", "bg-success text-white");
        $(`#markImg${index}`).html("<img src='img/checkmark.png' alt='checkmark'>");
        score += 20;
    }

    function wrongAnswer(index) {
        $(`#q${index}Feedback`).html("Incorrect!");
        $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
        $(`#markImg${index}`).html("<img src='img/xmark.png' alt='xmark'>");
    }
});