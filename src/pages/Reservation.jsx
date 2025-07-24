import React from "react";
import './Reservation.css';

function Reservation(){
    return(
        <div className="reservation">
            <h2>Réservation</h2>
      <form>
        <input type="text" placeholder="Nom" required />
        <input type="date" required />
        <input type="time" required />
        <input type="number" placeholder="Nombre de personnes" required />
        <button type="submit">Réserver</button>
      </form>

        </div>
    );
}
export default Reservation;