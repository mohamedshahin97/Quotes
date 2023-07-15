// function

function generateQuote(){
var quote = ["Be yourself; everyone else is already taken.","So many books, so little time.","A room without books is like a body without a soul.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","If you tell the truth, you don't have to remember anything.","A friend is someone who knows all about you and still loves you.","To live is the rarest thing in the world. Most people exist, that is all."];
var name = ["Oscar Wilde","Frank Zappa","Marcus Tullius Cicero","Mae West","Mahatma Gandhi","Mark Twain","Elbert Hubbard","Oscar Wilde"]

var num = Math.floor( Math.random() * quote.length )

document.getElementById("quote").textContent = quote[num];
document.getElementById("name").textContent = name[num]; 
}
generateQuote()