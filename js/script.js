/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// Color variables

// Quotes array
const quotes = [
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    citation: null,
    year: null,
  },
  {
    quote: "Make it so!.",
    source: "Captain Jean Luc Picard",
    citation: "Star Trek: The Next Generation",
    year: null,
  },
  {
    quote: "Optimism is the faith that leads to achievement.",
    source: "Helen Keller",
    citation: null,
    year: null,
  },
  {
    quote: "Humility is no substitute for a good personality",
    source: "Fran Lebowitz",
    citation: "Metropolitan Life",
    year: 1978,
  },
  {
    quote: "You do have your moments. Not many, but you have them.",
    source: "Princess Leia",
    citation: "The Empire Strikes Back",
    year: 1980,
  },
]

// Pick a random quote from array
const getRandomQuote = function () {
  const index = Math.floor(Math.random() * quotes.length)
  return quotes[index]
}

// display selected quote in DOM
const printQuote = function () {
  const quoteObj = getRandomQuote()
  let HTML = `
  <p class="quote"> ${quoteObj.quote} </p>
  <p class="source"> ${quoteObj.source}
  `
  if (quoteObj.citation) {
    HTML += `<span class="citation"> ${quoteObj.citation} </span>`
  }
  if (quoteObj.year) {
    HTML += `<span class="year"> ${quoteObj.year} </span> `
  }
  HTML += `</p>`

  document.getElementById("quote-box").innerHTML = HTML

  // color variables
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)

  document.querySelector(
    "body"
  ).style.backgroundColor = `rgb(${red},${green},${blue})`
}

// Event listener attached to "show" button
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false)

setInterval(printQuote, 2500)
