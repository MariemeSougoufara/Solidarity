import React from "react";
import { useNavigate } from "react-router-dom";

const CagnotteSuccess = () => {
  const navigate = useNavigate();

  const handleRetourPageAccueil = () => {
    navigate("/");
  };

  return (
    <div className="resume-cagnotte">
      <div className="success-message">
        <h2>Félicitations !</h2>
        <p>Votre cagnotte a été créée avec succès.</p>
        <p>
          N'hésitez pas à partager le lien avec vos proches pour qu'ils puissent
          y contribuer.
        </p>
      </div>
      <div className="button-container">
        <button
          type="submit"
          className="button-retour"
          onClick={handleRetourPageAccueil}
        >
          Accueil
        </button>
      </div>
    </div>
  );
};

export default CagnotteSuccess;
