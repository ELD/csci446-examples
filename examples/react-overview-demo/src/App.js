// import { useState } from "react";
// import Quote from "./Quote";
import Todos from "./Todos";

function App() {
  // const [quote, setQuote] = useState(null);

  // const fetchQuote = async () => {
  //   const response = await fetch('https://dummyjson.com/quotes/random');
  //   const quote = await response.json();
  //   setQuote(quote);
  // }

  return (
    <div>
      {/*<button onClick={fetchQuote}>Fetch random quote</button>
      {quote ? <Quote quote={quote} /> : null} */}
      <Todos />
    </div>
  );
}

export default App;
