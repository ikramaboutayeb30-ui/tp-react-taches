import Entete from './components/Entete';
import Pied from './components/Pied';
import Carte from './Carte';
import ListeTaches from './components/ListeTaches';

const TACHES = [
    { id: 1, titre: 'Installer Node.js et Vite', terminee: true },
    { id: 2, titre: 'Comprendre les composants', terminee: true },
    { id: 3, titre: 'Passer des données avec les props', terminee: false },
    { id: 4, titre: "Gérer l'état avec useState", terminee: false },
];

function App() {
    return (
        <>
            <Entete
                titre="Ma liste de tâches"
                sousTitre="Mon premier projet React"
            />

            <Carte titre="Ma liste">
                <ListeTaches taches={TACHES} />
            </Carte>

            <Pied auteur="Ikram Aboutayeb" />
        </>
    );
}

export default App;