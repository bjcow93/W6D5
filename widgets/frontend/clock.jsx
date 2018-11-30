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
      <>
      <h1>clock</h1>
      <p>{hours}:{minutes}:{seconds}</p>
      </>
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
