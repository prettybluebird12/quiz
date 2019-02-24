/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
}
 var finalScore = 0; 
var result1 = 0;
function q1(answer1){
    if(answer1 === "january" || "febuary" || "march" || "april" || "may" || "april"){
        result1 = 2+finalScore;
    }
    else if(q1Result === "july" || "august" || "september" || "october" || "november" || "december"){
        result1 = 3+finalScore;
    }
}
q1(answer1);




var result2 = 0;
function q2(answer2){
    if(answer2 === "no"){
       return 1+finalScore;
    }
    else if(answer2 === "not very"){
     result2 = 2+finalScore;
    }
    else if(answer2 === "very"){
        result2 = 3+finalScore;
        }
}
q2(answer2)
var result3 = 0;
function q3(answer3){
    if(answer3.length>5{
        result3 = 5+finalScore;
    }
    else if(answer3.length<5){
     result3 = 10+finalScore;
    }
}
q3(answer3);

$("#result").click(function(){
    result1()+result2()+result3() =finalScore;
    if(totalScore > 10){
        $("btext").val("You are a rubber band ball! You're colorful bouncy and made of many happy layers!")
    }
    else if(totalScore<10)
    $("btext").val("You are  a paper clip! Your a nosieless sedentary creature who comes in handy when the stapler is otherwise occupied!")
}
