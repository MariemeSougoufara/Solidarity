import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  // Etats pour stocker les erreurs
  const [nomCagnotteError, setNomCagnotteError] = useState("");
  const [donSuggereError, setDonSuggereError] = useState("");
  const [objectifInitialError, setObjectifInitialError] = useState("");

  // Si erreurs, ne pas valider
  const [isFormValid, setIsFormValid] = useState(false);
  const location = useLocation();
  const formData = location.state?.formData || {};

  // Validation avec une regex
  const handleChangeNomCagnotte = (e) => {
    const value = e.target.value;

    const regex = /^[A-Za-z\s]*$/; // Lettres et espaces autorisés
    if (!regex.test(value)) {
      setNomCagnotteError(
        "Le nom de la cagnotte doit contenir uniquement des lettres."
      );
    } else {
      setNomCagnotteError("");
    }

    setNomCagnotte(value);
    setIsFormValid(!!(nomCagnotteError || donSuggereError || objectifInitial));
  };

  const handleChangeDonSuggere = (e) => {
    const value = e.target.value;

    const regex = /^[0-9]*$/; // Chiffres uniquement
    if (!regex.test(value)) {
      setDonSuggereError(
        "Le don suggéré doit contenir uniquement des chiffres."
      );
    } else if (parseInt(value) >= parseInt(objectifInitial)) {
      setDonSuggereError(
        "Le don suggéré doit être inférieur à l'objectif initial de la cagnotte."
      );
    } else {
      setDonSuggereError("");
    }

    setDonSuggere(value);
    setIsFormValid(!!(nomCagnotteError || donSuggereError || objectifInitial));
  };

  const handleChangeObjectifInitial = (e) => {
    const value = e.target.value;

    const regex = /^[0-9]*$/; // Chiffres uniquement
    if (!regex.test(value)) {
      setObjectifInitialError(
        "L'objectif initial de la cagnotte doit contenir uniquement des chiffres."
      );
    } else {
      setObjectifInitialError("");
    }

    setObjectifInitial(value);
    setIsFormValid(!!(nomCagnotteError || donSuggereError || objectifInitial));
  };
  // Fin Validation avec une regex

  const handleOuvrirCagnotte = () => {
    const selectedDate = dateLimite ? new Date(dateLimite) : null;

    // Vérification de la validité du formulaire avant de soumettre
    if (!nomCagnotteError && !donSuggereError && !objectifInitialError) {
      // Récupérer les données du formulaire
      const formData = {
        nomCagnotte,
        objectifInitial,
        description,
        donSuggere,
        masquerMontantGlobal,
        masquerParticipations,
        masquerParticipants,
        notificationsEmail,
      };

      // Soumission du formulaire
      navigate("/ResumeCagnotte", { state: { formData } });
    }
  };

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
              onChange={handleChangeNomCagnotte}
            />
            {nomCagnotteError && (
              <p className="error-message">{nomCagnotteError}</p>
            )}
          </li>

          <li>
            <label htmlFor="objectif-initial">
              Objectif initial de la cagnotte (XOF)
            </label>
            <input
              type="text"
              id="objectif-initial"
              value={objectifInitial}
              onChange={handleChangeObjectifInitial}
            />
            {objectifInitialError && (
              <p className="error-message">{objectifInitialError}</p>
            )}
          </li>

          <li>
            <label htmlFor="don-suggere">
              Don suggéré (XOF)
              <span className="infoBulle" title="Don suggéré par participant">
                <span className="infoBulle-circle"></span>
                <span className="infoBulle-icon">?</span>
              </span>
            </label>
            <input
              type="text"
              id="don-suggere"
              value={donSuggere}
              onChange={handleChangeDonSuggere}
            />
            {donSuggereError && (
              <p className="error-message">{donSuggereError}</p>
            )}
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
          </li>
          <li>
            <DatePicker
              selected={dateLimite ? new Date(dateLimite) : null}
              onChange={(date) => setDateLimite(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Sélectionnez une date"
              locale="fr"
            />
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
        <button
          type="submit"
          onClick={handleOuvrirCagnotte}
          disabled={!isFormValid}
        >
          Ouvrir une cagnotte
        </button>
      </div>
    </div>
  );
};

export default FormulaireCagnotte;
