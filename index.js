//Randomly generate 2 numbers (1-6)
let randomNumber1=Math.floor((Math.random()*6))+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

let randomNumber2=Math.floor((Math.random()*6))+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

//check winner and display
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins <img style='width:100px' src='./images/red-flag.png' alt='winner-flag'>";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins <img style='width:100px' src='./images/red-flag.png' alt='winner-flag'>";
}else{
    document.querySelector("h1").innerHTML="Draw!!";
}
