/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var totalScore;
        
        var result = 0;
        var answer1 = $("#question1").val();
        result =result+q1(answer1);
        
        var answer2 = $("#question2").val();
         result =result+q2(answer2);
         var answer3 = $("#question3").val();
 result =result+q3(answer3);
  if(result > 10){
        $("#text").val("You are a rubber band ball! You're colorful bouncy and made of many happy layers!");
    }
    else{
    $("#text").val("You are  a paper clip! Your a nosieless sedentary creature who comes in handy when the stapler is otherwise occupied!");
    }
}); 
 
var result1 = 0;
function q1(answer1){
    var result=0;
    if(answer1 === "january" ||answer1 === "febuary" ||answer1 === "march" || answer1 ==="april" ||answer1 === "may" ||answer1 === "april"){
        return 2;
    }
    else if(answer1 === "july" || answer1 ==="august" || answer1 ==="september" ||answer1 === "october" || answer1 ==="november" ||answer1 === "december"){
        return 3;
    }
}




var result2 = 0;
function q2(answer2){
    if(answer2 === "no"){
       return 1;
    }
    else if(answer2 === "not very"){
     return 2;
    }
    else if(answer2 === "very"){
        return 3;
        }
}

var result3 = 0;
function q3(answer3){
    if(answer3.length>5){
        return 5;
    }
    else if(answer3.length<5){
     return 10;
    }
}


/*global result*/


});