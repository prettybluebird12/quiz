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

 
var score1 = 0;
function q1(){
    if(q1Result === "january || febuary || march || april || may || april"){
        score1 = 2;
    }
    else if(q1Result === "july || august || september || october || november || december"){
        score1 = 3;
    }
    else(){
    
    }
}

var result2 = 0;
function q2(){
    if(q2Result === "no"){
        result2 = 1
    }
    else if(q2Result === "not very"){
     result2 = 2
    }
    else if(q2Result === "very"){
        result 2 === 3;
        }
}

var result3 = 0;
function q3(){
    if(q3Result.length>5{
        result3 = 10;
    }
    else if(q3Result.length<5){
     result3 = 5;
    }
        else(){}
}

$("#result").click(function(){
    if(totalScore > 10){
        $("btext").val("You are a rubber band ball! You're colorful bouncy and made of many happy layers!")
    }
    else if(totalScore<5)
    $("btext").val("You are  a paper clip! Your a nosieless sedentary creature who comes in handy when the stapler is otherwise occupied!")
}
