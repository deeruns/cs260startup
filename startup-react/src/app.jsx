
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Simon<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='play'>
                    Play
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='scores'>
                    Scores
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

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
            exact
          />
          <Route path='/play' element={<Play userName={userName} />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-dark text-muted'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './app.css';


// export default function App() {
//     return (
//       <div className='body bg-dark text-light'>
//         <header className='container-fluid'>
//           <nav className='navbar fixed-top navbar-dark'>
//             <div className='navbar-brand'>
//               BYU Running
//             </div>
//             <menu className='navbar-nav'>
//               <li className='nav-item'>
//                 <a className='nav-link' href='index.html'>
//                   Home
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a className='nav-link' href='play.html'>
//                   Play
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a className='nav-link' href='scores.html'>
//                   Scores
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a className='nav-link' href='about.html'>
//                   About
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a className='nav-link' href='login.html'>
//                   Login
//                 </a>
//               </li>
//             </menu>
//           </nav>
//         </header>
  
//         <main>
//           {/* Main content will be rendered here */}
//           <h1>Welcome to BYU Running</h1>
//           <p>Click on your favorite runners and show your support!</p>
//         </main>
  
//         <footer className='bg-dark text-white-50'>
//           <div className='container-fluid'>
//             <span className='text-reset'>Author Name(s)</span>
//             <a className='text-reset' href='https://github.com/yourusername/your-repo'>
//               Source
//             </a>
//           </div>
//         </footer>
//       </div>
//     );
//   }
