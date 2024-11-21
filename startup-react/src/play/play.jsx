import React, { useState, useEffect } from 'react';
import './play.css';

export function Play() {
  const [scores, setScores] = useState(() => {
    const savedScores = localStorage.getItem('runnerScores');
    return savedScores
      ? JSON.parse(savedScores)
      : {
          kennethRooks: 0,
          jamesCorrigan: 0,
          connerMantz: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem('runnerScores', JSON.stringify(scores));
  }, [scores]);

  const handleScoreUpdate = (runner) => {
    setScores((prevScores) => ({
      ...prevScores,
      [runner]: prevScores[runner] + 1,
    }));
  };

  return (
    <div>
      <header className="bg-primary text-white p-3 text-center">
        <h1>BYU RUNNERS: Click your favorite runner to show your support!!!<sup>&reg;</sup></h1>
      </header>
      <main className="container my-4">
        <div className="players mb-4 text-center">
          <h2>Purpose:</h2>
          <p>
            This page is for playing the "game" where users will spam click on their favorite runners, tallying up the
            score.
          </p>
        </div>

        <div className="runner-info mb-4">
          <h3>Kenneth Rooks</h3>
          <img
            width="300px"
            src="https://hips.hearstapps.com/hmg-prod/images/paris-france-7-august-2024-kenneth-rooks-of-team-usa-centre-news-photo-1723062547.jpg"
            alt="Kenneth Rooks"
            className="img-fluid clickable-image"
            onClick={() => handleScoreUpdate('kennethRooks')}
          />
          <div className="score mt-2">
            <label htmlFor="kennethScore">Score</label>
            <input
              type="text"
              id="kennethScore"
              value={scores.kennethRooks}
              readOnly
              className="form-control"
            />
          </div>
        </div>

        <div className="runner-info mb-4">
          <h3>James Corrigan</h3>
          <img
            width="300px"
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/2024_United_States_Olympic_trials_%28track_and_field%29_%2853814288518%29.jpg"
            alt="James Corrigan"
            className="img-fluid clickable-image"
            onClick={() => handleScoreUpdate('jamesCorrigan')}
          />
          <div className="score mt-2">
            <label htmlFor="jamesScore">Score</label>
            <input
              type="text"
              id="jamesScore"
              value={scores.jamesCorrigan}
              readOnly
              className="form-control"
            />
          </div>
        </div>

        <div className="runner-info mb-4">
          <h3>Conner Mantz</h3>
          <img
            width="300px"
            src="https://www.denverpost.com/wp-content/uploads/2024/05/DCC-L-24BBoulder864.jpg"
            alt="Conner Mantz"
            className="img-fluid clickable-image"
            onClick={() => handleScoreUpdate('connerMantz')}
          />
          <div className="score mt-2">
            <label htmlFor="connerScore">Score</label>
            <input
              type="text"
              id="connerScore"
              value={scores.connerMantz}
              readOnly
              className="form-control"
            />
          </div>
        </div>
      </main>
    </div>
  );
}





