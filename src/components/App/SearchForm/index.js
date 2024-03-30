import { useState } from "react";

const SearchForm = ({ setSearch }) => {

    // state pour attribuer à la valeur de l'input la valeur entrée par l'utilisateur
    const [inputValue, setInputValue] = useState('');

    // fonction qui permet de contrôler et d'écouter le champ de l'input 
    // chaque fois que l'utilisateur change la valeur de l'input 
    // on lui attribue cette nouvelle valeur
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    // console.log(inputValue);

    // fonction qui permet de changer la valeur du state search chaque fois que l'utilisateur soumet le form
    const handleSubmit = (event) => {
        // on prévient le comportement par défaut du submit
        event.preventDefault();
        // condition pour vérifier que l'utilisateur a rentré une valeur avant de modifier le state
        if (inputValue.length > 0) {
            // le setSearch attribue la nouvelle valeur de l'input
            // au state
            setSearch(inputValue);
            // on clear le champ une fois le submit effectué
            setInputValue('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Nom de la commune</label>
                <input onChange={handleChange} value={inputValue} id="search" type="test"></input>
                <button type="submit">Rechercher</button>
            </form>
        </div>
    )
}

export default SearchForm;