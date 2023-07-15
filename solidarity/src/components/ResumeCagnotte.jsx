import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResumeCagnotte = () => {
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate(-1);
  };

  const handleValider = () => {
    navigate("/ListeCagnottes");
  };

  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="resume-cagnotte">
      <h1>Résumé de la cagnotte</h1>
      <ul>
        <li>Nom de la cagnotte : {formData?.nomCagnotte}</li>
        <li>Objectif initial : {formData?.objectifInitial}</li>
        <li>Description : {formData?.description}</li>
        <li>Don suggéré : {formData?.donSuggere}</li>
        <li>Date limite des participations : {formData?.dateLimite}</li>
        {/* Afficher d'autres données du formulaire */}
      </ul>
      <div className="button-container">
        <button className="button-valider" type="submit" onClick={handleValider}>
          Valider
        </button>
        <button className="button-retour" type="submit" onClick={handleRetour}>
          Retourner en arrière
        </button>
      </div>
    </div>
  );
};

export default ResumeCagnotte;
