const quotes = 
  ["“Success is not final; failure is not fatal: It is the courage to continue that counts.” ","“It is better to fail in originality than to succeed in imitation","“The road to success and the road to failure are almost exactly the same.”","“I never dreamed about success. I worked for it.”","“The standard you walk past is the standard you accept.”","“When I believe in something, I’m like a dog with a bone.”","“Keep your eyes on the stars and your feet on the ground.”","“Either you run the day or the day runs you.”","“I’m a great believer in luck, and I find the harder I work, the more I have of it.”"]


const quoteText=document.getElementById('quotetext');
const quoteButton=document.getElementById('quotebutton')
// function for generate random quote
function generateRandomQuote(){
  // generate random index
  const randomIndex= Math.floor(Math.random()*quotes.length);

  // get the quote
  const randomQuote=quotes[randomIndex]
  // update dom with new quote
  quoteText.textContent=randomQuote
}
  // Event listener for button click
quoteButton.addEventListener('click',generateRandomQuote);


 generateRandomQuote();