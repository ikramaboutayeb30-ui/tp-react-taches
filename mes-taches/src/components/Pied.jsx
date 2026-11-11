
function Pied({ auteur }) {
    const annee = new Date().getFullYear();

    return (
        <footer>
            TP React – réalisé par {auteur} – {annee}
        </footer>
    );
}

export default Pied;