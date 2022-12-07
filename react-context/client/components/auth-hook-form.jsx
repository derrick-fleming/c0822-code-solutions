import React, { useState } from 'react';

export default function AuthForm(props) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function updateUsername(event) {
    const { value } = event.target;
    setUser(value);
  }

  function updatePassword(event) {
    const { value } = event.target;
    setPass(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { action } = props;
    const state = {
      username: user,
      password: pass
    };
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          props.onSignIn(result);
        }
      });
  }

  const { action } = props;
  const alternateActionHref = action === 'sign-up'
    ? '#sign-in'
    : '#sign-up';
  const alternatActionText = action === 'sign-up'
    ? 'Sign in instead'
    : 'Register now';
  const submitButtonText = action === 'sign-up'
    ? 'Register'
    : 'Log In';

  return (
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            required
            autoFocus
            id="username"
            type="text"
            name="username"
            onChange={updateUsername}
            className="form-control bg-light" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            required
            id="password"
            type="password"
            name="password"
            onChange={updatePassword}
            className="form-control bg-light" />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <small>
            <a className="text-muted" href={alternateActionHref}>
              { alternatActionText }
            </a>
          </small>
          <button type="submit" className="btn btn-primary">
            { submitButtonText }
          </button>
        </div>
      </form>
  );
}
