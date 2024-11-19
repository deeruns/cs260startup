import React from 'react';
import './about.css';

export function About() {
  return (
    <div>
      {/* <header className="bg-primary text-white p-3 text-center">
        <h1>BYU RUNNERS<sup>&reg;</sup></h1>
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
  </header> */}

      <main className="container my-4">
        
        <div id="image-container" className="text-center mb-4">
          <img className="img-fluid" width="400px" src="ncaa22.JPG" alt="ncaa22" />
        </div>

        <div className="text-dark mb-4">
          <p>
            This website is a place to show your support and love for BYU runners and Olympians. Running is a sport that
            doesn't get much love and attention due to the little media coverage. We appreciate any support we can get.
            Running is a sport that everyone and anyone can love and participate in.
          </p>

          <p>
            At the 2024 Paris Olympic Games, BYU had 6 athletes from the Track and Field distance program participate.
            We had Kenneth Rooks and James Corrigan run in the 3000m Steeplechase. We had Clayton Young and Conner Mantz
            compete in the Marathon. On the women's side, we had Whittni Orton-Morgan in the 5000m and Courtney Wayment
            in the 3000m Steeplechase.
          </p>
          <p>
            BYU sent the most athletes to the Olympic Games for Track and Field than any other NCAA program.
          </p>
        </div>

        <div id="quote" className="bg-primary text-white p-3 rounded text-center">
          <p>Consistent Competence = Eventual Excellence</p>
          <p>- Ed Eyestone</p>
        </div>
      </main>

      {/* <footer className="bg-dark text-white p-3 text-center">
        <hr className="border-white" />
        <span className="text-reset">Davin Thompson</span>
        <br />
        <a href="https://github.com/deeruns/cs260startup" className="text-white">GitHub</a>
      </footer> */}
    </div>
  );
}
