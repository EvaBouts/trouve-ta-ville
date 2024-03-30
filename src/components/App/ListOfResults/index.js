import ChangePopulationFormat from "./ChangePopulationFormat";
import Result from "./Result";
import { useState } from "react";

const ListOfResults = ({ cities }) => {

    // state pour gérer le changement de format de population
    const [formatPop, setFormatPop] = useState(false);

    return (
        <div>
            <ChangePopulationFormat setFormatPop={setFormatPop} formatPop={formatPop} />
            <ul>
                {
                    cities.map((city) => {
                        return (
                            <Result
                                key={city.code}
                                name={city.nom}
                                zipCode={city.codesPostaux}
                                departmentCode={city.codeDepartement}
                                population={city.population}
                                formatPop={formatPop}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListOfResults;