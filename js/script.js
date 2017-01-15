var quotes = [
    {
        quote: 'Don\'t cry because it\'s over, smile because it happened.',
        source: 'Dr. Seuss',
        category: 'Life',
        tags: 'Life, Optimism'
    },
    {
        quote: 'Life is 10% what happens to you and 90% how you react to it.',
        source:'Charles R. Swindoll',
        category: 'Life',
        tags: 'Life'
    },
    {
        quote: 'In order to succeed, we must first believe that we can.',
        source: 'Nikos Kazzantzakis',
        category: 'Motivation',
        tags: 'Success, Believe'
    },
    {
        quote: 'The secret of getting ahead is getting started.',
        source: 'Mark Twain',
        category: 'Motivation',
        tags: 'Getting ahead, Starting'
    },
    {
        quote: 'It does not matter how slowly you go as long as you do not stop.',
        source: 'Confucius',
        category: 'Motivation',
        tags: 'Motivation, Moving'
    }
    ,
    {
        quote: 'You cannot have a positive life and a negative mind.',
        source: 'Joyce Meyer',
        category: 'Positive',
        tags: 'Life, Mind, Negativity, Negative'
    },
    {
        quote: 'Success is not final, failure is not fatal; it is the courage to continue that counts.',
        source: 'Winston Churchill',
        category: 'Success',
        tags: 'Courage, Failure, Success'
    }
];

var usedQuoteIndexes = [];
var intervalTime = 30 * 1000; // 30 Seconds
var quoteInterval;

// Click event handler
var onClick = function () {
    // If interval already exists, clear it (to  restart it)
    if (quoteInterval) {
        window.clearInterval(quoteInterval);
    }

    // Change quotes
    changeQuote();

    // Restart the quote interval
    setQuoteInterval();
};

var changeQuote = function () {
    printQuote();
    setRandomBackgroundColor();
};

var getRandomQuote = function () {
    // Check if all quotes have been used and reset
    if (usedQuoteIndexes.length === quotes.length) {
        usedQuoteIndexes = [];
    }

    // Select and return a random quote object that has not been used before
    var index = Math.floor(Math.random() * quotes.length);
    while (usedQuoteIndexes.indexOf(index) !== -1) {
        index = Math.floor(Math.random() * quotes.length);
    }

    usedQuoteIndexes.push(index);

    return quotes[index];
};

// Generate HTML for quote
var printQuote = function () {
    var quoteObject = getRandomQuote();

    // Fill in mandatory properties
    var template = '' +
        '<p class="quote"> ' + quoteObject.quote + ' </p> ' +
        '<p class="source"> ' + quoteObject.source + ' ';

    // Check if optional properties exist
    if (quoteObject.citation) {
        template += '<span class="citation"> ' + quoteObject.citation + ' </span> ';
    }

    if (quoteObject.year) {
        template += '<span class="year"> ' + quoteObject.year.toString() + ' </span> ';
    }

     template += '</p>';

    // Write to document
    document.getElementById('quote-box').innerHTML = template;
};

// Create RGB color and set it to the body's background color
var setRandomBackgroundColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
};

// Create interval to change quote after intervalTime
var setQuoteInterval = function () {
    quoteInterval = window.setInterval(changeQuote, intervalTime);
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "onClick" function is called
document.getElementById('loadQuote').addEventListener("click", onClick, false);

// Start quote interval when page loads
setQuoteInterval();