import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
    navigate('/login'); // Redirect to login after logout
  }

  return (
    <div className="authenticated-container">
      <div className="playerName">{props.userName}</div>

      <Button
        className="btn-play me-2"
        variant="primary"
        onClick={() => navigate('/play')}
      >
        Play
      </Button>

      <Button
        className="btn-logout"
        variant="outline-danger"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
}
