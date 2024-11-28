
interface ICARDSProps {
    name: string,
    img: string,
    rating: number,
    year: number,
    genre: string,
    moodImg: string,
}

export function Card(props: ICARDSProps){
    return (
        <div className="card">

            <div>
                <img src="/static/SaveCard.png" alt="" />
                <img src={props.img} alt="" />
            </div>

            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <p>{props.rating}</p>
            </div>

            <div>
                <p>{props.name}</p>
            </div>



            <div>
                <p>{props.genre}</p>
                <p>{props.year}</p>
                
            </div>
            <div>
            <button>Trailer</button>
            <img src={props.moodImg} alt="" />
            </div>
   
            
        </div>
    )
}