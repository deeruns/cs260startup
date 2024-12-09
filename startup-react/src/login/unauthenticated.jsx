import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  // Login Function
  function loginUser() {
    const storedPassword = localStorage.getItem(`user_${userName}_password`);

    if (storedPassword === password) {
      localStorage.setItem('userName', userName); // Remember user
      props.onLogin(userName); // Trigger authenticated state
    } else {
      setDisplayError('Invalid username or password.');
    }
  }

  // Create Account Function
  function createUser() {
    const existingUser = localStorage.getItem(`user_${userName}_password`);

    if (existingUser) {
      setDisplayError('User already exists.');
    } else {
      localStorage.setItem(`user_${userName}_password`, password);
      localStorage.setItem('userName', userName); // Auto-login after creation
      props.onLogin(userName); // Trigger authenticated state
    }
  }

  return (
    <>
      <div className="login-form">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input
            className="form-control"
            type="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="button-group">
          <Button
            variant="primary"
            onClick={loginUser}
            disabled={!userName || !password}
          >
            Login
          </Button>
          <Button
            variant="outline-dark"
            onClick={createUser}
            disabled={!userName || !password}
          >
            Create
          </Button>
        </div>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}


