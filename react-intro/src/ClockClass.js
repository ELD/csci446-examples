import { Component } from "react";

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("tick -- from a class component; componentWillMount");
      this.setState({ tick: this.state.tick + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount; timer cleared");
    clearInterval(this.timer);
  }

  render() {
    return (
      <p>{this.state.tick} seconds have passed</p>
    );
  }
}

export default ClockClass;

