import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = useState(currentAuthState);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://your-server-url');

    ws.onmessage = (event) => {
      const receivedEvent = JSON.parse(event.data);
      const notificationText = `${receivedEvent.type}: ${receivedEvent.value.runner || receivedEvent.value.name}`;
      addNotification(notificationText);
    };

    return () => ws.close();
  }, []);

  const addNotification = (notificationText) => {
    setNotifications((prev) => [...prev, notificationText]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((note) => note !== notificationText));
    }, 10000);
  };

  const notifyUserAction = (type, value) => {
    const notificationText = `${type}: ${value}`;
    addNotification(notificationText);
  };

  return (
    <BrowserRouter>
      <div className="body">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container">
              <span className="navbar-brand text-white">
                BYU RUNNERS<sup>&reg;</sup>
              </span>
              <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  {authState === AuthState.Authenticated && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/play">
                          Play
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/scores">
                          Scores
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="container mt-5 pt-5">
          <div className="main-content">
            <h2>Notifications</h2>
            <ul className="notifications-list">
              {notifications.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route
                path="/login"
                element={
                  <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                      setAuthState(authState);
                      setUserName(userName);
                      notifyUserAction('Login', userName);
                    }}
                  />
                }
              />
              <Route path="/play" element={<Play userName={userName} onVote={notifyUserAction} />} />
              <Route path="/scores" element={<Scores />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <footer className="footer mt-auto py-3">
          <div className="container text-center">
            <span className="text-reset">Davin Thompson</span>
            <br />
            <a href="https://github.com/deeruns/cs260startup" className="text-reset">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <h2>404: Page Not Found</h2>
      <p>Return to the homepage.</p>
    </main>
  );
}

export default App;



