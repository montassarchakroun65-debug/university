import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import Footer from "./components/Footer.jsx";

import saraImage from "./assets/Sara.jpg";
import maremImage from "./assets/Marem.jpg";
import montassarImage from "./assets/montassar.jpeg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Montassar",
      nom: "Chakroun",
      email: "montassarchakroun65@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Moknine",
      image: montassarImage,
    },
    {
      id: 2,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Licence Computer Science",
      anneeEtude: "1ère année",
      groupe: "LCS 1",
      ville: "Sousse",
      image: saraImage,
    },
    {
      id: 3,
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Licence Business Computing",
      anneeEtude: "2ème année",
      groupe: "LBC 2",
      image: maremImage,
      // pas de ville -> valeur par défaut dans StudentCard
    },
  ]);

  const [recherche, setRecherche] = useState("");
  // TP4 : le formulaire est affiché ou masqué avec cet état
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  // TP4 : reçoit l'étudiant envoyé par StudentForm
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(), // identifiant unique
    };

    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
    setAfficherFormulaire(false); // referme le formulaire après l'ajout
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.id !== id));
  }

  function modifierEtudiant(id) {
    const nouveauPrenom = prompt("Nouveau prénom :");

    if (nouveauPrenom && nouveauPrenom.trim() !== "") {
      setEtudiants(
        etudiants.map((etudiant) => {
          if (etudiant.id === id) {
            return { ...etudiant, prenom: nouveauPrenom.trim() };
          }
          return etudiant;
        })
      );
    }
  }

  const texte = recherche.toLowerCase();
  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      etudiant.nom.toLowerCase().includes(texte) ||
      etudiant.prenom.toLowerCase().includes(texte) ||
      etudiant.filiere.toLowerCase().includes(texte)
  );

  return (
    <div>
      <Header />
      <Navbar />

      <div className="container">
        <div className="actions">
          <input
            type="text"
            placeholder="Rechercher (nom, prénom, filière)..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />

          <button onClick={() => setAfficherFormulaire(!afficherFormulaire)}>
            {afficherFormulaire ? "Fermer le formulaire" : "+ Ajouter un étudiant"}
          </button>
        </div>

        {afficherFormulaire && (
          <StudentForm onAjouterEtudiant={ajouterEtudiant} />
        )}

        <div className="liste">
          {etudiantsFiltres.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              id={etudiant.id}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              anneeEtude={etudiant.anneeEtude}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              image={etudiant.image}
              onSupprimer={supprimerEtudiant}
              onModifier={modifierEtudiant}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;