//Prompt#
var inputnumber = prompt("Give me the number!")
    //Validate input
function eval(inputNumber) {
    var userInputCorrectFlag = true;
    while (inputNumber.length < 2) {
        var inputNumber = prompt("Please enter 2 digits or more.");
        userInputCorrectFlag = false;
    }

    while (inputNumber.indexOf(' ') >= 0) {
        var inputNumber = prompt("Please don't enter spaces. Try a number!");
        userInputCorrectFlag = false;
    }

    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your top # was not set, try again.");
        //change the user input flag to false
        userInputCorrectFlag = false;
    }

    //# is valid= continue on
    if (userInputCorrectFlag = true) {
        fizzbuzz(inputNumber);
    }
}
//Play the game

function fizzbuzz(limit) {

    //Loop through using "for"
    for (var counter = 1; counter <= limit; counter++) {
        $('#showResults').append(check(counter));
    }
}

//Check each #
function check(currentNumber) {
    var msg = "<li>" + currentNumber + "</li>";

    if (currentNumber % 3 == 0) {
        msg = "<li>Fizz</li>";
    }
    if (currentNumber % 5 == 0) {
        msg = "<li>Buzz</li>";
    }
    if (currentNumber % 15 == 0) {
        msg = "<li>FizzBuzz</li>";
    }
    return msg;
}

$(document).ready(function () {

    //PART 1 => get the upper limit from the user input
    var limit = prompt("Please set the upper limit to play FizzBuzz.");

    //PART 2 => Starting the validation
    eval(limit); //Limit not valid on line 59

});
