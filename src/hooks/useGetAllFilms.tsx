import { useEffect, useState } from "react"

export interface IFilm{
    id: number,
    ReleaseDate: number,
    Year: number,
    Genre: string,
    Country: string,
    Director: string,
    Duration: string,
    Screenwriter: string,
    Language: string,
    FilmCompany: string,
    Starring: string,
}

export function useGetAllFilms(){
    const [films, setFilms] = useState<IFilm[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
        async function getFilms(){
            try{
                setIsLoading(true)
                const response = await fetch('')
                const films = await response.json()
                setFilms(films)
            }
            catch(error){
                if (error instanceof Error){
                    setError(error.message)
                }
            }
            finally{
                setIsLoading(false)
            }
            
        }
        getFilms()
        
    },[])
    return {films: films, isLoading: isLoading, error: error}
}