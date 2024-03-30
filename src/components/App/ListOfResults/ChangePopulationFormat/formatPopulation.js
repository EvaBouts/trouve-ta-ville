const formatPopulation = (population) => {
    // si la population est supérieure à 1 million, on modifie son format 
    if (population > 1_000_000) return (population / 1_000_000).toFixed(2).replace('.', ',') + ' M';
    // si la population est supérieure à mille, on modifie son format 
    if (population > 1_000) return (population / 1_000).toFixed(2).replace('.', ',') + ' K';
    // si la population est inférieure à 1_000, on la retourne telle en string
    return population + '';
}

export default formatPopulation;