import { ReactNode } from "react"

export interface IFilm{
    id: number,
    Name: string,
    ReleaseDate: string,
    Year: number,
    Genres: IGenre[],
    Country: string,
    Director: string,
    Duration: string,
    Screenwriter: string,
    Description: string,
    Language: string,
    FilmCompany: string,
    Starring: IActor[],
    MoodImg: string,
    Img: string,
    Rating: number,
    Comments: IComment[]
}
export interface IComment{
    author: string,
    text: string,
    children?: ReactNode
    commentId: number
}

export interface IActor{

    name: string,
    surname: string
}

export interface IGenre{

    name: string,
}