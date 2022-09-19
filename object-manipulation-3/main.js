console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
. Define a variable for the players. Make it an array.
. Define a variable for the winner's score. Set it to 0.
. Create a variable for the card deck. make it an array with objects for each card.
. Each card object will have a rank, a suit, and its #points.
. Shuffle the deck and assign it to a new variable: shuffle-deck (use the built in shuffle function)
. Define a function to play the game with two paraemters: The player list (an array) & #of cards they're playing with.
. Create an array for the players. Each array will contain an object with two properties: The name of the player & their hand (which will be an array).
. Pass the playerlist into the array so that each individual player will assigned to the name property.
. Pass out the cards to each of the players by pushing one card into the player's "hand" property.
. Cycle through all the players once (like in a real card deal. Then pass another card into players hand. Repeat until each # of cards.
. Then, begin point calculation.
. Add #of card's points together that a player has and return that value into a property called "score"
. After going through each player's hands and calculating their total points, begin comparing their scores together.
. Begin comparison with player 1. Check if player 1 has a total score higher than "0". Replace total score with player 1's score.
. Check then if next player has a score higher than the total score. If so, replace total score with their score.
. If not, keep the previous player's score as the total score.
. After cycling through all the scores. Check which score is the highest & which player has that score.
. Declare the player with the highest score as the winner!
. If there's a tie, declare a tiebreaker!
. First, calculate if there was a tie by seeing if multiple player's had the highest score.
. Then, replace their hands and their scores to reshuffle and deal.
. Declar the winner!
*/

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

var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var cards = {};

for (var index = 0; index < suits.length; index++) {
  for (var card = 0; card < ranks.length; card++) {
    cards.suit = suits[index];
    cards.rank = ranks[card];
    if (index < 9) {
      cards.points = 2 + index;
    } else if (index > 9 && index < 12) {
      cards.points = 10;
    } else {
      cards.points = 11;
    }
  }
}

function cardGame(playerList, numberCards) {
  var players = [];
  var tiePlayers = [];
  console.log('Today\'s players are: ', playerList);

  for (var index = 0; index < playerList.length; index++) {
    players.push({
      name: playerList[index],
      hand: []
    });
  }

  console.log('Each player will receive ' + numberCards + ' card(s).');

  dealCards(players, numberCards);
  calculateWinner(players, numberCards);
  var winningMessage = 'The winner of the game is: ' + players[winner].name + ' with ' + players[winner].score + ' points!';

  tiePlayers.push(players[winner]);

  for (var x = 0; x < players.length; x++) {
    if (players[x].score === players[winner].score && players[x].name !== players[winner].name) {
      tiePlayers.push(players[x]);
    }
  }

  if (tiePlayers.length > 1) {
    tieBreaker(tiePlayers, numberCards);
    winningMessage = 'The winner of the game is: ' + tiePlayers[winner].name + ' with ' + tiePlayers[winner].score + ' points!';
    console.log(winningMessage);
    return;
  }
  console.log(winningMessage);

}

function dealCards(players, numberCards) {
  shuffleDeck = _.shuffle(cardDeck);
  for (var cardIndex = 0; cardIndex < numberCards * players.length; cardIndex++) {
    for (var i = 0; i < players.length; i++) {
      players[i].hand.push(shuffleDeck[cardIndex]);
      cardIndex++;
    }
  }

  console.log('Dealer has shuffled the deck!', shuffleDeck);
  console.log('Dealer has dealt out the cards!');
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
    if (players[playerIndex].score > totalPoints) {
      totalPoints = players[playerIndex].score;
      winner = [playerIndex];
    }
  }
}

function tieBreaker(tiePlayers, numberCards) {
  console.log('We have a tie! We need to break the tie');
  for (var z = 0; z < tiePlayers.length; z++) {
    delete tiePlayers[z].hand;
    tiePlayers[z].hand = [];
    delete tiePlayers[z].score;
  }
  dealCards(tiePlayers, numberCards);
  calculateWinner(tiePlayers, numberCards);
}

cardGame(playerList, 2);
cardGame(['Kevin', 'Sam', 'Kate', 'James'], 2);
