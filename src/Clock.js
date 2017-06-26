import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
      <h2>Current Time:</h2>
      <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

export default Clock;

