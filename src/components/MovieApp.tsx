import { useEffect, useState } from "react";
import { AllMovies } from "./AllMovies/AllMovies";
import { MainPage } from "./MainPage/MainPage";
import "./MovieApp.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"


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
                        {/* <Route path="/movie/all" element={}></Route> */}
                    </Routes>
                
                </BrowserRouter>
            </div>
        )
}
