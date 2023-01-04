const lvl_1 = "Level 1"
const lvl_2 = "Level 2"
const lvl_3 = "Level 3"

var lvl;
var x, y, answer;
$(function () { //JQuery - 1
    lvl = $("h1").text();

    if (lvl == lvl_1) {
        firstLevel();
    } else if (lvl == lvl_2) {
        secondLevel();
    } else if (lvl == lvl_3) {
        thirdLevel();
    }
});

function generateNumber(limit) { //JS - 1
    return (Math.random() * limit).toFixed(0)
}

function firstLevel() { //JS - 2
    x = generateNumber(10);
    y = generateNumber(10);
    answer = parseInt(x) * parseInt(y);
    $(document).ready(function () {  //jQuery - 2
        $("#numberOne").text(x);
        $("#numberTwo").text(y);
    });
}

function secondLevel() { //JS - 3
    x = generateNumber(100);
    y = generateNumber(100);
    answer = parseInt(x) * parseInt(y);
    $(document).ready(function () {  //jQuery - 3
        $("#numberOne").text(x);
        $("#numberTwo").text(y);
    });
}

function thirdLevel() { //JS - 4
    x = generateNumber(1000);
    y = generateNumber(1000);
    answer = parseInt(x) * parseInt(y);
    $(document).ready(function () {  //jQuery - 4
        $("#numberOne").text(x);
        $("#numberTwo").text(y);
    });
}


function Game() { //JS - 5
    var user_answer = document.getElementById("finalAnswer").value;

    if (user_answer == answer) {
        $(document).ready(function () {  //jQuery - 5
            $("#ans").text("Correct");
        });
    } else {
        $(document).ready(function () {  //jQuery - 6
            $("#ans").text("Not Correct, Answer is " + answer + ".");
        });
    }

    var user_answer = $(document).ready(function () {  //jQuery - 7
        $("#finalAnswer").val("");
    });

    $(function () { //jQuery - 8
        lvl = $("h1").text();  //jQuery - 9, and more

        if (lvl == lvl_1) {
            firstLevel();
        } else if (lvl == lvl_2) {
            secondLevel();
        } else if (lvl == lvl_3) {
            thirdLevel();
        }
    });
}
