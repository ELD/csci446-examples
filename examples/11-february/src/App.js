import { Component, useEffect, useState } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };

//     this.incrementCounter = this.incrementCounter.bind(this);
//   }

// componentDidUpdate() {
//   document.title = `Counter Clicks: ${this.state.counter}`;
// }

//   incrementCounter() {
//     this.setState((state, props) => {
//       return { counter: state.counter + 1 };
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <p>The counter has been clicked {this.state.counter} times.</p>
//         <button onClick={this.incrementCounter}>Click to Increment</button>
//       </div>
//     );
//   }
// }

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter Clicks: ${counter}`;
  }, [counter]);

  return (
    <div className="App">
      <p>The counter has been clicked {counter} times.</p>
      <button
        onClick={() => {
          setCounter((t) => t + 1);
        }}
      >
        Click to Increment
      </button>
    </div>
  );
};

export default App;
