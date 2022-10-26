import React from 'react';

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const password = this.state.value;
    const specialCharacters = /[!@#$%^&*()]/;
    const uppercaseCharacters = /[A-Z]/;
    const digit = /\d/;
    let message;
    let icon;
    if (this.state.value === '') {
      message = 'A password is required';
      icon = 'xmark';
    } else if ((password.length >= 1 && password.length < 8)) {
      message = 'Password must be over 8 characters.';
      icon = 'xmark';
    } else if ((!specialCharacters.test(password)) || (!uppercaseCharacters.test(password)) || (!digit.test(password))) {
      message = 'Include: capital letter, digit, and special characters.';
    } else {
      icon = 'check';
    }

    return (
      <form>
        <label htmlFor="password">Password</label>
        <div className="row">
        <input type="password" id="password" value={this.state.value} onChange={this.handlePassword} autoComplete="new-password"></input>
          <i className={`fa-solid fa-${icon}`}></i>
        </div>
        <p className='invalid'>{message}</p>
      </form>
    );
  }
}
