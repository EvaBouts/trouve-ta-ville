const ChangePopulationFormat = ({ formatPop, setFormatPop }) => {

    // fonction pour gérer le changement de format au clic sur le bouton de changement de format
    const handleClick = () => {
        // affection de la valeur inverse de formatPop à sa valeur courante (false par défaut)
        setFormatPop(!formatPop)
    }
    // console.log(formatPop)

    return (
        <div>
            <p>Résultats</p>
            <button type="button" onClick={handleClick}>Changer le format</button>
        </div>
    )
}

export default ChangePopulationFormat;