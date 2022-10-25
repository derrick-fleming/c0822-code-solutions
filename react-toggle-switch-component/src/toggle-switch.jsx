import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    let divClass = 'toggle off';
    let buttonText = 'OFF';
    if (this.state.toggleStatus === true) {
      divClass = 'toggle on';
      buttonText = 'ON';
    }
    return (
        <div>
          <div className={divClass}>
            <button className="switch" onClick={this.handleToggle}></button>
          </div>
          <h2 className="inline">{buttonText}</h2>
        </div>
    );
  }

  handleToggle() {
    if (this.state.toggleStatus === false) {
      this.setState({
        toggleStatus: true
      });
    } else if (this.state.toggleStatus === true) {
      this.setState({
        toggleStatus: false
      });
    }
  }
}
