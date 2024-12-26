import { useFilmByID } from "../../hooks/useFilmByID"
import { Link, useParams } from "react-router-dom"
import { Header } from "../Header/Header"

import "./FilmPage.css"
import { Footer } from "../Footer/Footer"
export function FilmPage(){

    const params = useParams()
    const { film } = useFilmByID(Number(params.id))
    
    return (
        <div className="filmPage">
            <Header></Header>
            <div className="filmMainDiv">
                <h1 id="filmFont">{film?.name}</h1>
                <div className="filmInfoDiv">

                    <div className="filmImgDiv">
                       <img id="filmIMG" src={film?.img} alt="" /> 
                       <div className='buttonAndMood'>
                            <button className='buttonTrailer'><img src="/static/img/triangleCardBunny.png" alt="" /> <p>Trailer</p></button>
                        </div>
                    </div>

                    <div className="filmTextDiv">

                        <p id="fontP">Release date:</p>
                        <p id="fontP">Year: {film?.year}</p>
                        <p id="fontP">Genre: {film?.genre}</p>
                        <p id="fontP">Country: </p>
                        <p id="fontP">Director:</p>
                        <p id="fontP">Duration:</p>
                        <p id="fontP">Screenwriter:</p>
                        <p id="fontP">Language:</p>
                        <p id="fontP">Film company: </p>
                        <p id="fontP">Starring: </p>

                        <div className='rating'>
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/FullStar.png" alt="" />
                            <img src="/static/img/HalfStar.png" alt="" />
                            <p id="fontStar">{film?.rating}/5</p>
                        </div>
                    </div>

                </div>

                <div className="filmDescriptionDiv">

                    <div className="filmTop">
                        <h1 id="filmFont">Description</h1>
                    </div>

                    <div className="filmTextDescription">
                        <p id="fontD">{film?.description}</p>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}