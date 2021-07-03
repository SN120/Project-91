var player_1 = localStorage.getItem("Player_1_username");
var player_2 = localStorage.getItem("Player_2_username");

var player_1_score = 0;
var player_2_score=0;

var number_1;
var number_2;
var answer;

document.getElementById("player_1_name").innerHTML = player_1+" : ";
document.getElementById("player_2_name").innerHTML = player_2+" : ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

function Send(){
    number_1 = document.getElementById("No.1").value;
    number_2 = document.getElementById("No.2").value;
    answer = parseInt(number_1)*parseInt(number_2);

    console.log(number_1);
    console.log(number_2);
    console.log(answer);

    document.getElementById("input").hidden = "true"

    question_1Word = "<label id='number_display'>" +number_1+"x"+number_2+ "</label>";
    input_box = "<br> Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onClick='check();'>Check</button>";
    row = question_1Word + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("No.1").value = "";
    document.getElementById("No.2").value = "";
}