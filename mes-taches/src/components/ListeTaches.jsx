
function ListeTaches() {
    return (
        <ul className="liste-taches">
            <li className="tache">
                <span className="titre">Comprendre les composants</span>
            </li>

            <li className="tache terminee">
                <span className="titre">Créer les composants React</span>
            </li>

            <li className="tache">
                <span className="titre">Apprendre JSX</span>
            </li>
        </ul>
    );
}

export default ListeTaches;
