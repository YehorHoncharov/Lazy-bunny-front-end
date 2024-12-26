import { useFilmByID } from "../../hooks/useFilmByID"
import { useParams } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

import "./FilmPage.css"

export function FilmPage(){

    const params = useParams()
    const { film } = useFilmByID(Number(params.id))
    
    return (
        <div className="filmPage">
            <Header></Header>
            <div className="filmMainDiv">
                <h1 id="filmFont">{film?.Name}</h1>
                <div className="filmInfoDiv">

                    <div className="filmImgDiv">
                       <img id="filmIMG" src={film?.Img} alt="" /> 
                       <div className='buttonAndMood'>
                            <button className='buttonTrailer'><img src="/static/img/triangleCardBunny.png" alt="" /> <p>Trailer</p></button>
                        </div>
                    </div>

                    <div className="filmTextDiv">

                        <p id="fontP">Release date:</p>
                        <p id="fontP">Year: {film?.Year}</p>
                        <p id="fontP">Genre: {film?.Genre}</p>
                        <p id="fontP">Country: {film?.Country}</p>
                        <p id="fontP">Director:{film?.Director}</p>
                        <p id="fontP">Duration: {film?.Duration}</p>
                        <p id="fontP">Language:{film?.Language}</p>
                        <p id="fontP">Film company: {film?.FilmCompany}</p>
                        <p id="fontP">Starring: {film?.Starring}</p>
                        <p id="fontP">Screenwriter: {film?.Screenwriter}</p>

                        <div className='rating'>
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/HalfStar.png" alt="" />
                            <p id="fontStar">{film?.Rating}/5</p>
                        </div>
                    </div>

                </div>

                <div className="filmDescriptionDiv">

                    <div className="filmTop">
                        <h1 id="filmFont">Description</h1>
                    </div>

                    <div className="filmTextDescription">
                        <p id="fontD">{film?.Description}</p>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}