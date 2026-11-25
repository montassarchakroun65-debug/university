import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere: filiere,
      anneeEtude: anneeEtude.trim(),
      groupe: groupe.trim(),
      ville: ville.trim(),
      image: image,
    };

    console.log("Nouvel étudiant ajouté :", nouvelEtudiant);

    onAjouterEtudiant(nouvelEtudiant);

    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Ajouter un étudiant</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Saisir le nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          minLength={2}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          placeholder="Saisir le prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          minLength={2}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="exemple@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="+216 99 999 999"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          pattern="[0-9+ ]{8,15}"
          title="8 à 15 caractères : chiffres, espaces ou +"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input
          type="text"
          id="anneeEtude"
          name="anneeEtude"
          placeholder="Ex : 2ème année"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          placeholder="Ex : GLSI 2"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          placeholder="Saisir la ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0]; 
            if (fichier) {
              setImage(URL.createObjectURL(fichier));
            }
          }}
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn-submit">
          Ajouter
        </button>
        <button type="reset" className="btn-reset">
          Réinitialiser
        </button>
      </div>
    </form>
  );
}

export default StudentForm;