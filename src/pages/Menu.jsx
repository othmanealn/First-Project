import React from "react";
import './Menu.css';

function Menu(){
 return(
 <div className="menu">
   <h1 className="menu-title">Notre menu</h1>
   <div className="menu-section">
      <h2>Thé Marocain</h2>
      <ul>
         <li>
            <span>Thé à la menthe</span>
            <span>15 dh</span>
         </li>
         <li>
            <span>Thé à la fleur d'oranger</span>
            <span>18 dh</span>
         </li>
      </ul>
   </div>

   <div className="menu-section">
      <h2>Pâtisserie Maison</h2>
      <ul>
         <li>
            <span>Corne de gazelle</span>
            <span>8 dh</span>
         </li>
         <li>
            <span>Chebakia</span>
            <span>10 dh</span>
         </li>
      </ul>
      <div className="menu-section">
        <h2>Plats du Jour</h2>
        <ul>
          <li>
            <span>Tajine de poulet citron confit</span>
            <span>65 dh</span>
          </li>
          <li>
            <span>Couscous royal</span>
            <span>80 dh</span>
          </li>
        </ul>
      </div>

   </div>
   
    

 </div>
 );
}

export default Menu;
