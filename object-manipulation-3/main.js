console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playerList = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
var winner = 0;
var cardDeck = [
  { rank: 'Ace', suit: 'clubs', points: 11 },
  { rank: '2', suit: 'clubs', points: 2 },
  { rank: '3', suit: 'clubs', points: 3 },
  { rank: '4', suit: 'clubs', points: 4 },
  { rank: '5', suit: 'clubs', points: 5 },
  { rank: '6', suit: 'clubs', points: 6 },
  { rank: '7', suit: 'clubs', points: 7 },
  { rank: '8', suit: 'clubs', points: 8 },
  { rank: '9', suit: 'clubs', points: 9 },
  { rank: '10', suit: 'clubs', points: 10 },
  { rank: 'Jack', suit: 'clubs', points: 10 },
  { rank: 'Queen', suit: 'clubs', points: 10 },
  { rank: 'King', suit: 'clubs', points: 10 },
  { rank: 'Ace', suit: 'diamonds', points: 11 },
  { rank: '2', suit: 'diamonds', points: 2 },
  { rank: '3', suit: 'diamonds', points: 3 },
  { rank: '4', suit: 'diamonds', points: 4 },
  { rank: '5', suit: 'diamonds', points: 5 },
  { rank: '6', suit: 'diamonds', points: 6 },
  { rank: '7', suit: 'diamonds', points: 7 },
  { rank: '8', suit: 'diamonds', points: 8 },
  { rank: '9', suit: 'diamonds', points: 9 },
  { rank: '10', suit: 'diamonds', points: 10 },
  { rank: 'Jack', suit: 'diamonds', points: 10 },
  { rank: 'Queen', suit: 'diamonds', points: 10 },
  { rank: 'King', suit: 'diamonds', points: 10 },
  { rank: 'Ace', suit: 'hearts', points: 11 },
  { rank: '2', suit: 'hearts', points: 2 },
  { rank: '3', suit: 'hearts', points: 3 },
  { rank: '4', suit: 'hearts', points: 4 },
  { rank: '5', suit: 'hearts', points: 5 },
  { rank: '6', suit: 'hearts', points: 6 },
  { rank: '7', suit: 'hearts', points: 7 },
  { rank: '8', suit: 'hearts', points: 8 },
  { rank: '9', suit: 'hearts', points: 9 },
  { rank: '10', suit: 'hearts', points: 10 },
  { rank: 'Jack', suit: 'hearts', points: 10 },
  { rank: 'Queen', suit: 'hearts', points: 10 },
  { rank: 'King', suit: 'hearts', points: 10 },
  { rank: 'Ace', suit: 'spades', points: 11 },
  { rank: '2', suit: 'spades', points: 2 },
  { rank: '3', suit: 'spades', points: 3 },
  { rank: '4', suit: 'spades', points: 4 },
  { rank: '5', suit: 'spades', points: 5 },
  { rank: '6', suit: 'spades', points: 6 },
  { rank: '7', suit: 'spades', points: 7 },
  { rank: '8', suit: 'spades', points: 8 },
  { rank: '9', suit: 'spades', points: 9 },
  { rank: '10', suit: 'spades', points: 10 },
  { rank: 'Jack', suit: 'spades', points: 10 },
  { rank: 'Queen', suit: 'spades', points: 10 },
  { rank: 'King', suit: 'spades', points: 10 }
];
var shuffleDeck = _.shuffle(cardDeck);

function cardGame(playerList, numberCards) {
  var players = [];
  console.log('Today\'s players are: ', playerList);

  for (var index = 0; index < playerList.length; index++) {
    players.push({
      name: playerList[index],
      hand: []
    });
  }

  console.log('Each player will receive ' + numberCards + ' cards.');

  dealCards(players, numberCards);

  console.log('Dealer has shuffled the deck!', shuffleDeck);
  console.log('Dealer has dealt out the cards!');

  calculateWinner(players, numberCards);

  var winningMessage = 'The winner of the game is: ' + players[winner].name + ' with ' + players[winner].score + ' points!';
  console.log(winningMessage);
}

cardGame(playerList, 2);
cardGame(['Kevin', 'Sam', 'Kate', 'James', 'Ryan'], 1);

function dealCards(players, numberCards) {
  shuffleDeck = _.shuffle(cardDeck);
  for (var cardIndex = 0; cardIndex < numberCards * players.length; cardIndex++) {
    for (var i = 0; i < players.length; i++) {
      players[i].hand.push(shuffleDeck[cardIndex]);
      cardIndex++;
    }
  }
}

function calculateWinner(players, numberCards) {
  var totalPoints = 0;
  for (var y = 0; y < players.length; y++) {
    for (var handIndex = 0; handIndex < numberCards; handIndex++) {
      console.log(players[y].name + ' has the ' + players[y].hand[handIndex].rank + ' of ' + players[y].hand[handIndex].suit);
      totalPoints += players[y].hand[handIndex].points;
    }
    players[y].score = totalPoints;
    console.log(players[y].name + ' has ' + totalPoints + ' total points.');
    totalPoints = 0;
  }

  for (var playerIndex = 0; playerIndex < players.length; playerIndex++) {
    for (var playerCompare = 1; playerCompare < players.length; playerCompare++) {
      if (players[playerIndex].score > totalPoints) {
        totalPoints = players[playerIndex].score;
        winner = [playerIndex];
      }
    }
  }
}
