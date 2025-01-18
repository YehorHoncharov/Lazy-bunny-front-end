import { Link } from "react-router-dom"
import "./FilmMainFrame.css"


export function FilmMainFrame(){
    return (
        <div className="filmMainFrame">
            <div className="filmFrame">

                <div className="movieInformationBlock">
                    <div className="information">
                        <h1 id="filmRating">User Rating: 10/10</h1>
                        <h1 id="filmName">Django</h1>
                        <h1 id="filmYear">2012</h1>
                    </div>

                    <div className="genresOfFilms">
                        <Link to={""} className="genre">Wasted</Link>
                        <Link to={""} className="genre">Thriller</Link>
                        <Link to={""} className="genre">Comedy</Link>
                        <Link to={""} className="genre">Action</Link>
                        <Link to={""} className="genre">Drama</Link>
                        <Link to={""} className="genre">Thriller</Link>
                    </div>
                </div>

                <div className="buttonInfo">
                    <img src="" alt="" className='movieImg'/>
                    <select name="seeMore" id="seeMore">
                        <option value="SeeMore" disabled selected>SeeMore</option>
                    </select>
                    <button className='buttonFilmTrailer'><img src="/static/img/triangleCardBunny.png" alt="" /> <p>Trailer</p></button>
                </div>
            </div>
        </div>
    )
}