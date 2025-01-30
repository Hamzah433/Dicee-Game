
// Step 1: Generate two random numbers between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// DOM: --> SELECT IMAGE BEFORE SETTING ATTRIBUTES!!!
var image1 = document.querySelectorAll("img")[0]; //selecting image 1
var image2 = document.querySelectorAll("img")[1]; //selecting image 2

image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");  // Changes first dice to any 1-6
image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");  // Changes second dice to any 1-6

// h1:
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} 
else {
    document.querySelector("h1").innerHTML = "It's a Draw! 🎲";
}

