import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.clickCount >= 18) {
      return <button className="eighteen-clicks">Hot Button</button>;
    } else if (this.state.clickCount >= 15) {
      return <button className="fifteen-clicks" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 12) {
      return <button className="twelve-clicks" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 9) {
      return <button className="nine-clicks" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 6) {
      return <button className="six-clicks" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 3) {
      return <button className="three-clicks" onClick={this.handleClick}>Hot Button</button>;
    }
    return <button className="default" onClick={this.handleClick}>Hot Button</button>;
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }
}
