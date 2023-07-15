import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = ({ onBack }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique d'enregistrement, par exemple, en envoyant les données au serveur
    console.log('Identifiant:', username);
    console.log('Numéro de téléphone:', phoneNumber);
    console.log('Nom:', fullName);
    console.log('Adresse:', address);
  };

  return (
    <div className="registration-page">
      <div className="sub-login-page">
      
      <form onSubmit={handleSubmit} className="registration-form">
        <div>
          <label>Identifiant:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Numéro de téléphone:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <label>Nom:</label>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div>
          <label>Adresse:</label>
          <input type="text" value={address} onChange={handleAddressChange} />
        </div>
        <button type="submit">S'inscrire</button>
        <button onClick={onBack}>Retour</button>
      </form>
      
      </div>
    </div>
  );
};

export default RegistrationPage;
