// Composant principal de notre application
// qui peut contenir des éléments communs à toutes les pages

import React from 'react';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* Autres éléments communs à toutes les pages */}
    </div>
  );
};

export default App;
