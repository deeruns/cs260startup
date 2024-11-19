import React from 'react';
import './play.css';

export function Play() {
  return (
    <div>
      <header className="bg-primary text-white p-3 text-center">
        <h1>BYU RUNNERS: Click your favorite runner to show your support!!!<sup>&reg;</sup></h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="play.html">Play</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="scores.html">Scores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="about.html">About</a>
            </li>
          </ul>
        </nav>
        <hr className="border-white" />
      </header>

      <main className="container my-4">
        <div className="players mb-4 text-center">
          <h2>Purpose:</h2>
          <span className="player-name">This page is for playing the "game" where users will spam click on their favorite runners, tallying up the score.</span>
        </div>

        <div className="runner-info mb-4">
          <h3>Kenneth Rooks</h3>
          <p>
            Silver Medal at the Paris Olympics in the 3000m Steeplechase. Born and Raised in Walla Walla Washington.
            Former BYU Cross Country and Track Runner. Current Nike Athlete.
          </p>
          <img
            width="200px"
            src="https://hips.hearstapps.com/hmg-prod/images/paris-france-7-august-2024-kenneth-rooks-of-team-usa-centre-news-photo-1723062547.jpg?crop=1xw:0.90566xh;center,top&resize=1200:*"
            alt="Kenneth Rooks at Olympics"
            className="img-fluid"
          />
          <div className="score mt-2">
            <label htmlFor="count">Score</label>
            <input type="text" id="count" defaultValue="--" readOnly className="form-control" />
          </div>
        </div>

        <div className="runner-info mb-4">
          <h3>James Corrigan</h3>
          <p>
            Paris Olympic Athlete in the 3000m Steeplechase. Current BYU athlete. AKA frisb_runner.
          </p>
          <img
            width="150px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2024_United_States_Olympic_trials_%28track_and_field%29_%2853814288518%29.jpg/1200px-2024_United_States_Olympic_trials_%28track_and_field%29_%2853814288518%29.jpg"
            alt="James Corrigan at Olympics"
            className="img-fluid"
          />
          <div className="score mt-2">
            <label htmlFor="count">Score</label>
            <input type="text" id="count" defaultValue="--" readOnly className="form-control" />
          </div>
        </div>

        <div className="runner-info mb-4">
          <h3>Conner Mantz</h3>
          <p>
            8th place in the Paris Olympics Marathon. Nike Athlete. BYU alumni.
          </p>
          <img
            width="150px"
            src="https://www.denverpost.com/wp-content/uploads/2024/05/DCC-L-24BBoulder864.jpg?w=1024&h=1403"
            alt="Conner Mantz at Marathon"
            className="img-fluid"
          />
          <div className="score mt-2">
            <label htmlFor="count">Score</label>
            <input type="text" id="count" defaultValue="--" readOnly className="form-control" />
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white p-3 text-center">
        <hr className="border-white" />
        <span className="text-reset">Davin Thompson</span>
        <br />
        <a href="https://github.com/deeruns/cs260startup" className="text-white">GitHub</a>
      </footer>
    </div>
  );
}

