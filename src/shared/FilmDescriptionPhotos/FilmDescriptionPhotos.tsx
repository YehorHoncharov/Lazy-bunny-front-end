import { useEffect, useState } from "react";
import { useGetAllFilms } from "../../hooks/useGetAllFilms";
import { IFilm } from "../../hooks/types";
import { ProgressBar } from "react-loader-spinner";
import { Card } from "../CardBunny/CardBunny";

import "./FilmDescriptionPhotos.css";

interface IFilmGenresProps {
  film: IFilm;
}

export function FilmDescriptionPhotos({ film }: IFilmGenresProps) {

  const { films, isLoading, error } = useGetAllFilms();
  const [filteredActors, setFilteredActors] = useState<IFilm[]>([]);

  useEffect(() => {
    if (film?.Starring?.length > 0) {
      const filmActors = film.Starring.map((actor) => actor.surname);

      const filtered = films.filter((movie) =>
        movie.Starring.some((actor) => filmActors.includes(actor.surname))
      );
      setFilteredActors(filtered);
    } else {
      setFilteredActors(films);
    }
  }, [film, films]);

  return(
    <div>
    {filteredActors.map((film) => {
      return (
        <div key={film.id}>
          <div className="film-textDiv">
            <h1 className="description">Description</h1>
            <p id="film-font">{film.Year}, {film.Genres.map((genre)=>{return genre.name})}, {film.Genres.map((genre)=>{return genre.name})}, {film.Country}</p>
            <p id="film-font">{film.Screenwriter}</p> 
            <p id="film-font">{film.ReleaseDate}</p>
            <p id="film-font">{film.Duration}</p>
            <p id="film-font">{film.FilmCompany}</p>
            <p id="film-font">{film.Description}</p>
          </div>
  
          <div className="film-photo">
            <h1 id="top-cast">Top Cast</h1>
  
            <div className="film-photos">
              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>

              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>

              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>

              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>

              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>

              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>

              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>

              <div className="film-all">
                <img id="film-photo" src="/static/img/actorPhoto.avif" alt="" />
                <p id="top-cast-font">zxc</p>
              </div>
            </div>
          </div>
  
            <div className="film-photo">
                <h1 id="top-cast">Photos</h1>
    
                <div className="film-photos">
                <img width={453} height={254} src="/static/img/Home-Still.jpg" alt="" />
                <img width={453} height={254} src="/static/img/aboutPhoto.jpg" alt="" />
                <img width={453} height={254} src="/static/img/Home-Still.jpg" alt="" />
                <img width={453} height={254} src="/static/img/aboutPhoto.jpg" alt="" />
                </div>
            </div>

            <h1 id="top-cast" className="morelikethis">More like this</h1>

            <div className="cardsList">
                {isLoading === false ? (
                error === undefined ? (
                    filteredActors.map((card) => {
                    return (
                        <Card film={card}></Card>
                    );
                    })
                ) : (
                    <div>{error}</div>
                )
                ) : (
                <div>
                    <ProgressBar
                    visible={true}
                    height="80"
                    width="80"
                    borderColor="purple"
                    barColor="green"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                </div>
                )}
            </div>
        </div>
      );
    })}
  </div>
  
  )

}

