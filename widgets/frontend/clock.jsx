import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }

  render () {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    return (
      <div className="clock-widget">
        <p>
          <span>Time</span>
          <span>{hours}:{minutes}:{seconds}</span>
        </p>
        <p>
          <span>Date</span>
          <span>{this.state.time.toDateString()}</span>
        </p>
      </div>
    );
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}




export default Clock;
