import React, { useEffect, useState } from 'react';
import './scores.css';

export function Scores() {
  const defaultScores = [
    { name: 'Kenneth Rooks', key: 'kennethRooks', score: 0 },
    { name: 'James Corrigan', key: 'jamesCorrigan', score: 0 },
    { name: 'Conner Mantz', key: 'connerMantz', score: 0 },
  ];

  const [scores, setScores] = useState(defaultScores);

  useEffect(() => {
    const savedScores = localStorage.getItem('runnerScores');
    if (savedScores) {
      const playScores = JSON.parse(savedScores);

      const updatedScores = defaultScores.map((athlete) => ({
        ...athlete,
        score: playScores[athlete.key] || 0,
      }));

      setScores(updatedScores);
    }
  }, []);

  return (
    <div>
      <header className="header">
        <h1>BYU RUNNERS: All-Time Scores<sup>&reg;</sup></h1>
      </header>

      <main className="main">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}





