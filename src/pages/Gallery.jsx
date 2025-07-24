import React from "react";
import './Gallery.css';

const images=[
    '',
    '',
    '',
]
function Gallery(){
    return(
        <div className="gallery">
            <h1 className="gallery-title">Galerie des photos</h1>
            <p className="gallery-description">
                Plongez dans l'univers d'Espace Alouane à travers ces clichés de notre espace, nos plats, et notre atmosphère.
            </p>
            <div className="gallery-grid">
                {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
            </div>
        </div>
    );
}
export default Gallery;