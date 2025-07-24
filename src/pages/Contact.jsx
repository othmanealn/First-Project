import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contactez-nous</h1>
      <p className="contact-subtitle">
        Une question ? Une réservation spéciale ? Nous sommes à votre écoute.
      </p>

      <div className="contact-container">
        <div className="form-section">
          <form className="contact-form">
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="E-mail" required />
            <textarea rows="5" placeholder="Votre message..." required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>

        <div className="info-section">
          <h3>Espace ALOUANE</h3>
          <p><strong>Adresse :</strong> rue farouk errahal, Sidi Moumen, Casablanca</p>
          <p><strong>E-mail :</strong> espacealouane@gmail.com</p>
          <p><strong>Téléphone :</strong> 0668608093</p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101108.46281029869!2d-7.621684210937517!3d33.57639324495356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb4fc88d529d%3A0xc95139e11e15713d!2sEspace%20ALOUANE!5e1!3m2!1sfr!2sma!4v1753348476107!5m2!1sfr!2sma"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
