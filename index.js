function randomDiceGenerator() {
    const diceImages = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const die1 = Math.floor(Math.random() * diceImages.length);
    const die2 = Math.floor(Math.random() * diceImages.length);

    img1.setAttribute("src", diceImages[die1]);
    img2.setAttribute("src", diceImages[die2]);

    const heading = document.querySelector("h1");
    if (die1 > die2) {
        heading.innerHTML = "&#128681; Player 1 Wins!";
    }

    else if (die1 < die2) {
        heading.innerHTML = "Player 2 Wins! &#128681;";
    }

    else {
        heading.innerHTML = "Draw!";
    }
}
const button = document.getElementById("rollButton");
button.addEventListener("click", randomDiceGenerator);
