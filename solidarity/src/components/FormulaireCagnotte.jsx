import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Cagnotte.css";

const FormulaireCagnotte = () => {
  const navigate = useNavigate();

  // Pour le calendrier en francais
  useEffect(() => {
    registerLocale("fr", fr);
    setDefaultLocale("fr");
  }, []);

  // États pour stocker les valeurs des champs
  const [nomCagnotte, setNomCagnotte] = useState("");
  const [objectifInitial, setObjectifInitial] = useState("");
  const [description, setDescription] = useState("");
  const [donSuggere, setDonSuggere] = useState("");
  const [dateLimite, setDateLimite] = useState(null);
  const [masquerMontantGlobal, setMasquerMontantGlobal] = useState(false);
  const [masquerParticipations, setMasquerParticipations] = useState(false);
  const [masquerParticipants, setMasquerParticipants] = useState(false);
  const [notificationsEmail, setNotificationsEmail] = useState(false);

  const handleOuvrirCagnotte = () => {
    // Récupérer les données du formulaire
    const formData = {
      nomCagnotte,
      objectifInitial,
      description,
      donSuggere,
      dateLimite,
      masquerMontantGlobal,
      masquerParticipations,
      masquerParticipants,
      notificationsEmail,
    };
    navigate("/ResumeCagnotte", { state: { formData } });
  };

  /*
  // Gestionnaires de changement pour mettre à jour les états des champs
  const handleChange = (input) => (event) => {
    switch (input) {
      case "nomCagnotte":
        setNomCagnotte(event.target.value);
        break;
      case "objectifInitial":
        setObjectifInitial(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "donSuggere":
        setDonSuggere(event.target.value);
        break;
      case "dateLimite":
        setDateLimite(event.target.value);
        break;
      case "masquerMontantGlobal":
        setMasquerMontantGlobal(event.target.checked);
        break;
      case "masquerParticipations":
        setMasquerParticipations(event.target.checked);
        break;
      case "masquerParticipants":
        setMasquerParticipants(event.target.checked);
        break;
      case "notificationsEmail":
        setNotificationsEmail(event.target.checked);
        break;
      default:
        break;
    }
  };

  const handleClickOuvrirCagnotte = () => {
    // Effectuer les vérifications ici
    const newErrors = {};
    // Vérification pour le nom de la cagnotte (uniquement des lettres)
    if (!/^[A-Za-z]+$/.test(nomCagnotte)) {
      newErrors.nomCagnotte =
        "Le nom de la cagnotte doit contenir uniquement des lettres.";
    }

    // Vérification pour l'objectif initial de la cagnotte (uniquement des chiffres)
    if (!/^[0-9]+$/.test(objectifInitial)) {
      newErrors.objectifInitial =
        "L'objectif initial de la cagnotte doit contenir uniquement des chiffres.";
    }

    // Vérification pour le don suggéré (uniquement des chiffres et inférieur à l'objectif initial)
    if (!/^[0-9]+$/.test(donSuggere)) {
      newErrors.donSuggere =
        "Le don suggéré doit contenir uniquement des chiffres.";
    } else if (parseInt(donSuggere) >= parseInt(objectifInitial)) {
      newErrors.donSuggere =
        "Le don suggéré doit être inférieur à l'objectif initial de la cagnotte.";
    }

    // Vérification pour la date limite des participations (supérieure à la date actuelle)
    if (dateLimite && dateLimite <= new Date()) {
      newErrors.dateLimite =
        "La date limite des participations doit être supérieure à la date actuelle.";
    }

    // Mise à jour des erreurs
    setErrors(newErrors);

    // Vérification finale avant soumission
    if (Object.keys(newErrors).length === 0) {
      // Soumission du formulaire ou autre action
      setIsSubmitting(true);

      // Redirection vers la page de résumé
    }
  };
*/
  return (
    <div>
      <div className="formulaire-cagnotte">
        <h2>Ouvrir une cagnotte</h2>

        <ul>
          <li>
            <label htmlFor="nom-cagnotte">Nom de la cagnotte </label>
            <input
              type="text"
              id="nom-cagnotte"
              value={nomCagnotte}
              onChange={(e) => setNomCagnotte(e.target.value)}
            />
          </li>

          <li>
            <label htmlFor="objectif-initial">
              Objectif initial de la cagnotte
            </label>
            <input
              type="text"
              id="objectif-initial"
              value={objectifInitial}
              onChange={(e) => setObjectifInitial(e.target.value)}
            />
          </li>

          <li>
            <label htmlFor="don-suggere">
              Don suggéré
              <span className="infoBulle" title="Don suggéré par participant">
                <span className="infoBulle-circle"></span>
                <span className="infoBulle-icon">?</span>
              </span>
            </label>
            <input
              type="text"
              id="don-suggere"
              value={donSuggere}
              onChange={(e) => setDonSuggere(e.target.value)}
            />
          </li>

          <li>
            <label htmlFor="date-limite">
              Date limite des participations
              <span
                className="infoBulle"
                title="Date avant laquelle vous souhaitez avoir reçu vos participations"
              >
                <span className="infoBulle-circle"></span>
                <span className="infoBulle-icon">?</span>
              </span>
            </label>
            <li>
              <DatePicker
                selected={dateLimite}
                onChange={(date) => setDateLimite(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Sélectionnez une date"
                locale="fr"
              />
            </li>
          </li>

          <li>
            <label htmlFor="masquer-montant-global">
              Masquer le montant global
              <span
                className="infoBulle"
                title="Le montant global de la cagnotte ne sera pas affiché au public sur la page de cette dernière."
              >
                <span className="infoBulle-circle"></span>
                <span className="infoBulle-icon">?</span>
              </span>
            </label>
            <input
              type="checkbox"
              id="masquer-montant-global"
              checked={masquerMontantGlobal}
              onChange={() => setMasquerMontantGlobal(!masquerMontantGlobal)}
            />
          </li>

          <li>
            <label htmlFor="masquer-participations">
              Masquer les participations
              <span
                className="infoBulle"
                title="Le détail des montants des participations ne sera pas affiché au public sur la page cagnotte."
              >
                <span className="infoBulle-circle"></span>
                <span className="infoBulle-icon">?</span>
              </span>
            </label>
            <input
              type="checkbox"
              id="masquer-participations"
              checked={masquerParticipations}
              onChange={() => setMasquerParticipations(!masquerParticipations)}
            />
          </li>

          <li>
            <label htmlFor="masquer-participants">
              Masquer les participants
              <span
                className="infoBulle"
                title="Les participants ne seront pas visibles au public sur la page de la cagnotte."
              >
                <span className="infoBulle-circle"></span>
                <span className="infoBulle-icon">?</span>
              </span>
            </label>
            <input
              type="checkbox"
              id="masquer-participants"
              checked={masquerParticipants}
              onChange={() => setMasquerParticipants(!masquerParticipants)}
            />
          </li>

          <li>
            <label htmlFor="notifications-email">
              Notifications par mail
              <span
                className="infoBulle"
                title="Vous serez informé des participations par email."
              >
                <span className="infoBulle-circle"></span>
                <span className="infoBulle-icon">?</span>
              </span>
            </label>
            <input
              type="checkbox"
              id="notifications-email"
              checked={notificationsEmail}
              onChange={() => setNotificationsEmail(!notificationsEmail)}
            />
          </li>

          <li>
            <label htmlFor="description">Description de la cagnotte</label>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </li>
        </ul>
        <button type="submit" onClick={handleOuvrirCagnotte}>
          Ouvrir une cagnotte
        </button>
      </div>
    </div>
  );
};

export default FormulaireCagnotte;
