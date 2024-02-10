import { Component } from "react";
import HooksCounter from "./HooksCounter";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Click to Increment</button>
        <HooksCounter />
      </div>
    );
  }
}

export default ClassCounter;
