


var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var header = document.getElementById("header");
var button = document.getElementById("btn");


function shuffle(){
    var temp1 = numberGenerator();
    var temp2 = numberGenerator();
    console.log(temp1);
    for (var i = 1; i < 7; i++){
        if (temp1 === i){
            img1.setAttribute("src", "images/dice"+i+".png")   
        }
    }
    for (var i = 1; i < 7; i++){
        if (temp2 === i){
            img2.setAttribute("src", "images/dice"+i+".png")  
        }
    }
    if ( temp1>temp2 ){
        header.textContent = "🚩Player 1 wins";
    } else if (temp2>temp1){
        header.textContent = "Player 2 wins🚩";
    } else {
        header.textContent = "🚩It is a draw🚩";
    }


    
    
}

function numberGenerator(){
    var a = Math.random();
    a = a*6;
    a = Math.floor(a);
    a = a+1;
    return (a);
}

button.addEventListener("click",shuffle);
