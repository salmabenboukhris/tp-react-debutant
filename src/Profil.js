import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };
const connexion = () => {
  setUtilisateur({ nom: 'Alice', connecte: true });
};
  return (
    <div>
      {utilisateur.connecte ? (
        <>
          <p>Bienvenue, {utilisateur.nom}</p>

          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        
        
<p>Veuillez vous connecter.</p>

      )}
      {utilisateur.connecte ? (
  <>
    <p>Bienvenue {utilisateur.nom}</p>
    <button className="btn btn-danger" onClick={deconnexion}>
      Se déconnecter
    </button>
  </>
) : (
  <>
    <p>Utilisateur déconnecté</p>
    <button className="btn btn-success" onClick={connexion}>
      Se connecter
    </button>
  </>
)}
    
</div>
  );
}

export default Profil;
