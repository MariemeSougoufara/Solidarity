import React from "react";
import { useNavigate } from "react-router-dom";

const ListeCagnottes = () => {

  const navigate = useNavigate();

  const handleRetourPageAcceuil = () => {
    navigate("/FormulaireCagnotte");
  };

  return (
    <div>
      <h1>AfficherLesCagnottes</h1>
      <h1>AfficherLesCagnottes</h1>
      <button type="submit" onClick={handleRetourPageAcceuil}>
        Retouner a la page d'acceuil
      </button>
    </div>
  );
};

export default ListeCagnottes;
