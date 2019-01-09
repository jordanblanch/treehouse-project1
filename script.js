//created an array called quotes with elements quote and source
var Quotes = [
  {quote: 'There is nothing permanent except change.', Source: 'Heraclitus'},
  {quote: 'Learning never exhausts the mind.', Source:'Leonardo da Vinci'},
  {quote: 'There is no charm equal to tenderness of heart.', Source:'Jane Austen' },
  {quote: 'All that we see or seem is but a dream within a dream.', Source: 'Edgar Allen Poe' },
  {quote: 'You cannot shake hands with a clenched fist.',  Source: 'Indira Gandhi' },
];

/**
created a function to grab a random quote using the array parameter
used the random number methos to pull a random index
returned the random quote
**/

function getRandomQuote(array) {
  var QuoteChoose = Math.floor(Math.random() * (Quotes.length));
    for (var I = 0, I < array.length; I++) {
      var RandomQuote = array[QuoteChoose];
    }
    return RandomQuote;
}

/** created a print quote function than beings w/ and empty variable Message
then begins to fill the message to load to the page *//

function PrintQuote () {
  var Message = " ";
  var QuoteShow = getRandomQuote(Quotes);
  Message = "<p class='quote'>" + QuoteShow.Quote + "</p>";
  Message += "<p class='source'>" + QuoteShow.Source;

document.getElementById('quote-box').innerHTML = Message;
}

PrintQuote();
/***
Dev done by treehouse to give display button to page to allow to
change quote on clicking
***/
document.getElementById('loadQuote').addEventListener("click", PrintQuote, false);
