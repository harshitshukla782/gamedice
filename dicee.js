var a=Math.random();
a=a*6;
a=(Math.floor(a))+1;
var b=Math.random();
b=b*6;
b=(Math.floor(b))+1;
function a1(){
if(a===1){
    document.getElementById("1").setAttribute("src","/images/dice1.png");
}
if(a===2){
    document.getElementById("1").setAttribute("src","/images/dice2.png");
}
if(a===3){
    document.getElementById("1").setAttribute("src","/images/dice3.png");
}
if(a===4){
    document.getElementById("1").setAttribute("src","/images/dice4.png");
}
if(a===5){
    document.getElementById("1").setAttribute("src","/images/dice5.png");
}
}
function b1(){
    if(b===1){
        document.getElementById("2").setAttribute("src","images/dice1.png");
    }if(b===2){
        document.getElementById("2").setAttribute("src","images/dice2.png");
    }if(b===3){
        document.getElementById("2").setAttribute("src","images/dice3.png");
    }if(b===4){
        document.getElementById("2").setAttribute("src","images/dice4.png");
    }if(b===5){
        document.getElementById("2").setAttribute("src","images/dice5.png");
    }
}
a1();
b1();
if(a>b)
document.querySelector("h1").innerHTML="Player 1 Wins";
else if(b>a)
document.querySelector("h1").innerHTML="Player 2 Wins";
else
document.querySelector("h1").innerHTML="Match Draws";
