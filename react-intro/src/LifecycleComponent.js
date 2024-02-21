import { Component } from "react";

// TODO: Write an example for Friday that unloads and cancels a timer
class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticks: 0,
    };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default ClassCounter;

