import React from "react";
import { quotes } from "../staticData/quotes";
const Quote = () => {
  const inspirationalQuotes = quotes.filter((quote) =>
    quote.topics.includes("Inspirational")
  );
  const getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const { author, quote } = getRandomQuote(inspirationalQuotes);

  return (
    <p className="quote-container">
      {quote} ~ {author}
    </p>
  );
};

export { Quote };
