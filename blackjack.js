// globally declared variabls

let superDeck = createDeck();
let playerDeck = [];
let dealerDeck = [];
let playerText =  document.getElementById("playerText");
let dealerText = document.getElementById("dealerText");



document.getElementById("letsPlay").addEventListener("click", function() {

    //superDeck, playerDeck and dealerdeck needs a refresh
    superDeck = createDeck();
    playerDeck = [];
    dealerDeck = [];
    //2 cards each
    playerDeck.push(drawCard());
    playerDeck.push(drawCard());
    dealerDeck.push(drawCard());
    dealerDeck.push(drawCard());
    //show them in #text
    showCards(playerDeck,playerText);
    showCards(dealerDeck,dealerText);

});

document.getElementById("Draw").addEventListener("click", function() {
// push 2 cards to playerdeck
    playerDeck.push(drawCard())
    console.log(playerDeck)
    console.log(superDeck)
// show cards in payerdeck
    showCards(playerDeck, playerText)
    });

document.getElementById("Hold").addEventListener("click", function() {
//create AI algorithms

    // first computer checks if he has more or less
    let scoreplayer = calculateRound(playerDeck);
    let scoredealer = calculateRound(dealerDeck);
    if (scoredealer > scoreplayer){
        document.body.style.background = "red";
    } else if (scoredealer == 21) {
        document.body.style.background = "red";
    }
    dealerDeck.push(drawCard());
    showCards(dealerDeck,dealerText)
    if (scoredealer > scoreplayer){
        document.body.style.background = "red";
    } else if (scoredealer == 21) {
        document.body.style.background = "red";
    }
});


