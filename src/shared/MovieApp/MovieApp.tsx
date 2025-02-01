import { createContext, useState } from "react";
import { AllMovies } from "../../pages/AllMovies/AllMovies";
import { FilmPage } from "../../pages/FilmPage/FilmPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import "./MovieApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IFilm } from "../../hooks/types";

interface IRecentFilms {
  addFilms: (film: IFilm) => void;
  recentFilms: IFilm[];
  // recomendFilms: IFilm[];
}

const initialValue: IRecentFilms = {
  addFilms: (film: IFilm) => {},
  recentFilms: [],
};

export const recentFilmsContext = createContext<IRecentFilms>(initialValue);

export function MovieApp() {
  const [recentFilms, setRecentFilms] = useState<IFilm[]>([]);

  function addFilms(film: IFilm){
    const filmsArray = [...recentFilms, film]

    if (filmsArray.length > 7){
      filmsArray.shift()
    }
    setRecentFilms(filmsArray)

  }

  return (
    
      <div>
        <recentFilmsContext.Provider value={{addFilms, recentFilms}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movies" element={<AllMovies></AllMovies>} />
            <Route path="/movie/:id" element={<FilmPage></FilmPage>} />
          </Routes>
        </BrowserRouter>
        </recentFilmsContext.Provider>
      </div>
    
  )
}
