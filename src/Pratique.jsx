import { useState } from "react";

function Pratique() {
  const [formArray, setFormArray] = useState({
    nom: "",
    email: "",
  });
  return (
    <div className="card">
      <h2 className="card-title">Formulaire Simple</h2>
      <form id="simpleForm">
        <div className="form-group">
          <label>Nom</label>
          <input
            value={formArray.nom}
            onChange={(e) => {
              setFormArray({ ...formArray, nom: e.target.value });
            }}
            type="text"
            id="name"
            name="name"
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            value={formArray.email}
            onChange={(e) => {
              setFormArray({ ...formArray, email: e.target.value });
            }}
            type="email"
            id="email"
            name="email"
            placeholder="Entrez votre email"
            required
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Pratique;
