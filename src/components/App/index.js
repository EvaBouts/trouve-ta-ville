import ListOfResults from "./ListOfResults";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";

const dataTest = [{
    "nom": "Nantes",
    "code": "44109",
    "codeDepartement": "44",
    "codesPostaux": [
        "44000",
        "44100",
        "44200",
        "44300"
    ],
    "population": 323204,
},
{
    "nom": "Nantes-en-Ratier",
    "code": "38273",
    "codeDepartement": "38",
    "codesPostaux": [
        "38350"
    ],
    "population": 465,
}]

const App = () => {
    // state pour gérer le formulaire de recherche
    // permet de récupérer la valeur de l'input du form
    // grâce au set pour l'attribuer au state
    const [search, setSearch] = useState('');
    // console.log(search);
    // state pour stocker les données récupérée avec le call api
    // et pouvoir boucler dessus dans listOfResults
    const [cities, setCities] = useState([]);

    const getCities = async (typeOfSearch) => {
        try {
            const response = await fetch(`https://geo.api.gouv.fr/communes?nom=${search}`);
            const citiesList = await response.json();
            setCities(citiesList);
        } catch (error) {
            console.error(error);
            alert('Erreur de récupération des données')
        }
    }

    useEffect(() => { getCities() }, [search])

    return (
        <div>
            <h1>Trouve ta ville</h1>
            <SearchForm setSearch={setSearch} />
            <ListOfResults cities={cities} />
        </div>
    )
}

export default App;