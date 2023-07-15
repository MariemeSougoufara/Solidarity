import React, { useState } from 'react';
import './LoginPage.css';
import RegistrationPage from './RegistrationPage';
import profile from "./images/logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer une requête AJAX au serveur PHP pour vérifier les informations de connexion
   
    fetch('http://localhost/login.php', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Authentification réussie, effectuez les actions nécessaires
          console.log('Authentification réussie');
          // Vous pouvez rediriger l'utilisateur vers une autre page ou effectuer d'autres actions ici
        } else {
          // Authentification échouée, afficher un message d'erreur
          setError(data.message);
        }
      })
      .catch((error) => {
        console.error('Erreur lors de l\'authentification:', error);
      });
  };

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleBack = () => {
    setShowRegistration(false);
  };

  if (showRegistration) {
    return <RegistrationPage onBack={handleBack} />;
  }

  return (
    
    <div className="login-page">
      <div className="sub-login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt ="profile"/>
            </div>
          </div>
        <div>
          <label>Nom d'utilisateur:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Se connecter</button>
          <button type="button" onClick={handleRegisterClick}>
            S'inscrire
          </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;

