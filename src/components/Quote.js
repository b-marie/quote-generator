/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const quotesList = require('../resources/quotes');

const Quote = () => {
  const quotes = quotesList;
  const randomQuoteNumber = Math.floor(Math.random() * Math.floor(quotes.length));
  const quote = quotes[randomQuoteNumber];

  return (
    <div>
      <p className="quoteQuote">&quot;{quote.quote}&quot;</p>
      <p className="quoteAuthor">- {quote.author}</p>
    </div>
  );
};

export default Quote;
