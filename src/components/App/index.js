import ListOfResults from "./ListOfResults";
import SearchForm from "./SearchForm";
import BackToTop from "./BackToTop";
import { useState, useEffect } from "react";

const App = () => {
    // state pour gérer le formulaire de recherche
    // permet de récupérer la valeur de l'input du form
    // grâce au set pour l'attribuer au state
    const [search, setSearch] = useState('');
    // console.log(search);
    // state pour stocker les données récupérée avec le call api
    // et pouvoir boucler dessus dans listOfResults
    const [cities, setCities] = useState([]);
    // state pour gérer l'affichage du chargement des données
    const [isLoading, setIsLoading] = useState(false);

    // call API
    const getCities = async (typeOfSearch) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://geo.api.gouv.fr/communes?${typeOfSearch}=${search}`);
            const citiesList = await response.json();
            setCities(citiesList);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            alert('Erreur de récupération des données')
        }
    }

    // useEffect pour définir quand faire le call API:
    // au changement du state search
    useEffect(() => {
        // définition du format que devra respecter la valeur de l'input de la recherche par code postal
        const zipCodeformat = /^(?:[0-8]\d|9[0-8])\d{3}$/;
        // condition pour appliquer le fetch en fonction du format de la valeur de l'input
        if (zipCodeformat.test(search)) {
            // si le format de valeur respecte les condition de format du code postal
            // on passe en paramètre de getCities la string qui correspond à la recherche par code postal
            getCities('codePostal');
            // sinon on lui passe la string qui correspond à la recherche par nom
        } else {
            getCities('nom');
        }
    }, [search])

    return (
        <div>
            <h1>Trouve ta ville</h1>
            <SearchForm setSearch={setSearch} />
            {isLoading && <p>Veuillez patienter...</p>}
            {!isLoading && <ListOfResults cities={cities} />}
            <BackToTop />
        </div>
    )
}

export default App;