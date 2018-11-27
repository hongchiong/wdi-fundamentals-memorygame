var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var cardsInPlay = [];
var streak = 0;

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    streak += 1;
    cardsInPlay = [];
    document.getElementById("streak").innerHTML = `🔥 ${streak} !!!`;
    resetBoard();
  } else {
    streak = 0;
    cardsInPlay = [];
    document.getElementById("streak").innerHTML = `🔥 ${streak} !!!`;
    resetBoard();
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");
  };
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  };
}

function createBoard() {
  shuffle(cards);
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

function resetBoard() {
  shuffle(cards);
  for (var i = 0; i < cards.length; i++) {
    var board = document.getElementById('game-board');
    var boardCards = board.getElementsByTagName('img');
    boardCards[i].setAttribute('src', 'images/back.png');
    boardCards[i].setAttribute('data-id', i);
    boardCards[i].addEventListener("click", flipCard);
  }
}

createBoard();
