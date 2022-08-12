console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'player one',
    hand: ''
  },
  {
    name: 'player two',
    hand: ''
  },
  {
    name: 'player three',
    hand: ''
  },
  {
    name: 'player four',
    hand: ''
  }
];

var face = ['diamonds', 'clubs', 'hearts', 'spades'];
var value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

var cardDeck = [];

for (var i = 0; i < face.length; i++) {
  for (let j = 0; j < value.length; j++) {
    var card = { value: value[j], face: face[i] };
    cardDeck.push(card);
  }
}

var shuffledDeck = _.shuffle(cardDeck);

function dealCard() {
  var player1 = [shuffledDeck[0], shuffledDeck[1]];
  players[0].hand = player1;
  var player2 = [shuffledDeck[2], shuffledDeck[3]];
  players[1].hand = player2;
  var player3 = [shuffledDeck[4], shuffledDeck[5]];
  players[2].hand = player3;
  var player4 = [shuffledDeck[6], shuffledDeck[7]];
  players[3].hand = player4;
}
dealCard();

var cardValues = {
  A: 11,
  Q: 10,
  K: 10,
  J: 10,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10
};

function getWinner() {
  var winner = '';
  var highestPoint = 0;
  for (var i = 0; i < players.length; i++) {
    var currentHand = players[i].hand;
    var totalHand = 0;
    for (var j = 0; j < currentHand.length; j++) {
      var handValue = currentHand[j].value;
      var currentPoint = cardValues[handValue];
      totalHand += currentPoint;
    }
    if (totalHand > highestPoint) {
      highestPoint = totalHand;
      winner = players[i].name;
    }
    console.log(players[i].name, totalHand);
  }
  console.log('Winner:', winner);
}
getWinner();
