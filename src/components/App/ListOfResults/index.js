import ChangePopulationFormat from "./ChangePopulationFormat";
import Result from "./Result";

const ListOfResults = ({ cities }) => {
    return (
        <div>
            <ChangePopulationFormat />
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
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListOfResults;