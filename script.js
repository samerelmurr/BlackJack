
//Creatring a vlackJack object to make selecting the elements easier
let blackJack = {
    'you' : {'scoreSpan' : '#youScore', 'div' : '#user', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealerScore', 'div' : '#dealer', 'score' : 0},
    'cards' : ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
};

//Creating const for each div to be selected and used
const YOU = blackJack['you']
const DEALER = blackJack['dealer']


//hit button
document.querySelector('#hitBtn').addEventListener('click', hitBtnEvent);
const hitSound = new Audio('sounds/swish.m4a');

//deal button
document.querySelector('#dealBtn').addEventListener('click', dealBtnEvent);

//event for hit btn
function hitBtnEvent(){
    let card = randomCard();
    console.log(card);
    showCard(YOU);
}

//Creating a function to get a random card
function randomCard(){ 
    //creating a random card and returning it using the card object
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJack['cards'][randomIndex];
}

//function to show the card on the selected player
function showCard(card, activePlayer){
    //selecting the img in the div and giving it the proper size so that it fits in the div
    let cardImage = document.createElement('img');
    cardImage.width = 60;
    cardImage.height = 100;
    cardImage.src = `images/$(card).png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

//deal button to remove all the cards in the divs
function dealBtnEvent(){
    //selecting all imgs in the respective div
    let userImage = document.querySelector('#user').querySelectorAll('img');
    let dealerImage = document.querySelector('#dealer').querySelectorAll('img');
    //loops for removing the img
    for(count = 0; count < userImage.length; count++)
         userImage[count].remove();
    
    for(count = 0; count < dealerImage.length; count++)
         dealerImage[count].remove();

}







