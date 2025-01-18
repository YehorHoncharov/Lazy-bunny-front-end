import { AllMovies } from "../../pages/AllMovies/AllMovies";
import { FilmPage } from "../../pages/FilmPage/FilmPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import "./MovieApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// создаем компонент App
export function MovieApp() {
  return (
    <div>
      <p></p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<AllMovies></AllMovies>} />
          <Route path="/movie/:id" element={<FilmPage></FilmPage>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
