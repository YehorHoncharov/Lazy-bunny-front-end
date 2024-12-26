import { useEffect, useState } from "react"

export interface IFilm{
    id: number,
    Name: string,
    ReleaseDate: string,
    Year: number,
    Genre: string,
    Country: string,
    Director: string,
    Duration: string,
    Screenwriter: string,
    Description: string,
    Language: string,
    FilmCompany: string,
    Starring: string,
    MoodImg: string,
    Img: string,
    Rating: number,
}

export function useGetAllFilms(){
    const [films, setFilms] = useState<IFilm[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
        async function getFilms(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:3001/movie/all')
                const films = await response.json()
                setFilms(films)
                console.log(films)
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