import { useState, useEffect } from "react";

const BackToTop = () => {

    // state pour gérer l'affichage ou non du bouton Back-to-top
    const [visibleButton, setVisibleButton] = useState(false);
    console.log(visibleButton);

    // fonction pour gérer la visibilité du bouton back-to-top en fonction du scroll
    const toggleVisibleButton = () => {
        // si le scroll dépasse 300px, le bouton apparaît
        if (window.scrollY > 300) {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    };

    useEffect(() => {
        // ajout d'un écouteur d'événement pour rendre le bouton visible lorsque le scroll dépasse 300px
        window.addEventListener('scroll', toggleVisibleButton);
    }, [])

    // fonction pour faire défiler la page vers le haut avec la méthode scrollTo
    const scrollToTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            });
    };

    return (
        <button onClick={scrollToTop} style={{ display: visibleButton ? 'inline' : 'none' }}>Haut de page</button>
    )
}

export default BackToTop;