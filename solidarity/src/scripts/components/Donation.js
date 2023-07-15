import { useState } from "react";
import "./donation.css";
import FormInput from "./formInput";
import { Link } from 'react-router-dom';

function Donation() {
  const [values, setValues] = useState({
    association: "",
    montant: "",
  });
  const [donationSuccess, setDonationSuccess] = useState(false); // Nouvel état

  const inputs = [
    {
      id: 1,
      name: "association",
      type: "select",
      label: "Association",
      required: true,
      options: ["FreePalestine", "EduKids", "Share", "Ndimbaal", "sunuyGone"],
    },
    {
      id: 2,
      name: "montant",
      type: "number",
      placeholder: "Montant",
      label: "Montant",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost/api/donation.php";

    const formData = new FormData();
    inputs.forEach((input) => {
      formData.append(input.name, values[input.name]);
    });

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setDonationSuccess(true); // Mettre à jour l'état
        } else {
          setDonationSuccess(false); // Mettre à jour l'état
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
        setDonationSuccess(false); // Mettre à jour l'état en cas d'erreur
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="donation">
      <form onSubmit={handleSubmit}>
        <h2>Une action, un impact, un Monde meilleur</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Faire un don</button>
        {donationSuccess && (
          <div>
            <span>Merci pour ce don </span>
            <span color="green">&#10004;</span>
            

          </div>
        )}
        

      </form>
    </div>
  );
}

export default Donation;
