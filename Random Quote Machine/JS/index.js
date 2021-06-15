const newQuote = document.getElementById('new-quote');
const tweet = document.getElementById('tweet-quote');
const text = document.getElementById('inaText');
const author=document.getElementById('author');

var colors=[
    '#a2c39a',
    '#8daef4',
    '#e384a3',
    '#aba29b',
    '#87a1f4',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

var quotes=[
{
    id:1,
    quote: "The government is unresponsive to the needs of the little man. Under 5'7, it is impossible to get your congressman on the phone.",
    author: 'Woody Allen'
},
{
    id:2,
    quote: 'A friend told me that each morning when we get up we have to decide whether we are going to save or savor the world. I do not think that is the decision. It is not an either-or, save or savor. We have to do both, save and savor the world.' ,
    author: 'Kate Clinton'
},
{
    id:3,
    quote: 'The greatest danger to our future is apathy.' ,
    author: 'Jane Goodall'
},
{
    id:4,
    quote: 'Never feel self-pity, the most destructive emotion there is. How awful to be caught up in the terrible squirrel cage of self.' ,
    author: 'Millicent Fenwick'
},
{
    id:5,
    quote: 'Nature magically suits a man to his fortunes, by making them the fruit of his character.' ,
    author: 'Ralph Waldo Emerson'
},
{
    id: 6,
    quote: 'Human well-being is not a random phenomenon. It depends on many factors - ranging from genetics and neurobiology to sociology and economics. But, clearly, there are scientific truths to be known about how we can flourish in this world. Wherever we can have an impact on the well-being of others, questions of morality apply.',
    author: 'Sam Harris'
},
{
    id: 7,
    quote: 'We can all fight against loneliness by engaging in random acts of kindness.',
    author: 'Gail Honeyman'
},
{
    id: 8,
    quote: 'The truth is that killing innocent people is always wrong - and no argument or excuse, no matter how deeply believed, can ever make it right. No religion on earth condones the killing of innocent people; no faith tradition tolerates the random killing of our brothers and sisters on this earth.' ,
    author: 'Feisal Abdul Rauf'
},
{
    id: 9,
    quote: 'There are good people who are dealt a bad hand by fate, and bad people who live long, comfortable, privileged lives. A small twist of fate can save or end a life; random chance is a permanent, powerful player in each of our lives, and in human history as well.' ,
    author: 'Jeff Greenfield'
},
{
    id: 10,
    quote: 'I actually think that the most efficacious way of making a difference is to lead by example, and doing random acts of kindness is setting a very good example of how to behave in the world.',
    author: 'Misha Collins'
},
{
    id: 11,
    quote: 'Maybe life is random, but I doubt it.' ,
    author: 'Steven Tyler'
},
{
    id: 12,
    quote: 'An Internet meme is a hijacking of the original idea. Instead of mutating by random change and spreading by a form of Darwinian selection, Internet memes are altered deliberately by human creativity. There is no attempt at accuracy of copying, as with genes - and as with memes in their original version.' ,
    author: 'Richard Dawkins'
}
];


var setColors = function(){
    var color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color];
    document.getElementById('text').style.color = colors[color];
    document.getElementById('author').style.color = colors[color];
    document.getElementById('new-quote').style.backgroundColor = colors[color];
    document.getElementById('twicon').style.color = colors[color];
}

var genQuote = function (){  
    var randQuoteIndex = Math.floor(Math.random() * quotes.length);
    var generateText = quotes[randQuoteIndex]['quote'];
    var generateAuthor = quotes[randQuoteIndex]['author'];

    setColors();
    text.innerText = generateText;
    author.innerText = " - " + generateAuthor;
    
};

var share = function(){
    var currentText = text.innerText;
    var currentAuthor = author.innerText;
    tweet.target="_blank";
    tweet.href="https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + currentText + '" '  +currentAuthor)
}

newQuote.onclick = genQuote;
tweet.onclick = share;