// variables
var displayDate = document.getElementById("date-time");
var display = moment().format("LLL");
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var btnNumber = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var toDo = document.querySelectorAll(".enter-task");
var userInputArr = Array(10);



var rightNow = moment().get("hour");
console.log(rightNow);


displayDate.append(display);

$().ready(function () {


    function renderColor() {
        for (var t = 0; t < times.length; t++) {

            if (rightNow < (btnNumber[t])) {
                //grey
                $("#input-"+times[t]).css("background-color", "#BABABA")
            }
            else if (rightNow === btnNumber[t]) {
                //red
                $("#input-"+times[t]).css("background-color", "#F95858")
            } else {
                //green
                $("input").css("background-color", "#80ED67")
            }
        }
    }
 
    if (localStorage.getItem("user-input") !== null) {
        userInputArr = JSON.parse(localStorage.getItem("user-input"))
    }
    for (var i = 0; i < times.length; i++) {
        var newRow = $("<div>");
        var saveButtons = $("<button>");
        var inputArea = $("<input>")
        var time = $("<div>");
        inputArea.addClass("col-md-8 enter-task before at-time-of after");
        newRow.addClass("row");
        time.addClass("col-md-2 times");
        saveButtons.addClass("col-md-2 save-button");
        saveButtons.attr("value", btnNumber[i]);
        inputArea.attr("index", btnNumber[i]);
        inputArea.attr("value", userInputArr[i]);
        inputArea.attr("id", "input-"+times[i]);
        time.attr("data-area", times[i]);
        time.text(times[i]);
        saveButtons.text("Save")
        newRow.append(time);
        newRow.append(inputArea);
        newRow.append(saveButtons);
        $(".container").append(newRow);
       
    }
    renderColor();
})



function storeUserInput() {
    localStorage.setItem("user-input", JSON.stringify(userInputArr))
}

$(document).on("click", ".save-button", function (event) {
    event.preventDefault();
    var toDoText = $(`[index="${event.target.value}"]`).val();
    console.log(toDoText)
    if (toDoText === "") {
        return;
    } else {
        alert("Got it!")
        userInputArr[event.target.value] = toDoText
        storeUserInput();
        
    }
})