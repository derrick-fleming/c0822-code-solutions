import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClick: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let overlayClass;
    let menuClass;
    if (this.state.menuClick === true) {
      overlayClass = 'overlay';
      menuClass = 'modal-container';
    } else {
      overlayClass = 'overlay exit-overlay';
      menuClass = 'modal-container sliding';
    }

    return (
      <div>
        <div className={overlayClass} onClick={this.handleClick}></div>
        <div className={menuClass}>
          <h2>Choose a Game</h2>
          <h3 onClick={this.handleClick}>Super Mario 64</h3>
          <h3 onClick={this.handleClick}>Super Mario Sunshine</h3>
          <h3 onClick={this.handleClick}>Super Mario Galaxy</h3>
          <h3 onClick={this.handleClick}>Super Mario Odyssey</h3>
        </div>
        <i className="fa-solid fa-bars" onClick={this.handleClick}></i>
        <div>
          <img src='https://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Mario-icon.png'></img>
        </div>
      </div>
    );
  }

  handleClick() {
    if (this.state.menuClick === false) {
      this.setState({
        menuClick: true
      });
    }
    if (this.state.menuClick === true) {
      this.setState({
        menuClick: false
      });
    }
  }
}
