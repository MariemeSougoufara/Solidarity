import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResumeCagnotte = () => {
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate(-1);
  };

  const handleValider = () => {
    navigate("/CagnotteSuccess");
  };

  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="resume-cagnotte">
      <h1>Résumé de la cagnotte</h1>
      <ul>
        <li>Nom de la cagnotte : {formData?.nomCagnotte}</li>
        <li>Objectif initial : {formData?.objectifInitial}</li>
        <li>Don suggéré : {formData?.donSuggere}</li>
        <li>Description : {formData?.description}</li>
        {/* Afficher d'autres données du formulaire */}
      </ul>
      <div className="button-container">
        <button className="button-retour" type="submit" onClick={handleRetour}>
            Annuler
        </button>
        <button
          className="button-valider"
          type="submit"
          onClick={handleValider}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default ResumeCagnotte;
