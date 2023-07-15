import React from 'react';

const Navbar = () => {
  return (
    <div className="Navbar">
      {/* Contenu de la barre de navigation */}
      <h1>Mon site</h1>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/cagnotte">Cagnotte</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
