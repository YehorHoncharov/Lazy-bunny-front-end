import { AllMovies } from "../../pages/AllMovies/AllMovies";
import { FilmPage } from "../FilmPage/FilmPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import "./MovieApp.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";



// создаем компонент App
export function MovieApp(){
    const [data, setData] = useState(null)
    
    useEffect(() =>{
        fetch('/movie/all')
        .then(response => response.json())
        .then(response => setData(response.message))
    })
    
        return(
            <div>
                <p>
                    { !data ? "Loading..." : data }
                </p>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/movies" element={<AllMovies></AllMovies>} />
                        <Route path="/movie/:id" element={<FilmPage></FilmPage>}/>

                    </Routes>
                
                </BrowserRouter>
            </div>
        )
}
