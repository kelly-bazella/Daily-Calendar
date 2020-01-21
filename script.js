// variables
var displayDate = document.getElementById("date-time");
var display = moment().format("LLL");
var times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"];
var btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var toDo = $("#enter-task")
var userInput = [];

// display date
displayDate.append(display);

//create div input areas using for loop 
for (var i = 0; i<times.length;i++){
    var newRow = $("<div>");
    var saveButtons = $("<button>");
    var inputArea = $("<input>")
    var time = $("<div>");
    inputArea.addClass("col-md-8 enter-task");
    newRow.addClass("row");
    time.addClass("col-md-2 times");
    saveButtons.addClass("col-md-2");
    saveButtons.attr("id", "save-button");
    saveButtons.attr("value", btnNumber[i]);
    inputArea.attr("index", btnNumber[i]);
    time.attr("data-area", times[i]);
    time.text(times[i]);
    saveButtons.text("Save")
    newRow.append(time);
    newRow.append(inputArea);
    newRow.append(saveButtons);
    $(".container").append(newRow);
}

// functions
function storeUserInput(){
    localStorage.setItem("user-input", userInput)
}


//store users input to localStorage
$("#save-button").on("click", function(event){
    event.preventDefault();
    var toDoText = toDo.innerHTML;
    if(toDoText===""){
        alert("You haven't entered anything to save.")
    }else{
        alert("got it!")
        // save input to local storage
        // put text in object??
        // getItem on refresh
    }
})

