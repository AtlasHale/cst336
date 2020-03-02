$(document).ready(function () {
    var balance = 500;
    $("#spin").on("click", spinSlots);
    
    function getSlot() {
        let slotsArray = ["s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png", "win.png", "win.png", "win.png"];
        slotsArray = _.shuffle(slotsArray);
        return slotsArray[0];
    }
    
    const sleep = milliseconds => { 
        return new Promise(resolve => setTimeout(resolve, milliseconds)); 
    };
        
    function spinSlots() {
        if(isFormValid()){
            console.log($('#user-input').val());
            if ($('#user-input').val() > balance){
                $("#betFeedback").html("You don't have the balance to cover that bet!");
                $("#betFeedback").addClass("error");
                return;
            }
            let call = getSlot()
            let result = "slots/" + call;
            $('#slot-machine').attr("src", "slots/spinning.gif")
            
            sleep(2000).then(() => { 
                $('#slot-machine').attr("src", result)       
                if (call == "win.png"){
                    var integer = parseInt($('#user-input').val(), 10);
                    balance += integer*5;
                    $("#betFeedback").html("Winner Winner Chicken Dinner!");
                    $("#betFeedback").addClass("winner");
                    $("#balanceAmount").html('Balance: '+ balance);
                    $("#balanceAmount").addClass("bal");
                }
                else{
                    var integer = parseInt($('#user-input').val(), 10);
                    balance -= integer;
                    $("#betFeedback").html("You lost! Better luck next time!");
                    $("#betFeedback").addClass("loser");
                    $("#balanceAmount").html('Balance: '+ balance);
                    $("#balanceAmount").addClass("bal");
                }
                console.log(balance);
            });
            
        }
    }
    
    function isFormValid() {
        let isValid = true;
        if ($("#user-input").val() == "" || $("#user-input").val() < 1) {
            isValid = false;
            $("#betFeedback").html("Please enter a bet value before playing.");
            $("#betFeedback").addClass("error");
        }
        return isValid;
    }
});
