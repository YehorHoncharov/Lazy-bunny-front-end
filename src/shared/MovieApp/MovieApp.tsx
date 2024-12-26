import { AllMovies } from "../../pages/AllMovies/AllMovies";
import { FilmPage } from "../FilmPage/FilmPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import "./MovieApp.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// создаем компонент App
export function MovieApp(){
        return(
            <div>
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
