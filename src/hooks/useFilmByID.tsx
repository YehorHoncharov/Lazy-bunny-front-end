import { useEffect, useState } from "react";
import { cards } from "../pages/AllMovies/AllMovies";

export function useFilmByID(id: number) {
    const [film, setFilm] = useState(() => cards.find(card => card.id === id) || null); 

    useEffect(() => {
        const selectedFilm = cards.find(card => card.id === id); 
        setFilm(selectedFilm || null);
    }, [id]);

    return { film }; 
}
