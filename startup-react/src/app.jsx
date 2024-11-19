import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'; // Shared styling across pages

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-primary'>
            <div className='container'>
              <span className='navbar-brand'>
                BYU RUNNERS<sup>&reg;</sup>
              </span>
              <div className='navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                      Login
                    </NavLink>
                  </li>
                  {authState === AuthState.Authenticated && (
                    <>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/play'>
                          Play
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/scores.html'>
                          Scores
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/about'>
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className='mt-5 pt-5'>
          <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
            />
            <Route path='/play' element={<Play userName={userName} />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <footer className='footer bg-primary text-light mt-auto py-3'>
          <div className='container text-center'>
            <span className='text-reset'>Davin Thompson</span>
            <br />
            <a href='https://github.com/deeruns/cs260startup' className='text-reset'>
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
    <main className='container-fluid bg-secondary text-center'>
      <h2>404: Page Not Found</h2>
      <p>Return to the homepage.</p>
    </main>
  );
}

export default App;

