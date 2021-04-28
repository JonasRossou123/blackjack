// this page is functions exclusive

function createDeck() {
    let suits = ["schoppen", "ruiten", "klaveren", "harten"];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "B", "V", "K", "A"];
    let realValues = [2,3,4,5,6,7,8,9,10,10,10,10,11];
    let deck = [];

    for (let i = 0; i<suits.length;i++){
        for (let y = 0; y<values.length;y++){
            let card = {value: values[y], suit: suits[i], realValue: realValues[y]};
            deck.push(card);
        }
    }
    return deck;
}

function drawCard() {
    let randcard = Math.floor(Math.random() * superDeck.length); //create random indexnumber
    let card = superDeck[randcard];
    superDeck.splice(randcard, 1); //delete card out of superDeck

    return card;
}

function showCards(deck,target){
    // kaarten weergeven
    let returnString = ""; // deze string is nodig om de cardtexts achter elkaar te zetten
    // scores weergeven = realvalue
    let score = 0; // telkens er kaarten worden getrokken wordt de berekening gedaan forEach kaart
    deck.forEach((element) => {
        let cardtext = element.suit + " " + element.value + " ";
        returnString += cardtext;
        score += element.realValue; //integers dus worden automatisch opgeteld
    });

    returnString += " score is " + score;
    target.innerHTML = returnString;

}


function calculateRound (deck) {
    let score = 0;
        deck.forEach((element) => {
            score += element.realValue;
        });
    return score;
}