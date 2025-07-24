import React from 'react';
import './Home.css';
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-banner">
        <h1>Bienvenue à Espace Alouane</h1>
        <p>Un goût d'authenticité marocaine</p>
        <a href="/menu" className="cta-button">Découvrir le Menu</a>
      </div>
      <div className="intro-card">
        <h2>Bienvenue</h2>
         <p>
           Dans une ambiance inspirée des salons de thé marocains,
           Espace Alouane vous invite à savourer des instants uniques autour d'un thé à la menthe,
           de douceurs sucrées ou de plats faits maison.
          </p>

            <div className="home-actions">
              <a href="/reservation" className="cta-button">Réserver une table</a>
              <a href="/about" className="cta-link">En savoir plus sur nous →</a>
            </div>
      </div>

    </div>
  );
}

export default Home;
