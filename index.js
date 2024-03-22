var n= Math.random()*6;
var randomNumber1= Math.floor(n)+1;

// To set different dice we have to set attrirube to src in image element
/* <img class="img1" src="images/dice6.png"></img> */
// we have to point image element and set attritube of src with different no by changing default dice6

// pointing image elemnt
// we have two image first image have class image 1
var source = "images/dice"+randomNumber1+".png";
var firstChange = document.getElementsByClassName("img1")[0];
firstChange.setAttribute("src",source);

// Lets do the same for image2
var m=Math.random()*6;
var randomNumber2 = Math.floor(m)+1;
var source2 = "images/dice"+randomNumber2+".png";
var secondchange = document.querySelectorAll("img")[1];
secondchange.setAttribute("src",source2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 💨💨";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins 💫💫";
}
else{
    document.querySelector("h1").innerHTML="Draw 🤍";
}



