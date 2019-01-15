//created an array called quotes with elements quote and source
var quotes = [
  {quote: 'There is nothing permanent except change.', source: 'Heraclitus'},
  {quote: 'Learning never exhausts the mind.', source:'Leonardo da Vinci'},
  {quote: 'There is no charm equal to tenderness of heart.', source:'Jane Austen' },
  {quote: 'All that we see or seem is but a dream within a dream.', source: 'Edgar Allen Poe' },
  {quote: 'You cannot shake hands with a clenched fist.',  source: 'Indira Gandhi' },
];

/**
created a function to grab a random quote using the array parameter
used the random number methos to pull a random index
returned the random quote
**/

function getRandomQuote(array) {
  var quoteChoose = Math.floor(Math.random() * (quotes.length));
    for (var I = 0; I < array.length; I++) {
      var randomQuote = array[quoteChoose];
    }
    return randomQuote;
}

/** created a print quote function than beings with and empty variable Message
then begins to fill the message to load to the page **/

function printQuote () {
  var message = " ";
  var quoteShow = getRandomQuote(quotes);
  message += "<p class='quote'>" + quoteShow.quote + "</p>";
  message += "<p class='source'>" + quoteShow.source;

document.getElementById('quote-box').innerHTML = message;
}

printQuote();
/***
Dev done by treehouse to give display button to page to allow to
change quote on clicking
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
