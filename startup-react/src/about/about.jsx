import React, { useState, useEffect } from 'react';
import './about.css';

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quote, setQuote] = useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = useState('unknown');
  const [imageUrl, setImageUrl] = useState('');

  // Define an array of image URLs
  const images = [
    "https://byucougars.com/imgproxy/y4d9HxYXhIPWoEoHu2yngQT6U43WFliBZqiwlbT-HJc/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzA5LzEzL1o4ZVdhdHFtMTk3aERiYXNrOENhODVXbGRGSU93a2hIbkNweEUxTmcuanBn.jpg",
    "https://byucougars.com/imgproxy/hfqQ1PSqH0V0bL9JKhp3k5itN9xqAkuejkzgqzAoODo/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzA5LzEzLzJXUVlEWHd6RXVCalkwdHhWY1d6bWhrYzZzN1FFWGlqUlNiNU1hWmIuanBn.jpg",
    "https://byucougars.com/imgproxy/EANOQEU5SaWXp8ESd-QJsrA4zHu0dQj1Mc8fCrTD5t4/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzA5LzI3LzJ5WE5YZW1IVnBaUHo0d2NWVjFtNHdnRVZ3YU5GbTJITzlzQk9wd0kuanBn.jpg",
    "https://byucougars.com/imgproxy/0y2nUb6yLot9hIJkJqRdJDlxpymSY00Nyc2T4q0cWAo/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzExLzAxL2lodFBNV0dZY2RRaDdlem0zVG1YZjJ0YTAzNmNUTlVjQnFTeEo1V2EuanBn.jpg",
    "https://byucougars.com/imgproxy/PYdYkqqPEads3gmrrNq_Xx9fGMr5aHk_0zDtLvaNlqY/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzExLzAxL1FQU1ZTTzZCaDI3eWg3NjNDYVZhVEZZUm9lT1oyOTZFRGFjQXJUM1QuanBn.jpg",
    "https://byucougars.com/imgproxy/JD4uFhcyHHrdI7mDnXmL0NnBHmd213l2ZWHRw2dVHxI/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzExLzAxL3JHVlRWcFQyaWtsWlFvdUdiblAyQ0I5VHl3azg3WWNYVlZyVjhDc0guanBn.jpg",
    "https://byucougars.com/imgproxy/7e-g4p5cAOnvAlB8E6e8OlFc6EGqdwmCXA5E6HIR63E/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzExLzExL2F1VWtEdkZLUDIySmFEcVNXMkVwazREYkxERmdXWVh2ZENlZDh0RzYuanBn.jpg",
    "https://byucougars.com/imgproxy/TqJtteI8UEEWwvmMp12sy6MU4_tOw7nvPpMAEjBPnMs/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzExLzE4L3Q5aGV2cnF3clJTWlliOWRCVDlBZ0dtNnVLRHhENXp3MTAxU3lHVDguanBn.jpg",
    "https://byucougars.com/imgproxy/XbeO3NT2qGPEFtRvk1zMkAdoOj1dupAILmFm12Ao8G0/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2J5dWNvdWdhcnMtcHJvZC8yMDI0LzA4LzE1L0Y4M1BLZXZydmtkWW5TaWxZbU1IajFCV1dWU3dMa1lZRmZGVHJ4ZXMuanBn.jpg",
    "https://www.thechurchnews.com/resizer/v2/Z2SIKF4BQUBG4K47WZTEVGWYE4.jpg?auth=2347536e75ae4b0a3afcfd80df10801432aa91cda50a903da2c2ee80f84dc474&focal=1489%2C928&width=800&height=533"
  ];

  // Set initial image and quote
  useEffect(() => {
    setImageUrl(images[currentImageIndex]);
    setQuote('Consistent Competence = Eventual Excellence');
    setQuoteAuthor('Ed Eyestone');
  }, [currentImageIndex]);

  // Function to change the image when clicked
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <h1 className="header-byu-blue">The BYU Running World</h1>
        <p>Click below to see more pictures </p>
        <div id="picture" className="picture-box">
          <img
            src={imageUrl}
            alt="Running Moments"
            onClick={handleImageClick}
            className="img-fluid clickable-image"
          />
        </div>

        <p className="text-dark">
          This website is a place to show your support and love for BYU runners and Olympians. Running is a sport that doesn't
          get much love and attention due to the little media coverage. We appreciate any support we can get. Running is a sport
          that everyone and anyone can love and participate in.
        </p>

        <p className="text-dark">
          At the 2024 Paris Olympic Games, BYU had 6 athletes from the Track and Field distance program participate. We had
          Kenneth Rooks and James Corrigan run in the 3000m Steeplechase. We had Clayton Young and Conner Mantz compete in the
          Marathon. On the women's side, we had Whittni Orton-Morgan in the 5000m and Courtney Wayment in the 3000m
          Steeplechase.
        </p>

        <p className="text-dark">
          BYU sent the most athletes to the Olympic Games for Track and Field than any other NCAA program.
        </p>

        <div className="quote-box bg-light text-dark p-3 rounded">
          <p className="quote">{quote}</p>
          <p className="author">{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}

