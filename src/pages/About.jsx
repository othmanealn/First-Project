import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
       <h1>À propos d'Espace Alouane</h1>

      <section className="about-section">
        <h2>Notre histoire</h2>
        <p>
          Espace Alouane est né de la passion pour la tradition marocaine et l'envie de recréer chez nous cette ambiance unique des salons de thé,
          où chaque instant est une invitation à la détente et au partage. Depuis notre ouverture, nous accueillons nos clients comme des amis,
          autour d'un thé à la menthe préparé avec soin et de douceurs sucrées faites maison.
        </p>
      </section>

      <section className="about-section">
        <h2>Notre mission</h2>
        <p>
          Nous souhaitons offrir un véritable voyage sensoriel au cœur du Maroc, en alliant authenticité, convivialité et qualité.
          Notre mission est de faire découvrir ou redécouvrir le plaisir simple d'un moment de pause, dans un décor chaleureux inspiré des rituels du thé marocain.
        </p>
      </section>

      <section className="about-section">
        <h2>L'équipe</h2>
        <p>
          Derrière Espace Alouane, une équipe passionnée qui s'engage à transmettre les saveurs et l'accueil marocain.
          Chacun met son savoir-faire et son sourire au service de votre confort et de votre satisfaction.
        </p>
      </section>

      <section className="about-section">
        <h2>Ce que nous proposons</h2>
        <ul>
          <li>Un large choix de thés à la menthe traditionnels, préparés avec des feuilles soigneusement sélectionnées.</li>
          <li>Des pâtisseries marocaines authentiques, préparées chaque jour dans notre cuisine.</li>
          <li>Des plats faits maison, inspirés des recettes familiales et locales, pour combler toutes les envies.</li>
        </ul>
      </section>

      <section className="about-section testimonials">
        <h2>Témoignages</h2>
        <blockquote>
          « Un endroit où l'on se sent comme chez soi, avec des saveurs qui rappellent le Maroc authentique. » - <strong>Leila M.</strong>
        </blockquote>
        <blockquote>
          « L'accueil est chaleureux, le thé est exquis, et l'ambiance invite à la détente. » - <strong>Karim B.</strong>
        </blockquote>
      </section>

      <section className="about-section contact-cta">
        <h2>Venez nous rendre visite !</h2>
        <p>
          Que ce soit pour une pause gourmande, un moment entre amis ou une réunion conviviale,
          Espace Alouane est votre destination idéale.
        </p>
        <div className="buttons">
          <a href="/contact" className="btn">Contactez-nous</a>
          <a href="https://www.instagram.com/othmane_aln/" target="_blank" rel="noopener noreferrer" className="btn btn-instagram">Suivez-nous sur Instagram</a>
        </div>
      </section>
    </div>
  );
}

export default About; 