import { Link } from 'react-router-dom'
import './CardBunny.css'
import { IFilm } from '../../hooks/types'

interface ICardFilm{
    film: IFilm
}

export function Card(props: ICardFilm){
    const {film} = props
    
    return (
        <Link to={`/movie/${film.id}`} >
            <div className="card">

                <div>
                    <button className="saveButton"><img src="/static/img/SaveCard.png" alt="" /></button>
                    <img src={film.Img} alt="" className='movieImg'/>
                </div>

                <div className='rating'>
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/HalfStar.png" alt="" />
                    <p>{film.Rating}/5</p>
                </div>

                <div>
                    <p className='movieLables movieName'>{film.Name}</p>
                </div>



                <div>
                    <p className='movieLables movieData'>{film.Year}
                    </p>
                    
                    
                    
                </div>
                <div className='buttonAndMood'>
                    <button className='buttonTrailer'><img src="/static/img/triangleCardBunny.png" alt="" /> <p>Trailer</p></button>
                    <img src="" alt="" />
                    <img src={film.MoodImg} alt="" />
                </div>
    
                
            </div>
        </Link>
    )
}