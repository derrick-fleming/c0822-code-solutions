import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onPlay: false,
      count: 0
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  render() {
    let icon;
    this.state.onPlay ? icon = 'pause' : icon = 'play';

    return (
      <div className='container'>
        <div className='watch-face' onClick={this.resetTimer}>
          <h1>{this.state.count}</h1>
        </div>
        <div className='container'>
          <button onClick={this.handleTimer} className='playButton'>
            <i className={`fa-solid fa-${icon}`}></i>
          </button>
        </div>
      </div>
    );
  }

  handleTimer() {
    if (this.state.onPlay === false) {
      this.timerID = setInterval(() => {
        this.setState({
          count: this.state.count + 1
        });
      }, 1000);
      this.setState({
        onPlay: true
      });
    } else {
      clearInterval(this.timerID);
      this.setState({
        onPlay: false
      });
    }
  }

  resetTimer() {
    if (this.state.onPlay === false) {
      this.setState({
        count: 0
      });
    }
  }
}
