import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import React from 'react';
import './App.css';
export default function App() {
    return (
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              BYU Running
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='play.html'>
                  Play
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='scores.html'>
                  Scores
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about.html'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='login.html'>
                  Login
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>
          {/* Main content will be rendered here */}
          <h1>Welcome to BYU Running</h1>
          <p>Click on your favorite runners and show your support!</p>
        </main>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/yourusername/your-repo'>
              Source
            </a>
          </div>
        </footer>
      </div>
    );
  }