import React from 'react';
import './scores.css';

export function Scores() {
  // Default predefined athletes
  const defaultScores = [
    { name: 'Kenneth Rooks', score: 0, date: '2024-06-01' },
    { name: 'Conner Mantz', score: 0, date: '2024-06-01' },
    { name: 'James Corrigan', score: 0, date: '2024-06-01' }
  ];

  const [scores, setScores] = React.useState(defaultScores);

  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      const savedScores = JSON.parse(scoresText);

      // Update only scores and dates for the default names
      const updatedScores = defaultScores.map((athlete) => {
        const matchingScore = savedScores.find((entry) => entry.name === athlete.name);
        if (matchingScore) {
          return {
            ...athlete,
            score: matchingScore.score,
            date: matchingScore.date
          };
        }
        return athlete;
      });

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
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
                <td>{score.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

