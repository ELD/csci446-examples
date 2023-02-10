import "./Quote.css";

const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <blockquote>{quote.quote}</blockquote>
      <figcaption>{quote.author}</figcaption>
    </div>
  )
};

export default Quote;
