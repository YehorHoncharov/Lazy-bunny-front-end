import { Link } from 'react-router-dom'
import './CardBunny.css'
import { IFilm } from '../../hooks/useGetAllFilms'


export function Card(props: IFilm){
    return (
        <Link to={`/movie/${props.id}`} >
            <div className="card">

                <div>
                    <button className="saveButton"><img src="/static/img/SaveCard.png" alt="" /></button>
                    <img src={props.Img} alt="" className='movieImg'/>
                </div>

                <div className='rating'>
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/HalfStar.png" alt="" />
                    <p>{props.Rating}/5</p>
                </div>

                <div>
                    <p className='movieLables movieName'>{props.Name}</p>
                </div>



                <div>
                    <p className='movieLables movieData'>{props.Year}, {props.Genre}</p>
                    
                    
                    
                </div>
                <div className='buttonAndMood'>
                    <button className='buttonTrailer'><img src="/static/img/triangleCardBunny.png" alt="" /> <p>Trailer</p></button>
                    <img src="" alt="" />
                    <img src={props.MoodImg} alt="" />
                </div>
    
                
            </div>
        </Link>
    )
}