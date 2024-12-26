import { Link } from 'react-router-dom'
import './CardBunny.css'


export interface ICARDSProps {
    id: number,
    name: string,
    img: string,
    rating: number,
    year: number,
    genre: string,
    description: string,
    moodImg: string,
}

export function Card(props: ICARDSProps){
    return (
        <Link to={`/movie/${props.id}`} >
            <div className="card">

                <div>
                    <button className="saveButton"><img src="/static/img/SaveCard.png" alt="" /></button>
                    <img src={props.img} alt="" className='movieImg'/>
                </div>

                <div className='rating'>
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/FullStar.png" alt="" />
                    <img src="/static/img/HalfStar.png" alt="" />
                    <p>{props.rating}/5</p>
                </div>

                <div>
                    <p className='movieLables movieName'>{props.name}</p>
                </div>



                <div>
                    <p className='movieLables movieData'>{props.year}, {props.genre}</p>
                    
                    
                    
                </div>
                <div className='buttonAndMood'>
                    <button className='buttonTrailer'><img src="/static/img/triangleCardBunny.png" alt="" /> <p>Trailer</p></button>
                    <img src="" alt="" />
                    <img src={props.moodImg} alt="" />
                </div>
    
                
            </div>
        </Link>
    )
}