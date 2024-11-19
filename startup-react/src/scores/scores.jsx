import React from 'react';

import './scores.css';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
  }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <div lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scores - BYU Runners</title>
    <link rel="icon" href="favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="scores.css" />
  </head>
  <body>
    <header>
      <h1>BYU RUNNERS: All-Time Scores<sup>&reg;</sup></h1>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="play.html">Play</a></li>
          <li><a href="scores.html">Scores</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kenneth Rooks</td>
            <td>12,729</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Conner Mantz</td>
            <td>3,283</td>
          </tr>
          <tr>
            <td>3</td>
            <td>James Corrigan</td>
            <td>0 - sorry James</td>
          </tr>
        </tbody>
      </table>
    </main>

    <footer>
      <span>Davin Thompson</span>
      <br />
      <a href="https://github.com/deeruns/cs260startup">GitHub</a>
    </footer>
  </body>
</div>
  );
}
