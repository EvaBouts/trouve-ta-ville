import formatPopulation from "../../../../utils/formatPopulation/formatPopulation.js";

const Result = ({ name, zipCode, departmentCode, population, formatPop }) => {

    // condition pour changer ou non le format de population
    // si formatPop est true
    if (formatPop) {
        // alors au clic le changement de format abrégé sera effectué
        population = formatPopulation(population);
    } else {
        // sinon, le format au long sera effectué (avec gestion des espaces)
        population = new Intl.NumberFormat().format(population);
    };

    return (
        <li>
            <p><span>{name}</span> - <span>{departmentCode}</span></p>
            <p><span>Code postal : </span><span>{zipCode[0]}</span></p>
            <p><span>Population : </span><span>{population}</span></p>
        </li>
    )
}

export default Result;