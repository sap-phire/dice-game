
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;//random number generated

var randomImageSource="dice"+ randomNumber1+ ".png";//dice1.png- dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//if player 1 wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="Its a draw";
}