import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="container mt-4">
        <h1 className="text-center">Gestion Utilisateur React</h1>

        <div className="card p-3 mb-3">
          <h2>Formulaire Contrôlé</h2>
          <FormulaireControle />
        </div>

        <div className="card p-3 mb-3">
          <h2>Formulaire Non-Contrôlé</h2>
          <FormulaireNonControle />
        </div>

        <div className="card p-3 mb-3">
          <h2>Convertisseur de Température</h2>
          <TemperatureConvertor />
        </div>

        <div className="card p-3 mb-3">
          <h2>Profil Utilisateur</h2>
          <Profil />
        </div>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;