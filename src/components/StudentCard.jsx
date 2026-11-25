import { useState } from "react";

function StudentCard(props) {
  // état : au départ les coordonnées sont masquées
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  // valeur par défaut si la ville n'est pas fournie
  const ville = props.ville || "Non renseignée";

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      {props.image && <img src={props.image} alt="Photo de l'étudiant" />}

      <h2>Fiche étudiant</h2>

      <p>
        <strong>Nom & Prénom :</strong> {props.prenom} {props.nom}
      </p>

      {coordonneesVisibles && (
        <>
          <p>
            <strong>Email :</strong> {props.email}
          </p>
          <p>
            <strong>Téléphone :</strong> {props.telephone}
          </p>
        </>
      )}

      <p>
        <strong>Filière :</strong> {props.filiere}
      </p>
      <p>
        <strong>Année :</strong> {props.anneeEtude}
      </p>
      <p>
        <strong>Groupe :</strong> {props.groupe}
      </p>
      <p>
        <strong>Ville :</strong> {ville}
      </p>

      <div className="buttons">
        <button onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        <a href={"mailto:" + props.email}>
          <button>Contacter</button>
        </a>

        <button onClick={() => props.onModifier(props.id)}>Modifier</button>

        <button onClick={() => props.onSupprimer(props.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default StudentCard;