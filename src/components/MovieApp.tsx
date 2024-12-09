import { AllMovies } from "./AllMovies/AllMovies";
import { MainPage } from "./MainPage/MainPage";
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
                        

                    </Routes>
                
                </BrowserRouter>
            </div>
        )
}
